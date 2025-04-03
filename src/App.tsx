import { useEffect, useState } from "react";
import "./App.css";
import NewsList from "./components/NewsList/NewsList";
import { INews } from "./types/INews";
import Modal from "./components/Modal/Modal";
import AddNews from "./components/AddNews/AddNews";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [news, setNews] = useState<INews[]>(() => {
    const newsFromLocalStorage = localStorage.getItem("news");
    return newsFromLocalStorage
      ? JSON.parse(newsFromLocalStorage)
      : [
          {
            id: 1,
            title: "What is Lorem Ipsum?",
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          },
          {
            id: 2,
            title: "Why do we use it?",
            description:
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
          },
        ];
  });

  const handleRemoveNews = (id: number) => {
    setNews(news.filter((item) => item.id !== id));
  };

  const handleChangeNews = (id: number, title: string, description: string) => {
    if (!title.trim() || !description.trim()) return;
    setNews(
      news.map((item) =>
        item.id === id ? { ...item, title, description } : item
      )
    );
  };

  const handleAddNews = (title: string, description: string) => {
    const randomNum = Math.floor(Math.random() * 1000) + new Date().getTime();
    setNews([
      ...news,
      {
        id: randomNum,
        title,
        description,
      },
    ]);
  };

  useEffect(() => {
    localStorage.setItem("news", JSON.stringify(news));
  }, [news]);

  return (
    <div className="App">
      <header className="header">
        <h1 className="title"> News!</h1>
      </header>

      <main className="main">
        <button onClick={() => setIsModalOpen(true)} className="btn-add">
          Add news 📰
        </button>
        <NewsList
          changeNews={handleChangeNews}
          removeNews={handleRemoveNews}
          news={news}
        />
        {isModalOpen && (
          <Modal>
            <AddNews
              addNews={handleAddNews}
              closeModal={() => setIsModalOpen(false)}
            />
          </Modal>
        )}
      </main>
    </div>
  );
}

export default App;
