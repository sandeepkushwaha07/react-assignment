import React, { useEffect, useState } from "react";

const Movie = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const getMovieData = async () => {
    try {
      const res = await fetch("https://dummyapi.online/api/movies");
      const moviedata = await res.json();
      setData(moviedata);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMovieData();
  }, []);


  const filterMovies = () => {
    return data.filter((movie) =>
      movie.movie.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <>
      <div className="searchButton">
        <input
          type="text"
          placeholder="Search Movie name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="button" className="btn btn-success">
          Search
        </button>
      </div>
      <section>
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
                      src={`https://dummyapi.online${movie.image}`}
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
