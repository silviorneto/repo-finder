import styled from "styled-components";

export const Container = styled.div`
  max-width: 720px;
  margin: 0 auto;

  padding: 1rem;
  display: flex;
  flex-direction: column;

  color: var(--text-color);

  h2 {
    margin: 1rem auto 2rem;

    span {
      color: var(--red);
    }
  }

  h4 {
    margin: 1rem auto 2rem;
    color: var(--red);
  }
`;

export const CardBox = styled.div`
  margin: 0 auto;
  width: 90%;

  color: var(--white);
  overflow-wrap: break-word;

  div {
    height: 4rem;
    margin: 1rem;
    padding: 1rem;

    background: var(--gray);

    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      padding-left: 0.5rem;
    }
  }
`;
