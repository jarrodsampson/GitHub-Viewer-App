import {Injectable}     from '@angular/core'
import {Http, Response} from '@angular/http'
@Injectable()
export class APIService {
  constructor(private http:Http) { }

  server = "https://api.github.com/"

  getUsers(start) {
    return this.http.get(this.server + 'users?since=' + start).map((res:Response) => res.json())
  }

  getUserByLogin(login) {
    return this.http.get(this.server + 'users/' + login).map((res:Response) => res.json())
  }

  getUserRepos(login, page) {
    return this.http.get(this.server + 'users/' + login + '/repos?page=' + page).map((res:Response) => res.json())
  }

  getUserFollowers(login, page) {
    return this.http.get(this.server + 'users/' + login + '/followers?page=' + page ).map((res:Response) => res.json())
  }

  getUserSubscriptions(login) {
    return this.http.get(this.server + 'users/' + login + '/subscriptions').map((res:Response) => res.json())
  }

  getUserOrgs(login) {
    return this.http.get(this.server + 'users/' + login + '/orgs').map((res:Response) => res.json())
  }

  searchUsers(query, page) {
    return this.http.get(this.server + 'search/users?q=' + query + '&page=' + page).map((res:Response) => res.json())
  }

  getAllOrgs(start) {
    return this.http.get(this.server + 'organizations?since=' + start).map((res:Response) => res.json())
  }

  getOrgDetails(org) {
    return this.http.get(this.server + 'orgs/' + org).map((res:Response) => res.json())
  }

  getOrgMembers(org, page) {
    return this.http.get(this.server + 'orgs/' + org + '/members?page=' + page).map((res:Response) => res.json())
  }

  getOrgRepos(org, page) {
    return this.http.get(this.server + 'orgs/' + org + '/repos?page=' + page).map((res:Response) => res.json())
  }

  getRepositories(start) {
    return this.http.get(this.server + 'repositories?since=' + start).map((res:Response) => res.json())
  }

  getSearchRepositories(query, page) {
    return this.http.get(this.server + 'search/repositories?q=' + query + '&page=' + page).map((res:Response) => res.json())
  }

  getCommits(repo, page) {
    return this.http.get(this.server + 'repos/' + repo + '/commits?page=' + page).map((res:Response) => res.json())
  }

  getPublicEvents() {
    return this.http.get(this.server + 'events').map((res:Response) => res.json())
  }

  getEmojis() {
    return this.http.get(this.server + 'emojis').map((res:Response) => res.json())
  }
}
