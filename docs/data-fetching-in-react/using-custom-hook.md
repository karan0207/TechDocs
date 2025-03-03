---
sidebar_position: 2
---
#  Custom Hook Method

## 🎯 Why Create a Custom Hook?

While using `useEffect` with `fetch()` works, it has **some drawbacks**:

 **Code Duplication** – If multiple components need to fetch data, you’ll have to repeat the same logic. \
 **Hard to Manage** – Fetching logic is tied directly to the component, making it less reusable. \
 **No Reusability** – Cannot be easily shared across multiple components.

 **Solution?** – **A Custom Hook!**

### ✨ Benefits of Using a Custom Hook

✅ **Reusable** – Define once, use anywhere in your app. \
✅ **Cleaner Code** – Keeps component logic focused on UI. \
✅ **Encapsulated Logic** – Fetching, error handling, and state management are handled in one place. \
✅ **Easier Testing & Maintenance** – Modify fetching logic in one file instead of multiple components.

---

## 🔧 Creating a Custom Hook for Data Fetching

```jsx
import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
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
  }, [url]); // Re-fetch if URL changes

  return { data, loading, error };
}
```

---

## 🛠 Using the Custom Hook in a Component

Now that we have `useFetch`, we can **use it in any component**!

```jsx
import React from "react";
import useFetch from "./useFetch"; // Import the custom hook

export default function DataComponent() {
  const { data, loading, error } = useFetch("https://api.example.com/data");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
```

---

## 🧐 What’s Happening Inside?

1. **Custom Hook (`useFetch`)**
   - Initializes `data`, `loading`, and `error` states.
   - Uses `useEffect` to fetch data whenever the `url` changes.
   - Returns the state variables (`data`, `loading`, `error`).

2. **Component (`DataComponent`)**
   - Calls `useFetch` with a URL.
   - Uses returned values (`data`, `loading`, `error`) to display the UI.

---

##  Pros &  Cons of Using a Custom Hook

###  Advantages
✔️ **Reusable** – Can be used in multiple components without duplicating logic. \
✔️ **Cleaner Code** – Separates data-fetching logic from UI components. \
✔️ **Scalable** – Easily extendable (e.g., add caching, retries, etc.).

###  Disadvantages
❌ **Still Fetches on Every Mount** – No built-in caching (can use SWR or React Query to fix this). \
❌ **No Global State Management** – Each component using `useFetch` fetches its own data separately.

---

## ⚠️ When Should You Avoid a Custom Hook?

🚫 If you need **automatic caching**, consider using **SWR** or **React Query** instead. \
🚫 If multiple components share the same data globally, use **React Context or Zustand**. \
🚫 If you need **real-time updates**, consider **WebSockets or polling**.

For larger applications, you may want to integrate **React Query, Zustand, or Redux** for state management and caching! 🚀