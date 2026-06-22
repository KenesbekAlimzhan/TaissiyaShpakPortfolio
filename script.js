/* ========================
   LANGUAGES LIST
======================== */
const LANGS = [
  { code:'ru', flag:'🇷🇺', label:'Русский',    code2:'RU' },
  { code:'en', flag:'🇬🇧', label:'English',     code2:'EN' },
  { code:'kk', flag:'🇰🇿', label:'Қазақша',    code2:'KZ' },
  { code:'de', flag:'🇩🇪', label:'Deutsch',     code2:'DE' },
  { code:'fr', flag:'🇫🇷', label:'Français',    code2:'FR' },
  { code:'es', flag:'🇪🇸', label:'Español',     code2:'ES' },
  { code:'it', flag:'🇮🇹', label:'Italiano',    code2:'IT' },
  { code:'pt', flag:'🇧🇷', label:'Português',   code2:'PT' },
  { code:'zh', flag:'🇨🇳', label:'中文',         code2:'ZH' },
  { code:'ja', flag:'🇯🇵', label:'日本語',        code2:'JA' },
  { code:'ko', flag:'🇰🇷', label:'한국어',        code2:'KO' },
  { code:'ar', flag:'🇸🇦', label:'العربية',     code2:'AR' },
  { code:'tr', flag:'🇹🇷', label:'Türkçe',      code2:'TR' },
  { code:'pl', flag:'🇵🇱', label:'Polski',       code2:'PL' },
  { code:'uk', flag:'🇺🇦', label:'Українська',  code2:'UA' },
];

