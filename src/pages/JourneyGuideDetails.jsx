import { useParams } from 'react-router-dom';
import guides from '../data/guides';
import MemberCard from '../components/MemberCard';

export default function JourneyGuideDetails() {
  const { id } = useParams();
  const guide = guides.find(member => member.id === Number(id));

  return (
    <>
      <MemberCard member={guide} showTrip={true} />
    </>
  )
};
