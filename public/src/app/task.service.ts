
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private _http: HttpClient) {}

    getProducts(){
        return this._http.get('/api/products');
    }

    getOneProduct(id){
        return this._http.get(`/api/product/${id}`);
    }

    createProduct(data){
        return this._http.post('/api/product/create', data);
    }

    deleteProduct(id){
        return this._http.delete(`/api/product/destroy/${id}`);
    }

    updateProduct(id, data){
        return this._http.put(`/api/product/update/${id}`, data);
    }




}