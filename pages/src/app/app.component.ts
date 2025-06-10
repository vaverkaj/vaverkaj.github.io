import { Component } from '@angular/core';
import { NavigationComponent } from "./components/navigation/navigation.component";
import { TitleComponent } from "./components/title/title.component";
import { AboutComponent } from "./components/about/about.component";
import { WorkComponent } from "./components/work/work.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { ContactComponent } from "./components/contact/contact.component";
import { LinksComponent } from "./components/links/links.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavigationComponent,
    TitleComponent,
    AboutComponent,
    WorkComponent,
    ProjectsComponent,
    ContactComponent,
    LinksComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pages';
}
