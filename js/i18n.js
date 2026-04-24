/* ============================================================
   IDLe Metric — Internationalization (i18n)
   Translations embedded directly — works on file:// protocol
   ============================================================ */

const LANGS = ['en', 'ru', 'es', 'uk', 'fr'];
const DEFAULT_LANG = 'en';
let currentLang = DEFAULT_LANG;

const LOCALES = {

en: {
  nav: { features:"Features", how:"How It Works", download:"Download", privacy:"Privacy Policy", support:"Support" },
  hero: {
    tagline: "Never Miss the GREEN Signal",
    subtitle: "IDLe Metric automatically detects RED and GREEN dock signals through your phone camera — so you can rest in the cab and get alerted the moment it's time to go.",
    cta_google: "Get it on Google Play",
    cta_apple: "Download on App Store",
    badge_auto: "Auto Detection",
    float_green: "GREEN detected",
    float_wait: "Wait:"
  },
  sections: { features_label:"Features", screenshots_label:"App Screenshots", screenshots_title:"See It in Action", how_label:"Setup" },
  screenshots: { camera:"Camera Mode — GREEN detected", history:"Session History & Stats", detention:"Detention Calculator & Alerts", tips:"Built-in Tips & Guide" },
  stats: { offline:"100% Offline", offline_sub:"No internet required", nodata:"Zero Data Collected", nodata_sub:"Everything stays on your device", modes:"2 Modes", modes_sub:"Camera & Manual" },
  features_title: "Everything You Need at the Dock",
  features: [
    { icon:"🎯", title:"Auto Signal Detection",     desc:"Camera watches the dock light through your side mirror. Detects RED and GREEN automatically — no tapping, no manual input." },
    { icon:"⏱️", title:"Session Timer",             desc:"Tracks total wait time with RED and GREEN breakdown. Full session history with average, total, and max wait times." },
    { icon:"🔔", title:"Instant Audio Alert",       desc:"The moment the signal turns GREEN, you get an audio alert — even if the screen is dimmed and you're resting." },
    { icon:"🎚️", title:"Adjustable Detection Zone", desc:"Drag the blue frame to cover exactly the signal light. Calibrate tracking so the app follows the light if the mirror shifts." },
    { icon:"💡", title:"All Lighting Conditions",   desc:"Auto-exposure adjustment handles bright sun, overcast, night, and low warehouse lighting without manual tweaking." },
    { icon:"🔋", title:"Battery Saver",             desc:"Screen dims to 0.5% brightness during long waits. Camera sleep mode after first signal detected." },
    { icon:"✋", title:"Manual Mode",               desc:"No signal light at this dock? Use the manual timer. Runs in background with a persistent notification." },
    { icon:"💰", title:"Detention Calculator",      desc:"Set your free period and hourly rate. The app calculates detention time and cost automatically." },
    { icon:"📊", title:"Export to CSV",             desc:"Export your session history as a CSV file for reporting, invoicing, or personal records." }
  ],
  how_title: "How It Works",
  how_steps: [
    { step:"01", title:"Mount Your Phone",        desc:"Place your phone near the side mirror so the camera can see the dock signal light through the mirror reflection." },
    { step:"02", title:"Aim the Detection Zone",  desc:"Drag the blue frame to cover the signal light. Tap Calibrate to lock tracking — the app follows the light automatically." },
    { step:"03", title:"Rest and Wait",           desc:"The screen dims to save battery. The app watches continuously. When the signal turns GREEN — your alert fires." }
  ],
  download_title: "Built for Real Dock Conditions",
  download_subtitle: "Tested in bright sun, overcast mornings, night, and low warehouse lighting. Works offline. No account required.",
  footer: { tagline:"Built for truck drivers. Works offline. No data collected.", privacy:"Privacy Policy", support:"Support", rights:"All rights reserved." },
  support_page: {
    hero_title: "Support",
    hero_sub: "We're here to help you get the most out of IDLe Metric",
    email_title: "Email Support",
    email_desc: "Send us a message and we'll get back to you as soon as possible.",
    email_btn: "Contact Us",
    review_title: "Leave a Review",
    review_desc: "Enjoying the app? Rate it on Google Play — it helps other drivers find it.",
    review_btn: "Rate on Google Play",
    faq_label: "FAQ",
    faq_title: "Frequently Asked Questions",
    faq: [
      { q: "How do I set up the detection zone?",
        a: "Mount your phone near the side mirror so the camera can see the dock signal light. In the app, drag the blue frame to cover exactly the signal light. Then tap <strong>Calibrate</strong> — the app will lock onto the light and follow it automatically even if the mirror shifts slightly." },
      { q: "The app shows UNKNOWN even though I can see the signal light. What should I do?",
        a: "Try these steps: (1) Make sure the blue ROI frame covers the signal light precisely — not too large, not too small. (2) Use the zoom control to bring the signal closer into frame. (3) Wait a moment for the auto-exposure to adjust. (4) Tap <strong>Calibrate</strong> to help the app lock onto the correct light position." },
      { q: "Does the app work at night or in low light?",
        a: "Yes. IDLe Metric has an adaptive auto-exposure system that continuously adjusts camera settings for all lighting conditions — bright daylight, overcast, night, and low warehouse lighting." },
      { q: "Will the app drain my battery?",
        a: "IDLe Metric has several battery-saving features: the screen dims to 0.5% brightness after signal detection, the camera enters sleep mode after the first signal, and autofocus is locked after setup. For very long sessions, consider keeping your phone plugged in." },
      { q: "What is Manual Mode?",
        a: "Manual Mode is for docks that don't have signal lights. Start the timer with one tap — it runs in the background with a persistent notification. When you stop, the session is saved to History with full statistics and detention cost calculated automatically." },
      { q: "Does the app collect my data or require internet?",
        a: "No. IDLe Metric works entirely offline and collects no personal data. All session data stays on your device. No accounts, no cloud sync, no analytics tracking. See our <a href=\"privacy-policy.html\">Privacy Policy</a> for full details." },
      { q: "How do I export my session history?",
        a: "Go to the History screen and tap the Export button. A CSV file will be created on your device. You can then share it via email, cloud storage, or any other app." },
      { q: "What is the Detention Calculator?",
        a: "The detention calculator tracks time beyond your free waiting period and calculates the cost based on your hourly rate. Configure the free period (default: 120 min), hourly rate, and currency (USD, MXN, CAD) in settings." }
    ]
  },
  privacy_page: {
    hero_title: "Privacy Policy",
    hero_sub: "IDLe Metric — Dock Signal Tracker",
    effective: "Effective date: April 7, 2026",
    sections: [
      { title: "Overview", content: [
        "IDLe Metric is a dock waiting time tracker for truck drivers. This policy explains how the app handles your data."
      ]},
      { title: "Data Collection", content: [
        "<strong style=\"color:var(--text);\">IDLe Metric does not collect, transmit, or share any personal data.</strong>",
        "All data generated by the app — session history, statistics, and settings — is stored exclusively on your device using local storage (Room database and DataStore preferences). No data is sent to any server, cloud service, or third party."
      ]},
      { title: "Camera Usage", content: [
        "The app uses your device camera solely to detect RED and GREEN dock signal lights in real time. Camera frames are processed on-device in memory and are never recorded, stored, or transmitted. No photos or videos are captured."
      ]},
      { title: "Internet Access", content: [
        "IDLe Metric does not require internet access to function. The app works entirely offline."
      ]},
      { title: "In-App Purchases", content: [
        "The app may offer optional subscriptions through Google Play Billing. Purchase transactions are handled entirely by Google Play and are subject to <a href=\"https://policies.google.com/privacy\" target=\"_blank\" rel=\"noopener noreferrer\">Google's Privacy Policy</a>. IDLe Metric does not process or store any payment information."
      ]},
      { title: "Third-Party Services", content: [
        "The app does not integrate any third-party analytics, advertising, or tracking services."
      ]},
      { title: "Data Sharing", content: [
        "No data is shared with any third party. There are no accounts, no cloud sync, and no telemetry."
      ]},
      { title: "Data Export", content: [
        "You may export your session history as a CSV file using the in-app export feature. This file is created locally on your device and shared only if you choose to do so manually."
      ]},
      { title: "Children's Privacy", content: [
        "The app is not directed at children under 13 and does not knowingly collect data from children."
      ]},
      { title: "Changes to This Policy", content: [
        "If this policy is updated, the new version will be published at the same URL with an updated effective date."
      ]},
      { title: "Contact", content: [
        "If you have questions about this privacy policy, please visit our <a href=\"support.html\">support page</a> or contact us through the app's Google Play Store listing page."
      ]}
    ]
  }
},

ru: {
  nav: { features:"Функции", how:"Как работает", download:"Скачать", privacy:"Конфиденциальность", support:"Поддержка" },
  hero: {
    tagline: "Не пропусти GREEN сигнал",
    subtitle: "IDLe Metric автоматически определяет RED и GREEN сигналы дока через камеру телефона — отдыхай в кабине и получи оповещение в момент, когда пора ехать.",
    cta_google: "Скачать в Google Play",
    cta_apple: "Скачать в App Store",
    badge_auto: "Авто-определение",
    float_green: "GREEN обнаружен",
    float_wait: "Ожидание:"
  },
  sections: { features_label:"Функции", screenshots_label:"Скриншоты", screenshots_title:"Посмотри как работает", how_label:"Настройка" },
  screenshots: { camera:"Режим камеры — GREEN обнаружен", history:"История сессий и статистика", detention:"Калькулятор Detention и оповещения", tips:"Встроенные советы и руководство" },
  stats: { offline:"100% Офлайн", offline_sub:"Без интернета", nodata:"Данные не собираются", nodata_sub:"Всё остаётся на устройстве", modes:"2 Режима", modes_sub:"Камера и Ручной" },
  features_title: "Всё что нужно на доке",
  features: [
    { icon:"🎯", title:"Автоопределение сигнала",   desc:"Камера следит за сигнальной лампой через боковое зеркало. Автоматически определяет RED и GREEN — никаких нажатий." },
    { icon:"⏱️", title:"Таймер сессии",             desc:"Считает общее время ожидания с разбивкой на RED и GREEN. История сессий со средним, общим и максимальным временем." },
    { icon:"🔔", title:"Мгновенное оповещение",     desc:"Как только сигнал переключается на GREEN — звуковое оповещение, даже если экран затемнён и ты отдыхаешь." },
    { icon:"🎚️", title:"Настраиваемая зона",        desc:"Перетащи рамку на сигнальную лампу. Откалибруй слежение — приложение следит за лампой при смещении зеркала." },
    { icon:"💡", title:"Любое освещение",           desc:"Авто-экспозиция адаптируется к яркому солнцу, пасмурному небу, ночи и слабому складскому освещению." },
    { icon:"🔋", title:"Экономия батареи",          desc:"Экран затемняется до 0.5% яркости при долгом ожидании. Режим сна камеры после первого обнаружения сигнала." },
    { icon:"✋", title:"Ручной режим",              desc:"Нет сигнальной лампы на доке? Используй ручной таймер. Работает в фоне с постоянным уведомлением." },
    { icon:"💰", title:"Калькулятор detention",     desc:"Укажи бесплатный период и ставку в час. Приложение рассчитает время и стоимость detention автоматически." },
    { icon:"📊", title:"Экспорт в CSV",             desc:"Экспортируй историю сессий в CSV-файл для отчётности, выставления счетов или личных записей." }
  ],
  how_title: "Как это работает",
  how_steps: [
    { step:"01", title:"Закрепи телефон",   desc:"Расположи телефон у бокового зеркала так, чтобы камера видела сигнальную лампу дока через отражение." },
    { step:"02", title:"Настрой зону",      desc:"Перетащи синюю рамку на сигнальную лампу. Нажми Калибровка — приложение будет следить за лампой автоматически." },
    { step:"03", title:"Отдыхай и жди",     desc:"Экран затемняется для экономии батареи. Приложение следит постоянно. Когда сигнал GREEN — оповещение сработает." }
  ],
  download_title: "Создано для реальных условий",
  download_subtitle: "Протестировано при ярком солнце, пасмурном утре, ночью и при слабом складском освещении. Работает офлайн. Без аккаунта.",
  footer: { tagline:"Для дальнобойщиков. Работает офлайн. Данные не собираются.", privacy:"Конфиденциальность", support:"Поддержка", rights:"Все права защищены." },
  support_page: {
    hero_title: "Поддержка",
    hero_sub: "Мы здесь, чтобы помочь тебе получить максимум от IDLe Metric",
    email_title: "Написать нам",
    email_desc: "Отправь сообщение и мы ответим как можно скорее.",
    email_btn: "Написать",
    review_title: "Оставить отзыв",
    review_desc: "Нравится приложение? Оцени его в Google Play — это поможет другим водителям найти его.",
    review_btn: "Оценить в Google Play",
    faq_label: "FAQ",
    faq_title: "Частые вопросы",
    faq: [
      { q: "Как настроить зону обнаружения?",
        a: "Закрепи телефон у бокового зеркала. В приложении перетащи синюю рамку на сигнальную лампу. Затем нажми <strong>Калибровка</strong> — приложение зафиксирует лампу и будет следить за ней автоматически." },
      { q: "Приложение показывает UNKNOWN, хотя я вижу лампу. Что делать?",
        a: "Попробуй: (1) Убедись, что рамка ROI точно накрывает лампу — не слишком большая и не маленькая. (2) Используй зум, чтобы приблизить сигнал. (3) Подожди момент — авто-экспозиция адаптируется. (4) Нажми <strong>Калибровка</strong>." },
      { q: "Работает ли приложение ночью или при слабом освещении?",
        a: "Да. В IDLe Metric есть адаптивная система авто-экспозиции, которая подстраивается под все условия освещения: яркий день, пасмурно, ночь и слабый складской свет." },
      { q: "Сильно ли разряжает батарею?",
        a: "В приложении есть несколько режимов экономии: экран затемняется до 0.5% после обнаружения сигнала, камера переходит в режим сна, автофокус зафиксирован. При очень долгих сессиях рекомендуем держать телефон на зарядке." },
      { q: "Что такое Ручной режим?",
        a: "Ручной режим — для доков без сигнальных ламп. Запусти таймер одним нажатием — он работает в фоне с постоянным уведомлением. При остановке сессия сохраняется в Историю со статистикой и расчётом detention." },
      { q: "Собирает ли приложение данные или нужен интернет?",
        a: "Нет. IDLe Metric работает полностью офлайн и не собирает никаких данных. Всё остаётся на устройстве. Без аккаунтов, без облака, без аналитики. Подробнее — в <a href=\"privacy-policy.html\">Политике конфиденциальности</a>." },
      { q: "Как экспортировать историю сессий?",
        a: "Перейди на экран Истории и нажми кнопку Экспорт. CSV-файл будет создан на устройстве. Ты можешь поделиться им через почту, облако или любое другое приложение." },
      { q: "Что такое Калькулятор detention?",
        a: "Калькулятор считает время сверх бесплатного периода и рассчитывает стоимость по твоей ставке. Настрой бесплатный период (по умолчанию 120 мин), ставку и валюту (USD, MXN, CAD) в настройках." }
    ]
  },
  privacy_page: {
    hero_title: "Политика конфиденциальности",
    hero_sub: "IDLe Metric — трекер сигналов дока",
    effective: "Дата вступления в силу: 7 апреля 2026 г.",
    sections: [
      { title: "Обзор", content: [
        "IDLe Metric — трекер времени ожидания на доке для дальнобойщиков. Эта политика объясняет, как приложение обрабатывает твои данные."
      ]},
      { title: "Сбор данных", content: [
        "<strong style=\"color:var(--text);\">IDLe Metric не собирает, не передаёт и не распространяет никаких персональных данных.</strong>",
        "Все данные, созданные приложением — история сессий, статистика и настройки — хранятся исключительно на твоём устройстве (локальная база Room и DataStore). Никакие данные не отправляются на серверы, в облако или третьим лицам."
      ]},
      { title: "Использование камеры", content: [
        "Приложение использует камеру устройства исключительно для определения RED и GREEN сигналов дока в реальном времени. Кадры обрабатываются на устройстве в памяти и никогда не записываются, не сохраняются и не передаются. Фото и видео не создаются."
      ]},
      { title: "Доступ в интернет", content: [
        "IDLe Metric не требует доступа к интернету. Приложение работает полностью офлайн."
      ]},
      { title: "Встроенные покупки", content: [
        "Приложение может предлагать опциональные подписки через Google Play Billing. Транзакции полностью обрабатываются Google Play в соответствии с <a href=\"https://policies.google.com/privacy\" target=\"_blank\" rel=\"noopener noreferrer\">Политикой конфиденциальности Google</a>. IDLe Metric не обрабатывает и не хранит платёжную информацию."
      ]},
      { title: "Сторонние сервисы", content: [
        "Приложение не интегрирует сторонние аналитические, рекламные или трекинговые сервисы."
      ]},
      { title: "Передача данных", content: [
        "Данные не передаются третьим лицам. Нет аккаунтов, синхронизации с облаком и телеметрии."
      ]},
      { title: "Экспорт данных", content: [
        "Ты можешь экспортировать историю сессий в CSV-файл через встроенную функцию экспорта. Файл создаётся локально на устройстве и передаётся только если ты решишь сделать это вручную."
      ]},
      { title: "Конфиденциальность детей", content: [
        "Приложение не предназначено для детей до 13 лет и не собирает их данные намеренно."
      ]},
      { title: "Изменения политики", content: [
        "При обновлении политики новая версия будет опубликована по тому же URL с обновлённой датой вступления в силу."
      ]},
      { title: "Контакты", content: [
        "Если у тебя есть вопросы о политике конфиденциальности, посети нашу <a href=\"support.html\">страницу поддержки</a> или свяжись с нами через страницу приложения в Google Play."
      ]}
    ]
  }
},

es: {
  nav: { features:"Funciones", how:"Cómo Funciona", download:"Descargar", privacy:"Privacidad", support:"Soporte" },
  hero: {
    tagline: "No te pierdas la señal VERDE",
    subtitle: "IDLe Metric detecta automáticamente las señales ROJA y VERDE del muelle a través de la cámara — descansa en la cabina y recibe una alerta cuando sea hora de salir.",
    cta_google: "Obtener en Google Play",
    cta_apple: "Descargar en App Store",
    badge_auto: "Detección automática",
    float_green: "VERDE detectado",
    float_wait: "Espera:"
  },
  sections: { features_label:"Funciones", screenshots_label:"Capturas de pantalla", screenshots_title:"Véalo en acción", how_label:"Configuración" },
  screenshots: { camera:"Modo cámara — VERDE detectado", history:"Historial de sesiones y estadísticas", detention:"Calculadora de Detention y alertas", tips:"Consejos y guía integrados" },
  stats: { offline:"100% Sin conexión", offline_sub:"No requiere internet", nodata:"Sin recolección de datos", nodata_sub:"Todo permanece en tu dispositivo", modes:"2 Modos", modes_sub:"Cámara y Manual" },
  features_title: "Todo lo que necesitas en el muelle",
  features: [
    { icon:"🎯", title:"Detección automática",      desc:"La cámara vigila la señal del muelle a través del espejo. Detecta ROJO y VERDE automáticamente." },
    { icon:"⏱️", title:"Temporizador de sesión",    desc:"Registra el tiempo de espera con desglose ROJO y VERDE. Historial completo con tiempos promedio, total y máximo." },
    { icon:"🔔", title:"Alerta de audio instantánea",desc:"En el momento en que la señal cambia a VERDE, recibes una alerta de audio, incluso con la pantalla atenuada." },
    { icon:"🎚️", title:"Zona de detección ajustable",desc:"Arrastra el marco azul para cubrir exactamente la señal. Calibra el seguimiento automático." },
    { icon:"💡", title:"Todas las condiciones",     desc:"Ajuste automático de exposición para sol brillante, nublado, noche e iluminación artificial de almacén." },
    { icon:"🔋", title:"Ahorro de batería",         desc:"La pantalla se atenúa al 0.5% durante largas esperas. Modo de reposo de cámara tras detectar la primera señal." },
    { icon:"✋", title:"Modo manual",               desc:"¿Sin señal en este muelle? Usa el temporizador manual. Funciona en segundo plano con notificación persistente." },
    { icon:"💰", title:"Calculadora de detention",  desc:"Configura tu período libre y tarifa por hora. La app calcula el tiempo y costo de detención automáticamente." },
    { icon:"📊", title:"Exportar a CSV",            desc:"Exporta el historial de sesiones como archivo CSV para informes, facturación o registros personales." }
  ],
  how_title: "Cómo funciona",
  how_steps: [
    { step:"01", title:"Monta tu teléfono",  desc:"Coloca tu teléfono cerca del espejo lateral para que la cámara vea la señal del muelle a través del reflejo." },
    { step:"02", title:"Apunta la zona",     desc:"Arrastra el marco azul sobre la señal. Toca Calibrar para bloquear el seguimiento automático." },
    { step:"03", title:"Descansa y espera",  desc:"La pantalla se atenúa para ahorrar batería. La app vigila continuamente. Cuando la señal sea VERDE — suena la alerta." }
  ],
  download_title: "Diseñado para condiciones reales de muelle",
  download_subtitle: "Probado en sol brillante, mañanas nubladas, noche e iluminación baja de almacén. Funciona sin conexión. Sin cuenta.",
  footer: { tagline:"Para camioneros. Sin conexión. Sin recolección de datos.", privacy:"Privacidad", support:"Soporte", rights:"Todos los derechos reservados." },
  support_page: {
    hero_title: "Soporte",
    hero_sub: "Estamos aquí para ayudarte a sacar el máximo provecho de IDLe Metric",
    email_title: "Soporte por correo",
    email_desc: "Envíanos un mensaje y te responderemos lo antes posible.",
    email_btn: "Contáctanos",
    review_title: "Deja una reseña",
    review_desc: "¿Te gusta la app? Califícala en Google Play — ayuda a otros conductores a encontrarla.",
    review_btn: "Calificar en Google Play",
    faq_label: "FAQ",
    faq_title: "Preguntas frecuentes",
    faq: [
      { q: "¿Cómo configuro la zona de detección?",
        a: "Monta tu teléfono cerca del espejo lateral. En la app, arrastra el marco azul para cubrir exactamente la señal. Luego toca <strong>Calibrar</strong> — la app bloqueará la señal y la seguirá automáticamente." },
      { q: "La app muestra UNKNOWN aunque veo la señal. ¿Qué hago?",
        a: "Prueba: (1) Asegúrate de que el marco ROI cubra exactamente la señal. (2) Usa el zoom para acercar la señal. (3) Espera un momento para que el auto-exposure se ajuste. (4) Toca <strong>Calibrar</strong>." },
      { q: "¿Funciona la app de noche o con poca luz?",
        a: "Sí. IDLe Metric tiene un sistema de exposición automática adaptativa para todas las condiciones: luz del día, nublado, noche e iluminación artificial de almacén." },
      { q: "¿Consume mucha batería?",
        a: "IDLe Metric tiene varias funciones de ahorro: la pantalla se atenúa al 0.5%, la cámara entra en modo reposo tras la primera señal y el autofocus se bloquea. Para sesiones largas, recomendamos mantener el teléfono cargado." },
      { q: "¿Qué es el Modo Manual?",
        a: "El Modo Manual es para muelles sin señales. Inicia el temporizador con un toque — funciona en segundo plano con notificación persistente. Al detenerlo, la sesión se guarda en el Historial con estadísticas completas." },
      { q: "¿La app recopila datos o requiere internet?",
        a: "No. IDLe Metric funciona completamente sin conexión y no recopila datos personales. Todo permanece en tu dispositivo. Sin cuentas, sin nube, sin seguimiento. Ver nuestra <a href=\"privacy-policy.html\">Política de privacidad</a>." },
      { q: "¿Cómo exporto el historial de sesiones?",
        a: "Ve a la pantalla de Historial y toca el botón Exportar. Se creará un archivo CSV en tu dispositivo. Puedes compartirlo por correo, almacenamiento en la nube o cualquier otra app." },
      { q: "¿Qué es la Calculadora de detention?",
        a: "Calcula el tiempo más allá de tu período gratuito y el costo según tu tarifa por hora. Configura el período gratuito (120 min por defecto), la tarifa y la moneda (USD, MXN, CAD) en ajustes." }
    ]
  },
  privacy_page: {
    hero_title: "Política de Privacidad",
    hero_sub: "IDLe Metric — Rastreador de señales de muelle",
    effective: "Fecha de vigencia: 7 de abril de 2026",
    sections: [
      { title: "Descripción general", content: [
        "IDLe Metric es un rastreador de tiempo de espera en muelles para camioneros. Esta política explica cómo la app maneja tus datos."
      ]},
      { title: "Recopilación de datos", content: [
        "<strong style=\"color:var(--text);\">IDLe Metric no recopila, transmite ni comparte ningún dato personal.</strong>",
        "Todos los datos generados por la app — historial de sesiones, estadísticas y configuración — se almacenan exclusivamente en tu dispositivo (base de datos Room local y DataStore). No se envía ningún dato a servidores, servicios en la nube o terceros."
      ]},
      { title: "Uso de la cámara", content: [
        "La app utiliza la cámara de tu dispositivo únicamente para detectar las señales ROJA y VERDE del muelle en tiempo real. Los fotogramas se procesan en el dispositivo en memoria y nunca se graban, almacenan ni transmiten. No se capturan fotos ni videos."
      ]},
      { title: "Acceso a internet", content: [
        "IDLe Metric no requiere acceso a internet. La app funciona completamente sin conexión."
      ]},
      { title: "Compras dentro de la app", content: [
        "La app puede ofrecer suscripciones opcionales a través de Google Play Billing. Las transacciones son gestionadas completamente por Google Play y están sujetas a la <a href=\"https://policies.google.com/privacy\" target=\"_blank\" rel=\"noopener noreferrer\">Política de privacidad de Google</a>. IDLe Metric no procesa ni almacena información de pago."
      ]},
      { title: "Servicios de terceros", content: [
        "La app no integra servicios de análisis, publicidad ni seguimiento de terceros."
      ]},
      { title: "Compartición de datos", content: [
        "No se comparten datos con terceros. No hay cuentas, sincronización en la nube ni telemetría."
      ]},
      { title: "Exportación de datos", content: [
        "Puedes exportar el historial de sesiones como archivo CSV usando la función de exportación integrada. El archivo se crea localmente en tu dispositivo y solo se comparte si tú lo decides manualmente."
      ]},
      { title: "Privacidad de menores", content: [
        "La app no está dirigida a menores de 13 años y no recopila sus datos intencionalmente."
      ]},
      { title: "Cambios en esta política", content: [
        "Si esta política se actualiza, la nueva versión se publicará en la misma URL con una fecha de vigencia actualizada."
      ]},
      { title: "Contacto", content: [
        "Si tienes preguntas sobre esta política de privacidad, visita nuestra <a href=\"support.html\">página de soporte</a> o contáctanos a través de la página de la app en Google Play."
      ]}
    ]
  }
},

uk: {
  nav: { features:"Функції", how:"Як працює", download:"Завантажити", privacy:"Конфіденційність", support:"Підтримка" },
  hero: {
    tagline: "Не пропусти GREEN сигнал",
    subtitle: "IDLe Metric автоматично визначає RED і GREEN сигнали доку через камеру телефону — відпочивай у кабіні та отримай сповіщення, коли час їхати.",
    cta_google: "Завантажити в Google Play",
    cta_apple: "Завантажити в App Store",
    badge_auto: "Авто-визначення",
    float_green: "GREEN виявлено",
    float_wait: "Очікування:"
  },
  sections: { features_label:"Функції", screenshots_label:"Скриншоти", screenshots_title:"Подивись як працює", how_label:"Налаштування" },
  screenshots: { camera:"Режим камери — GREEN виявлено", history:"Історія сесій та статистика", detention:"Калькулятор Detention та сповіщення", tips:"Вбудовані поради та керівництво" },
  stats: { offline:"100% Офлайн", offline_sub:"Без інтернету", nodata:"Дані не збираються", nodata_sub:"Все залишається на пристрої", modes:"2 Режими", modes_sub:"Камера та Ручний" },
  features_title: "Все що потрібно на доку",
  features: [
    { icon:"🎯", title:"Автовизначення сигналу",  desc:"Камера стежить за сигнальною лампою через бічне дзеркало. Автоматично визначає RED і GREEN — без натискань." },
    { icon:"⏱️", title:"Таймер сесії",            desc:"Рахує загальний час очікування з розбивкою на RED і GREEN. Історія сесій із середнім, загальним і максимальним часом." },
    { icon:"🔔", title:"Миттєве сповіщення",      desc:"Щойно сигнал перемикається на GREEN — звукове сповіщення, навіть якщо екран затемнений і ти відпочиваєш." },
    { icon:"🎚️", title:"Налаштовувана зона",      desc:"Перетягни рамку на сигнальну лампу. Відкалібруй стеження — застосунок стежить за лампою при зміщенні дзеркала." },
    { icon:"💡", title:"Будь-яке освітлення",     desc:"Авто-експозиція адаптується до яскравого сонця, хмарного неба, ночі та слабкого складського освітлення." },
    { icon:"🔋", title:"Економія батареї",        desc:"Екран затемнюється до 0.5% яскравості при тривалому очікуванні. Режим сну камери після першого сигналу." },
    { icon:"✋", title:"Ручний режим",            desc:"Немає сигнальної лампи на доку? Використовуй ручний таймер. Працює у фоні з постійним сповіщенням." },
    { icon:"💰", title:"Калькулятор detention",   desc:"Вкажи безкоштовний період і ставку за годину. Застосунок розрахує час і вартість detention автоматично." },
    { icon:"📊", title:"Експорт у CSV",           desc:"Експортуй історію сесій у CSV-файл для звітності, виставлення рахунків або особистих записів." }
  ],
  how_title: "Як це працює",
  how_steps: [
    { step:"01", title:"Закріпи телефон",  desc:"Розташуй телефон біля бічного дзеркала так, щоб камера бачила сигнальну лампу доку через відображення." },
    { step:"02", title:"Налаштуй зону",    desc:"Перетягни синю рамку на сигнальну лампу. Натисни Калібрування — застосунок стежитиме за лампою автоматично." },
    { step:"03", title:"Відпочивай і чекай",desc:"Екран затемнюється для економії батареї. Застосунок стежить постійно. Коли сигнал GREEN — сповіщення спрацює." }
  ],
  download_title: "Створено для реальних умов",
  download_subtitle: "Протестовано при яскравому сонці, хмарному ранку, вночі та при слабкому складському освітленні. Працює офлайн. Без акаунту.",
  footer: { tagline:"Для далекобійників. Працює офлайн. Дані не збираються.", privacy:"Конфіденційність", support:"Підтримка", rights:"Всі права захищені." },
  support_page: {
    hero_title: "Підтримка",
    hero_sub: "Ми тут, щоб допомогти тобі отримати максимум від IDLe Metric",
    email_title: "Написати нам",
    email_desc: "Надішли повідомлення і ми відповімо якнайшвидше.",
    email_btn: "Написати",
    review_title: "Залишити відгук",
    review_desc: "Подобається застосунок? Оціни його в Google Play — це допоможе іншим водіям знайти його.",
    review_btn: "Оцінити в Google Play",
    faq_label: "FAQ",
    faq_title: "Часті запитання",
    faq: [
      { q: "Як налаштувати зону виявлення?",
        a: "Закріпи телефон біля бічного дзеркала. У застосунку перетягни синю рамку на сигнальну лампу. Потім натисни <strong>Калібрування</strong> — застосунок зафіксує лампу і стежитиме за нею автоматично." },
      { q: "Застосунок показує UNKNOWN, хоча я бачу лампу. Що робити?",
        a: "Спробуй: (1) Переконайся, що рамка ROI точно накриває лампу. (2) Використай зум. (3) Зачекай — авто-експозиція адаптується. (4) Натисни <strong>Калібрування</strong>." },
      { q: "Чи працює застосунок вночі або при слабкому освітленні?",
        a: "Так. IDLe Metric має адаптивну систему авто-експозиції для всіх умов освітлення: яскравий день, хмарно, ніч і слабке складське освітлення." },
      { q: "Чи сильно розряджає батарею?",
        a: "У застосунку є кілька режимів економії: екран затемнюється до 0.5%, камера переходить у режим сну після першого сигналу, автофокус зафіксований. При дуже довгих сесіях рекомендуємо тримати телефон на зарядці." },
      { q: "Що таке Ручний режим?",
        a: "Ручний режим — для доків без сигнальних ламп. Запусти таймер одним натисканням — він працює у фоні з постійним сповіщенням. При зупинці сесія зберігається в Історію зі статистикою та розрахунком detention." },
      { q: "Чи збирає застосунок дані або потрібен інтернет?",
        a: "Ні. IDLe Metric працює повністю офлайн і не збирає жодних даних. Все залишається на пристрої. Без акаунтів, без хмари, без аналітики. Детальніше — у <a href=\"privacy-policy.html\">Політиці конфіденційності</a>." },
      { q: "Як експортувати історію сесій?",
        a: "Перейди на екран Історії і натисни кнопку Експорт. CSV-файл буде створено на пристрої. Ти можеш поділитися ним через пошту, хмарне сховище або будь-який інший застосунок." },
      { q: "Що таке Калькулятор detention?",
        a: "Калькулятор рахує час понад безкоштовний період і вартість за твоєю ставкою. Налаштуй безкоштовний період (за замовчуванням 120 хв), ставку і валюту (USD, MXN, CAD) у налаштуваннях." }
    ]
  },
  privacy_page: {
    hero_title: "Політика конфіденційності",
    hero_sub: "IDLe Metric — трекер сигналів доку",
    effective: "Дата набрання чинності: 7 квітня 2026 р.",
    sections: [
      { title: "Огляд", content: [
        "IDLe Metric — трекер часу очікування на доку для далекобійників. Ця політика пояснює, як застосунок обробляє твої дані."
      ]},
      { title: "Збір даних", content: [
        "<strong style=\"color:var(--text);\">IDLe Metric не збирає, не передає та не розповсюджує жодних персональних даних.</strong>",
        "Усі дані, створені застосунком — історія сесій, статистика та налаштування — зберігаються виключно на твоєму пристрої (локальна база Room та DataStore). Ніякі дані не відправляються на сервери, у хмару або третім особам."
      ]},
      { title: "Використання камери", content: [
        "Застосунок використовує камеру пристрою виключно для визначення RED і GREEN сигналів доку в реальному часі. Кадри обробляються на пристрої в пам'яті та ніколи не записуються, не зберігаються і не передаються. Фото та відео не створюються."
      ]},
      { title: "Доступ до інтернету", content: [
        "IDLe Metric не потребує доступу до інтернету. Застосунок працює повністю офлайн."
      ]},
      { title: "Внутрішньододаткові покупки", content: [
        "Застосунок може пропонувати опціональні підписки через Google Play Billing. Транзакції повністю обробляються Google Play відповідно до <a href=\"https://policies.google.com/privacy\" target=\"_blank\" rel=\"noopener noreferrer\">Політики конфіденційності Google</a>. IDLe Metric не обробляє та не зберігає платіжну інформацію."
      ]},
      { title: "Сторонні сервіси", content: [
        "Застосунок не інтегрує сторонні аналітичні, рекламні або трекінгові сервіси."
      ]},
      { title: "Передача даних", content: [
        "Дані не передаються третім особам. Немає акаунтів, синхронізації з хмарою та телеметрії."
      ]},
      { title: "Експорт даних", content: [
        "Ти можеш експортувати історію сесій у CSV-файл через вбудовану функцію експорту. Файл створюється локально на пристрої та передається лише якщо ти вирішиш зробити це вручну."
      ]},
      { title: "Конфіденційність дітей", content: [
        "Застосунок не призначений для дітей до 13 років та не збирає їх дані навмисно."
      ]},
      { title: "Зміни політики", content: [
        "При оновленні політики нова версія буде опублікована за тим самим URL із оновленою датою набрання чинності."
      ]},
      { title: "Контакти", content: [
        "Якщо у тебе є запитання щодо політики конфіденційності, відвідай нашу <a href=\"support.html\">сторінку підтримки</a> або зв'яжись з нами через сторінку застосунку в Google Play."
      ]}
    ]
  }
},

fr: {
  nav: { features:"Fonctionnalités", how:"Comment ça marche", download:"Télécharger", privacy:"Confidentialité", support:"Support" },
  hero: {
    tagline: "Ne manquez jamais le signal VERT",
    subtitle: "IDLe Metric détecte automatiquement les signaux ROUGE et VERT du quai via la caméra — reposez-vous en cabine et recevez une alerte dès qu'il est temps de partir.",
    cta_google: "Obtenir sur Google Play",
    cta_apple: "Télécharger sur App Store",
    badge_auto: "Détection automatique",
    float_green: "VERT détecté",
    float_wait: "Attente :"
  },
  sections: { features_label:"Fonctionnalités", screenshots_label:"Captures d'écran", screenshots_title:"Voir en action", how_label:"Configuration" },
  screenshots: { camera:"Mode caméra — VERT détecté", history:"Historique des sessions & Statistiques", detention:"Calculateur de Detention & Alertes", tips:"Conseils & Guide intégrés" },
  stats: { offline:"100% Hors ligne", offline_sub:"Sans connexion internet", nodata:"Aucune donnée collectée", nodata_sub:"Tout reste sur votre appareil", modes:"2 Modes", modes_sub:"Caméra et Manuel" },
  features_title: "Tout ce dont vous avez besoin au quai",
  features: [
    { icon:"🎯", title:"Détection automatique",     desc:"La caméra surveille le signal du quai via le rétroviseur. Détecte ROUGE et VERT automatiquement." },
    { icon:"⏱️", title:"Minuteur de session",       desc:"Enregistre le temps d'attente avec détail ROUGE et VERT. Historique complet avec temps moyen, total et maximum." },
    { icon:"🔔", title:"Alerte audio instantanée",  desc:"Dès que le signal passe au VERT, une alerte audio se déclenche — même si l'écran est atténué et que vous vous reposez." },
    { icon:"🎚️", title:"Zone de détection réglable",desc:"Faites glisser le cadre bleu sur le signal. Calibrez le suivi pour que l'app suive la lumière automatiquement." },
    { icon:"💡", title:"Toutes conditions",         desc:"Ajustement automatique de l'exposition pour soleil direct, couvert, nuit et éclairage artificiel d'entrepôt." },
    { icon:"🔋", title:"Économie de batterie",      desc:"L'écran s'atténue à 0,5% de luminosité lors de longues attentes. Mode veille caméra après la première détection." },
    { icon:"✋", title:"Mode manuel",               desc:"Pas de signal à ce quai ? Utilisez le minuteur manuel. Fonctionne en arrière-plan avec une notification persistante." },
    { icon:"💰", title:"Calculateur de detention",  desc:"Définissez votre période gratuite et votre tarif horaire. L'app calcule automatiquement le temps et le coût." },
    { icon:"📊", title:"Export CSV",                desc:"Exportez l'historique en fichier CSV pour les rapports, la facturation ou vos archives." }
  ],
  how_title: "Comment ça marche",
  how_steps: [
    { step:"01", title:"Montez votre téléphone", desc:"Placez votre téléphone près du rétroviseur pour que la caméra voie le signal du quai à travers le reflet." },
    { step:"02", title:"Pointez la zone",        desc:"Faites glisser le cadre bleu sur le signal. Appuyez sur Calibrer pour verrouiller le suivi automatique." },
    { step:"03", title:"Reposez-vous et attendez",desc:"L'écran s'atténue pour économiser la batterie. L'app surveille en continu. Quand le signal est VERT — l'alerte se déclenche." }
  ],
  download_title: "Conçu pour les conditions réelles de quai",
  download_subtitle: "Testé en plein soleil, matin couvert, nuit et faible éclairage d'entrepôt. Fonctionne hors ligne. Sans compte requis.",
  footer: { tagline:"Pour les routiers. Hors ligne. Aucune donnée collectée.", privacy:"Confidentialité", support:"Support", rights:"Tous droits réservés." },
  support_page: {
    hero_title: "Support",
    hero_sub: "Nous sommes là pour vous aider à tirer le meilleur d'IDLe Metric",
    email_title: "Support par e-mail",
    email_desc: "Envoyez-nous un message et nous vous répondrons dès que possible.",
    email_btn: "Nous contacter",
    review_title: "Laisser un avis",
    review_desc: "Vous aimez l'app ? Notez-la sur Google Play — ça aide d'autres conducteurs à la trouver.",
    review_btn: "Noter sur Google Play",
    faq_label: "FAQ",
    faq_title: "Questions fréquentes",
    faq: [
      { q: "Comment configurer la zone de détection ?",
        a: "Montez votre téléphone près du rétroviseur. Dans l'app, faites glisser le cadre bleu sur le signal. Appuyez ensuite sur <strong>Calibrer</strong> — l'app verrouillera le signal et le suivra automatiquement." },
      { q: "L'app affiche UNKNOWN alors que je vois le signal. Que faire ?",
        a: "Essayez : (1) Assurez-vous que le cadre ROI couvre exactement le signal. (2) Utilisez le zoom pour rapprocher le signal. (3) Attendez que l'exposition automatique s'ajuste. (4) Appuyez sur <strong>Calibrer</strong>." },
      { q: "L'app fonctionne-t-elle de nuit ou en faible luminosité ?",
        a: "Oui. IDLe Metric dispose d'un système d'exposition automatique adaptative pour toutes les conditions : plein soleil, couvert, nuit et faible éclairage d'entrepôt." },
      { q: "L'app consomme-t-elle beaucoup de batterie ?",
        a: "IDLe Metric intègre plusieurs fonctions d'économie : l'écran s'atténue à 0,5% après détection, la caméra entre en veille après le premier signal, la mise au point est verrouillée. Pour les longues sessions, gardez le téléphone branché." },
      { q: "Qu'est-ce que le Mode Manuel ?",
        a: "Le Mode Manuel est pour les quais sans signaux. Démarrez le minuteur en un tap — il fonctionne en arrière-plan avec une notification persistante. À l'arrêt, la session est sauvegardée dans l'Historique avec les statistiques complètes." },
      { q: "L'app collecte-t-elle des données ou nécessite-t-elle internet ?",
        a: "Non. IDLe Metric fonctionne entièrement hors ligne et ne collecte aucune donnée personnelle. Tout reste sur votre appareil. Pas de compte, pas de cloud, pas de tracking. Voir notre <a href=\"privacy-policy.html\">Politique de confidentialité</a>." },
      { q: "Comment exporter l'historique des sessions ?",
        a: "Allez dans l'écran Historique et appuyez sur le bouton Exporter. Un fichier CSV sera créé sur votre appareil. Vous pouvez le partager par e-mail, stockage cloud ou toute autre app." },
      { q: "Qu'est-ce que le Calculateur de detention ?",
        a: "Il calcule le temps au-delà de votre période gratuite et le coût selon votre tarif horaire. Configurez la période gratuite (120 min par défaut), le tarif et la devise (USD, MXN, CAD) dans les paramètres." }
    ]
  },
  privacy_page: {
    hero_title: "Politique de confidentialité",
    hero_sub: "IDLe Metric — Tracker de signaux de quai",
    effective: "Date d'entrée en vigueur : 7 avril 2026",
    sections: [
      { title: "Présentation", content: [
        "IDLe Metric est un tracker de temps d'attente aux quais pour chauffeurs routiers. Cette politique explique comment l'app traite vos données."
      ]},
      { title: "Collecte de données", content: [
        "<strong style=\"color:var(--text);\">IDLe Metric ne collecte, ne transmet et ne partage aucune donnée personnelle.</strong>",
        "Toutes les données générées par l'app — historique des sessions, statistiques et paramètres — sont stockées exclusivement sur votre appareil (base de données Room locale et DataStore). Aucune donnée n'est envoyée à des serveurs, services cloud ou tiers."
      ]},
      { title: "Utilisation de la caméra", content: [
        "L'app utilise la caméra de votre appareil uniquement pour détecter les signaux ROUGE et VERT du quai en temps réel. Les images sont traitées sur l'appareil en mémoire et ne sont jamais enregistrées, stockées ou transmises. Aucune photo ni vidéo n'est capturée."
      ]},
      { title: "Accès à internet", content: [
        "IDLe Metric ne nécessite pas d'accès à internet. L'app fonctionne entièrement hors ligne."
      ]},
      { title: "Achats intégrés", content: [
        "L'app peut proposer des abonnements optionnels via Google Play Billing. Les transactions sont entièrement gérées par Google Play et sont soumises à la <a href=\"https://policies.google.com/privacy\" target=\"_blank\" rel=\"noopener noreferrer\">Politique de confidentialité de Google</a>. IDLe Metric ne traite ni ne stocke aucune information de paiement."
      ]},
      { title: "Services tiers", content: [
        "L'app n'intègre aucun service d'analyse, de publicité ou de suivi tiers."
      ]},
      { title: "Partage des données", content: [
        "Aucune donnée n'est partagée avec des tiers. Il n'y a pas de comptes, pas de synchronisation cloud, et pas de télémétrie."
      ]},
      { title: "Export des données", content: [
        "Vous pouvez exporter votre historique de sessions en fichier CSV via la fonction d'export intégrée. Ce fichier est créé localement sur votre appareil et partagé uniquement si vous le décidez manuellement."
      ]},
      { title: "Confidentialité des enfants", content: [
        "L'app n'est pas destinée aux enfants de moins de 13 ans et ne collecte pas délibérément leurs données."
      ]},
      { title: "Modifications de cette politique", content: [
        "Si cette politique est mise à jour, la nouvelle version sera publiée à la même URL avec une date d'entrée en vigueur mise à jour."
      ]},
      { title: "Contact", content: [
        "Si vous avez des questions sur cette politique de confidentialité, consultez notre <a href=\"support.html\">page d'assistance</a> ou contactez-nous via la page de l'app sur Google Play."
      ]}
    ]
  }
}

}; // end LOCALES

