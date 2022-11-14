export function switchTextContent(target, text1, text2) {
  if (target.innerText === text1) {
    target.innerText = text2;
  } else {
    target.innerText = text1;
  }
}
