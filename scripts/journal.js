console.log("journal.js")

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

const renderJournalEntries = (entries) => {

}

// Invoke the render function
renderJournalEntries(journalEntries)