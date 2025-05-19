import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-warning py-3 mb-4">
            <div className="container d-flex justify-content-between align-items-center">
                <a href="/journeys-detail" className="logo text-decoration-none text-light bg-success p-3 rounded-5 fs-5">Booroad</a>
                <ul className="d-flex list-unstyled gap-3">
                    <li>
                        <NavLink className="text-decoration-none" to='/journeys-detail'>Viaggi</NavLink>
                    </li>
                    <li>
                        <NavLink to='/journeys-members'>Viaggiatori</NavLink>
                    </li>
                </ul>
            </div>
        </header>
    )
};

export default Header;