import { Schedule } from "../../server/schema/Schedule";
import { Level, SessionType } from "../../server/schema/Session";
import * as locations from "../locations";
import * as people from "../people";

const monday: Schedule = {
  day: "2024-06-10",
  description: "Monday",
  intervals: [],
};

// All times are given in GMT+0
const tuesday: Schedule = {
  day: "2024-06-11",
  description: "Tuesday – workshops",
  // location: locations.paasitorni,
  intervals: [
    {
      begin: "05:00",
      end: "06:00",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "Registration",
          description: "Register before the workshop.",
        },
      ],
    },
    {
      begin: "06:00",
      end: "09:00",
      sessions: [
        {
          type: SessionType.WORKSHOP,
          people: [people.kevin],
          title: "KV databases for busy people",
          description: `In this half-day workshop, you will learn what makes KV databases tick and how to leverage them on top of Deno Deploy platform. You do not have to know anything about Deno or the edge beforehand but after the workshop you will be well equipped to work with both. Preferably you should understand the basics of JavaScript before enrolling to the workshop.`,
          location: locations.yle,
        },
      ],
    },
    {
      begin: "06:00",
      end: "14:00",
      sessions: [
        {
          type: SessionType.WORKSHOP,
          people: [people.teroParviainen],
          title: "Web Audio from zero to DAW",
          description: `This full-day workshop is for current or aspiring musicians, or people who are interested in synthesis in general. After the workshop, you will understand the fundamentals of synthesis, web audio basics, and some of the newest modern web Audio features. Expect to learn about the Web Audio API, Audio Worklets, Synthesis, Music Theory, Audio focused UI and visualization, and sequencing and composition.`,
          // location: locations.nitor,
        },
        {
          type: SessionType.WORKSHOP,
          people: [people.misko],
          title: "Building Fast WebApps with QwikCity",
          description: `Building instant-on web applications at scale have been elusive. Real-world sites need tracking, analytics, and complex user interfaces and interactions. We always start with the best intentions but end up with a less-than-ideal site.

QwikCity is a new meta-framework that allows you to build large-scale applications with constant startup-up performance. We will look at how to build a QwikCity application and what makes it unique. The workshop will show you how to set up a QwikCity project. How routing works with layout. The demo application will fetch data and present it to the user in an editable form. And finally, how one can use authentication. All of the basic parts for any large-scale applications.

Along the way, we will also look at what makes Qwik unique, and how resumability enables constant startup performance no matter the application complexity.`,
          // location: locations.columbiaroad,
        },
        {
          type: SessionType.WORKSHOP,
          people: [people.jason],
          title: "TypeScript Essentials - From Novice to Expert",
          description: `TypeScript is becoming one of the most popular and powerful languages available for writing safe and reliable frontends. This workshop will go over everything you need to know to start leveraging TypeScript in new projects, or bring it to existing JavaScript and React projects.

Workshop Highlights:
- Foundations - Basics of Static Types, Type Inference, and Type Checking
- Popular Patterns - Generics, Conditionals, Guards, Typeof/Keyof, Unions
- Tooling - Compiling, Linting, Bundling TypeScript
- TypeScript with React - Typing React Components, Props, Hooks, I/O, correctly
- Runtime vs Build-time Type Checking and when to use each
- Resources and Documentation

Each section comes with hands-on exercises that will be completed during the workshop. By the end of the workshop, attendees will be competent to use and integrate TypeScript into any project!`,
          // location: locations.nitor,
        },
      ],
    },
  ],
};

