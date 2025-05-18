import trips from "../data/trips";

const JourneyMembers = () => {

    return (
        <>
            {trips.map((trip) =>
                trip.travellers.map((traveller) => (
                    <div key={traveller.CF} className="card mb-3">
                        <div className="card-header">
                            <h2>{traveller.name} {traveller.surname}</h2>
                        </div>
                        <div className="card-body">
                            <p className="card-text">Codice Fiscale: {traveller.CF}</p>
                            <p className="card-text">Numero di telefono: {traveller.phone}</p>
                            <p className="card-text">Email: {traveller.email}</p>
                        </div>
                    </div>
                ))
            )}
        </>
    )
};

export default JourneyMembers;