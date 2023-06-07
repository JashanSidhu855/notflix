import React, { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import Header from '../../components/header/header';
import Head2 from '../../components/h2/h2';
import Button from '../../components/button/button';
import "./showdetails.css";

const ShowDetails = () => {
  // Extract the show ID from the URL
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    const fetchShowDetails = async () => {
      try {
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
        const data = await response.json();
        setShow(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchShowDetails();
  }, [id]);
  if (!show) {
    return <div>Loading...</div>;
  }

  return (
    <div className='main-site'>
      <Header />
      <div className="upper">
      
        <div className="poster-component">
          <img src = {show.image.original} alt="show poster" className='poster' />
        </div>
        <Head2 h2 = {show.name} />
        <div className="details">
          <p className="show-language">Language: {show.language}  </p>
          <p className="show-rating">Ratings: {show.rating.average} </p>
          <p className="show-channel">Time: {show.schedule.time} </p>
          <p className="show-link">Link: {show.officialSite} </p>
        </div>
        <div className="summary-box">
         <p className='summary'> {show.summary}</p>
        </div>
      </div>
      <div className="lower">
        <Head2 h2 = "More Details" />
        <div className="more-details">
          <p>Type: {show.type}</p>
          <p>Average Runtime: {show.averageRuntime}</p>
          <p>Premiered: {show.premiered}</p>
          <p>Time: {show.schedule.time}</p>
          <p>Network: {show.network.name}</p>
          <p>Country: {show.network.country.name}</p>
          <Link to={`/booking/${id}?showName=${encodeURIComponent(show.name)}`}><Button text="Book Ticket" /></Link>
        </div>
      </div>


    </div>
  );
};

export default ShowDetails;
