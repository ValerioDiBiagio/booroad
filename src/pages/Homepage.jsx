import { useState } from "react";
import Jumbotron from "../components/Jumbotron";
import trips from "../data/trips";
import TripCard from "../components/TripCard";


const Homepage = () => {

    const [query, setQuery] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchTerm(query);
    };

    const filteredTrips = trips.filter(trip =>
        trip.destination.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <Jumbotron />
            <form onSubmit={handleSubmit} className="mb-4 d-flex justify-content-end align-items-center">
                <input
                    type="search"
                    className="form-control w-25 me-2"
                    id="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Cerca il tuo viaggio"
                    aria-label="Search"
                />
                <button className="btn btn-outline-warning" type="submit">Cerca</button>
            </form>
            <ul className="list-unstyled d-flex flex-wrap gap-3">
                {filteredTrips.map((trip, idx) => (
                    <TripCard key={trip.id || idx} trip={trip} />
                ))}
            </ul>
        </>
    )
};


export default Homepage;