const wednesday: Schedule = {
  day: "2024-06-12",
  description: "Wednesday – workshops",
  // location: locations.paasitorni,
  intervals: [
    {
      begin: "05:00",
      end: "06:00",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "Registration",
          description: "Register before the workshop.",
        },
      ],
    },
    {
      begin: "06:00",
      end: "14:00",
      sessions: [
        {
          type: SessionType.WORKSHOP,
          people: [people.ben],
          title: "Fast, efficient full-stack with Astro",
          description: `Serverless, server components, hot reloading, hydration... There's countless buzzwords when building full-stack webapps. They all have a time and place, but the best framework lets you reach for new tools only when you need that complexity. That's where Astro's "zero JS by default" comes in.

In this workshop, we'll use Astro to traverse those modern JS technologies by building a "swag" store. We'll start with plain server-rendered HTML, add authentication middleware, use React for interactive "add to cart" flows, and apply adapters to deploy to your host of choice. By the end of the day, you'll truly understand your stack to confidently ship new features.

Prerequisites: Fundamentals of JavaScript`,
          // location: locations.nitor,
        },
        {
          type: SessionType.WORKSHOP,
          people: [people.jason],
          title:
            "The TypeScript Compiler API - Automation and Codegen for TypeScript",
          description: `This intermediate/advanced workshop will cover topics that will supercharge your TypeScript productivity!

Attendees will acquire the skills to eliminate the presence of boilerplate code within codebases by leveraging the Compiler API for automated code generation. This streamlines development but also mitigates the risk of bugs and inconsistencies, especially in large-scale projects. Additionally, attendees will delve into advanced topics such as automating processes and enhancing code type safety through the creation of custom linters and transformers.

Workshop Highlights:
- Basics of the TypeScript Compiler API
- Compiling modules with the API
- Analyzing the TypeScript Abstract Syntax Tree (AST) programatically
- Writing a TypeScript linter from scratch
- Generating TypeScript code programatically
- Writing a TypeScript transformer from scratch
- Using the Type Checker API
- Unit Testing our scripts`,
          // location: locations.nitor,
        },
        {
          type: SessionType.WORKSHOP,
          people: [people.thaisSantos],
          title: "Design systems and accessibility",
          description: `To be done.`,
          // location: locations.nitor,
        },
      ],
    },
    {
      begin: "09:00",
      end: "10:00",
      sessions: [
        {
          type: SessionType.LUNCH,
          title: "Lunch",
          description:
            "We have Finnish food in store for people attending workshops.",
        },
      ],
    },
    {
      begin: "10:00",
      end: "11:30",
      title: "Workshops continue",
      sessions: [],
    },
    {
      begin: "11:30",
      end: "12:00",
      sessions: [
        {
          type: SessionType.COFFEE_BREAK,
          title: "Break",
          description: "Drink coffee, tea, or water.",
        },
      ],
    },
    {
      begin: "12:00",
      end: "14:00",
      title: "Workshops continue",
      sessions: [],
    },
  ],
};

const thursday: Schedule = {
  day: "2024-06-13",
  description: "Thursday – conference",
  location: locations.porssitalo,
  intervals: [
    {
      begin: "05:00",
      end: "05:50",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "Registration and light breakfast",
          description: `You can register later too.`,
        },
      ],
    },
    {
      begin: "05:50",
      end: "06:00",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "Welcome",
          description: "Quick welcome to the conference at the main stage.",
          urls: {
            video: "",
          },
        },
      ],
    },
    {
      begin: "06:00",
      end: "07:30",
      title: "Opening",
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "",
          description: "",
          people: [people.misko],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
        },
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "Reliable I/O with the TypeScript Compiler API",
          description: `Explore the power of TypeScript Compiler API paired with OpenAPI specs to streamline I/O code generation. Learn how to effortlessly synchronize frontend and backend with correct types and endpoints, eliminating manual updates and enhancing code reliability. Ideal for developers seeking efficient and synced workflows.`,
          people: [people.jason],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
        },
        {
          type: SessionType.PANEL,
          level: Level.INTERMEDIATE,
          title: "QA",
          description: ``,
          people: [people.misko, people.jason],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
        },
      ],
    },
    {
      begin: "07:30",
      end: "08:00",
      sessions: [
        {
          type: SessionType.COFFEE_BREAK,
          title: "Break",
          description: "Drink tasty Finnish coffee, live long and prosper.",
        },
      ],
    },
    {
      begin: "08:00",
      end: "09:30",
      title: "Artificial intelligence",
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "",
          description: "",
          people: [people.matt],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
        },
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "",
          description: "",
          people: [],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
        },
        {
          type: SessionType.PANEL,
          level: Level.INTERMEDIATE,
          title: "QA",
          description: ``,
          people: [people.matt],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
        },
      ],
    },
    {
      begin: "09:30",
      end: "10:30",
      sessions: [
        {
          type: SessionType.LUNCH,
          title: "Lunch",
          description: "Lunch with a Finnish twist.",
        },
      ],
    },
    {
      begin: "10:30",
      end: "12:00",
      title: "Design",
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "",
          description: "",
          people: [people.thaisSantos],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
        },
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "",
          description: "",
          people: [],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
        },
        {
          type: SessionType.PANEL,
          level: Level.INTERMEDIATE,
          title: "QA",
          description: ``,
          people: [people.thaisSantos],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
        },
      ],
    },
    {
      begin: "12:00",
      end: "12:30",
      sessions: [
        {
          type: SessionType.COFFEE_BREAK,
          title: "Break",
          description: "Drink coffee. Again.",
        },
      ],
    },
    {
      begin: "12:30",
      end: "14:00",
      title: "UI, Design, and Edge",
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "Dynamic UI at the Edge",
          description: `In this joint talk, we’ll explore using edge computing to build cross-platform apps with dynamic user interfaces. We’ll take a look at concepts like server-driven UI, the importance of respecting platform specific UI conventions, the edge, DurableObjects, and using WebSockets for collaboration.

          We will define a high level structure for our server driven UI, and create a light implementation layer on web and mobile to render based off the configuration data stored on the edge.

          We’ll look at two use-cases for shared experiences living on the edge. The first ensures continuity across a user’s experience of your app on both web and mobile, sharing their states. The second dives into collaborative apps, like shared meeting rooms with dynamic interfaces.`,
          people: [people.mo, people.samuel],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
        },
        {
          type: SessionType.PANEL,
          level: Level.INTERMEDIATE,
          title: "QA",
          description: ``,
          people: [people.mo, people.samuel],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
        },
      ],
    },
    /*
    {
      begin: "14:30",
      end: "18:00",
      sessions: [
        {
          type: SessionType.PARTY,
          title: "Party at Gofore",
          description:
            "The evening is enjoyed in a relaxed atmosphere, toned by the rhythms of a DJ. In addition to a great company, we offer participants pizza and other snacks and refreshing afterparty drinks! [Register separately](https://www.lyyti.in/Future_Frontend_goes_Gofore_1366/en).",
          location: locations.gofore,
        },
      ],
    },
    {
      begin: "14:00",
      end: "14:10",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "Ending of the day",
          description: "",
        },
      ],
    },*/
  ],
};