/* ========================
   TRANSLATIONS
======================== */
const T = {
  ru:{
    page_title:'Шпак Таисия — Портфолио 2026',
    nav__logo: 'Таисия Шпак',
    nav_about:'Обо мне',nav_works:'Работы',nav_contact:'Контакт',
    hero_word:'ПОРТФОЛИО',
    hero_role:'графический дизайнер',hero_btn:'Смотреть работы',
    about_title:'Обо мне',about_role:'графический дизайнер, нейро-креатор',
    about_p1:'Меня зовут Шпак Таисия. Мой путь в дизайне начался с работы над инфографикой для маркетплейсов, где с марта 2024 по август 2025 года я училась выделять главное в визуальном шуме и создавать контент, который продает. После этого я также занималась разработкой логотипов для брендов, помогая формировать их визуальную идентичность и узнаваемость.',
    about_p2:'С июля 2025 года я перешла в сферу многостраничного дизайна и верстки, став дизайнером-верстальщиком. Здесь я занимаюсь разработкой концепций для фотокниг, адаптацией макетов под онлайн-конструкторы и тщательной предпечатной подготовкой.',
    about_p3:'Углубляю знания в Томском государственном университете на специальности «Реклама и связи с общественностью».',
    stat_years:'года опыта',stat_projects:'проектов',stat_tools:'инструментов',
    works_title:'Мои работы',
    cat1_title:'Карточки товара',cat1_desc:'Каждый макет — гармоничное сочетание функциональности и стиля. От лаконичного минимализма до динамичных композиций.',
    cat2_title:'Логотип',cat2_desc:'Портфолио логотипов для компаний различных отраслей. Анализ бренда, аудитории, конкурентной среды.',
    cat3_title:'Полиграфия',cat3_desc:'Полиграфический дизайн и вёрстка. Выпускные фотоальбомы, подготовленные к печати.',
    cat4_title:'Презентации',cat4_desc:'Создание презентаций с нуля и по шаблону. Примеры для выступлений.',
    card1_1:'Наушники',card1_2:'Кроссовки',card1_3:'Мышь',card1_4:'Видеорегистратор',
    card1_5:'Тушь',card1_6:'Спрей',card1_7:'Сковорода',card1_8:'Гель для душа',
    card3_2:'Разворот альбома',
    card4_1:'Операция Зачёт',card4_2:'Анализ ситуации',card4_3:'Стратегия',
    card4_4:'Тактика',card4_5:'Аргументация',card4_6:'Свои правила',
    closing_title:'Заключение',
    closing_p1:'Каждый проект в этом портфолио — это часть моего опыта и моего взгляда на дизайн. Я стремлюсь создавать работы, к которым хочется возвращаться: понятные, аккуратные и визуально цельные.',
    closing_p2:' Для меня дизайн — это не только про красоту, но и про смысл. Важно, чтобы пользователь с первых секунд понимал, что ему предлагают, и чувствовал себя уверенно в интерфейсе. Я думаю о логике, структуре и том, как через визуал передать характер и ценности бренда.',
    closing_p3:'В своей работе я стараюсь находить баланс между эстетикой и задачами бизнеса, уделяя внимание деталям, которые формируют общее впечатление.',
    contact_title:'Буду рада\nсотрудничеству',
    contact_email_label:'Написать на почту',
    footer_role:'графический дизайнер · нейро-креатор',
    logo_fruktisy_title:'Фруктисы',logo_fruktisy_desc:'Логотип и фирменный знак для бренда «Фруктис», сушёные фрукты',
    logo_shelter_title:'Shelter',logo_shelter_desc:'Логотип и фирменный знак для бренда «Shelter», кофейня'
  },
  en:{
    page_title:'Taissiya Shpak — Portfolio 2026',
    nav__logo: 'Taissiya Shpak',
    nav_about:'About',nav_works:'Works',nav_contact:'Contact',
    hero_word:'PORTFOLIO',
    hero_role:'graphic designer',hero_btn:'View works',
    about_title:'About me',about_role:'graphic designer, neuro-creator',
    about_p1:'My name is Taisiya Shpak. My journey in design began with working on infographics for marketplaces, where from March 2024 to August 2025 I learned to highlight what matters most in visual noise and create content that sells. After that, I also worked on developing logos for brands, helping shape their visual identity and recognition.',
    about_p2:'Since July 2025, I have moved into multi-page design and layout, becoming a layout designer. In this role, I work on developing concepts for photobooks, adapting layouts for online design tools, and handling thorough pre-press preparation.',
    about_p3:'I am currently deepening my knowledge at Tomsk State University, majoring in Advertising and Public Relations.',
    stat_years:'years exp.',stat_projects:'projects',stat_tools:'tools',
    works_title:'My works',
    cat1_title:'Product cards',cat1_desc:"Each layout is a harmonious blend of functionality and style. Drawing on current trends and category-specific nuances: from clean minimalism to dynamic compositions with color accents.",
    cat2_title:'Logo',cat2_desc:"Logo portfolio for companies across various industries. The approach is based on the clients preferences and a comprehensive analysis: brand positioning, target audience, and competitive landscape.",
    cat3_title:'Print design',cat3_desc:'Print design and layout for various formats. The selection includes examples of graduation photo albums. All layouts are print-ready: technical requirements are observed (bleeds, color profiles, fonts), and material-specific characteristics are taken into account.',
    cat4_title:'Presentations',cat4_desc:'Creating presentations from scratch and based on a ready-made template (for those who work within a strict template). The selection includes examples of work for presentations/speeches.',
    card1_1:'Headphones',card1_2:'Sneakers',card1_3:'Mouse',card1_4:'Dashcam',
    card1_5:'Mascara',card1_6:'Spray',card1_7:'Pan',card1_8:'Shower gel',
    card3_2:'Album spread',
    card4_1:'Operation Grade',card4_2:'Situation analysis',card4_3:'Strategy',
    card4_4:'Tactics',card4_5:'Argumentation',card4_6:'Own rules',
    closing_title:'Conclusion',
    closing_p1:'Each project in this portfolio is part of my experience and my perspective on design. I strive to create work that people want to come back to: clear, polished, and visually cohesive.',
    closing_p2:"For me, design isn't just about beauty — it's also about meaning. It's important that users understand what's being offered from the very first seconds and feel confident navigating the interface. I think about logic, structure, and how to convey a brand's character and values through visuals.",
    closing_p3:'In my work, I try to find a balance between aesthetics and business goals, paying close attention to the details that shape the overall impression.',
    contact_title:'Happy to\ncollaborate',
    contact_email_label:'Send an email',
    footer_role:'graphic designer · neuro-creator',
    logo_fruktisy_title:'Fruktisy',logo_fruktisy_desc:'Logo and brand mark for Fruktisy — dried fruits',
    logo_shelter_title:'Shelter',logo_shelter_desc:'Logo and brand mark for Shelter — coffee shop'
  },
  kk:{
    page_title:'Шпак Таисия — Портфолио 2026',
    nav__logo: 'Таисия Шпак',
    nav_about:'Мен туралы',nav_works:'Жұмыстар',nav_contact:'Байланыс',
    hero_word:'ПОРТФОЛИО',
    hero_role:'графикалық дизайнер',hero_btn:'Жұмыстарды қарау',
    about_title:'Мен туралы',about_role:'графикалық дизайнер, нейро-креатор',
    about_p1:'Менің атым Шпак Таисия. Дизайн жолым маркетплейстер үшін инфографика жасаудан басталды.',
    about_p2:'Содан кейін брендтерге логотип жасадым. 2025 жылдың шілдесінен бастап көп беттік дизайнмен айналысамын.',
    about_p3:'Томск мемлекеттік университетінде Жарнама және байланыс мамандығы бойынша оқимын.',
    stat_years:'жыл тәжірибе',stat_projects:'жоба',stat_tools:'құрал',
    works_title:'Менің жұмыстарым',
    cat1_title:'Өнім карточкалары',cat1_desc:'Әр макет функционалдылық пен стильдің үйлесімі.',
    cat2_title:'Логотип',cat2_desc:'Әртүрлі салалардағы компаниялар үшін логотиптер.',
    cat3_title:'Баспа дизайны',cat3_desc:'Баспа дизайны мен беттеу. Түлектер фотоальбомдары.',
    cat4_title:'Презентациялар',cat4_desc:'Нөлден немесе үлгіден презентация жасау.',
    card1_1:'Құлаққаптар',card1_2:'Кроссовкалар',card1_3:'Тышқан',card1_4:'Бейнережистратор',
    card1_5:'Тушь',card1_6:'Спрей',card1_7:'Табаөқшем',card1_8:'Душ гелі',
    card3_2:'Альбом беті',
    card4_1:'Операция Сынақ',card4_2:'Жағдай талдауы',card4_3:'Стратегия',
    card4_4:'Тактика',card4_5:'Дәлелдеу',card4_6:'Өз ережелерің',
    closing_title:'Қорытынды',
    closing_p1:'Портфолиодағы әрбір жоба менің тәжірибемнің бөлігі.',
    closing_p2:'Мен үшін дизайн тек сұлулық емес, мағына да.',
    closing_p3:'Эстетика мен бизнес міндеттері арасындағы тепе-теңдікті іздеймін.',
    contact_title:'Ынтымақтасуға\nдайынмын',
    contact_email_label:'Поштаға жазу',
    footer_role:'графикалық дизайнер · нейро-креатор',
    logo_fruktisy_title:'Фруктисы',logo_fruktisy_desc:'Фруктисы бренді үшін логотип — кептірілген жемістер',
    logo_shelter_title:'Shelter',logo_shelter_desc:'Shelter бренді үшін логотип — кофейня'
  },
  de:{
    page_title:'Taissija Shpak — Portfolio 2026',
    nav__logo: 'Taissija Shpak',
    nav_about:'Über mich',nav_works:'Arbeiten',nav_contact:'Kontakt',
    hero_word:'PORTFOLIO',
    hero_role:'Grafikdesignerin',hero_btn:'Arbeiten ansehen',
    about_title:'Über mich',about_role:'Grafikdesignerin, Neuro-Kreatorin',
    about_p1:'Mein Name ist Taisia Shpak. Mein Weg im Design begann mit Infografiken für Marktplätze von März 2024 bis August 2025.',
    about_p2:'Danach entwickelte ich Logos für Marken. Seit Juli 2025 arbeite ich im mehrseitigen Design.',
    about_p3:'Ich vertiefe mein Wissen an der Staatlichen Universität Tomsk in Werbung und PR.',
    stat_years:'Jahre Erfahrung',stat_projects:'Projekte',stat_tools:'Tools',
    works_title:'Meine Arbeiten',
    cat1_title:'Produktkarten',cat1_desc:'Jedes Layout — eine Mischung aus Funktionalität und Stil.',
    cat2_title:'Logo',cat2_desc:'Logo-Portfolio für Unternehmen verschiedener Branchen.',
    cat3_title:'Druckdesign',cat3_desc:'Druckdesign für verschiedene Formate. Abschlussalben.',
    cat4_title:'Präsentationen',cat4_desc:'Präsentationen von Grund auf oder nach Vorlage.',
    card1_1:'Kopfhörer',card1_2:'Sneaker',card1_3:'Maus',card1_4:'Dashcam',
    card1_5:'Mascara',card1_6:'Spray',card1_7:'Pfanne',card1_8:'Duschgel',
    card3_2:'Albumaufschlag',
    card4_1:'Operation Note',card4_2:'Situationsanalyse',card4_3:'Strategie',
    card4_4:'Taktik',card4_5:'Argumentation',card4_6:'Eigene Regeln',
    closing_title:'Fazit',
    closing_p1:'Jedes Projekt ist Teil meiner Erfahrung und Designvision.',
    closing_p2:'Design ist für mich nicht nur Schönheit, sondern auch Bedeutung.',
    closing_p3:'Ich suche Balance zwischen Ästhetik und Geschäftszielen.',
    contact_title:'Freue mich auf\nZusammenarbeit',
    contact_email_label:'E-Mail schreiben',
    footer_role:'Grafikdesignerin · Neuro-Kreatorin',
    logo_fruktisy_title:'Fruktisy',logo_fruktisy_desc:'Logo für Fruktisy — getrocknete Früchte',
    logo_shelter_title:'Shelter',logo_shelter_desc:'Logo für Shelter — Café'
  },
  fr:{
    page_title:'Taissia Shpak — Portfolio 2026',
    nav__logo: 'Taissiya Shpak',
    nav_about:'À propos',nav_works:'Travaux',nav_contact:'Contact',
    hero_word:'PORTFOLIO',
    hero_role:'designer graphique',hero_btn:'Voir les travaux',
    about_title:'À propos',about_role:'designer graphique, néo-créatrice',
    about_p1:"Mon nom est Taisia Shpak. Mon parcours a commencé avec des infographies pour des marketplaces de mars 2024 à août 2025.",
    about_p2:"J'ai développé des logos pour des marques. Depuis juillet 2025 je travaille en design multi-pages.",
    about_p3:"J'approfondis mes connaissances à l'Université de Tomsk en Publicité et PR.",
    stat_years:"ans d'exp.",stat_projects:'projets',stat_tools:'outils',
    works_title:'Mes travaux',
    cat1_title:'Fiches produit',cat1_desc:'Chaque maquette — un mélange harmonieux de fonctionnalité et de style.',
    cat2_title:'Logo',cat2_desc:'Portfolio de logos pour des entreprises de divers secteurs.',
    cat3_title:'Imprimerie',cat3_desc:"Design d'impression. Albums de fin d'études.",
    cat4_title:'Présentations',cat4_desc:'Création de présentations de zéro ou sur modèle.',
    card1_1:'Écouteurs',card1_2:'Baskets',card1_3:'Souris',card1_4:'Dashcam',
    card1_5:'Mascara',card1_6:'Spray',card1_7:'Poêle',card1_8:'Gel douche',
    card3_2:'Double page',
    card4_1:'Opération Note',card4_2:'Analyse',card4_3:'Stratégie',
    card4_4:'Tactique',card4_5:'Argumentation',card4_6:'Ses règles',
    closing_title:'Conclusion',
    closing_p1:'Chaque projet est une partie de mon expérience.',
    closing_p2:"Le design c'est aussi le sens.",
    closing_p3:"Je cherche l'équilibre entre esthétique et objectifs.",
    contact_title:'Heureuse de\ncollaborer',
    contact_email_label:'Envoyer un email',
    footer_role:'designer graphique · néo-créatrice',
    logo_fruktisy_title:'Fruktisy',logo_fruktisy_desc:'Logo pour Fruktisy — fruits séchés',
    logo_shelter_title:'Shelter',logo_shelter_desc:'Logo pour Shelter — café'
  },
  es:{
    page_title:'Taissiya Shpak — Portafolio 2026',
    nav__logo: 'Taissiya Shpak',
    nav_about:'Sobre mí',nav_works:'Trabajos',nav_contact:'Contacto',
    hero_word:'PORTAFOLIO',
    hero_role:'diseñadora gráfica',hero_btn:'Ver trabajos',
    about_title:'Sobre mí',about_role:'diseñadora gráfica, neuro-creadora',
    about_p1:'Me llamo Taisia Shpak. Mi camino en el diseño comenzó con infografías de marzo 2024 a agosto 2025.',
    about_p2:'Luego desarrollé logos para marcas. Desde julio 2025 trabajo en diseño multipágina.',
    about_p3:'Profundizo mis conocimientos en la Universidad de Tomsk en Publicidad y PR.',
    stat_years:'años exp.',stat_projects:'proyectos',stat_tools:'herramientas',
    works_title:'Mis trabajos',
    cat1_title:'Fichas de producto',cat1_desc:'Cada maqueta — mezcla de funcionalidad y estilo.',
    cat2_title:'Logotipo',cat2_desc:'Portfolio de logos para empresas de distintos sectores.',
    cat3_title:'Impresión',cat3_desc:'Diseño gráfico. Álbumes de graduación.',
    cat4_title:'Presentaciones',cat4_desc:'Creación de presentaciones desde cero o con plantillas.',
    card1_1:'Auriculares',card1_2:'Zapatillas',card1_3:'Ratón',card1_4:'Dashcam',
    card1_5:'Rímel',card1_6:'Spray',card1_7:'Sartén',card1_8:'Gel de ducha',
    card3_2:'Doble página',
    card4_1:'Operación Nota',card4_2:'Análisis',card4_3:'Estrategia',
    card4_4:'Táctica',card4_5:'Argumentación',card4_6:'Reglas propias',
    closing_title:'Conclusión',
    closing_p1:'Cada proyecto es parte de mi experiencia.',
    closing_p2:'El diseño también es significado.',
    closing_p3:'Busco equilibrio entre estética y negocio.',
    contact_title:'Encantada de\ncolaborar',
    contact_email_label:'Enviar un correo',
    footer_role:'diseñadora gráfica · neuro-creadora',
    logo_fruktisy_title:'Fruktisy',logo_fruktisy_desc:'Logo para Fruktisy — frutas secas',
    logo_shelter_title:'Shelter',logo_shelter_desc:'Logo para Shelter — cafetería'
  },
  it:{
    page_title:'Taissiya Shpak — Portfolio 2026',
    nav__logo: 'Taissiya Shpak',
    nav_about:'Chi sono',nav_works:'Lavori',nav_contact:'Contatto',
    hero_word:'PORTFOLIO',
    hero_role:'graphic designer',hero_btn:'Vedi i lavori',
    about_title:'Chi sono',about_role:'graphic designer, neuro-creatrice',
    about_p1:'Mi chiamo Taisia Shpak. Il percorso è iniziato con infografiche per marketplace da marzo 2024.',
    about_p2:'Ho sviluppato loghi per brand. Da luglio 2025 lavoro nel design multipagina.',
    about_p3:"Approfondisco le mie conoscenze all'Università di Tomsk.",
    stat_years:'anni esp.',stat_projects:'progetti',stat_tools:'strumenti',
    works_title:'I miei lavori',
    cat1_title:'Schede prodotto',cat1_desc:'Ogni layout — una miscela di funzionalità e stile.',
    cat2_title:'Logo',cat2_desc:'Portfolio loghi per aziende di vari settori.',
    cat3_title:'Stampa',cat3_desc:'Design di stampa per vari formati. Album di laurea.',
    cat4_title:'Presentazioni',cat4_desc:'Presentazioni da zero o su template.',
    card1_1:'Cuffie',card1_2:'Sneaker',card1_3:'Mouse',card1_4:'Dashcam',
    card1_5:'Mascara',card1_6:'Spray',card1_7:'Padella',card1_8:'Gel doccia',
    card3_2:'Doppia pagina',
    card4_1:'Operazione Voto',card4_2:'Analisi',card4_3:'Strategia',
    card4_4:'Tattica',card4_5:'Argomentazione',card4_6:'Regole proprie',
    closing_title:'Conclusione',
    closing_p1:'Ogni progetto è parte della mia esperienza.',
    closing_p2:'Il design non è solo estetica, ma anche significato.',
    closing_p3:'Cerco equilibrio tra estetica e obiettivi.',
    contact_title:'Felice di\ncollaborare',
    contact_email_label:'Invia un\'email',
    footer_role:'graphic designer · neuro-creatrice',
    logo_fruktisy_title:'Fruktisy',logo_fruktisy_desc:'Logo per Fruktisy — frutta secca',
    logo_shelter_title:'Shelter',logo_shelter_desc:'Logo per Shelter — caffetteria'
  },
  pt:{
    page_title:'Taissiya Shpak — Portfólio 2026',
    nav__logo: 'Taissiya Shpak',
    nav_about:'Sobre mim',nav_works:'Trabalhos',nav_contact:'Contato',
    hero_word:'PORTFÓLIO',
    hero_role:'designer gráfica',hero_btn:'Ver trabalhos',
    about_title:'Sobre mim',about_role:'designer gráfica, neuro-criadora',
    about_p1:'Meu nome é Taisia Shpak. Comecei com infográficos para marketplaces de março 2024 a agosto 2025.',
    about_p2:'Desenvolvi logos para marcas. Desde julho 2025 trabalho com design multipágina.',
    about_p3:'Aprofundo meus conhecimentos na Universidade de Tomsk.',
    stat_years:'anos exp.',stat_projects:'projetos',stat_tools:'ferramentas',
    works_title:'Meus trabalhos',
    cat1_title:'Fichas de produto',cat1_desc:'Cada layout — mistura de funcionalidade e estilo.',
    cat2_title:'Logo',cat2_desc:'Portfolio de logos para empresas de vários setores.',
    cat3_title:'Impressão',cat3_desc:'Design gráfico para vários formatos. Álbuns de formatura.',
    cat4_title:'Apresentações',cat4_desc:'Criação de apresentações do zero ou com templates.',
    card1_1:'Fones',card1_2:'Tênis',card1_3:'Mouse',card1_4:'Dashcam',
    card1_5:'Rímel',card1_6:'Spray',card1_7:'Frigideira',card1_8:'Gel de banho',
    card3_2:'Página dupla',
    card4_1:'Operação Nota',card4_2:'Análise',card4_3:'Estratégia',
    card4_4:'Tática',card4_5:'Argumentação',card4_6:'Regras próprias',
    closing_title:'Conclusão',
    closing_p1:'Cada projeto é parte da minha experiência.',
    closing_p2:'Design não é só estética, mas também significado.',
    closing_p3:'Busco equilíbrio entre estética e negócio.',
    contact_title:'Feliz em\ncolaborar',
    contact_email_label:'Enviar email',
    footer_role:'designer gráfica · neuro-criadora',
    logo_fruktisy_title:'Fruktisy',logo_fruktisy_desc:'Logo para Fruktisy — frutas secas',
    logo_shelter_title:'Shelter',logo_shelter_desc:'Logo para Shelter — cafeteria'
  },
  zh:{
    page_title:'Taissiya Shpak — 作品集 2026',
    nav__logo: 'Taissiya Shpak',
    nav_about:'关于我',nav_works:'作品',nav_contact:'联系',
    hero_word:'作品集',
    hero_role:'平面设计师',hero_btn:'查看作品',
    about_title:'关于我',about_role:'平面设计师，神经创作者',
    about_p1:'我叫Taisia Shpak。2024年3月至2025年8月为电商平台制作信息图表。',
    about_p2:'之后为品牌开发标志。2025年7月起从事多页面设计。',
    about_p3:'在托木斯克国立大学广告与公关专业深造。',
    stat_years:'年经验',stat_projects:'个项目',stat_tools:'种工具',
    works_title:'我的作品',
    cat1_title:'产品卡片',cat1_desc:'每个设计都是功能与风格的和谐结合。',
    cat2_title:'标志',cat2_desc:'为各行业公司开发的标志集。',
    cat3_title:'印刷设计',cat3_desc:'各种格式的印刷设计。毕业纪念册。',
    cat4_title:'演示文稿',cat4_desc:'从零开始或按模板制作演示文稿。',
    card1_1:'耳机',card1_2:'运动鞋',card1_3:'鼠标',card1_4:'行车记录仪',
    card1_5:'睫毛膏',card1_6:'喷雾',card1_7:'煎锅',card1_8:'沐浴露',
    card3_2:'纪念册内页',
    card4_1:'作战计划',card4_2:'情况分析',card4_3:'策略',
    card4_4:'战术',card4_5:'论证',card4_6:'自己的规则',
    closing_title:'结语',
    closing_p1:'每个项目都是我经验和设计理念的一部分。',
    closing_p2:'设计不只是美观，更关乎意义。',
    closing_p3:'在美学与商业目标间寻求平衡。',
    contact_title:'期待\n合作',
    contact_email_label:'发送邮件',
    footer_role:'平面设计师 · 神经创作者',
    logo_fruktisy_title:'Fruktisy',logo_fruktisy_desc:'Fruktisy品牌标志 — 干果',
    logo_shelter_title:'Shelter',logo_shelter_desc:'Shelter品牌标志 — 咖啡馆'
  },
  ja:{
    page_title:'Taissiya Shpak — ポートフォリオ 2026',
    nav__logo: 'Taissiya Shpak',
    nav_about:'私について',nav_works:'作品',nav_contact:'お問い合わせ',
    hero_word:'ポートフォリオ',
    hero_role:'グラフィックデザイナー',hero_btn:'作品を見る',
    about_title:'私について',about_role:'グラフィックデザイナー・ニューロクリエイター',
    about_p1:'私はTaisia Shpakです。2024年3月から2025年8月まで、ECサイト向けインフォグラフィックを制作しました。',
    about_p2:'ブランドのロゴ開発を担当後、2025年7月より多ページデザインへ移行。',
    about_p3:'トムスク国立大学広告・PR学科で学んでいます。',
    stat_years:'年の経験',stat_projects:'作品数',stat_tools:'ツール数',
    works_title:'作品集',
    cat1_title:'商品カード',cat1_desc:'機能美を融合したレイアウト。',
    cat2_title:'ロゴ',cat2_desc:'各業界のロゴポートフォリオ。',
    cat3_title:'印刷デザイン',cat3_desc:'各フォーマットの印刷デザイン。',
    cat4_title:'プレゼン',cat4_desc:'ゼロまたはテンプレートから作成。',
    card1_1:'ヘッドフォン',card1_2:'スニーカー',card1_3:'マウス',card1_4:'ドラレコ',
    card1_5:'マスカラ',card1_6:'スプレー',card1_7:'フライパン',card1_8:'ボディジェル',
    card3_2:'見開きページ',
    card4_1:'作戦ノート',card4_2:'状況分析',card4_3:'戦略',
    card4_4:'戦術',card4_5:'論証',card4_6:'自分のルール',
    closing_title:'おわりに',
    closing_p1:'各プロジェクトは私の経験とデザイン観の一部です。',
    closing_p2:'デザインは美しさだけでなく意味も大切。',
    closing_p3:'美学とビジネスのバランスを追求します。',
    contact_title:'喜んで\nご協力します',
    contact_email_label:'メールを送る',
    footer_role:'グラフィックデザイナー · ニューロクリエイター',
    logo_fruktisy_title:'Fruktisy',logo_fruktisy_desc:'Fruktisy ブランドロゴ — ドライフルーツ',
    logo_shelter_title:'Shelter',logo_shelter_desc:'Shelter ブランドロゴ — カフェ'
  },
  ko:{
    page_title:'Taissiya Shpak — 포트폴리오 2026',
    nav__logo: 'Taissiya Shpak',
    nav_about:'소개',nav_works:'작품',nav_contact:'연락처',
    hero_word:'포트폴리오',
    hero_role:'그래픽 디자이너',hero_btn:'작품 보기',
    about_title:'소개',about_role:'그래픽 디자이너, 뉴로 크리에이터',
    about_p1:'안녕하세요, Taisia Shpak입니다. 2024년 3월부터 2025년 8월까지 마켓플레이스 인포그래픽으로 시작했습니다.',
    about_p2:'브랜드 로고 개발 후, 2025년 7월부터 멀티페이지 디자인으로 전향했습니다.',
    about_p3:'톰스크 국립대학교 광고·PR학과에서 공부 중입니다.',
    stat_years:'년 경험',stat_projects:'프로젝트',stat_tools:'도구',
    works_title:'나의 작품',
    cat1_title:'상품 카드',cat1_desc:'기능성과 스타일의 조화.',
    cat2_title:'로고',cat2_desc:'다양한 업종 기업 로고 포트폴리오.',
    cat3_title:'인쇄 디자인',cat3_desc:'다양한 형식의 인쇄 디자인. 졸업 앨범.',
    cat4_title:'프레젠테이션',cat4_desc:'처음부터 또는 템플릿으로 제작.',
    card1_1:'헤드폰',card1_2:'스니커즈',card1_3:'마우스',card1_4:'블랙박스',
    card1_5:'마스카라',card1_6:'스프레이',card1_7:'프라이팬',card1_8:'샤워젤',
    card3_2:'앨범 내지',
    card4_1:'작전 학점',card4_2:'상황 분석',card4_3:'전략',
    card4_4:'전술',card4_5:'논증',card4_6:'자신의 규칙',
    closing_title:'마치며',
    closing_p1:'이 포트폴리오의 모든 프로젝트는 제 경험의 일부입니다.',
    closing_p2:'디자인은 아름다움뿐 아니라 의미입니다.',
    closing_p3:'미학과 비즈니스 균형을 추구합니다.',
    contact_title:'협업을\n기대합니다',
    contact_email_label:'메일 보내기',
    footer_role:'그래픽 디자이너 · 뉴로 크리에이터',
    logo_fruktisy_title:'Fruktisy',logo_fruktisy_desc:'Fruktisy 브랜드 로고 — 건과일',
    logo_shelter_title:'Shelter',logo_shelter_desc:'Shelter 브랜드 로고 — 카페'
  },
  ar:{
    page_title:'تايسيا شباك — ملف الأعمال 2026',
    nav__logo: 'Taissiya Shpak',
    nav_about:'عني',nav_works:'أعمال',nav_contact:'تواصل',
    hero_word:'ملف الأعمال',
    hero_role:'مصممة جرافيك',hero_btn:'عرض الأعمال',
    about_title:'عني',about_role:'مصممة جرافيك، منشئة محتوى',
    about_p1:'اسمي تايسيا شباك. بدأت بإنشاء الإنفوجرافيك من مارس 2024 إلى أغسطس 2025.',
    about_p2:'ثم طورت شعارات للعلامات التجارية. منذ يوليو 2025 أعمل في تصميم متعدد الصفحات.',
    about_p3:'أعمّق معرفتي في جامعة تومسك في الإعلان والعلاقات العامة.',
    stat_years:'سنوات خبرة',stat_projects:'مشروع',stat_tools:'أداة',
    works_title:'أعمالي',
    cat1_title:'بطاقات المنتجات',cat1_desc:'كل تصميم مزيج من الوظيفة والجمال.',
    cat2_title:'الشعار',cat2_desc:'محفظة شعارات لشركات متعددة.',
    cat3_title:'تصميم طباعي',cat3_desc:'تصميم طباعي لتنسيقات متعددة.',
    cat4_title:'عروض تقديمية',cat4_desc:'إنشاء عروض من الصفر أو بقوالب.',
    card1_1:'سماعات',card1_2:'أحذية رياضية',card1_3:'فأرة',card1_4:'كاميرا سيارة',
    card1_5:'ماسكارا',card1_6:'بخاخ',card1_7:'مقلاة',card1_8:'جل استحمام',
    card3_2:'صفحة مزدوجة',
    card4_1:'عملية النجاح',card4_2:'تحليل الوضع',card4_3:'استراتيجية',
    card4_4:'تكتيك',card4_5:'الحجج',card4_6:'قواعدك',
    closing_title:'خاتمة',
    closing_p1:'كل مشروع جزء من تجربتي ورؤيتي.',
    closing_p2:'التصميم ليس فقط جمالاً، بل معنى.',
    closing_p3:'أسعى للتوازن بين الجمال وأهداف العمل.',
    contact_title:'يسعدني\nالتعاون',
    contact_email_label:'إرسال بريد',
    footer_role:'مصممة جرافيك · منشئة محتوى',
    logo_fruktisy_title:'Fruktisy',logo_fruktisy_desc:'شعار Fruktisy — فواكه مجففة',
    logo_shelter_title:'Shelter',logo_shelter_desc:'شعار Shelter — مقهى'
  },
  tr:{
    page_title:'Taissiya Shpak — Portfolyo 2026',
    nav__logo: 'Taissiya Shpak',
    nav_about:'Hakkımda',nav_works:'Çalışmalar',nav_contact:'İletişim',
    hero_word:'PORTFOLYO',
    hero_role:'grafik tasarımcı',hero_btn:'Çalışmaları gör',
    about_title:'Hakkımda',about_role:'grafik tasarımcı, neuro-yaratıcı',
    about_p1:"Adım Taisia Shpak. Mart 2024'ten Ağustos 2025'e kadar pazaryerleri için infografik oluşturmayla başladım.",
    about_p2:"Markalar için logo geliştirdim. Temmuz 2025'ten itibaren çok sayfalı tasarımda çalışıyorum.",
    about_p3:"Tomsk Devlet Üniversitesi'nde Reklam ve PR alanında bilgimi derinleştiriyorum.",
    stat_years:'yıl deneyim',stat_projects:'proje',stat_tools:'araç',
    works_title:'Çalışmalarım',
    cat1_title:'Ürün kartları',cat1_desc:'Her tasarım işlevsellik ve stilin birleşimi.',
    cat2_title:'Logo',cat2_desc:'Çeşitli sektörler için logo portföyü.',
    cat3_title:'Baskı tasarımı',cat3_desc:'Çeşitli formatlar için baskı tasarımı.',
    cat4_title:'Sunumlar',cat4_desc:'Sıfırdan veya şablonla sunum oluşturma.',
    card1_1:'Kulaklıklar',card1_2:'Spor ayakkabı',card1_3:'Fare',card1_4:'Araç kamerası',
    card1_5:'Maskara',card1_6:'Sprey',card1_7:'Tava',card1_8:'Duş jeli',
    card3_2:'Albüm açılımı',
    card4_1:'Operasyon Not',card4_2:'Durum analizi',card4_3:'Strateji',
    card4_4:'Taktik',card4_5:'Argümantasyon',card4_6:'Kendi kuralların',
    closing_title:'Sonuç',
    closing_p1:'Her proje deneyimimin ve bakış açımın parçası.',
    closing_p2:'Tasarım sadece estetik değil, anlam da demektir.',
    closing_p3:'Estetik ve iş hedefleri arasında denge arıyorum.',
    contact_title:'İşbirliğine\nhazırım',
    contact_email_label:'E-posta gönder',
    footer_role:'grafik tasarımcı · neuro-yaratıcı',
    logo_fruktisy_title:'Fruktisy',logo_fruktisy_desc:'Fruktisy logosu — kuru meyveler',
    logo_shelter_title:'Shelter',logo_shelter_desc:'Shelter logosu — kafe'
  },
  pl:{
    page_title:'Taissiya Shpak — Portfolio 2026',
    nav__logo: 'Taissiya Shpak',
    nav_about:'O mnie',nav_works:'Prace',nav_contact:'Kontakt',
    hero_word:'PORTFOLIO',
    hero_role:'grafik designer',hero_btn:'Zobacz prace',
    about_title:'O mnie',about_role:'grafik designer, neuro-kreatorka',
    about_p1:'Nazywam się Taisia Shpak. Droga w designie zaczęła się od infografik od marca 2024 do sierpnia 2025.',
    about_p2:'Tworzyłam logo dla marek. Od lipca 2025 pracuję w wielostronicowym designie.',
    about_p3:'Pogłębiam wiedzę na Tomskim Uniwersytecie Państwowym.',
    stat_years:'lata doświadczenia',stat_projects:'projektów',stat_tools:'narzędzi',
    works_title:'Moje prace',
    cat1_title:'Karty produktów',cat1_desc:'Każdy projekt to harmonijna mieszanka funkcjonalności i stylu.',
    cat2_title:'Logo',cat2_desc:'Portfolio logo dla firm z różnych branż.',
    cat3_title:'Poligrafia',cat3_desc:'Design poligraficzny dla różnych formatów.',
    cat4_title:'Prezentacje',cat4_desc:'Tworzenie prezentacji od zera lub wg szablonu.',
    card1_1:'Słuchawki',card1_2:'Sneakersy',card1_3:'Mysz',card1_4:'Wideorejestrator',
    card1_5:'Tusz do rzęs',card1_6:'Spray',card1_7:'Patelnia',card1_8:'Żel pod prysznic',
    card3_2:'Rozkładówka',
    card4_1:'Operacja Ocena',card4_2:'Analiza sytuacji',card4_3:'Strategia',
    card4_4:'Taktyka',card4_5:'Argumentacja',card4_6:'Własne zasady',
    closing_title:'Podsumowanie',
    closing_p1:'Każdy projekt to część mojego doświadczenia.',
    closing_p2:'Dla mnie design to nie tylko estetyka, ale i sens.',
    closing_p3:'Szukam równowagi między estetyką a celami.',
    contact_title:'Chętnie\nwspółpracuję',
    contact_email_label:'Wyślij e-mail',
    footer_role:'grafik designer · neuro-kreatorka',
    logo_fruktisy_title:'Fruktisy',logo_fruktisy_desc:'Logo dla Fruktisy — suszone owoce',
    logo_shelter_title:'Shelter',logo_shelter_desc:'Logo dla Shelter — kawiarnia'
  },
  uk:{
    page_title: 'Таісія Шпак— Портфоліо 2026',
    nav__logo: 'Таісія Шпак',
    nav_about:'Про мене',nav_works:'Роботи',nav_contact:'Контакт',
    hero_word:'ПОРТФОЛІО',
    hero_role:'графічний дизайнер',hero_btn:'Переглянути роботи',
    about_title:'Про мене',about_role:'графічний дизайнер, нейро-креатор',
    about_p1:'Мене звати Шпак Таісія. Шлях розпочався з інфографіки для маркетплейсів з березня 2024 по серпень 2025.',
    about_p2:'Займалась логотипами для брендів. З липня 2025 — багатосторінковий дизайн.',
    about_p3:"Поглиблюю знання в Томському державному університеті на спеціальності «Реклама та зв'язки з громадськістю».",
    stat_years:'роки досвіду',stat_projects:'проектів',stat_tools:'інструментів',
    works_title:'Мої роботи',
    cat1_title:'Картки товару',cat1_desc:'Кожен макет — поєднання функціональності та стилю.',
    cat2_title:'Логотип',cat2_desc:'Портфоліо логотипів для компаній різних галузей.',
    cat3_title:'Поліграфія',cat3_desc:'Поліграфічний дизайн і верстка. Випускні альбоми.',
    cat4_title:'Презентації',cat4_desc:'Створення презентацій з нуля або за шаблоном.',
    card1_1:'Навушники',card1_2:'Кросівки',card1_3:'Миша',card1_4:'Відеореєстратор',
    card1_5:'Туш',card1_6:'Спрей',card1_7:'Сковорода',card1_8:'Гель для душу',
    card3_2:'Розворот альбому',
    card4_1:'Операція Залік',card4_2:'Аналіз ситуації',card4_3:'Стратегія',
    card4_4:'Тактика',card4_5:'Аргументація',card4_6:'Власні правила',
    closing_title:'Висновок',
    closing_p1:'Кожен проект — частина мого досвіду та погляду на дизайн.',
    closing_p2:'Дизайн — це не лише краса, а й сенс.',
    closing_p3:'Шукаю баланс між естетикою та бізнес-завданнями.',
    contact_title:'Буду рада\nспівпраці',
    contact_email_label:'Написати на пошту',
    footer_role:'графічний дизайнер · нейро-креатор',
    logo_fruktisy_title:'Fruktisy',logo_fruktisy_desc:'Логотип для Fruktisy — сухофрукти',
    logo_shelter_title:'Shelter',logo_shelter_desc:"Логотип для Shelter — кав'ярня"
  },
};

