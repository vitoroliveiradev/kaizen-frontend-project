/* eslint-disable react-hooks/rules-of-hooks */
import styles from "./Contact.module.css";

import { FormEvent, useState } from "react";

import { ReviewForm } from "../../components/Form/ReviewForm/ReviewForm";
import { Thanks } from "../../components/Form/Thanks/Thanks";
import { UserForm } from "../../components/Form/UserForm/UserForm";

import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FiSend } from "react-icons/fi";
import { Steps } from "../../components/Form/Steps/Steps";
import { useForm } from "../../hooks/useForm";
import { useToast } from "../../hooks/useToast";
import { useNavigate } from "react-router-dom";

type FormFields = {
  name: string;
  email: string;
  comment: string;
};

const formTemplate: FormFields = {
  name: "",
  email: "",
  comment: "",
};

export const Contact = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(formTemplate);

  const updateFieldHandler = (key: string, value: string) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const formComponents = [
    <UserForm data={data} updateFieldHandler={updateFieldHandler} />,
    <ReviewForm data={data} updateFieldHandler={updateFieldHandler} />,
    <Thanks data={data} />,
  ];

  const { changeStep, currentComponent, currentStep, isLastStep } =
    useForm(formComponents);

  const handleClick = (e: FormEvent) => {
    e.preventDefault();

    if (data.name && data.email && data.comment) {
      useToast({ msg: "Mensagem enviada!", status: null });
      navigate("/");
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Entre em Contato</h2>
      </div>
      <div className={styles["form-container"]}>
        <Steps currentStep={currentStep} />
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className={styles["inputs-container"]}>{currentComponent}</div>
          <div className={styles.actions}>
            <button
              className={styles.btn}
              type="button"
              onClick={() => changeStep(currentStep - 1)}
            >
              <GrFormPrevious />
              <span>Voltar</span>
            </button>
            {!isLastStep ? (
              <button className={styles.btn} type="submit">
                <GrFormNext />
                <span>Avançar</span>
              </button>
            ) : (
              <button
                className={styles.btn}
                type="submit"
                onClick={handleClick}
              >
                <FiSend />
                <span>Enviar</span>
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
