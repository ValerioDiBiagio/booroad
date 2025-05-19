import { useParams } from "react-router-dom";
import members from '../data/members';

export default function JourneyMemberDetails() {
  const { id } = useParams();
  const member = members.find(member => member.id === Number(id));

  return (
    <>
      <div key={member.id} className="card mb-3">
        <div className="card-header">
          <h2> {member.name} {member.surname}</h2>
        </div>
        <div className="card-body">
          <p className="card-text"> Codice Fiscale: {member.CF}</p>
          <p className="card-text">Numero di telefono: {member.phone}</p>
          <p className="card-text"> Email: {member.email}</p>
        </div>
      </div>
    </>
  )
};
