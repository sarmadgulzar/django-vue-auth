export function SET_USER_DATA(state, userData) {
  state.user = userData;
  localStorage.setItem("user", JSON.stringify(userData));
}

export function CLEAR_USER_DATA() {
  localStorage.removeItem("user");
  location.reload();
}
