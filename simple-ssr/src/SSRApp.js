// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React, { useState } from "react";

const SSRApp = () => {
  const [initialValues] = useState({
    email: "",
    password: "",
    rememberMe: true,
  });

  const form = useForm({
    mode: "all",
    defaultValues: initialValues,
  });

  const onSubmit = ({ email, password, rememberMe }) => {
    console.log("onsubmit called");
  };

  return (
    <Wrapper>
      <Content>
        <Logo>
          <img src="logo_vertical.png" alt="logo-alt-text" />
        </Logo>

        <h3 className="text-center pb-4 font-weight-bold">
          {i18n("app.signIn")}
        </h3>

        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <InputFormItem
              name="email"
              placeholder={i18n("user.fields.email")}
              autoComplete="email"
              autoFocus
              externalErrorMessage={externalErrorMessage}
            />

            <InputFormItem
              name="password"
              placeholder={i18n("user.fields.password")}
              autoComplete="password"
              type="password"
            />

            <div className="form-group text-center">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={"rememberMe"}
                  name={"rememberMe"}
                  ref={form.register}
                />

                <label className="form-check-label" htmlFor={"rememberMe"}>
                  {i18n("user.fields.rememberMe")}
                </label>
              </div>
            </div>
            <div className="text-center forgotPassword">
              <Link className="btn btn-sm btn-link" to="/auth/forgot-password">
                {i18n("auth.forgotPassword")}
              </Link>
            </div>

            <button
              className="btn btn-primary btn-block"
              type="submit"
              disabled={loading}
            >
              <ButtonIcon loading={loading} /> {i18n("auth.signin")}
            </button>
          </form>
        </FormProvider>
      </Content>
    </Wrapper>
  );
};

export default SSRApp;
