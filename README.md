# Events and Debugging Assessment

Time to assess how well you have learned to use the debugging tools in Chrome Dev Tools, and writing click event listeners. This application is to show kids with illnesses and the memories the would like to make. Celebrities sign up to help kids make memories.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Event Listeners to Create

1. When the kid name is clicked, it should display their wish.
1. When the celebrity name is clicked, it should display their sport.
1. The pairings list should should contain the pairing in the following format.
    ```html
    {child name} will be making memories with {celebrity name}, a {celebrity sport} star, by {child wish}
    ```

Below is an animation showing how the application should look when complete and how the event listeners should work.

<img src="./images/debugging-events-assessment.gif" width="700px">

## Setup

Your instruction team will provide a link for you to create your assessment repository. Once your repo is created, clone it to your machine.

1. Make sure you are in your `workspace` directory.
1. `git clone {github repo SSH string}`.
1. `cd` into the directory it creates.
1. `code .` to open the project code.
1. Use the `serve` command to start the web server.
1. Open the URL provided in Chrome.

Make sure your Developer Tools are open at all times while working on this project. Use the messages provided in the Console to determine what code needs to be fixed or implemented, and use breakpoints in the Sources tab to step through your code as you debug.

## Vocabulary and Understanding

Before you click the "Complete Assessment" button on the Learning Platform, add your answers below each question and make a commit.

1. When a child is clicked on in the browser, which module contains the code that will execute on that event happening? Can you explain the algorithm of that logic?
   > 
   ```
   the code for the Event Listener triggered by clicking on a childs name is in the Kids module.
   
    1.) First a click event listener is added to the entire document.

    2.) When an html element is clicked on, the listener captures that element.

    3.) Then the data attribute "type" of the captured element is checked for equality with the string "child"

    4.) If equal, the window.alert() method is utilized to display a message of an interpolated string
    ```
2. In the **Pairings** module, why must the `findCelebrityMatch()` function be invoked inside the `for..of` loop that iterates the kids array?
   > 
   ```
   It must be invoked inside the for of loop to dynamically match each kid to their specified celebrity. 
     And use that data to build the <li> interpolated html string for displaying the the children.
     ```
    
3. In the **CelebrityList** module, can you describe how the name of the sport that the celebrity plays can be displayed in the window alert text?
   > 
   ```
   It can be displayed by using the "sport" dataset attribute of the target of the click event.
   ```
4. Can you describe, in detail, the algorithm that is in the `main` module?
   > 
   ```
   1.) A reference to the element with an id of "container" is stored in the variable "mainContainer"
   2.) A new variable "applicationHTML" is defined with the value of an interpolated html string
   3.) the .innerHTML attribute of the element referenced with the mainContainer variable is used to inject the applicationHTML string into the element with the id "container"
    ```
