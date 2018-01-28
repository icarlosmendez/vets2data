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
        // Bacon Ipsum API integration
        // AJAX call to API for some bacon
        // Add markup to page with id="baconIpsumOutput" and you got bacon!
        jQuery(document).ready(function() {

            jQuery.getJSON('https://baconipsum.com/api/?callback=?', 
                { 'type':'meat-and-filler', 'start-with-lorem':'1', 'paras':'5' }, 
                
                function(baconGoodness) {
                
                    if (baconGoodness && baconGoodness.length > 0) {
                        jQuery("#baconIpsumOutput").html('');

                        for (var i = 0; i < baconGoodness.length; i++)
                            jQuery("#baconIpsumOutput").append('<p>' + baconGoodness[i] + '</p>');
                        jQuery("#baconIpsumOutput").show();
                    }
                }
            );
        
        });
    }

}
