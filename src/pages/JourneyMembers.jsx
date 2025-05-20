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
  const itemsPerPage = 9;
  const totalPages = Math.ceil(filteredMembers.length / itemsPerPage);
  const paginatedMembers = filteredMembers.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  useEffect(() => { setPage(1); }, [search]);

  return (
    <>
      <InstantSearchInput value={search} onChange={setSearch} placeholder='Cerca viaggiatore' />
      <div className="row">
        {paginatedMembers.length ? (
          paginatedMembers.map((member) => (
            <div className="col-12 col-md-6 col-lg-4 d-flex" key={member.id}>
              <MemberCard member={member} showTrip={true} />
            </div>
          ))
        ) : (
          <div>members were not found</div>
        )}
      </div>
      <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
    </>
  );
};