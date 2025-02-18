interface TagProps {
  text: string;
  color: 'blue' | 'green' | 'yellow' | 'purple' | 'orange';
}

const colorVariants = {
  blue: 'bg-blue-50 text-blue-800',
  green: 'bg-green-50 text-green-800',
  yellow: 'bg-yellow-50 text-yellow-800',
  purple: 'bg-purple-50 text-purple-800',
  orange: 'bg-orange-50 text-orange-800'
};

export default function ProjectTag({ text, color }: TagProps) {
  return (
    <span className={`px-4 py-2 rounded-full font-medium ${colorVariants[color]}`}>
      {text}
    </span>
  );
}