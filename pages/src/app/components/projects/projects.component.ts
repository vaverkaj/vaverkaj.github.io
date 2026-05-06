import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ProjectLink {
  label: string;
  href: string;
}

interface Project {
  type: string;
  title: string;
  imageUrl: string;
  description: string;
  links: ProjectLink[];
  technologies: string[];
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      type: 'Commercial Product',
      title: 'PriceX',
      imageUrl: 'assets/img/project03.PNG',
      description:
        "An application that allows employees of Česká spořitelna to arrange special price offers for customers. Built with a team of 10 using Scrum. The project taught me the value of thorough analysis — when backend systems were unavailable, I built mocks from the spec and continued development unblocked. It was also the first project we decided to fully cover with automated frontend tests.",
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
      title: 'WordPress Plugin for Video Playback',
      imageUrl: 'assets/img/project01.PNG',
      description:
        "Developed as my master's thesis — a plugin for creating, publishing, and watching videos on catvusa.com. Working solo, I handled everything from the in-browser video editor and player (JavaScript & PHP) to deployment, migration scripts, and SQL generators. Taught me a lot about remote collaboration and managing client expectations.",
      links: [{ label: 'catvusa.com', href: 'https://catvusa.com/' }],
      technologies: ['PHP', 'React', 'WordPress', 'JavaScript', 'SQL'],
    },
  ];
}
