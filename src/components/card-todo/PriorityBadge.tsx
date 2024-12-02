interface PriorityBadgeProps {
  priority: string;
}

export function PriorityBadge({ priority }: PriorityBadgeProps) {
  return (
    <div className={`p-1 text-lg text-center whitespace-normal rounded-xl w-[98px] ${priority=="high" ? 'bg-red-200': priority=="medium"? 'bg-yellow-200': 'bg-green-200'}`}>
      {priority}
    </div>
  );
}