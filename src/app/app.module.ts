import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { ProfileComponent } from "./profile/profile.component";
import { PrivacyPolicyComponent } from "./privacy-policy/privacy-policy.component";

@NgModule({
  declarations: [AppComponent, ProfileComponent, PrivacyPolicyComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: "",
        component: ProfileComponent,
      },
      {
        path: "privacy-policy",
        component: PrivacyPolicyComponent,
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
