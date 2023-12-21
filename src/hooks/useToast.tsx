import { toast } from "react-toastify";

type PropsToast = {
  msg: string;
  status: null | string;
};

export const useToast = ({ msg, status = null }: PropsToast) => {
  if (!status) {
    toast.success(msg, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      theme: "light",
    });
  } else if (status === "error") {
    toast.error(msg, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      theme: "light",
    });
  }
};
