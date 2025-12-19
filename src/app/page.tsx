'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronRight, Shield, FileText, Users, Target, Award, TrendingUp, ArrowRight, CheckCircle, Star } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'services', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    // Trigger visibility animation after component mounts
    setTimeout(() => setIsVisible(true), 100);
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">W</span>
              </div>
              <span className="font-bold text-xl text-gray-900">PT WIN HIRAY GEMILANG</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className={`transition-all duration-300 ${activeSection === 'home' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
              >
                Beranda
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className={`transition-all duration-300 ${activeSection === 'about' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
              >
                Tentang
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className={`transition-all duration-300 ${activeSection === 'services' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
              >
                Layanan
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`transition-all duration-300 ${activeSection === 'contact' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
              >
                Kontak
              </button>
              <Link href="/privacy" className="text-gray-700 hover:text-blue-600 transition-colors">Privacy</Link>
              <Link href="/terms" className="text-gray-700 hover:text-blue-600 transition-colors">Terms</Link>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t animate-in slide-in-from-top duration-300">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
              >
                Beranda
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
              >
                Tentang
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
              >
                Layanan
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
              >
                Kontak
              </button>
              <Link href="/privacy" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">Privacy</Link>
              <Link href="/terms" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">Terms</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-blue-800/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  <span className="text-blue-600">PT WIN HIRAY</span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">GEMILANG</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Mitra terpercaya untuk solusi bisnis terintegrasi dan berkualitas tinggi di Indonesia.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-blue-900 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center"
                >
                  Hubungi Kami
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all"
                >
                  Pelajari Lebih Lanjut
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center group">
                  <div className="text-3xl font-bold text-blue-600 group-hover:scale-110 transition-transform">10+</div>
                  <div className="text-sm text-gray-600">Tahun Pengalaman</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold text-blue-600 group-hover:scale-110 transition-transform">500+</div>
                  <div className="text-sm text-gray-600">Klien Puas</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold text-blue-600 group-hover:scale-110 transition-transform">50+</div>
                  <div className="text-sm text-gray-600">Proyek Sukses</div>
                </div>
              </div>
            </div>

            <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative z-10 group">
                <Image
                  src="/logo.png"
                  alt="PT WIN HIRAY GEMILANG Logo"
                  width={400}
                  height={400}
                  className="w-full h-auto rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tentang <span className="text-blue-600">PT WIN HIRAY GEMILANG</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Perusahaan terkemuka yang berkomitmen untuk memberikan solusi bisnis terbaik dengan standar kualitas tertinggi
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Visi Kami</h3>
              <p className="text-gray-600 leading-relaxed">
                Menjadi perusahaan terdepan dalam industri yang memberikan solusi inovatif dan berkelanjutan untuk kemajuan bisnis klien.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Misi Kami</h3>
              <p className="text-gray-600 leading-relaxed">
                Memberikan pelayanan terbaik dengan integritas tinggi, inovasi berkelanjutan, dan komitmen penuh terhadap kepuasan klien.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nilai Kami</h3>
              <p className="text-gray-600 leading-relaxed">
                Profesionalisme, integritas, inovasi, dan komitmen terhadap kualitas menjadi fondasi dalam setiap layanan yang kami berikan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Layanan <span className="text-blue-600">Unggulan</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Solusi komprehensif yang disesuaikan dengan kebutuhan bisnis Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Konsultasi Bisnis",
                description: "Analisis mendalam dan strategi bisnis yang tepat untuk pertumbuhan perusahaan Anda.",
                features: ["Strategi Bisnis", "Analisis Pasar", "Perencanaan"]
              },
              {
                icon: Shield,
                title: "Manajemen Risiko",
                description: "Identifikasi dan mitigasi risiko untuk melindungi aset dan operasional bisnis.",
                features: ["Risk Assessment", "Mitigation Plan", "Monitoring"]
              },
              {
                icon: Users,
                title: "Pengembangan Tim",
                description: "Program pelatihan dan pengembangan sumber daya manusia yang komprehensif.",
                features: ["Training Program", "Leadership", "Team Building"]
              },
              {
                icon: Target,
                title: "Perencanaan Strategis",
                description: "Perencanaan jangka panjang dan eksekusi strategi yang terukur dan efektif.",
                features: ["Strategic Planning", "KPI Setting", "Execution"]
              },
              {
                icon: Award,
                title: "Sertifikasi & Standar",
                description: "Pendampingan proses sertifikasi dan implementasi standar industri terbaik.",
                features: ["ISO Certification", "Standard Compliance", "Audit"]
              },
              {
                icon: FileText,
                title: "Dokumentasi & Laporan",
                description: "Pembuatan dokumen bisnis profesional dan laporan yang komprehensif.",
                features: ["Business Report", "Documentation", "Analysis"]
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
                <button className="flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors group">
                  Pelajari Lebih Lanjut <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Apa Kata <span className="text-blue-600">Klien Kami</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kepuasan klien adalah prioritas utama kami
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Budi Santoso",
                position: "CEO PT Maju Bersama",
                content: "PT WIN HIRAY GEMILANG telah menjadi mitra strategis yang sangat berharga. Konsultasi bisnis yang mereka berikan telah membantu perusahaan kami tumbuh 40% dalam satu tahun.",
                rating: 5
              },
              {
                name: "Sarah Wijaya",
                position: "Direktur CV Karya Mandiri",
                content: "Tim yang sangat profesional dan berpengalaman. Mereka membantu kami dalam implementasi sistem manajemen risiko yang komprehensif.",
                rating: 5
              },
              {
                name: "Ahmad Fauzi",
                position: "Manager PT Sukses Sejahtera",
                content: "Program pelatihan dan pengembangan tim yang diberikan sangat efektif. Kinerja tim kami meningkat secara signifikan setelah mengikuti program mereka.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Hubungi <span className="text-blue-600">Kami</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Siap untuk memulai proyek Anda? Tim kami siap membantu mewujudkan visi bisnis Anda
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-6">Informasi Kontak</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold">Alamat</p>
                      <p className="text-blue-100">Jln. PERTANIAN, Kel. Wosi, Kec. Manokwari Barat, Kab. Manokwari, Prov. Papua Barat</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold">Telepon</p>
                      <p className="text-blue-100">0877-2988-7781</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-blue-100">info@winhiraygemilang.co.id</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Jam Operasional</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Senin - Jumat: 08:00 - 17:00</p>
                  <p>Sabtu: 08:00 - 12:00</p>
                  <p>Minggu: Tutup</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Kirim Pesan</h3>
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Terima kasih! Pesan Anda telah terkirim.'); }}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    placeholder="Masukkan nama Anda"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subjek</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    placeholder="Subjek pesan"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Pesan</label>
                  <textarea
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
                    placeholder="Tulis pesan Anda di sini..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-blue-900 transition-all transform hover:scale-105 shadow-lg"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">W</span>
                </div>
                <span className="font-bold text-xl">PT WIN HIRAY GEMILANG</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Mitra terpercaya untuk solusi bisnis terintegrasi dan berkualitas tinggi di Indonesia.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#home" className="hover:text-white transition-colors">Beranda</Link></li>
                <li><Link href="#about" className="hover:text-white transition-colors">Tentang</Link></li>
                <li><Link href="#services" className="hover:text-white transition-colors">Layanan</Link></li>
                <li><Link href="#contact" className="hover:text-white transition-colors">Kontak</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PT WIN HIRAY GEMILANG. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}