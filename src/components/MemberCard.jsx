import trips from '../data/trips';
import { Link } from 'react-router-dom';

export default function MemberCard({ member, showTrip }) {
  if (!member) return null;

  let tripInfo = null;
  if (showTrip) {
    const trip = trips.find(t => t.id === member.tripId);
    tripInfo = trip ? (
      <p className='card-text'>
        <i className='fa-solid fa-plane'></i> <strong>Viaggio: </strong>
        <Link to={`/journeys/${trip.id}`} className='text-decoration-none'>{trip.destination}</Link>
      </p>
    ) : null;
  };

  return (
    <div className='card mb-3 bg-warning shadow' key={member.id}>
      <div className='card-header'>
        <h5 className='p-2'> <i className='fa-regular fa-user'></i> {member.name} {member.surname}</h5>
      </div>
      <div className='card-body bg-warning-subtle'>
        {tripInfo}
        <p className='card-text'> <i className='fa-solid fa-envelope'></i> <strong>Email: </strong>{member.email} </p>
        <p className='card-text'> <i className='fa-solid fa-phone'></i> <strong>Numero di Telefono: </strong>{member.phone} </p>
        <p className='card-text'> <i className='fa-solid fa-id-card'></i> <strong>Codice Fiscale: </strong>{member.CF} </p>
      </div>
    </div>
  );
};