console.log("journal.js")

// build out the form element; append the form to "form-container"
let formContainer = document.querySelector("#form-container");

// capture the element used to store all future journal entries
let entryLogContainer = document.querySelector("#entryLog");

//Your first step is to build a form component in HTML through which you will enter your daily journal entries. It should contain the following fields.

formContainer.innerHTML =
`<h3>New Journal Entry </h3>
<form>
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
<option value="Nerdy">🤓</option>
<option value="Mind Blown">🤯</option>
<option value="Poopy">💩</option>
<option value="The Rock is cookin'">🤨</option>
<option value="Meh">😐</option>
<option value="contemplative">💡</option>
<option value="Party Time">🎊</option>
<option value="Focused">🎯</option>
</select>
</section>

<section>
<button type="button" id="add-button">Record Journal Entry</button>
</section>
</form>`;


// declare a variable to represent an array of objects, each object inside the array represents one journal entry. (first 2 entries are pre-loaded/hard coded)
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
console.table(journalEntries);


// LOOP TO ADD ARRAY DATA TO HTML/DOM
// Overarching function that creates and appends new data to DOM - need to tie this to the button click

// Loop grabs the values from each array object (INCLUDING THE NEW DATA) and inserts them into "renderJournalEntries" function and then adds the result inside "entryContainer"

let createAndAppend = () => {
    // First, wipe the DOM element 'entryLogContainer' clean by setting it to "" , prevents duplicate entries
    entryLogContainer.innerHTML = "";

    // Loop through "journalEntries" array
    // Add the full array content (including newly input data) into the DOM.
    // Use string interpolation and dot notation: ${ }
    // Add each object's data (now HTML) into "entryContainer"

    for (let i = 0; i < journalEntries.length; i++) {
        entryLogContainer.innerHTML +=  `<article>
                                            <h5>Date: ${journalEntries[i].date} </h5> <br/>
                                            <p>Concept: ${journalEntries[i].concept} </p> <br/>
                                            <p>Entry: ${journalEntries[i].entry} </p><br/>
                                            <p>Mood: ${journalEntries[i].mood} </p><br/>
                                            <button id="delete--${journalEntries.id}">Delete</button>
                                        </article>` ;
    };
    }
// call the function to add data that *currently* exists in the array. New data will be added when you CLICK.
createAndAppend();


//event listener on add button; capture values from input fields
let addButton = document.querySelector("#add-button");
addButton.addEventListener("click", () => {
    // console.log("Button was clicked");

//capture values from the form
    let dateValue = document.querySelector('input[name="date"]').value;
    let conceptsCoveredValue = document.querySelector('input[name="conceptscovered"]').value;
    let journalEntryValue = document.querySelector('input[name="journalentry"]').value;
//capture values of "mood" dropdown selection:
    let moodSelector = document.getElementById("mySelect").selectedIndex;
    let moodValue = document.getElementsByTagName("option")[moodSelector].value;

    console.log("Form Input values: ", dateValue, conceptsCoveredValue, journalEntryValue, moodValue);

    let newest_journal_entry = {
        date: dateValue,
        concept: conceptsCoveredValue,
        entry: journalEntryValue,
        mood: moodValue
    }

    console.log(" newest_journal_entry : " , newest_journal_entry)

    journalEntries.push(newest_journal_entry);
    // console.log("journalEntries ", journalEntries)
    createAndAppend(journalEntries);
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