'use client';

import { useState } from 'react';
import { ArrowLeft, Shield, Eye, Lock, UserCheck, Database } from 'lucide-react';
import Link from 'next/link';

export default function Privacy() {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', title: 'Ikhtisar', icon: Eye },
    { id: 'collection', title: 'Pengumpulan Data', icon: Database },
    { id: 'usage', title: 'Penggunaan Data', icon: Lock },
    { id: 'rights', title: 'Hak Privasi Anda', icon: UserCheck },
    { id: 'security', title: 'Keamanan Data', icon: Shield },
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
                  <p className="text-xs text-gray-600">Privacy Policy</p>
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
              <h3 className="text-lg font-bold text-gray-900 mb-4">Navigasi Kebijakan</h3>
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
                    <Eye className="w-8 h-8 text-blue-600" />
                    <h2 className="text-3xl font-bold text-gray-900">Ikhtisar Privasi</h2>
                  </div>
                  
                  <div className="prose max-w-none">
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Di <strong>ENCU SYAMSUDIN</strong>, kami sangat memprioritaskan privasi dan keamanan data pribadi Anda. 
                      Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, melindungi, 
                      dan membagikan informasi pribadi Anda saat menggunakan layanan kami.
                    </p>

                    <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg my-6">
                      <h3 className="text-xl font-bold text-blue-900 mb-3">Komitmen Kami</h3>
                      <p className="text-blue-800">
                        Kami berkomitmen untuk melindungi privasi Anda dan memastikan bahwa data pribadi Anda 
                        ditangani dengan transparansi, integritas, dan kepatuhan terhadap regulasi yang berlaku.
                      </p>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-4">Informasi yang Kami Kumpulkan</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-3">•</span>
                        <span><strong>Informasi Identifikasi Pribadi:</strong> Nama, alamat email, nomor telepon, alamat fisik</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-3">•</span>
                        <span><strong>Informasi Kontak:</strong> Detail komunikasi untuk layanan pelanggan</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-3">•</span>
                        <span><strong>Informasi Penggunaan:</strong> Cara Anda berinteraksi dengan layanan kami</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-3">•</span>
                        <span><strong>Informasi Teknis:</strong> Alamat IP, jenis browser, informasi perangkat</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Collection Section */}
              {activeSection === 'collection' && (
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <Database className="w-8 h-8 text-blue-600" />
                    <h2 className="text-3xl font-bold text-gray-900">Pengumpulan Data</h2>
                  </div>
                  
                  <div className="prose max-w-none">
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Kami mengumpulkan informasi pribadi Anda melalui berbagai metode untuk menyediakan layanan terbaik.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 mb-4">Metode Pengumpulan</h3>
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h4 className="font-bold text-gray-900 mb-3">Langsung dari Anda</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Formulir kontak dan pendaftaran</li>
                          <li>• Komunikasi email dan telepon</li>
                          <li>• Konsultasi dan meeting</li>
                          <li>• Feedback dan survei</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h4 className="font-bold text-gray-900 mb-3">Otomatis</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Cookies dan teknologi tracking</li>
                          <li>• Log server dan analytics</li>
                          <li>• Interaksi website</li>
                          <li>• Penggunaan layanan digital</li>
                        </ul>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-4">Legalitas Pengumpulan</h3>
                    <p className="text-gray-700 mb-4">
                      Kami hanya mengumpulkan data yang diperlukan untuk:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-green-600 mr-3">✓</span>
                        <span>Menyediakan layanan yang Anda minta</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-3">✓</span>
                        <span>Memenuhi kewajiban hukum dan regulasi</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-3">✓</span>
                        <span>Melindungi keamanan dan integritas layanan</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-3">✓</span>
                        <span>Kepentingan legitimate yang seimbang</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Usage Section */}
              {activeSection === 'usage' && (
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <Lock className="w-8 h-8 text-blue-600" />
                    <h2 className="text-3xl font-bold text-gray-900">Penggunaan Data</h2>
                  </div>
                  
                  <div className="prose max-w-none">
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Data pribadi Anda digunakan secara eksklusif untuk tujuan yang telah ditentukan 
                      dan dengan persetujuan Anda.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 mb-4">Tujuan Penggunaan</h3>
                    <div className="space-y-4">
                      <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
                        <h4 className="font-bold text-blue-900 mb-2">Layanan Pelanggan</h4>
                        <p className="text-blue-800">
                          Menyediakan dukungan, menjawab pertanyaan, dan menangani permintaan Anda secara efisien.
                        </p>
                      </div>
                      <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg">
                        <h4 className="font-bold text-green-900 mb-2">Peningkatan Layanan</h4>
                        <p className="text-green-800">
                          Menganalisis penggunaan untuk meningkatkan kualitas dan pengalaman layanan kami.
                        </p>
                      </div>
                      <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-lg">
                        <h4 className="font-bold text-purple-900 mb-2">Komunikasi</h4>
                        <p className="text-purple-800">
                          Mengirim informasi penting, update layanan, dan materi promosi yang relevan.
                        </p>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">Batasan Penggunaan</h3>
                    <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
                      <p className="text-red-800 font-medium mb-3">Kami TIDAK akan:</p>
                      <ul className="space-y-2 text-red-700">
                        <li>• Menjual data pribadi Anda kepada pihak ketiga</li>
                        <li>• Menggunakan data untuk tujuan yang tidak relevan</li>
                        <li>• Membagikan data tanpa persetujuan Anda</li>
                        <li>• Menyimpan data lebih lama dari yang diperlukan</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Rights Section */}
              {activeSection === 'rights' && (
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <UserCheck className="w-8 h-8 text-blue-600" />
                    <h2 className="text-3xl font-bold text-gray-900">Hak Privasi Anda</h2>
                  </div>
                  
                  <div className="prose max-w-none">
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Sebagai pemilik data, Anda memiliki hak penuh atas informasi pribadi Anda sesuai 
                      dengan regulasi privasi yang berlaku.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 mb-4">Hak-Hak Anda</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
                        <h4 className="font-bold text-blue-900 mb-3">Hak Akses</h4>
                        <p className="text-blue-800 mb-3">
                          Anda berhak mengetahui data apa yang kami simpan tentang Anda.
                        </p>
                        <ul className="text-sm text-blue-700 space-y-1">
                          <li>• Meminta salinan data pribadi</li>
                          <li>• Mengetahui tujuan penggunaan</li>
                          <li>• Informasi pihak ketiga yang menerima data</li>
                        </ul>
                      </div>
                      <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
                        <h4 className="font-bold text-green-900 mb-3">Hak Koreksi</h4>
                        <p className="text-green-800 mb-3">
                          Anda dapat memperbaiki data yang tidak akurat atau tidak lengkap.
                        </p>
                        <ul className="text-sm text-green-700 space-y-1">
                          <li>• Memperbarui informasi kontak</li>
                          <li>• Mengkoreksi data yang salah</li>
                          <li>• Melengkapi informasi yang kurang</li>
                        </ul>
                      </div>
                      <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
                        <h4 className="font-bold text-purple-900 mb-3">Hak Penghapusan</h4>
                        <p className="text-purple-800 mb-3">
                          Anda dapat meminta penghapusan data pribadi Anda dalam kondisi tertentu.
                        </p>
                        <ul className="text-sm text-purple-700 space-y-1">
                          <li>• Data tidak lagi diperlukan</li>
                          <li>• Menarik persetujuan</li>
                          <li>• Pengolahan data ilegal</li>
                        </ul>
                      </div>
                      <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg">
                        <h4 className="font-bold text-orange-900 mb-3">Hak Pembatasan</h4>
                        <p className="text-orange-800 mb-3">
                          Anda dapat membatasi pengolahan data pribadi Anda.
                        </p>
                        <ul className="text-sm text-orange-700 space-y-1">
                          <li>• Menantang keakuratan data</li>
                          <li>• Pengolahan yang tidak perlu</li>
                          <li>• Keperluan hukum tertentu</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-gray-100 p-6 rounded-lg mt-8">
                      <h4 className="font-bold text-gray-900 mb-3">Cara Menggunakan Hak Anda</h4>
                      <p className="text-gray-700 mb-4">
                        Untuk menggunakan hak-hak Anda, silakan hubungi kami melalui:
                      </p>
                      <div className="space-y-2 text-gray-700">
                        <p><strong>Email:</strong> privacy@encusyamsudin.com</p>
                        <p><strong>Telepon:</strong> +6282382466270</p>
                        <p><strong>Alamat:</strong> KP BOJONG KIDUL, Desa/Kelurahan Bojong, Kec. Cikembar, Kab. Sukabumi, Provinsi Jawa Barat 43347</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Security Section */}
              {activeSection === 'security' && (
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <Shield className="w-8 h-8 text-blue-600" />
                    <h2 className="text-3xl font-bold text-gray-900">Keamanan Data</h2>
                  </div>
                  
                  <div className="prose max-w-none">
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Kami menerapkan standar keamanan tertinggi untuk melindungi data pribadi Anda 
                      dari akses tidak sah, penggunaan yang salah, atau kebocoran.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 mb-4">Teknologi Keamanan</h3>
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                      <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Lock className="w-8 h-8 text-white" />
                        </div>
                        <h4 className="font-bold text-blue-900 mb-2">Enkripsi</h4>
                        <p className="text-blue-800 text-sm">
                          Data dienkripsi selama transmisi dan penyimpanan
                        </p>
                      </div>
                      <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                        <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Shield className="w-8 h-8 text-white" />
                        </div>
                        <h4 className="font-bold text-green-900 mb-2">Firewall</h4>
                        <p className="text-green-800 text-sm">
                          Perlindungan jaringan berlapis terhadap ancaman eksternal
                        </p>
                      </div>
                      <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                        <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                          <UserCheck className="w-8 h-8 text-white" />
                        </div>
                        <h4 className="font-bold text-purple-900 mb-2">Access Control</h4>
                        <p className="text-purple-800 text-sm">
                          Akses terbatas hanya untuk personel yang berwenang
                        </p>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-4">Prosedur Keamanan</h3>
                    <div className="space-y-4">
                      <div className="border-l-4 border-blue-600 pl-6 py-4">
                        <h4 className="font-bold text-gray-900 mb-2">Audit Rutin</h4>
                        <p className="text-gray-700">
                          Kami melakukan audit keamanan berkala untuk mengidentifikasi dan mengatasi potensi kerentanan.
                        </p>
                      </div>
                      <div className="border-l-4 border-green-600 pl-6 py-4">
                        <h4 className="font-bold text-gray-900 mb-2">Pelatihan Staff</h4>
                        <p className="text-gray-700">
                          Semua karyawan menerima pelatihan keamanan data dan privasi secara berkala.
                        </p>
                      </div>
                      <div className="border-l-4 border-purple-600 pl-6 py-4">
                        <h4 className="font-bold text-gray-900 mb-2">Incident Response</h4>
                        <p className="text-gray-700">
                          Protokol respons cepat untuk menangani pelanggaran keamanan jika terjadi.
                        </p>
                      </div>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mt-8">
                      <h4 className="font-bold text-yellow-900 mb-3">Pelaporan Insiden</h4>
                      <p className="text-yellow-800 mb-3">
                        Jika Anda mencurigai adanya pelanggaran keamanan atau penyalahgunaan data, 
                        segera laporkan kepada kami:
                      </p>
                      <div className="space-y-2 text-yellow-700">
                        <p><strong>Security Email:</strong> security@encusyamsudin.com</p>
                        <p><strong>Hotline:</strong> +6282382466270</p>
                        <p><strong>Response Time:</strong> 24 jam untuk insiden kritis</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Contact Information */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Pertanyaan tentang Privasi?</h3>
                  <p className="text-gray-700 mb-6">
                    Jika Anda memiliki pertanyaan tentang kebijakan privasi kami atau ingin menggunakan hak privasi Anda, 
                    jangan ragu untuk menghubungi kami.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Email Privasi</p>
                      <p className="text-blue-600">privacy@encusyamsudin.com</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Telepon</p>
                      <p className="text-blue-600">+6282382466270</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Alamat</p>
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