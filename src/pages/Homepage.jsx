import { useState, useEffect } from 'react';
import Jumbotron from '../components/Jumbotron';
import trips from '../data/trips';
import TripCard from '../components/TripCard';
import InstantSearchInput from '../components/InstantSearchInput';
import Pagination from '../components/Pagination';

export default function Homepage() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const filteredTrips = trips.filter(trip =>
    trip.destination.toLowerCase().includes(search.toLowerCase())
  );

  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredTrips.length / itemsPerPage);
  const paginatedTrips = filteredTrips.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  useEffect(() => { setPage(1); }, [search]);

  return (
    <>
      <Jumbotron />
      <InstantSearchInput value={search} onChange={setSearch} placeholder='Cerca il tuo viaggio' />
      {paginatedTrips.length ? (
        <ul className='list-unstyled d-flex flex-wrap gap-3'>
          {paginatedTrips.map(trip => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </ul>
      ) : <div>trips were not found</div>}
      <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
    </>
  );
};