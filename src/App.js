import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { GlobalStyle } from "./styles/global";
import { RepositoriesProvider } from "./hooks/useRepositories";

import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { Result } from "./components/Result";

function App() {
  return (
    <RepositoriesProvider>
      <Header />
      <Search />
      <Result />
      <GlobalStyle />
      <ToastContainer />
    </RepositoriesProvider>
  );
}

export default App;
