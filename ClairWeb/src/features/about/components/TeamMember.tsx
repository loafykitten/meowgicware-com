import Image from 'next/image';

interface TeamMemberProps {
  imageSrc: string;
  name: string;
  title: string;
  description: string;
  align: 'left' | 'right';
}

export default function TeamMember({ imageSrc, name, title, description, align }: TeamMemberProps) {
  const isLeftAligned = align === 'left';

  return (
    <div className={`flex flex-col md:flex-row items-center bg-gray-800 p-8 rounded-lg shadow-lg max-w-4xl mx-auto my-8 ${isLeftAligned ? '' : 'md:flex-row-reverse'}`}>
      <div className="flex-shrink-0 mb-6 md:mb-0 md:mx-8">
        <Image
          src={imageSrc}
          alt={name}
          width={160}
          height={160}
          className="rounded-full object-cover w-40 h-40 border-2 border-slate-400"
        />
      </div>
      <div className={`text-center flex-grow ${isLeftAligned ? 'md:text-left' : 'md:text-right'}`}>
        <h2 className="text-3xl font-bold text-white mb-2">{name}</h2>
        <h3 className="text-xl text-blue-300 mb-4">{title}</h3>
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
