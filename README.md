# Grady's Daily Journal

### (credit to Colleen Woolsey's README):
#### DAILY JOURNAL PART 1 AND 2

1. Built a form for entering in journal entries.
1. Defined how the data collected in the form would be stored.
1. Built a data structure to represent a journal entry.
1. Built a function that returns an HTML representation of that data structure.
1. Rendered it to the DOM.

#### DAILY JOURNAL - PART 3 The learning objectives were:

1. To set up JSON Server to store the data for daily journal entries
1. Query that data from the API
1. Use Promises (fetch)
1. Render the entries to the DOM.

#### DAILY JOURNAL - PART 4

1. Modularized JavaScript code - created data.js, entriesDOM.js and entryComponent.js
1. Refactored journal.js and included new script tags in index.html in correct order
OPTIONAL CHALLENGE

Change the code in both src/scripts/entriesDOM.js and src/scripts/entryComponent.js so that the functions in each one becomes a method on an object
Once the objects are defined, refactor your code to use the methods on those objects where needed
#### DAILY JOURNAL - PART 5

1. Use event listeners, and querying the DOM to make your daily journal form work
1. Save entries to your API
1. Use fetch to make a POST request to your API
OPTIONAL CHALLENGE A: Advanced Form Validation Add the following validation code to your journal entry form fields

Pick a maximum length for concepts field and provide visual feedback if you type in a string that is longer than that maximum
Test that the concept and entry fields contain no curse words. You can use regular expressions for that OPTIONAL CHALLENGE B: Entry Form Component
Create a module that defines a function for building the form fields dynamically instead of them being hard-coded in the HTML OPTIONAL CHALLENGE C: Creating Method Abstractions
Write a method in your API module that performs a POST and a GET, then use that method in the event listener.