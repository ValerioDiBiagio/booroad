import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import trips from '../data/trips';
import members from '../data/members';
import InstantSearchInput from '../components/InstantSearchInput';

export default function JourneyDetail() {
  const { id } = useParams();
  const [search, setSearch] = useState('');
  const [localMembers, setLocalMembers] = useState(members);
  const [selectedMemberId, setSelectedMemberId] = useState('');
  const [assignSearch, setAssignSearch] = useState('');

  const trip = trips.find(trip => trip.id === Number(id));
  const tripMembers = localMembers.filter(member => member.tripId === trip.id);
  const availableMembers = localMembers.filter(member => !member.tripId || member.tripId !== trip.id);

  const filteredTravellers = tripMembers
    .filter(traveller =>
      `${traveller.name} ${traveller.surname}`.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => b.id - a.id);

  const filteredAvailableMembers = availableMembers
    .filter(m => {
      const search = assignSearch.toLowerCase();
      return (
        `${m.name} ${m.surname}`.toLowerCase().includes(search) ||
        m.CF.toLowerCase().includes(search)
      );
    })
    .sort((a, b) => b.id - a.id);

  const handleAssignMember = (e) => {
    e.preventDefault();
    if (!selectedMemberId) return;
    setLocalMembers(prevMembers => {
      const updatedMember = prevMembers.find(m => m.id === Number(selectedMemberId));
      if (!updatedMember) return prevMembers;
      const newMember = { ...updatedMember, tripId: trip.id };
      const others = prevMembers.filter(m => m.id !== Number(selectedMemberId));
      others.unshift(newMember);
      return others;
    });
    setSelectedMemberId('');
  };

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
          <form className='my-4 p-3 bg-warning-subtle rounded shadow' onSubmit={handleAssignMember} autoComplete='off'>
            <h4 className='mb-3'>Aggiungi membro</h4>
            <div className='d-flex flex-wrap align-items-start gap-2 mb-2 position-relative'>
              <div className='flex-grow-1 position-relative' style={{ minWidth: 250 }}>
                <input
                  type='text'
                  className='form-control mb-0'
                  placeholder='Cerca per nome o cognome...'
                  value={assignSearch}
                  onChange={e => {
                    setAssignSearch(e.target.value);
                    setSelectedMemberId('');
                  }}
                  autoComplete='off'
                />
                {assignSearch && filteredAvailableMembers.length > 0 && !selectedMemberId && (
                  <ul className='list-group position-absolute w-100' style={{ zIndex: 1, maxHeight: 200, overflowY: 'auto' }}>
                    {filteredAvailableMembers.map(m => (
                      <li
                        key={m.id}
                        className='list-group-item list-group-item-action'
                        style={{ cursor: 'pointer' }}
                        onClick={() => {
                          setSelectedMemberId(m.id.toString());
                          setAssignSearch(`${m.name} ${m.surname}`);
                        }}
                      >
                        {m.name} {m.surname} - {m.CF}
                      </li>
                    ))}
                  </ul>
                )}
                <input type='hidden' value={selectedMemberId} readOnly />
              </div>
              <button type='submit' className='btn btn-warning' style={{ height: 40 }} disabled={!selectedMemberId}>Aggiungi</button>
            </div>
          </form>
          <InstantSearchInput value={search} onChange={setSearch} title='Viaggiatori' placeholder='Cerca viaggiatore' />
          {travellersList}
        </>
      ) : (
        <p>Viaggio non trovato</p>
      )}
    </>
  );
}
