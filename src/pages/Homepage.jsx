import { useState } from 'react';
import Jumbotron from '../components/Jumbotron';
import trips from '../data/trips';
import TripCard from '../components/TripCard';
import InstantSearchInput from '../components/InstantSearchInput';

export default function Homepage() {
  const [search, setSearch] = useState('');

  const filteredTrips = trips.filter(trip =>
    trip.destination.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Jumbotron />
      <InstantSearchInput value={search} onChange={setSearch} placeholder='Cerca il tuo viaggio' />
      <ul className='list-unstyled d-flex flex-wrap gap-3'>
        {filteredTrips.map(trip => (
          <TripCard key={trip.id} trip={trip} />
        ))}
      </ul>
    </>
  );
};