/* ============================================================
   Engine
   ============================================================ */

function get(obj, path) {
  return path.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), obj);
}

function applyLocale(data) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = get(data, el.getAttribute('data-i18n'));
    if (val !== undefined) el.textContent = val;
  });

  const featuresContainer = document.getElementById('features-list');
  if (featuresContainer && data.features) {
    featuresContainer.innerHTML = data.features.map(f => `
      <div class="feature-card">
        <span class="feature-icon">${f.icon}</span>
        <h3>${f.title}</h3>
        <p>${f.desc}</p>
      </div>
    `).join('');
  }

  const howContainer = document.getElementById('how-steps-list');
  if (howContainer && data.how_steps) {
    howContainer.innerHTML = data.how_steps.map(s => `
      <div class="step-card">
        <div class="step-number">${s.step}</div>
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
      </div>
    `).join('');
  }

  // Support page — hero
  const supportHeroTitle = document.getElementById('support-hero-title');
  const supportHeroSub   = document.getElementById('support-hero-sub');
  if (supportHeroTitle && data.support_page) supportHeroTitle.textContent = data.support_page.hero_title;
  if (supportHeroSub   && data.support_page) supportHeroSub.textContent   = data.support_page.hero_sub;

  // Support page — cards
  const supportCards = document.getElementById('support-cards');
  if (supportCards && data.support_page) {
    const sp = data.support_page;
    supportCards.innerHTML = `
      <div class="support-card">
        <span class="support-card-icon">📧</span>
        <h3>${sp.email_title}</h3>
        <p>${sp.email_desc}</p>
        <a href="mailto:support@idlemetric.app" class="btn btn-primary" style="width:100%;justify-content:center;">${sp.email_btn}</a>
      </div>
      <div class="support-card">
        <span class="support-card-icon">⭐</span>
        <h3>${sp.review_title}</h3>
        <p>${sp.review_desc}</p>
        <a href="#" class="btn btn-outline" style="width:100%;justify-content:center;">${sp.review_btn}</a>
      </div>
    `;
  }

  // Support page — FAQ label & title
  const faqLabel = document.getElementById('faq-label');
  const faqTitle = document.getElementById('faq-title');
  if (faqLabel && data.support_page) faqLabel.textContent = data.support_page.faq_label;
  if (faqTitle && data.support_page) faqTitle.textContent = data.support_page.faq_title;

  // Support page — FAQ list
  const faqList = document.getElementById('faq-list');
  if (faqList && data.support_page && data.support_page.faq) {
    faqList.innerHTML = data.support_page.faq.map(item => `
      <div class="faq-item">
        <button class="faq-question">
          ${item.q}
          <span class="faq-chevron">▾</span>
        </button>
        <div class="faq-answer"><p>${item.a}</p></div>
      </div>
    `).join('');
    // Re-attach accordion listeners after re-render
    faqList.querySelectorAll('.faq-question').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.closest('.faq-item');
        const isOpen = item.classList.contains('open');
        faqList.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
        if (!isOpen) item.classList.add('open');
      });
    });
  }

  // Privacy policy page
  const privacyHeroTitle = document.getElementById('privacy-hero-title');
  const privacyHeroSub   = document.getElementById('privacy-hero-sub');
  const privacyDate      = document.getElementById('privacy-date');
  const privacySections  = document.getElementById('privacy-sections');

  if (data.privacy_page) {
    if (privacyHeroTitle) privacyHeroTitle.textContent = data.privacy_page.hero_title;
    if (privacyHeroSub)   privacyHeroSub.textContent   = data.privacy_page.hero_sub;
    if (privacyDate)      privacyDate.textContent       = '📅 ' + data.privacy_page.effective;
    if (privacySections && data.privacy_page.sections) {
      privacySections.innerHTML = data.privacy_page.sections.map(s => `
        <h2>${s.title}</h2>
        ${s.content.map(p => `<p>${p}</p>`).join('')}
      `).join('');
    }
  }

  document.documentElement.lang = currentLang;
}

