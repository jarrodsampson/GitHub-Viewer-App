import { Component, OnInit } from '@angular/core'
import { APIService }        from '../../services/APIService'
import { Title }             from '@angular/platform-browser'
import {Router}              from '@angular/router'
import                            'rxjs/Rx'

@Component({
  selector: 'app-root',
  templateUrl: './organizationsList.component.html',
  styleUrls: ['./organizationsList.component.css']
})
export class OrganizationListComponent implements OnInit {

  organizations = []
  lastId = 0
  isLoading = true

  constructor(private _apiService: APIService, private titleService: Title, private router: Router) {
    this.titleService.setTitle( "Git App - Organizations" )
  }

  ngOnInit() {

    /*
     Get all public organizations
     */
    this.getOrganizations(this.lastId)

  }

  getOrganizations(lastId) {
    /*
     Get all public organizations
     */
    this._apiService.getAllOrgs(lastId).subscribe(
      data => {
        this.organizations = this.organizations.concat(data)
        this.lastId = this.organizations[this.organizations.length - 1].id
      },
      err => console.error(err),
      () => {
        console.log("Organizations data", this.organizations)
        this.isLoading = false
      }
    )
  }

  getMoreOrgs(lastId) {
    this.getOrganizations(this.lastId)
  }

  orgDetails(org) {
    this.router.navigate(['./organizations/details/' + encodeURI(org.login)])
  }

}
