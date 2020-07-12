import { EventDetailComponent } from '../../components/event-detail/event-detail.component';
import { Component, OnInit } from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import { Event } from 'src/app/store/models/Event.model';
import {MatDialog} from '@angular/material/dialog';



@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  events: Event[];

  constructor(private apollo: Apollo, public eventDialog: MatDialog) { }

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
          time
        }
      }
      `
    }).valueChanges.subscribe(result => {
      // tslint:disable-next-line:no-string-literal variable-name
      const _events: Event[] = result.data['events'];
      this.events = _events;
    });
  }

  detail(event: Event) {
    this.eventDialog.open(EventDetailComponent, {
      data: event
    });
  }

}
