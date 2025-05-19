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
            <p>Guida: <Link to={`/journey-guide-details/${trip.guide.id}`}>{trip.guide.name} {trip.guide.surname}</Link></p>
            <h3>Viaggiatori:</h3>
            <ul>
              {trip.travellers.map((traveller) => {
                const headingId = `heading-${traveller.id}`;
                const collapseId = `collapse-${traveller.id}`;
                const parentId = `accordion-${traveller.id}`;
                return (
                  <div className="accordion mb-3" id={parentId} key={traveller.id}>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id={headingId}>
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#${collapseId}`}
                          aria-expanded="false"
                          aria-controls={collapseId}
                        >
                          {traveller.name} {traveller.surname}
                        </button>
                      </h2>
                      <div
                        id={collapseId}
                        className="accordion-collapse collapse"
                        aria-labelledby={headingId}
                        data-bs-parent={`#${parentId}`}
                      >
                        <div className="accordion-body">
                          <ul>
                            <li>{traveller.phone}</li>
                            <li>{traveller.email}</li>
                            <li>{traveller.birthday}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </ul>
          </div>
        </>
      ) : (
        <p>Viaggio non trovato</p>
      )}
    </>
  )
};