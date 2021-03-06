import React from "react";

function Members(props) {

  const memberList = props.members.map((member) =>
    <li key={member._id}> 
      {member.first} {member.last} | {member.email}
      {member.admin ? ' (admin)' : ''}
    </li>
  );

  return (
    <div className="Members">
      <ul>
        {memberList}
      </ul>
    </div>
  );
  
}

export default Members;
