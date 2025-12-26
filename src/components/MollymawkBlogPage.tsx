import React from 'react';
import { Helmet } from 'react-helmet-async';

interface MollymawkBlogPageProps {
  onNavigate: (page: string) => void;
}

export const MollymawkBlogPage: React.FC<MollymawkBlogPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-red-100 selection:text-red-900">
      <Helmet>
        <title>Mollymawk Nedir? SunExpress Adayları İçin Psikometrik Test Rehberi - CadetPrep</title>
        <meta name="description" content="Mollymawk nedir? SunExpress pilot adayları için Mollymawk psikometrik test rehberi. Testin bölümleri, önemi ve başarı ipuçları." />
        <link rel="canonical" href="https://cadetprep.com/mollymawk-nedir" />
        <meta property="og:title" content="Mollymawk Nedir? SunExpress Adayları İçin Rehber" />
        <meta property="og:description" content="SunExpress pilot adayları için kapsamlı Mollymawk rehberi. Test bölümleri ve başarı stratejileri." />
        <meta property="og:type" content="article" />
      </Helmet>

      {/* Navigation Header */}
      <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div 
              className="flex items-center gap-2 cursor-pointer group" 
              onClick={() => onNavigate('MARKETING')}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-105 transition-transform">
                C
              </div>
              <span className="font-bold text-xl text-slate-800 tracking-tight group-hover:text-red-700 transition-colors">CadetPrep</span>
            </div>
            <button 
              onClick={() => onNavigate('MARKETING')}
              className="text-sm font-medium text-slate-600 hover:text-red-600 transition-colors"
            >
              Ana Sayfaya Dön
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-slate prose-lg max-w-none">
          {/* Header Section */}
          <header className="mb-12 not-prose text-center">
            <div className="inline-block px-4 py-1.5 bg-orange-100 text-orange-800 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
              SunExpress Aday Rehberi
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
              Mollymawk Nedir? <span className="text-orange-600">SunExpress Adayları İçin</span> Kapsamlı Psikometrik Test Rehberi
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              SunExpress pilot alım süreçlerinin kritik aşamalarından biri olan Mollymawk testini, bölümlerini ve başarı stratejilerini derinlemesine inceliyoruz.
            </p>
          </header>

          {/* Legal Disclaimer */}
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8 rounded-r-xl not-prose">
            <div className="flex items-start gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div>
                <h4 className="text-amber-800 font-bold text-lg mb-1">Yasal Uyarı</h4>
                <p className="text-amber-700 text-sm leading-relaxed">
                  CadetPrep, SunExpress, Mollymawk veya herhangi bir havacılık kurumu ile resmi bir bağa sahip değildir. Bu içerik tamamen bilgilendirme amaçlı hazırlanmış olup, adayların süreç hakkında genel bilgi sahibi olmalarını hedeflemektedir. Resmi süreç ve gereklilikler için lütfen ilgili kurumların resmi duyurularını takip ediniz.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 space-y-12">
            {/* Section 1: Mollymawk Nedir? */}
            <section>
              <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-100 text-orange-600 text-xl">1</span>
                Mollymawk Nedir?
              </h2>
              <p>
                Mollymawk, havacılık endüstrisinde pilot adaylarının bilişsel ve psikomotor becerilerini ölçmek amacıyla kullanılan gelişmiş bir psikometrik test bataryasıdır. Özellikle SunExpress gibi önde gelen havayolu şirketleri, cadet pilot (yetiştirilmek üzere pilot adayı) alım süreçlerinde adayların potansiyelini değerlendirmek için bu test sisteminden faydalanmaktadır.
              </p>
              <p>
                Test, adayların sadece teorik bilgi düzeyini değil, aynı zamanda stres altında karar verme, çoklu görev yönetimi (multitasking), uzamsal farkındalık ve hafıza gibi pilotluk mesleğinin temelini oluşturan yetkinlikleri de analiz eder. Mollymawk, bilgisayar tabanlı bir değerlendirme aracıdır ve adayların belirli modüllerdeki performanslarını objektif verilerle puanlar.
              </p>
              <p>
                Bu testin temel amacı, adayın kokpit ortamının getirdiği yüksek zihinsel iş yüküyle başa çıkıp çıkamayacağını önceden tespit etmektir. Havacılık güvenliğinin en üst düzeyde tutulması hedeflendiğinden, Mollymawk gibi testler eleme sürecinin en kritik bariyerlerinden biri olarak kabul edilir.
              </p>
            </section>

            {/* Section 2: Testin Bölümleri Nelerdir? */}
            <section>
              <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-100 text-orange-600 text-xl">2</span>
                Mollymawk Testinin Bölümleri
              </h2>
              <p>
                Mollymawk testi, farklı bilişsel yetenekleri hedefleyen çeşitli modüllerden oluşur. Her bir modül, pilotluk mesleğinin gerektirdiği spesifik bir beceriyi ölçmek üzere tasarlanmıştır. İşte en yaygın karşılaşılan Mollymawk modülleri:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-slate-800 text-lg mb-2">Working Memory (Çalışma Belleği)</h3>
                  <p className="text-slate-600 text-sm">
                    Anlık bilgileri akılda tutma ve işleme kapasitesini ölçer. Pilotların ATC talimatlarını, uçuş parametrelerini ve değişen durumları kısa süreli hafızalarında tutup operasyonel kararlara dönüştürmesi gerekir.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-slate-800 text-lg mb-2">Spatial Awareness (Uzamsal Farkındalık)</h3>
                  <p className="text-slate-600 text-sm">
                    Üç boyutlu düşünme ve yönelim yeteneğini test eder. Uçağın uzaydaki konumu, gösterge okuma ve navigasyon becerileri için kritik öneme sahiptir. Küp döndürme veya yön bulma görevleri içerebilir.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-slate-800 text-lg mb-2">Equation Solving (Denklem Çözme)</h3>
                  <p className="text-slate-600 text-sm">
                    Temel matematiksel işlemleri hızlı ve doğru yapabilme yeteneğini ölçer. Kokpitte yakıt hesabı, alçalma planlaması gibi durumlarda pratik matematik zekası hayati önem taşır. Sorular genellikle karmaşık olmayan ancak zamanla yarışılan dört işlem, yüzde ve oran-orantı problemlerinden oluşur. Hesap makinesi kullanımı yasaktır, bu da zihinsel aritmetik becerisinin önemini artırır.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-slate-800 text-lg mb-2">Monitoring & Multitasking</h3>
                  <p className="text-slate-600 text-sm">
                    Aynı anda birden fazla göstergeyi takip etme ve uyaranlara doğru tepki verme becerisini sınar. Dikkatin bölünmesi ve önceliklendirilmesi (prioritization) bu modülün odak noktasıdır. Adaydan, ana bir görevi yerine getirirken (örneğin bir ibreyi merkezde tutmak), çevresel uyaranlara (yanıp sönen ışıklar veya sesli ikazlar) tepki vermesi beklenir. Bu, gerçek uçuşta uçağı uçururken (aviate) telsizi dinlemek (communicate) gibidir.
                  </p>
                </div>
              </div>

              <p>
                Bu modüllerin her biri, adayın zihinsel dayanıklılığını ve bilişsel esnekliğini zorlayacak şekilde kurgulanmıştır. Soruların zorluk seviyesi genellikle adaptiftir veya zaman baskısı altında artan bir ivmeye sahiptir.
              </p>
            </section>

            {/* Section: Mollymawk vs DLR-1 */}
            <section>
              <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-100 text-orange-600 text-xl">3</span>
                Mollymawk vs DLR-1: Farklar Nelerdir?
              </h2>
              <p>
                Pilot adaylarının en sık sorduğu sorulardan biri, Mollymawk ile Alman Havacılık ve Uzay Merkezi (DLR) tarafından geliştirilen DLR-1 testi arasındaki farklardır. Her iki test de benzer bilişsel yetenekleri ölçse de, uygulama ve yapı bakımından bazı temel farklılıklar içerir:
              </p>
              <div className="overflow-hidden border border-slate-200 rounded-xl my-6 not-prose">
                <table className="min-w-full divide-y divide-slate-200 bg-white">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Özellik</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Mollymawk</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">DLR-1</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">Erişim</td>
                      <td className="px-6 py-4 text-sm text-slate-600">Online / Uzaktan erişim mümkündür</td>
                      <td className="px-6 py-4 text-sm text-slate-600">Genellikle sınav merkezinde yapılır</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">Süre</td>
                      <td className="px-6 py-4 text-sm text-slate-600">Daha kısa ve kompakt modüller</td>
                      <td className="px-6 py-4 text-sm text-slate-600">Tam gün süren kapsamlı batarya</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">Odak</td>
                      <td className="px-6 py-4 text-sm text-slate-600">Psikomotor ve anlık tepki hızı</td>
                      <td className="px-6 py-4 text-sm text-slate-600">Genel yetenek ve bilgi modülleri (Fizik, Mat.)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                SunExpress, dönem dönem süreçlerinde değişikliğe giderek bu iki testten birini veya kombinasyonunu kullanabilir. Bu nedenle adayların her iki test formatına da aşina olması, sürecin sürprizlerine karşı hazırlıklı olmalarını sağlar. Mollymawk, özellikle online ön eleme aşamalarında pratikliği nedeniyle tercih edilmektedir.
              </p>
            </section>

            {/* Section 4: SunExpress Sürecindeki Önemi (Renumbered) */}
            <section>
              <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-100 text-orange-600 text-xl">4</span>
                SunExpress Sürecindeki Önemi
              </h2>
              <p>
                SunExpress'in pilot aday seçim sürecinde (DLR-1 veya benzeri süreçlerin alternatifi veya tamamlayıcısı olarak) Mollymawk testi belirleyici bir rol oynar. SunExpress, programa kabul edeceği adaylarda sadece akademik başarı değil, aynı zamanda yüksek durumsal farkındalık ve hızlı problem çözme yeteneği aramaktadır.
              </p>
              <p>
                Sürecin bu aşamasında başarısız olan adaylar genellikle bir sonraki aşama olan mülakatlara veya uçuş eğitimine geçemezler. Dolayısıyla Mollymawk, "tamam ya da devam" niteliğinde bir eleme aracıdır. Başarı kriterleri şeffaf olmakla birlikte, havayolunun o dönemki ihtiyaçlarına ve genel aday profiline göre baraj puanları değişkenlik gösterebilir.
              </p>
              <p>
                Bu testin bir diğer önemi de, adayın eğitime ne kadar yatkın olduğunu (trainability) göstermesidir. Mollymawk testinde yüksek performans gösteren adayların, uçuş eğitimi sırasında prosedürleri daha hızlı öğrendiği ve simülatör eğitimlerinde daha başarılı olduğu gözlemlenmiştir.
              </p>
            </section>

            {/* Section 5: Başarı İçin İpuçları (Renumbered) */}
            <section>
              <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-100 text-orange-600 text-xl">5</span>
                Mollymawk Sınavında Başarı İçin İpuçları
              </h2>
              <p>
                Mollymawk gibi zorlu bir psikometrik testte başarılı olmak, doğuştan gelen yetenek kadar disiplinli bir hazırlık sürecini de gerektirir. İşte adayların dikkate alması gereken stratejik ipuçları:
              </p>
              
              <ul className="list-none space-y-6 pl-0">
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold">✓</div>
                  <div>
                    <strong className="block text-slate-900 mb-1">Erken Hazırlık ve Düzenli Pratik</strong>
                    <p className="m-0">Sınav tarihinden en az 1-2 ay önce çalışmaya başlamak, beynin test formatına alışmasını sağlar. Nöroplastisite ilkesi gereği, düzenli pratik yapmak bilişsel becerilerin gelişmesine yardımcı olur. Günde 30-45 dakikalık odaklanmış çalışmalar, son gün yapılan uzun çalışmalardan daha verimlidir.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold">✓</div>
                  <div>
                    <strong className="block text-slate-900 mb-1">Zayıf Yönlerinize Odaklanın</strong>
                    <p className="m-0">Tüm modüllerde eşit derecede iyi olmanız beklenmez, ancak zayıf olduğunuz bir modül genel skorunuzu aşağı çekebilir. İlk denemelerinizde zorlandığınız alanları (örneğin uzamsal farkındalık) tespit edip, bu alanlara özel egzersizler yapın.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold">✓</div>
                  <div>
                    <strong className="block text-slate-900 mb-1">Uyku ve Beslenme Düzeni</strong>
                    <p className="m-0">Bilişsel performans, fiziksel durumla doğrudan ilişkilidir. Sınavdan önceki günlerde kaliteli uyku uyumak ve dengeli beslenmek, dikkat sürenizi ve reaksiyon hızınızı artırır. Kafein tüketimini dengede tutmak, sınav sırasındaki heyecan kontrolü için önemlidir.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold">✓</div>
                  <div>
                    <strong className="block text-slate-900 mb-1">Simülasyon Yazılımları Kullanın</strong>
                    <p className="m-0">Sınav formatına birebir uygun simülasyonlar kullanmak, karşılaşacağınız arayüze ve soru tiplerine aşina olmanızı sağlar. Bu, sınav stresiyle başa çıkmanın en etkili yoludur. Bilinmezlik korku yaratır; simülasyonlar bu bilinmezliği ortadan kaldırır.</p>
                  </div>
                </li>
              </ul>
            </section>
          </div>

          {/* CTA Section */}
          <div className="mt-16 mb-8">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 text-center text-white not-prose shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-extrabold mb-4 tracking-tight">SunExpress Hayallerinize Bir Adım Daha Yaklaşın</h3>
                <p className="mb-8 text-slate-300 max-w-2xl mx-auto text-lg leading-relaxed">
                  Mollymawk sürecine profesyonel bir şekilde hazırlanmak ve rakiplerinizden ayrışmak için özel olarak geliştirdiğimiz hazırlık paketini keşfedin.
                </p>
                <button 
                  onClick={() => onNavigate('MOLLYMAWK_PRODUCT')}
                  className="px-10 py-4 bg-orange-600 text-white rounded-xl font-bold text-lg hover:bg-orange-700 hover:scale-105 transition-all shadow-lg inline-flex items-center gap-2"
                >
                  Mollymawk Paketini İncele
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </button>
              </div>
            </div>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} CadetPrep. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  );
};

export default MollymawkBlogPage;
