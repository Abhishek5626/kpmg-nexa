export const routes = {
  "/": { title: "Home" },
  "/people": { title: "People", eyebrow: "Understand" },
  "/consumers": { title: "Consumers", eyebrow: "Understand" },
  "/journey": { title: "Journey", eyebrow: "Understand" },
  "/market": { title: "Market", eyebrow: "Explore" },
  "/competition": { title: "Competition", eyebrow: "Explore" },
  "/opportunities": { title: "Opportunities", eyebrow: "Act" }
};

export function navigate(to) {
  if (window.location.pathname === to) return;
  window.history.pushState({}, "", to);
  window.dispatchEvent(new Event("nexa:navigate"));
}
