import * as React from 'react';
import Typography from '../Typography';
import { PriorityBadge } from './PriorityBadge';
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import axios from 'axios';

export interface TodoCardProps {
  id: number;
  title: string;
  category: string;
  priority: string;
  due_date: string;
}

const TodoCard: React.FC<TodoCardProps> = ({
  id,
  title,
  category,
  priority,
  due_date,
}) => {
  const [isCompleted, setIsCompleted] = React.useState(false);
  const handleCheckboxChange = () => {
    setIsCompleted(!isCompleted);
  };

  const handleDelete= (id: number) =>{
    axios.delete(`http://localhost:5000/api/todo/tasks/${id}`)
    .then((res) => {
      console.log("Berhasil Delete");
    })
    .catch((err) => {
      console.error(err);
    });
  }

  return (
    <div className="max-w-lg p-4 bg-gray-100 border border-gray-300 rounded-lg shadow-md flex gap-3">
      <input type='checkbox' className='w-4 h-4 mt-2' checked={isCompleted} onChange={handleCheckboxChange}/>
      <div className='flex flex-col gap-2'>
        <div className="flex justify-between items-start gap-14">
          <div>
            <Typography variant='h6' className="font-semibold text-gray-800">{title}</Typography>
            <Typography variant='p' className="text-gray-600">{category}</Typography>
          </div>
          <div className='flex flex-row gap-2'>
            <button
              className="ml-2 text-gray-400 hover:text-gray-600"
              title="Edit"
            >
              <CiEdit size={25} className='text-black'/>
            </button>
            <button
              className="ml-2 text-gray-400 hover:text-gray-600"
              title="Delete"
              onClick={() => handleDelete(id)}
            >
              <AiOutlineDelete size={25} className='text-black'/>
            </button>
          </div>
        </div>
        <div className="mt-4 flex justify-between items-center gap-5">
          <PriorityBadge priority={priority} />
          <Typography variant='p' className="text-sm text-gray-500">{due_date}</Typography>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;