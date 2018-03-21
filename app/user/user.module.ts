import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ProfileComponent } from "./profile.component";
import { LoginComponent } from "./login.component";
import { userRoutes } from "./user.routes";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(userRoutes)
  ],
  declarations: [
    LoginComponent,
    ProfileComponent
  ],
  providers: [

  ]
})
export class UserModule {

}