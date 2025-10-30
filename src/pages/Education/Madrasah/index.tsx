import Headline from "@/pages/Education/Component/Headline.tsx";
import { Mission } from "@/pages/Education/Component/Mission.tsx";
import { Activity } from "@/pages/Education/Component/Activity.tsx";
import Organization from "@/pages/Education/Component/Organization.tsx";
import { Facility } from "@/pages/Education/Component/Facility.tsx";
import SEO from "@/components/SEO";
// import { Achievement } from "@/pages/Education/Component/Achievement.tsx";
import noProfile from "../../../assets/no-profile.avif";

export default function Madrasah() {
  const imageList = [
    { image: "/image/mi-1.webp" },
    { image: "/image/mi-2.webp" },
    { image: "/image/mi-3.webp" },
    { image: "/image/mi-4.webp" },
    { image: "/image/mi-5.webp" },
  ];

  const activityData = {
    title: "Program Unggulan MI Al-Khusyu'",
    description:
      "Program pembelajaran yang mengintegrasikan nilai-nilai Islam dengan kurikulum modern",
    activities: [
      {
        title: "Tahfidz Al-Qur'an",
        summary:
          "Program menghafal Al-Qur'an dengan metode yang sesuai untuk anak usia sekolah dasar, membangun fondasi spiritual yang kuat.",
        image: "/image/mi-7.webp",
      },
      {
        title: "Al-Qur'an Life School",
        summary:
          "Program pembelajaran yang mengintegrasikan nilai-nilai Al-Qur'an dalam kehidupan sehari-hari dan pembelajaran akademik.",
        image: "/image/mi-8.webp",
      },
      {
        title: "Go Green Madrasah",
        summary:
          "Program pendidikan lingkungan yang menanamkan kesadaran ekologis dan tanggung jawab terhadap alam semesta.",
        image: "/image/green.webp",
      },
      {
        title: "Entrepreneur Madrasah",
        summary:
          "Program kewirausahaan yang mengajarkan nilai-nilai bisnis Islami dan mengembangkan jiwa entrepreneur sejak dini.",
        image: "/image/kantin-2.webp",
      },
      {
        title: "OMOB (One Month One Book)",
        summary:
          "Program literasi yang mendorong peserta didik membaca satu buku setiap bulan untuk meningkatkan minat baca dan pengetahuan.",
        image: "/image/mi-3.webp",
      },
    ],
  };

  const organizationData = {
    title: "Struktur Organisasi MI Al-Khusyu'",
    description:
      "Tim pendidik yang profesional dan berdedikasi untuk membina generasi Qurani yang cerdas dan berakhlak.",
    organizations: [
      {
        title: "Rita Sumala, S.Pd., M.Pd.",
        summary: "Kepala Madrasah",
        image: noProfile,
      },
      {
        title: "Erma Setyawati, S.Pd.",
        summary: "Waka Kurikulum",
        image: noProfile,
      },
      {
        title: "Ahmad Bahri, S.Pd., M.M.",
        summary: "Bendahara",
        image: noProfile,
      },
      {
        title: "Zumari Ismanto, S.Pd.",
        summary: "Waka Sarpras",
        image: noProfile,
      },
      {
        title: "Rini Indrawati, S.Pd.",
        summary: "Operator",
        image: noProfile,
      },
      {
        title: "Sutrisno",
        summary: "Ketua Komite",
        image: noProfile,
      },
      {
        title: "Erma Setyawati, S.Pd.",
        summary: "Wali Kelas I",
        image: noProfile,
      },
      {
        title: "Zumari Ismanto, S.Pd.",
        summary: "Wali Kelas II",
        image: noProfile,
      },
      {
        title: "Zahrotun Navis",
        summary: "Wali Kelas III",
        image: noProfile,
      },
      {
        title: "Yasina Azizatul Kahfi",
        summary: "Wali Kelas IV",
        image: noProfile,
      },
      {
        title: "M. Hasif Zufar Ramadhani",
        summary: "Wali Kelas V",
        image: noProfile,
      },
      {
        title: "Kharisma Alfi Mufidah, S.Pd.",
        summary: "Wali Kelas VI",
        image: noProfile,
      },
      {
        title: "Ridwan",
        summary: "Guru Agama",
        image: noProfile,
      },
      {
        title: "Musthofa",
        summary: "Guru Agama",
        image: noProfile,
      },
      {
        title: "Nabila Fateha",
        summary: "Guru B. Inggris",
        image: noProfile,
      },
      {
        title: "Wanda",
        summary: "Guru MTK",
        image: noProfile,
      },
      {
        title: "Nurul Hidayah",
        summary: "Guru PJOK",
        image: noProfile,
      },
      {
        title: "Pria Hidayatul Wahid, S.Pd.",
        summary: "Guru PJOK",
        image: noProfile,
      },
    ],
  };

  const facilityData = {
    title: "Kurikulum & Fasilitas MI Al-Khusyu'",
    description:
      "Kurikulum terintegrasi yang mengembangkan kompetensi holistik dengan pendekatan pembelajaran yang bermakna.",
    facilities: [
      {
        title: "Kurikulum Merdeka",
        subtitle: "Kurikulum Nasional",
        summary:
          "Kurikulum Merdeka yang menekankan pembelajaran berdiferensiasi, projek profil pelajar Pancasila, serta penguatan kompetensi holistik.",
        image: "/image/mi-1.webp",
      },
      {
        title: "Deep Learning",
        subtitle: "Metode Pembelajaran",
        summary:
          "Pembelajaran yang berfokus pada proses yang bermakna, reflektif, dan mendalam, bukan sekadar hafalan.",
        image: "/image/mi-6.webp",
      },
      {
        title: "Kurikulum Berbasis Cinta",
        subtitle: "Pendekatan Spiritual",
        summary:
          "Kurikulum yang berakar pada nilai-nilai kasih sayang, empati, penghargaan, dan spiritualitas — menumbuhkan cinta kepada diri sendiri, sesama, alam, dan Tuhan.",
        image: "/image/mi-4.webp",
      },
      {
        title: "Fasilitas Pembelajaran",
        subtitle: "Sarana Pendidikan",
        summary:
          "Ruang kelas yang nyaman, perpustakaan, laboratorium, dan fasilitas pendukung lainnya untuk mendukung proses pembelajaran yang optimal.",
        image: "/image/mi-5.webp",
      },
      {
        title: "Lingkungan Islami",
        subtitle: "Atmosfer Pendidikan",
        summary:
          "Lingkungan yang kondusif dengan nilai-nilai Islam yang terintegrasi dalam setiap aspek pembelajaran dan kehidupan sehari-hari.",
        image: "/image/mi-7.webp",
      },
    ],
  };

  return (
    <>
      <SEO
        title="MI Al-Khusyu' - Madrasah Ibtidaiyah"
        description="Madrasah Ibtidaiyah (MI) Al-Khusyu' adalah sekolah dasar berbasis pesantren yang mengintegrasikan nilai-nilai Islam dengan kurikulum modern. Program unggulan: Tahfidz, Al-Qur'an Life School, Go Green, dan OMOB."
        keywords="MI Al-Khusyu, Madrasah Ibtidaiyah, SD islam blitar, madrasah islam, pendidikan dasar islam"
        image="/image/mi-1.webp"
        url="/pendidikan/madrasah"
      />
      <div className="flex flex-col gap-16 px-8 my-8">
        <Headline
          name={"Madrasah Ibtidaiyah Al-Khusyu'"}
          summary={
            "Madrasah Ibtida'iyah (MI) Al-Khusyu' adalah sekolah dasar berbasis pesantren Al-Qur'an yang dinaungi oleh Yayasan Pendidikan dan Sosial Al-Khusyu Kabupaten Blitar. Berlandaskan pada Kurikulum Merdeka, MI Al-khusyu menekankan pembelajaran berdiferensiasi, projek profil pelajar Pancasila, serta penguatan kompetensi holistik."
          }
          imageList={imageList}
          teacherCount={17}
          studentCount={112}
        />
        <Mission
          name={"MI Al-Khusyu'"}
          vision={
            "Menjadi Lembaga Pendidikan yang Unggul dalam menebarkan Rahmat bagi Semesta Alam Berdasarkan nilai-nilai dasar Islam"
          }
          mission={
            "1. Menyelenggarakan pendidikan yang berbasis pesantren di dukung dengan pengelolaan, SDM, Metode Pembelajaran, Input, Sarpras yang baik.\n2. Menyelenggarakan pendidikan yang berdasarkan al-Qur'an dan Hadist\n3. Menyelenggarakan Pendidikan yang berkarakter Berakhlakul karimah\n4. Menyelenggarakan pendidikan yang memiliki IMTAQ dan IPTEK sesuai jenjang Pendidikan"
          }
          imageUrl="/image/fotbar mi2.webp"
        />
        <Activity
          title={activityData.title}
          description={activityData.description}
          activities={activityData.activities}
        />
        <Organization
          title={organizationData.title}
          description={organizationData.description}
          organizations={organizationData.organizations}
        />
        <Facility
          title={facilityData.title}
          description={facilityData.description}
          facilities={facilityData.facilities}
        />
        {/* <Achievement /> */}
        <div className="flex flex-col gap-4 md:gap-2 rounded-2xl ">
          <h2 className="text-[#63817E] font-extrabold text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-left lg:text-left ulm-font leading-tight">
            Kontak Kami
          </h2>
          <a
            href="https://wa.me/6281252532980"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-[#757575]"
          >
            <p className="font-manrope font-bold text-[#757575] text-sm md:text-base lg:text-lg xl:text-[24px]">
              Kepala Sekolah : 081252532980
            </p>
          </a>
          <a
            href="https://wa.me/6285604583698"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-[#757575]"
          >
            <p className="font-manrope font-bold text-[#757575] text-sm md:text-base lg:text-lg xl:text-[24px]">
              Operator Sekolah/ Tata Usaha : 085604583698
            </p>
          </a>
          <a
            href="https://wa.me/6285745879746"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-[#757575]"
          >
            <p className="font-manrope font-bold text-[#757575] text-sm md:text-base lg:text-lg xl:text-[24px]">
              Admin PPDB : 085745879746
            </p>
          </a>
        </div>
      </div>
    </>
  );
}
