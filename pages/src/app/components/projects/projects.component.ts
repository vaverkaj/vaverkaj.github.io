import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectStateService, Project } from '../../services/project-state.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class ProjectsComponent {
  readonly projectState = inject(ProjectStateService);

  readonly projects: Project[] = [
    {
      type: 'Commercial Product',
      title: 'ZF BusConnect',
      imageUrl: 'assets/img/busconnect.jpg',
      description:
        'A global fleet management dashboard built for ZF\'s BusConnect platform — used by public transit operators managing 10,000+ vehicles across Europe. Features live map tracking, real-time bus telemetry panels showing door state, speed, and current stop, and a multi-fuel consumption monitor for spotting underperforming vehicles across large fleets and months of history. The GraphQL backend required careful client-side caching to stay performant at scale. I also delivered an automated AI translation pipeline that localised the application into tens of languages, and drove the transformation from a desktop-only product to a fully responsive mobile-accessible interface.',
      links: [{ label: 'ZF BusConnect', href: 'https://www.zf.com/products/en/cv/campaigns/bus_connect/bus_connect.html' }],
      technologies: ['Angular 18', 'GraphQL', 'Leaflet', 'ECharts', 'TypeScript', 'PrimeNG'],
    },
    {
      type: 'Commercial Product',
      title: 'dflex Energy Portal',
      imageUrl: 'assets/img/dflex.png',
      description:
        'A web portal for Nano Energies\' energy flexibility aggregation platform, operating across five Central European markets. The application lets industrial clients and households earn revenue by providing grid balancing services to transmission operators, participate in energy auctions, and monitor real-time device dispatch across a virtual power plant. The most demanding technical challenge was a custom RxJS store architecture built without NgRx — a BaseStore facade pattern with reducer functions for immutable state management powering every data-heavy page. SignalR provided live device data and bidirectional notifications across the platform.',
      links: [{ label: 'Nano Energies', href: 'https://nanoenergies.eu/flexibility' }],
      technologies: ['Angular 15', 'RxJS', 'SignalR', 'ECharts', 'TypeScript', 'Bootstrap 5'],
    },
    {
      type: 'Commercial Product',
      title: 'PriceX',
      imageUrl: 'assets/img/project03.PNG',
      description:
        'An application that allows employees of Česká spořitelna to arrange special price offers for customers. Built with a team of 10 using Scrum. The project taught me the value of thorough analysis — when backend systems were unavailable, I built mocks from the spec and continued development unblocked. It was also the first project we decided to fully cover with automated frontend tests.',
      links: [
        { label: 'Scrum', href: 'https://cs.wikipedia.org/wiki/Scrum' },
        { label: 'Mock objects', href: 'https://en.wikipedia.org/wiki/Mock_object' },
      ],
      technologies: ['Angular 12', 'Cypress', 'OpenShift', 'Elasticsearch', 'C#'],
    },
    {
      type: 'Commercial Product',
      title: 'Pension Store',
      imageUrl: 'assets/img/project02.PNG',
      description:
        'My first project at Česká spořitelna, deployed in the George banking app. Any of the 4.5 million clients wanting to arrange a pension savings account is redirected here. I set up CI builds running tests and static analysis before every merge, and picked up tools like Figma, Enterprise Architect, TeamCity, and Swagger.',
      links: [],
      technologies: ['Angular 14', 'Jest', 'OpenAPI', 'TeamCity', 'Google Analytics'],
    },
    {
      type: 'Feature Project',
      title: 'WordPress Video Plugin',
      imageUrl: 'assets/img/project01.PNG',
      description:
        'Developed as my master\'s thesis — a plugin for creating, publishing, and watching videos on catvusa.com. Working solo, I handled everything from the in-browser video editor and player to deployment, migration scripts, and SQL generators. Taught me a lot about remote collaboration and managing client expectations.',
      links: [{ label: 'catvusa.com', href: 'https://catvusa.com/' }],
      technologies: ['PHP', 'React', 'WordPress', 'JavaScript', 'SQL'],
    },
  ];

  open(project: Project): void {
    this.projectState.open(project);
  }
}
