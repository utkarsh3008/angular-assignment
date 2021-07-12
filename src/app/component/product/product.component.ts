import { Branch, Category, LocationData } from './../interface/catalog';
import { CatalogService } from './../../services/catalog.service';
import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { log } from 'util';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public catalogCountryData: Branch;
  public countryName: string

  constructor(private _catalogService: CatalogService,
    public router: Router,
    private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.countryName = params['country']
      console.log(this.countryName);  
      this.fetchCatalogData();

 });
  }



  public fetchCatalogData() {
    this.catalogCountryData = JSON.parse(localStorage.getItem('data')),

    console.log(this.catalogCountryData)
    
  }


  public getCategorySubData(category) {
    this.router.navigate([`/product-detail/${category.name}`]);
    localStorage.setItem('subCategory' , JSON.stringify(category))
  }



}
