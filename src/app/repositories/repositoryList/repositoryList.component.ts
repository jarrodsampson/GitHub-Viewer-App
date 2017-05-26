import { Component, OnInit } from '@angular/core';
import { APIService } from '../../services/APIService';
import { Title } from '@angular/platform-browser';
import {Router, ActivatedRoute} from '@angular/router';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './repositoryList.component.html',
  styleUrls: ['./repositoryList.component.css']
})
export class RepositoryListComponent implements OnInit {

  repos = [];
  lastId = 0;
  search = {
    repo: ""
  };
  isLoading = true;

  constructor(private _apiService: APIService, private titleService: Title, private router: Router) {
    this.titleService.setTitle( "Git App - Repositories" );
  }

  ngOnInit() {

    /*
     Get all repositories
     */
    this.getRepos(this.lastId);

  }

  getRepos(lastId) {
    /*
     Get all repositories
     */
    this._apiService.getRepositories(lastId).subscribe(
      data => {
        this.repos = this.repos.concat(data);
        this.lastId = this.repos[this.repos.length - 1].id;
      },
      err => console.error(err),
      () => {
        console.log("Repo data", this.repos);
        this.isLoading = false;
      }
    );
  }

  getMoreRepos(lastId) {
    this.getRepos(this.lastId);
  }

  repoDetails(repo) {
    this.router.navigate(['./repositories/details/' + encodeURI(repo.full_name)]);
  }

  searchRepo(search) {
    if (search.repo.length > 1) {
      this.router.navigate(['./search/repositories/' + encodeURI(search.repo)]);
    }
  }

}
