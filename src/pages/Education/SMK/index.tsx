import Headline from "@/pages/Education/Component/Headline.tsx";
import { Mission } from "@/pages/Education/Component/Mission.tsx";
import { Activity } from "@/pages/Education/Component/Activity.tsx";
import Organization from "@/pages/Education/Component/Organization.tsx";
import { Facility } from "@/pages/Education/Component/Facility.tsx";
import SEO from "@/components/SEO";
// import { Achievement } from "@/pages/Education/Component/Achievement.tsx";
import noProfile from "../../../assets/no-profile.avif";

export default function SMK() {
  const imageList = [
    { image: "/image/smk-1.webp" },
    { image: "/image/smk-2.webp" },
    { image: "/image/smk-3.webp" },
    { image: "/image/smk-5.webp" },
  ];

  const activityData = {
    title: "Program Unggulan SMK Pesantren Al-Khusyu'",
    description:
      "Program pembelajaran yang mengintegrasikan nilai-nilai Islam dengan keterampilan vokasi dan pembentukan karakter islami",
    activities: [
      {
        title: "Al-Qur'an Life School",
        summary:
          "Program yang mengintegrasikan nilai-nilai Al-Qur'an dalam setiap aspek kehidupan dan pembelajaran, membentuk karakter islami yang kuat.",
        image: "/image/smk-6.webp",
      },
      {
        title: "Digital Entrepreneur",
        summary:
          "Membekali peserta didik dengan keterampilan kewirausahaan digital, siap bersaing di era industri 4.0 dengan nilai-nilai Islami.",
        image: "/image/kantin-2.webp",
      },
      {
        title: "Go Green",
        summary:
          "Program peduli lingkungan untuk menumbuhkan kesadaran dan aksi nyata dalam menjaga kelestarian alam semesta.",
        image: "/image/green.webp",
      },
      {
        title: "Sholat Dhuha, Tahfidz, Istighosah, dan Muhadhoroh Rutin",
        summary:
          "Kegiatan rutin untuk memperkuat spiritualitas, hafalan Al-Qur'an, dan kemampuan berbicara di depan umum dengan nilai-nilai Islam.",
        image: "/image/masjid-2.webp",
      },
    ],
  };

  const organizationData = {
    title: "Struktur Organisasi SMK Al-Khusyu'",
    description:
      "Tim pendidik dan staf yang profesional dan berdedikasi untuk membina generasi kreatif dan berakhlak mulia di bidang vokasi.",
    organizations: [
      {
        title: "Ahmad Bahri, S.Pd. M.M.",
        summary: "Kepala Sekolah",
        image: "/image/Kepsek SMK.webp",
      },
      {
        title: "Sutrisno",
        summary: "Komite",
        image: noProfile,
      },
      {
        title: "Friska Dwi Settyawati, S.Pd.",
        summary: "Waka Kurikulum",
        image: noProfile,
      },
      {
        title: "Rita Sumala, S.Pd. M.M.",
        summary: "Bendahara",
        image: noProfile,
      },
      {
        title: "M. M. Umam Mashuri, S.Pd.",
        summary: "Kaprodi DKV",
        image: noProfile,
      },
      {
        title: "Heru Purnomo",
        summary: "Wali Kelas X",
        image: noProfile,
      },
      {
        title: "M. M. Umam Mashuri, S.Pd.",
        summary: "Wali Kelas XI",
        image: noProfile,
      },
      {
        title: "Friska Dwi Setiyawati, S.Pd.",
        summary: "Wali Kelas XII",
        image: noProfile,
      },
    ],
  };

  const facilityData = {
    title: "Kurikulum & Fasilitas SMK Al-Khusyu'",
    description:
      "Kurikulum Merdeka yang dikolaborasikan dengan nilai-nilai pesantren untuk menghasilkan lulusan terampil dan berakhlak.",
    facilities: [
      {
        title: "Kurikulum Merdeka",
        subtitle: "Kurikulum Nasional",
        summary:
          "Kurikulum SMK Al Khusyu' disusun berdasarkan Kurikulum Merdeka yang menekankan pengembangan kompetensi, karakter, dan kemandirian peserta didik.",
        image: "/image/smk-3.webp",
      },
      {
        title: "Konsentrasi Keahlian DKV",
        subtitle: "Pendidikan Vokasi",
        summary:
          "Desain Komunikasi Visual (DKV) yang menyiapkan peserta didik menjadi insan kreatif di bidang desain, percetakan, dan digital marketing.",
        image: "/image/smk-5.webp",
      },
      {
        title: "Integrasi Pesantren",
        subtitle: "Pembentukan Karakter",
        summary:
          "Kurikulum dikolaborasikan dengan nilai-nilai pesantren agar lulusan tidak hanya terampil secara teknis, tetapi juga memiliki keimanan, akhlak, dan tanggung jawab moral yang kuat.",
        image: "/image/smk-6.webp",
      },
      {
        title: "Fasilitas Vokasi",
        subtitle: "Sarana Pendidikan",
        summary:
          "Laboratorium desain, studio kreatif, dan fasilitas pendukung lainnya untuk mendukung pembelajaran vokasi yang optimal.",
        image: "/image/smk-1.webp",
      },
      {
        title: "Lingkungan Pesantren",
        subtitle: "Atmosfer Pendidikan",
        summary:
          "Lingkungan yang kondusif dengan nilai-nilai pesantren yang terintegrasi dalam setiap aspek pembelajaran dan kehidupan sehari-hari siswa SMK.",
        image: "/image/smk-2.webp",
      },
    ],
  };

  return (
    <>
      <SEO
        title="SMK Al-Khusyu' - Sekolah Menengah Kejuruan"
        description="SMK Pesantren Al-Khusyu' adalah sekolah kejuruan berbasis pesantren dengan konsentrasi Desain Komunikasi Visual (DKV). Program: Al-Qur'an Life School, Digital Entrepreneur, dan Go Green."
        keywords="SMK Al-Khusyu, SMK islam blitar, sekolah kejuruan, SMK DKV, SMK pesantren, pendidikan vokasi islam"
        image="/image/smk-1.webp"
        url="/pendidikan/smk"
      />
      <div className="flex flex-col gap-16 px-8 my-8">
        <Headline
          name={"SMK Al-Khusyu'"}
          summary={
            "SMK Pesantren Al Khusyu' merupakan lembaga pendidikan kejuruan berbasis pesantren yang mengintegrasikan pendidikan umum, keterampilan vokasi, dan pembentukan karakter islami. Terletak di ujung selatan Kabupaten Blitar yang berbatasan langsung dengan Kabupaten Malang, sekolah ini menjadi tempat belajar bagi siswa dari berbagai daerah, termasuk dari luar pulau seperti Kalimantan. SMK Pesantren Al Khusyu' memiliki Konsentrasi Keahlian Desain Komunikasi Visual (DKV) yang menyiapkan peserta didik menjadi insan kreatif di bidang desain, percetakan, dan digital marketing."
          }
          imageList={imageList}
          teacherCount={8}
          studentCount={100}
        />
        <Mission
          name={"SMK Al-Khusyu'"}
          vision={
            "Menjadi Lembaga Pendidikan Unggul Dalam Menebarkan Rahmat Bagi Semesta Alam Berdasarkan Nilai Dasar Islam"
          }
          mission={
            "1. Menyelenggarakan pendidikan yang berbasis pesantren didukung dengan pengelolaan, SDM, pembelajaran, input dan sarpras yang baik.\n2. Menyelenggarakan pendidikan berdasarkan Al qur'an dan Al Hadist.\n3. Menyelenggarakan pendidikan yang berkarakter akhlaqul karimah.\n4. Menyelenggarakan pendidkan yang memiliki kemampuan IMTAQ dan IPTEK sesuai jenjang pendidikan."
          }
          imageUrl="/image/fotbar smk.webp"
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
            href="https://wa.me/6285748206397"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-[#757575]"
          >
            <p className="font-manrope font-bold text-[#757575] text-sm md:text-base lg:text-lg xl:text-[24px]">
              085748206397 (Utsdz Friska)
            </p>
          </a>
          <a
            href="https://wa.me/6282142601115"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-[#757575]"
          >
            <p className="font-manrope font-bold text-[#757575] text-sm md:text-base lg:text-lg xl:text-[24px]">
              082142601115 (Ustz Rifa)
            </p>
          </a>
        </div>
      </div>
    </>
  );
}
