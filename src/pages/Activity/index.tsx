import { Headline } from "@/pages/Activity/Headline";
import Other from "@/pages/Activity/Other";
import SEO from "@/components/SEO";

export function Activity() {
  return (
    <>
      <SEO
        title="Kegiatan"
        description="Ikuti berbagai kegiatan dan program terbaru dari Yayasan Al-Khusyu'. Dari supervisi pendidikan, reader club, go green school, hingga workshop kewirausahaan digital."
        keywords="kegiatan yayasan al-khusyu, program unggulan, supervisi pendidikan, go green school, reader club, pondok ramadhan"
        image="/image/activity.png"
        url="/kegiatan"
      />
      <div className="flex flex-col gap-8 md:gap-12 lg:gap-16 px-4 md:px-8">
        <Headline />
        <Other />
      </div>
    </>
  );
}
