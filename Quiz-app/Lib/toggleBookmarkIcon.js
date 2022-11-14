import { switchAttributeValue } from "./SwitchAttributeValue.js";

export function toggleBookmarkIcon(bookmarkIcon) {
  switchAttributeValue(
    bookmarkIcon,
    "src",
    "Assets/bookmark-white.svg",
    "Assets/bookmark-black.svg"
  );
  switchAttributeValue(
    bookmarkIcon,
    "alt",
    "a white bookmark",
    "a black bookmark"
  );
}
