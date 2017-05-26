import { Component, OnInit } from '@angular/core';
import { APIService } from '../services/APIService';
import { Title } from '@angular/platform-browser';
import {Router, ActivatedRoute, NavigationEnd} from '@angular/router';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usersList = [];
  lastId = 0;
  search = {
    user: ""
  };
  organizations = [];
  events = [];
  repos = [];
  isLoading = true;
  p: number = 1;
  pRepo: number = 1;
  modalCommits = [];

  constructor(private _apiService: APIService, private titleService: Title, private router: Router) {
    this.titleService.setTitle( "Git App - Home" );
  }

  ngOnInit() {

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });

    /*
     Get users from last id collected
     */
    this.getMoreUsers(this.lastId);

    /*
     Get get all organizations
     */
    this.getOrganizations(this.lastId);

    /*
     Get get all public events
     */
    this.fetchPublicEvents();

    /*
     Get get all repos by last id
     */
    this.getRepos(this.lastId);

  }

  getMoreUsers(lastUser) {
    /*
     Get users from last id collected
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
    this.router.navigate(['./search/users/' + encodeURI(search.user)]);
  }

  getOrganizations(lastId) {
    /*
     Get get all organizations
     */
    this._apiService.getAllOrgs(lastId).subscribe(
      data => {
        this.organizations = this.organizations.concat(data);
        this.lastId = this.organizations[this.organizations.length - 1].id;
      },
      err => console.error(err),
      () => {
        console.log("Organizations data", this.organizations);
      }
    );
  }

  orgDetails(org) {
    this.router.navigate(['./organizations/details/' + encodeURI(org.login)]);
  }

  fetchPublicEvents() {
    /*
     Get get all public events
     */
    this._apiService.getPublicEvents().subscribe(
      data => {
        this.events = this.events.concat(data);
      },
      err => console.error(err),
      () => {
        console.log("Events data", this.events);
      }
    );
  }

  getRepos(lastId) {
    /*
     Get get all repos by last id
     */
    this._apiService.getRepositories(lastId).subscribe(
      data => {
        this.repos = this.repos.concat(data);
        this.lastId = this.repos[this.repos.length - 1].id;
      },
      err => console.error(err),
      () => {
        console.log("Repo data", this.repos);
      }
    );
  }

  repoDetails(repo) {
    this.router.navigate(['./repositories/details/' + encodeURI(repo.full_name)]);
  }

  getCommits(commits) {
    console.log(commits);
    this.modalCommits = commits;
  }

}
