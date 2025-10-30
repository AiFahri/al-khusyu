export type ProgramItem = {
  title: string;
  image: string;
  category: string;
  content?: string[];
};

export const PROGRAMS: ProgramItem[] = [
  {
    image: "/image/mi-7.webp",
    title: "The Qur'an Life School",
    category: "PROGRAM UTAMA",
    content: [
      "Program pembelajaran yang mengintegrasikan nilai-nilai Al-Qur'an dalam kehidupan sehari-hari dan pembelajaran akademik dengan pendekatan yang mendalam.",
      "Implementasi meliputi tilawah, tadabbur, dan proyek kontekstual yang menumbuhkan akhlak dan literasi Qur'ani.",
      "Siswa diajak menghubungkan ayat-ayat dengan konteks sains, sosial, dan perilaku harian agar nilai Qur'ani hidup dalam keputusan mereka.",
      "Penilaian menekankan proses refleksi diri, aksi nyata, serta growth mindset yang sejalan dengan profil pelajar Pancasila.",
    ],
  },
  {
    image: "/image/green.webp",
    title: "Go Green School",
    category: "PROGRAM LINGKUNGAN",
    content: [
      "Program pendidikan lingkungan yang menanamkan kesadaran ekologis dan tanggung jawab terhadap alam semesta.",
      "Kegiatan meliputi bank sampah, kebun sekolah, hemat energi, dan kampanye hijau.",
      "Materi disampaikan melalui project-based learning dan monitoring dampak sehingga siswa melihat perubahan yang terukur.",
      "Kolaborasi dengan warga sekitar memperluas manfaat program dan membangun ekosistem hijau yang berkelanjutan.",
    ],
  },
  {
    image: "/image/kantin-2.webp",
    title: "Digital Entrepreneur",
    category: "PROGRAM SMK",
    content: [
      "Pelatihan kewirausahaan digital bagi siswa SMK Al-Khusyu' untuk mengembangkan keterampilan bisnis dan entrepreneurship sesuai kebutuhan industri modern.",
      "Kurikulum meliputi branding, pembuatan konten, toko daring, analitik, hingga etika bisnis Islami.",
      "Siswa mempraktikkan mini project dan membuka kanal pemasaran nyata sebagai portofolio karier.",
    ],
  },
  {
    image: "/image/fotbar ra.webp",
    title: "Math Kids & Fonik",
    category: "PROGRAM RA",
    content: [
      "Program pembelajaran matematika dan fonik yang menyenangkan untuk perkembangan literasi numerasi dan bahasa usia dini.",
      "Aktivitas dirancang berbasis permainan, multisensori, dan pengulangan terarah untuk membangun kepercayaan diri anak.",
      "Keterlibatan orang tua difasilitasi melalui lembar kegiatan rumah dan panduan interaksi positif.",
    ],
  },
  {
    image: "/image/fotbar smk.webp",
    title: "Konsentrasi Keahlian DKV",
    category: "PROGRAM SMK",
    content: [
      "Desain Komunikasi Visual yang menyiapkan peserta didik menjadi insan kreatif di bidang desain, percetakan, dan digital marketing.",
      "Materi mencakup tipografi, layout, fotografi, motion sederhana, dan produksi cetak hingga digital campaign.",
      "Siswa membangun portofolio dan mengikuti pameran karya sebagai jembatan menuju dunia kerja/usaha.",
    ],
  },
];
