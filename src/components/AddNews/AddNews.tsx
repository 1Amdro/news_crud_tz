import { useState } from "react";
import { AddNewsT } from "../../types/handlers";
import styles from "./AddNews.module.css";

export default function AddNews({
  addNews,
  closeModal,
}: {
  addNews: AddNewsT;
  closeModal: () => void;
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddNews = () => {
    if (!title.trim() || !description.trim()) return;

    addNews(title, description);
    closeModal();
  };

  return (
    <div className={styles.container}>
      <h2>Add news</h2>
      <h3 className={styles.title}>Title</h3>
      <input onChange={(e) => setTitle(e.target.value)} type="text" />
      <h3 className={styles.description}>Description</h3>
      <textarea
        onChange={(e) => setDescription(e.target.value)}
        className={styles.description_area}
      />
      <div className={styles["btn-container"]}>
        <button className={styles["btn-add"]} onClick={handleAddNews}>
          Add
        </button>
        <button onClick={closeModal} className={styles["btn-cancel"]}>
          Cancel
        </button>
      </div>
    </div>
  );
}
