'use client';

import { useState, useEffect } from 'react';
import { ArrowLeft, Shield, Eye, Lock, Database, UserCheck, FileText } from 'lucide-react';
import Link from 'next/link';

export default function Privacy() {
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
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Kebijakan Privasi
          </h1>
          <p className="text-xl text-blue-100">
            PT WIN HIRAY GEMILANG berkomitmen melindungi privasi dan data pribadi Anda
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <p className="text-gray-600 leading-relaxed">
                Kebijakan Privasi ini menjelaskan bagaimana <strong>PT WIN HIRAY GEMILANG</strong> mengumpulkan, 
                menggunakan, melindungi, dan membagikan informasi pribadi Anda saat menggunakan layanan kami.
              </p>
            </div>

            {/* Section 1 */}
            <div className="mb-10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <Database className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">1. Informasi yang Kami Kumpulkan</h2>
              </div>
              <div className="ml-16 space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Informasi Pribadi</h3>
                  <p className="text-gray-600">
                    Kami dapat mengumpulkan informasi identifikasi pribadi seperti nama, alamat email, 
                    nomor telepon, alamat fisik, dan informasi lain yang Anda berikan secara sukarela.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Informasi Penggunaan</h3>
                  <p className="text-gray-600">
                    Kami mengumpulkan informasi tentang bagaimana Anda mengakses dan menggunakan layanan kami, 
                    termasuk alamat IP, jenis browser, waktu akses, dan halaman yang dikunjungi.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Informasi Bisnis</h3>
                  <p className="text-gray-600">
                    Untuk klien bisnis, kami dapat mengumpulkan informasi terkait perusahaan, 
                    jabatan, dan kebutuhan layanan yang diperlukan untuk menyediakan solusi yang tepat.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="mb-10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <Eye className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">2. Penggunaan Informasi</h2>
              </div>
              <div className="ml-16 space-y-4">
                <p className="text-gray-600">
                  Kami menggunakan informasi yang dikumpulkan untuk tujuan berikut:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Menyediakan dan meningkatkan layanan kami</li>
                  <li>Memproses permintaan dan transaksi Anda</li>
                  <li>Memberikan dukungan pelanggan yang responsif</li>
                  <li>Mengirimkan informasi penting terkait layanan</li>
                  <li>Menganalisis penggunaan untuk meningkatkan pengalaman pengguna</li>
                  <li>Memenuhi kewajiban hukum dan peraturan yang berlaku</li>
                </ul>
              </div>
            </div>

            {/* Section 3 */}
            <div className="mb-10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <Lock className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">3. Keamanan Data</h2>
              </div>
              <div className="ml-16 space-y-4">
                <p className="text-gray-600">
                  <strong>PT WIN HIRAY GEMILANG</strong> berkomitmen untuk melindungi keamanan informasi pribadi Anda 
                  dengan menerapkan langkah-langkah keamanan yang sesuai:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Enkripsi data saat transmisi dan penyimpanan</li>
                  <li>Akses terbatas kepada personel yang berwenang</li>
                  <li>Protokol keamanan fisik dan digital</li>
                  <li>Pemantauan keamanan berkelanjutan</li>
                  <li>Update rutin sistem keamanan</li>
                </ul>
              </div>
            </div>

            {/* Section 4 */}
            <div className="mb-10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <UserCheck className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">4. Hak Anda Sebagai Pengguna</h2>
              </div>
              <div className="ml-16 space-y-4">
                <p className="text-gray-600">
                  Sebagai pemilik data pribadi, Anda memiliki hak untuk:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Mengakses dan melihat data pribadi yang kami simpan</li>
                  <li>Memperbaiki data pribadi yang tidak akurat</li>
                  <li>Menghapus data pribadi sesuai dengan ketentuan yang berlaku</li>
                  <li>Menolak pemrosesan data pribadi untuk tujuan tertentu</li>
                  <li>Meminta pembatasan pemrosesan data pribadi</li>
                  <li>Memindahkan data pribadi kepada pihak ketiga yang berwenang</li>
                </ul>
              </div>
            </div>

            {/* Section 5 */}
            <div className="mb-10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">5. Kebijakan Cookies</h2>
              </div>
              <div className="ml-16 space-y-4">
                <p className="text-gray-600">
                  Website kami menggunakan cookies untuk meningkatkan pengalaman pengguna:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li><strong>Cookies Esensial:</strong> Diperlukan untuk fungsi dasar website</li>
                  <li><strong>Cookies Performa:</strong> Mengumpulkan informasi anonim tentang penggunaan</li>
                  <li><strong>Cookies Fungsional:</strong> Mengingat preferensi pengguna</li>
                  <li><strong>Cookies Pemasaran:</strong> Digunakan untuk kampanye yang relevan</li>
                </ul>
                <p className="text-gray-600">
                  Anda dapat mengatur preferensi cookies melalui pengaturan browser Anda.
                </p>
              </div>
            </div>

            {/* Section 6 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Perubahan Kebijakan</h2>
              <p className="text-gray-600">
                Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan akan 
                diberitahukan melalui website atau email Anda. Penggunaan terus menerus layanan kami 
                setelah perubahan menunjukkan penerimaan Anda terhadap kebijakan yang diperbarui.
              </p>
            </div>

            {/* Section 7 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Kontak Kami</h2>
              <p className="text-gray-600 mb-4">
                Jika Anda memiliki pertanyaan atau kekhawatiran tentang Kebijakan Privasi ini, 
                silakan hubungi kami:
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="font-semibold text-gray-900 mb-2"><strong>PT WIN HIRAY GEMILANG</strong></p>
                <p className="text-gray-600">Jln. PERTANIAN, Kel. Wosi, Kec. Manokwari Barat</p>
                <p className="text-gray-600">Kab. Manokwari, Prov. Papua Barat 98313</p>
                <p className="text-gray-600">Telepon: 0877-2988-7781</p>
                <p className="text-gray-600">Email: privacy@winhiraygemilang.co.id</p>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t pt-8 mt-12">
              <p className="text-center text-gray-500 text-sm">
                Kebijakan Privasi ini berlaku efektif sejak {new Date().toLocaleDateString('id-ID', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })} dan akan ditinjau secara berkala.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}