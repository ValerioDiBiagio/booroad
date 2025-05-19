import members from "../data/members";

const JourneyMembers = () => {

    return (
        <>
            {members.length ? (
                members.map((member) => (
                    <div className="card mb-3 bg-warning" key={member.id}>
                        <div className="card-header">
                            <h5 className="p-2"> <i class="fa-regular fa-user"></i> {member.name} {member.surname}</h5>
                        </div>
                        <div className="card-body bg-warning-subtle">
                            <p className="card-text"> <i class="fa-solid fa-envelope"></i> <strong>Email: </strong>{member.email} </p>
                            <p className="card-text"> <i class="fa-solid fa-phone"></i> <strong>Numero di Telefono: </strong>{member.phone} </p>
                            <p className="card-text"> <i class="fa-solid fa-id-card"></i> <strong>Codice Fiscale: </strong>{member.CF} </p>
                        </div>
                    </div>
                ))
            ) : (
                <div>members were not found</div>
            )}
        </>
    )
};

export default JourneyMembers;