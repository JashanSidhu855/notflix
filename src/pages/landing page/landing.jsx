import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./landing.css";
import Header from '../../components/header/header';
import Card from '../../components/cards/card';
import fetchData from '../fetchData';
const LandingPage = () => {
  const shows = fetchData();
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    fetchData()
      .then(data => {
        setFetchedData(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  // console.log(fetchedData);
  return (
    <div>
      <Header />
      <div className="cards-container">

      {fetchedData.map((show) => (
        <Link to={`/shows/${show.show.id}`} key={show.show.id}>
          <Card key={show.show.id}
            title={show.show.name}
            language={show.show.language}
            rating={show.show.rating.average}
            time={show.show.schedule.time}
            imgSrc={show.show.image.medium} />
        </Link>
      ))}
      </div>
    </div>
  )
}

export default LandingPage;