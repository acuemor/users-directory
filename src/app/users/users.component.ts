import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users: Array<{name: string, address: Object, email: string}>;
  public searchText: string;
  public displayDetail: boolean;
  public albums: Array<{id: number, title: string}>;
  public posts: Array<{id: number, title: string}>;

  constructor() {
    this.searchText = '';
    this.displayDetail = false;
  }

  ngOnInit() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        this.users = json;
      })
  }

  public getUserDetail(user) {
    this.displayDetail = true;
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(json => {
        this.albums = json.filter(album => album.userId === user.id);
      })

      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        this.posts = json.filter(post => post.userId === user.id);
      })
  }

}
