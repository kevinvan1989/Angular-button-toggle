import { Component } from "@angular/core";

@Component({
  selector: "app-details",
  templateUrl: "./app-details.component.html",
  styles: [
    `
      .white {
        color: white;
      }
    `,
  ],
})
export class AppDetails {
  showSecret = false;
  log = [];

  toggleDetails() {
    this.showSecret = !this.showSecret;
    this.log.push(new Date());
    // this.log.push(this.log.length + 1);
  }
}
