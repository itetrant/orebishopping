// ===Hardcode Pictures for demonstration======================
import {
  encre1,
  encre2,
  encre3,
  encre4,
  ruban1,
  ruban2,
  ruban3,
  ruban4,
  bac1,
  bac2,
  bac3,
  bac4,
  pdf1,
  IMPRIMANTE_PANTUM_CP2200DW,
  IMPRIMANTE_PANTUM_BM5100FDW,
  IMPRIMANTE_PANTUM_M6609N,
  IMPRIMANTE_PANTUM_P3300DN,
  IMPRIMANTE_PANTUM_P3300DW,
  IMPRIMANTE_PANTUM_P2509W,
  IMPRIMANTE_PANTUM_BP5100DN,
  IMPRIMANTE_PANTUM_M6559N,
  IMPRIMANTE_PANTUM_P2509,
  hp1,
  hp2,
  hp3,
  ricoh1,
  ricoh2,
  ricoh3,
  ricoh4,
  ricoh5,
  espson1,
  espson2,
} from "../assets/images/index";

// =================== category Start here ====================
export const categoryList = [
  {
    category_code: "9006",
    name_local: "Đồ uống các loại",
    name_en: "Various types of drinks",
    link: "/category/do-uong-cac-loai",
  },
  {
    category_code: "9007",
    name_local: "Đồ hộp",
    name_en: "Canned food",
    link: "/category/do-hop",
  },
  {
    category_code: "9008",
    name_local: "Gia vị - Nước chấm",
    name_en: "Spices - Dipping sauces",
    link: "/category/gia-vi-nuoc-cham",
  },
  {
    category_code: "9009",
    name_local: "Đồ gia dụng",
    name_en: "Household items",
    link: "/category/do-gia-dung",
    icons: true,
  },
];
export const brandList = [
  {
    id: 900,
    title: "HighLands",
    title_en: "HighLands",
  },
  {
    id: 901,
    title: "LifeBuoy",
    title_en: "LifeBuoy",
  },
  {
    id: 902,
    title: "PepsiCo",
    title_en: "PepsiCo",
  },

  {
    id: 903,
    title: "AngryBirds",
    title_en: "AngryBirds",
  },
];


// =================== NavBarList Start here ====================
export const navBarList = [
  {
    id: 1001,
    title: "Trang chủ",
    title_en: "Home",
    link: "/",
  },
  {
    id: 1002,
    title: "Mua sắm",
    title_en: "Shop",
    link: "/shop",
  },
  {
    id: 1003,
    title: "Về chúng tôi",
    title_en: "About",
    link: "/about",
  },
  {
    id: 1004,
    title: "Liên hệ",
    title_en: "Contact",
    link: "contact",
  },
  // {
  //   id: 1005,
  //   title: "Journal",
  //   link: "/journal",
  // },
];

