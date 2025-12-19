'use client';

import { useState, useEffect } from 'react';
import { ArrowLeft, FileText, CheckCircle, AlertCircle, Users, Gavel } from 'lucide-react';
import Link from 'next/link';

export default function Terms() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Kembali ke Beranda
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="pt-32 pb-12 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Gavel className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Syarat dan Ketentuan
          </h1>
          <p className="text-xl text-blue-100">
            Ketentuan penggunaan layanan PT WIN HIRAY GEMILANG
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <p className="text-gray-600 leading-relaxed">
                Selamat datang di website <strong>PT WIN HIRAY GEMILANG</strong>. Dengan mengakses dan menggunakan 
                website dan layanan kami, Anda setuju untuk terikat oleh Syarat dan Ketentuan ini.
              </p>
            </div>

            {/* Section 1 */}
            <div className="mb-10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">1. Penerimaan Syarat</h2>
              </div>
              <div className="ml-16 space-y-4">
                <p className="text-gray-600">
                  Dengan mengakses website ini, Anda menyatakan bahwa Anda telah membaca, memahami, 
                  dan setuju untuk terikat oleh Syarat dan Ketentuan ini. Jika Anda tidak setuju 
                  dengan bagian manapun dari syarat ini, Anda tidak boleh menggunakan website kami.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="mb-10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">2. Definisi</h2>
              </div>
              <div className="ml-16 space-y-4">
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li><strong>"Perusahaan"</strong> merujuk pada PT WIN HIRAY GEMILANG</li>
                  <li><strong>"Website"</strong> merujuk pada situs web winhiraygemilang.co.id</li>
                  <li><strong>"Layanan"</strong> merujuk pada semua produk dan jasa yang kami tawarkan</li>
                  <li><strong>"Pengguna"</strong> merujuk pada individu atau entitas yang menggunakan website kami</li>
                  <li><strong>"Klien"</strong> merujuk pada pengguna yang membeli layanan kami</li>
                  <li><strong>"Konten"</strong> merujuk pada semua informasi, teks, gambar, dan materi di website</li>
                </ul>
              </div>
            </div>

            {/* Section 3 */}
            <div className="mb-10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">3. Penggunaan Website</h2>
              </div>
              <div className="ml-16 space-y-4">
                <p className="text-gray-600">Anda setuju untuk:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Menggunakan website hanya untuk tujuan yang sah dan sesuai hukum</li>
                  <li>Tidak melakukan aktivitas yang merusak atau mengganggu fungsi website</li>
                  <li>Tidak mencoba mendapatkan akses tidak sah ke sistem kami</li>
                  <li>Tinggal memberikan informasi yang akurat dan terkini</li>
                  <li>Mematuhi semua peraturan dan ketentuan yang berlaku</li>
                </ul>
                <p className="text-gray-600">Anda dilarang untuk:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Menyalin, mendistribusikan, atau memodifikasi konten tanpa izin</li>
                  <li>Menggunakan website untuk tujuan komersial tanpa persetujuan tertulis</li>
                  <li>Mengunggah materi yang melanggar hak kekayaan intelektual</li>
                  <li>Melakukan aktivitas penipuan atau phishing</li>
                </ul>
              </div>
            </div>

            {/* Section 4 */}
            <div className="mb-10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <AlertCircle className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">4. Layanan dan Produk</h2>
              </div>
              <div className="ml-16 space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Deskripsi Layanan</h3>
                  <p className="text-gray-600">
                    PT WIN HIRAY GEMILANG menyediakan berbagai layanan konsultasi bisnis, 
                    manajemen risiko, pengembangan tim, dan solusi terintegrasi lainnya.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Pemesanan dan Pembayaran</h3>
                  <p className="text-gray-600">
                    Semua pemesanan layanan harus melalui prosedur yang telah ditetapkan. 
                    Pembayaran dilakukan sesuai dengan kesepakatan yang tercantum dalam kontrak.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Perubahan Layanan</h3>
                  <p className="text-gray-600">
                    Kami berhak mengubah atau menghentikan layanan kapan saja dengan pemberitahuan sebelumnya.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Hak Kekayaan Intelektual</h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Semua konten, merek dagang, logo, dan materi di website ini merupakan 
                  hak milik PT WIN HIRAY GEMILANG atau dilisensikan kepada kami. 
                  Penggunaan tanpa izin melanggar hukum hak cipta dan merek dagang.
                </p>
                <p className="text-gray-600">
                  Nama "PT WIN HIRAY GEMILANG" dan semua logo terkait adalah merek dagang 
                  terdaftar dari perusahaan kami.
                </p>
              </div>
            </div>

            {/* Section 6 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Privasi dan Data Pribadi</h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Penggunaan data pribadi Anda diatur oleh Kebijakan Privasi kami. 
                  Dengan menggunakan website ini, Anda setuju dengan pengumpulan dan 
                  penggunaan data sesuai kebijakan tersebut.
                </p>
              </div>
            </div>

            {/* Section 7 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Batasan Tanggung Jawab</h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Website kami disediakan "sebagaimana adanya" tanpa jaminan dalam bentuk apapun. 
                  PT WIN HIRAY GEMILANG tidak bertanggung jawab atas:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Kerugian langsung atau tidak langsung dari penggunaan website</li>
                  <li>Gangguan teknis atau downtime website</li>
                  <li>Kekurangan akurasi informasi yang disediakan</li>
                  <li>Kerusakan yang disebabkan oleh pihak ketiga</li>
                </ul>
              </div>
            </div>

            {/* Section 8 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Indemnitas</h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Anda setuju untuk mengganti rugi PT WIN HIRAY GEMILANG dari semua klaim, 
                  kerugian, atau biaya yang timbul dari pelanggaran Anda terhadap Syarat dan Ketentuan ini.
                </p>
              </div>
            </div>

            {/* Section 9 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Hukum yang Berlaku</h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Syarat dan Ketentuan ini diatur oleh hukum Republik Indonesia. 
                  Setiap sengketa akan diselesaikan melalui perundingan baik-baik atau 
                  melalui pengadilan yang memiliki yurisdiksi di Manokwari, Papua Barat.
                </p>
              </div>
            </div>

            {/* Section 10 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Perubahan Syarat dan Ketentuan</h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  PT WIN HIRAY GEMILANG berhak mengubah Syarat dan Ketentuan ini kapan saja. 
                  Perubahan akan diberitahukan melalui website atau email Anda. 
                  Penggunaan terus menerus website setelah perubahan menunjukkan 
                  penerimaan Anda terhadap syarat yang diperbarui.
                </p>
              </div>
            </div>

            {/* Section 11 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Kontak Kami</h2>
              <p className="text-gray-600 mb-4">
                Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi kami:
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="font-semibold text-gray-900 mb-2"><strong>PT WIN HIRAY GEMILANG</strong></p>
                <p className="text-gray-600">Jln. PERTANIAN, Kel. Wosi, Kec. Manokwari Barat</p>
                <p className="text-gray-600">Kab. Manokwari, Prov. Papua Barat 98313</p>
                <p className="text-gray-600">Telepon: 0877-2988-7781</p>
                <p className="text-gray-600">Email: legal@winhiraygemilang.co.id</p>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t pt-8 mt-12">
              <p className="text-center text-gray-500 text-sm">
                Syarat dan Ketentuan ini berlaku efektif sejak {new Date().toLocaleDateString('id-ID', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })} dan merupakan perjanjian yang mengikat antara Anda dan PT WIN HIRAY GEMILANG.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}