import { ServerStyleSheet } from "styled-components";
import SSRApp from "../SSRApp";
import ReactDOMServer from "react-dom/server";
import React from "react";

const getHtml = (styles) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="stylesheet" href="public/theme/dist/magenta.css">
    <title>Grow Impact Business</title>
    ${styles}
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>`;

export const getIndexFile = () => {
  const sheet = new ServerStyleSheet();
  const app = ReactDOMServer.renderToString(sheet.collectStyles(<SSRApp />));
  const styles = sheet.getStyleTags();
  return getHtml(styles).replace(
    '<div id="root"></div>',
    `<div id="root">${app}</div>`
  );
};
