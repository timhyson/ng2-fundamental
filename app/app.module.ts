import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import {
  EventRouteActivator,
  CreateEventComponent,
  EventDetailsComponent,
  EventsListComponent,
  EventThumbnailComponent,
  EventListResolver,
  EventService
 } from "./events/index";
import { AuthService } from "./user/auth.service";
import { Error404Component } from "./errors/404.component";
import { EventsAppComponent } from "./events-app.component";
import { NavBarComponent } from "./nav/navbar.component";

import { ToastrService } from "./common/toastr.service";

import { appRoutes } from "./routes";

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    Error404Component,
    CreateEventComponent,
    EventsAppComponent,
    EventDetailsComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent
  ],
  providers: [
    AuthService,
    EventListResolver,
    EventRouteActivator,
    EventService,
    ToastrService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

function checkDirtyState(component: CreateEventComponent) {
  if(component.isDirty) {
    return window.confirm('You have not saved this event, do you really want to cancel?');
  }
  return true;
}