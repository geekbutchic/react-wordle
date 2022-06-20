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


Use import/export syntax with react
User require/module.export syntax with express
// Default Export / Only exporting 1 thing
export default App;
import App from "./app.js"
module.exports = App
const App = require("./app.js")
---
// Module Export / Exporting multiple things
export App
import { App } from "./app.js"
module.exports = {
  App: App
}
const { App } = require("./app.js") 
