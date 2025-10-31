import Headline from "@/pages/About/Headline";
import { History } from "@/pages/About/History";
import { Mission } from "@/pages/About/Mission";
import SEO from "@/components/SEO";

export default function About() {
  return (
    <>
      <SEO
        title="Tentang Kami"
        description="Yayasan Pendidikan & Sosial Al-Khusyu' adalah yayasan yang menyelenggarakan pendidikan berbasis pesantren di Kabupaten Blitar, Jawa Timur. Dengan visi menjadi lembaga pendidikan unggul yang menebarkan rahmat bagi semesta alam."
        keywords="tentang yayasan al-khusyu, visi misi yayasan, sejarah yayasan, struktur organisasi"
        image="/image/hi-about.png"
        url="/tentang"
      />
      <div className="flex flex-col gap-16 px-8 my-8">
        <Headline />
        <History />
        <Mission />

        <div className="flex flex-col gap-4 md:gap-8 rounded-2xl ">
          <h2 className="text-[#63817E] font-extrabold text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-left lg:text-left ulm-font leading-tight">
            Struktur Organisasi
          </h2>
          <img
            src="/image/struktur-organisasi.png"
            alt="logo"
            className="w-full  rounded-2xl object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
}
