import React, { useEffect, useState } from "react";

const Movie = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [newMovie, setNewMovie] = useState({ id: "", movie: "", image: "", imdb_url: "" });
  const [reverseOrder, setReverseOrder] = useState(false);
  const [error, setError] = useState(null);

  const getMovieData = async () => {
    try {
      const res = await fetch("https://dummyapi.online/api/movies");
      if (!res.ok) {
        throw new Error('Failed to fetch movies');
      }
      const moviedata = await res.json();
      setData(moviedata); // assuming the data structure is an array of movies
      localStorage.setItem("movies", JSON.stringify(moviedata));
    } catch (err) {
      console.error("Error fetching movies:", err);
      setError(err.message);
    }
  };

  useEffect(() => {
    const storedMovies = localStorage.getItem("movies");
    if (storedMovies) {
      setData(JSON.parse(storedMovies));
    } else {
      getMovieData();
    }
  }, []);

  const filterMovies = () => {
    let filteredData = data.filter((movie) => {
      return movie && movie.movie && movie.movie.toLowerCase().includes(searchQuery.toLowerCase());
    });
    if (reverseOrder) {
      filteredData = filteredData.reverse();
    }
    return filteredData;
  };

  const handleAddMovie = () => {
    const updatedData = [newMovie, ...data]; 
    setData(updatedData);
    localStorage.setItem("movies", JSON.stringify(updatedData));
    setNewMovie({ id: "", movie: "", image: "", imdb_url: "" });
  };

  const handleDeleteMovie = (id) => {
    const updatedData = data.filter((movie) => movie.id !== id);
    setData(updatedData);
    localStorage.setItem("movies", JSON.stringify(updatedData));
  };

  const handleReverseOrder = () => {
    setReverseOrder(!reverseOrder);
  };

  return (
    <>
      {error && <div>Error: {error}</div>}
      <div className="searchButton">
        <input
          type="text"
          placeholder="Search Movie name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="button" className="btn btn-info">
          Search
        </button>
      </div>

      
      <div className="addMovieForm">
        <input
          type="text"
          placeholder="Movie Id"
          value={newMovie.id}
          onChange={(e) => setNewMovie({ ...newMovie, id: e.target.value })}
        />
        <input
          type="text"
          placeholder="Movie Name"
          value={newMovie.movie}
          onChange={(e) => setNewMovie({ ...newMovie, movie: e.target.value })}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newMovie.image}
          onChange={(e) => setNewMovie({ ...newMovie, image: e.target.value })}
        />
        <input
          type="text"
          placeholder="IMDB URL"
          value={newMovie.imdb_url}
          onChange={(e) => setNewMovie({ ...newMovie, imdb_url: e.target.value })}
        />
        <button type="button" className="btn btn-primary" onClick={handleAddMovie}>
          Add Movie
        </button>
      </div>
      <br/>
      <br/>

      <div className="reverseButton">
        <button type="button" className="btn btn-dark" onClick={handleReverseOrder}>
          {reverseOrder ? "Original Order" : "Reverse Order"}
        </button>
      </div>

      <section className="mainSection">
        <div className="gr1"></div>
        <div className="gr2"></div>
        <div className="gr3"></div>
        <div className="headingName">
          <h1>Movie Card</h1>
          <p>Superhit Movie in 2024</p>
        </div>
        <div className="container">
          <div className="row">
            {filterMovies().map((movie) => (
              <div className="col-sm-4" key={movie.id}>
                <div className="movieCard">
                  <div className="movieName">
                    <img
                      src={movie.image} // assuming the image URL is directly provided by the API
                      alt={movie.movie}
                    />
                    <h2 style={{ fontSize: "16px" }}>Id: {movie.id} </h2>
                    <h3 style={{ fontSize: "16px" }}>
                      Movie Name: {movie.movie}
                    </h3>
                    <a href={movie.imdb_url}>
                      <button type="button" className="btn btn-success">
                        Download Movie
                      </button>
                    </a>
                    <button type="button" className="btn btn-danger" onClick={() => handleDeleteMovie(movie.id)}>
                      Delete
                    </button>
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

export default Movie;
