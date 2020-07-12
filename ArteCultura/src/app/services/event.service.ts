import { Injectable } from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private apollo: Apollo) { }

  createEvent(organizer, eventName, description, date, local, time) {
    return this.apollo.mutate({
      mutation: gql`
      mutation {
        addEvent (
          organizer: "${organizer}", event_name: "${eventName}",
          description: "${description}", date: "${date}", local: "${local}",
          time: "${time}") {
            organizer,
            event_name,
            description,
            date,
            local,
            time
        }
      }
      `
    });
  }


}
