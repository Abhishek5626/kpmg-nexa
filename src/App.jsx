import React from "react";
import { useEffect, useState } from "react";
import AppShell from "./components/layout/AppShell";
import HomePage from "./pages/HomePage";
import PlaceholderPage from "./pages/PlaceholderPage";
import { routes } from "./navigation";

function usePath() {
  const [path, setPath] = useState(() => window.location.pathname || "/");

  useEffect(() => {
    const sync = () => setPath(window.location.pathname || "/");
    window.addEventListener("popstate", sync);
    window.addEventListener("nexa:navigate", sync);
    return () => {
      window.removeEventListener("popstate", sync);
      window.removeEventListener("nexa:navigate", sync);
    };
  }, []);

  return path;
}

export default function App() {
  const path = usePath();
  const route = routes[path] || routes["/"];
  const page = path === "/" ? <HomePage /> : <PlaceholderPage title={route.title} eyebrow={route.eyebrow} />;

  return <AppShell currentPath={path}>{page}</AppShell>;
}
