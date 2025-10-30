import Headline from "@/pages/Education/Component/Headline.tsx";
import { Mission } from "@/pages/Education/Component/Mission.tsx";
import { Activity } from "@/pages/Education/Component/Activity.tsx";
import Organization from "@/pages/Education/Component/Organization.tsx";
import { Facility } from "@/pages/Education/Component/Facility.tsx";
import SEO from "@/components/SEO";
// import { Achievement } from "@/pages/Education/Component/Achievement.tsx";
import noProfile from "../../../assets/no-profile.avif";

export default function SMP() {
  const imageList = [
    { image: "/image/smp-1.webp" },
    { image: "/image/smp-2.webp" },
    { image: "/image/smp-3.webp" },
    { image: "/image/smp-4.webp" },
  ];

  const activityData = {
    title: "Program Unggulan SMP Al-Khusyu'",
    description:
      "Program pembelajaran yang mengintegrasikan nilai-nilai Islam dengan kurikulum modern untuk jenjang SMP",
    activities: [
      {
        title: "Tahfidz Al-Qur'an",
        summary:
          "Program menghafal Al-Qur'an dengan metode yang sesuai untuk siswa SMP, membangun fondasi spiritual yang kuat dan konsisten.",
        image: "/image/masjid-2.webp",
      },
      {
        title: "Qur'anic Life School",
        summary:
          "Program pembelajaran yang mengintegrasikan nilai-nilai Al-Qur'an dalam kehidupan sehari-hari dan pembelajaran akademik dengan pendekatan yang mendalam.",
        image: "/image/masjid-3.webp",
      },
      {
        title: "Al-Khusyu' Go Green",
        summary:
          "Program pendidikan lingkungan yang menanamkan kesadaran ekologis dan tanggung jawab terhadap alam semesta dalam konteks pembelajaran SMP.",
        image: "/image/green.webp",
      },
      {
        title: "Digital Entrepreneur",
        summary:
          "Program kewirausahaan digital yang mengajarkan nilai-nilai bisnis Islami dan mengembangkan jiwa entrepreneur dengan memanfaatkan teknologi digital.",
        image: "/image/kantin-2.webp",
      },
    ],
  };

  const organizationData = {
    title: "Struktur Organisasi SMP Al-Khusyu'",
    description:
      "Tim pendidik yang profesional dan berdedikasi untuk membina generasi Qurani yang cerdas dan berakhlak di jenjang SMP.",
    organizations: [
      {
        title: "Rizal, S.E.",
        summary: "Kepala Sekolah",
        image: "/image/Kepsek SMP.webp",
      },
      {
        title: "Rita Sumala, S.Pd., M.Pd.",
        summary: "Bendahara",
        image: noProfile,
      },
      {
        title: "Ibnu Nuryansyah",
        summary: "Operator Sekolah",
        image: noProfile,
      },
      {
        title: "Ibnu Nufyansyah",
        summary: "Waka Kurikulum",
        image: noProfile,
      },
      {
        title: "Ridwan",
        summary: "Waka Kesiswaan",
        image: noProfile,
      },
      {
        title: "Zumari Ismanto",
        summary: "Waka Sarprashum",
        image: noProfile,
      },
      {
        title: "M. Husein",
        summary: "Wali Kelas VII",
        image: noProfile,
      },
      {
        title: "Lenny Indriyani, S.Pd.",
        summary: "Wali Kelas VIII",
        image: noProfile,
      },
      {
        title: "Ridwan",
        summary: "Wali Kelas IX",
        image: noProfile,
      },
      {
        title: "Kholifah",
        summary: "Koordinator Kelas",
        image: noProfile,
      },
    ],
  };

  const facilityData = {
    title: "Kurikulum & Fasilitas SMP Al-Khusyu'",
    description:
      "Kurikulum terintegrasi yang mengembangkan kompetensi holistik dengan pendekatan pembelajaran yang mendalam dan berbasis nilai-nilai Islam.",
    facilities: [
      {
        title: "Kurikulum Merdeka",
        subtitle: "Kurikulum Nasional",
        summary:
          "Kurikulum Merdeka dengan pendekatan pembelajaran mendalam, serta menerapkan Qur'anic Life School dengan mengkolaborasikan Ayat Al-Qur'an dalam proses pembelajaran dan penerapannya.",
        image: "/image/smp-1.webp",
      },
      {
        title: "7 Smart Kholifah",
        subtitle: "Karakter Pembelajaran",
        summary:
          "Penerapan karakter berupa 7 Smart Kholifah yaitu Amanah, Kejujuran, Tanggungjawab, Kebersihan, Kerapian, Ketertiban dan Kebersamaan dalam tujuan pembelajaran.",
        image: "/image/smp-2.webp",
      },
      {
        title: "Qur'anic Life School",
        subtitle: "Pendekatan Spiritual",
        summary:
          "Program pembelajaran yang mengintegrasikan nilai-nilai Al-Qur'an dalam setiap aspek pembelajaran dan kehidupan sehari-hari siswa SMP.",
        image: "/image/masjid-2.webp",
      },
      {
        title: "Fasilitas Pembelajaran",
        subtitle: "Sarana Pendidikan",
        summary:
          "Ruang kelas yang nyaman, laboratorium, perpustakaan, dan fasilitas pendukung lainnya untuk mendukung proses pembelajaran yang optimal di jenjang SMP.",
        image: "/image/smp-4.webp",
      },
      {
        title: "Lingkungan Pesantren",
        subtitle: "Atmosfer Pendidikan",
        summary:
          "Lingkungan yang kondusif dengan nilai-nilai pesantren yang terintegrasi dalam setiap aspek pembelajaran dan kehidupan sehari-hari siswa.",
        image: "/image/smp-3.webp",
      },
    ],
  };

  return (
    <>
      <SEO
        title="SMP Al-Khusyu' - Sekolah Menengah Pertama"
        description="SMP Al-Khusyu' adalah lembaga pendidikan berbasis pondok pesantren dengan program unggulan: Tahfidz Al-Qur'an, Qur'anic Life School, 7 Smart Kholifah, dan Digital Entrepreneur."
        keywords="SMP Al-Khusyu, sekolah menengah pertama, SMP islam blitar, SMP pesantren, SMP berbasis islam"
        image="/image/smp-1.webp"
        url="/pendidikan/smp"
      />
      <div className="flex flex-col gap-16 px-8 my-8">
        <Headline
          name={"SMP Al-Khusyu'"}
          summary={
            "Sekolah Menengah Pertama (SMP) Al-Khusyu' adalah lembaga pendidikan berbasis pondok pesantren dalam naungan Yayasan Pendidikan dan Sosial Al-Khusyu' yang bertujuan untuk menghasilkan lulusan yang berbudi pekerti Islam, generasi qur'ani, dan berjiwa enterprenuership; serta mewujudkan tatakelola pendidikan yang berorientasi pada kelestarian lingkungan dan kesejahteraan para stakeholders."
          }
          imageList={imageList}
          teacherCount={25}
          studentCount={97}
        />
        <Mission
          name={"SMP Al-Khusyu'"}
          vision={
            "Menjadi Lembaga Pendidikan Unggul Dalam Menebarkan Rahmat Bagi Semesta Alam Berdasarkan Nilai Dasar Islam"
          }
          mission={
            "1. Menyelenggarakan pendidikan yang berbasis pesantren didukung dengan pengelolaan, SDM, pembelajaran, input dan sarpras yang baik.\n2. Menyelenggarakan pendidikan berdasarkan Al qur'an dan Al Hadist.\n3. Menyelenggarakan pendidikan yang berkarakter akhlaqul karimah.\n4. Menyelenggarakan pendidkan yang memiliki kemampuan IMTAQ dan IPTEK sesuai jenjang pendidikan."
          }
          imageUrl="/image/fotbar smp.webp"
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
            href="https://wa.me/6285649275145"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-[#757575]"
          >
            <p className="font-manrope font-bold text-[#757575] text-sm md:text-base lg:text-lg xl:text-[24px]">
              Kepala Sekolah : 085649275145
            </p>
          </a>
          <a
            href="https://wa.me/62881026351934"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-[#757575]"
          >
            <p className="font-manrope font-bold text-[#757575] text-sm md:text-base lg:text-lg xl:text-[24px]">
              Operator Sekolah/ Tata Usaha : 0881026351934
            </p>
          </a>
          <a
            href="mailto:smppesantrenalkhusyu@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-[#757575]"
          >
            <p className="font-manrope font-bold text-[#757575] text-sm md:text-base lg:text-lg xl:text-[24px]">
              Email : smppesantrenalkhusyu@gmail.com
            </p>
          </a>
        </div>
      </div>
    </>
  );
}
