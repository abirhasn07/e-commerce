import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: var(--maxWidth);
  margin: 15px auto;
  height: 40px;
  background: var(--green);

  @media (max-width: 768px) {
  }
`;

export const Content = styled.div`
  height: 100%;
  padding: 0 35px;

  .nav-list {
    height: 100%;
    width: 60%;
    margin: 0 auto;

    .nav-item {
      color: var(--darkWhite);
      font-weight: 600;
      cursor: pointer;
      opacity: 0.7;
    }
    .nav-item:hover {
      color: var(--white);
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    padding: 0px;
    .nav-list {
      justify-content: center;
      width: 90%;

      margin: 0 auto;

      .nav-item {
        font-weight: 500;
        font-size: 0.7rem;
        margin: 0 2px;
      }
    }
  }
`;
