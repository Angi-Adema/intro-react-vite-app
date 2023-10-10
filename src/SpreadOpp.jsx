// import { useEffect, useState } from "react";
// import { User } from "./User";

// export function SpreadOpp() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     setIsLoading(true);

//     const controller = new AbortController();
//     fetch("https://jsonplaceholder.typicode.com/users", {
//       signal: controller.signal,
//     })
//       .then((res) => res.json())
//       .then(setUsers)
//       .finally(() => {
//         setIsLoading(false);
//       });

//     return () => {
//       controller.abort();
//     };
//   }, []);

//   return (
//     <>
//       <h1>User List</h1>
//       {isLoading ? (
//         <h2>Loading...</h2>
//       ) : (
//         <ul>
//           {users.map((user) => {
//             return (
//               <User
//                 key={user.id}
//                 {...user}     // Use the spread operator rather than list out all of the items we want from the data.
// name={user.name}
// email={user.email}
// phone={user.phone}
// username={user.username}
//               />
//             );
//           })}
//         </ul>
//       )}
//     </>
//   );
// }
