import TexturedHeader from '@/components/textured-header';
import TeamMember from '@/features/about/components/TeamMember';
import AboutMeowgicWare from '@/features/about/components/AboutMeowgicWare';

export default function AboutPage() {
  const teamMembers = [
    {
      imageSrc: "/images/ember.jpg", // Placeholder image
      name: "Ember",
      title: "Founder / Creative & Engineering Director",
      description: "Hii! ㅤꨄ I'm the big cheese behind MeowgicWare! I've been working with computers since I was child, and gaming has been a lifelong passion. I want to build inclusive interactive experiences, than can bring a little peace to every single of us, one project at a time."
    },
    {
      imageSrc: "/images/dutchie.png", // Placeholder image
      name: "Dutchie",
      title: "Chief of Purr-formance",
      description: "Whiskers is the coding wizard, translating Meowster's grand visions into elegant and robust software solutions, often fueled by catnip and late-night coding sessions."
    }
  ];

  return (
    <div>
      <TexturedHeader title="Magic Behind Meowgic" />
      <div className="container mx-auto px-4 py-12">
        <AboutMeowgicWare />
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
