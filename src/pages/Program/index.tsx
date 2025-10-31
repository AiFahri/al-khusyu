import { Headline } from "@/pages/Program/Headline";
import Other from "@/pages/Program/Other";
import SEO from "@/components/SEO";

export function Program() {
  return (
    <>
      <SEO
        title="Program Unggulan"
        description="Jelajahi program unggulan dari setiap unit pendidikan Al-Khusyu', mulai dari Tahfidz Al-Qur'an, Kurikulum Merdeka, hingga Digital Entrepreneur untuk SMK."
        keywords="program unggulan al-khusyu, tahfidz, kurikulum merdeka, digital entrepreneur, pendidikan berbasis pesantren"
        image="/image/program-1.png"
        url="/program"
      />
      <div className="flex flex-col gap-8 md:gap-12 lg:gap-16 px-4 md:px-8">
        <Headline />
        <Other />
      </div>
    </>
  );
}
