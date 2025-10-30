export type AchievementItem = {
  title: string;
  image: string;
  date: string;
  summary?: string;
  content: string[];
};

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    image: "/image/upacara-1.webp",
    title: "Juara 1 Lomba Marathon Putri",
    date: "9 DESEMBER 2025",
    summary:
      "Siswa Al-Khusyu' meraih Juara 1 Marathon Putri tingkat kecamatan dalam rangka HUT RI, membawa kebanggaan bagi lembaga.",
    content: [
      "Prestasi olahraga kembali diraih oleh siswa Al-Khusyu' melalui cabang lari Marathon Putri. Latihan disiplin dan program pembinaan fisik menjadi kunci keberhasilan.",
      "Lomba diselenggarakan dalam rangka HUT RI di Kecamatan Wates, dengan rute menantang dan pengawasan ketat panitia.",
      "Selain mengharumkan nama sekolah, capaian ini memotivasi siswa lain untuk hidup sehat, berlatih sungguh-sungguh, dan menjunjung sportivitas.",
    ],
  },
  {
    image: "/image/green.webp",
    title: "Go Green School Achievement",
    date: "9 DESEMBER 2025",
    summary:
      "SMK Al-Khusyu' diapresiasi atas konsistensi penerapan bank sampah dan pertanian organik sebagai bagian program Go Green School.",
    content: [
      "Penghargaan diberikan karena keberlanjutan program lingkungan: pemilahan sampah, bank sampah berbasis poin, dan kebun produktif sekolah.",
      "Program berdampak pada penurunan volume sampah, peningkatan literasi lingkungan, dan keterlibatan warga sekitar.",
      "Capaian ini menegaskan komitmen sekolah terhadap pendidikan karakter ekologis dan ekosistem hijau berkelanjutan.",
    ],
  },
  {
    image: "/image/fotbar smk.webp",
    title: "Digital Entrepreneur Award",
    date: "15 NOVEMBER 2025",
    summary:
      "Tim siswa SMK Al-Khusyu' meraih penghargaan wirausaha digital atas proyek toko daring dan kampanye konten kreatif.",
    content: [
      "Lewat mata pelajaran kewirausahaan digital, siswa membangun merek, menulis konten, memotret produk, dan menjalankan kampanye media sosial.",
      "Presentasi proyek di hadapan juri industri menonjolkan aspek etika bisnis Islami dan kebermanfaatan sosial.",
      "Penghargaan ini menjadi portofolio penting dan pemicu lahirnya wirausahawan muda Al-Khusyu'.",
    ],
  },
];


