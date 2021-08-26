import uuid from "react-uuid";

/* Uses react-uuid to generate a string with length 5 that serves as a session id. */
export function generateSessionId() {
  return uuid().substring(0, 5);
}

/* Returns back the date string that's 84 days from now, the default end date. */
export function generateEndDate() {
  let todayTime = new Date();
  todayTime.setDate(todayTime.getDate() + 84); // add 84 days (12 weeks) to the booking day
  return todayTime.toISOString().split("T")[0]; // Convert date object to 'YYYY-MM-DD'
}
