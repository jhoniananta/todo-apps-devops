// import * as React from 'react';
// import Typography from './Typography';
// import clsx from 'clsx';

// interface TodoCardProps {
//   title: string;
//   category: string;
//   priority: string;
//   dateCreated: string;
// }

// const TodoCard: React.FC<TodoCardProps> = ({
//   title,
//   category,
//   priority,
//   dateCreated,
// }) => {
//   const [isCompleted, setIsCompleted] = React.useState(false);
//   const handleCheckboxChange = () => {
//     setIsCompleted(!isCompleted);
//   };
//   return (
//     <>
//       <div>
//         <input type='checkbox' checked={isCompleted} onChange={handleCheckboxChange}/>
//         <div>
//           <Typography variant='h3'>{title}</Typography>
//           <Typography variant='p'>{category}</Typography>
//           <Typography variant='p'>{priority}</Typography>
          
//         </div>
//         <div>
//           <div>
//             <button>Edit</button>
//             <button>Delete</button>
//           </div>
//           <Typography variant='p'>{dateCreated}</Typography>
//         </div>
//       </div>
//     </>
//   );
// };
