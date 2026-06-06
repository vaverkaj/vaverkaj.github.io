import { Component } from '@angular/core';

interface Job {
  company: string;
  title: string;
  period: string;
  paragraphs: string[];
}

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
  standalone: true,
})
export class WorkComponent {
  readonly jobs: Job[] = [
    {
      company: 'Siko',
      title: 'Front-end Developer',
      period: '2025 - Now',
      paragraphs: [
        'Working on a multi-market Angular e-commerce platform built on SAP Spartacus, serving customers across CZ, SK, HU, and DE. The application runs with Server-Side Rendering, a layered Cloudflare caching strategy, and deep SAP Commerce integration — making performance and correctness critical at every layer.',
        'I own the performance story end-to-end: monitoring Core Web Vitals, SEO health, SpeedCurve trends, and Sentry signals to catch regressions before they reach production. I also own the quality of the CMS experience — designing custom SmartEdit components for the content team and integrating third-party services like Foxentry and Exponea, consolidating logic when simultaneous changes from multiple teams cause unexpected behaviour.',
        'Beyond writing code, I drive the engineering process: I analyse and size tickets before they enter the sprint, explain implementation strategies to the team, mentor a junior colleague through code reviews, and facilitate frontend knowledge-sharing syncs. I am the go-to person when things break or the build stops working — trusted by the whole team to unblock them quickly.',
      ],
    },
    {
      company: 'ZF Group',
      title: 'Front-end Developer',
      period: '2023 - 2025',
      paragraphs: [
        'Sole frontend owner of BusConnect — ZF\'s global fleet management platform used by operators of 10,000+ buses worldwide. Built in Angular 18 with a GraphQL backend, Leaflet-based live maps, and ECharts for data visualisation, I worked directly with the product owner to design and deliver features users actually needed. I also collaborated closely with a dedicated frontend team building RescueConnect, ZF\'s companion platform for emergency services coordination.',
        'I built the analytics core of the application: custom dashboards displaying real-time bus telemetry (door state, speed, current stop), a multi-fuel consumption monitor that lets fleet managers spot underperforming vehicles across hundreds of assets and months of history, and filterable charts and tables that stay readable and performant even with thousands of data points. Where the GraphQL backend struggled under heavy queries, I designed client-side caching and request strategies to eliminate the bottlenecks. I also delivered an automated AI translation pipeline that localised the entire application into tens of languages.',
        'I drove the transformation of a desktop-only product into a fully responsive application accessible on mobile — something that had never been prioritised before I joined. Working autonomously and in close contact with the business, I was responsible for the full delivery lifecycle: scoping, implementation, and working with a dedicated tester to ship production-ready features.',
      ],
    },
    {
      company: 'Nano Energies',
      title: 'Front-end Developer',
      period: '2023',
      paragraphs: [
        'Worked on dflex - an energy flexibility aggregation platform operating across five Central European markets. The portal lets industrial clients and households earn revenue by providing grid balancing services to transmission operators, participate in energy auctions, and supervise real-time device dispatch across a virtual power plant. Built with Angular 15, the app used SignalR for live device data and ECharts for energy dashboards.',
        'The most demanding technical aspect was a custom RxJS store architecture built without NgRx — a BaseStore facade pattern with reducer functions for immutable state management that powered every data-heavy page. The codebase followed a strict separation of modules, pages, components, services, and typed data sources, which taught me how purposeful architecture pays off at scale.',
        'Nano Energies was a fast-moving startup — ship fast, learn from mistakes, take ownership. Working under the senior developer who originally built the dflex platform, I gained both deep technical mentorship and the independence to deliver features end-to-end. That combination of high responsibility and a strong engineering role model accelerated my growth more than any other position.',
      ],
    },
    {
      company: 'Česká Spořitelna',
      title: 'Full-stack Developer',
      period: '2020 - 2023',
      paragraphs: [
        'Full-stack developer in a 15-person agile team responsible for a wide portfolio of financial products across Česká spořitelna\'s digital ecosystem. The scope was unusually broad — I maintained and developed tens of separate applications, ranging from brand-new features like Penzijní spoření (a pension savings product I built from the ground up) to legacy systems like Vkladní knížky, which dated back to the original AngularJS 1.x era.',
        'The portfolio spanned two very different types of applications: responsive, mobile-first client-facing interfaces integrated into the George banking app, and complex internal tools used by bank employees to enter and manage product data in the bank\'s core systems. The banker-facing apps required a deep understanding of the underlying business processes to implement correctly — the UI had to map precisely to how the institution actually operated.',
        'One day every month was dedicated to resolving issues from the bank\'s global ticketing system — a practice that demanded the ability to quickly context-switch, read unfamiliar codebases, reproduce bugs, and ship fixes across projects I had never touched before. That rhythm built a versatility and debugging confidence that carries through everything I do.',
      ],
    },
    {
      company: 'Unicorn',
      title: 'Software Engineer',
      period: '2019 - 2020',
      paragraphs: [
        'Placed as a contractor at Komerční banka through Unicorn Systems — one of the largest Czech enterprise software houses — developing and maintaining TSS, a rich-client banking tool used daily by KB\'s bankers to view and edit client data across the institution.',
        'The core of the system was built in C++ and C#, with complex interop between native and managed layers — a demanding environment that sharpened my understanding of performance-critical enterprise software. I was responsible for maintaining and extending the existing feature set while keeping the application stable for hundreds of internal users.',
        'I also built a document administration module in Angular, which was my first production frontend work and sparked the direction my career would take. Working inside a large bank\'s IT ecosystem gave me a strong foundation in enterprise development practices, security awareness, and the rigour required when software handles sensitive financial data.',
      ],
    },
    {
      company: 'Taiwan',
      title: 'Exchange Student',
      period: '2018',
      paragraphs: [
        'Spent a semester studying at National Taiwan University of Science and Technology (Taiwan Tech) — a top-ranked technical university in Asia. The experience broadened both my technical horizon and my perspective on how engineering is approached in different cultures.',
        'My focus was machine learning: coursework and projects covering neural networks, image recognition, and applied AI. The hands-on research culture pushed me to experiment with ideas I would not have encountered in a standard curriculum.',
        'Collaborating with a fellow student, I contributed to a patent project that applied reinforcement learning to discover optimal game strategies — an early lesson in translating academic research into something concrete and publishable.',
      ],
    },
    {
      company: 'Kadel',
      title: 'Junior Java Developer',
      period: '2018',
      paragraphs: [
        'Joined Kadel, a company specialising in software for large-scale document printing and management. My work focused on their SWT-based document reader — extending it with features that let users edit file structures and configure print layouts.',
        'The most memorable piece I built was a custom color picker widget: a small but complete UI problem that required me to learn color theory and build an intuitive, precise component from scratch. It gave me an early appreciation for how much craft goes into a well-designed user interface.',
        'This was also my first experience working in an agile team with proper sprints, code reviews, and iterative delivery — the habits that have shaped how I work ever since.',
      ],
    },
    {
      company: 'RTSoft',
      title: 'PHP Developer / Tester',
      period: '2016',
      paragraphs: [
        'My first professional role in software development. I learned web development using the Czech PHP framework Nette and shipped real features to production — building the discipline of writing code that others depend on.',
        'I designed and built an internal tool for comparing SQL database schemas, which taught me how to turn a messy, manual process into something reliable and repeatable.',
        'I also spent significant time writing automated end-to-end tests in Selenium — an early introduction to the value of test coverage that has informed how I approach quality ever since.',
      ],
    },
  ];

  selectedJob = 0;
  animClass = '';
  isAnimating = false;
  animVertical = true;
  private pendingJob: number | null = null;

  selectJob(index: number): void {
    if (index === this.selectedJob || this.pendingJob !== null) return;
    const isForward = index > this.selectedJob;
    const isMobile = window.innerWidth < 768;

    this.pendingJob = index;
    this.isAnimating = true;
    this.animVertical = !isMobile;

    this.animClass = isMobile
      ? (isForward ? 'slide-to-left'  : 'slide-to-right')
      : (isForward ? 'slide-to-top'   : 'slide-to-bottom');

    setTimeout(() => {
      this.selectedJob = this.pendingJob!;
      this.pendingJob = null;

      this.animClass = isMobile
        ? (isForward ? 'slide-from-right' : 'slide-from-left')
        : (isForward ? 'slide-from-bottom' : 'slide-from-top');

      setTimeout(() => {
        this.isAnimating = false;
        this.animClass = '';
      }, 320);
    }, 320);
  }
}
