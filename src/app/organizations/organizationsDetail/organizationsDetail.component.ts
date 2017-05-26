import { Component, OnInit } from '@angular/core';
import { APIService } from '../../services/APIService';
import { Title } from '@angular/platform-browser';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './organizationsDetail.component.html',
  styleUrls: ['./organizationsDetail.component.css']
})
export class OrganizationDetailComponent implements OnInit {

  organization = "";
  orgDetails = {};
  members = [];
  memberPage = 1;
  repos = [];
  repoPage = 1;

  constructor(private _apiService: APIService, private titleService: Title, private activatedRoute: ActivatedRoute, private router: Router) {
    this.titleService.setTitle( "Git App - Details" );
  }

  ngOnInit() {

    this.activatedRoute.params.subscribe((params: Params) => {
      this.organization = params['org'];
      this.titleService.setTitle( "Git App - " + this.organization + ' Details' );
      console.log(this.organization);
    });


    /*
     Get Organization Details
     */
    this.getOrgDetails(this.organization);

    /*
     Get Organization members
     */
    this.getOrgMembers(this.organization, this.memberPage);

    /*
     Get Organization Repos
     */
    this.getOrgRepos(this.organization, this.memberPage);

  }

  getOrgDetails(org) {
    /*
     Get Organization Details
     */
    this._apiService.getOrgDetails(org).subscribe(
      data => {
        this.orgDetails = data;
      },
      err => console.error(err),
      () => {
        console.log("Organization data", this.orgDetails);
      }
    );
  }

  getOrgMembers(org, page) {
    /*
     Get Organization members
     */
    this._apiService.getOrgMembers(org, page).subscribe(
      data => {
        this.members = this.members.concat(data);
        this.memberPage += 1;
      },
      err => console.error(err),
      () => {
        console.log("Member data", this.members);
      }
    );
  }

  getOrgRepos(org, page) {
    /*
     Get Organization Repos
     */
    this._apiService.getOrgRepos(org, page).subscribe(
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

  onLoadMoreMembers(org, page) {
    this.getOrgMembers(org, page);
  }

  onLoadMoreRepos(org, page) {
    this.getOrgRepos(org, page);
  }

  memberDetails(member) {
    this.router.navigate(['./user/details/' + encodeURI(member.login)]);
  }

  goBack() {
    window.history.back();
  }

}

