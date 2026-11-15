import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../interfaces/products.interface";
import { Category } from "../interfaces/category.interface";
import { environment } from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private http = inject(HttpClient);
    private apiBaseUrl = environment.apiBaseUrl;

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(`${this.apiBaseUrl}/v1/Products`);
    }

    getCategories(): Observable<Category[]> {
        return this.http.get<Category[]>(`${this.apiBaseUrl}/v1/Categories`);
    }
}