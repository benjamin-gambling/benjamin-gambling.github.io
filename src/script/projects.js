const projects = document.getElementById("projects");

const projectInto = `
<h6 class="docs-header">Projects</h6>
<p>This is a collection of all my projects past and present. There is a mix of personal projects, assignments and guided
tutorials. All in someway have introduced new methods, frameworks, ideologies or languages. Each one links to the
particular Github repo where there is a detailed readme that outlines the project with a link to a live demo where you
can see my work in action. </p>
<h6 id="current" class="docs-header">> Current Projects</h6>
<ul>
  <li>Typescript - Jump on the bandwagon and learn Typescript, possibly implementing it into the ToDo portion of my
    WeatherToDo app otherwise building a pub quiz app with React and Typescript</li>
  <li>CODEVID-19 - A personal blog where i document my story on making the leap to becoming a web developer, hoping to
    encourage other people who may not have the confidence to do the same as well as helping them make well informed
    decisions about which resources to use and when.</li>
  <li>GraphQl - Complete a crash course to work towards building a full stack app with React and Node.js</li>
  <li>WeatherToDo - A weather based planning app built with React Open Weather Data API, the app gives you the ability to plan your life
    easily around the weather. hoping to eventually make it available on IOS and Android using React Native, as i think that is where it would be most useful.</li>
  <li>Phase 10 Scorecard - Using React Native create a scoring app for the popular card game that would be
    available on both IOS and Android.</li>
  <li>Ruby/Ruby on Rails - Focus on another popular back end language and framework by following The Odin Project
    Full-Stack Ruby on Rails curriculum</li>
</ul>
`;

const idList = ["node", "react", "typescript", "javascript", "sql", "html"];
const lang = {
  "Node.JS / Express.JS": [
    "hackernews",
    "graphql-api",
    "inventory-application",
    "local-library",
    "mini-message-board",
    "basic-info-site",
  ],
  "React.JS": [
    "weather-todo",
    "markdown-previewer",
    "random-quote-machine",
    "pomodoro-clock",
  ],
  TypeScript: ["pokedex"],
  "JavaScript (ES6+)": [
    "tic-tac-toe",
    "library",
    "restaurant",
    "tetris",
    "calculator",
    "etch-a-sketch",
    "chit-chat",
    "gif-me-up",
    "rock-paper-scissors",
    "image-carousel",
    "responsive-portfolio-navbar",
  ],
  SQL: ["sql-zoo"],
  "HTML5 / CSS3": [
    "drum-kit",
    "google-homepage",
    "survey-form",
    "technical-description-page",
    "tribute-page",
    "product-landing-page",
    "portfolio",
  ],
};

const showProjects = () => {
  let id = 0;
  let firstdiv = document.createElement("div");
  firstdiv.innerHTML = projectInto;
  projects.appendChild(firstdiv);

  for (const prop in lang) {
    let outdiv = document.createElement("div");
    outdiv.classList.add("docs-section");

    let header = document.createElement("h6");
    header.classList.add("docs-header");
    header.id = idList[id];
    header.textContent = prop;

    let innerdiv = document.createElement("div");
    innerdiv.classList.add("docs-content");

    lang[prop].forEach((repo) => {
      let link = document.createElement("a");
      link.href = `https://github.com/benjamin-gambling/${repo}`;

      let img = document.createElement("img");
      img.src = `https://github-readme-stats.vercel.app/api/pin/?username=benjamin-gambling&repo=${repo}&title_color=1ea1c9`;

      link.appendChild(img);
      innerdiv.appendChild(link);
    });

    id += 1;

    outdiv.appendChild(header);
    outdiv.appendChild(innerdiv);
    projects.appendChild(outdiv);
  }
};

showProjects();
