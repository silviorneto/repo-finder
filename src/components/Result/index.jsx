import { useRepositories } from "../../hooks/useRepositories";
import { Container, CardBox } from "./styles";
import { FiStar } from "react-icons/fi";

export function Result() {
  const { user, repositories } = useRepositories();

  return (
    <Container>
      {!!user && repositories.length === 0 ? (
        <h4>Usuário não encontrado ou não possui repositórios públicos</h4>
      ) : !!user ? (
        <h2>
          User: <span>{user}</span>
        </h2>
      ) : (
        <h4>
          Digite um nome de usuário no campo acima para ver os seus repositórios
          públicos
        </h4>
      )}
      <CardBox>
        {repositories.length > 0 &&
          repositories.map((repo, index) => (
            <div className="card" key={index}>
              <p>Name: {repo.name}</p>
              <div>
                <FiStar />
                <p>{repo.stars}</p>
              </div>
            </div>
          ))}
      </CardBox>
    </Container>
  );
}
