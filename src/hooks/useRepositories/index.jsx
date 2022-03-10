import { createContext, useState, useContext } from "react";
import { api } from "../../services/api";

import { toastSearchError } from "../../utils/toastify";

const RepositoriesContext = createContext();

export function RepositoriesProvider({ children }) {
  const [repositories, setRepositories] = useState([]);
  const [user, setUser] = useState();

  async function getRepositories(username) {
    try {
      const response = await api.get(`/users/${username}/repos`);

      const repos = response.data.map((repo) => {
        return {
          name: repo.name,
          stars: repo.stargazers_count,
        };
      });

      setRepositories(repos);
      setUser(username);
    } catch (err) {
      console.log(err);
      toastSearchError();
    }
  }

  return (
    <RepositoriesContext.Provider
      value={{ repositories, user, getRepositories }}
    >
      {children}
    </RepositoriesContext.Provider>
  );
}

export function useRepositories() {
  const context = useContext(RepositoriesContext);

  return context;
}
