# Grady's Daily Journal

### borrowed from Colleen Woolsey's README:
1. 1. DAILY JOURNAL PART 1 AND 2

Built a form for entering in journal entries.
Defined how the data collected in the form would be stored.
Built a data structure to represent a journal entry.
Built a function that returns an HTML representation of that data structure.
Rendered it to the DOM.
1. DAILY JOURNAL - PART 3 The learning objectives were:

To set up JSON Server to store the data for daily journal entries
Query that data from the API
Use Promises (fetch)
Render the entries to the DOM.
1. DAILY JOURNAL - PART 4

Modularized JavaScript code - created data.js, entriesDOM.js and entryComponent.js
Refactored journal.js and included new script tags in index.html in correct order
OPTIONAL CHALLENGE

Change the code in both src/scripts/entriesDOM.js and src/scripts/entryComponent.js so that the functions in each one becomes a method on an object
Once the objects are defined, refactor your code to use the methods on those objects where needed
1. DAILY JOURNAL - PART 5

Use event listeners, and querying the DOM to make your daily journal form work
Save entries to your API
Use fetch to make a POST request to your API
OPTIONAL CHALLENGE A: Advanced Form Validation Add the following validation code to your journal entry form fields

Pick a maximum length for concepts field and provide visual feedback if you type in a string that is longer than that maximum
Test that the concept and entry fields contain no curse words. You can use regular expressions for that OPTIONAL CHALLENGE B: Entry Form Component
Create a module that defines a function for building the form fields dynamically instead of them being hard-coded in the HTML OPTIONAL CHALLENGE C: Creating Method Abstractions
Write a method in your API module that performs a POST and a GET, then use that method in the event listener.