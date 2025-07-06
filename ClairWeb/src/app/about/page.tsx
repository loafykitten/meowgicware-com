import TexturedHeader from '@/components/textured-header';
import TeamMember from '@/features/about/components/TeamMember';

export default function AboutPage() {
  const teamMembers = [
    {
      imageSrc: "/images/hero-1.png", // Placeholder image
      name: "Meowster",
      title: "Chief Cat Officer",
      description: "Meowster is the visionary behind MeowgicWare, ensuring all projects are purr-fectly executed with a touch of feline charm and strategic naps."
    },
    {
      imageSrc: "/images/hero-2.png", // Placeholder image
      name: "Whiskers",
      title: "Lead Developer",
      description: "Whiskers is the coding wizard, translating Meowster's grand visions into elegant and robust software solutions, often fueled by catnip and late-night coding sessions."
    }
  ];

  return (
    <div>
      <TexturedHeader title="Magic Behind Meowgic" />
      <div className="container mx-auto px-4 py-12">
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            imageSrc={member.imageSrc}
            name={member.name}
            title={member.title}
            description={member.description}
            align={index % 2 === 0 ? 'left' : 'right'}
          />
        ))}
      </div>
    </div>
  );
}
