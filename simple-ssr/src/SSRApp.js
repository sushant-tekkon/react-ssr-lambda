// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React from "react";
import Wrapper from "./components/Wrapper";
import Content from "./components/Content";
import Logo from "./components/Logo";
import "./style.css";

const SSRApp = () => {
  return (
    <Wrapper>
      <Content>
        <Logo>
          <img src="logo_vertical.png" alt="logo-alt-text" />
        </Logo>
        <h3 className="text-center pb-4 font-weight-bold">Sign In</h3>
        <form>
          <input
            name="email"
            className="form-control mb-1"
            placeholder="Email"
          />
          <input
            name="password"
            placeholder="Password"
            className="form-control mb-1"
            type="password"
          />

          <div className="form-group text-center">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id={"rememberMe"}
                name={"rememberMe"}
              />

              <label className="form-check-label" htmlFor={"rememberMe"}>
                Remember Me
              </label>
            </div>
          </div>

          <button className="btn btn-primary btn-block" type="submit">
            Sign In
          </button>
        </form>
      </Content>
    </Wrapper>
  );
};

export default SSRApp;
