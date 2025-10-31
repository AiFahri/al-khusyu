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
            <Link to={`/kegiatan/${slugify(title)}`}>
              <Button className="rounded-full bg[#567471] hover:bg-[#4a6260] px-3 py-1 text-xs md:text-sm text-white h-[32px] w-fit">
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
      <div className="rounded-2xl bg-white flex flex-col gap-4 justify-between w-full max-w-[406px] h-auto min-h-[300px] md:h-[428px]">
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
            <Link to={`/kegiatan/${slugify(title)}`}>
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
            <span className="block">Ikhtiar Terbaru</span>
            <span className="block">Kami</span>
          </h2>

          <p
            className="font-manrope font-semibold text-[#757575]
                           text-sm md:text-base lg:text-xl xl:text-[28px] max-w-4xl leading-relaxed"
          >
            Temukan berbagai informasi terbaru tentang kegiatan, prestasi, dan
            agenda yayasan serta sekolah
          </p>
        </div>
      </section>

      <div className="flex flex-col xl:flex-row gap-4 xl:gap-8 justify-between">
        <div className="w-full xl:max-w-[650px]">
          <FeaturedCard
            image="/image/upacara-2.webp"
            title="Al-Khusyu' Peringati HUT Republik Indonesia: Ini Makna Berkesannya"
            summary="17 Agustus 1945 merupakan tanggal yang sarat makna: hari lahirnya bangsa yang merdeka, titik awal hak pendidikan, pekerjaan, dan kebebasan beragama..."
            date="17 AGUSTUS 2025"
          />
        </div>

        <div className="w-full xl:max-w-[650px]">
          <FeaturedCard
            image="/image/upacara-3.webp"
            title="Maulid Nabi Muhammad Saw bersama Al-Khusyu': Tak Sekadar Membaca Sholawat"
            summary="Maulid Nabi Muhammad Saw. merupakan salah satu momen yang paling indah bagi umat Islam. Kata 'maulid' berasal dari bahasa Arab yang bermakna 'waktu kelahiran'..."
            date="13 SEPTEMBER 2025"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center">
        <ItemCard
          image="/image/upacara-1.webp"
          title="Supervisi Pendidikan Formal Al-Khusyu'"
          summary="Tidak hanya istiqomah dalam kebaikan, tetapi juga perbaikan. Supervisi merupakan aktivitas monitoring, evaluasi, dan pengembangan..."
          date="22 SEPTEMBER 2025"
        />

        <ItemCard
          image="/image/fotbar smk.webp"
          title="Reader Club Baitul Qur'an Al-Khusyu'"
          summary="Membaca buku, membuka dunia. Para santri BQ sangat ditekankan untuk membaca buku, idealnya satu buku dalam satu bulan..."
          date="5 OKTOBER 2025"
        />

        <ItemCard
          image="/image/green.webp"
          title="Go Green School SMK Al-Khusyu'"
          summary="SMK Al-Khusyu' kembangkan bank sampah dan pertanian sebagai wujud nyata Go Green School concept..."
          date="20 OKTOBER 2025"
        />

        <ItemCard
          image="/image/masjid-1.webp"
          title="Pondok Ramadhan Baitul Qur'an"
          summary="Pesantren Mahasiswa Baitul Qur'an Al-Khusyu' menyelenggarakan serangkaian kegiatan keagamaan selama bulan Ramadhan..."
          date="1 APRIL 2025"
        />
      </div>
    </div>
  );
}
