import { Achievement } from "@/pages/Home/Achievement";
import { News } from "@/pages/Home/News";
import { Education } from "@/pages/Home/Education";
import { Program } from "@/pages/Home/Program";
import { Mission } from "@/pages/Home/Mission";
import SEO from "@/components/SEO";
// import Hero from "./Hero";

export default function Home() {
  return (
    <>
      <SEO
        title="Beranda"
        description="Selamat datang di Yayasan Pendidikan & Sosial Al-Khusyu' Blitar. Kami menyelenggarakan pendidikan berbasis pesantren dengan program RA, MI, SMP, dan SMK yang mengintegrasikan nilai-nilai Islam dengan kurikulum modern."
        keywords="yayasan al-khusyu, pendidikan islam, pesantren blitar, sekolah islam, pendidikan berbasis pesantren, RA Al-Khusyu, MI Al-Khusyu, SMP Al-Khusyu, SMK Al-Khusyu"
        image="/image/navbar-logo.png"
        url="/"
      />
      <div className="flex flex-col gap-6 lg:gap-16">
        {/* <Hero/> */}
        <Achievement />
        <News />
        <Education />
        <Program />
        <Mission />
        <div className="flex flex-col gap-4 md:gap-8 rounded-2xl p-8">
          <h2 className="text-[#63817E] font-extrabold text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-left lg:text-left ulm-font leading-tight">
            Lokasi Kami
          </h2>
          <div className="w-full rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15792.274554467185!2d112.3752950356903!3d-8.29596841864395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78bb974276169b%3A0xf738c8b886d9a0c3!2sPONDOK%20PESANTREN%20AL%20KHUSYU!5e0!3m2!1sid!2sid!4v1761502134658!5m2!1sid!2sid"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[300px] md:h-[400px] lg:h-[450px]"
            />
          </div>
        </div>
      </div>
    </>
  );
}
