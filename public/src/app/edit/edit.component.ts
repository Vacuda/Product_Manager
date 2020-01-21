import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

    updateproduct:any;
    errors:any;

    constructor(
        private _httpService: TaskService,
        private _route: ActivatedRoute,
        private _router: Router,
    ){}

    ngOnInit() {
        this._route.params.subscribe(params => {
        this.getOneProduct(params.id);
        })
    }

    getOneProduct(id:number){
        this.errors = null;
        let observable = this._httpService.getOneProduct(id)
        observable.subscribe(data => {
            this.updateproduct = data['results'];
        });
    }

    updateProduct(id:number){
        let observable = this._httpService.updateProduct(id, this.updateproduct)
        observable.subscribe(data => {
            if(data["results"]){
                this._router.navigate(['products'])
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

//this._router.navigate(['authors/all'])
        // private _route: ActivatedRoute,
        // private _router: Router
//import { ActivatedRoute, Params, Router } from '@angular/router';

//ngOnInit
// this._route.params.subscribe(params => {
//             console.log(params);
//             this.id=params.id;
//         })
