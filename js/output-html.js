//const axios = require('axios'); //node.js lösning
const container = document.querySelector(".container");

const showShortcuts = () => {
let output = ""
axios.get('http://localhost:3000/users/')
    .then(resp => {
        data = resp.data;
        data.forEach(e => {
            output += `
            <div class="card">
              <h1>${e.first_name} ${e.last_name}</h1>
              <a href="mailto:${e.email}">${e.email}</a>
            </div>
            `;
            //console.log(output);
            //console.log(`${e.first_name}, ${e.last_name}, ${e.email}`);
            
            container.innerHTML = output
        });
    })
    .catch(error => {
        console.log(error);
    });    
  }
  
  document.addEventListener("DOMContentLoaded", showShortcuts)