// =================== PaginationItems Start here ===============
export const productList = [
  {
    product_code: "201",
    image: IMPRIMANTE_PANTUM_CP2200DW,
    name: "Imprimante PANTUM CP2200DW",
    price: "35.00",
    color: "Blanc",
    badge: true,
    brand: "HighLands",
    full_desc_local: "Imprimante Laser PANTUM Couleur - Fonctions: Impression  - Technologie d'impression: Laser - Format Papier: A4 - Vitesse d’impression(Couleur/N&B): 24 ppm (A4) / 26 ppm (Lettre) - Résolution d'impression: 600 x 600 dpi - Sortie papier: 100 page - Mémoire: Double cœur, 1 GHz - Impression recto verso: Automatique - Heure de la première impression: Moins de 11s  - Connecteurs: USB 2.0 haut débit Ethernet 10/100/1000 BaseTX (RJ-45) 802.11b/g/n Sans fil - Dimensions: 411.2 x 394.1 x 243.7mm - Poids: 16,1 kg - Couleur: Blanc",
      cat: "do-uong-cac-loai", 
 category_code: "9006", 
    pdf: pdf1,
    ficheTech: [
      { label: "Technology ", value: "Electrophotographic monochrome laser " },
      { label: "Print speed ", value: "22 ppm (A4)/23 ppm (Letter)" },

      { label: "First print out time ", value: "Less than 7.8s       " },
      { label: "Maximum Monthly Duty Cycle", value: "15,000 pages " },
      {
        label: "Recommended monthly volume Resolution(dpi) ",
        value: "700 pages ",
      },
      { label: "Printer language Duplex Mode ", value: "Max. 1,200×1,200 " },
      { label: "Printer  ", value: "Max. 1,2   " },
      { label: "galass  ", value: "Max. 1,2   " },
    ],
  },
  {
    product_code: "202",
    image: IMPRIMANTE_PANTUM_BM5100FDW,
    name: "Đồ uống PANTUM BM5100FDW",
    price: "450",
    color: "Blanc",
    badge: true,
    brand: "HighLands",
    full_desc_local: "Pantum BM5100fdw Imprimante laser mono : Pantum BM5100fdw -Imprimante :laser -monochrome multifonction,:format A4-,4-en-1 avec fonctions impression, copie, numérisation et fax, vitesse d'impression de 40ppm, connexion Réseau :LAN RJ45-, Wifichrome multifonction, format A4, 4-en-1 avec fonctions impression, copie, numérisation et fax, vitesse d'impression de 40ppm, connexion Réseau LAN RJ45, Wifi",
     cat: "do-uong-cac-loai", 
 category_code: "9006", 
    pdf: pdf1,
    ficheTech: [
      { label: "Vitesse d'impression ", value: "40ppm(A4)/42ppm(lettre) " },
      { label: "Temps de sortie de la première page ", value: "≤6.9 s" },

      {
        label: "Nombre de pages mensuel recommandé",
        value: "750 à 4,000 Pages",
      },
      { label: "Résolution d'impression", value: "Max.1,200x1,200 dpi" },
      {
        label: "Langage d'impression ",
        value: "PCL5e, PCL6, PS        ",
      },
      { label: "Vitesse du processeur", value: "1.2 GHz" },
      { label: "Mémoire", value: "512 MB" },
      {
        label: "Panneau de commande ",
        value: "LCD 2 lignes ||  Écran tactile 3,5 pouces      ",
      },
      { label: "Impression recto-verso automatique      ", value: "Oui" },
      {
        label: "Autres fonctions d'impression      ",
        value:
          "Impression brochure, impression sécurisée, impression disque USB Compatible AirPrint, Mopria, APP mobile (APP iOS/App Android)",
      },
      { label: "Vitese de copie ", value: "40ppm(A4)/42ppm(lettre)" },
      {
        label: "Temps de sortie de la première page",
        value: "Plateau : moins de 10 s ADF : moins de 11 s",
      },
    ],
  },

  {
    product_code: "203",
    image: IMPRIMANTE_PANTUM_BP5100DN,
    name: "Đồ uống PANTUM BP5100DN",
    price: "450",
    color: "Blanc",
    badge: true,
    brand: "HighLands",
    full_desc_local: "Imprimante Monochrome Laser PANTUM BP5100DN : Fonctions Impression - :Capacité Bac à papier 250 pages - :Formats papier -: A4 - Technologie d’impression Laser Monochrome - :Vitesse d’impression Noir & Blanc Jusqu’à 40 pages par minute en A4 -: Résolution 1200 dpi -: Mémoire 512 Mo - Connectivité Ethernet, USB 2.0 -:Auto-Duplex-, Network-Ready : Impression silencieuse - faible encombrement et respectueux de l'environnement -: cartouches à haut rendement en option - processeur haute vitesse 1,2 GHz - Dimensions: 364 x 344 x 257 mm - Poids: 9.3 kg - Garantie: 1 an",
     cat: "do-uong-cac-loai", 
 category_code: "9006", 
    pdf: pdf1,
    ficheTech: [
      { label: "Vitesse d'impression ", value: "40ppm(A4)/42ppm(lettre) " },
      { label: "Temps de sortie de la première page ", value: "≤6.9 s" },

      {
        label: "Nombre de pages mensuel recommandé",
        value: "750 à 4,000 Pages",
      },
      { label: "Résolution d'impression", value: "Max.1,200x1,200 dpi" },
      {
        label: "Langage d'impression ",
        value: "PCL5e, PCL6, PS        ",
      },
      { label: "Vitesse du processeur", value: "1.2 GHz" },
      { label: "Mémoire", value: "512 MB" },
      {
        label: "Panneau de commande ",
        value: "LCD 2 lignes ||  Écran tactile 3,5 pouces      ",
      },
      { label: "Impression recto-verso automatique      ", value: "Oui" },
      {
        label: "Autres fonctions d'impression      ",
        value:
          "Impression brochure, impression sécurisée, impression disque USB Compatible AirPrint, Mopria, APP mobile (APP iOS/App Android)",
      },
      { label: "Vitese de copie ", value: "40ppm(A4)/42ppm(lettre)" },
      {
        label: "Temps de sortie de la première page",
        value: "Plateau : moins de 10 s ADF : moins de 11 s",
      },
    ],
  },
  {
    product_code: "2005",
    image: IMPRIMANTE_PANTUM_M6609N,
    name: "Đồ uống PANTUM M6559N",
    price: "450",
    color: "Blanc",
    badge: true,
    brand: "HighLands",
    full_desc_local: "Imprimante Laser 3en1 à toner rechargeable PANTUM M6559N - Capacité d'impression Jusqu'à 1600 pages - Vitesse d’impression : 22 ppm (A4) / 23 ppm (Lettre) - Résolution (impression, copie et numérisation) : 1200×1200dpi - Heure de la première impression : Moins de 7.8s - Connectivité : USB 2.0 haute vitesse - Vitesse de copie : 22cpm (A4) / 23cpm (Lettre) - Capacité du chargeur automatique de documents : 35 pages - Entrée papier : 150 pages - Sortie papier : 100 pages - Dimensions : 417 x 305 x 301 mm - Poids : 8.5 kg - Garantie 1 an",
     cat: "do-uong-cac-loai", 
 category_code: "9006", 
    pdf: pdf1,
    ficheTech: [
      { label: "gtin	", value: "M6559N      " },
      { label: "Marque	", value: "PANTUM      " },
      { label: "fonctions	", value: "Monofonction      " },
      { label: "Technologie d impression		", value: "Laser      " },
      { label: "Impression	", value: "Noir & Blanc      " },
      { label: "Vitesse du Processeur		", value: "600MHz      " },
      {
        label: "Capacité papier		",
        value: "Capacité standard: 1 600 pages      ",
      },
      { label: "Gestion d entrée Papier Standard		", value: "150 pages      " },
      { label: "Premiére Page Imprimée		", value: "Moins de 7.8s      " },
      { label: "Cycle d utilisation Mensuel		", value: "15 000 pages      " },
      {
        label: "Résolution d impression		",
        value: "Max. 1 200 × 1 200 ppp      ",
      },
      {
        label: "Résolution d'impression Noir		",
        value: "Max. 1 200 × 1 200 ppp      ",
      },
      { label: "formats		", value: "A4      " },
      { label: "Sortie papier		", value: "100 pages      " },
      {
        label: "Vitesse de Copie Noir Blanc		",
        value: "22 ppm (A4) / 23 ppm (Lettre)      ",
      },
      { label: "Poids		", value: "4,75 kg      " },
    ],
  },

  {
    product_code: "20005",
    image: IMPRIMANTE_PANTUM_M6559N,
    name: "Đồ uống PANTUM M6559N",
    price: "450",
    color: "Blanc",
    badge: true,
    brand: "HighLands",
    full_desc_local: "Imprimante Laser 3en1 à toner rechargeable PANTUM M6559N - Capacité d'impression Jusqu'à 1600 pages - Vitesse d’impression : 22 ppm (A4) / 23 ppm (Lettre) - Résolution (impression, copie et numérisation) : 1200×1200dpi - Heure de la première impression : Moins de 7.8s - Connectivité : USB 2.0 haute vitesse - Vitesse de copie : 22cpm (A4) / 23cpm (Lettre) - Capacité du chargeur automatique de documents : 35 pages - Entrée papier : 150 pages - Sortie papier : 100 pages - Dimensions : 417 x 305 x 301 mm - Poids : 8.5 kg - Garantie 1 an",
     cat: "do-uong-cac-loai", 
 category_code: "9006", 
    pdf: pdf1,
    ficheTech: [
      { label: "gtin	", value: "M6559N      " },
      { label: "Marque	", value: "PANTUM      " },
      { label: "fonctions	", value: "Monofonction      " },
      { label: "Technologie d impression		", value: "Laser      " },
      { label: "Impression	", value: "Noir & Blanc      " },
      { label: "Vitesse du Processeur		", value: "600MHz      " },
      {
        label: "Capacité papier		",
        value: "Capacité standard: 1 600 pages      ",
      },
      { label: "Gestion d entrée Papier Standard		", value: "150 pages      " },
      { label: "Premiére Page Imprimée		", value: "Moins de 7.8s      " },
      { label: "Cycle d utilisation Mensuel		", value: "15 000 pages      " },
      {
        label: "Résolution d impression		",
        value: "Max. 1 200 × 1 200 ppp      ",
      },
      {
        label: "Résolution d'impression Noir		",
        value: "Max. 1 200 × 1 200 ppp      ",
      },
      { label: "formats		", value: "A4      " },
      { label: "Sortie papier		", value: "100 pages      " },
      {
        label: "Vitesse de Copie Noir Blanc		",
        value: "22 ppm (A4) / 23 ppm (Lettre)      ",
      },
      { label: "Poids		", value: "4,75 kg      " },
    ],
  },

  {
    product_code: "206",
    image: IMPRIMANTE_PANTUM_P3300DN,
    name: "Đồ uống PANTUM P3300DN",
    price: "450",
    color: "Blanc",
    badge: true,
    brand: "HighLands",
    full_desc_local: "Imprimante Laser PANTUM P3300DN - Fonctions: Impression - Technologie d'impression: Laser - Format Papier: A4-A5 - Vitesse d’impression: 33 ppm (A4) / 35 ppm (Lettre) - Résolution d'impression: Jusqu'à 1200 x 1200 ppp - Papier Bac d'alimentation: 250 pages - Sortie papier: 150 page - Mémoire: 256 Mo - Impression recto verso: Automatique - Heure de la première impression: Moins de 8.2s  - Taille du support: A4, A5, JIS B5, IS0 B5, A6, Lettre, Légal, Exécutif, Folio, Oficio, Déclaration, Carte postale japonaise, ZL, Big 16K, Big 32K, 16K, 32K, B6， Yougata4, Carte postale, Younaga3, Nagagata3, Yougata2 - Connecteurs: USB2.0 haut débit / Ethernet：IEEE 802.3 10/100Base-Tx - Dimensions: 354 x 334 x 232mm - Poids: 6,8 kg - Couleur: Blanc",
     cat: "do-uong-cac-loai", 
 category_code: "9006", 
    pdf: pdf1,
    ficheTech: [
      { label: "gtin	", value: "P3300DN      " },
      { label: "fonctions	", value: "Monofonction      " },
      { label: "Mémoire	", value: "256MO      " },
      { label: "Technologie d impression		", value: "laser      " },
      { label: "Impression		", value: "Noir & Blanc      " },
      { label: "Connectivite		", value: "Réseau      " },
      { label: "Vitesse du Processeur		", value: "350 MHz      " },
      { label: "Type ecran		", value: "LCD 2 lignes      " },
      {
        label: "Consommation d énergie		",
        value:
          "Impression : 525 W en moyenne Veille : 50 W en veille : moins de 2 W      ",
      },
      {
        label: "Gestion d entrée Papier Standard		",
        value: "Papier Bac d'alimentation: 250pages      ",
      },
      { label: "Premiére Page Imprimée		", value: "Moins de 8,2 secondes      " },
      {
        label: "Vitesse d impression Noir		",
        value: "33 ppm (A4) / 35 ppm (Lettre)      ",
      },
      { label: "Cycle d utilisation Mensuel		", value: "60000pages      " },
      {
        label: "Résolution d impression		",
        value: "1 200 x 1 200 dpi (maximum)      ",
      },
      { label: "formats	", value: "A4      " },
      {
        label: "Connecteurs		",
        value: "USB2.0 haut débit / Ethernet：IEEE 802.3 10/100Base-Tx      ",
      },
      { label: "Fonctionnalités		", value: "Impression      " },
      {
        label: "Volume de Pages Mensuel Recommandé		",
        value: "750 à 3 500 pages      ",
      },
      { label: "Dimensions		", value: "354 x 334 x 232mm      " },
      { label: "Garantie	", value: "1ANS      " },
    ],
  },

  {
    product_code: "207",
    image: IMPRIMANTE_PANTUM_P3300DW,
    name: "Đồ uống PANTUM P3300DW",
    price: "450",
    color: "Blanc",
    badge: true,
    brand: "HighLands",
    full_desc_local: "Imprimante Laser PANTUM P3300DW - Fonctions: Impression - Technologie d'impression: Laser - Format Papier: A4-A5 - Vitesse d’impression: 33 ppm (A4) / 35 ppm (Lettre) - Résolution d'impression: Jusqu'à 1200 x 1200 ppp - Papier Bac d'alimentation: 250 pages - Sortie papier: 150 page - Mémoire: 256 Mo - Impression recto verso: Automatique - Heure de la première impression: Moins de 8.2s - Interface: Ethernet USB 2.0 haut débit : Wi-Fi IEEE 802.3 10/100Base-Tx : IEEE 802.11b/g/n - Connecteurs: USB ; WIFI - Dimensions: 354 x 334 x 232mm - Poids: 6,8 kg - Couleur: Blanc",
     cat: "do-uong-cac-loai", 
 category_code: "9006", 
    pdf: pdf1,
    ficheTech: [
      { label: "gtin		", value: "P3300DW      " },
      { label: "fonctions	", value: "Monofonction      " },
      { label: "Mémoire	", value: "256 Mo      " },
      { label: "Technologie d impression		", value: "Laser      " },
      { label: "Connectivite	", value: "WIFI      " },
      { label: "Vitesse du Processeur		", value: "350 MHz      " },
      { label: "Type ecran		", value: "LCD 2 lignes      " },
      {
        label: "Consommation d énergie		",
        value:
          "Impression : 525 W en moyenne Veille : 50 W en veille : moins de 2 W      ",
      },
      {
        label: "Gestion d entrée Papier Standard		",
        value: "Papier Bac d'alimentation: 250pages      ",
      },
      { label: "Premiére Page Imprimée		", value: "Moins de 8,2 secondes      " },
      {
        label: "Vitesse d impression Noir		",
        value: "33 ppm (A4) / 35 ppm (Lettre)      ",
      },
      { label: "Cycle d utilisation Mensuel		", value: "60000pages      " },
      { label: "Résolution d impression		", value: "Max.1200x1200 dpi      " },
      {
        label: "Volume de Pages Mensuel Recommandé		",
        value: "750 à 3 500 pages      ",
      },
      {
        label: "Interface Réseau	",
        value:
          "Ethernet USB 2.0 haut débit : Wi-Fi IEEE 802.3 10/100Base-Tx : IEEE 802.11b/g/n      ",
      },
      {
        label: "Contenu de L'emballage		",
        value:
          "Imprimante - Cordon d’alimentation - Câble d’interface USB - Plateau de sortie - CD-ROM - Guide de configuration rapide      ",
      },
      { label: "Garantie	", value: "1 ANS      " },
    ],
  },

  {
    product_code: "208",
    image: IMPRIMANTE_PANTUM_P2509W,
    name: "Đồ uống PANTUM P2509W",
    price: "450",
    color: "Blanc",
    badge: true,
    brand: "HighLands",
    full_desc_local: "Imprimante Laser PANTUM P2509W - Fonctions: Impression - Technologie d'impression: Laser - Format Papier: A4 - Vitesse d’impression: 22 ppm (A4) / 23 ppm (Lettre) - Résolution d'impression: Jusqu'à 1200 x 1200 ppp - Entrée papier: de 150 feuilles - Sortie papier: 100 page - Mémoire: 128 Mo - Impression recto verso: Manuel - Heure de la première impression: Moins de 7.8s - Taille du support: A4, A5, A6, JIS B5, ISO B5, B6, Lettre, Légal, Exécutif, Déclaration, Enveloppe Monarch, Enveloppe DL, enveloppe C5, enveloppe C6, enveloppe NO.10, carte postale japonaise, Folio, Oficio, Grand 16k, 32k, 16k, Grand 32k, ZL,Yougata4, Carte postale, Younaga3, Nagagata3, Yougata2 - Toner rechargeable - Connecteurs: USB 2.0 ; Wi-Fi - Dimensions: 337 x 220 x 178 mm - Poids: 4,75 kg - Couleur: Blanc.",
     cat: "do-uong-cac-loai", 
 category_code: "9006", 
    pdf: pdf1,
    ficheTech: [
      { label: "gtin	", value: "P2509W      " },
      { label: "fonctions	", value: "Monofonction      " },
      { label: "Technologie d impression		", value: "Laser      " },
      { label: "Ecran Tactile		", value: "Non      " },
      { label: "Connectivite	", value: "WiFi      " },
      { label: "Vitesse du Processeur		", value: "600MHz      " },
      {
        label: "Capacité papier		",
        value: "Capacité standard: 1 600 pages      ",
      },
      { label: "Premiére Page Imprimée		", value: "Moins de 7.8s      " },
      { label: "Cycle d utilisation Mensuel		", value: "15 000 pages      " },
      {
        label: "Résolution d impression		",
        value: "Max. 1 200 × 1 200 ppp      ",
      },
      { label: "formats	", value: "A4      " },
      { label: "Connecteurs		", value: "USB 2.0, Wi-Fi      " },
      {
        label: "Vitesse de Copie Noir Blanc		",
        value: "22 ppm (A4) / 23 ppm (Lettre)      ",
      },
      {
        label: "Contenu de L'emballage		",
        value:
          "Imprimante - Cordon d’alimentation - Câble d’interface USB - Plateau de sortie - CD-ROM - Guide de configuration rapide      ",
      },
      { label: "Dimensions		", value: "337 x 220 x 178 mm      " },
    ],
  },
  {
    product_code: "233",
    image: IMPRIMANTE_PANTUM_P2509,
    name: "Đồ uống PANTUM P2509",
    price: "450",
    color: "Blanc",
    badge: true,
    brand: "HighLands",
    full_desc_local: "Imprimante Laser PANTUM P2509 - Fonctions Impression - Capacité d'impression Jusqu'à :1600 pages - Formats papier: A4 - Technologie d’impression Laser Monochrome - Vitesse d’impression Noir & Blanc: Jusqu’à 22 pages par minute en A4 - Résolution: 1200 dpi - Mémoire: 128 Mo - Connectivité: USB 2.0 - Dimensions: 337 x 220 x 178 mm - Poids: 4.75 kg - Toner recheargeable - Garantie: 1 an",
     cat: "do-uong-cac-loai", 
 category_code: "9006", 
    pdf: pdf1,
    ficheTech: [],
  },
  {
    product_code: "220",
    image: bac3,
    name: "Đồ gia dụng",
    price: "25.00",
    color: "Mixed",
    badge: true,
    full_desc_local: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    cat: "do-gia-dung",
category_code: "9009", 
  },
  {
    product_code: "221",
    image: bac4,
    name: "Đồ gia dụng",
    price: "220.00",
    color: "Black",
    badge: true,
    full_desc_local: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    cat: "do-gia-dung",
category_code: "9009", 
  },
  {
    product_code: "215",
    image: ruban3,
    name: "Nước chấm",
    price: "25.00",
    color: "Mixed",
    badge: true,
    full_desc_local: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    cat: "gia-vi-nuoc-cham",
category_code: "9008", 
  },
  {
    product_code: "216",
    image: ruban4,
    name: "Nước chấm",
    price: "220.00",
    color: "Black",
    badge: true,
    full_desc_local: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    cat: "gia-vi-nuoc-cham",
category_code: "9008", 
  },
  {
    product_code: "209",
    image: encre1,
    name: "encre",
    price: "25.00",
    color: "Mixed",
    badge: true,
    full_desc_local: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    cat: "do-hop",
category_code: "9007", 
  },
  {
    product_code: "210",
    image: encre2,
    name: "encre",
    price: "220.00",
    color: "Black",
    badge: true,
    full_desc_local: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    cat: "do-hop",
category_code: "9007", 
  },

  {
    product_code: "211",
    image: encre3,
    name: "encre",
    price: "25.00",
    color: "Mixed",
    badge: true,
    full_desc_local: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    cat: "do-hop",
category_code: "9007", 
  },
  {
    product_code: "212",
    image: encre4,
    name: "encre",
    price: "220.00",
    color: "Black",
    badge: true,
    full_desc_local: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    cat: "do-hop",
category_code: "9007", 
  },
  {
    product_code: "213",
    image: ruban1,
    name: "Nước chấm",
    price: "25.00",
    color: "Mixed",
    badge: true,
    full_desc_local: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    cat: "gia-vi-nuoc-cham",
category_code: "9008", 
  },
  {
    product_code: "214",
    image: ruban2,
    name: "Nước chấm",
    price: "220.00",
    color: "Black",
    badge: true,
    full_desc_local: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    cat: "gia-vi-nuoc-cham",
category_code: "9008", 
  },

  {
    product_code: "217",
    image: bac1,
    name: "Đồ gia dụng",
    price: "25.00",
    color: "Mixed",
    badge: true,
    full_desc_local: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    cat: "do-gia-dung",
category_code: "9009", 
  },
  {
    product_code: "219",
    image: bac2,
    name: "Đồ gia dụng",
    price: "220.00",
    color: "Black",
    badge: true,
    full_desc_local: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    cat: "do-gia-dung",
category_code: "9009", 
  },

  // =================== imprimante hp =================

  {
    product_code: "hp1",
    image: hp1,
    name:
      "Đồ uống HP JET D'ENCRE HP SMART TANK 516 COULEUR MFP 3EN1 A4 WIFI",
    price: "450",
    color: "Blanc",
    badge: true,
    brand: "LifeBuoy",
    full_desc_local: "Desc : Imprimante Jet D'encre HP SMART TANK 516 3en1 Couleur 3YW70A - Fonction: Impression, Copie, Numérisation - Technologie d'impression: jet d'encre - Vitesse d'impression Noir : Jusqu'à 22 ppm - Vitesse d’impression Couleur : Jusqu'à 16 ppm - Résolution d'impression Couleur : 1200x1200dpi - Format Papier : A4 - Capacité Papier : 100 feuilles -  Cycle d'utilisation (mensuel, A4) : Jusqu'à 1000pages - Connectivité: USB 2.0 haute vitesse, Wi-Fi, Bluetooth LE -  Dimensions: 447 x 373 x 158 mm - Garantie: 1 an",
     cat: "do-uong-cac-loai", 
 category_code: "9006", 
    pdf: pdf1,
    ficheTech: [
      { label: "DISPONIBILITÉ", value: "En stock" },
      { label: "gtin", value: "3YW70A" },
      { label: "Marque", value: "HP" },
      { label: "Destockage", value: "Non" },
      { label: "Ecran", value: "LCD" },
      {
        label: "Taille de L écran cm",
        value: "Affichage LCD 7 segments + icône 5,08 cm (2 pouces)",
      },
      { label: "Ecran Tactile", value: "Non" },
      { label: "Technologie d impression", value: "Jet d'encre" },
      { label: "fonctions", value: "Multifonction" },
      { label: "Fonctionnalités", value: "Impression, Copie, Numérisation" },
      { label: "Impression", value: "Couleur" },
      { label: "formats", value: "A4" },
      { label: "Chargement de Documents", value: "Oui" },
      { label: "Vitesse d impression Noir", value: "Jusqu'à 22 ppm" },
      { label: "Vitesse d impression Couleur", value: "Jusqu'à 16 ppm" },
      { label: "FAX", value: "Non" },
      { label: "Mémoire", value: "256 Mo" },
      {
        label: "Qualité d impression Noir",
        value: "Jusqu'à 1 200 x 1 200 ppp",
      },
      {
        label: "Qualité d impression Couleur",
        value: "Jusqu'à 4 800 x 1 200 ppp",
      },
      { label: "Résolution d impression Couleur", value: "1200x1200dpi" },
      { label: "Recto/Verso", value: "Manuel" },
      { label: "Type de Scanner", value: "Scanner à Plat" },
      { label: "Connectivite", value: "USB 2.0, WiFi" },
      { label: "Capacité papier", value: "100 feuilles" },
      { label: "Cycle d utilisation Mensuel", value: "Jusqu'à 1000 pages" },
      {
        label: "Consommation électrique",
        value:
          "0,12 Watts (Arrêt manuel), 3,12 Watts (Prêt), 0,75 Watt (Veille) 5",
      },
      { label: "Grammage", value: "75 g/m²" },
      {
        label: "Contenu de L'emballage",
        value:
          "Imprimante HP Smart Tank 516, Bouteilles d'encre: 3 x HP GT53XL (noir), 3 x HP GT52 (cyan, magenta et jaune), Notice de précaution pour l'encre; Fiche pour le ré-emballage et réglementaire RoH-EAC; Cordon d'alimentation, Guide d'installation; Notice PT",
      },
      { label: "Poids", value: "5,14 kg" },
      { label: "Dimensions", value: "447 x 373 x 158 mm" },
      { label: "Couleur", value: "Noir et Bleu" },
      { label: "Garantie", value: "1 an" },
    ],
  },

  {
    product_code: "hp2",
    image: hp2,
    name: "Đồ uống HP INK TANK WIRELESS 415 ALL-IN-ONE",
    price: "450",
    color: "Blanc",
    badge: true,
    brand: "LifeBuoy",
    full_desc_local: "Desc : Imprimante Multifonction Jet d'encre 3 en 1 à réservoir intégré - Impression, numérisation, copie, sans fil - Résolution d'impression: Jusqu'à 4800 x 1200 dpi - Vitesse d'impression Couleur Jusqu'à 15 ppm -Vitesse d'impression N et B Jusqu'à 18 ppm - Résolution du scanner: 1200 x 1200 dpi - Format A4 - Interface USB - Bac d'alimentation de 60 feuilles - Dimensions: 525 x 310 x 158 mm - Garantie 1 an (+ Extension de Garantie 2 Ans ) + 5 Bouteilles",
     cat: "do-uong-cac-loai", 
 category_code: "9006", 
    pdf: pdf1,
    ficheTech: [],
  },

  {
    product_code: "hp3",
    image: hp3,
    name: "Đồ uống HP INK TANK WIRELESS 415 ALL-IN-ONE",
    price: "450",
    color: "Blanc",
    badge: true,
    brand: "LifeBuoy",
    full_desc_local: "Imprimante à Réservoir intégré HP Ink Tank 315 - Fonctions: Impression, copier, Numérisation - Format Papier: A4 - Technologie d'impression: jet d'encre thermique HP - Vitesse d'impression: Jusqu'à 19 ppm (Noir), Jusqu'à 15 ppm (couleur) - Résolution d'impression: 1200 x 1200 dpi(couleur), 4800 x 1200 dpi(noir) - Vitesse de copie(A4, ISO): 6,5 cpm Noir; 2 cpm Couleur - Vitesse de numérisation A4: Jusqu'à 21 secondes - Impression recto verso Manuelle - Formats de fichiers pour la numérisation: JPEG, TIFF, PDF, BMP, PNG - Vitesse du processeur: 360 MHz - Connectivité: USB  - Dimensions: 525 x 310 x 158 mm - Poids: 4,67 kg - Garantie: 1 an",
     cat: "do-uong-cac-loai", 
 category_code: "9006", 
    pdf: pdf1,
    ficheTech: [
      { label: "DISPONIBILITÉ", value: "En stock" },
      { label: "gtin", value: "Z4B04A" },
      { label: "Marque", value: "HP" },
      { label: "Destockage", value: "Non" },
      { label: "Technologie d impression", value: "Multifonction Jet d'encre" },
      { label: "fonctions", value: "Multifonction" },
      { label: "Impression", value: "Couleur" },
      { label: "Mémoire", value: "Non" },
      { label: "FAX", value: "Non" },
      { label: "Fonctionnalités", value: "Impression, Copie, Numérisation" },
      { label: "Chargement de Documents", value: "Oui" },
      { label: "Connecteurs", value: "1 port USB 2.0 haut débit" },
      { label: "Vitesse du Processeur", value: "360 MHz" },
      {
        label: "Impression sans bordure",
        value: "Oui, jusqu’à 210 x 297 mm (A4)",
      },
      { label: "Vitesse d impression Noir", value: "Jusqu'à 19 ppm" },
      { label: "Vitesse d impression Couleur", value: "Jusqu'à 15 ppm" },
      {
        label: "Résolution d'impression Noir",
        value: "Jusqu'à 1 200 x 1 200 DPI",
      },
      {
        label: "Résolution d impression Couleur",
        value: "Jusqu'à 4 800 x 1 200 DPI (couleur)",
      },
      {
        label: "Résolution d impression",
        value:
          "Jusqu'à 1 200 x 1 200 DPI (noir), Jusqu'à 4 800 x 1 200 DPI (couleur)",
      },
      { label: "Type de Scanner", value: "Scanner à Plat" },
      { label: "Vitesse de numérisation", value: "Jusqu'à 21 secondes" },
      { label: "Résolution de Numérisation", value: "Jusqu'à 1200 x 1200 ppp" },
      {
        label: "Résolution de numérisation optimisée",
        value: "Jusqu’à 1200 ppp",
      },
      { label: "Recto/Verso", value: "Manuel" },
      { label: "Connectivite", value: "USB" },
      { label: "formats", value: "A4" },
      {
        label: "Premiére Page Imprimée",
        value:
          "Noir: (A4, prêt) Vitesse : 14 s - Couleur (A4, prêt) Vitesse : 18 s",
      },
      {
        label: "Alimentation-courant",
        value:
          "Tension d'entrée : 220 à 240 V CA (+/- 10 %), 50/60 Hz (+/- 3 Hz)",
      },
      {
        label: "Type de Papier pris en charge",
        value:
          "Papier ordinaire, papiers photo HP, papier mat pour brochure HP ou papier professionnel HP, papier mat pour présentation HP, papier brillant pour brochure HP ou papier professionnel HP, papiers photo jet d'encre, papiers mats jet d'encre, papiers brillant",
      },
      {
        label: "Consommation électrique",
        value:
          "10 W maximum, 0,07 W (Arrêt), 2,1 W (Veille), 0,88 W (Veille prolongée)",
      },
      {
        label: "Cycle d utilisation Mensuel",
        value: "A4: Jusqu'à 1 000 pages - Lettre: Jusqu'à 1 000 pages",
      },
      {
        label: "Alimentation papier standard",
        value:
          "Bac d'alimentation de 60 feuilles - Bac de sortie de 25 feuilles",
      },
      { label: "Ecran Tactile", value: "Non" },
      { label: "Type ecran", value: "7 segments et icône LCD" },
      {
        label: "Volume de Pages Mensuel Recommandé",
        value: "400 à 800 (Jusqu'à 1000 pages)",
      },
      { label: "Interfaces standard", value: "1x port USB 2.0 haut débit" },
      { label: "Résolution optique", value: "Jusqu'à 1200 x 1200 ppp" },
      { label: "Grammage", value: "75 g/m²" },
      {
        label: "Contenu de L'emballage",
        value:
          "HP Ink Tank 315 , cartouche d'encre noire HP GT51 (90CC), cartouche d'encre cyan HP GT52 (70CC), cartouche d'encre magenta HP GT52 (70CC), cartouche d'encre jaune HP GT52 (70CC)",
      },
      { label: "Poids", value: "4,67 kg" },
      { label: "Couleur", value: "Noir" },
      { label: "Dimensions", value: "525 x 310 x 158 mm" },
      { label: "Garantie", value: "1 an" },
    ],
  },
  // =================== imprimante ricoh =================
  {
    product_code: "ricoh1",
    image: ricoh1,
    name: "Đồ uống RICOH P501",
    price: "450",
    color: "Blanc",
    badge: true,
    brand: "AngryBirds",
    full_desc_local: "Imprimante à Réservoir intégré HP Ink Tank 315 - Fonctions: Impression, copier, Numérisation - Format Papier: A4 - Technologie d'impression: jet d'encre thermique HP - Vitesse d'impression: Jusqu'à 19 ppm (Noir), Jusqu'à 15 ppm (couleur) - Résolution d'impression: 1200 x 1200 dpi(couleur), 4800 x 1200 dpi(noir) - Vitesse de copie(A4, ISO): 6,5 cpm Noir; 2 cpm Couleur - Vitesse de numérisation A4: Jusqu'à 21 secondes - Impression recto verso Manuelle - Formats de fichiers pour la numérisation: JPEG, TIFF, PDF, BMP, PNG - Vitesse du processeur: 360 MHz - Connectivité: USB  - Dimensions: 525 x 310 x 158 mm - Poids: 4,67 kg - Garantie: 1 an",
     cat: "do-uong-cac-loai", 
 category_code: "9006", 
    pdf: pdf1,
    ficheTech: [
      { label: "DISPONIBILITÉ", value: "En stock" },
      { label: "gtin", value: "Z4B04A" },
      { label: "Marque", value: "HP" },
      { label: "Destockage", value: "Non" },
      { label: "Technologie d impression", value: "Multifonction Jet d'encre" },
      { label: "fonctions", value: "Multifonction" },
      { label: "Impression", value: "Couleur" },
      { label: "Mémoire", value: "Non" },
      { label: "FAX", value: "Non" },
      { label: "Fonctionnalités", value: "Impression, Copie, Numérisation" },
      { label: "Chargement de Documents", value: "Oui" },
      { label: "Connecteurs", value: "1 port USB 2.0 haut débit" },
      { label: "Vitesse du Processeur", value: "360 MHz" },
      {
        label: "Impression sans bordure",
        value: "Oui, jusqu’à 210 x 297 mm (A4)",
      },
      { label: "Vitesse d impression Noir", value: "Jusqu'à 19 ppm" },
      { label: "Vitesse d impression Couleur", value: "Jusqu'à 15 ppm" },
      {
        label: "Résolution d'impression Noir",
        value: "Jusqu'à 1 200 x 1 200 DPI",
      },
      {
        label: "Résolution d impression Couleur",
        value: "Jusqu'à 4 800 x 1 200 DPI (couleur)",
      },
      {
        label: "Résolution d impression",
        value:
          "Jusqu'à 1 200 x 1 200 DPI (noir), Jusqu'à 4 800 x 1 200 DPI (couleur)",
      },
      { label: "Type de Scanner", value: "Scanner à Plat" },
      { label: "Vitesse de numérisation", value: "Jusqu'à 21 secondes" },
      { label: "Résolution de Numérisation", value: "Jusqu'à 1200 x 1200 ppp" },
      {
        label: "Résolution de numérisation optimisée",
        value: "Jusqu’à 1200 ppp",
      },
      { label: "Recto/Verso", value: "Manuel" },
      { label: "Connectivite", value: "USB" },
      { label: "formats", value: "A4" },
      {
        label: "Premiére Page Imprimée",
        value:
          "Noir: (A4, prêt) Vitesse : 14 s - Couleur (A4, prêt) Vitesse : 18 s",
      },
      {
        label: "Alimentation-courant",
        value:
          "Tension d'entrée : 220 à 240 V CA (+/- 10 %), 50/60 Hz (+/- 3 Hz)",
      },
      {
        label: "Type de Papier pris en charge",
        value:
          "Papier ordinaire, papiers photo HP, papier mat pour brochure HP ou papier professionnel HP, papier mat pour présentation HP, papier brillant pour brochure HP ou papier professionnel HP, papiers photo jet d'encre, papiers mats jet d'encre, papiers brillant",
      },
      {
        label: "Consommation électrique",
        value:
          "10 W maximum, 0,07 W (Arrêt), 2,1 W (Veille), 0,88 W (Veille prolongée)",
      },
      {
        label: "Cycle d utilisation Mensuel",
        value: "A4: Jusqu'à 1 000 pages - Lettre: Jusqu'à 1 000 pages",
      },
      {
        label: "Alimentation papier standard",
        value:
          "Bac d'alimentation de 60 feuilles - Bac de sortie de 25 feuilles",
      },
      { label: "Ecran Tactile", value: "Non" },
      { label: "Type ecran", value: "7 segments et icône LCD" },
      {
        label: "Volume de Pages Mensuel Recommandé",
        value: "400 à 800 (Jusqu'à 1000 pages)",
      },
      { label: "Interfaces standard", value: "1x port USB 2.0 haut débit" },
      { label: "Résolution optique", value: "Jusqu'à 1200 x 1200 ppp" },
      { label: "Grammage", value: "75 g/m²" },
      {
        label: "Contenu de L'emballage",
        value:
          "HP Ink Tank 315 , cartouche d'encre noire HP GT51 (90CC), cartouche d'encre cyan HP GT52 (70CC), cartouche d'encre magenta HP GT52 (70CC), cartouche d'encre jaune HP GT52 (70CC)",
      },
      { label: "Poids", value: "4,67 kg" },
      { label: "Couleur", value: "Noir" },
      { label: "Dimensions", value: "525 x 310 x 158 mm" },
      { label: "Garantie", value: "1 an" },
    ],
  },

  {
    product_code: "ricoh2",
    image: ricoh2,
    name: "Đồ uống RICOH SP3710DN",
    price: "450",
    color: "Blanc",
    badge: true,
    brand: "AngryBirds",
    full_desc_local: "Imprimante à Réservoir intégré HP Ink Tank 315 - Fonctions: Impression, copier, Numérisation - Format Papier: A4 - Technologie d'impression: jet d'encre thermique HP - Vitesse d'impression: Jusqu'à 19 ppm (Noir), Jusqu'à 15 ppm (couleur) - Résolution d'impression: 1200 x 1200 dpi(couleur), 4800 x 1200 dpi(noir) - Vitesse de copie(A4, ISO): 6,5 cpm Noir; 2 cpm Couleur - Vitesse de numérisation A4: Jusqu'à 21 secondes - Impression recto verso Manuelle - Formats de fichiers pour la numérisation: JPEG, TIFF, PDF, BMP, PNG - Vitesse du processeur: 360 MHz - Connectivité: USB  - Dimensions: 525 x 310 x 158 mm - Poids: 4,67 kg - Garantie: 1 an",
     cat: "do-uong-cac-loai", 
 category_code: "9006", 
    pdf: pdf1,
    ficheTech: [
      { label: "DISPONIBILITÉ", value: "En stock" },
      { label: "gtin", value: "Z4B04A" },
      { label: "Marque", value: "HP" },
      { label: "Destockage", value: "Non" },
      { label: "Technologie d impression", value: "Multifonction Jet d'encre" },
      { label: "fonctions", value: "Multifonction" },
      { label: "Impression", value: "Couleur" },
      { label: "Mémoire", value: "Non" },
      { label: "FAX", value: "Non" },
      { label: "Fonctionnalités", value: "Impression, Copie, Numérisation" },
      { label: "Chargement de Documents", value: "Oui" },
      { label: "Connecteurs", value: "1 port USB 2.0 haut débit" },
      { label: "Vitesse du Processeur", value: "360 MHz" },
      {
        label: "Impression sans bordure",
        value: "Oui, jusqu’à 210 x 297 mm (A4)",
      },
      { label: "Vitesse d impression Noir", value: "Jusqu'à 19 ppm" },
      { label: "Vitesse d impression Couleur", value: "Jusqu'à 15 ppm" },
      {
        label: "Résolution d'impression Noir",
        value: "Jusqu'à 1 200 x 1 200 DPI",
      },
      {
        label: "Résolution d impression Couleur",
        value: "Jusqu'à 4 800 x 1 200 DPI (couleur)",
      },
      {
        label: "Résolution d impression",
        value:
          "Jusqu'à 1 200 x 1 200 DPI (noir), Jusqu'à 4 800 x 1 200 DPI (couleur)",
      },
      { label: "Type de Scanner", value: "Scanner à Plat" },
      { label: "Vitesse de numérisation", value: "Jusqu'à 21 secondes" },
      { label: "Résolution de Numérisation", value: "Jusqu'à 1200 x 1200 ppp" },
      {
        label: "Résolution de numérisation optimisée",
        value: "Jusqu’à 1200 ppp",
      },
      { label: "Recto/Verso", value: "Manuel" },
      { label: "Connectivite", value: "USB" },
      { label: "formats", value: "A4" },
      {
        label: "Premiére Page Imprimée",
        value:
          "Noir: (A4, prêt) Vitesse : 14 s - Couleur (A4, prêt) Vitesse : 18 s",
      },
      {
        label: "Alimentation-courant",
        value:
          "Tension d'entrée : 220 à 240 V CA (+/- 10 %), 50/60 Hz (+/- 3 Hz)",
      },
      {
        label: "Type de Papier pris en charge",
        value:
          "Papier ordinaire, papiers photo HP, papier mat pour brochure HP ou papier professionnel HP, papier mat pour présentation HP, papier brillant pour brochure HP ou papier professionnel HP, papiers photo jet d'encre, papiers mats jet d'encre, papiers brillant",
      },
      {
        label: "Consommation électrique",
        value:
          "10 W maximum, 0,07 W (Arrêt), 2,1 W (Veille), 0,88 W (Veille prolongée)",
      },
      {
        label: "Cycle d utilisation Mensuel",
        value: "A4: Jusqu'à 1 000 pages - Lettre: Jusqu'à 1 000 pages",
      },
      {
        label: "Alimentation papier standard",
        value:
          "Bac d'alimentation de 60 feuilles - Bac de sortie de 25 feuilles",
      },
      { label: "Ecran Tactile", value: "Non" },
      { label: "Type ecran", value: "7 segments et icône LCD" },
      {
        label: "Volume de Pages Mensuel Recommandé",
        value: "400 à 800 (Jusqu'à 1000 pages)",
      },
      { label: "Interfaces standard", value: "1x port USB 2.0 haut débit" },
      { label: "Résolution optique", value: "Jusqu'à 1200 x 1200 ppp" },
      { label: "Grammage", value: "75 g/m²" },
      {
        label: "Contenu de L'emballage",
        value:
          "HP Ink Tank 315 , cartouche d'encre noire HP GT51 (90CC), cartouche d'encre cyan HP GT52 (70CC), cartouche d'encre magenta HP GT52 (70CC), cartouche d'encre jaune HP GT52 (70CC)",
      },
      { label: "Poids", value: "4,67 kg" },
      { label: "Couleur", value: "Noir" },
      { label: "Dimensions", value: "525 x 310 x 158 mm" },
      { label: "Garantie", value: "1 an" },
    ],
  },
  {
    product_code: "ricoh3",
    image: ricoh3,
    name: "Đồ uống RICOH SP4520DN",
    price: "450",
    color: "Blanc",
    badge: true,
    brand: "AngryBirds",
    full_desc_local: "Imprimante à Réservoir intégré HP Ink Tank 315 - Fonctions: Impression, copier, Numérisation - Format Papier: A4 - Technologie d'impression: jet d'encre thermique HP - Vitesse d'impression: Jusqu'à 19 ppm (Noir), Jusqu'à 15 ppm (couleur) - Résolution d'impression: 1200 x 1200 dpi(couleur), 4800 x 1200 dpi(noir) - Vitesse de copie(A4, ISO): 6,5 cpm Noir; 2 cpm Couleur - Vitesse de numérisation A4: Jusqu'à 21 secondes - Impression recto verso Manuelle - Formats de fichiers pour la numérisation: JPEG, TIFF, PDF, BMP, PNG - Vitesse du processeur: 360 MHz - Connectivité: USB  - Dimensions: 525 x 310 x 158 mm - Poids: 4,67 kg - Garantie: 1 an",
     cat: "do-uong-cac-loai", 
 category_code: "9006", 
    pdf: pdf1,
    ficheTech: [
      { label: "DISPONIBILITÉ", value: "En stock" },
      { label: "gtin", value: "Z4B04A" },
      { label: "Marque", value: "HP" },
      { label: "Destockage", value: "Non" },
      { label: "Technologie d impression", value: "Multifonction Jet d'encre" },
      { label: "fonctions", value: "Multifonction" },
      { label: "Impression", value: "Couleur" },
      { label: "Mémoire", value: "Non" },
      { label: "FAX", value: "Non" },
      { label: "Fonctionnalités", value: "Impression, Copie, Numérisation" },
      { label: "Chargement de Documents", value: "Oui" },
      { label: "Connecteurs", value: "1 port USB 2.0 haut débit" },
      { label: "Vitesse du Processeur", value: "360 MHz" },
      {
        label: "Impression sans bordure",
        value: "Oui, jusqu’à 210 x 297 mm (A4)",
      },
      { label: "Vitesse d impression Noir", value: "Jusqu'à 19 ppm" },
      { label: "Vitesse d impression Couleur", value: "Jusqu'à 15 ppm" },
      {
        label: "Résolution d'impression Noir",
        value: "Jusqu'à 1 200 x 1 200 DPI",
      },
      {
        label: "Résolution d impression Couleur",
        value: "Jusqu'à 4 800 x 1 200 DPI (couleur)",
      },
      {
        label: "Résolution d impression",
        value:
          "Jusqu'à 1 200 x 1 200 DPI (noir), Jusqu'à 4 800 x 1 200 DPI (couleur)",
      },
      { label: "Type de Scanner", value: "Scanner à Plat" },
      { label: "Vitesse de numérisation", value: "Jusqu'à 21 secondes" },
      { label: "Résolution de Numérisation", value: "Jusqu'à 1200 x 1200 ppp" },
      {
        label: "Résolution de numérisation optimisée",
        value: "Jusqu’à 1200 ppp",
      },
      { label: "Recto/Verso", value: "Manuel" },
      { label: "Connectivite", value: "USB" },
      { label: "formats", value: "A4" },
      {
        label: "Premiére Page Imprimée",
        value:
          "Noir: (A4, prêt) Vitesse : 14 s - Couleur (A4, prêt) Vitesse : 18 s",
      },
      {
        label: "Alimentation-courant",
        value:
          "Tension d'entrée : 220 à 240 V CA (+/- 10 %), 50/60 Hz (+/- 3 Hz)",
      },
      {
        label: "Type de Papier pris en charge",
        value:
          "Papier ordinaire, papiers photo HP, papier mat pour brochure HP ou papier professionnel HP, papier mat pour présentation HP, papier brillant pour brochure HP ou papier professionnel HP, papiers photo jet d'encre, papiers mats jet d'encre, papiers brillant",
      },
      {
        label: "Consommation électrique",
        value:
          "10 W maximum, 0,07 W (Arrêt), 2,1 W (Veille), 0,88 W (Veille prolongée)",
      },
      {
        label: "Cycle d utilisation Mensuel",
        value: "A4: Jusqu'à 1 000 pages - Lettre: Jusqu'à 1 000 pages",
      },
      {
        label: "Alimentation papier standard",
        value:
          "Bac d'alimentation de 60 feuilles - Bac de sortie de 25 feuilles",
      },
      { label: "Ecran Tactile", value: "Non" },
      { label: "Type ecran", value: "7 segments et icône LCD" },
      {
        label: "Volume de Pages Mensuel Recommandé",
        value: "400 à 800 (Jusqu'à 1000 pages)",
      },
      { label: "Interfaces standard", value: "1x port USB 2.0 haut débit" },
      { label: "Résolution optique", value: "Jusqu'à 1200 x 1200 ppp" },
      { label: "Grammage", value: "75 g/m²" },
      {
        label: "Contenu de L'emballage",
        value:
          "HP Ink Tank 315 , cartouche d'encre noire HP GT51 (90CC), cartouche d'encre cyan HP GT52 (70CC), cartouche d'encre magenta HP GT52 (70CC), cartouche d'encre jaune HP GT52 (70CC)",
      },
      { label: "Poids", value: "4,67 kg" },
      { label: "Couleur", value: "Noir" },
      { label: "Dimensions", value: "525 x 310 x 158 mm" },
      { label: "Garantie", value: "1 an" },
    ],
  },
  {
    product_code: "ricoh4",
    image: ricoh4,
    name: "Đồ uống RICOH COULEUR LASER SPC840",
    price: "450",
    color: "Blanc",
    badge: true,
    brand: "AngryBirds",
    full_desc_local: "Imprimante à Réservoir intégré HP Ink Tank 315 - Fonctions: Impression, copier, Numérisation - Format Papier: A4 - Technologie d'impression: jet d'encre thermique HP - Vitesse d'impression: Jusqu'à 19 ppm (Noir), Jusqu'à 15 ppm (couleur) - Résolution d'impression: 1200 x 1200 dpi(couleur), 4800 x 1200 dpi(noir) - Vitesse de copie(A4, ISO): 6,5 cpm Noir; 2 cpm Couleur - Vitesse de numérisation A4: Jusqu'à 21 secondes - Impression recto verso Manuelle - Formats de fichiers pour la numérisation: JPEG, TIFF, PDF, BMP, PNG - Vitesse du processeur: 360 MHz - Connectivité: USB  - Dimensions: 525 x 310 x 158 mm - Poids: 4,67 kg - Garantie: 1 an",
     cat: "do-uong-cac-loai", 
 category_code: "9006", 
    pdf: pdf1,
    ficheTech: [
      { label: "DISPONIBILITÉ", value: "En stock" },
      { label: "gtin", value: "Z4B04A" },
      { label: "Marque", value: "HP" },
      { label: "Destockage", value: "Non" },
      { label: "Technologie d impression", value: "Multifonction Jet d'encre" },
      { label: "fonctions", value: "Multifonction" },
      { label: "Impression", value: "Couleur" },
      { label: "Mémoire", value: "Non" },
      { label: "FAX", value: "Non" },
      { label: "Fonctionnalités", value: "Impression, Copie, Numérisation" },
      { label: "Chargement de Documents", value: "Oui" },
      { label: "Connecteurs", value: "1 port USB 2.0 haut débit" },
      { label: "Vitesse du Processeur", value: "360 MHz" },
      {
        label: "Impression sans bordure",
        value: "Oui, jusqu’à 210 x 297 mm (A4)",
      },
      { label: "Vitesse d impression Noir", value: "Jusqu'à 19 ppm" },
      { label: "Vitesse d impression Couleur", value: "Jusqu'à 15 ppm" },
      {
        label: "Résolution d'impression Noir",
        value: "Jusqu'à 1 200 x 1 200 DPI",
      },
      {
        label: "Résolution d impression Couleur",
        value: "Jusqu'à 4 800 x 1 200 DPI (couleur)",
      },
      {
        label: "Résolution d impression",
        value:
          "Jusqu'à 1 200 x 1 200 DPI (noir), Jusqu'à 4 800 x 1 200 DPI (couleur)",
      },
      { label: "Type de Scanner", value: "Scanner à Plat" },
      { label: "Vitesse de numérisation", value: "Jusqu'à 21 secondes" },
      { label: "Résolution de Numérisation", value: "Jusqu'à 1200 x 1200 ppp" },
      {
        label: "Résolution de numérisation optimisée",
        value: "Jusqu’à 1200 ppp",
      },
      { label: "Recto/Verso", value: "Manuel" },
      { label: "Connectivite", value: "USB" },
      { label: "formats", value: "A4" },
      {
        label: "Premiére Page Imprimée",
        value:
          "Noir: (A4, prêt) Vitesse : 14 s - Couleur (A4, prêt) Vitesse : 18 s",
      },
      {
        label: "Alimentation-courant",
        value:
          "Tension d'entrée : 220 à 240 V CA (+/- 10 %), 50/60 Hz (+/- 3 Hz)",
      },
      {
        label: "Type de Papier pris en charge",
        value:
          "Papier ordinaire, papiers photo HP, papier mat pour brochure HP ou papier professionnel HP, papier mat pour présentation HP, papier brillant pour brochure HP ou papier professionnel HP, papiers photo jet d'encre, papiers mats jet d'encre, papiers brillant",
      },
      {
        label: "Consommation électrique",
        value:
          "10 W maximum, 0,07 W (Arrêt), 2,1 W (Veille), 0,88 W (Veille prolongée)",
      },
      {
        label: "Cycle d utilisation Mensuel",
        value: "A4: Jusqu'à 1 000 pages - Lettre: Jusqu'à 1 000 pages",
      },
      {
        label: "Alimentation papier standard",
        value:
          "Bac d'alimentation de 60 feuilles - Bac de sortie de 25 feuilles",
      },
      { label: "Ecran Tactile", value: "Non" },
      { label: "Type ecran", value: "7 segments et icône LCD" },
      {
        label: "Volume de Pages Mensuel Recommandé",
        value: "400 à 800 (Jusqu'à 1000 pages)",
      },
      { label: "Interfaces standard", value: "1x port USB 2.0 haut débit" },
      { label: "Résolution optique", value: "Jusqu'à 1200 x 1200 ppp" },
      { label: "Grammage", value: "75 g/m²" },
      {
        label: "Contenu de L'emballage",
        value:
          "HP Ink Tank 315 , cartouche d'encre noire HP GT51 (90CC), cartouche d'encre cyan HP GT52 (70CC), cartouche d'encre magenta HP GT52 (70CC), cartouche d'encre jaune HP GT52 (70CC)",
      },
      { label: "Poids", value: "4,67 kg" },
      { label: "Couleur", value: "Noir" },
      { label: "Dimensions", value: "525 x 310 x 158 mm" },
      { label: "Garantie", value: "1 an" },
    ],
  },
  {
    product_code: "ricoh5",
    image: ricoh5,
    name: "Đồ uống RICOH SP4510DN (407313)",
    price: "450",
    color: "Blanc",
    badge: true,
    brand: "AngryBirds",
    full_desc_local: "Imprimante à Réservoir intégré HP Ink Tank 315 - Fonctions: Impression, copier, Numérisation - Format Papier: A4 - Technologie d'impression: jet d'encre thermique HP - Vitesse d'impression: Jusqu'à 19 ppm (Noir), Jusqu'à 15 ppm (couleur) - Résolution d'impression: 1200 x 1200 dpi(couleur), 4800 x 1200 dpi(noir) - Vitesse de copie(A4, ISO): 6,5 cpm Noir; 2 cpm Couleur - Vitesse de numérisation A4: Jusqu'à 21 secondes - Impression recto verso Manuelle - Formats de fichiers pour la numérisation: JPEG, TIFF, PDF, BMP, PNG - Vitesse du processeur: 360 MHz - Connectivité: USB  - Dimensions: 525 x 310 x 158 mm - Poids: 4,67 kg - Garantie: 1 an",
     cat: "do-uong-cac-loai", 
 category_code: "9006", 
    pdf: pdf1,
    ficheTech: [
      { label: "DISPONIBILITÉ", value: "En stock" },
      { label: "gtin", value: "Z4B04A" },
      { label: "Marque", value: "HP" },
      { label: "Destockage", value: "Non" },
      { label: "Technologie d impression", value: "Multifonction Jet d'encre" },
      { label: "fonctions", value: "Multifonction" },
      { label: "Impression", value: "Couleur" },
      { label: "Mémoire", value: "Non" },
      { label: "FAX", value: "Non" },
      { label: "Fonctionnalités", value: "Impression, Copie, Numérisation" },
      { label: "Chargement de Documents", value: "Oui" },
      { label: "Connecteurs", value: "1 port USB 2.0 haut débit" },
      { label: "Vitesse du Processeur", value: "360 MHz" },
      {
        label: "Impression sans bordure",
        value: "Oui, jusqu’à 210 x 297 mm (A4)",
      },
      { label: "Vitesse d impression Noir", value: "Jusqu'à 19 ppm" },
      { label: "Vitesse d impression Couleur", value: "Jusqu'à 15 ppm" },
      {
        label: "Résolution d'impression Noir",
        value: "Jusqu'à 1 200 x 1 200 DPI",
      },
      {
        label: "Résolution d impression Couleur",
        value: "Jusqu'à 4 800 x 1 200 DPI (couleur)",
      },
      {
        label: "Résolution d impression",
        value:
          "Jusqu'à 1 200 x 1 200 DPI (noir), Jusqu'à 4 800 x 1 200 DPI (couleur)",
      },
      { label: "Type de Scanner", value: "Scanner à Plat" },
      { label: "Vitesse de numérisation", value: "Jusqu'à 21 secondes" },
      { label: "Résolution de Numérisation", value: "Jusqu'à 1200 x 1200 ppp" },
      {
        label: "Résolution de numérisation optimisée",
        value: "Jusqu’à 1200 ppp",
      },
      { label: "Recto/Verso", value: "Manuel" },
      { label: "Connectivite", value: "USB" },
      { label: "formats", value: "A4" },
      {
        label: "Premiére Page Imprimée",
        value:
          "Noir: (A4, prêt) Vitesse : 14 s - Couleur (A4, prêt) Vitesse : 18 s",
      },
      {
        label: "Alimentation-courant",
        value:
          "Tension d'entrée : 220 à 240 V CA (+/- 10 %), 50/60 Hz (+/- 3 Hz)",
      },
      {
        label: "Type de Papier pris en charge",
        value:
          "Papier ordinaire, papiers photo HP, papier mat pour brochure HP ou papier professionnel HP, papier mat pour présentation HP, papier brillant pour brochure HP ou papier professionnel HP, papiers photo jet d'encre, papiers mats jet d'encre, papiers brillant",
      },
      {
        label: "Consommation électrique",
        value:
          "10 W maximum, 0,07 W (Arrêt), 2,1 W (Veille), 0,88 W (Veille prolongée)",
      },
      {
        label: "Cycle d utilisation Mensuel",
        value: "A4: Jusqu'à 1 000 pages - Lettre: Jusqu'à 1 000 pages",
      },
      {
        label: "Alimentation papier standard",
        value:
          "Bac d'alimentation de 60 feuilles - Bac de sortie de 25 feuilles",
      },
      { label: "Ecran Tactile", value: "Non" },
      { label: "Type ecran", value: "7 segments et icône LCD" },
      {
        label: "Volume de Pages Mensuel Recommandé",
        value: "400 à 800 (Jusqu'à 1000 pages)",
      },
      { label: "Interfaces standard", value: "1x port USB 2.0 haut débit" },
      { label: "Résolution optique", value: "Jusqu'à 1200 x 1200 ppp" },
      { label: "Grammage", value: "75 g/m²" },
      {
        label: "Contenu de L'emballage",
        value:
          "HP Ink Tank 315 , cartouche d'encre noire HP GT51 (90CC), cartouche d'encre cyan HP GT52 (70CC), cartouche d'encre magenta HP GT52 (70CC), cartouche d'encre jaune HP GT52 (70CC)",
      },
      { label: "Poids", value: "4,67 kg" },
      { label: "Couleur", value: "Noir" },
      { label: "Dimensions", value: "525 x 310 x 158 mm" },
      { label: "Garantie", value: "1 an" },
    ],
  },

  // =================== imprimante ricoh =================

  {
    product_code: "espson1",
    image: espson1,
    name: "Đồ uống EPSON L3251 3EN1 A4 WIFI",
    price: "450",
    color: "Blanc",
    badge: true,
    brand: "PepsiCo",
    full_desc_local: "Imprimante à Réservoir intégré HP Ink Tank 315 - Fonctions: Impression, copier, Numérisation - Format Papier: A4 - Technologie d'impression: jet d'encre thermique HP - Vitesse d'impression: Jusqu'à 19 ppm (Noir), Jusqu'à 15 ppm (couleur) - Résolution d'impression: 1200 x 1200 dpi(couleur), 4800 x 1200 dpi(noir) - Vitesse de copie(A4, ISO): 6,5 cpm Noir; 2 cpm Couleur - Vitesse de numérisation A4: Jusqu'à 21 secondes - Impression recto verso Manuelle - Formats de fichiers pour la numérisation: JPEG, TIFF, PDF, BMP, PNG - Vitesse du processeur: 360 MHz - Connectivité: USB  - Dimensions: 525 x 310 x 158 mm - Poids: 4,67 kg - Garantie: 1 an",
     cat: "do-uong-cac-loai", 
 category_code: "9006", 
    pdf: pdf1,
    ficheTech: [
      { label: "DISPONIBILITÉ", value: "En stock" },
      { label: "gtin", value: "Z4B04A" },
      { label: "Marque", value: "HP" },
      { label: "Destockage", value: "Non" },
      { label: "Technologie d impression", value: "Multifonction Jet d'encre" },
      { label: "fonctions", value: "Multifonction" },
      { label: "Impression", value: "Couleur" },
      { label: "Mémoire", value: "Non" },
      { label: "FAX", value: "Non" },
      { label: "Fonctionnalités", value: "Impression, Copie, Numérisation" },
      { label: "Chargement de Documents", value: "Oui" },
      { label: "Connecteurs", value: "1 port USB 2.0 haut débit" },
      { label: "Vitesse du Processeur", value: "360 MHz" },
      {
        label: "Impression sans bordure",
        value: "Oui, jusqu’à 210 x 297 mm (A4)",
      },
      { label: "Vitesse d impression Noir", value: "Jusqu'à 19 ppm" },
      { label: "Vitesse d impression Couleur", value: "Jusqu'à 15 ppm" },
      {
        label: "Résolution d'impression Noir",
        value: "Jusqu'à 1 200 x 1 200 DPI",
      },
      {
        label: "Résolution d impression Couleur",
        value: "Jusqu'à 4 800 x 1 200 DPI (couleur)",
      },
      {
        label: "Résolution d impression",
        value:
          "Jusqu'à 1 200 x 1 200 DPI (noir), Jusqu'à 4 800 x 1 200 DPI (couleur)",
      },
      { label: "Type de Scanner", value: "Scanner à Plat" },
      { label: "Vitesse de numérisation", value: "Jusqu'à 21 secondes" },
      { label: "Résolution de Numérisation", value: "Jusqu'à 1200 x 1200 ppp" },
      {
        label: "Résolution de numérisation optimisée",
        value: "Jusqu’à 1200 ppp",
      },
      { label: "Recto/Verso", value: "Manuel" },
      { label: "Connectivite", value: "USB" },
      { label: "formats", value: "A4" },
      {
        label: "Premiére Page Imprimée",
        value:
          "Noir: (A4, prêt) Vitesse : 14 s - Couleur (A4, prêt) Vitesse : 18 s",
      },
      {
        label: "Alimentation-courant",
        value:
          "Tension d'entrée : 220 à 240 V CA (+/- 10 %), 50/60 Hz (+/- 3 Hz)",
      },
      {
        label: "Type de Papier pris en charge",
        value:
          "Papier ordinaire, papiers photo HP, papier mat pour brochure HP ou papier professionnel HP, papier mat pour présentation HP, papier brillant pour brochure HP ou papier professionnel HP, papiers photo jet d'encre, papiers mats jet d'encre, papiers brillant",
      },
      {
        label: "Consommation électrique",
        value:
          "10 W maximum, 0,07 W (Arrêt), 2,1 W (Veille), 0,88 W (Veille prolongée)",
      },
      {
        label: "Cycle d utilisation Mensuel",
        value: "A4: Jusqu'à 1 000 pages - Lettre: Jusqu'à 1 000 pages",
      },
      {
        label: "Alimentation papier standard",
        value:
          "Bac d'alimentation de 60 feuilles - Bac de sortie de 25 feuilles",
      },
      { label: "Ecran Tactile", value: "Non" },
      { label: "Type ecran", value: "7 segments et icône LCD" },
      {
        label: "Volume de Pages Mensuel Recommandé",
        value: "400 à 800 (Jusqu'à 1000 pages)",
      },
      { label: "Interfaces standard", value: "1x port USB 2.0 haut débit" },
      { label: "Résolution optique", value: "Jusqu'à 1200 x 1200 ppp" },
      { label: "Grammage", value: "75 g/m²" },
      {
        label: "Contenu de L'emballage",
        value:
          "HP Ink Tank 315 , cartouche d'encre noire HP GT51 (90CC), cartouche d'encre cyan HP GT52 (70CC), cartouche d'encre magenta HP GT52 (70CC), cartouche d'encre jaune HP GT52 (70CC)",
      },
      { label: "Poids", value: "4,67 kg" },
      { label: "Couleur", value: "Noir" },
      { label: "Dimensions", value: "525 x 310 x 158 mm" },
      { label: "Garantie", value: "1 an" },
    ],
  },

  {
    product_code: "espson2",
    image: espson2,
    name: "Đồ uống EPSON JET D'ENCRE L3156 COULEUR A4  WIFI",
    price: "450",
    color: "Blanc",
    badge: true,
    brand: "PepsiCo",
    full_desc_local: "Imprimante à Réservoir intégré HP Ink Tank 315 - Fonctions: Impression, copier, Numérisation - Format Papier: A4 - Technologie d'impression: jet d'encre thermique HP - Vitesse d'impression: Jusqu'à 19 ppm (Noir), Jusqu'à 15 ppm (couleur) - Résolution d'impression: 1200 x 1200 dpi(couleur), 4800 x 1200 dpi(noir) - Vitesse de copie(A4, ISO): 6,5 cpm Noir; 2 cpm Couleur - Vitesse de numérisation A4: Jusqu'à 21 secondes - Impression recto verso Manuelle - Formats de fichiers pour la numérisation: JPEG, TIFF, PDF, BMP, PNG - Vitesse du processeur: 360 MHz - Connectivité: USB  - Dimensions: 525 x 310 x 158 mm - Poids: 4,67 kg - Garantie: 1 an",
     cat: "do-uong-cac-loai", 
 category_code: "9006", 
    pdf: pdf1,
    ficheTech: [
      { label: "DISPONIBILITÉ", value: "En stock" },
      { label: "gtin", value: "Z4B04A" },
      { label: "Marque", value: "HP" },
      { label: "Destockage", value: "Non" },
      { label: "Technologie d impression", value: "Multifonction Jet d'encre" },
      { label: "fonctions", value: "Multifonction" },
      { label: "Impression", value: "Couleur" },
      { label: "Mémoire", value: "Non" },
      { label: "FAX", value: "Non" },
      { label: "Fonctionnalités", value: "Impression, Copie, Numérisation" },
      { label: "Chargement de Documents", value: "Oui" },
      { label: "Connecteurs", value: "1 port USB 2.0 haut débit" },
      { label: "Vitesse du Processeur", value: "360 MHz" },
      {
        label: "Impression sans bordure",
        value: "Oui, jusqu’à 210 x 297 mm (A4)",
      },
      { label: "Vitesse d impression Noir", value: "Jusqu'à 19 ppm" },
      { label: "Vitesse d impression Couleur", value: "Jusqu'à 15 ppm" },
      {
        label: "Résolution d'impression Noir",
        value: "Jusqu'à 1 200 x 1 200 DPI",
      },
      {
        label: "Résolution d impression Couleur",
        value: "Jusqu'à 4 800 x 1 200 DPI (couleur)",
      },
      {
        label: "Résolution d impression",
        value:
          "Jusqu'à 1 200 x 1 200 DPI (noir), Jusqu'à 4 800 x 1 200 DPI (couleur)",
      },
      { label: "Type de Scanner", value: "Scanner à Plat" },
      { label: "Vitesse de numérisation", value: "Jusqu'à 21 secondes" },
      { label: "Résolution de Numérisation", value: "Jusqu'à 1200 x 1200 ppp" },
      {
        label: "Résolution de numérisation optimisée",
        value: "Jusqu’à 1200 ppp",
      },
      { label: "Recto/Verso", value: "Manuel" },
      { label: "Connectivite", value: "USB" },
      { label: "formats", value: "A4" },
      {
        label: "Premiére Page Imprimée",
        value:
          "Noir: (A4, prêt) Vitesse : 14 s - Couleur (A4, prêt) Vitesse : 18 s",
      },
      {
        label: "Alimentation-courant",
        value:
          "Tension d'entrée : 220 à 240 V CA (+/- 10 %), 50/60 Hz (+/- 3 Hz)",
      },
      {
        label: "Type de Papier pris en charge",
        value:
          "Papier ordinaire, papiers photo HP, papier mat pour brochure HP ou papier professionnel HP, papier mat pour présentation HP, papier brillant pour brochure HP ou papier professionnel HP, papiers photo jet d'encre, papiers mats jet d'encre, papiers brillant",
      },
      {
        label: "Consommation électrique",
        value:
          "10 W maximum, 0,07 W (Arrêt), 2,1 W (Veille), 0,88 W (Veille prolongée)",
      },
      {
        label: "Cycle d utilisation Mensuel",
        value: "A4: Jusqu'à 1 000 pages - Lettre: Jusqu'à 1 000 pages",
      },
      {
        label: "Alimentation papier standard",
        value:
          "Bac d'alimentation de 60 feuilles - Bac de sortie de 25 feuilles",
      },
      { label: "Ecran Tactile", value: "Non" },
      { label: "Type ecran", value: "7 segments et icône LCD" },
      {
        label: "Volume de Pages Mensuel Recommandé",
        value: "400 à 800 (Jusqu'à 1000 pages)",
      },
      { label: "Interfaces standard", value: "1x port USB 2.0 haut débit" },
      { label: "Résolution optique", value: "Jusqu'à 1200 x 1200 ppp" },
      { label: "Grammage", value: "75 g/m²" },
      {
        label: "Contenu de L'emballage",
        value:
          "HP Ink Tank 315 , cartouche d'encre noire HP GT51 (90CC), cartouche d'encre cyan HP GT52 (70CC), cartouche d'encre magenta HP GT52 (70CC), cartouche d'encre jaune HP GT52 (70CC)",
      },
      { label: "Poids", value: "4,67 kg" },
      { label: "Couleur", value: "Noir" },
      { label: "Dimensions", value: "525 x 310 x 158 mm" },
      { label: "Garantie", value: "1 an" },
    ],
  },
];
