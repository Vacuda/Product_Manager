import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

    createproduct:any;
    errors:any;

    constructor(
        private _httpService: TaskService,
        private _route: ActivatedRoute,
        private _router: Router
    ){}

    ngOnInit() {
        console.log("init on new")
        this.createproduct = {
            name: "",
            price: "",
            url: ""
        }
        this.errors=null;
    }

    createProduct(){
        this.errors = null;
        let observable = this._httpService.createProduct(this.createproduct)
        observable.subscribe(data => {
            if(data["results"]){
                this.createproduct = {
                    name: "",
                    price: "",
                    url: ""
                }
                this._router.navigate(['/products'])
            }
            else if(data["errors"]){
                this.errors = [];
                for(let item in data["errors"]){
                    this.errors.push(data["errors"][item]);
                }
            }
        });       
    }

}
