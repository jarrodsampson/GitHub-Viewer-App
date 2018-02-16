import { Component, OnInit }            from '@angular/core'
import { APIService }                   from '../../services/APIService'
import { Title }                        from '@angular/platform-browser'
import {Router, ActivatedRoute, Params} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './searchUsers.component.html',
  styleUrls: ['./searchUsers.component.css']
})
export class SearchUserComponent implements OnInit {

  user = ""
  page = 1
  queryList = []

  constructor(private _apiService: APIService, private titleService: Title, private activatedRoute: ActivatedRoute, private router: Router) {
    this.titleService.setTitle( "Git App - Search" )
  }

  ngOnInit() {

    this.activatedRoute.params.subscribe((params: Params) => {
      this.user = params['user']
      this.titleService.setTitle( this.user + " results - Git App" )
      console.log(this.user)
    })


    /*
     Get search results from user with page id
     */
    this.getSearchResults(this.user, this.page)

  }

  getSearchResults(user, page) {
    /*
     Get search results from user with page id
     */
    this._apiService.searchUsers(user, page).subscribe(
      data => {
        this.queryList = this.queryList.concat(data.items)
        this.page += 1
      },
      err => console.error(err),
      () => {
        console.log("Query data", this.queryList)
      }
    )
  }

  onLoadMore(userLogin, page) {
    this.getSearchResults(userLogin, page)
  }

  userDetails(user) {
    this.router.navigate(['./user/details/' + encodeURI(user.login)])
  }

  goBack() {
    window.history.back()
  }

}

