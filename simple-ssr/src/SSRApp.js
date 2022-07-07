// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React from "react";

const SSRApp = () => {
  return (
    <form>
      <input name="email" className="form-control mb-1" placeholder="Email" />

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
  );
};

export default SSRApp;
