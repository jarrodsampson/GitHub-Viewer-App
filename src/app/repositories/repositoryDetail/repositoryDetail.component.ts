import { Component, OnInit }            from '@angular/core'
import { APIService }                   from '../../services/APIService'
import { Title }                        from '@angular/platform-browser'
import {Router, ActivatedRoute, Params} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './repositoryDetail.component.html',
  styleUrls: ['./repositoryDetail.component.css']
})
export class RepositoryDetailComponent implements OnInit {

  repo = ""
  fullRepoName = ""
  repoDetails = {
    owner: {}
  }
  repoPage = 1
  commits = []
  commitPage = 1

  constructor(private _apiService: APIService, private titleService: Title, private activatedRoute: ActivatedRoute, private router: Router) {
    this.titleService.setTitle( "Git App - Details" )
  }

  ngOnInit() {

    this.activatedRoute.params.subscribe((params: Params) => {
      this.repo = params['repo']
      this.fullRepoName = params['login'] + '/' + params['repo']
      this.titleService.setTitle( "Git App - " + this.repo + ' Details' )
      console.log(this.repo)
    })


    /*
     Get repo details
     */
    this.getRepoDetails(this.repo)

    /*
     Get repo commits
     */
    this.getRepoCommits(this.fullRepoName, this.commitPage)

  }

  getRepoDetails(repo) {
    /*
     Get repo details
     */
    this._apiService.getSearchRepositories(repo, this.repoPage).subscribe(
      data => {
        this.repoDetails = data.items[0]
      },
      err => console.error(err),
      () => {
        console.log("Repo data", this.repoDetails)
      }
    )
  }

  getRepoCommits(repo, page) {
    /*
     Get repo commits
     */
    this._apiService.getCommits(repo, page).subscribe(
      data => {
        this.commits = this.commits.concat(data)
        this.commitPage += 1
      },
      err => console.error(err),
      () => {
        console.log("Commit data", this.commits)
      }
    )
  }

  onLoadMoreCommits(repo, page) {
    this.getRepoCommits(repo, page)
  }

  goBack() {
    window.history.back()
  }

}

