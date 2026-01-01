
import React, { useState, useEffect, useRef } from 'react';
import { 
  Phone, Clock, Menu, X, ArrowRight, CheckCircle, 
  Linkedin, Facebook, Instagram, Mail, MapPin, 
  ChevronRight, Star, Quote, Briefcase, Users, Shield, Gavel, FileText, Scale,
  ChevronLeft
} from 'lucide-react';
import { PRACTICE_AREAS, ATTORNEYS, BLOG_POSTS, TESTIMONIALS } from './constants';
import LegalAssistant from './components/LegalAssistant';

const IconMap: Record<string, any> = {
  Briefcase, Users, Shield, Gavel, FileText, Scale
};

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const slide = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = 400;
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col scroll-smooth">
      {/* Top Bar - Enhanced Size & Visibility */}
      <div className="bg-slate-900 text-white py-4 px-8 hidden md:flex justify-between items-center text-sm font-semibold tracking-wide border-b border-slate-800">
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-3 group cursor-default">
            <Clock size={18} className="text-yellow-500 transition-transform group-hover:scale-110" />
            <span className="text-slate-200">Jam Buka: <span className="text-white">Sen - Jum: 08:00 - 18:00</span></span>
          </div>
          <div className="h-4 w-px bg-slate-700 hidden lg:block"></div>
          <div className="flex items-center gap-3 group cursor-default">
            <MapPin size={18} className="text-yellow-500 transition-transform group-hover:scale-110" />
            <span className="text-slate-200">Lokasi: <span className="text-white">123 Legal Plaza, NY</span></span>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <a href="tel:+15551234567" className="flex items-center gap-3 group hover:text-yellow-500 transition-colors">
            <div className="bg-yellow-500 p-1.5 rounded-md text-slate-900 group-hover:bg-white transition-colors">
              <Phone size={16} />
            </div>
            <span className="text-base tracking-tighter">(555) 123-4567</span>
          </a>
          <div className="flex items-center gap-4 border-l border-slate-700 pl-8">
            <a href="#" className="hover:text-yellow-500 transition-colors"><Linkedin size={18} /></a>
            <a href="#" className="hover:text-yellow-500 transition-colors"><Facebook size={18} /></a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className={`sticky top-0 z-40 w-full transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-white font-serif text-2xl font-bold shadow-inner">
              S
            </div>
            <div>
              <h1 className="text-xl font-bold font-serif leading-none tracking-tight">STERLING</h1>
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">& Associates</p>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {[
              { label: 'Beranda', id: 'home' },
              { label: 'Tentang Kami', id: 'about-us' },
              { label: 'Bidang Praktik', id: 'practice-areas' },
              { label: 'Pengacara', id: 'attorneys' },
              { label: 'Blog', id: 'blog' },
              { label: 'Kontak', id: 'contact' }
            ].map((item) => (
              <a 
                key={item.id} 
                href={`#${item.id}`} 
                className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-900 transition-all group-hover:w-full"></span>
              </a>
            ))}
            <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-slate-800 transition-all hover:shadow-lg active:scale-95">
              By Indra Satriawan, S.Kom
            </button>
          </div>

          <button className="lg:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white p-6 pt-24 space-y-6">
          <button className="absolute top-6 right-6" onClick={() => setIsMenuOpen(false)}><X size={32} /></button>
          {[
            { label: 'Beranda', id: 'home' },
            { label: 'Tentang Kami', id: 'about-us' },
            { label: 'Bidang Praktik', id: 'practice-areas' },
            { label: 'Pengacara', id: 'attorneys' },
            { label: 'Blog', id: 'blog' },
            { label: 'Kontak', id: 'contact' }
          ].map((item) => (
            <a 
              key={item.id} 
              href={`#${item.id}`} 
              className="block text-2xl font-serif font-bold text-slate-900"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <button className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-lg">
            Jadwalkan Konsultasi
          </button>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="relative h-[85vh] flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1920" 
            alt="Kantor hukum profesional" 
            className="w-full h-full object-cover opacity-30 grayscale-[0.2]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl animate-fade-in-up">
            <span className="inline-block px-3 py-1 bg-yellow-500/20 text-yellow-500 rounded text-xs font-bold uppercase tracking-widest mb-6">
              Berdiri Sejak 1998
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-[1.1]">
              <span className="text-yellow-500 block">Solusi Hukum Terpercaya</span>
              <span className="text-white block">untuk masa depan anda</span>
            </h2>
            <p className="text-lg text-slate-300 mb-10 leading-relaxed font-light">
              Menyediakan representasi hukum yang canggih untuk keluarga, bisnis, dan individu. 
              Komitmen kami terhadap keunggulan memastikan kepentingan Anda selalu terlindungi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-yellow-500 transition-colors group">
                Minta Konsultasi
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors">
                Jelajahi Bidang Praktik
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about-us" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/teamwork/800/600" 
              alt="Kantor kami" 
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-10 -right-10 hidden md:block bg-slate-900 text-white p-8 rounded-2xl shadow-xl max-w-xs">
              <h4 className="text-3xl font-serif font-bold mb-2">25+ Tahun</h4>
              <p className="text-slate-400 text-sm">Keunggulan dalam representasi hukum dan layanan klien di 12 negara bagian.</p>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold text-yellow-600 uppercase tracking-widest mb-4">Siapa Kami</h3>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-8">Puluhan Tahun Integritas dan Advokasi.</h2>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>
                Sterling & Associates didirikan atas prinsip bahwa masalah hukum berisiko tinggi membutuhkan lebih dari sekadar pengetahuan—mereka membutuhkan mitra berdedikasi yang memahami elemen manusia di balik setiap kasus.
              </p>
              <p>
                Firma kami telah berkembang dari kemitraan lokal menjadi kekuatan hukum multi-disiplin, namun nilai-nilai inti kami tetap tidak berubah: empati, transparansi, dan pengejaran keadilan yang tanpa henti bagi klien kami.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-6">
              {[
                "Jangkauan Global", "Keahlian Lokal", "Pemenang Penghargaan", "Fokus pada Klien"
              ].map(val => (
                <div key={val} className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-yellow-600" />
                  <span className="font-semibold text-slate-800">{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section id="practice-areas" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h3 className="text-sm font-bold text-yellow-600 uppercase tracking-widest mb-4">Keahlian Kami</h3>
            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">Dukungan Hukum Komprehensif untuk Setiap Kebutuhan.</h2>
            <p className="text-slate-600">Kami berspesialisasi dalam berbagai bidang hukum, memberikan nasihat ahli yang disesuaikan dengan situasi spesifik Anda.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRACTICE_AREAS.map((area) => {
              const IconComp = IconMap[area.icon];
              return (
                <div key={area.id} className="bg-white p-10 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group hover:-translate-y-2">
                  <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center text-slate-900 mb-8 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                    <IconComp size={28} />
                  </div>
                  <h4 className="text-2xl font-serif font-bold mb-4">{area.title}</h4>
                  <p className="text-slate-600 mb-8 leading-relaxed">{area.description}</p>
                  <a href="#contact" className="text-slate-900 font-bold flex items-center gap-2 group-hover:text-yellow-600 transition-colors">
                    Pelajari Selengkapnya <ChevronRight size={16} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Attorney Profiles - Full Width Slider with B&W Filter */}
      <section id="attorneys" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="max-w-xl">
              <h3 className="text-sm font-bold text-yellow-600 uppercase tracking-widest mb-4">Temui Tim Kami</h3>
              <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">Profesional Elit yang Berdedikasi untuk Kesuksesan Anda.</h2>
            </div>
            <div className="flex gap-4">
              <button 
                onClick={() => slide('left')}
                className="w-12 h-12 border-2 border-slate-900 rounded-full flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all active:scale-95"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={() => slide('right')}
                className="w-12 h-12 border-2 border-slate-900 rounded-full flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all active:scale-95"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>

        <div 
          ref={sliderRef}
          className="flex overflow-x-auto gap-8 px-6 md:px-12 pb-12 no-scrollbar scroll-smooth"
        >
          {ATTORNEYS.map((attorney) => (
            <div key={attorney.id} className="min-w-[260px] md:min-w-[300px] group cursor-pointer shrink-0">
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[3/4]">
                <img 
                  src={attorney.image} 
                  alt={attorney.name} 
                  className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-900 hover:bg-yellow-500 transition-colors shadow-lg"><Linkedin size={20} /></div>
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-900 hover:bg-yellow-500 transition-colors shadow-lg"><Mail size={20} /></div>
                </div>
              </div>
              <h4 className="text-xl font-serif font-bold text-slate-900 mb-1">{attorney.name}</h4>
              <p className="text-yellow-600 font-bold text-[10px] uppercase tracking-wider mb-4">{attorney.role} — {attorney.specialization}</p>
              <p className="text-slate-600 text-sm leading-relaxed line-clamp-2">{attorney.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-10 left-10 text-slate-800 pointer-events-none opacity-20">
          <Quote size={200} />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-sm font-bold text-yellow-500 uppercase tracking-widest mb-4">Testimoni</h3>
            <h2 className="text-4xl font-serif font-bold">Apa Kata Klien Kami</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-slate-800/50 backdrop-blur p-10 rounded-2xl border border-white/10 hover:border-yellow-500/50 transition-colors">
                <div className="flex gap-1 mb-6 text-yellow-500">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-lg italic text-slate-300 mb-8 leading-relaxed">"{t.content}"</p>
                <div>
                  <h5 className="font-bold text-white">{t.author}</h5>
                  <p className="text-sm text-slate-500">{t.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16 gap-4">
            <div>
              <h3 className="text-sm font-bold text-yellow-600 uppercase tracking-widest mb-4">Wawasan & Berita</h3>
              <h2 className="text-4xl font-serif font-bold text-slate-900">Perspektif Hukum</h2>
            </div>
            <button className="hidden sm:block border-2 border-slate-900 px-6 py-3 rounded-full font-bold hover:bg-slate-900 hover:text-white transition-colors">
              Baca Lebih Banyak Artikel
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {BLOG_POSTS.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group">
                <div className="relative h-56 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute top-4 left-4 bg-slate-900 text-white px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest">
                    {post.category}
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-slate-400 text-xs font-bold mb-3">{post.date}</p>
                  <h4 className="text-xl font-serif font-bold text-slate-900 mb-4 group-hover:text-yellow-600 transition-colors">{post.title}</h4>
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed line-clamp-2">{post.excerpt}</p>
                  <button className="flex items-center gap-2 text-slate-900 font-bold text-sm group-hover:translate-x-1 transition-transform">
                    Lanjutkan Membaca <ArrowRight size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">
          <div>
            <h3 className="text-sm font-bold text-yellow-600 uppercase tracking-widest mb-4">Hubungi Kami</h3>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-8">Mulai Perjalanan Anda Menuju Kejelasan Hukum.</h2>
            <p className="text-slate-600 mb-12 text-lg">Baik Anda sedang menghadapi krisis atau merencanakan masa depan, tim kami siap mendengarkan dan memberikan solusi strategis.</p>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-900 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 mb-1 text-lg">Nomor Telepon</h5>
                  <p className="text-slate-600">(555) 123-4567</p>
                  <p className="text-slate-400 text-sm">Tersedia 24/7 untuk keadaan darurat</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-900 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 mb-1 text-lg">Alamat Email</h5>
                  <p className="text-slate-600">contact@sterlinglaw.com</p>
                  <p className="text-slate-400 text-sm">Respons biasanya dalam 2 jam</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-900 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 mb-1 text-lg">Lokasi Kantor</h5>
                  <p className="text-slate-600">123 Legal Plaza, Financial District, New York, NY 10001</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-10 md:p-14 rounded-3xl border border-slate-100 shadow-sm">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Nama Depan</label>
                  <input type="text" className="w-full bg-white border-slate-200 border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900" placeholder="Budi" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Nama Belakang</label>
                  <input type="text" className="w-full bg-white border-slate-200 border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900" placeholder="Santoso" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Alamat Email</label>
                <input type="email" className="w-full bg-white border-slate-200 border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900" placeholder="budi@example.com" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Bidang Praktik</label>
                <select className="w-full bg-white border-slate-200 border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900">
                  <option>Pilih bidang praktik</option>
                  <option>Hukum Korporasi</option>
                  <option>Hukum Keluarga</option>
                  <option>Pertahanan Kriminal</option>
                  <option>Lainnya</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Pesan Anda</label>
                <textarea className="w-full bg-white border-slate-200 border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900 h-32 resize-none" placeholder="Jelaskan singkat situasi Anda..."></textarea>
              </div>
              <button className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all hover:shadow-xl active:scale-[0.98]">
                Kirim Pertanyaan
              </button>
              <p className="text-[10px] text-center text-slate-400 italic">
                Dengan mengirimkan formulir ini, Anda mengakui bahwa hubungan pengacara-klien tidak terjalin sampai kesepakatan formal ditandatangani.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-slate-950 font-serif text-2xl font-bold">S</div>
                <div>
                  <h1 className="text-xl font-bold font-serif leading-none tracking-tight text-white">STERLING</h1>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">& Associates</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed">
                Representasi hukum ahli dengan fokus pada integritas dan hasil. Melayani masyarakat selama lebih dari 25 tahun.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-white hover:text-slate-950 transition-all"><Facebook size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-white hover:text-slate-950 transition-all"><Linkedin size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-white hover:text-slate-950 transition-all"><Instagram size={18} /></a>
              </div>
            </div>

            <div>
              <h5 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Tautan Cepat</h5>
              <ul className="space-y-4 text-sm">
                <li><a href="#home" className="hover:text-yellow-500 transition-colors">Beranda</a></li>
                <li><a href="#about-us" className="hover:text-yellow-500 transition-colors">Tentang Kami</a></li>
                <li><a href="#practice-areas" className="hover:text-yellow-500 transition-colors">Bidang Praktik</a></li>
                <li><a href="#attorneys" className="hover:text-yellow-500 transition-colors">Tim Kami</a></li>
                <li><a href="#blog" className="hover:text-yellow-500 transition-colors">Wawasan Hukum</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Bidang Praktik</h5>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Hukum Korporasi</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Hukum Keluarga</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Pertahanan Kriminal</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Litigasi Perdata</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Perencanaan Warisan</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Detail Kontak</h5>
              <div className="space-y-6 text-sm">
                <div className="flex gap-4">
                  <MapPin size={18} className="text-yellow-500 shrink-0" />
                  <span>123 Legal Plaza, Financial District, New York, NY 10001</span>
                </div>
                <div className="flex gap-4">
                  <Phone size={18} className="text-yellow-500 shrink-0" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex gap-4">
                  <Mail size={18} className="text-yellow-500 shrink-0" />
                  <span>contact@sterlinglaw.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest font-bold">
            <p>© 2024 Firma Hukum Sterling & Associates. Seluruh Hak Dilindungi.</p>
            <div className="flex gap-10">
              <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
              <a href="#" className="hover:text-white transition-colors">Penafian Hukum</a>
              <a href="#" className="hover:text-white transition-colors">Syarat Layanan</a>
            </div>
          </div>
        </div>
      </footer>

      {/* AI Assistant */}
      <LegalAssistant />
    </div>
  );
};

export default App;
