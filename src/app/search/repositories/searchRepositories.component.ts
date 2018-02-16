import { Component, OnInit }            from '@angular/core'
import { APIService }                   from '../../services/APIService'
import { Title }                        from '@angular/platform-browser'
import {Router, ActivatedRoute, Params} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './searchRepositories.component.html',
  styleUrls: ['./searchRepositories.component.css']
})
export class SearchRepositoriesComponent implements OnInit {

  repo = ""
  page = 1
  queryList = []

  constructor(private _apiService: APIService, private titleService: Title, private activatedRoute: ActivatedRoute, private router: Router) {
    this.titleService.setTitle( "Git App - Search" )
  }

  ngOnInit() {

    this.activatedRoute.params.subscribe((params: Params) => {
      this.repo = params['repo']
      this.titleService.setTitle( this.repo + " results - Git App" )
      console.log(this.repo)
    })


    /*
     Get repositories from repo and page id
     */
    this.getSearchResults(this.repo, this.page)

  }

  getSearchResults(repo, page) {
    /*
     Get repositories from repo and page id
     */
    this._apiService.getSearchRepositories(repo, page).subscribe(
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

  onLoadMore(repo, page) {
    this.getSearchResults(repo, page)
  }

  repoDetails(repo) {
    this.router.navigate(['./repositories/details/' + encodeURI(repo.full_name)])
  }

  goBack() {
    window.history.back()
  }

}