const friday: Schedule = {
  day: "2024-06-14",
  description: "Friday – conference",
  location: locations.porssitalo,
  intervals: [
    {
      begin: "05:00",
      end: "05:50",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "Registration and light breakfast",
          description: `You can register later too.`,
        },
      ],
    },
    {
      begin: "05:50",
      end: "06:00",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "Welcome",
          description: "Quick welcome to the conference at the main stage.",
          urls: {
            video: "",
          },
        },
      ],
    },
    {
      begin: "06:00",
      end: "07:30",
      title: "Green computing",
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "",
          description: "",
          people: [people.ben],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
        },
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "",
          description: "",
          people: [],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
        },
        {
          type: SessionType.PANEL,
          level: Level.INTERMEDIATE,
          title: "QA",
          description: ``,
          people: [people.ben],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
        },
      ],
    },
    {
      begin: "07:30",
      end: "08:00",
      sessions: [
        {
          type: SessionType.COFFEE_BREAK,
          title: "Break",
          description: "Drink tasty Finnish coffee, live long and prosper.",
        },
      ],
    },
    {
      begin: "08:00",
      end: "09:30",
      title: "Data protection",
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "",
          description: "",
          people: [],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
        },
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "",
          description: "",
          people: [],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
        },
        {
          type: SessionType.PANEL,
          level: Level.INTERMEDIATE,
          title: "QA",
          description: ``,
          people: [],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
        },
      ],
    },
    {
      begin: "09:30",
      end: "10:30",
      sessions: [
        {
          type: SessionType.LUNCH,
          title: "Lunch",
          description: "Lunch with a Finnish twist.",
        },
      ],
    },
    {
      begin: "10:30",
      end: "12:00",
      title: "User interaction",
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "",
          description: "",
          people: [people.rachelNabors],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
        },
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "",
          description: "",
          people: [people.steve],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
        },
        {
          type: SessionType.PANEL,
          level: Level.INTERMEDIATE,
          title: "QA",
          description: ``,
          people: [people.rachelNabors, people.steve],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
        },
      ],
    },
    {
      begin: "12:00",
      end: "12:30",
      sessions: [
        {
          type: SessionType.COFFEE_BREAK,
          title: "Break",
          description: "Drink coffee. Again.",
        },
      ],
    },
    {
      begin: "12:30",
      end: "14:15",
      title: "Demonstrations",
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "",
          description: "",
          people: [people.kevin],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
        },
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "",
          description: "",
          people: [people.stephanie],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
        },
        {
          type: SessionType.PANEL,
          level: Level.INTERMEDIATE,
          title: "QA",
          description: ``,
          people: [people.kevin, people.stephanie],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
        },
      ],
    },
    {
      begin: "14:15",
      end: "14:30",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "Ending of the day",
          description: "Thanks for the fish.",
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
        },
      ],
    },
    {
      begin: "15:00",
      end: "18:00",
      title: "Afterparty",
      sessions: [
        {
          type: SessionType.PARTY,
          title: "Afterparty at a mystery location",
          description: "",
          // location: locations.rooftopmiami,
        },
      ],
    },
  ],
};

export default [monday, tuesday, wednesday, thursday, friday];
