import { api } from "boot/axios";

export function SET_USER_DATA(state, userData) {
  state.user = userData;
  localStorage.setItem("user", JSON.stringify(userData));
}
