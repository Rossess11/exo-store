// ====================================================================
// EXODUS STORE - BASE DE DATOS DE SCRIPTS Y SISTEMAS
// ====================================================================

const EXODUS_SCRIPTS = [
    {
        id: 'exo-hud',
        title: 'EXO-HUD RETRO',
        category: 'hud',
        categoryLabel: 'INTERFACES & HUD',
        tag: 'TOP 1',
        tagType: 'badge-gold',
        image: 'assets/scripts/exo-hud.png',
        frameworks: ['QB-CORE', 'OX', 'ESX'],
        shortDesc: 'HUD minimalista estilo retro gaming con sombras duras, velocímetro digital, cinemáticas y menús independientes.',
        fullDesc: 'Sistema de HUD integral desarrollado con estética de videojuegos retro en blanco y negro. Incluye velocímetro analógico-digital con indicador de combustible, cinturón dinámico, compás cardinal superior, barras de estado desacopladas con sombras marcadas y soporte para resolución ultrawide.',
        resmon: '0.00 ms',
        features: [
            'Estética retro gaming en escala blanco y negro con sombreado de bloques',
            'Velocímetro de alta precisión con alerta de daño de motor y cinturón',
            'Compás dinámico integrado en cabecera con coordenadas y calles',
            'Micro-optimización sin hilos pesados (consumo estable de 0.00ms)',
            'Cinemáticas letterbox y viñeta para inmersión cinematográfica',
            'Menú de personalización visual por usuario accesible en tiempo real'
        ],
        commands: ['/hud - Abre configuración visual', '/cinematica - Modo película'],
        dependencies: ['qb-core o esx', 'pma-voice (opcional)'],
        bannerGrad: 'linear-gradient(135deg, #22242b 0%, #353844 100%)',
        accentIcon: 'fa-solid fa-gauge-high'
    },
    {
        id: 'qb-multicharacter',
        title: 'EXODUS MULTICHARACTER',
        category: 'multichar',
        categoryLabel: 'GESTIÓN DE PERSONAJES',
        tag: 'EXCLUSIVO',
        tagType: 'badge-dark',
        image: 'assets/scripts/qb-multicharacter.png',
        frameworks: ['QB-CORE'],
        shortDesc: 'Hub interactivo con pantalla intermedia, estadísticas en tiempo real, selección cinemática y caída aérea estilo GTA.',
        fullDesc: 'Rediseño completo del sistema multicharacter para FiveM. Incorpora un Hub inicial de bienvenida con accesos a normativas, guía de controles, podio de jugadores destacados y vista previa de personaje fumando en el Observatorio. Incluye una transición fluida desde el cielo con cámara cinemática hacia el punto de spawn.',
        resmon: '0.00 ms',
        features: [
            'Página intermedia de bienvenida con slots disponibles y selector de secciones',
            'Cámaras dinámicas con rotación alrededor del ped en el Observatorio Galileo',
            'Animación original de descenso desde la atmósfera (+800m) estilo GTA V',
            'Música ambiente theme.mp3 con desvanecimiento gradual al entrar a la ciudad',
            'Pantalla de transición a oscuras con logotipo animado del servidor',
            'Diseño de recuadros retro con tipografía Rajdhani y Bebas Neue'
        ],
        commands: ['/logout - Desconecta al multicharacter (Administrador)'],
        dependencies: ['qb-core', 'qb-clothing', 'oxmysql'],
        bannerGrad: 'linear-gradient(135deg, #252730 0%, #363945 100%)',
        accentIcon: 'fa-solid fa-users-gear'
    },
    {
        id: 'exo-dispatch',
        title: 'EXO DISPATCH & ALERTAS',
        category: 'police',
        categoryLabel: 'SISTEMAS POLICIALES',
        tag: 'POPULAR',
        tagType: 'badge-gold',
        image: 'assets/scripts/exo-dispatch.png',
        frameworks: ['QB-CORE'],
        shortDesc: 'Centro de control policial de última generación con alertas automatizadas, llamadas de ciudadanos y GPS rápido.',
        fullDesc: 'MDT y sistema de despachos policial y de emergencias médicas de alto rendimiento. Muestra alertas de disparos, robos a bancos, joyerías, tiendas y 911 con rutas GPS de navegación rápida con un solo toque y registro de historial.',
        resmon: '0.00 ms',
        features: [
            'Alertas sonoras y visuales diferenciadas por gravedad de incidente',
            'Fijación de ruta GPS al incidente pulsando la tecla de acceso rápido',
            'Filtro de llamadas civiles 911 y avisos internos de código rojo',
            'Compatibilidad con vehículos policiales y unidades aéreas de patrulla',
            'Diseño de terminal táctica retro con colores de alto contraste'
        ],
        commands: ['/dispatch - Abre terminal de despachos', 'G - Respuesta rápida a la última alerta'],
        dependencies: ['qb-core', 'exo-notify', 'qb-policejob'],
        bannerGrad: 'linear-gradient(135deg, #1e2638 0%, #29354d 100%)',
        accentIcon: 'fa-solid fa-headset'
    },
    {
        id: 'exo-target',
        title: 'EXO TARGET INTERACTION',
        category: 'systems',
        categoryLabel: 'SISTEMAS NATIVOS',
        tag: 'OPTIMIZADO',
        tagType: 'badge-dark',
        image: 'assets/scripts/exo-target.png',
        frameworks: ['QB-CORE', 'STANDALONE'],
        shortDesc: 'Interacción visual con ojo interactivo ultra fluido para peds, vehículos, objetos y zonas poligonales.',
        fullDesc: 'Reemplazo moderno para sistemas tradicionales de interacción. Utiliza detección por Raycast nativo y escaneo de CVehicle pools para interactuar con puertas, maleteros, surtidores de gasolina, cajeros automáticos y ciudadanos sin pérdida de rendimiento.',
        resmon: '0.00 ms',
        features: [
            'Escaneo de CVehicle y CPed con máxima precisión matemática',
            'Iconos personalizables por opción con verificación de distancia real',
            'Filtros de trabajo, items requeridos en inventario y comprobación de estado',
            'Animación suave de apertura y cierre con estética retro'
        ],
        commands: ['ALT Izquierdo - Activar interacción'],
        dependencies: ['PolyZone', 'qb-core'],
        bannerGrad: 'linear-gradient(135deg, #24262f 0%, #363946 100%)',
        accentIcon: 'fa-solid fa-bullseye'
    },
    {
        id: 'exo-notify',
        title: 'EXO NOTIFY RETRO',
        category: 'hud',
        categoryLabel: 'INTERFACES & HUD',
        tag: 'UTILIDAD',
        tagType: 'badge-dark',
        image: 'assets/scripts/exo-notify.png',
        frameworks: ['STANDALONE'],
        shortDesc: 'Notificaciones flotantes personalizables con sonido retro, tipografía nítida y tipos de alerta dinámicos.',
        fullDesc: 'Librería de notificaciones para FiveM diseñada para encajar con el estilo retro en blanco y negro. Soporta avisos de éxito, error, información, alerta policial y anuncios globales del servidor con colas no bloqueantes.',
        resmon: '0.00 ms',
        features: [
            'Efectos sonoros sutiles estilo arcade al recibir alertas',
            'Soporte para títulos, subtítulos, iconos FontAwesome y barras de tiempo',
            'Posicionamiento adaptable en pantalla (superior derecha, centro o inferior)',
            'Export universal compatible con QBCore.Functions.Notify'
        ],
        commands: ['Exportación nativa exports["exo-notify"]:Alert()'],
        dependencies: ['Ninguna (Standalone)'],
        bannerGrad: 'linear-gradient(135deg, #282a33 0%, #1f2129 100%)',
        accentIcon: 'fa-solid fa-bell'
    },
    {
        id: 'exo-radio',
        title: 'EXODUS RADIO RETRO',
        category: 'systems',
        categoryLabel: 'COMUNICACIÓN & VOZ',
        tag: 'VOZ 3D',
        tagType: 'badge-gold',
        image: 'assets/scripts/exo-radio.png',
        frameworks: ['PMA-VOICE', 'QB-CORE', 'STANDALONE'],
        shortDesc: 'Walkie-talkie retro con canales privados, frecuencias policiales/EMS protegidas y audio espacial.',
        fullDesc: 'Sistema de comunicación por radiofrecuencia para FiveM adaptado a PMA-Voice con diseño físico interactivo de emisora retro. Permite unirse a frecuencias con control de volumen independiente, selector de canales codificados para cuerpos de seguridad y efectos de sonido de estática y click de transmisión reales.',
        resmon: '0.00 ms',
        features: [
            'Compatibilidad nativa con pma-voice y mumble-voip',
            'Frecuencias restringidas por trabajo (Policía, Sanitarios, Mecánicos)',
            'Diseño de emisora portátil retro en escala de grises con animaciones',
            'Control de volumen, silenciado rápido y cambio de canal mediante rueda',
            'Sonidos de clic de micro (mic-clicks) y ráfaga de estática inmersivos'
        ],
        commands: ['/radio - Abre la interfaz de radio', 'Filtro por teclado o menú radial'],
        dependencies: ['pma-voice', 'qb-core o standalone'],
        bannerGrad: 'linear-gradient(135deg, #23252e 0%, #353846 100%)',
        accentIcon: 'fa-solid fa-walkie-talkie'
    },
    {
        id: 'exo-inventory',
        title: 'EXODUS INVENTORY RETRO',
        category: 'systems',
        categoryLabel: 'INVENTARIO & ITEMS',
        tag: 'GRID v2',
        tagType: 'badge-dark',
        image: 'assets/scripts/exo-inventory.png',
        frameworks: ['QB-CORE', 'OXMYSQL'],
        shortDesc: 'Inventario interactivo por cuadrícula con soporte de peso, durabilidad de armas, drop en suelo y baúles.',
        fullDesc: 'Rediseño completo del inventario clásico de QBCore adaptado a la estética retro gaming de bloques y sombras duras. Cuenta con sistema de arrastre y soltar (Drag & Drop) ultra fluido, soporte para maleteros, guanteras, bolsillos secundarios, drop físico en suelo y gestión de accesorios de armas.',
        resmon: '0.01 ms',
        features: [
            'Diseño retro monocromático con bordes definidos y slots táctiles',
            'Arrastrar y soltar ultra rápido optimizado en NUI',
            'Compatibilidad con armas visibles en la espalda y bolsillos',
            'Soporte de pesos en kg, degradación de items y números de serie',
            'Acceso rápido con teclas numéricas 1 al 5'
        ],
        commands: ['TAB - Abrir / cerrar inventario', '1-5 - Uso rápido de slots'],
        dependencies: ['qb-core', 'oxmysql'],
        bannerGrad: 'linear-gradient(135deg, #20222a 0%, #30333f 100%)',
        accentIcon: 'fa-solid fa-box-open'
    },
    {
        id: 'exo-policemenu',
        title: 'EXO POLICE RADIAL MENU',
        category: 'police',
        categoryLabel: 'SISTEMAS POLICIALES',
        tag: 'TÁCTICO',
        tagType: 'badge-gold',
        image: 'assets/scripts/exo-policemenu.png',
        frameworks: ['QB-CORE'],
        shortDesc: 'Menú interactivo de acciones policiales rápidas: cacheos, esposado, multas, colocación de conos y radares.',
        fullDesc: 'Interfaz radial táctica desarrollada para agentes de policía. Agrupa en un solo menú con estilo retro las acciones de esposar, escoltar, meter/sacar de vehículos, consultar DNI del sospechoso, emisión de multas instantáneas y despliegue de objetos de control de tráfico en la calzada.',
        resmon: '0.00 ms',
        features: [
            'Acceso instantáneo mediante tecla rápida o menú F1',
            'Submenús categorizados: Ciudadano, Vehículo y Tráfico',
            'Sistema de esposado y escolta sincronizado sin desync',
            'Menú integrado de colocación de bandas de clavos y barreras',
            'Gestión de multas directas a la cuenta bancaria del detenido'
        ],
        commands: ['F1 / F6 - Menú de trabajo policial', '/cuff - Comando de esposado rápido'],
        dependencies: ['qb-core', 'qb-policejob', 'exo-notify'],
        bannerGrad: 'linear-gradient(135deg, #1d2538 0%, #28334b 100%)',
        accentIcon: 'fa-solid fa-shield-halved'
    },
    {
        id: 'exo-loadingscreen',
        title: 'EXODUS RETRO LOADING SCREEN',
        category: 'hud',
        categoryLabel: 'PANTALLAS DE CARGA',
        tag: 'CINEMÁTICO',
        tagType: 'badge-dark',
        image: 'assets/scripts/exo-loadingscreen.png',
        frameworks: ['STANDALONE'],
        shortDesc: 'Pantalla de carga cinemática con música ambiente, fondo de rayas animadas, noticias y barra de progreso real.',
        fullDesc: 'Pantalla de carga personalizada para FiveM con estética retro en blanco y negro. Integra reproductor de audio con control de volumen y pausa, fondo de rayas en diagonal animadas con CSS puro, tarjetas de normativa y guías del servidor y porcentaje de descarga sincronizado con los assets del juego.',
        resmon: '0.00 ms',
        features: [
            'Fondo animado dinámico con rayas diagonales fluidas',
            'Reproductor con canciones configurables y tecla para mutear/pausar',
            'Carrusel de tarjetas informativas con controles y redes sociales',
            'Barra de carga precisa conectada a los eventos de carga de Cfx.re',
            'Transición suave a negro sin cortes visuales al cargar'
        ],
        commands: ['Barra espaciadora - Pausar música', 'Teclas flechas - Cambiar canción'],
        dependencies: ['Ninguna (Standalone)'],
        bannerGrad: 'linear-gradient(135deg, #242630 0%, #343744 100%)',
        accentIcon: 'fa-solid fa-spinner'
    },
    {
        id: 'exo-chat',
        title: 'EXODUS RETRO CHAT',
        category: 'hud',
        categoryLabel: 'INTERFACES & CHAT',
        tag: 'MINIMAL',
        tagType: 'badge-dark',
        image: 'assets/scripts/exo-chat.png',
        frameworks: ['QB-CORE', 'ESX', 'STANDALONE'],
        shortDesc: 'Chat flotante de rol con comandos /me, /do, /ooc, autocompletado y tipografía nítida sin desenfoque.',
        fullDesc: 'Sustituto moderno del chat por defecto de FiveM. Ofrece una estética retro gaming limpia con etiquetas coloreadas de alto contraste (/me en magenta, /do en verde, /ooc en gris oscuro, anuncios en dorado), historial de mensajes con flechas del teclado y sistema de autocompletado de comandos y argumentos.',
        resmon: '0.00 ms',
        features: [
            'Comandos de rol clásicos integrados: /me, /do, /ooc, /twt, /policia',
            'Sugerencias predictivas al escribir comandos con parámetros',
            'Diseño flotante con auto-ocultación tras inactividad para evitar distracciones',
            'Filtro anti-spam y protección de caracteres especiales',
            'Personalización de tamaño de fuente y fondo de caja desde config'
        ],
        commands: ['T - Abrir chat para escribir', '/clear - Limpia el historial de chat'],
        dependencies: ['Ninguna (Standalone)'],
        bannerGrad: 'linear-gradient(135deg, #262732 0%, #373a48 100%)',
        accentIcon: 'fa-solid fa-comment-dots'
    },
    {
        id: 'exo-map',
        title: 'EXODUS MAP & RADAR',
        category: 'maps',
        categoryLabel: 'MAPAS & NAVEGACIÓN',
        tag: 'HD RETRO',
        tagType: 'badge-gold',
        image: 'assets/scripts/exo-map.png',
        frameworks: ['STANDALONE', 'QB-CORE', 'ESX'],
        shortDesc: 'Mapa detallado en alta resolución con códigos postales, nombres de calles y minimapa radar optimizado.',
        fullDesc: 'Cartografía completa en alta definición adaptada a la estética retro monocromática de Exodus. Integra códigos postales numéricos en cada intersección para despachos policiales y emergencias, nombres legibles de todas las calles y distritos de Los Santos y el condado de Blaine, y minimapa con compás de navegación.',
        resmon: '0.00 ms',
        features: [
            'Texturas vectoriales HD optimizadas en formato DXT5 sin caídas de rendimiento',
            'Códigos postales detallados visibles tanto en el mapa de pausa (ESC) como en el minimapa',
            'Nombres de calles y autopistas de alta legibilidad con tipografía retro',
            'Compatibilidad con minimapa cuadrado y circular en HUD nativo o personalizado',
            'Buscador de códigos postales integrado mediante comando de consola',
            'Puntos de interés (POIs) y blips personalizados con estilo minimalista'
        ],
        commands: ['/postal [código] - Fija la ruta GPS al código postal', 'ESC / P - Abrir mapa completo'],
        dependencies: ['Ninguna (Standalone)'],
        bannerGrad: 'linear-gradient(135deg, #1f232c 0%, #2f3544 100%)',
        accentIcon: 'fa-solid fa-map-location-dot'
    }
];

// Estadísticas del catálogo
const EXODUS_STATS = {
    totalScripts: EXODUS_SCRIPTS.length,
    activeServers: 1, // Solo Exodus Roleplay como solicitado
    serverName: 'Exodus Roleplay',
    playersOnline: 'OFFLINE',
    serverStatus: 'En Desarrollo',
    discordMembers: '2.850+'
};
