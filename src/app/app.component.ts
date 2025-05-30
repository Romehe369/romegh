import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/shared/header/header.component";
import { MainComponent } from "./components/pages/main/main.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CORPORACION';
}
