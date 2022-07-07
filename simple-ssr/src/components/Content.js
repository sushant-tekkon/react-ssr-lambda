import styled from "styled-components";

const Content = styled.div`
  width: 450px;
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 56px 88px;
  position: relative;
  background-color: #ffffff;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  box-shadow: 2px 5px 12px 0px rgba(204, 204, 204, 0.75);
  -webkit-box-shadow: 2px 5px 12px 0px rgba(204, 204, 204, 0.75);
  -moz-box-shadow: 2px 5px 12px 0px rgba(204, 204, 204, 0.75);

  h3 {
    color: var(--primary);
  }

  h4 {
    font-size: 1.25em;
  }

  .invalid-feedback {
    display: block;
  }

  .forgotPassword {
    margin-bottom: 1rem;
  }

  @media only screen and (max-width: 767px) {
    width: 100%;
  }

  .btn-login-link {
    text-decoration: none;
  }

  .requirements {
    color: rgba(0, 0, 0, 0.65);
    font-size: 12px;
  }

  .requirements ul {
    padding-left: 2em !important;
  }
`;

export default Content;
