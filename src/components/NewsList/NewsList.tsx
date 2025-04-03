import { ChangeNewsT, RemoveNewsT } from "../../types/handlers";
import { INews } from "../../types/INews";
import NewsItem from "../NewsItem/NewsItem";
import styles from "./NewsList.module.css";

export default function NewsList({
  news,
  removeNews,
  changeNews,
}: {
  news: INews[];
  removeNews: RemoveNewsT;
  changeNews: ChangeNewsT;
}) {
  return (
    <ul className={styles.list}>
      {news.map((item) => (
        <NewsItem
          removeNews={removeNews}
          changeNews={changeNews}
          key={item.id}
          item={item}
        />
      ))}
    </ul>
  );
}
