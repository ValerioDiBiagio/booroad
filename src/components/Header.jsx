import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-warning py-3 mb-4">
            <div className="container d-flex justify-content-between align-items-center">
                <div className="logo border border-white rounded-5 bg-warning-subtle">
                    <a href="/"><img src="../src/public/logo_2.png" alt="logo" className="p-2" /></a>
                </div>
                <ul className="d-flex list-unstyled gap-3">
                    <li>
                        <NavLink to='/'>Viaggi</NavLink>
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