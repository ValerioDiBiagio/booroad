const TripCard = ({ trip }) => {

    if (!trip) {
        return null;
    }

    return (
        <div className='bg-warning-subtle shadow container card mb-3 flex-row justify-content-around' key={trip.id}>
            <img className='w-25 m-3 rounded-2' src={trip.image} alt={trip.destination} />
            <div className='w-50'>
                <h3 className='p-2 m-4 text-center'> <i className='p-2 fa-solid fa-plane-departure text-warning'></i> {trip.destination} <i className='p-2 fa-solid fa-plane-arrival text-warning'></i></h3>
                <p className='card-title text-center'> <strong>Guida:</strong> {trip.guide.name} {trip.guide.surname}</p>
                <p className='card-text text-center'> <strong>Data inizio:</strong> {trip.startDate} - <strong>Data fine:</strong> {trip.endDate}</p>
            </div>
            <div className='card-body d-flex align-items-center rounded-bottom'>
                <a href={`/journeys/${trip.id}`} className='btn btn-warning text-black p-2 border-black'>Dettagli del viaggio</a>
            </div>
        </div>
    );
};

export default TripCard;