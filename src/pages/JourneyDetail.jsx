import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import trips from '../data/trips';
import members from '../data/members';
import InstantSearchInput from '../components/InstantSearchInput';

export default function JourneyDetail() {
  const { id } = useParams();
  const [search, setSearch] = useState('');

  const trip = trips.find(trip => trip.id === Number(id));
  const tripMembers = members.filter(member => member.tripId === trip.id);

  // Filtra i travellers in base al termine di ricerca (nome o cognome)
  const filteredTravellers = tripMembers.filter(traveller =>
    `${traveller.name} ${traveller.surname}`.toLowerCase().includes(search.toLowerCase())
  );

  const tripHeader = (
    <div className='bg-warning-subtle p-4 rounded'>
      <h1 className='mb-3'>Dettagli del Viaggio a {trip.destination}:</h1>
      <div>
        <p><strong> <i className='p-2 fa-solid fa-plane-departure'></i> Data Inizio: </strong>{trip.startDate}</p>
        <p><strong> <i className='p-2 fa-solid fa-plane-arrival'></i> Data Fine: </strong>{trip.endDate}</p>
        <p> <i className='fa-solid fa-user-tie ms-2 pe-3'></i> <strong> Guida: </strong><Link className=' text-decoration-none' to={`/guides/${trip.guide.id}`}>{trip.guide.name} {trip.guide.surname}</Link></p>
      </div>
    </div >
  );

  const searchForm = (
    <form className='mt-3 mb-4 d-flex justify-content-between align-items-center' onSubmit={e => e.preventDefault()}>

      <h2 className='mt-3 p-0'><strong> Viaggiatori: </strong></h2>
      <input
        type='search'
        className='form-control w-25 pe-4'
        placeholder='Cerca viaggiatore'
        value={search}
        onChange={e => setSearch(e.target.value)}
        aria-label='Search'

      />


    </form>
  );

  const travellersList = (
    <ul className='p-0' >
      {filteredTravellers.map((traveller) => {
        const headingId = `heading-${traveller.id}`;
        const collapseId = `collapse-${traveller.id}`;
        const parentId = `accordion-${traveller.id}`;
        return (
          <div className='accordion mb-3' id={parentId} key={traveller.id}>
            <div className='accordion-item'>
              <h2 className='accordion-header' id={headingId}>
                <button
                  className='accordion-button collapsed  bg-warning'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target={`#${collapseId}`}
                  aria-expanded='false'
                  aria-controls={collapseId}
                >
                  <strong>{traveller.name} {traveller.surname}</strong>
                </button>
              </h2>
              <div
                id={collapseId}
                className='accordion-collapse collapse'
                aria-labelledby={headingId}
                data-bs-parent={`#${parentId}`}
              >
                <div className='accordion-body bg-warning-subtle rounded-bottom'>
                  <ul className='list-unstyled'>
                    <li><strong><i className='fa-solid fa-phone'></i> Numero di telefono: </strong>{traveller.phone}</li>
                    <li><i className='fa-solid fa-envelope'></i> <strong>Email: </strong>{traveller.email}</li>
                    <li><strong><i className='fa-solid fa-address-card'></i> Data di nascita: </strong>{traveller.birthday}</li>
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
  );

  return (
    <>
      {trip ? (
        <>
          {tripHeader}
          <InstantSearchInput value={search} onChange={setSearch} title='Viaggiatori' placeholder='Cerca viaggiatore' />
          {travellersList}
        </>
      ) : (
        <p>Viaggio non trovato</p>
      )}
    </>
  );
}
