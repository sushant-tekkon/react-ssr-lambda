import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;

  &:before {
    content: "";
    width: 100%;
    height: 100%;
    display: flex;
    background-image: linear-gradient(#d8f2f3, #fbf3f7);
    position: absolute;
    z-index: 1;
    top: 0;
  }
`;

export default Wrapper;
