import { Component } from '@angular/core';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {
name=""
id=""
title=""
status=""

readValue = () =>
{
  let data:any = {"name":this.name,"id":this.id,"title":this.title,"status":this.status}
  console.log(data)
}

}
