import members from '../data/members';
import MemberCard from '../components/MemberCard';
import { useState, useEffect } from 'react';
import InstantSearchInput from '../components/InstantSearchInput';
import Pagination from '../components/Pagination';


export default function JourneyMembers() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const filteredMembers = members.filter(member =>
    `${member.name} ${member.surname}`.toLowerCase().includes(search.toLowerCase())
  );
  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredMembers.length / itemsPerPage);
  const paginatedMembers = filteredMembers.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  useEffect(() => { setPage(1); }, [search]);

  return (
    <>
      <InstantSearchInput value={search} onChange={setSearch} title='Viaggiatori' placeholder='Cerca viaggiatore' />
      {paginatedMembers.length ? (
        paginatedMembers.map((member) => (
          <MemberCard key={member.id} member={member} showTrip={true} />
        ))
      ) : (
        <div>Membri non trovati</div>
      )}
      <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
    </>
  );
};