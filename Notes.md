# WORDLE NOTES 

* EXPORT TYPES IN REACT
* USES IMPORT AND EXPORT KEY WORDS

* DEFAULT EXPORT - ONLY 1 ITEM
* IMPORT SYNTAX 
> import App from "./app.js"
* EXPORT SYNTAX 
> export default App

* EXPORTING MULTIPLE ITEMS 
* EXPORT SYNTAX 
> export App
* IMPORT SYNTAX 
> import {App} from "./app.js"

```js script
Use import/export syntax with react
User require/module.export syntax with express
// Default Export / Only exporting 1 thing
export default App;
import App from "./app.js"
module.exports = App
const App = require("./app.js")
-----------------------------
// Module Export / Exporting multiple things
export App
import { App } from "./app.js"
module.exports = {
  App: App
}
const { App } = require("./app.js")
``` 

### SPECIFICITY
* STYLE ATTRIBUTES - IN LINE
* ID 
* CLASS
* ELEMENTS
* !IMPORTANT - HIGHEST PRIORITY

### RESOURCES 

Click [HERE:](https://css-tricks.com/how-css-selectors-work/) BEGINNER CONCEPTS: HOW CSS SELECTORS WORK

Click [HERE:](https://css-tricks.com/specifics-on-css-specificity/) SPECIFICS ON CSS SPECIFICITY

Click [HERE:](https://www.reddit.com/r/webdev/comments/ur6v5m/css_selectors_visually_explained/) CSS SELECTORS VISUALLY EXPLAINED

```js script
const dayIncrementor = () => {
    var startDate = new Date("6-10-2022");
    var today = new Date();
    var days = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
    return days;
  };

  const pickWordleAnswer = () => answerList[dayIncrementor()];
```