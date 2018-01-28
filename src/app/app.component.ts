import { Component } from '@angular/core';
// import { AngularFirestore } from 'angularfire2/firestore';
// import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
    title = 'Vets 2 Data';

    // // Bind to the 'posts' list
    // posts: Observable<any[]>;

    // // passing in the db, record all changes to the particular observables
    // constructor(db: AngularFirestore) {
    //     this.posts = db.collection('posts').valueChanges();
    // }

    ngOnInit() { 

    }
}