/* ========================
   LANG SYSTEM
======================== */
let curLang = localStorage.getItem('tsh_lang') || null;

function applyLang(code) {
  const t = T[code] || T.ru;
  curLang = code;
  localStorage.setItem('tsh_lang', code);
  document.documentElement.lang = code;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] === undefined) return;
    if (el.tagName === 'TITLE') { document.title = t[key]; return; }
    el.innerHTML = t[key].replace(/\n/g, '<br>');
  });

  const lang = LANGS.find(l => l.code === code);
  if (lang) {
    document.getElementById('langFlag').textContent = lang.flag;
    document.getElementById('langCode').textContent = lang.code2;
  }

  document.querySelectorAll('.ld-item').forEach(el => {
    el.classList.toggle('active', el.dataset.code === code);
  });
}

// Build splash
(function() {
  const grid = document.getElementById('langGrid');
  LANGS.forEach(lang => {
    const btn = document.createElement('button');
    btn.className = 'ls-btn';
    btn.innerHTML = `<span class="ls-btn__flag">${lang.flag}</span><div style="display:flex;flex-direction:column;gap:2px;text-align:left"><span class="ls-btn__label">${lang.label}</span><span class="ls-btn__code">${lang.code2}</span></div>`;
    btn.addEventListener('click', () => { applyLang(lang.code); closeSplash(); });
    grid.appendChild(btn);
  });
})();

