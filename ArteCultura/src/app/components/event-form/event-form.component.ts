import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EventService } from './../../services/event.service';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit {

  constructor(private eventService: EventService) { }

  ngOnInit() {
  }

  onSubmit(eventForm: NgForm) {
    const organizer =     eventForm.value.organizer;
    const eventName =     eventForm.value.eventName;
    const description =   eventForm.value.description;
    const date =          eventForm.value.date.toISOString().split('T')[0];
    const local =         eventForm.value.local;
    const time =          eventForm.value.time;


    this.eventService.createEvent(organizer, eventName, description, date, local, time).subscribe(((result) => {
      console.log(result);
    }), (error) => {
      console.log(error);
    });
  }

}
