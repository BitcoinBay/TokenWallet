import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public menuActive: boolean = false;

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }
}
