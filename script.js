const projects = [
    { title: 'Project 1', description: 'Description of project 1'},
    { title: 'Project 2', description: 'Description of project 2' },

];

projects.forEach(project => {
    const projectItem = document.createElement('div');
    projectItem.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
    projectList.appendChild(projectItem);
});