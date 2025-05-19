import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import trips from '../data/trips';

export default function JourneyDetail() {
  const { id } = useParams();
  const [search, setSearch] = useState('');
  const [searchTrav, setSearchTrav] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTrav(search);
  };

  const trip = trips.find(trip => trip.id === Number(id));

  // Filtra i travellers in base al termine di ricerca (nome o cognome)
  const filteredTravellers = trip.travellers.filter(traveller =>
    `${traveller.name} ${traveller.surname}`.toLowerCase().includes(searchTrav.toLowerCase())
  )
  return (
    <>
      {trip ? (
        <>
          <div className='bg-warning-subtle p-4 rounded'>
            <h1>Dettagli del Viaggio a {trip.destination}:</h1>
            <div>
              <p><strong> <i className="p-2 fa-solid fa-plane-departure"></i> Data Inizio: </strong>{trip.startDate}</p>
              <p><strong> <i className="p-2 fa-solid fa-plane-arrival"></i> Data Fine: </strong>{trip.endDate}</p>
              <p> <i className="fa-solid fa-user-tie"></i> <strong> Guida: </strong><Link className="text-decoration-none" to={`/journey-guide-details/${trip.guide.id}`}>{trip.guide.name} {trip.guide.surname}</Link></p>
            </div>
            <h2 className='mb-4'><strong>Viaggiatori: </strong></h2>
            <form onSubmit={handleSubmit} className="mb-4 d-flex justify-content-end align-items-center">
              <input
                type="search"
                className="form-control w-25 me-2"
                placeholder="Cerca viaggiatore"
                value={search}
                onChange={e => setSearch(e.target.value)}
                aria-label="Search"
              />
              <button className="btn btn-warning text-black p-2 border-black" type="submit">Cerca</button>
            </form>
            <ul>
              {filteredTravellers.map((traveller) => {
                const headingId = `heading-${traveller.id}`;
                const collapseId = `collapse-${traveller.id}`;
                const parentId = `accordion-${traveller.id}`;
                return (
                  <div className="accordion mb-3" id={parentId} key={traveller.id}>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id={headingId}>
                        <button
                          className="accordion-button collapsed  bg-warning"
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
                        <div className="accordion-body bg-warning-subtle">
                          <ul className='list-unstyled'>
                            <li><strong><i className="fa-solid fa-phone"></i> Numero di telefono: </strong>{traveller.phone}</li>
                            <li><i class="fa-solid fa-envelope"></i> <strong>Email: </strong>{traveller.email}</li>
                            <li><strong><i className="fa-solid fa-address-card"></i> Data di nascita: </strong>{traveller.birthday}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              {filteredTravellers.length === 0 && (
                <li>Nessun viaggiatore trovato.</li>
              )}
            </ul>
          </div>
        </>
      ) : (
        <p>Viaggio non trovato</p>
      )}
    </>
  )
};
