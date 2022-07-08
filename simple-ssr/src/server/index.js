// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React from "react";
import ReactDOMServer from "react-dom/server";
import SSRApp from "../SSRApp";
import { ServerStyleSheet } from "styled-components";

const indexFile = (styles) => `
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
    <link rel="stylesheet" type="text/css" href="styles.css" />
    <title>React App</title>
    ${styles}
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <div>Rendered on Server</div>
  </body>
</html>`;

const handler = async function (event) {
  try {
    const sheet = new ServerStyleSheet();
    const app = ReactDOMServer.renderToString(sheet.collectStyles(<SSRApp />));
    const styles = sheet.getStyleTags();
    const html = indexFile(styles).replace(
      '<div id="root"></div>',
      `<div id="root">${app}</div>`
    );
    return {
      statusCode: 200,
      headers: { "Content-Type": "text/html" },
      body: html,
    };
  } catch (error) {
    console.log(`Error ${error.message}`);
    return `Error ${error}`;
  }
};

export { handler };
