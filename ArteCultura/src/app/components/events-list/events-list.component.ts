import { Component, OnInit } from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import { Event } from 'src/app/store/models/Event.model';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  events: Event[];

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.apollo.watchQuery({
      query: gql`
      {
        events {
          organizer,
          event_name,
          description,
          date,
          local,
          hours,
          minutes
        }
      }
      `
    }).valueChanges.subscribe(result => {
      // tslint:disable-next-line:no-string-literal variable-name
      const _events: Event[] = result.data['events'];
      this.events = _events;
    });
  }

}
