import { Headline } from "@/pages/Achievement/Headline";
import { Detail } from "@/pages/Achievement/Detail";
import SEO from "@/components/SEO";

export function Achievement() {
  return (
    <>
      <SEO
        title="Prestasi"
        description="Lihat berbagai prestasi dan pencapaian siswa serta alumni Yayasan Al-Khusyu' dalam bidang akademik, tahfidz, dan non-akademik."
        keywords="prestasi al-khusyu, pencapaian siswa, prestasi akademik, prestasi non akademik"
        image="/image/h-achievement-1.png"
        url="/prestasi"
      />
      <div className="flex flex-col gap-8 md:gap-16 px-4 md:px-8 my-4 md:my-8">
        <Headline />
        <Detail />
      </div>
    </>
  );
}
