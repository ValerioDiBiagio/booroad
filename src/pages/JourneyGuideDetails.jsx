import { useParams } from "react-router-dom";
import guides from '../data/guides';

export default function JourneyGuideDetails() {
  const { id } = useParams();
  const guide = guides.find(member => member.id === Number(id));

  return (
    <>
      <div key={guide.id} className="card mb-3">
        <div className="card-header">
          <h2>{guide.name} {guide.surname}</h2>
        </div>
        <div className="card-body">
          <p className="card-text">Codice Fiscale: {guide.CF}</p>
          <p className="card-text">Numero di telefono: {guide.phone}</p>
          <p className="card-text">Email: {guide.email}</p>
        </div>
      </div>
    </>
  )
};
