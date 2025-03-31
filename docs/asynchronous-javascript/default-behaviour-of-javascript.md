---
sidebar_position: 1
---


# Default Behavior of Javascript 


JavaScript is a single-threaded, non-blocking language that can handle multiple tasks efficiently using its event loop. In this blog, we will dive deep into JavaScript's execution model, event loop, and how it processes multiple tasks simultaneously. 🔥

## 1. JavaScript's Single-Threaded Nature 🧵

JavaScript runs on a single thread, meaning it can execute only one task at a time in the call stack. Unlike multi-threaded languages, where multiple tasks run in parallel, JavaScript processes tasks one by one. This design makes JavaScript efficient but also introduces challenges when handling long-running tasks. 🏃‍♂️

Example of Synchronous Execution
```
console.log("Start");
console.log("Processing...");
console.log("End");
```
💡 The output will always be:
```
Start
Processing...
End
```
Each statement executes in order because JavaScript follows a synchronous execution model by default.

## 2. Handling Multiple Tasks Simultaneously

Even though JavaScript is single-threaded, it can handle multiple operations at the same time using asynchronous programming. This is done using:

🏷️ Callbacks \
✅ Promises \
⏳ Async/Await \
🌍Web APIs 

Example of Asynchronous Execution
```jsx
console.log("Start");

setTimeout(() => {
  console.log("Async task completed!");
}, 2000);

console.log("End");
```
💡 The output will be:
```
Start
End
Async task completed!
```
The setTimeout function moves to the Web API environment and executes after 2 seconds, without blocking other synchronous tasks. This is where the event loop comes in! 🔄

