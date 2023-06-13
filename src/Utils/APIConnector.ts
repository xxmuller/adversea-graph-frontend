// @ts-nocheck
// Example POST method implementation:
import Cookies from "js-cookie";
import { APIResponse } from "../types/Interfaces";

const DEV: boolean = process.env.NODE_ENV !== "production";

let MODE = "same-origin";
let CREDENTIALS = "same-origin";
let headers = { "Content-Type": "application/json" };

if (DEV) {
  MODE = "cors";
  CREDENTIALS = "omit";
  headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };
}

export async function refreshToken() {
  // eslint-disable-next-line no-use-before-define
  const response = await apiCall(window._env_.REACT_APP_NODE_SERVER_URL, "/api/user/token", "GET", undefined, true);
  if (response.status === 403 || response.status === 401) {
    Cookies.remove("__authToken");
    Cookies.remove("__refToken");
    return false;
  }
  return true;
}

export async function apiCall(
  host = window._env_.REACT_APP_NODE_SERVER_URL,
  endpoint = "",
  method = "GET",
  data: any = null,
  ignoreAuthError = false
): Promise<APIResponse> {
  const url: string = host + endpoint;

  let response: APIResponse = {};

  // Default options are marked with *
  const init = {
    method, // *GET, POST, PUT, DELETE, etc.
    mode: MODE, // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: CREDENTIALS, // include, *same-origin, omit
    headers,
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    // body: JSON.stringify(data) // body data type must match "Content-Type" header
  };

  if (data) {
    init.body = JSON.stringify(data);
  }

  await fetch(url, init).then(
    (res) => {
      response = res;
    },
    (error) => {
      console.log(error);
    }
  );

  if (
    (response.status === 403 || response.status === 401)
    && !ignoreAuthError
  ) {
    const refreshed = await refreshToken();
    if (refreshed) {
      response = await fetch(url, init).then(
        (res) => {
          response = res;
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
  // if (DEV) console.log(response)
  let result = {};
  try {
    if (response) {
      const contentType = response.headers.get("content-type"); // ADD content type to each response???

      if (contentType === "application/pdf") {
        result.blobData = response;
      } else {
        result.data = await response.json();
      }
    }
  } catch (e) {
    console.error(e);
    result = {
      ok: false,
      msg: "Something went wrong, while getting response content.",
    };
  }

  result.status = response.status;
  result.ok = true ? result.status === 200 : false;
  return result; // parses JSON response into native JavaScript objects
}

// https://medium.com/@SilentHackz/simple-way-to-secure-react-apps-using-jwt-and-react-router-2b4a05d780a3
export function getCookieToken(cookieName = "__refToken") {
  const jwt = Cookies.get(cookieName);
  let session;
  try {
    if (jwt) {
      const base64Url = jwt.split(".")[1];
      const base64 = base64Url.replace("-", "+").replace("_", "/");
      session = JSON.parse(window.atob(base64));
    }
  } catch (e) {
    console.log(e);
  }
  return session;
}

// export const logOut = async () => {
//     await fetch('/logout', {
//         method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
//         mode: MODE, // no-cors, *cors, same-origin
//         cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//         credentials: CREDENTIALS, // include, *same-origin, omit
//         headers: {
//             'Content-Type': 'application/json'
//             // 'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         redirect: 'follow', // manual, *follow, error
//         referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin,
// origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//     });
//     Cookies.remove('__authToken')
//     Cookies.remove('__refToken')
//     window.location.replace(`/login`);
// }
