import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { ProfileComponent } from "./profile.component";
import { LoginComponent } from "./login.component";
import { userRoutes } from "./user.routes";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
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