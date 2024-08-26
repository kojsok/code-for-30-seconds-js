import { useState, useEffect } from "react";

export const PostsComponent = () => {
  // Состояние для хранения данных
  const [posts, setPosts] = useState([]);
  // Состояние для отслеживания загрузки
  const [loading, setLoading] = useState(true);
  // Состояние для отслеживания ошибки
  const [error, setError] = useState(false);

  useEffect(() => {
    // Выполняем запрос на сервер
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        // Проверка, что запрос прошел успешно
        if (!response.ok) {
          throw new Error("Server error");
        }
        return response.json();
      })
      .then((data) => {
        // Обновляем состояние с данными
        setPosts(data);
        // Снимаем состояние загрузки
        setLoading(false);
      })
      .catch((err) => {
        // Обрабатываем ошибку
        console.error(err);
        setError(true);
        // Снимаем состояние загрузки
        setLoading(false);
      });
  }, []); // Пустой массив зависимостей, чтобы useEffect сработал только один раз при загрузке компонента

  // Если идет загрузка, отображаем текст "загрузка..."
  if (loading) {
    return <p>загрузка...</p>;
  }

  // Если произошла ошибка, отображаем текст "ошибка сервера"
  if (error) {
    return <p>ошибка сервера</p>;
  }

  // Если данные загружены успешно, отображаем их
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
