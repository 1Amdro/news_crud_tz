import styles from "./NewsItem.module.css";
import { INews } from "../../types/INews";
import { ChangeNewsT, RemoveNewsT } from "../../types/handlers";
import { useState } from "react";
import Modal from "../Modal/Modal";

export default function NewsItem({
  item,
  removeNews,
  changeNews,
}: {
  item: INews;
  removeNews: RemoveNewsT;
  changeNews: ChangeNewsT;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState(item.title);
  const [newDescription, setNewDescription] = useState(item.description);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleSave = () => {
    changeNews(item.id, newTitle, newDescription);
    toggleModal();
  };
  return (
    <li className={styles.container}>
      <h2 className={styles.title}>{item.title}</h2>
      <p className={styles.description}>{item.description}</p>
      <div>
        <button
          className={styles["btn-remove"]}
          onClick={() => removeNews(item.id)}
        >
          ❌
        </button>
        <button onClick={toggleModal} className={styles["btn-edit"]}>
          ✏️
        </button>
      </div>
      {isModalOpen && (
        <Modal>
          <div className={styles.modal}>
            <h1>Editing</h1>
            <input
              className={styles["edit-title"]}
              defaultValue={item.title}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <textarea
              className={styles["edit-description"]}
              defaultValue={item.description}
              onChange={(e) => setNewDescription(e.target.value)}
            ></textarea>
            <div className={styles["btns-modal"]}>
              <button className={styles["btn-save"]} onClick={handleSave}>
                Save
              </button>
              <button className={styles["btn-cancel"]} onClick={toggleModal}>
                Cancel
              </button>
            </div>
          </div>
        </Modal>
      )}
    </li>
  );
}
