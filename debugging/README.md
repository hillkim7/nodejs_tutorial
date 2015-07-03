# example shows debugging modules and application
This example code is from the CHAPTER 18 DEBUGGING MODULES AND APPLICATIONS in the book, Professional Node.js.

## Using node's built-in debugger
`node debug my_app.js`

## Using node's inspector
* Install node-inspector
`npm install -g node-inspector --unsafe-perm `  

* Node Inspector runs as a daemon by default on port 8080. You can launch it like this:
`node -inspector&`  

* Launch node using the --debug or --debug-brk option
`node --debug-brk my_app.js`

* Open a browser and point it to http://localhost:8080.


