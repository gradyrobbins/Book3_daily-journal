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
                <option value="Happy">Happy</option>
                <option value="Fine">Fine</option>
                <option value="Sad">Sad</option>
                <option value="Anxious">Anxious</option>
    <option>🤓</option>
    <option>🤯</option>
    <option>💩</option>
    <option>🤨</option>
    <option>😐</option>
    <option>💡</option>
    <option>🎊</option>
    <option>🎯</option>
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

let containerRef = document.querySelector("#container");


const journalEntries = [
    {
        date: "07/24/2018",
        concept: "Array methods",
        entry: "We learned about 4 different array methods today. forEach made sense, but the others still confuse me.",
        mood: "Ok"
    },
    {
        date: "08/24/2018",
        concept: "more Array methods",
        entry: "bloop bloop bleep",
        mood: "Ok"
    }
]

// console.table(journalEntries);


// copy pasta from Jisie's Resource Tracker
let createAndAppendResources = () => {
    // for(let i = 0; i < journalEntries.length; i++){
    //     console.log(journalEntries[i]);
    // }
    // articlesContainer.innerHTML = "";

    // for(let i = 0; i < journalEntries.length; i++){

        for (entry of journalEntries) {
        // console.log(`entry ${i}: `, entry)
        let entryComponent = `
        <div id="entry" class="">
        <h1${entry.concept} >
        <section${entry.entry} >
        <aside${entry.date} >
        </div>
    `

            articlesContainer.innerHTML += entryComponent;

        }
    }
    createAndAppendResources();

    //event listener on add button; capture values from input fields
    let addButton = document.querySelector("#add-button");
    addButton.addEventListener("click", () => {
        // console.log("Button was clicked");

        //capture values from the form
        let dateValue = document.querySelector('input[name="date"]').value;
        let conceptsCoveredValue = document.querySelector('input[name="conceptscovered"]').value;
        let journalEntryValue = document.querySelector('input[name="journalentry"]').value;
        //for "mood" selector:
        let moodSelector = document.getElementById("mySelect").selectedIndex;
        let moodValue = document.getElementsByTagName("option")[moodSelector].value;

        console.log("Input values: ", dateValue, conceptsCoveredValue, journalEntryValue, moodValue);

        let resource = {
            date: dateValue,
            concept: conceptsCoveredValue,
            entry: journalEntryValue,
            mood: moodValue
        }

        console.log("resource: " , resource)
        journalEntries.push(resource);

        console.table("journalEntries ", journalEntries)
        createAndAppendResources();
    })



//     for (entry of journalEntries) {
//         // console.log(entry)
//         let entryComponent = `
//         <div id="entry" class="">
//         <h1${entry.concept} >
//         <section${entry.entry} >
//         <aside${entry.date} >
//         </div>
//     `
//     console.log("entryComponent" + entryComponent)
//     containerRef.innerHTML += entryComponent
// }





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