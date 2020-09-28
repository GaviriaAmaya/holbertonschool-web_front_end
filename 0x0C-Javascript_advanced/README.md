# 0x0C. Javascript advanced

## Contents

- [0x0C. Javascript advanced](#0x0c-javascript-advanced)
  - [Contents](#contents)
  - [Use, installation and preview](#use-installation-and-preview)
  - [Learning Objectives](#learning-objectives)
    - [What is lexical scoping in Javascript](#what-is-lexical-scoping-in-javascript)
    - [What is closure in Javascript](#what-is-closure-in-javascript)
    - [How to use closure](#how-to-use-closure)
    - [How to chain different closures](#how-to-chain-different-closures)
    - [How to simulate private methods with Closure](#how-to-simulate-private-methods-with-closure)
    - [The execution stack order with Javascript](#the-execution-stack-order-with-javascript)
    - [How to use binding](#how-to-use-binding)
    - [How to use callbacks](#how-to-use-callbacks)
  - [Captain's Log](#captains-log)
    - [The wrapper problem](#the-wrapper-problem)
  - [Authors](#authors)

## Use, installation and preview

Clone this repo and access each HTML document with a browser. Is tested on Edge 84.0.522.61 (Official build) (64-bit)

Advancing on each HTML index, you can notice changes on the accesibility

## Learning Objectives

### What is lexical scoping in Javascript

### What is closure in Javascript

Closure is the fancy term to essentially say that an inner or function can access to an outer function. Is the default state of the creation of a function. Inside the function every declaration works locally, then, if you try to use that variable out of the function throw an error. Althought, you can return an inner function and use that as an object, but it still calls the methods of the parent function

### How to use closure

Closures are the standard way at any time a function is declared on JavaScript. But a formal closure is done when you declare a function inside a function, that is used just by the parent function, not in the global scope. That function can use the parent variables and parameters, but it don't have any by its own

### How to chain different closures

To chain different closures is neccesary to create functions inside functions and variables that can be called by the child functions (Unused by itself). Then, call the function one by one (A great example is the [2-function_me file](./2-function_me.js))

### How to simulate private methods with Closure

Defining a modeule with some parameters tha can be accessed only with the context of functions inside a great function. Is the case of the [6-hogwarts file](./6-hogwarts.js)

### The execution stack order with Javascript

JavaScript's stack order depends on the flow and the conditions. But, in general terms, the DOM use the LIFO method to use tha call stack. This is important to use the asyncronous functions

### How to use binding

Binding is the way of retake the context of a function, or use asyncronism without the asyn syntax, conecting it to the local scope through the bind() method. This sets the this to the contest necessary

### How to use callbacks

There are many methods to use callbacks. For example, settimeout or onload allows to wait until some conditions are properly done to execute that part. The new ES6 syntax allows the async await syntax that works too

## Captain's Log

### The wrapper problem

On [14-wikipedia problem](./14-wikipedia.js), the this context is lost on the onload method. It happens the asyncronous await reassume the this context. Curious

## Authors

Juan Amaya Gaviria. [GaviriaAmaya](github.com/GaviriaAmaya/)
