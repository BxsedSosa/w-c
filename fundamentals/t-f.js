/* Summary: Check if you are able to watch tv today */
function canWatchTv(isHoliday, isWeekday) {
  // Check if the day is a `Holiday` OR `is NOT the weekday`, return true.
  if (isHoliday || isWeekday === false) {
    return true;
    // Otherwise, return false... We can not watch tv today
  } else {
    return false;
  }
}

/* Summary: Check do both business partners agree to with each other */
function doTheyAgree(partner1Decision, partner2Decision) {
  // Check if both partners are on the same page, if so return true.
  if (partner1Decision === partner2Decision) {
    return true;
    // Otherwise, return false
  } else {
    return false;
  }
}

/* Summary: Check to see if the store is open or closed */
function isOpen(weekday, month) {
  // Check if the  check if the `month` is "july" OR `weekday` is "monday", return false.
  if (month === "july" || weekday === "monday") {
    return false;
    // Otherwise: The store would be open, return true.
  } else {
    return true;
  }
}
