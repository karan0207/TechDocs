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

## 3. What is the Event Loop? 🔁

The event loop is JavaScript's way of managing multiple tasks while maintaining its single-threaded nature. It ensures non-blocking execution by moving tasks between different queues and executing them based on priority. 🎯

3.1 Components of the Event Loop 🏗️

1️⃣ Call Stack 📚 - Executes JavaScript code synchronously. \
2️⃣ Web APIs 🌍 - Handles async operations like setTimeout, fetch, and DOM events. \
3️⃣ Callback Queue (Task Queue) 🎟️ - Stores callbacks from Web APIs (e.g., setTimeout). \
4️⃣ Microtask Queue 🚀 - Stores promises (.then, catch, finally). Has higher priority than the Callback Queue. \
5️⃣ Event Loop 🔄 - Continuously checks the Call Stack and pushes pending tasks from queues when it's empty. 

3.2 How the Event Loop Works 🔄

Executes all synchronous code in the Call Stack.

Moves asynchronous tasks (like setTimeout) to Web APIs.

When async tasks are completed, their callbacks go to either Microtask Queue (Promises) or Callback Queue (setTimeout, event listeners, etc.).

The Event Loop first clears the Microtask Queue before moving to the Callback Queue.

This process repeats indefinitely. 🔃

Example to Understand Event Loop Priorities 🔥
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

# 4. Task Execution Priorities 🚀

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

# 5. Rendering and Event Loop 🎨

JavaScript also prioritizes UI rendering efficiently. The browser follows these steps:

1️⃣ Executes all synchronous JavaScript. \
2️⃣ Clears Microtask Queue first. \
3️⃣ Renders UI (if needed). \
4️⃣ Executes Callback Queue tasks. \
5️⃣ Repeats the process. 🔄

# 6. Key Takeaways 🎯

✅ JavaScript is single-threaded but handles async tasks using the Event Loop. \
✅ Microtasks (Promises) execute before Callback Queue (setTimeout, event listeners). \
✅ The Call Stack executes synchronous code first. \
✅ The Web API stores async tasks separately. \
✅ The Event Loop moves completed tasks to execution when the Call Stack is empty. \
✅ UI rendering happens after the Microtask Queue is cleared.

