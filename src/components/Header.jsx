import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <header className='bg-warning py-3 mb-4 z-3 position-fixed w-100 shadow'>
        <div className='container d-flex justify-content-between align-items-center header-layout'>
          <div className='logo border border-white rounded-5 bg-warning-subtle'>
            <a href='/'><img src='../src/public/logo_2.png' alt='logo' className='p-2' /></a>
          </div>
          <ul className='d-flex p-2 list-unstyled gap-3'>
            <li>
              <NavLink className='text-decoration-none text-black' to='/journeys'><i className='fa-solid fa-earth-americas'></i> Viaggi</NavLink>
            </li>
            <li>
              <NavLink className='text-decoration-none text-black' to='/members'><i className='fa-solid fa-user'></i> Viaggiatori</NavLink>
            </li>
            <li>
              <NavLink className='text-decoration-none text-black' to='/guides'><i className='fa-solid fa-user-tie'></i> Guide</NavLink>
            </li>
          </ul>
        </div>
      </header>
      <div className='height-header'></div>
    </>
  )
};