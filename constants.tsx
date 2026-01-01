
import { PracticeArea, Attorney, BlogPost, Testimonial } from './types';

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'corp',
    title: 'Hukum Korporasi',
    description: 'Panduan hukum strategis untuk bisnis dari semua skala, mulai dari startup hingga perusahaan global.',
    icon: 'Briefcase'
  },
  {
    id: 'family',
    title: 'Hukum Keluarga',
    description: 'Representasi penuh empati untuk masalah domestik, termasuk perceraian dan hak asuh anak.',
    icon: 'Users'
  },
  {
    id: 'criminal',
    title: 'Pertahanan Kriminal',
    description: 'Advokasi agresif untuk melindungi hak dan masa depan Anda dalam tantangan hukum yang serius.',
    icon: 'Shield'
  },
  {
    id: 'litigation',
    title: 'Litigasi Perdata',
    description: 'Penyelesaian ahli untuk sengketa kompleks melalui mediasi, arbitrase, atau persidangan.',
    icon: 'Gavel'
  },
  {
    id: 'estate',
    title: 'Perencanaan Warisan',
    description: 'Mengamankan warisan Anda melalui wasiat, perwalian, dan manajemen kekayaan yang teliti.',
    icon: 'FileText'
  },
  {
    id: 'ip',
    title: 'Kekayaan Intelektual',
    description: 'Melindungi aset kreatif dan inovasi Anda di pasar yang kompetitif.',
    icon: 'Scale'
  }
];

export const ATTORNEYS: Attorney[] = [
  {
    id: '1',
    name: 'Eleanor Sterling',
    role: 'Mitra Senior',
    specialization: 'Korporasi & Keuangan',
    bio: 'Dengan pengalaman 25 tahun, Eleanor memimpin divisi korporasi kami dengan fokus pada M&A.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    name: 'Marcus Thorne',
    role: 'Mitra',
    specialization: 'Pertahanan Kriminal',
    bio: 'Mantan jaksa, Marcus membawa wawasan ruang sidang yang tak tertandingi ke dalam strategi pertahanannya.',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    name: 'Sarah Chen',
    role: 'Associate Senior',
    specialization: 'Hukum Keluarga',
    bio: 'Sarah berspesialisasi dalam kasus domestik berkonflik tinggi dengan fokus pada advokasi anak.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    name: 'Julian Ross',
    role: 'Mitra',
    specialization: 'Kekayaan Intelektual',
    bio: 'Pakar dalam perlindungan merek dagang dan paten teknologi internasional.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '5',
    name: 'Elena Vance',
    role: 'Mitra',
    specialization: 'Litigasi Perdata',
    bio: 'Dikenal karena pendekatannya yang strategis dalam penyelesaian sengketa komersial yang kompleks.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '6',
    name: 'David Cho',
    role: 'Associate',
    specialization: 'Hukum Pajak',
    bio: 'Membantu klien menavigasi struktur perpajakan internasional dan kepatuhan regulasi.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '7',
    name: 'Sophia Laurent',
    role: 'Associate',
    specialization: 'Hukum Lingkungan',
    bio: 'Advokat untuk keberlanjutan dan kepatuhan standar lingkungan perusahaan global.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '8',
    name: 'Robert Mendez',
    role: 'Konsul',
    specialization: 'Hukum Arbitrase',
    bio: 'Berpengalaman luas dalam arbitrase internasional dan mediasi lintas batas.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'Memahami Undang-Undang Pajak Korporasi Baru 2024',
    excerpt: 'Perubahan utama yang perlu dipersiapkan oleh setiap pemilik bisnis kecil tahun fiskal ini.',
    date: '24 Okt 2024',
    category: 'Korporasi',
    image: 'https://picsum.photos/seed/blog1/600/400'
  },
  {
    id: 'b2',
    title: 'Navigasi Hak Asuh Anak di Era Digital',
    excerpt: 'Bagaimana media sosial dan jejak digital memengaruhi prosiding hukum keluarga modern.',
    date: '12 Nov 2024',
    category: 'Hukum Keluarga',
    image: 'https://picsum.photos/seed/blog2/600/400'
  },
  {
    id: 'b3',
    title: 'Pentingnya Perlindungan Kekayaan Intelektual',
    excerpt: 'Mengapa mendaftarkan paten lebih awal jauh lebih kritis saat ini dibandingkan sebelumnya.',
    date: '18 Nov 2024',
    category: 'Hukum KI',
    image: 'https://picsum.photos/seed/blog3/600/400'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    author: 'Robert Jenkins',
    position: 'CEO, TechVentures',
    content: 'Sterling & Associates memberikan kejelasan yang kami butuhkan selama akuisisi kami. Perhatian mereka terhadap detail sangat luar biasa.',
    rating: 5
  },
  {
    id: 't2',
    author: 'Maria Rodriguez',
    position: 'Pemilik Bisnis Kecil',
    content: 'Sarah Chen sangat berempati selama perceraian saya. Saya merasa terlindungi dan didengarkan di setiap langkah.',
    rating: 5
  },
  {
    id: 't3',
    author: 'James Wilson',
    position: 'Arsitek',
    content: 'Tim pertahanan kriminal bekerja tanpa lelah demi saya. Profesionalisme mereka menyelamatkan karier saya.',
    rating: 5
  }
];
