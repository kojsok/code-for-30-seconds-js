import React, { useState, useEffect } from 'react';
import './TestFetchUseEffect.css';

function TestFetchUseEffect() {
  // Состояния для постов, выбранного поста и комментариев
  const [posts, setPosts] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [comments, setComments] = useState([]);

  // Получаем список постов при монтировании компонента и добавляем в useEffect posts
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  // Получаем комментарии для выбранного поста и добавляем в useEffect comments
  useEffect(() => {
    if (selectedPostId !== null) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${selectedPostId}/comments`)
        .then(response => response.json())
        .then(data => setComments(data));
    }
  }, [selectedPostId]);

  // Обработчик клика на кнопку "Показать комментарии"
  const handleShowComments = (postId) => {
    setSelectedPostId(postId);
  };

  return (
    <div className="container">
      <div className='posts'>
        <h1>Posts</h1>
        <ul>
        {posts.map(post => (
            <li className='postList' key={post.id}>
              <h2>{post.title}</h2>
              <button onClick={() => handleShowComments(post.id)}>Показать комментарии</button>
            </li>
          ))}
        </ul>
      </div>

      <div className='comments'>
          <h1>Comments</h1>
          {selectedPostId !== null ? (
            <ul>
              {comments.map(comment => (
                <li key={comment.id}>
                  <p><strong>{comment.name}</strong>: {comment.body}</p>
                </li>
              ))}
            </ul>
        ) : (
          <p>Выбери комментарии</p>
        )}
      </div>
    </div>
  );
}

export default TestFetchUseEffect;