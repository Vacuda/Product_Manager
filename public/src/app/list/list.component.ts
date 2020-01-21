import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    allproducts;

    constructor(private _httpService: TaskService,) { }

    ngOnInit() {
        this.getProducts();
    }

    getProducts(){
        let observable = this._httpService.getProducts()
        observable.subscribe(data => {
            this.allproducts = data['results'];
        });
    }

}
