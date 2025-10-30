import Headline from "@/pages/Education/Component/Headline.tsx";
import { Mission } from "@/pages/Education/Component/Mission.tsx";
import { Activity } from "@/pages/Education/Component/Activity.tsx";
import Organization from "@/pages/Education/Component/Organization.tsx";
import { Facility } from "@/pages/Education/Component/Facility.tsx";
import SEO from "@/components/SEO";
// import { Achievement } from "@/pages/Education/Component/Achievement.tsx";
import noProfile from "../../../assets/no-profile.avif";

export default function TK() {
  const imageList = [
    { image: "/image/ra-1.webp" },
    { image: "/image/ra-2.webp" },
    { image: "/image/ra-3.webp" },
    { image: "/image/ra-4.webp" },
  ];

  const activityData = {
    title: "Program Unggulan RA Al-Khusyu'",
    description:
      "Program unggulan yang mengintegrasikan nilai-nilai Islam dengan pembelajaran modern",
    activities: [
      {
        title: "Tahfidz",
        summary:
          "Hafalan Al-Quran juz 30 untuk peserta didik. Selain juga terdapat hafalan Hadist, bacaan sholat, tahlil dan doa sehari-hari.",
        image: "/image/ra-2.webp",
      },
      {
        title: "Math Kids",
        summary:
          "Mengenalkan peserta didik pada angka, bilangan, urutan bilangan, operasi bilangan (penjumlahan, pengurangan, perkalian dan pembagian) serta belajar mengenal jam (waktu).",
        image: "/image/ra.png",
      },
      {
        title: "Fonik",
        summary:
          "Program pembelajaran bahasa Indonesia yang mengajarkan peserta didik untuk mengenal aksara, mendengar, menyimak dan mengungkapkan kembali. Program ini juga mengenalkan peserta didik pada tanda baca dan menggabung bunyi dan mencari huruf atau kata yang sama dalam kalimat.",
        image: "/image/smk-1.webp",
      },
    ],
  };

  const organizationData = {
    title: "Struktur Organisasi RA Al-Khusyu'",
    description:
      "Tim pendidik yang profesional dan berdedikasi untuk membina generasi Qurani yang cerdas dan berakhlak.",
    organizations: [
      {
        title: "Romilatul Afida, S.Pd",
        summary: "Kepala Sekolah",
        image: "/image/Kepsek RA.webp",
      },
      {
        title: "Siti Kalimah, S.Pd",
        summary: "Waka Kurikulum",
        image: noProfile,
      },
      {
        title: "Mulyani",
        summary: "Operator",
        image: noProfile,
      },
      {
        title: "Dian Wahyuni Octavia",
        summary: "Wali Kelas A",
        image: noProfile,
      },
      {
        title: "Romilatul Afida, S.Pd",
        summary: "Wali Kelas B",
        image: noProfile,
      },
    ],
  };

  const facilityData = {
    title: "Fasilitas RA Al-Khusyu'",
    description:
      "Fasilitas pendidikan yang mendukung pembelajaran berbasis pesantren dengan kurikulum terintegrasi.",
    facilities: [
      {
        title: "Kurikulum Merdeka",
        subtitle: "Kurikulum Nasional",
        summary:
          "Kurikulum Merdeka dan The Qur'an Life School untuk mencapai Profil Pelajar Pancasila dan Profil Pelajar Rahmatan lil Alamin serta Capaian Pembelajaran yang mengacu pada Standar Kompetensi Lulusan.",
        image: "/image/ra-2.webp",
      },
      {
        title: "Ruang Kelas Nyaman",
        subtitle: "Fasilitas Belajar",
        summary:
          "Ruang kelas yang tertata rapi dan nyaman untuk mendukung proses pembelajaran yang efektif bagi peserta didik usia dini.",
        image: "/image/ra-4.webp",
      },
      {
        title: "Lingkungan Islami",
        subtitle: "Atmosfer Pendidikan",
        summary:
          "Lingkungan yang kondusif dengan nilai-nilai Islam yang terintegrasi dalam setiap aspek pembelajaran dan kehidupan sehari-hari.",
        image: "/image/ra-3.webp",
      },
      {
        title: "Sarana Tahfidz",
        subtitle: "Program Unggulan",
        summary:
          "Fasilitas khusus untuk program Tahfidz Al-Quran dengan pendekatan yang sesuai untuk anak usia dini.",
        image: "/image/fotbar ra.webp",
      },
      {
        title: "Area Bermain Edukatif",
        subtitle: "Pengembangan Motorik",
        summary:
          "Area bermain yang edukatif untuk mendukung perkembangan motorik kasar dan halus peserta didik.",
        image: "/image/ra-5.webp",
      },
    ],
  };

  return (
    <>
      <SEO
        title="RA Al-Khusyu' - Raudhatul Athfal"
        description="RA (Raudhatul Athfal) Al-Khusyu' adalah sekolah berbasis pesantren untuk anak usia dini yang mengintegrasikan nilai-nilai Islam dengan pembelajaran modern menggunakan Kurikulum Merdeka."
        keywords="RA Al-Khusyu, TK Al-Khusyu, Raudhatul Athfal, pendidikan anak usia dini, TK islam blitar, RA islam"
        image="/image/ra-2.webp"
        url="/pendidikan/tk"
      />
      <div className="flex flex-col gap-16 px-8 my-8">
        <Headline
          name={"Raudhatul Athfal Al-Khusyu’"}
          summary={
            "Raudhatul Athfal (RA) Al-Khusyu’ adalah sekolah yang berbasis pesantren yang bernaung dibawah Yayasan Pendidikan dan Sosial Al-Khusyu Kabupaten Blitar. Dengan menggunakan Kurikulum Merdeka, RA Al-khusyu memfasilitasi peserta didik pada satuan pendidikan anak usia dini berbasis islam yang menitik beratkan pada aspek perkembangan anak; transformasi dan internalisasi nilai-nilai spiritual keislaman.RA Al-Khusyu’ memiliki 5 orang guru dan 49 siswa pada Tahun Ajaran 2024-2025."
          }
          imageList={imageList}
          teacherCount={5}
          studentCount={49}
        />
        <Mission
          name={"RA Al-Khusyu'"}
          vision={
            "Menjadikan sekolah RA unggulan dalam menebarkan rahmat bagi semesta alam berdasarkan nilai-nilai dasar islami"
          }
          mission={
            "1. Mengajak peserta didik cinta shalat berjamaah dan masjid\n2. Mengajak peserta didik mengamalkan sunnah Nabi Muhammad SAW\n3. Mengajak peserta didik berempati dengan lingkungan sekitar\n4. Menjadi lembaga pendidikan islami berbasis pondok pesantren\n5. Menumbuhkan peserta didik yang bahagia dan cerdas karena Allah\n6. Membekali peserta didik dengan imtaq dan iptek"
          }
          imageUrl="/image/fotbar ra.webp"
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
            Kontak PPDB
          </h2>
          <a
            href="https://wa.me/6282231409619"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-[#757575]"
          >
            <p className="font-manrope font-bold text-[#757575] text-sm md:text-base lg:text-lg xl:text-[24px]">
              +62822-3140-9619 (Ustdh Mulyani/operator)
            </p>
          </a>
          <a
            href="https://wa.me/6285791749187"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-[#757575]"
          >
            <p className="font-manrope font-bold text-[#757575] text-sm md:text-base lg:text-lg xl:text-[24px]">
              +62857-9174-9187 (Ustdh Ida/kepala sekolah)
            </p>
          </a>
        </div>
      </div>
    </>
  );
}
