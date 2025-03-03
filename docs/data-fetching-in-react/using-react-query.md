---
sidebar_position: 4
---
# React Query Method 




## 🔍 Introduction to React Query

React Query is a powerful data-fetching and state management library designed for React applications. It simplifies data fetching by providing **automatic caching, background updates, and smart refetching**, eliminating the need for manual state management.

Unlike traditional `useEffect` and `useState` approaches, React Query reduces **boilerplate code**, enhances performance, and improves the developer experience. It efficiently handles complex data-fetching logic, making it a preferred choice for modern React applications.

---

## 🌟 Why Use React Query?

While using `useEffect` with `fetch()` or custom hooks works, they have **limitations**, such as:

❌ No built-in caching (data refetches every time the component mounts). \
❌ No automatic background updates. \
❌ Manual state management for loading and errors. \
❌ No automatic retries or stale data handling. 

✅ **React Query addresses these issues by providing:**

✔️ **Caching** – Prevents unnecessary API calls by storing responses. \
✔️ **Automatic Refetching** – Keeps data up to date without extra effort. \
✔️ **Error Handling & Retries** – Handles network failures automatically. \
✔️ **Parallel & Dependent Queries** – Fetch multiple or sequential queries efficiently. \
✔️ **Background Updates** – Refreshes stale data without UI blocking. \
✔️ **Simplified State Management** – Eliminates the need for `useState` and `useEffect`.

---

## ⚙️ Setting Up React Query

### 📦 Installation

First, install React Query and its DevTools:

```sh
npm install @tanstack/react-query
```

For debugging and better visibility into queries, install the React Query DevTools:

```sh
npm install @tanstack/react-query-devtools
```

### 🏗 Setting Up QueryClientProvider

Before using React Query, wrap your application with `QueryClientProvider` in `index.js` or `_app.js` (for Next.js):

```jsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
```

---

## 🚀 Fetching Data with `useQuery`

React Query’s `useQuery` hook simplifies data fetching:

```jsx
import { useQuery } from "@tanstack/react-query";

const fetchData = async () => {
  const response = await fetch("https://api.example.com/data");
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

export default function DataComponent() {
  const { data, error, isLoading } = useQuery({ queryKey: ["data"], queryFn: fetchData });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
```

### 🧐 How It Works

1. **Define a Fetch Function** – Fetches data from an API.
2. **Use `useQuery` Hook**:
   - `queryKey`: Unique identifier for caching (e.g., `["data"]`).
   - `queryFn`: Function responsible for fetching data.
3. **Automatic State Management**:
   - `isLoading`: Tracks loading state.
   - `error`: Captures API errors.
   - `data`: Stores the fetched data.
4. **Render UI Dynamically**: Displays loading, error, or data states.

---

## 🔄 Automatic Refetching & Caching

React Query **automatically refetches** data based on various triggers:

```jsx
useQuery({
  queryKey: ["data"],
  queryFn: fetchData,
  refetchInterval: 5000, // Auto-refetch every 5 seconds
  staleTime: 10000, // Data remains fresh for 10 seconds
});
```

### ✨ Advanced Features

- **Refetch on Window Focus**: Automatically refetches data when the user switches back to the tab.
- **Polling**: Fetch data at regular intervals.
- **Cache Time**: Determines how long data remains in cache before being garbage collected.

---

## 🏎 Fetching with Dynamic Parameters

Pass query parameters dynamically using `queryKey`:

```jsx
const { data } = useQuery({
  queryKey: ["user", userId], // Triggers refetch when userId changes
  queryFn: () => fetchUser(userId),
});
```

---

##  Pros of React Query

###  Advantages
✔️ **Automatic State Management** – Reduces the need for `useState` and `useEffect`. \
✔️ **Built-in Caching** – Minimizes redundant API calls. \
✔️ **Optimized Performance** – Fetches data efficiently in the background. \
✔️ **Retries & Error Handling** – Provides robust network request handling. \
✔️ **Improved User Experience** – Keeps UI responsive with seamless updates.



---

## ⚠️ When to Avoid React Query?

🚫 If your app **doesn’t make frequent API calls**, using `useEffect` might be sufficient. \
🚫 If you need **global state management**, React Query is not a replacement for Redux or Zustand. \
🚫 If API responses **rarely change**, static site generation (SSG) might be a better choice.

---

## 🎯 Conclusion

React Query is an essential tool for **efficient, scalable, and maintainable** data fetching in React applications. It eliminates boilerplate code, improves performance, and simplifies state management.

For modern applications that rely on API interactions, **React Query is a game-changer!** 
