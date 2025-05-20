import { useState, useEffect } from 'react';
import Jumbotron from '../components/Jumbotron';
import trips from '../data/trips';
import TripCard from '../components/TripCard';
import InstantSearchInput from '../components/InstantSearchInput';
import Pagination from '../components/Pagination';
import Guides from '../data/guides';

export default function Homepage() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [localTrips, setLocalTrips] = useState(trips);
  const [newTrip, setNewTrip] = useState({ destination: '', image: '', startDate: '', endDate: '', guideId: '' });
  const [guides, setGuides] = useState(Guides);

  const handleInputChange = (e) => {
    setNewTrip({ ...newTrip, [e.target.name]: e.target.value });
  };

  const handleAddTrip = (e) => {
    e.preventDefault();
    if (!newTrip.destination || !newTrip.startDate || !newTrip.endDate || !newTrip.guideId) return;
    const guide = guides.find(g => g.id === Number(newTrip.guideId));
    setLocalTrips([
      {
        id: localTrips.length ? Math.max(...localTrips.map(t => t.id)) + 1 : 1,
        destination: newTrip.destination,
        image: newTrip.image,
        startDate: newTrip.startDate,
        endDate: newTrip.endDate,
        guide: guide ? { id: guide.id, name: guide.name, surname: guide.surname } : { id: 0, name: '', surname: '' }
      },
      ...localTrips
    ]);
    setNewTrip({ destination: '', image: '', startDate: '', endDate: '', guideId: '' });
  };

  const filteredTrips = localTrips.filter(trip =>
    trip.destination.toLowerCase().includes(search.toLowerCase())
  );

  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredTrips.length / itemsPerPage);
  const paginatedTrips = filteredTrips.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  useEffect(() => { setPage(1); }, [search]);

  return (
    <>
      <Jumbotron />
      <form className='mb-4 p-3 bg-warning-subtle rounded shadow' onSubmit={handleAddTrip} autoComplete='off'>
        <h4 className='mb-3'>Aggiungi nuovo viaggio</h4>
        <div className='row g-2'>
          <div className='col-md-3'>
            <label className='form-label'>Destinazione</label>
            <input name='destination' value={newTrip.destination} onChange={handleInputChange} className='form-control' placeholder='Destinazione' required />
          </div>
          <div className='col-md-2'>
            <label className='form-label'>Data inizio</label>
            <input name='startDate' value={newTrip.startDate} onChange={handleInputChange} className='form-control' placeholder='Data inizio' type='date' required />
          </div>
          <div className='col-md-2'>
            <label className='form-label'>Data fine</label>
            <input name='endDate' value={newTrip.endDate} onChange={handleInputChange} className='form-control' placeholder='Data fine' type='date' required />
          </div>
          <div className='col-md-3'>
            <label className='form-label'>Guida</label>
            <select name='guideId' value={newTrip.guideId} onChange={handleInputChange} className='form-select' required>
              <option value=''>Seleziona guida...</option>
              {guides.map(g => (
                <option key={g.id} value={g.id}>{g.name} {g.surname}</option>
              ))}
            </select>
          </div>
          <div className='col-md-2'>
            <label className='form-label'>URL immagine</label>
            <input name='image' value={newTrip.image} onChange={handleInputChange} className='form-control' placeholder='URL immagine' />
          </div>
        </div>
        <button type='submit' className='btn btn-warning mt-3'>Aggiungi viaggio</button>
      </form>
      <InstantSearchInput value={search} onChange={setSearch} title='Viaggi' placeholder='Cerca il tuo viaggio' />
      {paginatedTrips.length ? (
        <ul className='list-unstyled d-flex flex-wrap gap-3'>
          {paginatedTrips.map(trip => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </ul>
      ) : <div>Viaggi non trovati</div>}
      <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
    </>
  );
};