// Build nav dropdown — flag + label only
(function() {
  const dd = document.getElementById('langDropdown');
  LANGS.forEach(lang => {
    const btn = document.createElement('button');
    btn.className = 'ld-item';
    btn.dataset.code = lang.code;
    btn.innerHTML = `<span class="ld-item__flag">${lang.flag}</span><span>${lang.label}</span>`;
    btn.addEventListener('click', () => { applyLang(lang.code); closeDropdown(); });
    dd.appendChild(btn);
  });
})();

// Splash
const splash = document.getElementById('langSplash');
function closeSplash() {
  splash.classList.add('hiding');
  setTimeout(() => splash.classList.add('gone'), 700);
}
if (curLang) {
  splash.classList.add('gone');
  applyLang(curLang);
} else {
  applyLang('ru');
}

// Dropdown
const pickerBtn = document.getElementById('langPickerBtn');
const dropdown  = document.getElementById('langDropdown');
function closeDropdown() { dropdown.classList.remove('open'); }
pickerBtn.addEventListener('click', e => { e.stopPropagation(); dropdown.classList.toggle('open'); });
document.addEventListener('click', closeDropdown);
dropdown.addEventListener('click', e => e.stopPropagation());

/* ========================
   NAV SCROLL
======================== */
const navEl = document.getElementById('nav');
window.addEventListener('scroll', () => navEl.classList.toggle('scrolled', scrollY > 36), {passive:true});

