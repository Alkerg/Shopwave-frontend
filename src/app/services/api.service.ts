import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../interfaces/products.interface";
import { Category } from "../interfaces/category.interface";

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private http = inject(HttpClient);

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>("https://api-ecommerce-production-3152.up.railway.app/api/v1/Products");
    }

    getCategories(): Observable<Category[]> {
        return this.http.get<Category[]>("https://api-ecommerce-production-3152.up.railway.app/api/v1/Categories");
    }
}