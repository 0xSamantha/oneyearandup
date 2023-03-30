// get references to the form, menu button, and project list
const form = document.querySelector('form');
const menuButton = document.querySelector('.menu-button');
const projectList = document.querySelector('.project-list');

// define the projects data as an array of objects
const projects = [
  {
    title: 'Cryptopunks',
    description: 'Cryptopunks',
    category: '',
    year: '2017',
    link: 'https://example.com/cryptopunks'
  },
  {
    title: 'Cool Cats',
    description: 'Cool Cats',
    category: '',
    year: '2021',
    link: 'https://example.com/coolcats'
  },
  {
    title: 'Bored Ape Yacht Club',
    description: 'Bored Ape Yacht Club',
    category: '',
    year: '2021',
    link: 'https://example.com/boredapeyachtclub'
  },
  {
    title: 'Cold Blooded Creepz',
    description: 'Cold Blooded Creepz',
    category: '',
    year: '2022',
    link: 'https://example.com/coldbloodedcreepz'
  }
];

// function to render the projects in the project list
function renderProjects(projects) {
  const container = document.querySelector(".projects-container");
  container.innerHTML = "";

  if (projects.length === 0) {
    container.innerHTML = "<p>No projects found.</p>";
    return;
  }

  const projectItems = projects.map((project) => {
    return `<div class="project-item">
              <h3 class="project-title">${project.title}</h3>
              <p class="project-description">${project.description}</p>
              <p class="project-category">${project.category}</p>
            </div>`;
  });

  container.innerHTML = projectItems.join("");
}

// filter the projects by category
function filterProjects(category) {
  const filteredProjects = projects.filter((project) => {
    return project.category === category;
  });

  renderProjects(filteredProjects);
}

// get the category buttons and add event listeners to filter projects
const buttons = document.querySelectorAll(".category-button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.dataset.category;
    filterProjects(category);
  });
});

// toggle the project list when the menu button is clicked
menuButton.addEventListener('click', () => {
  projectList.classList.toggle('hidden');
});

// render all the projects on page load
renderProjects(projects);
