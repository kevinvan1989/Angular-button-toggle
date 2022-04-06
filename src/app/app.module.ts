import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppDetails } from "./details/app-details.component";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent, AppDetails],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
