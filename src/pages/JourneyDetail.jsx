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
            <p><strong>Data Inizio: </strong>{trip.startDate}</p>
            <p><strong>Data Fine: </strong>{trip.endDate}</p>
            <p><strong>Guida: </strong><Link to={`/journey-guide-details/${trip.guide.id}`}>{trip.guide.name} {trip.guide.surname}</Link></p>
            <h3 className='mb-4'><strong>Viaggiatori: </strong></h3>
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
                          <strong>{traveller.name} {traveller.surname}</strong>
                        </button>
                      </h2>
                      <div
                        id={collapseId}
                        className="accordion-collapse collapse"
                        aria-labelledby={headingId}
                        data-bs-parent={`#${parentId}`}
                      >
                        <div className="accordion-body">
                          <ul className='list-unstyled'>
                            <li><strong>Numero di telefono: </strong>{traveller.phone}</li>
                            <li><strong>Email: </strong>{traveller.email}</li>
                            <li><strong>Data di nascita: </strong>{traveller.birthday}</li>
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