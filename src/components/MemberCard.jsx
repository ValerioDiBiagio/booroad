export default function MemberCard({ member }) {
  if (!member) return null;
  return (
    <div className='card mb-3 bg-warning shadow' key={member.id}>
      <div className='card-header'>
        <h5 className='p-2'> <i className='fa-regular fa-user'></i> {member.name} {member.surname}</h5>
      </div>
      <div className='card-body bg-warning-subtle'>
        <p className='card-text'> <i className='fa-solid fa-envelope'></i> <strong>Email: </strong>{member.email} </p>
        <p className='card-text'> <i className='fa-solid fa-phone'></i> <strong>Numero di Telefono: </strong>{member.phone} </p>
        <p className='card-text'> <i className='fa-solid fa-id-card'></i> <strong>Codice Fiscale: </strong>{member.CF} </p>
      </div>
    </div>
  );
};