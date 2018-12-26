import { Component, OnInit, OnDestroy } from "@angular/core";
import { Post } from "../post.model";
import { PostsService } from "../posts.service";
import { Subscription } from "rxjs";

@Component({
    selector:'app-post-list',
    templateUrl:'./post-list.component.html',
    styleUrls:['./post-list.component.css']
})

export class PostListComponent implements OnInit, OnDestroy {
    // posts = [
    //     {title:'Post 1', content:'content 1'},
    //     {title:'Post 2', content:'content 2'},
    //     {title:'Post 3', content:'content 3'}
    // ]
    posts: Post[] = [];
    private postsSub: Subscription;

    constructor(public postsService:PostsService) {}

    ngOnInit(){
        this.postsService.getPost();
        this.postsSub = this.postsService.getPostUpdateListener()
            .subscribe((posts:Post[])=>{
                this.posts = posts;
            });
    }

    ngOnDestroy() {
        this.postsSub.unsubscribe();
    }
}