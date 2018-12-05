console.log("journal.js")

// borrowed from Jisie's "resource-tracker"/ (located in Cohort29repo):
let formContainer = document.querySelector("#form-container");

formContainer.innerHTML = `<form>
<section>
<label for="date">Date</label>
<input type="date" name="date" id="journal-date" >
</section>

<section>
<label for="conceptscovered">Concepts Covered:</label>
<input type="text" name="conceptscovered" id="journal-conceptscovered">
</section>

<section>
<label for="resourcetype">Journal entry:</label>
<input type="text" name="journalentry">
</section>

<section>
<label for="mood">Mood:</label>
<select id="mySelect" name="mood" size="4">
                <option value="happy">Happy</option>
                <option value="fine">Fine</option>
                <option value="sad">Sad</option>
                <option value="Anxious">Anxious</option>
        </select>
</section>

<section>
  <button type="button" id="add-button">Record Journal Entry</button>
</section>
</form>`;


const articlesContainer = document.createElement("section");
articlesContainer.classList.add("articles-container");

let resourcesContainer = document.querySelector("#resources-container");
resourcesContainer.appendChild(articlesContainer);



const journalEntries = [
    {
        date: "07/24/2018",
        concept: "Array methods",
        entry: "We learned about 4 different array methods today. forEach made sense, but the others still confuse me.",
        mood: "Ok"
    }
]

// console.table(journalEntries);

// copy pasta from Jisie's Resource Tracker
let createAndAppendResources = () => {
    for(let i = 0; i < journalEntries.length; i++){
      console.log(journalEntries[i]);
    }
    articlesContainer.innerHTML = "";
  
    journalEntries.forEach(function(resourceObj){
      // console.log(resourceObj);
      const resourceElement = document.createElement("section");
      // <a href={link}>{name}</a>
      // const linkElement = document.createElement("a");
      // linkElement.textContent = resourceObj.name;
      // linkElement.setAttribute("href", resourceObj.link);
      // resourceElement.appendChild(linkElement);
      
      articlesContainer.appendChild(resourceElement);
   
    })
  }
  
  createAndAppendResources();


  let addButton = document.querySelector("#add-button");
  addButton.addEventListener("click", () => {
    console.log("Button was clicked");
  
    let resourceName = document.querySelector('input[name="date"]').value;
    let resourceLink = document.querySelector('input[name="conceptscovered"]').value;
    let resourceLink2 = document.querySelector('input[name="journalentry"]').value;
    // i'm not able to retrieve the value of the below so i am commenting out for more research
    
        let x = document.getElementById("mySelect").selectedIndex;
        let y = document.getElementsByTagName("option")[x].value;
    
    // console.log("Input values: ", resourceName, resourceLink, resourceLink2, resourceType);
    console.log("Input values: ", resourceName, resourceLink, resourceLink2, y);
  
    let resource = {
      date: resourceName,
      concept: resourceLink,
      entry: resourceLink2,
      mood: y
    }
  

    journalEntries.push(resource);
    createAndAppendResources();
  })
  
  





/*
    Purpose: To create, and return, a string template that
    represents a single journal entry object as HTML

    Arguments: journalEntry (object)
*/

// const makeJournalEntryComponent = (journalEntries) => {
//     // Create your own HTML structure for a journal entry
//     return 
//     `<div class="entriesDOM"> 
//     <h2>${journalEntries.title}</h2>
//     <h4>${journalEntries.date}</h4>
//     <p>${journalEntries.content}</p>
//     <button id="delete--${journalEntries.id}">delete</button>
//     </div>`
// }






// let entryLogEl = document.querySelector('.entryLog');
// entryLogEl.textContent += "bloop"

// const renderJournalEntries = (entries) => {
//     let entryEl = document.querySelector('.entryLog');
//     entryEl.textContent += "bloop"
// }

// Invoke the render function
// renderJournalEntries(journalEntries)