// Get external data with fetch
// const data = fetch('../library/data.json').then(response => response.json());

// Get external template with fetch
// const template = fetch('../library/people/fr/employment_promise/fr.html.mustache').then(response => response.text());

const fs = require('fs');
const mustache = require('mustache');

const assembleDocument = (documentPath, data) => {
  const template = fs.readFileSync(`../library/${documentPath}.html`, 'utf8')
  return mustache.render(template, data);
}

const documentPath = 'commercial/eu/services_provisioning_termination/fr'
const data = JSON.parse(fs.readFileSync('./input.json', 'utf8'))

const html = assembleDocument(documentPath, data)
fs.writeFileSync('./output.html', html)