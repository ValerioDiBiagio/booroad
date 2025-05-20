import members from '../data/members';
import MemberCard from '../components/MemberCard';
import { useState, useEffect } from 'react';
import InstantSearchInput from '../components/InstantSearchInput';
import Pagination from '../components/Pagination';
import Jumbotron from '../components/Jumbotron';

export default function JourneyMembers() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [localMembers, setLocalMembers] = useState(members);
  const [newMember, setNewMember] = useState({ name: '', surname: '', birthday: '', email: '', phone: '', CF: '' });

  const filteredMembers = localMembers.filter(member =>
    `${member.name} ${member.surname}`.toLowerCase().includes(search.toLowerCase())
  );
  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredMembers.length / itemsPerPage);
  const paginatedMembers = filteredMembers.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  useEffect(() => { setPage(1); }, [search]);

  const handleInputChange = (e) => {
    setNewMember({ ...newMember, [e.target.name]: e.target.value });
  };

  const handleAddMember = (e) => {
    e.preventDefault();
    if (!newMember.name || !newMember.surname) return;
    setLocalMembers([
      ...localMembers,
      {
        ...newMember,
        id: localMembers.length ? Math.max(...localMembers.map(m => m.id)) + 1 : 1,
        tripId: null
      }
    ]);
    setNewMember({ name: '', surname: '', birthday: '', email: '', phone: '', CF: '' });
  };

  return (
    <>
      <Jumbotron />
      <form className='mb-4 p-3 bg-warning-subtle rounded shadow' onSubmit={handleAddMember}>
        <h4 className='mb-3'>Aggiungi nuovo viaggiatore</h4>
        <div className='row g-2'>
          <div className='col-md-2'><input name='name' value={newMember.name} onChange={handleInputChange} className='form-control' placeholder='Nome' required /></div>
          <div className='col-md-2'><input name='surname' value={newMember.surname} onChange={handleInputChange} className='form-control' placeholder='Cognome' required /></div>
          <div className='col-md-2'><input name='birthday' value={newMember.birthday} onChange={handleInputChange} className='form-control' placeholder='Data di nascita' type='date' /></div>
          <div className='col-md-2'><input name='email' value={newMember.email} onChange={handleInputChange} className='form-control' placeholder='Email' type='email' /></div>
          <div className='col-md-2'><input name='phone' value={newMember.phone} onChange={handleInputChange} className='form-control' placeholder='Telefono' /></div>
          <div className='col-md-2'><input name='CF' value={newMember.CF} onChange={handleInputChange} className='form-control' placeholder='Codice Fiscale' /></div>
        </div>
        <button type='submit' className='btn btn-warning mt-3'>Aggiungi</button>
      </form>
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