import uuid from "react-uuid";

/* Uses react-uuid to generate a string with length 5 that serves as a session id. */
export function generateSessionId() {
  return uuid().substring(0, 5);
}
