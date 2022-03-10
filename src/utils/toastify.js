import { toast } from "react-toastify";

const options = {
  position: "bottom-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export const toastSearchError = () => {
  return toast.error(
    " Falha ao buscar dados do usuário. Verifique os dados e tente novamente",
    options
  );
};
