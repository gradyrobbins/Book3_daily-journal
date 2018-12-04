console.log("journal.js")

// borrowed from Jisie's "resource-tracker":
// let formContainer = document.querySelector("#form-container");

// formContainer.innerHTML = `<form>
// <section>
// <label for="date">Date</label>
// <input type="date" name="date" id="journal-date" >
// </section>

// <section>
// <label for="conceptscovered">Concepts Covered:</label>
// <input type="text" name="conceptscovered" id="journal-conceptscovered">
// </section>

// <section>
// <label for="resourcetype">Journal entry:</label>
// <input type="text" name="journalentry">
// </section>

// <section>
// <label for="mood">Mood:</label>
// <select name="mood" size="4">
//                 <option value="happy">Happy</option>
//                 <option value="fine">Fine</option>
//                 <option value="sad">Sad</option>
//                 <option value="Anxious">Anxious</option>
//         </select>
// </section>

// <section>
//   <button type="button" id="add-button">Record Journal Entry</button>
// </section>
// </form>`;


const journalEntries = [
    {
        date: "07/24/2018",
        concept: "Array methods",
        entry: "We learned about 4 different array methods today. forEach made sense, but the others still confuse me.",
        mood: "Ok"
    }
]

// console.table(journalEntries);

/*
    Purpose: To create, and return, a string template that
    represents a single journal entry object as HTML

    Arguments: journalEntry (object)
*/

const makeJournalEntryComponent = (journalEntries) => {
    // Create your own HTML structure for a journal entry
    return 
    `<div class="entriesDOM"> 
    <h2>${journalEntries.title}</h2>
    <h4>${journalEntries.date}</h4>
    <p>${journalEntries.content}</p>
    <button id="delete--${journalEntries.id}">delete</button>
    </div>`
}




let entryLogEl = document.querySelector('.entryLog');
entryLogEl.textContent += "bloop"

const renderJournalEntries = (entries) => {
    let entryEl = document.querySelector('.entryLog');
    entryEl.textContent += "bloop"
}

// Invoke the render function
// renderJournalEntries(journalEntries)