import styles from "./ReviewForm.module.css";

type ReviewForm = {
  data: {
    comment: string;
  };
  updateFieldHandler: (key: string, value: string) => void;
};

export const ReviewForm = ({ data, updateFieldHandler }: ReviewForm) => {
  return (
    <div className="review-form">
      <div className={styles["form-control"]}>
        <label htmlFor="comment">Assunto</label>
        <textarea
          name="comment"
          id="comment"
          value={data.comment || ""}
          onChange={(e) => updateFieldHandler("comment", e.target.value)}
          required
        ></textarea>
      </div>
    </div>
  );
};
