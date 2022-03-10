import styled from "styled-components";

export const Container = styled.header`
  background: var(--gray);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  color: var(--text-color);

  p {
    padding-left: 1rem;
  }
`;
