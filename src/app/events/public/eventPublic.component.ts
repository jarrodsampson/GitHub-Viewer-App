import { Component, OnInit } from '@angular/core';
import { APIService } from '../../services/APIService';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './eventPublic.component.html',
  styleUrls: ['./eventPublic.component.css']
})
export class EventPublicComponent implements OnInit {

  events = [];
  serviceRequest = {};
  isLoading = true;
  modalCommits = [];

  constructor(private _apiService: APIService, private titleService: Title) {
    this.titleService.setTitle( "Git App - Public Events" );
  }

  ngOnInit() {

    /*
     Get all public events
     */
    this.fetchPublicEvents();

  }

  fetchPublicEvents() {
    /*
     Get all public events
     */
    this.serviceRequest = this._apiService.getPublicEvents().subscribe(
      data => {
        this.events = this.events.concat(data);
      },
      err => console.error(err),
      () => {
        console.log("Events data", this.events);
        //this.subscribeToData();
        this.isLoading = false;
      }
    );
  }

  goBack() {
    window.history.back();
  }

  getCommits(commits) {
    console.log(commits);
    this.modalCommits = commits;
  }

}

