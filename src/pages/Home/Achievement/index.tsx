import { ButtonDetail } from "@/components/ButtonDetail";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from "@/components/ui/carousel.tsx";
import { Card, CardContent } from "@/components/ui/card.tsx";
import { Link } from "react-router";
import { slugify } from "@/lib/utils";

export function Achievement() {
  const AchievementList = [
    {
      date: "DESEMBER 9, 2025",
      summary:
        "Siswa Al-Khusyu’ mendapatkan Juara 1 Lomba Marathon Putri di...",
      title: "Juara 1 Lomba Marathon Putri",
      image: "/image/upacara-1.webp",
    },
    {
      date: "DESEMBER 9, 2025",
      summary:
        "Wujudkan Go Green School, SMK Al-Khusyu’ kembangkan bank sampah dan pertanian...",
      title: "Go Green School",
      image: "/image/green.webp",
    },
  ];
  return (
    <div className="flex flex-col lg:flex-row justify-start px-4 md:px-8 gap-6 lg:gap-8">
      <div className="flex flex-col gap-6 md:gap-8 w-full lg:w-1/2">
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-[53px] font-extrabold ulm-font text-[#63817E] w-full leading-tight">
          Lembaga Pendidikan Al-Khusyu'
        </h1>
        <p className="font-manrope font-semibold text-[#757575] text-sm md:text-base lg:text-lg xl:text-[20px]">
          Qur'an Life School
        </p>

        <div className="font-manrope text-[#757575] text-sm md:text-base lg:text-lg xl:text-[20px] bg-white rounded-2xl px-4 md:px-6 lg:px-8 py-4 md:py-6 lg:py-8 flex items-center leading-relaxed">
          Al-Khusyu merupakan lembaga pendidikan dan sosial yang berkomitmen
          untuk berdakwah yang mewujudkan generasi Qur'ani yang unggul dalam
          iman, ilmu, dan akhlak, serta menebarkan rahmat untuk semesta alam
          (rahmatan lil 'alamin)
        </div>

        <div className="flex flex-col md:flex-row justify-between w-full gap-4 md:gap-0">
          <img
            src="/image/button-quran.png"
            alt="Logo"
            className="h-16 md:h-auto w-auto object-contain"
            loading="lazy"
          />
          <Link to="/tentang">
            <ButtonDetail />
          </Link>
        </div>
      </div>

      <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
        <Carousel
          className="w-full max-w-full lg:max-w-[820px] lg:ml-auto relative"
          opts={{ align: "start", loop: true }}
        >
          <CarouselContent className="-ml-2 md:-ml-6">
            {AchievementList.map((item, idx) => (
              <CarouselItem
                key={idx}
                className="pl-2 md:pl-6 basis-full md:basis-[600px] lg:basis-[750px]"
              >
                <Card className="rounded-3xl border-0 shadow-none bg-white">
                  <CardContent className="p-4 md:p-6 lg:p-8">
                    <div className="flex flex-col md:grid md:grid-cols-[1fr_200px] lg:grid-cols-[1fr_320px] gap-4 md:gap-6 lg:gap-8 items-start">
                      <div className="space-y-3 md:space-y-4 lg:space-y-6">
                        <p className="text-[#568872] font-manrope font-semibold tracking-wide text-sm md:text-base">
                          {item.date}
                        </p>
                        <p className="text-[#757575] leading-6 md:leading-8 font-manrope text-sm md:text-base">
                          {item.summary}
                        </p>
                        <h3 className="text-[#63817E] font-extrabold text-lg md:text-xl lg:text-2xl leading-snug ulm-font">
                          {item.title.toUpperCase()}
                        </h3>
                        <div>
                        <Link to={`/prestasi/${slugify(item.title)}`}>
                          <button className="rounded-full bg-[#567471] text-white px-4 md:px-6 py-2 md:py-3 flex items-center justify-between w-full gap-2 text-sm md:text-base hover:scale-105 transition-all duration-300">
                            Jelajahi
                            <span className="inline-block">→</span>
                          </button>
                          </Link>
                        </div>
                      </div>

                      <div className="h-48 md:h-60 lg:h-[388px] w-full md:w-[200px] lg:w-[296px]">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-full w-full rounded-2xl object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselNext className="absolute right-2 md:right-[-22px] top-1/2 -translate-y-1/2 h-8 w-8 md:h-12 md:w-12 rounded-full bg-[#567471] text-white shadow-md hover:bg-[#4b6663]" />
        </Carousel>
      </div>
    </div>
  );
}
