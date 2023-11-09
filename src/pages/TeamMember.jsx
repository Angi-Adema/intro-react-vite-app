import { useLoaderData } from "react-router";
// import teamMembers from "../teamMembers.json";

export function TeamMember() {
  const member = useLoaderData();

  // Since we are using loader data, we comment this out and put in the code above.
  // const { memberId } = useParams();
  // const member = teamMembers.find((m) => m.id === memberId);

  return <h1>Team Member - {member.name}</h1>;
}
