import { Button } from "@/components/ui/button.tsx";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { slugify } from "@/lib/utils";

export function Headline() {
  const FeaturedCard = ({
    image,
    title,
    summary,
    date,
  }: {
    image: string;
    title: string;
    summary: string;
    date: string;
  }) => {
    return (
      <div className="rounded-2xl bg-white flex flex-col md:flex-row justify-start w-full max-w-[650px] h-auto md:h-[350px]">
        <img
          src={image}
          alt="education-landing-page"
          className="w-full md:w-[300px] h-48 md:h-[350px] object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-t-none"
        />

        <div className="flex flex-col gap-2 p-4 md:py-6 md:pr-4 justify-between">
          <div className="font-manrope font-semibold text-black text-lg md:text-xl">
            {title}
          </div>

          <div className="font-manrope font-semibold text-[#757575] text-sm md:text-[14px] leading-relaxed">
            {summary}
          </div>

          <div className="flex flex-row sm:flex-row sm:justify-between gap-3">
            <div className="rounded-full flex border border-black-100 items-center px-3 py-1 text-xs md:text-sm text-[#757575] h-[32px] w-fit whitespace-nowrap">
              {date}
            </div>
            <Link to={`/program/${slugify(title)}`}>
              <Button className="rounded-full bg-[#567471] hover:bg-[#4a6260] px-3 py-1 text-xs md:text-sm text-white h-[32px] w-fit">
                Selengkapnya
                <ArrowUpRight className="ml-1 h-3 w-3 md:h-4 md:w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const ItemCard = ({
    image,
    title,
    summary,
    date,
  }: {
    image: string;
    title: string;
    summary: string;
    date: string;
  }) => {
    return (
      <div className="rounded-2xl bg-white flex flex-col gap-4 justify-between w-full h-full">
        <div className="flex flex-col gap-4 pt-2 px-4">
          <div className="font-manrope font-semibold text-black text-lg md:text-xl lg:text-[28px]">
            {title}
          </div>

          <div className="font-manrope font-semibold text-[#757575] text-sm md:text-[16px] leading-relaxed">
            {summary}
          </div>

          <div className="flex flex-row sm:flex-row sm:justify-between gap-3">
            <div className="rounded-full flex border border-black-100 items-center px-3 md:px-4 py-1 text-xs md:text-sm text-[#757575] h-[35px] w-fit">
              {date}
            </div>
            <Link to={`/program/${slugify(title)}`}>
              <Button className="flex flex-row items-center rounded-full bg-[#567471] hover:bg-[#4a6260] px-3 md:px-4 py-1 font-manrope text-xs md:text-[16px] text-white h-[35px] w-fit">
                <p>Selengkapnya</p>
                <ArrowUpRight className="ml-1 h-3 w-3 md:h-4 md:w-4" />
              </Button>
            </Link>
          </div>
        </div>

        <img
          src={image}
          alt="education-landing-page"
          className="w-full h-48 md:h-[230px] object-cover rounded-b-2xl"
        />
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-6 md:gap-8 px-4 md:px-8">
      <section className="w-full py-6 md:py-8 lg:py-12">
        <div className="mx-auto flex flex-col items-center text-center gap-4 md:gap-6 px-4">
          <h2
            className="ulm-font font-extrabold text-[#63817E] tracking-tight leading-[0.9]
                            text-2xl md:text-4xl lg:text-6xl xl:text-[76px]"
          >
            <span className="block">Program Terbaru</span>
            <span className="block">Kami</span>
          </h2>

          <p
            className="font-manrope font-semibold text-[#757575]
                           text-sm md:text-base lg:text-xl xl:text-[28px] max-w-4xl leading-relaxed"
          >
            Menyajikan tulisan mendalam seputar pendidikan Islam dan tips
            belajar
          </p>
        </div>
      </section>

      <div className="flex flex-col xl:flex-row gap-4 xl:gap-8 justify-between">
        <div className="w-full xl:max-w-[650px]">
          <FeaturedCard
            image="/image/mi-7.webp"
            title="The Qur'an Life School"
            summary="Program pembelajaran yang mengintegrasikan nilai-nilai Al-Qur'an dalam kehidupan sehari-hari dan pembelajaran akademik dengan pendekatan yang mendalam."
            date="PROGRAM UTAMA"
          />
        </div>

        <div className="w-full xl:max-w-[650px]">
          <FeaturedCard
            image="/image/green.webp"
            title="Go Green School"
            summary="Program pendidikan lingkungan yang menanamkan kesadaran ekologis dan tanggung jawab terhadap alam semesta dalam kehidupan sekolah."
            date="PROGRAM LINGKUNGAN"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-fr">
        <ItemCard
          image="/image/kantin-2.webp"
          title="Digital Entrepreneur"
          summary="Program kewirausahaan digital yang mengajarkan nilai-nilai bisnis Islami dan mengembangkan jiwa entrepreneur di era modern."
          date="PROGRAM KEWIRAUSAHAAN"
        />

        <ItemCard
          image="/image/kantin-1.webp"
          title="Entrepreneur Madrasah"
          summary="Program kewirausahaan yang mengajarkan nilai-nilai bisnis Islami dan mengembangkan jiwa entrepreneur."
          date="PROGRAM MI"
        />

        <ItemCard
          image="/image/fotbar smk.webp"
          title="Tahfidz Al-Qur'an"
          summary="Program menghafal Al-Qur'an dengan metode yang sesuai untuk membangun fondasi spiritual yang konsisten."
          date="PROGRAM SPIRITUAL"
        />

        <ItemCard
          image="/image/fotbar ra.webp"
          title="Math Kids & Fonik"
          summary="Program pembelajaran matematika dan bahasa Indonesia yang menyenangkan untuk perkembangan anak usia dini."
          date="PROGRAM RA"
        />
      </div>
    </div>
  );
}
