import trips from "../data/trips";


const Homepage = () => {


    return (
        <>


            {trips.length ? trips.map((trip) => (
                <div className="card mb-3" key={trip.id}>
                    <div className="card-header">
                        {trip.destination}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">With {trip.guide.name} {trip.guide.surname}</h5>
                        <p className="card-text"> {trip.startDate} - {trip.endDate} </p>
                        <a href="#" className="btn btn-primary">See details</a>
                    </div>
                </div>
            )) : <div>trips were not found</div>}




        </>
    )
};


export default Homepage;