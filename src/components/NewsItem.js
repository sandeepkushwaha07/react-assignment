import React, { useEffect, useState } from 'react';

const NewsItem = () => {
  const [data, setData] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [newMovie, setNewMovie] = useState({ name: "", basePrice: "", featuredImage: "", thumbnailImage: "" });

  useEffect(() => {
    const getNewsData = async () => {
      try {
        const res = await fetch('https://dummyapi.online/api/products');
        const newsData = await res.json();
        setData(newsData);
      } catch (err) {
        console.log(err);
      }
    };

    getNewsData();
  }, []);

  const filterNews = () => {
    console.log("Search Item:", searchItem);
    const filteredData = data.filter((news) =>
      news.name.toLowerCase().includes(searchItem.toLowerCase())
    );
    console.log("Filtered Data:", filteredData);
    return filteredData;
  };

  const handleAddMovie = () => {
    const newData = [newMovie, ...data];
    setData(newData);
    localStorage.setItem("movies", JSON.stringify(newData));
    setNewMovie({ name: "", basePrice: "", featuredImage: "", thumbnailImage: "" });
  };

  const handleDeleteMovie = (id) => {
    const updatedData = data.filter((news) => news.id !== id); // Change 'movie' to 'news'
    setData(updatedData);
    localStorage.setItem("movies", JSON.stringify(updatedData));
  };

  return (
    <>
      <div className="searchButton">
        <input
          type="text"
          placeholder="Search Products name"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
        />
        <button type="button" className="btn btn-info">
          Search
        </button>
      </div>

      {/* New Product Form */}
      <div className="addMovieForm">
        <input
          type="text"
          placeholder="Product Name"
          value={newMovie.name}
          onChange={(e) => setNewMovie({ ...newMovie, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Base Price"
          value={newMovie.basePrice}
          onChange={(e) => setNewMovie({ ...newMovie, basePrice: e.target.value })}
        />
        <input
          type="text"
          placeholder="Featured Image URL"
          value={newMovie.featuredImage}
          onChange={(e) => setNewMovie({ ...newMovie, featuredImage: e.target.value })}
        />
        <input
          type="text"
          placeholder="Thumbnail Image URL"
          value={newMovie.thumbnailImage}
          onChange={(e) => setNewMovie({ ...newMovie, thumbnailImage: e.target.value })}
        />
        <button type="button" className="btn btn-primary" onClick={handleAddMovie}>
          Add Product
        </button>
      </div>

      <section>
        <div className="container">
          <div className="row">
            {filterNews().map(news => (
              <div className="col-sm-4" key={news.id}>
                <div className="productItem">
                  <div className="productItem12">
                    <img src={news.featuredImage} alt={news.productCategory} />
                    <h3 style={{ fontSize: '16px' }}> Name : {news.name}</h3>
                    <h3 style={{ fontSize: '16px' }}>Base Price : ${news.basePrice}</h3>
                    <a href={news.thumbnailImage}>
                      <button type="button" className="btn btn-success">Read More</button>
                    </a>
                    <button type="button" className="btn btn-danger" onClick={() => handleDeleteMovie(news.id)}>Delete</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsItem;
