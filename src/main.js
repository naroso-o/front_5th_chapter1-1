import ProfilePage from "./pages/profile-page";
import LoginPage from "./pages/login-page";
import MainPage from "./pages/main-page";
import ErrorPage from "./pages/error-page";

const App = () => {
  if (location.pathname === "/login") {
    return LoginPage();
  }
  if (location.pathname === "/profile") {
    return ProfilePage();
  }

  if (location.pathname === "/") {
    return MainPage();
  }
  return ErrorPage();
};

const render = () => {
  document.body.innerHTML = App();

  logoutEvent();
  navigationEvent();
};

function logoutEvent() {
  const button = document.getElementById("logout");
  button?.addEventListener("click", (e) => {
    e.preventDefault();
    // 1. local storage에 사용자 정보 삭제
    localStorage.removeItem("user");

    // 2. Main Page로 라우트
    history.pushState(null, "", "/login");
    render();
  });
}

function navigationEvent() {
  const form = document.getElementById("login-form");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    if (e.target.id === "login-form") {
      e.preventDefault(); // 폼 제출 시 새로고침 방지

      const userIdInput = document.getElementById("username").value;

      // 1. local storage에 사용자 정보 세팅
      localStorage.setItem(
        "user",
        JSON.stringify({
          username: userIdInput,
          email: "",
          bio: "",
        }),
      );

      // 2. Main Page로 라우트
      history.pushState(null, "", "/");
      render();
    }
  });
}

window.addEventListener("popstate", () => {
  render();
});

render();
