import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabaseModule, 
         AngularFireDatabase }     from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.scss']
})
export class BlogPostsComponent implements OnInit {

    // Bind to the 'posts' list
    posts: Observable<any[]>;

    // passing in the db, record all changes to the particular observables
    constructor(db: AngularFirestore) {
        this.posts = db.collection('posts').valueChanges();
    }

    ngOnInit() {
        
    }

}
