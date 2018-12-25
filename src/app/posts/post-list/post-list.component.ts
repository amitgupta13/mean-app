import { Component, Input } from "@angular/core";

@Component({
    selector:'app-post-list',
    templateUrl:'./post-list.component.html',
    styleUrls:['./post-list.component.css']
})

export class PostListComponent {
    // posts = [
    //     {title:'Post 1', content:'content 1'},
    //     {title:'Post 2', content:'content 2'},
    //     {title:'Post 3', content:'content 3'}
    // ]
    @Input() posts = [];
}