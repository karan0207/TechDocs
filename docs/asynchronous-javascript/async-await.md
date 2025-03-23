---
sidebar_position: 3
---

#  Async/Await in JavaScript 

Async/Await is a modern way to handle asynchronous operations in JavaScript, making asynchronous code look and behave more like synchronous code. It is built on top of Promises and helps write cleaner and more readable code. 

>Components of Async/Await 🏗️

1️⃣ async Keyword ✨ - Declares an asynchronous function that returns a Promise. \
2️⃣ await Keyword ⏳ - Pauses execution until the Promise resolves or rejects. \
3️⃣ Error Handling ❌ - Use try...catch to handle rejected Promises. \
4️⃣ Call Stack 📚 - Works within the Event Loop, processing Microtasks before moving to the Callback Queue.

How Async/Await Works 🔄

• The async keyword marks a function as asynchronous, allowing the use of await inside it. \
• The await keyword pauses execution until a Promise settles. \
• The function does not block the main thread; instead, JavaScript continues executing other synchronous code. \
• The Event Loop ensures the function resumes execution once the awaited Promise resolves.

Example: Basic Async/Await Usage
```jsx
async function fetchData() {
  console.log("Fetching data...");
  let data = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  let json = await data.json();
  console.log(json);
}

fetchData();
console.log("After fetchData call");
```
💡 Output:
```
Fetching data...
After fetchData call
{ userId: 1, id: 1, title: "...", body: "..." }
```
✅ The function fetchData pauses at await fetch(...), allowing JavaScript to execute the next synchronous statement before resuming once the fetch completes.

## Async/Await vs Promises

Again as we know, JavaScript follows a priority system for executing asynchronous tasks:

1️⃣ Synchronous Tasks (Highest Priority)  \
2️⃣ Microtasks (Promise.then, catch, finally)  \
3️⃣ Async/Await (Internally Uses Microtasks)  \
4️⃣ Callback Queue Tasks (setTimeout, event listeners) 

Example Comparing Promises vs Async/Await
```jsx
function promiseExample() {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    .then(data => console.log("Promise Data:", data));
}

async function asyncExample() {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  let data = await response.json();
  console.log("Async/Await Data:", data);
}

promiseExample();
asyncExample();
console.log("After function calls");
```
💡 Output:
```
After function calls
Promise Data: { ... }
Async/Await Data: { ... }
```
✅ Both achieve the same result, but Async/Await is cleaner and easier to read compared to chaining .then().

>## Handling Errors in Async/Await ❌

To handle errors properly in Async/Await, use a try...catch block:
```jsx
async function fetchData() {
  try {
    let response = await fetch("invalid-url");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
fetchData();
```
💡 Output:
```
Error fetching data: TypeError: Failed to fetch
```

 Using try...catch prevents uncaught errors from breaking the application.

>## Key Takeaways 🎯

✅ async functions always return a Promise. \
✅ await pauses execution until the Promise resolves. \
✅ Errors should be handled using try...catch. \
✅ Async/Await simplifies working with Promises, making code more readable. \
✅ The Event Loop ensures Microtasks (including await) execute before the Callback Queue.