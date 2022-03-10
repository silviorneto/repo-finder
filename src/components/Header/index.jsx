import { Container, Content } from "./styles";

import { FaGithub } from "react-icons/fa";

export function Header() {
  return (
    <Container>
      <Content>
        <FaGithub />
        <p>Repo Finder</p>
      </Content>
    </Container>
  );
}
