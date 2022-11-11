export function switchTextContent(target, text1, text2) {
  if (target.textContent === text1) {
    target.textContent = text2;
  } else {
    target.textContent = text1;
  }
}
