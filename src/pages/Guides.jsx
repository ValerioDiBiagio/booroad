import guides from '../data/guides';
import { useState, useEffect } from 'react';
import InstantSearchInput from '../components/InstantSearchInput';
import Pagination from '../components/Pagination';
import MemberCard from '../components/MemberCard';

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
      <InstantSearchInput value={search} onChange={setSearch} title='Guide' placeholder='Cerca guida' />
      {paginatedGuides.length ? (
        paginatedGuides.map((guide) => (
          <MemberCard member={guide} showTrip={true} />
        ))
      ) : (
        <div>guides were not found</div>
      )}
      <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
    </>
  );
};