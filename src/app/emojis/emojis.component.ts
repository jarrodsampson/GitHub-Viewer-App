import { Component, OnInit } from '@angular/core'
import { APIService }        from '../services/APIService'
import { Title }             from '@angular/platform-browser'


@Component({
  selector: 'app-root',
  templateUrl: './emojis.component.html',
  styleUrls: ['./emojis.component.css']
})
export class EmojisComponent implements OnInit {

  emojis = []
  numberE = 24
  emojisLength = 0
  isLoading = true

  constructor(private _apiService: APIService, private titleService: Title) {
    this.titleService.setTitle( "Git App - Emojis" )
  }

  ngOnInit() {

    /*
     Get all emojis
     */
    this.fetchEmojis()

  }

  fetchEmojis() {
    /*
     API service for emojis
     */
    this._apiService.getEmojis().subscribe(
      data => {
        this.emojis = data
        this.emojisLength = Object.keys(this.emojis).length
      },
      err => console.error(err),
      () => {
        console.log("Emoji data", this.emojis)
        this.isLoading = false
      }
    )
  }

  /*
    Load More emojis in increments
   */
  loadMoreEmojis() {
    this.numberE += 24
  }

}