/* ========================
   BURGER
======================== */
const burger     = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
burger.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  const s = burger.querySelectorAll('span');
  s[0].style.transform = open ? 'translateY(7px) rotate(45deg)'  : '';
  s[1].style.opacity   = open ? '0' : '';
  s[2].style.transform = open ? 'translateY(-7px) rotate(-45deg)' : '';
});
document.querySelectorAll('.mobile-menu a').forEach(a => a.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
  burger.querySelectorAll('span').forEach(s => { s.style.transform=''; s.style.opacity=''; });
}));

/* ========================
   REVEAL
======================== */
const revObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: .08, rootMargin: '0px 0px -24px 0px' });
document.querySelectorAll('.reveal').forEach(el => revObs.observe(el));

/* ========================
   COUNTERS
======================== */
function runCounter(el, target) {
  let v = 0;
  const step = target / (1600/16);
  const run = () => {
    v += step;
    if (v >= target) { el.textContent = target + (target >= 50 ? '+' : ''); return; }
    el.textContent = Math.floor(v);
    requestAnimationFrame(run);
  };
  run();
}
const cntObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting && !e.target.dataset.done) {
      e.target.dataset.done = '1';
      runCounter(e.target, +e.target.dataset.target);
    }
  });
}, { threshold: .5 });
document.querySelectorAll('.stat__num').forEach(el => cntObs.observe(el));

