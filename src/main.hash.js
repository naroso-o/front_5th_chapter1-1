import ProfilePage from "@/pages/profile-page";
import LoginPage from "@/pages/login-page";
import MainPage from "@/pages/main-page";
import hashRouter from "./hashRouter";

hashRouter.addRoute(`/login`, LoginPage);
hashRouter.addRoute(`/profile`, ProfilePage);
hashRouter.addRoute(`/`, MainPage);

window.addEventListener("hashchange", hashRouter.handleRoute);
window.addEventListener("load", hashRouter.handleRoute);
