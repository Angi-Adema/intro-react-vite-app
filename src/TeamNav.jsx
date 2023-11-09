import { Link } from "react-router-dom";
import teamMembers from "./teamMembers.json";

export function TeamNav() {
  return (
    <nav>
      <ul>
        {teamMembers.map((member) => (
          <li key={member.id}>
            <Link to={member.id}>Team - {member.name}</Link>
          </li>
        ))}
        {/* <li> */}
        {/* To make these links relative rather than absolute links, we take it from "/team/joe" and make it just "joe". These will now be relative to where they are rendered inside of our react-router.*/}
        {/* <Link to="joe">Team - Joe</Link>
        </li>
        <li>
          <Link to="sally">Team - Sally</Link>
        </li>
        <li> */}
        {/* This can have a single dot or a double dot and will move you to the parent page depending. */}
        {/* <Link to="..">.. Route</Link>
        </li>
        <li>
          <Link to=".." relative="path">
            .. Path
          </Link>
        </li> */}
        <li>
          <Link to="new">New Member</Link>
        </li>
      </ul>
    </nav>
  );
}
