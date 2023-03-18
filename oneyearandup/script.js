// get references to the form and table body
const form = document.querySelector('form');
const tableBody = document.querySelector('#projects-table-body');
const noResultsMessage = document.querySelector('#no-results-message');

// define the projects data as an array of objects
const projects = [
	{
		name: 'Cryptopunks',
		description: 'Description of Project A',
		year: '2017',
		link: 'https://example.com/project-a'
	},
	{
		name: 'Cool Cats',
		description: 'Description of Project B',
		year: '2021',
		link: 'https://example.com/project-b'
	},
	{
		name: 'Bored Ape Yacht Club',
		description: 'Description of Project C',
		year: '2021',
		link: 'https://example.com/project-c'
	}, 
	{
		name:
	}
];

// function to render the projects data as HTML
function renderProjects(projects) {
	// clear any existing content from the table body
	tableBody.innerHTML = '';
	
	// loop through the projects and add each one to the table body
	for (const project of projects) {
		const row = document.createElement('tr');
		row.innerHTML = `
			<td>${project.name}</td>
			<td>${project.description}</td>
			<td>${project.year}</td>
			<td><a href="${project.link}">Link to ${project.name}</a></td>
		`;
		tableBody.appendChild(row);
	}
}
