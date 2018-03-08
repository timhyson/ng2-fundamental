import { Component, Input, Output, EventEmitter } from '@angular/core';

import { IEvent } from "./shared/event.model";

@Component({
  selector: 'event-thumbnail',
  templateUrl: 'app/events/event-thumbnail.component.html',
  styleUrls: ['app/events/event-thumbnail.component.css']
})

export class EventThumbnailComponent {
  @Input() public event: IEvent;

  public getStartTimeStyle(): any {
    if (this.event && (this.event.time === '8:00 am')) {
      return { color: '#003300', 'font-weight': 'bold' };
    }
    return {};
  }
};