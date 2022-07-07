// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React, { useEffect, useState } from "react";
import SSRApp from "./SSRApp";
import ProductList from "./components/ProductList";
import config from "./config.json";
import axios from "axios";

const App = ({ isSSR, ssrData }) => {
  return <SSRApp />;
};

export default App;
