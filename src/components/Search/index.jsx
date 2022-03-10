import { useState } from "react";
import { useRepositories } from "../../hooks/useRepositories";

import { Container } from "./styles";
import { BiSearchAlt } from "react-icons/bi";

export function Search() {
  const { getRepositories } = useRepositories();
  const [username, setUsername] = useState("");

  async function handleRepositorySearch() {
    getRepositories(username);
    setUsername("");
  }

  return (
    <Container>
      <input
        type="text"
        placeholder="Digite um username do Github"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <button onClick={handleRepositorySearch}>
        <BiSearchAlt />
      </button>
    </Container>
  );
}
