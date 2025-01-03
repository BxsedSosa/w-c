/* Summary: Check whether the current day is either a holiday OR is NOT the weekday if so, return true. Otherwise, return false */
function canWatchTv(isHoliday, isWeekday) {
  // Check if the day is a `Holiday` OR `is NOT the weekday`, return true.
  if (isHoliday || isWeekday === false) {
    return true;
    // Otherwise, return false... We can not watch tv today
  } else {
    return false;
  }
}

/* Summary: Compare that both business partners have the same idea if so, return true. Otherwise, return false */
function doTheyAgree(partner1Decision, partner2Decision) {
  // Check if both partners are on the same page, if so return true.
  if (partner1Decision === partner2Decision) {
    return true;
    // Otherwise, return false
  } else {
    return false;
  }
}

/* Summary: If the month is currently "july" OR the weekday is "monday" the store would be closed, return false. Otherwise, return true */
function isOpen(weekday, month) {
  // Check if the `month` is "july" OR `weekday` is "monday", return false.
  if (month === "july" || weekday === "monday") {
    return false;
    // Otherwise: The store would be open, return true.
  } else {
    return true;
  }
}
