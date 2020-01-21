import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../task.service';
import { ListComponent } from '../list/list.component';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
    
    @Input() prod_price:any;
    @Input() prod_name:any;
    @Input() prod_url:any;
    @Input() prod_id:any;

    constructor(
        private _httpService: TaskService,
        private _route: ActivatedRoute,
        private _router: Router,
        private _listcomponent: ListComponent
    ){}

    ngOnInit() {
    }

    deleteProduct(id:number){
        let observable = this._httpService.deleteProduct(id)
        observable.subscribe(data => {
            this._listcomponent.getProducts();

        });
    }


}
