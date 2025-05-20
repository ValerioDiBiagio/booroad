import guides from '../data/guides';
import { useState, useEffect } from 'react';
import InstantSearchInput from '../components/InstantSearchInput';
import Pagination from '../components/Pagination';


export default function Guides() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const filteredGuides = guides.filter(guide =>
    `${guide.name} ${guide.surname}`.toLowerCase().includes(search.toLowerCase())
  );
  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredGuides.length / itemsPerPage);
  const paginatedGuides = filteredGuides.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  useEffect(() => { setPage(1); }, [search]);

  return (
    <>
      <InstantSearchInput value={search} onChange={setSearch} placeholder='Cerca guida' />
      {paginatedGuides.length ? (
        paginatedGuides.map((guide) => (
          <div className='card mb-3 bg-warning shadow' key={guide.id}>
            <div className='card-header'>
              <h5 className='p-2'> <i className='fa-regular fa-user'></i> {guide.name} {guide.surname}</h5>
            </div>
            <div className='card-body bg-warning-subtle'>
              <p className='card-text'> <i className='fa-solid fa-envelope'></i> <strong>Email: </strong>{guide.email} </p>
              <p className='card-text'> <i className='fa-solid fa-phone'></i> <strong>Numero di Telefono: </strong>{guide.phone} </p>
              <p className='card-text'> <i className='fa-solid fa-id-card'></i> <strong>Codice Fiscale: </strong>{guide.CF} </p>
            </div>
          </div>
        ))
      ) : (
        <div>guides were not found</div>
      )}
      <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
    </>
  );
};