import trips from "../data/trips";

const Homepage = () => {
    return (
        <>
            <header className="d-flex justify-content-between mb-3 align-items-center">
                <h1 className="text-center mb-4">Lista Viaggi</h1>
            </header>
            <div class="card">
                <div class="card-header">
                    Featured
                </div>
                <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </>
    )
};
export default Homepage;