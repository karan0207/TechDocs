---
sidebar_position: 1
---

#  Let's revise few things 📌

## 📖 Introduction

Before diving into data fetching in React, it's crucial to understand some foundational concepts. This guide covers essential topics such as **state management, rendering behavior, JavaScript fundamentals, and hooks**. Having a solid grasp of these will make working with APIs and handling data in React much smoother.

---

## 🔹 1. Understanding `useState`

The `useState` hook is fundamental for managing state in React. When fetching data, we store the API response in **state**.

### 📌 Example:

```jsx
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```



✅ Key Points:
useState creates a state variable and a setter function. \
State updates trigger a re-render. \
Always use the setter function to update state. \

##  2. React Rendering Behavior
React re-renders components when state or props change.

⚡ Considerations:
State changes cause re-renders.
Too many re-renders can affect performance.
React updates the Virtual DOM first and applies changes efficiently.

📌 Example:
```jsx
const [text, setText] = useState("Hello");
console.log("Component rendered"); // Runs on every render
```
💡 Tip: Optimize performance using useMemo and useCallback.

## 3. JavaScript Essentials
To work with React efficiently, understanding key JavaScript concepts is important.

✅ Destructuring:
```jsx
const user = { name: "Alice", age: 25 };
const { name, age } = user;
console.log(name); // Alice
```
✅ Arrow Functions:
```jsx
const add = (a, b) => a + b;
```
✅ Promises & Async/Await:
```jsx
async function fetchData() {
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();
  console.log(data);
}
```
## 4. Understanding useEffect

📌 Example:
```jsx
import { useEffect, useState } from 'react';

function Example() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://api.example.com/data")
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return <div>{data ? JSON.stringify(data) : "Loading..."}</div>;
}
```
🔥 Key Takeaways:
Runs after the first render.
The dependency array controls execution.
Prevent memory leaks with cleanup functions. \

## 5. How State Updates Work
React batches state updates for optimization.

📌 Example:
```jsx
const [count, setCount] = useState(0);

const handleClick = () => {
  setCount(count + 1);
  setCount(count + 1);
  console.log(count); // Will not immediately reflect the update
};
```

✅ Best Practices:
State updates are asynchronous.
Use functional updates for accuracy:

```
setCount(prevCount => prevCount + 1);
```

##  6. Fetching Data and Managing State
Fetching data involves making an API call and storing the response in state.

🛠️ Steps: \
1️⃣ Use useEffect to trigger the API request. \
2️⃣ Store the response in useState. \
3️⃣ Handle loading and errors properly.

📌 Example:
```jsx
import { useEffect, useState } from 'react';

function FetchExample() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.example.com/data")
      .then(response => {
        if (!response.ok) throw new Error("Failed to fetch");
        return response.json();
      })
      .then(data => setData(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
```
⚠️ Important Considerations: \
Always handle loading and error states. \
Be cautious of infinite loops in useEffect. \
Avoid excessive API calls by caching data when necessary. \

## 🎯 Conclusion  
Mastering these foundational concepts will set you up for success when working with data fetching in React. Understanding state management, rendering behavior, JavaScript ES6+, and hooks ensures your applications run efficiently and avoid common pitfalls.

By applying these best practices, you'll be ready to fetch and manage data effectively! 