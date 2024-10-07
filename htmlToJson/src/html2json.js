// Credits: https://github.com/zorapeteri/bookmarks-to-json

import fs from "fs";
import { bookmarksToJSON } from "bookmarks-to-json";

const content = fs.readFileSync("src/resources/bookmarks.html", "utf-8");

console.log(`File read correctly`);

const options = {
  formatJSON: true, // return prettified JSON - false by default
  spaces: 2, // number of spaces to use for indentation - 2 by default
};
fs.writeFileSync("dist/bookmarks.json", bookmarksToJSON(content, options));