/* ========================
   LIGHTBOX
======================== */
const lb    = document.getElementById('lightbox');
const lbImg = document.getElementById('lbImg');
let lbList = [], lbIdx = 0;

function lbCollect() {
  lbList = [];
  document.querySelectorAll('.diag-card img, .wcard img, .fan-card img, .print-spread img, .logo-grid__main img').forEach(img => {
    if (img.complete && img.naturalWidth > 0) lbList.push({src: img.src, alt: img.alt || ''});
  });
}
function lbOpen(idx) {
  lbCollect();
  if (!lbList.length) return;
  lbIdx = Math.max(0, Math.min(idx, lbList.length-1));
  lbImg.src = lbList[lbIdx].src;
  lb.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function lbClose() {
  lb.classList.remove('active');
  document.body.style.overflow = '';
  setTimeout(() => lbImg.src = '', 300);
}
function lbNav(dir) {
  lbIdx = (lbIdx + dir + lbList.length) % lbList.length;
  lbImg.style.opacity = '0';
  setTimeout(() => { lbImg.src = lbList[lbIdx].src; lbImg.style.opacity = '1'; }, 140);
}
lbImg.style.transition = 'opacity .14s ease';

document.querySelectorAll('.diag-card, .wcard, .fan-card, .print-spread, .logo-grid__main').forEach(card => {
  card.addEventListener('click', () => {
    lbCollect();
    const img = card.querySelector('img');
    if (!img || !img.complete || !img.naturalWidth) return;
    const idx = lbList.findIndex(i => i.src === img.src);
    lbOpen(idx >= 0 ? idx : 0);
  });
});

document.getElementById('lbClose').addEventListener('click', lbClose);
document.getElementById('lbPrev').addEventListener('click', () => lbNav(-1));
document.getElementById('lbNext').addEventListener('click', () => lbNav(1));
lb.addEventListener('click', e => { if (e.target === lb) lbClose(); });
document.addEventListener('keydown', e => {
  if (!lb.classList.contains('active')) return;
  if (e.key === 'Escape') lbClose();
  if (e.key === 'ArrowLeft') lbNav(-1);
  if (e.key === 'ArrowRight') lbNav(1);
});

/* ========================
   MAGNETIC BUTTONS
======================== */
document.querySelectorAll('.btn, .contact__link').forEach(btn => {
  btn.addEventListener('mousemove', e => {
    const r = btn.getBoundingClientRect();
    btn.style.transform = `translate(${(e.clientX-r.left-r.width/2)*.15}px,${(e.clientY-r.top-r.height/2)*.2}px)`;
  });
  btn.addEventListener('mouseleave', () => btn.style.transform = '');
});

/* ========================
   TOOL BADGE TILT
======================== */
document.querySelectorAll('.tool-badge').forEach(b => {
  b.addEventListener('mousemove', e => {
    const r = b.getBoundingClientRect();
    const x = ((e.clientX-r.left)/r.width-.5)*14;
    const y = ((e.clientY-r.top)/r.height-.5)*14;
    b.style.transform = `perspective(280px) rotateX(${-y}deg) rotateY(${x}deg) translateY(-3px)`;
  });
  b.addEventListener('mouseleave', () => b.style.transform = '');
});

/* ========================
   SMOOTH SCROLL
======================== */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (t) { e.preventDefault(); t.scrollIntoView({behavior:'smooth', block:'start'}); }
  });
});

/* ========================
   HERO WORD AUTO-FIT
======================== */
function fitHeroWord() {
  const el = document.querySelector('.hero__word');
  if (!el) return;
  const containerWidth = el.parentElement.clientWidth * 0.94;
  el.style.fontSize = '11rem';
  let fontSize = parseFloat(getComputedStyle(el).fontSize);
  const textWidth = el.scrollWidth;
  if (textWidth > 0) {
    const ratio = containerWidth / textWidth;
    fontSize = fontSize * ratio * 0.98;
    el.style.fontSize = fontSize + 'px';
  }
}
window.addEventListener('load', fitHeroWord);
window.addEventListener('resize', fitHeroWord);
if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(fitHeroWord);
}