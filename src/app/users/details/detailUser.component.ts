import { Component, OnInit } from '@angular/core';
import { APIService } from '../../services/APIService';
import { Title } from '@angular/platform-browser';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './detailUser.component.html',
  styleUrls: ['./detailUser.component.css']
})
export class DetailUserComponent implements OnInit {

  userDetail = {
    blog: ""
  };
  userLogin = "";
  repos = [];
  followers = [];
  page = 1;
  repoPage = 1;
  subscriptions = [];
  orgs = [];
  hideButton = false;
  tempArrayLength = 0;

  // tabs
  tabClosed0 = true;
  tabClosed1 = true;
  tabClosed2 = true;
  tabClosed3 = true;

  constructor(private _apiService: APIService, private titleService: Title, private activatedRoute: ActivatedRoute, private router: Router) {
    this.titleService.setTitle( "Git App - Details" );
  }

  ngOnInit() {

    this.activatedRoute.params.subscribe((params: Params) => {
      this.userLogin = params['id'];
      this.titleService.setTitle( "Git App - " + this.userLogin + ' Details' );
      console.log(this.userLogin);
    });

    /*
     Get the user deets
     */
    this.getUserDetails(this.userLogin);

    /*
     Get user followers
     */
    this.getUserFollowers(this.userLogin, this.page);

    /*
     Get user subscriptions
     */
    this.getUserSubscriptions(this.userLogin);

    /*
     Get user organizations
     */
    this.getUserOrgs(this.userLogin);

    /*
     Get user repos
     */
    this.getUserRepos(this.userLogin, this.repoPage);

    /*
     Reset Tabs
     */
    this.initTabs();
  }

  getUserDetails(userLogin) {
    /*
     Get the local categories list for google places
     */
    this._apiService.getUserByLogin(userLogin).subscribe(
      data => {
        this.userDetail = data;
      },
      err => console.error(err),
      () => {
        console.log("User data", this.userDetail);
      }
    );
  }

  getUserRepos(userLogin, page) {
    /*
     Get the local categories list for google places
     */
    this._apiService.getUserRepos(userLogin, page).subscribe(
      data => {
        this.repos = this.repos.concat(data);
        this.repoPage += 1;
      },
      err => console.error(err),
      () => {
        console.log("Repo data", this.repos);
      }
    );
  }

  getUserFollowers(userLogin, page) {
    /*
     Get the local categories list for google places
     */
    this._apiService.getUserFollowers(userLogin, page).subscribe(
      data => {
        this.tempArrayLength = this.followers.length;
        this.followers = this.followers.concat(data);
        this.page += 1;
      },
      err => console.error(err),
      () => {
        console.log("Followers data", this.followers);
        if (this.tempArrayLength == this.followers.length) {
          this.hideButton = true;
        }
      }
    );
  }

  getUserSubscriptions(userLogin) {
    /*
     Get the local categories list for google places
     */
    this._apiService.getUserSubscriptions(userLogin).subscribe(
      data => {
        this.subscriptions = data;
      },
      err => console.error(err),
      () => {
        console.log("Subscriptions data", this.subscriptions);
      }
    );
  }

  getUserOrgs(userLogin) {
    /*
     Get the local categories list for google places
     */
    this._apiService.getUserOrgs(userLogin).subscribe(
      data => {
        this.orgs = data;
      },
      err => console.error(err),
      () => {
        console.log("Orgs data", this.orgs);
      }
    );
  }

  onLoadMore(userLogin, page, prevList) {
    this.getUserFollowers(userLogin, page);
  }

  onLoadMoreRepos(userLogin, page) {
    this.getUserRepos(userLogin, page);
  }

  followerDetails(follower) {
    this.userLogin = follower.login;
    this.repoPage = 1;
    this.page = 1;
    this.repos = [];
    this.followers = [];
    this.subscriptions = [];
    this.orgs = [];
    /*
     Get grab user deets
     */
    this.getUserDetails(this.userLogin);

    /*
     Get all followers
     */
    this.getUserFollowers(this.userLogin, this.page);

    /*
     Get user subscriptions
     */
    this.getUserSubscriptions(this.userLogin);

    /*
     Get user Organizations
     */
    this.getUserOrgs(this.userLogin);

    /*
     Get User Repos
     */
    this.getUserRepos(this.userLogin, this.repoPage);

    scrollTo(0,0);
  }

  repoDetails(repo) {
    this.router.navigate(['./repositories/details/' + encodeURI(repo.full_name)]);
  }

  orgDetails(org) {
    this.router.navigate(['./organizations/details/' + encodeURI(org.login)]);
  }

  goBack() {
    window.history.back();
  }

  initTabs() {
    this.tabClosed0 = true;
    this.tabClosed1 = true;
    this.tabClosed2 = false;
    this.tabClosed3 = true;
  }

  openTab(tabNumber) {
    if (tabNumber == 0) {
      this.tabClosed0 = false;
      this.tabClosed1 = true;
      this.tabClosed2 = true;
      this.tabClosed3 = true;
    } else if (tabNumber == 1) {
      this.tabClosed0 = true;
      this.tabClosed1 = false;
      this.tabClosed2 = true;
      this.tabClosed3 = true;
    } else if (tabNumber == 2) {
      this.tabClosed0 = true;
      this.tabClosed1 = true;
      this.tabClosed2 = false;
      this.tabClosed3 = true;
    } else if (tabNumber == 3) {
      this.tabClosed0 = true;
      this.tabClosed1 = true;
      this.tabClosed2 = true;
      this.tabClosed3 = false;
    }
  }

}

