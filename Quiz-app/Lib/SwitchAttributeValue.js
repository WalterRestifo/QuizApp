export function switchAttributeValue(target, attributeName, value1, value2) {
  if (target.getAttribute(attributeName) === value1) {
    target.setAttribute(attributeName, value2);
  } else {
    target.setAttribute(attributeName, value1);
  }
}
