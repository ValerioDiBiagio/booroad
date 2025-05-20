import { useParams } from 'react-router-dom';
import members from '../data/members';
import MemberCard from '../components/MemberCard';

export default function JourneyMemberDetails() {
  const { id } = useParams();
  const member = members.find(member => member.id === Number(id));

  return (
    <>
      <MemberCard member={member} showTrip={false} />
    </>
  )
};
