import members from "../data/members";

const JourneyMembers = () => {

    return (
        <>
            {members.map((member) => (
                <div className="card mb-3" key={member.id}>
                    <div className="card-header">
                        <h5>{member.name} {member.surname}</h5>
                    </div>
                    <div className="card-body">
                        <p className="card-text">Email: {member.email} </p>
                        <p className="card-text">Numero di Telefono: {member.phone} </p>
                        <p className="card-text">Codice Fiscale: {member.CF} </p>
                    </div>
                </div>
            ))}
        </>
    )
};

export default JourneyMembers;