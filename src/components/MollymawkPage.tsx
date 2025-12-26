import React from 'react';
import { Helmet } from 'react-helmet-async';

interface MollymawkPageProps {
  onBack: () => void;
  onStartFree: () => void;
  onBuy: () => void;
}

export const MollymawkPage: React.FC<MollymawkPageProps> = ({ onBack, onStartFree, onBuy }) => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Helmet>
        <title>Mollymawk Hazırlık Paketi - CadetPrep</title>
        <meta name="description" content="SunExpress pilot adayları için Mollymawk hazırlık paketi. Working Memory, Spatial Awareness, Equation Solving ve daha fazlası." />
      </Helmet>

      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2 cursor-pointer" onClick={onBack}>
              <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-md">
                C
              </div>
              <span className="font-bold text-xl text-slate-800 tracking-tight">CadetPrep</span>
            </div>
            <button 
              onClick={onBack}
              className="text-sm font-medium text-slate-600 hover:text-red-600 transition-colors"
            >
              Ana Sayfa
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Mollymawk <span className="text-red-600">Hazırlık Paketi</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Türk Hava Yolları pilot alım süreçleri için özel olarak hazırlanmış, en güncel ve gerçekçi Mollymawk simülasyon modülleri.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            { title: 'Working Memory', desc: 'Görsel ve işitsel hafıza kapasitenizi geliştirin.', icon: '🧠' },
            { title: 'Spatial Awareness', desc: 'Üç boyutlu düşünme ve yönelim yeteneğinizi artırın.', icon: '🧭' },
            { title: 'Equation Solving', desc: 'Hızlı ve doğru matematiksel işlem yapma becerisi kazanın.', icon: '➗' },
            { title: 'Monitoring', desc: 'Çoklu gösterge takibi ve dikkat yönetimi.', icon: '👁️' },
            { title: 'Science & Physics', desc: 'Temel fizik ve bilim soruları.', icon: '⚛️' },
            { title: 'English', desc: 'Havacılık İngilizcesi ve dil yeterliliği.', icon: '🇬🇧' },
          ].map((module, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="text-4xl mb-4">{module.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{module.title}</h3>
              <p className="text-slate-600">{module.desc}</p>
            </div>
          ))}
        </div>

        {/* Pricing/CTA */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
          <div className="p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Tam Paket Erişimi</h3>
            <div className="flex justify-center items-baseline mb-8">
              <span className="text-5xl font-extrabold text-slate-900">₺499</span>
              <span className="text-xl text-slate-500 ml-2">/aylık</span>
            </div>
            <ul className="text-left max-w-sm mx-auto space-y-4 mb-8">
              <li className="flex items-center gap-3 text-slate-600">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Tüm Mollymawk modüllerine sınırsız erişim
              </li>
              <li className="flex items-center gap-3 text-slate-600">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Detaylı performans analizleri
              </li>
              <li className="flex items-center gap-3 text-slate-600">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                7/24 Teknik Destek
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={onBuy}
                className="px-8 py-4 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 transition-colors shadow-lg shadow-red-200"
              >
                Hemen Satın Al
              </button>
              <button 
                onClick={onStartFree}
                className="px-8 py-4 bg-white text-slate-700 border-2 border-slate-200 rounded-xl font-bold hover:border-slate-300 hover:bg-slate-50 transition-all"
              >
                Ücretsiz Dene
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
