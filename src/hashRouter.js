import ErrorPage from "@/pages/error-page";
const routes = {};

/** route 목록에 path, handler(특정 page 이동)쌍 추가합니다. */
const addRoute = (path, handler) => {
  routes[path] = handler;
};

const handleRoute = () => {
  const path = window.location.hash.slice(1) || "/";
  const handler = routes[path];
  const result = handler?.() ?? ErrorPage();

  const root = document.getElementById("root");
  if (root) root.innerHTML = result;
};

export default { addRoute, handleRoute };
