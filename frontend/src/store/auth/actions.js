import { api } from "boot/axios";

export function register({ commit }, credentials) {
  return api.post("/auth/registration/", credentials).then((response) => {
    api.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${response.data.acces_token}`;
    commit("SET_USER_DATA", {
      userData: response.data,
    });
  });
}

export function login({ commit }, credentials) {
  return api.post("/auth/login/", credentials).then((response) => {
    api.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${response.data.acces_token}`;
    commit("SET_USER_DATA", {
      userData: response.data,
    });
  });
}
