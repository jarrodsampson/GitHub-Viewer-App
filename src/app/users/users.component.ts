import { Component, OnInit } from '@angular/core';
import { APIService } from '../services/APIService';
import { Title } from '@angular/platform-browser';
import {Router, ActivatedRoute, Params} from '@angular/router';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  usersList = [];
  lastId = 0;
  search = {
    user: ""
  };

  constructor(private _apiService: APIService, private titleService: Title, private activatedRoute: ActivatedRoute, private router: Router) {
    this.titleService.setTitle( "Git App - Users" );
  }

  ngOnInit() {

    /*
     Get more users from last id
     */
    this.getMoreUsers(this.lastId);

  }

  getMoreUsers(lastUser) {
    /*
     Get more users from last id
     */
    this._apiService.getUsers(lastUser).subscribe(
      data => {
        this.usersList = this.usersList.concat(data);
        this.lastId = this.usersList[this.usersList.length - 1].id;
      },
      err => console.error(err),
      () => {
        console.log("User data", this.usersList);
      }
    );
  }

  searchUser(search) {
    if (search.user.length > 1) {
      this.router.navigate(['./search/users/' + encodeURI(search.user)]);
    }
  }

  userDetails(user) {
    this.router.navigate(['./user/details/' + encodeURI(user.login)]);
  }

}
