---
sidebar_position: 1
---
# Standard Method

## Using `useEffect` and `fetch()`

## 🚀 Why Use This Method?

Using `useEffect` with `fetch()` is one of the simplest ways to fetch data in React applications. It is:

✅ **Straightforward** – No external dependencies, purely built-in React and JavaScript.

✅ **Beginner-Friendly** – Easy to understand and implement.

✅ **Good for Small Apps** – Suitable for applications that don’t require complex state management or caching.

However, this method is not the best choice if you need **caching**, **automatic refetching**, or **global state management** (for these, consider SWR or React Query).

---

## ⚡ How It Works?

- The `useEffect` hook runs **after** the component renders to fetch data asynchronously.
- `fetch()` makes an API request, waits for the response, and updates state variables.
- The component **re-renders** when the state updates with new data.

---

## 📌 Code Example:

```jsx
import { useEffect, useState } from "react";

export default function FetchWithUseEffect() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.example.com/data");
        if (!response.ok) throw new Error("Failed to fetch data");
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Runs only once when the component mounts

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
```

---

## 🧐 What’s Happening Inside?

1. The component initializes three state variables: `data`, `loading`, and `error`.
2. The `useEffect` hook runs **only once** after the first render (`[]` ensures it doesn't run on updates).
3. Inside `useEffect`, an **async function** is defined and called immediately.
4. `fetch()` requests data from the API:
   - ✅ If successful, the response is parsed as JSON and stored in `data`.
   - ❌ If there’s an error, `error` is updated instead.
5. `loading` is set to `false` once data is fetched (or an error occurs).
6. The component re-renders and displays the fetched data.

---

##  Pros &  Cons

###  Advantages
✔️ **Simple** – No need for additional libraries. \
✔️ **Quick Implementation** – Just a few lines of code. \
✔️ **Good for Small Projects** – Works fine if caching or refetching isn’t required.

###  Disadvantages
❌ **No Caching** – Fetches data again every time the component mounts. \
❌ **No Automatic Refetching** – You must manually trigger updates. \
❌ **Limited Error Handling** – No built-in retry mechanism.

---

## ⚠️ When Should You Avoid This Method?

🚫 If you **need caching**, use **SWR** or **React Query**. \
🚫 If multiple components **share the same data**, use **React Query** or a global store. \
🚫 If you need **real-time updates**, consider WebSockets or polling strategies.