import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import trips from '../data/trips';

export default function JourneyDetail() {
  const { id } = useParams();

  const trip = trips.find(trip => trip.id === Number(id));

  return (
    <>
      {trip ? (
        <>
          <h1>Dettagli del Viaggio a {trip.destination}</h1>
          <div>
            <p>Data Inizio: {trip.startDate}</p>
            <p>Data Fine: {trip.endDate}</p>
            <p>Guida: <Link to={`/journey-guides/${trip.guide.id}`}>{trip.guide.name} {trip.guide.surname}</Link></p>
            <h3>Viaggiatori:</h3>
            <ul>
              {trip.travellers.map(traveller => (
                <li key={traveller.id}>
                  <Link to={`/journey-members/${traveller.id}`}>{traveller.name} {traveller.surname}</Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <p>Viaggio non trovato</p>
      )}
    </>
  )
};