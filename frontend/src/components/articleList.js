import { useEffect, useState } from "react";

function ArticleList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/articles.php')
      .then(res => res.json())
      .then(data => setArticles(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Artykuły</h1>
      <div className="row">
        {articles.map(article => (
          <div key={article.id} className="col-md-6 mb-3">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">{article.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArticleList;