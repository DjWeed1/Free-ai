export const SUPPORTED_LANGUAGES = [
  ['de','Deutsch','🇩🇪'],['en','English','🇬🇧'],['es','Español','🇪🇸'],['fr','Français','🇫🇷'],['it','Italiano','🇮🇹'],
  ['pt','Português','🇵🇹'],['nl','Nederlands','🇳🇱'],['pl','Polski','🇵🇱'],['tr','Türkçe','🇹🇷'],['ru','Русский','🇷🇺'],
  ['uk','Українська','🇺🇦'],['ar','العربية','🇸🇦'],['he','עברית','🇮🇱'],['fa','فارسی','🇮🇷'],['hi','हिन्दी','🇮🇳'],
  ['bn','বাংলা','🇧🇩'],['ur','اردو','🇵🇰'],['zh','中文','🇨🇳'],['ja','日本語','🇯🇵'],['ko','한국어','🇰🇷'],
  ['vi','Tiếng Việt','🇻🇳'],['th','ไทย','🇹🇭'],['id','Bahasa Indonesia','🇮🇩'],['ms','Bahasa Melayu','🇲🇾']
] as const;
export type LanguageCode = typeof SUPPORTED_LANGUAGES[number][0];
export const translations: Record<LanguageCode, Record<string,string>> = {
 de:{home:'Home',prompts:'Prompts',lexicon:'Lexikon',aihub:'AI Hub',images:'Bilder',video:'Video',chat:'Chat',phone:'Telefon',website:'Websites',content:'Content',login:'Login',logout:'Logout',language:'Sprache',search:'Suche'},
 en:{home:'Home',prompts:'Prompts',lexicon:'Lexicon',aihub:'AI Hub',images:'Images',video:'Video',chat:'Chat',phone:'Phone',website:'Websites',content:'Content',login:'Login',logout:'Logout',language:'Language',search:'Search'},
 es:{home:'Inicio',prompts:'Prompts',lexicon:'Glosario',aihub:'AI Hub',images:'Imágenes',video:'Vídeo',chat:'Chat',phone:'Teléfono',website:'Web',content:'Contenido',login:'Iniciar sesión',logout:'Cerrar sesión',language:'Idioma',search:'Buscar'},
 fr:{home:'Accueil',prompts:'Prompts',lexicon:'Lexique',aihub:'AI Hub',images:'Images',video:'Vidéo',chat:'Chat',phone:'Téléphone',website:'Sites web',content:'Contenu',login:'Connexion',logout:'Déconnexion',language:'Langue',search:'Rechercher'},
 it:{home:'Home',prompts:'Prompt',lexicon:'Glossario',aihub:'AI Hub',images:'Immagini',video:'Video',chat:'Chat',phone:'Telefono',website:'Siti web',content:'Contenuti',login:'Accedi',logout:'Esci',language:'Lingua',search:'Cerca'},
 pt:{home:'Início',prompts:'Prompts',lexicon:'Glossário',aihub:'AI Hub',images:'Imagens',video:'Vídeo',chat:'Chat',phone:'Telefone',website:'Sites',content:'Conteúdo',login:'Entrar',logout:'Sair',language:'Idioma',search:'Pesquisar'},
 nl:{home:'Home',prompts:'Prompts',lexicon:'Lexicon',aihub:'AI Hub',images:'Afbeeldingen',video:'Video',chat:'Chat',phone:'Telefoon',website:'Websites',content:'Content',login:'Inloggen',logout:'Uitloggen',language:'Taal',search:'Zoeken'},
 pl:{home:'Start',prompts:'Prompty',lexicon:'Leksykon',aihub:'AI Hub',images:'Obrazy',video:'Wideo',chat:'Czat',phone:'Telefon',website:'Strony',content:'Treści',login:'Zaloguj',logout:'Wyloguj',language:'Język',search:'Szukaj'},
 tr:{home:'Ana Sayfa',prompts:'Promptlar',lexicon:'Sözlük',aihub:'AI Hub',images:'Görseller',video:'Video',chat:'Sohbet',phone:'Telefon',website:'Web siteleri',content:'İçerik',login:'Giriş',logout:'Çıkış',language:'Dil',search:'Ara'},
 ru:{home:'Главная',prompts:'Промпты',lexicon:'Глоссарий',aihub:'AI Hub',images:'Изображения',video:'Видео',chat:'Чат',phone:'Телефон',website:'Сайты',content:'Контент',login:'Войти',logout:'Выйти',language:'Язык',search:'Поиск'},
 uk:{home:'Головна',prompts:'Промпти',lexicon:'Глосарій',aihub:'AI Hub',images:'Зображення',video:'Відео',chat:'Чат',phone:'Телефон',website:'Сайти',content:'Вміст',login:'Увійти',logout:'Вийти',language:'Мова',search:'Пошук'},
 ar:{home:'الرئيسية',prompts:'المطالبات',lexicon:'المعجم',aihub:'مركز الذكاء الاصطناعي',images:'الصور',video:'الفيديو',chat:'الدردشة',phone:'الهاتف',website:'المواقع',content:'المحتوى',login:'تسجيل الدخول',logout:'تسجيل الخروج',language:'اللغة',search:'بحث'},
 he:{home:'בית',prompts:'פרומפטים',lexicon:'מילון',aihub:'מרכז AI',images:'תמונות',video:'וידאו',chat:'צ׳אט',phone:'טלפון',website:'אתרים',content:'תוכן',login:'התחברות',logout:'התנתקות',language:'שפה',search:'חיפוש'},
 fa:{home:'خانه',prompts:'پرامپت‌ها',lexicon:'واژه‌نامه',aihub:'مرکز هوش مصنوعی',images:'تصاویر',video:'ویدئو',chat:'گفتگو',phone:'تلفن',website:'وب‌سایت‌ها',content:'محتوا',login:'ورود',logout:'خروج',language:'زبان',search:'جستجو'},
 hi:{home:'होम',prompts:'प्रॉम्प्ट',lexicon:'शब्दकोश',aihub:'AI हब',images:'चित्र',video:'वीडियो',chat:'चैट',phone:'फ़ोन',website:'वेबसाइट',content:'सामग्री',login:'लॉग इन',logout:'लॉग आउट',language:'भाषा',search:'खोजें'},
 bn:{home:'হোম',prompts:'প্রম্পট',lexicon:'শব্দকোষ',aihub:'AI হাব',images:'ছবি',video:'ভিডিও',chat:'চ্যাট',phone:'ফোন',website:'ওয়েবসাইট',content:'কনটেন্ট',login:'লগইন',logout:'লগআউট',language:'ভাষা',search:'অনুসন্ধান'},
 ur:{home:'ہوم',prompts:'پرامپٹس',lexicon:'لغت',aihub:'AI مرکز',images:'تصاویر',video:'ویڈیو',chat:'چیٹ',phone:'فون',website:'ویب سائٹس',content:'مواد',login:'لاگ اِن',logout:'لاگ آؤٹ',language:'زبان',search:'تلاش'},
 zh:{home:'首页',prompts:'提示词',lexicon:'AI 词典',aihub:'AI 中心',images:'图片',video:'视频',chat:'聊天',phone:'电话',website:'网站',content:'内容',login:'登录',logout:'退出',language:'语言',search:'搜索'},
 ja:{home:'ホーム',prompts:'プロンプト',lexicon:'AI用語集',aihub:'AIハブ',images:'画像',video:'動画',chat:'チャット',phone:'電話',website:'ウェブサイト',content:'コンテンツ',login:'ログイン',logout:'ログアウト',language:'言語',search:'検索'},
 ko:{home:'홈',prompts:'프롬프트',lexicon:'AI 용어집',aihub:'AI 허브',images:'이미지',video:'비디오',chat:'채팅',phone:'전화',website:'웹사이트',content:'콘텐츠',login:'로그인',logout:'로그아웃',language:'언어',search:'검색'},
 vi:{home:'Trang chủ',prompts:'Prompt',lexicon:'Từ điển',aihub:'AI Hub',images:'Hình ảnh',video:'Video',chat:'Trò chuyện',phone:'Điện thoại',website:'Website',content:'Nội dung',login:'Đăng nhập',logout:'Đăng xuất',language:'Ngôn ngữ',search:'Tìm kiếm'},
 th:{home:'หน้าแรก',prompts:'พรอมต์',lexicon:'พจนานุกรม',aihub:'AI Hub',images:'รูปภาพ',video:'วิดีโอ',chat:'แชต',phone:'โทรศัพท์',website:'เว็บไซต์',content:'เนื้อหา',login:'เข้าสู่ระบบ',logout:'ออกจากระบบ',language:'ภาษา',search:'ค้นหา'},
 id:{home:'Beranda',prompts:'Prompt',lexicon:'Glosarium',aihub:'AI Hub',images:'Gambar',video:'Video',chat:'Obrolan',phone:'Telepon',website:'Situs web',content:'Konten',login:'Masuk',logout:'Keluar',language:'Bahasa',search:'Cari'},
 ms:{home:'Laman Utama',prompts:'Prompt',lexicon:'Glosari',aihub:'AI Hub',images:'Imej',video:'Video',chat:'Sembang',phone:'Telefon',website:'Laman web',content:'Kandungan',login:'Log masuk',logout:'Log keluar',language:'Bahasa',search:'Cari'}
};
export function detectLanguage(): LanguageCode {
 const saved=localStorage.getItem('free-ai-language') as LanguageCode|null;
 if(saved && SUPPORTED_LANGUAGES.some(x=>x[0]===saved)) return saved;
 const candidates=[...(navigator.languages||[]),navigator.language||''];
 for(const raw of candidates){const code=raw.toLowerCase().split('-')[0] as LanguageCode;if(SUPPORTED_LANGUAGES.some(x=>x[0]===code)) return code;}
 return 'en';
}
