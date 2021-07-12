import { Component, OnInit } from '@angular/core';
import { Category } from '../interface/catalog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public categoryData: Category;
  public categoryName: string

  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.categoryName = params['country']
      console.log(this.categoryName);
      this.fetchSubCategoryData();
    });

  }

  public fetchSubCategoryData() {
    this.categoryData = JSON.parse(localStorage.getItem('subCategory'))
  }
}
