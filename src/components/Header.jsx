import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-primary py-3 mb-2">
            <div className="container d-flex justify-content-between align-items-center">
                <div>Booroad</div>
                <ul className="d-flex list-unstyled gap-2">
                    <li>
                        <NavLink to='/'>Home Page</NavLink>
                    </li>
                    <li>
                        {/* <NavLink to='/journey_details'>Viaggi</NavLink> */}
                        <div>Ciao</div>
                    </li>
                </ul>
            </div>
        </header>
    )
};

export default Header;