•	What is a closure?
  A closure is a function within another function that has access to the variables within it’s parent function’s scope as well as the global variables even when called outside the parent function.

•	What is a pure function?
  Always returns the same value for a given set of parameters.  Produces no side effects such as global variable updates.  Relies on no external mutable state.

•	In Javascript, people frequently say everything is an object. Explain what this means
  It means that most data in JS code can be used as an object.
  Objects are parameter and value pairs which can be modified.
  Strings/Numbers/Booleans are primitives (not objects) and are immutable (state cannot be modified).

  •	Does Javascript have block scope?
    No, Javascript has functional scoping.
    Scope is defined within a function where the child function's scope includes that of the parent function(s), but not the other way around.  Block scoping can be emulated with IIFE.
    [Latest version of Javascript includes block scoping via the 'let' keyword???]

  •	What is an IIFE?
    Immediately called anonymous function.
    Meant for functions that will never be used again.
    Syntax: (function(x){console.log(x)})("value");  // console log: value
    or
    !function(){}();
    ~function(){}();
    -function(){}();
    +function(){}();

    //Private Methods (I don't understand this, is a private method only meant to be used within the function?)
    (function($){
      $(this).addClass('myClass');
    })(window.JQuery);


•	What is a higher order function?
  A function that takes another function as an argument, or returns a function.
  https://www.sitepoint.com/higher-order-functions-javascript/

•	What is a lambda expression?
  A function that is used as an argument or variable definition, that immediately returns data for that purpose.
  Anonymous function != lamda expression always
