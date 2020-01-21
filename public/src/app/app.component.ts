import { Component, OnInit } from '@angular/core';
import { TaskService } from './task.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor(private _httpService: TaskService){}

    ngOnInit(){
    }

}






    // getTasks(){

    //     this.updatetask = null;
    //     this.createtask = {
    //         title: "",
    //         description: ""
    //     }

    //     let observable = this._httpService.getTasks()
    //     observable.subscribe(data => {
    //         this.tasks = data['results'];
    //         this.onetask = null;
    //     });
    // }

    // getOneTask(id:number){
    //     this.errors = null;
    //     let observable = this._httpService.getOneTask(id)
    //     observable.subscribe(data => {
    //         this.tasks = null;
    //         this.onetask = data['results'];
    //     });
    // }

    // createTask(){
    //     this.errors = null;
    //     let observable = this._httpService.createTask(this.createtask)
    //     observable.subscribe(data => {
    //         if(data["results"]){
    //             this.getTasks();
    //             this.createtask = {
    //                 title: "",
    //                 description: ""
    //             }
    //         }
    //         else if(data["errors"]){
    //             this.errors = [];
    //             for(let item in data["errors"]){
    //                 this.errors.push(data["errors"][item]);
    //             }
    //         }
    //     });       
    // }

    // deleteTask(id:number){
    //     //resets
    //     this.errors = null;
    //     this.updatetask = null;
    //     this.createtask = {
    //         title: "",
    //         description: ""
    //     }

    //     let observable = this._httpService.deleteTask(id)
    //     observable.subscribe(data => {
    //         this.getTasks();
    //         this.onetask = null;
    //     });
    // }

    // markComplete(id:number){
    //     //resets
    //     this.errors = null;

    //     let observable = this._httpService.markComplete(id)
    //     observable.subscribe(data => {
    //         this.getOneTask(id);
    //     });
    // }

    // editTask(){
    //     console.log("hereh;rake;jrakj;er")
    //     //resets
    //     this.createtask = null;
    //     this.errors = null;

    //     this.updatetask = {
    //         title: this.onetask.title,
    //         description: this.onetask.description
    //     }

    // }

    // updateTask(id:number){
    //     console.log(id)
    //     let observable = this._httpService.updateTask(id, this.updatetask)
    //     observable.subscribe(data => {
    //         if(data["results"]){
    //             this.createtask = {
    //             title: "",
    //             description: ""
    //             }
    //             this.getOneTask(id);
    //             this.updatetask = null;
    //         }
    //         else if(data["errors"]){
    //             this.errors = [];
    //             for(let item in data["errors"]){
    //                 this.errors.push(data["errors"][item]);
    //             }
    //         }
            
    //     });
    // }

