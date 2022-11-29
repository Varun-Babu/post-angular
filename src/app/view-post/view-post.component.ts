import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent {

  constructor(private api:ApiService){
    api.viewPost().subscribe(
      (response) =>
      {
        this.data = response;
      }
    )

  }

  data:any = [ ]

}
