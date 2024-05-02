import React, { useEffect, useState } from 'react';

const NewsItem = () => {
  const [data, setData] = useState([]);
  const [searchItem, setSearchItem] = useState("");

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
  

  return (
    <>

<div className="searchButton">
        <input
          type="text"
          placeholder="Search Products name"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
        />
        <button type="button" className="btn btn-success">
          Search
        </button>
      </div>
      <section>
     
        <div className="container">
          <div className="row">
            {filterNews().map(news => ( 
              <div className="col-sm-4" key={news.id}>
                <div className="productItem">
                  <div className="productItem12">
                
                    <img src={news.featuredImage} alt={news.productCategory}/>
               
                    <h3 style={{ fontSize: '16px' }}> Name : {news.name}</h3>
                    <h3 style={{ fontSize: '16px' }}>Base Price : ${news.basePrice}</h3>

                
                    <a href={news.thumbnailImage}>
                      <button type="button" className="btn btn-success">Read More</button>
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

export default NewsItem;