const LANG_LABELS = { en:'🇺🇸 EN', ru:'🇷🇺 RU', es:'🇪🇸 ES', uk:'🇺🇦 UK', fr:'🇫🇷 FR' };

function setLang(lang) {
  if (!LANGS.includes(lang)) lang = DEFAULT_LANG;
  currentLang = lang;

  const data = LOCALES[lang];
  if (!data) return;

  applyLocale(data);

  // Update trigger label
  const currentLabel = document.getElementById('lang-current-label');
  if (currentLabel) currentLabel.textContent = LANG_LABELS[lang] || lang.toUpperCase();

  // Mark active option
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Close dropdown
  const switcher = document.getElementById('lang-switcher');
  const trigger  = document.getElementById('lang-trigger');
  if (switcher) switcher.classList.remove('open');
  if (trigger)  trigger.setAttribute('aria-expanded', 'false');

  try { localStorage.setItem('idle_metric_lang', lang); } catch(e) {}
}

function detectLang() {
  try {
    const saved = localStorage.getItem('idle_metric_lang');
    if (saved && LANGS.includes(saved)) return saved;
  } catch(e) {}
  const browser = (navigator.language || '').slice(0, 2).toLowerCase();
  return LANGS.includes(browser) ? browser : DEFAULT_LANG;
}

document.addEventListener('DOMContentLoaded', () => {
  // Dropdown toggle
  const trigger  = document.getElementById('lang-trigger');
  const switcher = document.getElementById('lang-switcher');

  if (trigger && switcher) {
    trigger.addEventListener('click', e => {
      e.stopPropagation();
      const isOpen = switcher.classList.toggle('open');
      trigger.setAttribute('aria-expanded', isOpen);
    });

    // Close on outside click
    document.addEventListener('click', () => {
      switcher.classList.remove('open');
      trigger.setAttribute('aria-expanded', 'false');
    });

    // Prevent dropdown clicks from bubbling to document
    const dropdown = document.getElementById('lang-dropdown');
    if (dropdown) dropdown.addEventListener('click', e => e.stopPropagation());
  }

  // Language option clicks
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });

  setLang(detectLang());
});
