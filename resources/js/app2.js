require('./bootstrap');

window.$ = require('jquery');

function init() {
  console.log('init');
  // For the default version
const algoliasearch = require('algoliasearch');

// For the default version
import algoliasearch from 'algoliasearch';

// For the search only version
import algoliasearch from 'algoliasearch/lite';

const client = algoliasearch('YourApplicationID', 'YourAdminAPIKey');
const index = client.initIndex('your_index_name');


const index = client.initIndex('contacts');
const contactsJSON = require('./contacts.json');

index.saveObjects(contactsJSON, {
  autoGenerateObjectIDIfNotExist: true
}).then(({ objectIDs }) => {
  console.log(objectIDs);
});

index.setSettings({
  searchableAttributes: [
    'lastname',
    'firstname',
    'company',
    'email',
    'city',
    'address'
  ]
}).then(() => {
  // done
});



// Search for a first name
index.search('jimmie').then(({ hits }) => {
  console.log(hits);
});

// Search for a first name with typo
index.search('jimie').then(({ hits }) => {
  console.log(hits);
});

// Search for a company
index.search('california paint').then(({ hits }) => {
  console.log(hits);
});

// Search for a first name and a company
index.search('jimmie paint').then(({ hits }) => {
  console.log(hits);
});



// Replace with your own values
const searchClient = algoliasearch(
  'pl3L0GWSSXDR',
  '2e3513be338d19d42a81830c543b4aa8' // search only API key, not admin API key
);

const search = instantsearch({
  indexName: 'contacts',
  searchClient,
  routing: true,
});

search.addWidgets([
  instantsearch.widgets.configure({
    hitsPerPage: 10,
  })
]);

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#search-box',
    placeholder: 'Search for contacts',
  })
]);

search.addWidgets([
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: document.getElementById('hit-template').innerHTML,
      empty: `We didn't find any results for the search <em>"{{query}}"</em>`,
    },
  })
]);

search.start();

}


$(document).ready(init)
