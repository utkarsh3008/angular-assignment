import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class CatalogService {
   constructor(private http: HttpClient) {
       
   }


    public getJSON(): Observable<any> {
        return this.http.get("./assets/catalog.json");
    }
}