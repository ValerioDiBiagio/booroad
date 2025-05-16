import trips from "../data/trips";


const Homepage = () => {


    return (
        <>


            {trips.length ? trips.map((trip) => (
                <div class="card mb-3">
                    <div class="card-header">
                        {trip.destination}
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">With {trip.guide}</h5>
                        <p class="card-text"> {trip.startDate} - {trip.endDate} </p>
                        <a href="#" class="btn btn-primary">See details</a>
                    </div>
                </div>
            )) : <div>trips were not found</div>}




        </>
    )
};


export default Homepage;