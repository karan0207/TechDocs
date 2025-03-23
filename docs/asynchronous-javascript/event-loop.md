---
sidebar_position: 2
---

#  What is the Event Loop? 🔁

The event loop is JavaScript's way of managing multiple tasks while maintaining its single-threaded nature. It ensures non-blocking execution by moving tasks between different queues and executing them based on priority. 

> Components of the Event Loop 🏗️

1️⃣ Call Stack 📚 - Executes JavaScript code synchronously. \
2️⃣ Web APIs 🌍 - Handles async operations like setTimeout, fetch, and DOM events. \
3️⃣ Callback Queue (Task Queue) 🎟️ - Stores callbacks from Web APIs (e.g., setTimeout). \
4️⃣ Microtask Queue 🚀 - Stores promises (.then, catch, finally). Has higher priority than the Callback Queue. \
5️⃣ Event Loop 🔄 - Continuously checks the Call Stack and pushes pending tasks from queues when it's empty. 

> How the Event Loop Works 🔄

•  Executes all synchronous code in the Call Stack.

•  Moves asynchronous tasks (like setTimeout) to Web APIs.

•  When async tasks are completed, their callbacks go to either Microtask Queue (Promises) or Callback Queue (setTimeout, event listeners, etc.).

•  The Event Loop first clears the Microtask Queue before moving to the Callback Queue.

•  This process repeats indefinitely. 🔃

Example to Understand Event Loop Priorities 
```jsx
console.log("Start");

setTimeout(() => {
  console.log("setTimeout");
}, 0);

Promise.resolve().then(() => console.log("Promise resolved"));

console.log("End");
```
💡 Output:
```
Start
End
Promise resolved
setTimeout
```
✅ Even though setTimeout has a 0ms delay, the Promise microtask executes first because Microtask Queue has higher priority than the Callback Queue.




>#  Task Execution Priorities 

JavaScript follows a priority system for executing tasks:

1️⃣ Synchronous Tasks (Highest Priority) 🔥 \
2️⃣ Microtasks (Promises, MutationObserver) 🚀 \
3️⃣ Callback Queue Tasks (setTimeout, event listeners) 🎟️ \
4️⃣ Rendering Tasks (Repaints, reflows) 🎨

Example with Different Tasks:
```jsx
console.log("Start");

setTimeout(() => console.log("setTimeout"), 0);

Promise.resolve().then(() => console.log("Promise resolved"));

document.body.addEventListener("click", () => console.log("Clicked!"));

console.log("End");
```
💡 If you click the screen, the output will follow:
```
Start
End
Promise resolved
setTimeout
Clicked! (after user click)
```
✅ Event listeners are handled in the Callback Queue and executed when triggered.

>#  Rendering and Event Loop 

JavaScript also prioritizes UI rendering efficiently. The browser follows these steps:

1️⃣ Executes all synchronous JavaScript. \
2️⃣ Clears Microtask Queue first. \
3️⃣ Renders UI (if needed). \
4️⃣ Executes Callback Queue tasks. \
5️⃣ Repeats the process. 🔄



