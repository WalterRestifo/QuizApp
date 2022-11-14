import { switchTextContent } from "./SwitchTextContent.js";

export function toggleAnswer(button, answer) {
  switchTextContent(button, "Show Answer", "Hide Answer");
  answer.classList.toggle("--hidden");
}
