import { LocationData, Branch } from './../interface/catalog';
import { CatalogService } from './../../services/catalog.service';
import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public openDropdownCOntainer = false;
  public catalogData: any;
  public catalogCountryData: any
  public countryName = 'Select Location'

  constructor(private _catalogService: CatalogService, private _route: Router) { }

  ngOnInit() {
    this._catalogService.getJSON().subscribe((res) => {
      console.log(res);
      this.catalogData = res;

    })
  }

  

  public openDropdown() {
    event.stopPropagation();
    event.preventDefault();
    this.openDropdownCOntainer = !this.openDropdownCOntainer
  }

  public selectCountry(countryData: LocationData) {
    countryData.branches.forEach(element => {
      this.catalogCountryData = element
    });
    console.log(this.catalogCountryData)
    localStorage.setItem('data' , JSON.stringify((this.catalogCountryData)))
    this._route.navigate([`/product/${countryData.name}`])
    this.countryName = countryData.name



    // this._catalogService.cataLogData.next(this.catalogCountryData);
  }

  ngOnDestroy() {
    localStorage.clear();
  }


}
