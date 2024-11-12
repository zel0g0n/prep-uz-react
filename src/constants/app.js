const navbarList = [
  {path:'/plan',text:"Reja"},
  {path:'/accept',text:"Qabul qilish shartlari"},
  {path:'/instruction',text:"Ko'rsatmalar"},
  {path:'/choose',text:"Saralash"},
]

const imgList = [
  {src: './python.png', alt: 'python'},  
  {src: './dart.png', alt: 'dart'},  
  {src: './html.png', alt: 'html'},  
  {src: './figma.png', alt: 'figma'},  
  {src: './flutter.png', alt: 'flutter'},  
]

const inviteDataList = [
  {
    title: 'Сайт рыбатекст поможет дизайнеру, верстальщику',
    info: "Siz IT o'quv kursini tugatdingiz yoki Internet tarmog'i orqali mustaqil o'rgandingiz, ammo ishga joylashishda qiyinchiliklarga uchrayapsizmi? Biz sizga yordam beramiz. Ushbu loyiha qobiliyatli yoshlarni topib, yetuk kadrlar bo'lib yetishishiga yordam berish uchun tashkil qilindi. ",
    src: './invite-img-2.png',
    alt: 'invite-img',
  },
  {
    title: "Aksariyat kompaniyalar ishga joylashishda sizdan ish staji va portfolio so'raydi",
    src: './invite-img-1.png',
    info: `Tabiyki endigini bu sohaga kirib kelayotgan internlarda bular   mavjud emas. Ma'lum bir ish stajiga ega bo'lish va turli xil qiziqarli lohiyalardan iborat portfolioni hosil qilish uchun ushbu loyihada amaliyot o'tashni taklif qilamiz.
    Amaliyotchilar soni chegaralangan va konkurs asosida saralab olinadi. Eng yuqori ball to'plagan 10 kishi bepul amaliyot o'tash imkoniyatiga ega bo'ladi.`,
    alt: 'invite-img2',
  }
]
const planList = [
  {duration: 1, info: `Kasbning asosiy bilimlari bilan tanishish uchun nazariy bilimlarni to'ldirish va mustahkamlash`},
  {duration: 2, info: `Nazariyani mustahkamlash uchun amaliy loyihalar bilan ishlash`},
  {duration: 3, info: `Guruhlarda ishlash, jamoada ishlash ko'nikmalarini rivojlantirish`},
  {duration: 4, info: `Mijoz uchun tayyor loyiha sifatida jamoalarda loyihalarni amalga oshirish`},
  {duration: 5, info: `Loyihani productionga tayyorlash, muammolarni hal qilishni o’rganish, rezume va portfolio tayyorlash`},
  {duration: 6, info: `O'qitishning barcha bosqichlaridan o'tib, siz yangi kasbning professionaliga aylanasiz`}
]
const digestList  = [
  {src: './seo.png', alt: 'seo', info: `Dush-jumagacha officeda 8 soatlik work-time`},
  {src: './mentor.png', alt: 'mentor', info: `Dush-jumagacha har kuni 2 soatlik mentorlardan yordam olish`},
  {src: './work.png', alt: 'work', info: `Haftada bir marta mehmon dasturchilardan masterclass`},
  {src: './database.png', alt: 'database', info: `Loyihalarni joylash uchun bepul domain va hosting beriladi`},
]


const acceptDataList = [
  {
    name: `Frontend`,
    keywords: ['front-end','programming'],
    properties: [
      `Asosiy matematik tushunchalar`,
      `Kompyuter saboqlari`,
      `Internet bilan ishlash ko’nikmasi`,
      `HTML, CSS, Javascript asosiy tushunchalar`,
      `Ishtiyoq, qiziqish, maqsad`
    ],
    icon: {src: './checkbox.png', alt: 'checkboc'},
    img: {src: './front-end.png', alt: 'frontend'}

  },
  {
    name: `Backend`,
    keywords: ['back-end','programming'],
    properties: [
      `Asosiy matematik tushunchalar`,
      `Kompyuter saboqlari`,
      `Internet bilan ishlash ko’nikmasi`,
      `Phyton yoki PHP bo’yicha dastlabki bilimlar`,
      `Ishtiyoq, qiziqish, maqsad`
    ],
    icon: {src: './checkbox.png', alt: 'checkboc'},
    img: {src: './backend.png', alt: 'backend'}

  },
  {
    name: `Flutter`,
    keywords: ['flutter','programming'],
    properties: [
      `Asosiy matematik tushunchalar`,
      `Kompyuter saboqlari`,
      `Internet bilan ishlash ko’nikmasi`,
      `Dart yoki Java dasturlash tillari bo’yicha dastlabki bilimlar`,
      `Ishtiyoq, qiziqish, maqsad`
    ],
    icon: {src: './checkbox.png', alt: 'checkboc'},
    img: {src: './mob-flutter.png', alt: 'mob-flutter'}

  },
  {
    name: `Web Design`,
    keywords: ['web design','programming'],
    properties: [
      `Asosiy matematik tushunchalar`,
      `Kompyuter saboqlari`,
      `Internet bilan ishlash ko’nikmasi`,
      `Photoshop yoki Figma dasturlarida ishlash ko’nikmasi`,
      `Ishtiyoq, qiziqish, maqsad`
    ],
    icon: {src: './checkbox.png', alt: 'checkboc'},
    img: {src: './design.png', alt: 'design'}

  }
]

const instructionList = [
  {src: './web-development.png', alt: 'development', descr: `Darslar to’liq mustaqil o’rganishga yo’naltiriladi`},
  {src: './network.png', alt: 'network', descr: `2 oyda 4 kishilik (1- front, 1-back end, 1-flutter, 1-designer) guruhlarga bo’linadi`},
  {src: './leadership.png', alt: 'leadership', descr: `Har bir guruhda bittadan leader aniqlanadi`},
  {src: './deadline.png', alt: 'deadline', descr: `Guruhlarga loyihalar bo’lib beriladi, anig dedline bilan ishlash o’rigatiladi`},
  {src: './podium.png', alt: 'podium', descr: `Guruhlar o’rtasida raqobat hosil qilinadi (ball tizimi orqali amalga oshirish mumkin)`},
  {src: './task.png', alt: 'task', descr: `Alpha-testni guruh a'zolari o'zaro bajaradi, Beta-testni boshqa guruh bajarib beradi (bunda testlovchi guruh har bir topgan xatosi uchun ball loyiha egalaridan olib beriladi)`},
]

const partnerslist = [
  {src: '/go-pharm.svg', alt: 'go-farm'},
  {src: '/prep-uz.svg', alt: 'prep-uz'},
  {src: '/aav.svg', alt: 'aav'},
  {src: '/oson-apteka.svg', alt: 'oson-apteka'},
]
export {navbarList,imgList,inviteDataList,planList,digestList,acceptDataList,instructionList,partnerslist}