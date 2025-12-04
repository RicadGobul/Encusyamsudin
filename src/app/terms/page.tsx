'use client';

import { useState } from 'react';
import { ArrowLeft, FileText, Shield, AlertTriangle, CheckCircle, Gavel } from 'lucide-react';
import Link from 'next/link';

export default function Terms() {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', title: 'Ikhtisar', icon: FileText },
    { id: 'services', title: 'Layanan', icon: CheckCircle },
    { id: 'responsibilities', title: 'Tanggung Jawab', icon: Shield },
    { id: 'limitations', title: 'Batasan', icon: AlertTriangle },
    { id: 'legal', title: 'Hukum', icon: Gavel },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">ES</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    ENCU SYAMSUDIN
                  </h1>
                  <p className="text-xs text-gray-600">Terms & Conditions</p>
                </div>
              </Link>
            </div>
            <Link 
              href="/"
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Kembali ke Beranda</span>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Navigasi Syarat</h3>
              <nav className="space-y-2">
                {sections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                        activeSection === section.id
                          ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-600'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{section.title}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg p-8">
              {/* Overview Section */}
              {activeSection === 'overview' && (
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <FileText className="w-8 h-8 text-blue-600" />
                    <h2 className="text-3xl font-bold text-gray-900">Ikhtisar Syarat & Ketentuan</h2>
                  </div>
                  
                  <div className="prose max-w-none">
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Selamat datang di <strong>ENCU SYAMSUDIN</strong>. Syarat dan Ketentuan ini mengatur 
                      penggunaan layanan yang kami sediakan. Dengan menggunakan layanan kami, Anda setuju 
                      untuk mematuhi syarat dan ketentuan yang tercantum di bawah ini.
                    </p>

                    <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg my-6">
                      <h3 className="text-xl font-bold text-blue-900 mb-3">Penerimaan Syarat</h3>
                      <p className="text-blue-800">
                        Dengan mengakses atau menggunakan layanan ENCU SYAMSUDIN, Anda menyatakan telah membaca, 
                        memahami, dan menyetujui untuk terikat oleh Syarat dan Ketentuan ini.
                      </p>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-4">Poin-Poin Utama</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-3">•</span>
                        <span><strong>Legal Binding:</strong> Syarat ini merupakan kontrak yang sah secara hukum</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-3">•</span>
                        <span><strong>Perubahan:</strong> Kami dapat memperbarui syarat dari waktu ke waktu</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-3">•</span>
                        <span><strong>Kepatuhan:</strong> Pengguna harus mematuhi semua hukum yang berlaku</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-3">•</span>
                        <span><strong>Kontak:</strong> Pertanyaan dapat disampaikan melalui kontak resmi</span>
                      </li>
                    </ul>

                    <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mt-6">
                      <h4 className="font-bold text-yellow-900 mb-2">Update Terakhir</h4>
                      <p className="text-yellow-800">
                        Syarat dan Ketentuan ini terakhir diperbarui pada November 2024. 
                        Pengguna disarankan untuk meninjau secara berkala.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Services Section */}
              {activeSection === 'services' && (
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <CheckCircle className="w-8 h-8 text-blue-600" />
                    <h2 className="text-3xl font-bold text-gray-900">Layanan Kami</h2>
                  </div>
                  
                  <div className="prose max-w-none">
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      ENCU SYAMSUDIN menyediakan berbagai layanan profesional dengan standar kualitas tertinggi.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 mb-4">Deskripsi Layanan</h3>
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
                        <h4 className="font-bold text-blue-900 mb-3">Konsultasi Bisnis</h4>
                        <p className="text-blue-800 mb-3">
                          Layanan konsultasi profesional untuk pengembangan bisnis Anda.
                        </p>
                        <ul className="text-sm text-blue-700 space-y-1">
                          <li>• Analisis bisnis komprehensif</li>
                          <li>• Strategi pengembangan</li>
                          <li>• Solusi yang disesuaikan</li>
                        </ul>
                      </div>
                      <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
                        <h4 className="font-bold text-green-900 mb-3">Layanan Pelanggan</h4>
                        <p className="text-green-800 mb-3">
                          Dukungan pelanggan yang responsif dan profesional.
                        </p>
                        <ul className="text-sm text-green-700 space-y-1">
                          <li>• Support 24/7</li>
                          <li>• Respon cepat</li>
                          <li>• Solusi efektif</li>
                        </ul>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-4">Ketersediaan Layanan</h3>
                    <div className="space-y-4">
                      <div className="border-l-4 border-green-600 pl-6 py-4 bg-green-50">
                        <h4 className="font-bold text-green-900 mb-2">Ketersediaan</h4>
                        <p className="text-green-800">
                          Kami berusaha keras untuk menjaga ketersediaan layanan 99.9% 
                          namun tidak dapat menjamin tanpa gangguan.
                        </p>
                      </div>
                      <div className="border-l-4 border-blue-600 pl-6 py-4 bg-blue-50">
                        <h4 className="font-bold text-blue-900 mb-2">Pemeliharaan</h4>
                        <p className="text-blue-800">
                          Pemeliharaan terjadwal dapat dilakukan dengan pemberitahuan 
                          minimal 24 jam kepada pengguna.
                        </p>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">Standar Kualitas</h3>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-green-600 mr-3">✓</span>
                          <span>Layanan profesional dengan standar industri</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-3">✓</span>
                          <span>Tim ahli yang berpengalaman</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-3">✓</span>
                          <span>Solusi yang disesuaikan dengan kebutuhan</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-3">✓</span>
                          <span>Dukungan berkelanjutan</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Responsibilities Section */}
              {activeSection === 'responsibilities' && (
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <Shield className="w-8 h-8 text-blue-600" />
                    <h2 className="text-3xl font-bold text-gray-900">Tanggung Jawab</h2>
                  </div>
                  
                  <div className="prose max-w-none">
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Baik ENCU SYAMSUDIN maupun pengguna memiliki tanggung jawab masing-masing 
                      untuk memastikan kerjasama yang efektif dan saling menguntungkan.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 mb-4">Tanggung Jawab Kami</h3>
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-blue-50 p-6 rounded-lg">
                        <h4 className="font-bold text-blue-900 mb-3">Kualitas Layanan</h4>
                        <ul className="space-y-2 text-blue-800">
                          <li>• Menyediakan layanan profesional</li>
                          <li>• Menjaga kerahasiaan data</li>
                          <li>• Memberikan dukungan teknis</li>
                          <li>• Memperbarui layanan secara berkala</li>
                        </ul>
                      </div>
                      <div className="bg-green-50 p-6 rounded-lg">
                        <h4 className="font-bold text-green-900 mb-3">Komunikasi</h4>
                        <ul className="space-y-2 text-green-800">
                          <li>• Respon cepat terhadap pertanyaan</li>
                          <li>• Informasi transparan</li>
                          <li>• Pemberitahuan perubahan layanan</li>
                          <li>• Feedback konstruktif</li>
                        </ul>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-4">Tanggung Jawab Pengguna</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-purple-50 p-6 rounded-lg">
                        <h4 className="font-bold text-purple-900 mb-3">Penggunaan Layanan</h4>
                        <ul className="space-y-2 text-purple-800">
                          <li>• Menggunakan layanan secara bertanggung jawab</li>
                          <li>• Mematuhi syarat dan ketentuan</li>
                          <li>• Tidak menyalahgunakan layanan</li>
                          <li>• Melaporkan masalah secara tepat waktu</li>
                        </ul>
                      </div>
                      <div className="bg-orange-50 p-6 rounded-lg">
                        <h4 className="font-bold text-orange-900 mb-3">Informasi Akurat</h4>
                        <ul className="space-y-2 text-orange-800">
                          <li>• Memberikan informasi yang benar</li>
                          <li>• Memperbarui data secara berkala</li>
                          <li>• Melindungi kredensial akses</li>
                          <li>• Menghormati hak kekayaan intelektual</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mt-8">
                      <h4 className="font-bold text-yellow-900 mb-3">Kerjasama</h4>
                      <p className="text-yellow-800 mb-3">
                        Keberhasilan layanan bergantung pada kerjasama antara ENCU SYAMSUDIN dan pengguna. 
                        Kami berkomitmen untuk membangun hubungan profesional yang saling menguntungkan.
                      </p>
                      <p className="text-yellow-800">
                        Segala pelanggaran terhadap tanggung jawab dapat mengakibatkan penghentian layanan 
                        sesuai dengan ketentuan yang berlaku.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Limitations Section */}
              {activeSection === 'limitations' && (
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <AlertTriangle className="w-8 h-8 text-blue-600" />
                    <h2 className="text-3xl font-bold text-gray-900">Batasan & Pengecualian</h2>
                  </div>
                  
                  <div className="prose max-w-none">
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Syarat dan ketentuan ini memiliki batasan tertentu untuk melindungi 
                      kepentingan semua pihak yang terlibat.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 mb-4">Batasan Layanan</h3>
                    <div className="space-y-4">
                      <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-lg">
                        <h4 className="font-bold text-red-900 mb-3">Force Majeure</h4>
                        <p className="text-red-800 mb-3">
                          Kami tidak bertanggung jawab atas kegagalan layanan yang disebabkan oleh:
                        </p>
                        <ul className="space-y-1 text-red-700">
                          <li>• Bencana alam (gempa, banjir, tsunami)</li>
                          <li>• Perang, terorisme, kerusuhan sipil</li>
                          <li>• Kegagalan infrastruktur pihak ketiga</li>
                          <li>• Kebijakan pemerintah yang berubah</li>
                        </ul>
                      </div>

                      <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-lg">
                        <h4 className="font-bold text-orange-900 mb-3">Batasan Kerugian</h4>
                        <p className="text-orange-800 mb-3">
                          Tanggung jawab kami dibatasi sebagai berikut:
                        </p>
                        <ul className="space-y-1 text-orange-700">
                          <li>• Maksimal kerugian yang dapat ditanggung sebesar biaya layanan 3 bulan</li>
                          <li>• Tidak bertanggung jawab atas kerugian tidak langsung</li>
                          <li>• Tidak bertanggung jawab atas kehilangan keuntungan</li>
                          <li>• Tidak bertanggung jawab atas kerusakan data pihak ketiga</li>
                        </ul>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">Pengecualian</h3>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="font-bold text-gray-900 mb-3">Layanan Tidak Termasuk</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-red-600 mr-3">✗</span>
                          <span>Konsultasi hukum formal (memerlukan pengacara berlisensi)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-600 mr-3">✗</span>
                          <span>Jaminan hasil bisnis tertentu</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-600 mr-3">✗</span>
                          <span>Recovery data yang dihapus secara permanen</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-600 mr-3">✗</span>
                          <span>Perlindungan terhadap serangan siber pihak ketiga</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mt-8">
                      <h4 className="font-bold text-blue-900 mb-3">Modifikasi Layanan</h4>
                      <p className="text-blue-800 mb-3">
                        Kami berhak untuk:
                      </p>
                      <ul className="space-y-1 text-blue-700">
                        <li>• Memperbarui atau mengubah layanan dengan pemberitahuan</li>
                        <li>• Menghentikan layanan yang tidak lagi relevan</li>
                        <li>• Menambahkan fitur baru untuk meningkatkan kualitas</li>
                        <li>• Menyesuaikan harga sesuai dengan nilai pasar</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Legal Section */}
              {activeSection === 'legal' && (
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <Gavel className="w-8 h-8 text-blue-600" />
                    <h2 className="text-3xl font-bold text-gray-900">Aspek Hukum</h2>
                  </div>
                  
                  <div className="prose max-w-none">
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Syarat dan Ketentuan ini diatur oleh hukum yang berlaku di Republik Indonesia 
                      dan tunduk pada yurisdiksi pengadilan yang kompeten.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 mb-4">Hukum yang Berlaku</h3>
                    <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mb-6">
                      <h4 className="font-bold text-blue-900 mb-3">Yurisdiksi</h4>
                      <p className="text-blue-800 mb-3">
                        Syarat dan Ketentuan ini diatur oleh:
                      </p>
                      <ul className="space-y-1 text-blue-700">
                        <li>• Hukum Republik Indonesia</li>
                        <li>• Peraturan Pemerintah terkait layanan digital</li>
                        <li>• Undang-Undang Perlindungan Data Pribadi</li>
                        <li>• Undang-Undang Informasi dan Transaksi Elektronik (ITE)</li>
                      </ul>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-4">Penyelesaian Sengketa</h3>
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-green-50 p-6 rounded-lg">
                        <h4 className="font-bold text-green-900 mb-3">Musyawarah</h4>
                        <p className="text-green-800 mb-3">
                          Upaya pertama dalam menyelesaikan sengketa:
                        </p>
                        <ul className="space-y-1 text-green-700">
                          <li>• Negosiasi langsung antara pihak</li>
                          <li>• Mediasi dengan pihak netral</li>
                          <li>• Konsultasi dengan ahli terkait</li>
                          <li>• Periode penyelesaian 30 hari</li>
                        </ul>
                      </div>
                      <div className="bg-purple-50 p-6 rounded-lg">
                        <h4 className="font-bold text-purple-900 mb-3">Hukum</h4>
                        <p className="text-purple-800 mb-3">
                          Jika musyawarah gagal:
                        </p>
                        <ul className="space-y-1 text-purple-700">
                          <li>• Pengadilan Negeri Sukabumi</li>
                          <li>• Alternatif: Pengadilan Jakarta Pusat</li>
                          <li>• Arbitrase Badan Arbitrase Nasional Indonesia (BANI)</li>
                          <li>• Biaya hukum ditanggung pihak yang kalah</li>
                        </ul>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-4">Kekayaan Intelektual</h3>
                    <div className="bg-gray-50 p-6 rounded-lg mb-6">
                      <h4 className="font-bold text-gray-900 mb-3">Hak Cipta</h4>
                      <p className="text-gray-800 mb-3">
                        Semua konten, desain, dan materi di website ENCU SYAMSUDIN dilindungi:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-green-600 mr-3">✓</span>
                          <span><strong>Hak Cipta:</strong> Dilindungi undang-undang hak cipta Indonesia</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-3">✓</span>
                          <span><strong>Merek:</strong> ENCU SYAMSUDIN adalah merek terdaftar</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-3">✓</span>
                          <span><strong>Desain:</strong> Desain website dan materi visual dilindungi</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-3">✓</span>
                          <span><strong>Konten:</strong> Artikel, panduan, dan materi edukasi</span>
                        </li>
                      </ul>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-4">Perubahan Syarat</h3>
                    <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
                      <h4 className="font-bold text-yellow-900 mb-3">Prosedur Perubahan</h4>
                      <p className="text-yellow-800 mb-3">
                        Kami dapat memperbarui Syarat dan Ketentuan dengan:
                      </p>
                      <ul className="space-y-1 text-yellow-700">
                        <li>• Pemberitahuan 30 hari sebelum perubahan berlaku</li>
                        <li>• Email notifikasi ke semua pengguna terdaftar</li>
                        <li>• Pengumuman di website resmi</li>
                        <li>• Opsi untuk menolak perubahan (dapat mengakhiri layanan)</li>
                      </ul>
                      <p className="text-yellow-800 mt-3 font-medium">
                        Penggunaan layanan setelah perubahan dianggap sebagai persetujuan.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Contact Information */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Pertanyaan Hukum?</h3>
                  <p className="text-gray-700 mb-6">
                    Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini atau memerlukan 
                    klarifikasi hukum, silakan hubungi kami.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Email Legal</p>
                      <p className="text-blue-600">legal@encusyamsudin.com</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Telepon</p>
                      <p className="text-blue-600">+6282382466270</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Alamat Kantor</p>
                      <p className="text-gray-700">
                        KP BOJONG KIDUL, Desa/Kelurahan Bojong, Kec. Cikembar, Kab. Sukabumi, Provinsi Jawa Barat 43347
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Update Terakhir</p>
                      <p className="text-gray-700">November 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}