const allProducts = [

  // ================= ORDINATEURS =================
  {
    name: "HP Laptop 250 G8",
    price: "350000",
    img: "images/hp-laptop250g8-p1.jfif",
    desc: "Intel Core i5, 8GB RAM, 256GB SSD, 15.6 écran",
    cat: "ordinateur",
    brand: "hp"
  },
  {
    name: "Dell Inspiron 3511",
    price: "300000",
    img: "images/dellinspiron153511-p1.jfif",
    desc: "Intel Core i5, 8GB RAM, 256GB SSD, 15.6 écran",
    cat: "ordinateur",
    brand: "dell"
  },
  {
    name: "Lenovo ThinkPad E14",
    price: "420000",
    img: "images/lenovothinkpade14-p1.jfif",
    desc: "Intel Core i5, 8GB RAM, 512GB SSD, 14 écran",
    cat: "ordinateur",
    brand: "lenovo"
  },
  {
    name: "Dell Latitude 3420",
    price: "450000",
    img: "images/delllatitude342-p1.jfif",
    desc: "Intel Core i5, 8GB RAM, 512GB SSD, 14 écran",
    cat: "ordinateur",
    brand: "dell"
  },
  {
    name: "HP Pavilion 15",
    price: "550000",
    img: "images/hp-pavilion15-p1.jfif",
    desc: "Intel Core i7, 16GB RAM, 512GB SSD, 15.6 écran",
    cat: "ordinateur",
    brand: "hp"
  },
  {
    name: "Acer Aspire 5",
    price: "380000",
    img: "images/aceraspire5-p1.jfif",
    desc: "Intel Core i3, 8GB RAM, 256GB SSD, 15.6 écran",
    cat: "ordinateur",
    brand: "acer"
  },

  // ================= IMPRIMANTES =================
  {
    name: "HP DeskJet 2710",
    price: "120000",
    img: "images/hpdeskjet2710-p1.jfif",
    desc: "Couleur, WiFi, Scanner, Impression mobile",
    cat: "imprimante",
    brand: "hp"
  },
  {
    name: "HP LaserJet 107a",
    price: "150000",
    img: "images/hplaserjetm111w-p1.jfif",
    desc: "Laser noir & blanc, rapide, USB",
    cat: "imprimante",
    brand: "hp"
  },
  {
    name: "Canon PIXMA MG2540",
    price: "95000",
    img: "images/canonpixmamg2540-p1.jfif",
    desc: "Impression, copie, scanner, couleur",
    cat: "imprimante",
    brand: "canon"
  },
  {
    name: "Canon PIXMA G3411",
    price: "220000",
    img: "images/canonpixmag3411-p1.jfif",
    desc: "Réservoir d’encre, WiFi, haute autonomie",
    cat: "imprimante",
    brand: "canon"
  },
  {
    name: "Epson EcoTank L3150",
    price: "230000",
    img: "images/epsonecotankl3150-p1.jfif",
    desc: "Sans cartouche, WiFi, économique",
    cat: "imprimante",
    brand: "epson"
  },
  {
    name: "Epson EcoTank L3210",
    price: "210000",
    img: "images/epsonecotankl3250-p1.jfif",
    desc: "Impression + copie + scanner, USB",
    cat: "imprimante",
    brand: "epson"
  },

  // ================= ACCESSOIRES =================
  {
    name: "Clé USB Kingston 128GB",
    price: "8000",
    img: "images/usb128gb.jfif",
    desc: "USB 3.0, haute vitesse",
    cat: "accessoire",
    brand: "kingston"
  },
  {
    name: "Disque Dur 1TB",
    price: "55000",
    img: "images/1tbdisquedur.jfif",
    desc: "Disque dur portable, USB 3.0",
    cat: "accessoire",
    brand: "seagate"
  },
  {
    name: "Souris Logitech M90",
    price: "5000",
    img: "images/sourislogitechm90.jfif",
    desc: "Souris filaire USB",
    cat: "accessoire",
    brand: "logitech"
  },
  {
    name: "Souris HP 280",
    price: "5000",
    img: "images/sourishp280.jpg",
    desc: "Souris ergonomique filaire",
    cat: "accessoire",
    brand: "hp"
  },
  {
    name: "Casque Audio",
    price: "12000",
    img: "images/casques.jfif",
    desc: "Casque avec micro, jack 3.5mm",
    cat: "accessoire",
    brand: "generic"
  },
  {
    name: "Clavier Filaire USB",
    price: "12000",
    img: "images/clavier.png",
    desc: "Clavier AZERTY avec pavé numérique",
    cat: "accessoire",
    brand: "generic"
  },
  {
    name: "Cartouche Canon 545",
    price: "18000",
    img: "images/cartouchecanon545.jfif",
    desc: "Cartouche noire pour imprimante Canon PIXMA",
    cat: "accessoire",
    brand: "canon"
  },
  {
    name: "Cartouche HP 305",
    price: "18000",
    img: "images/cartouchehp305.jfif",
    desc: "Cartouche HP noir et couleur",
    cat: "accessoire",
    brand: "hp"
  },
  {
    name: "Toner HP 206A",
    price: "45000",
    img: "images/hptoner206a.jfif",
    desc: "Toner LaserJet haute capacité",
    cat: "accessoire",
    brand: "hp"
  },

  // ================= FOURNITURES =================
  {
    name: "Cahier 200 pages",
    price: "2000",
    img: "images/cahier.jfif",
    desc: "Grand format, lignes",
    cat: "fourniture",
    brand: "oxford"
  },
  {
    name: "Stylo BIC (pack)",
    price: "1500",
    img: "images/stylos.jfif",
    desc: "Bleu, noir, rouge",
    cat: "fourniture",
    brand: "bic"
  },
  {
    name: "Sac à dos scolaire",
    price: "15000",
    img: "images/sac.jfif",
    desc: "Résistant, multi-poches",
    cat: "fourniture",
    brand: "generic"
  },
  {
    name: "Crayons HB (pack)",
    price: "1000",
    img: "images/crayons.jfif",
    desc: "Écriture et dessin",
    cat: "fourniture",
    brand: "faber-castell"
  },
  {
    name: "Règle 30cm",
    price: "800",
    img: "images/regle.jfif",
    desc: "Plastique solide",
    cat: "fourniture",
    brand: "maped"
  },
  {
    name: "Calculatrice scientifique",
    price: "12000",
    img: "images/calculatrice.jfif",
    desc: "Fonctions avancées",
    cat: "fourniture",
    brand: "casio"
  },

  // ================= LIVRES =================
  {
    name: "Livre de Mathématiques",
    price: "8000",
    img: "images/livre-math.jfif",
    desc: "Secondaire, programme complet",
    cat: "livre",
    brand: "hachette"
  },
  {
    name: "Livre de Français",
    price: "7000",
    img: "images/livre-francais.jfif",
    desc: "Grammaire et conjugaison",
    cat: "livre",
    brand: "hachette"
  },
  {
    name: "Livre d'Anglais",
    price: "7500",
    img: "images/livre-anglais.jfif",
    desc: "Débutant à intermédiaire",
    cat: "livre",
    brand: "oxford"
  },
  {
    name: "Roman inspirant",
    price: "6000",
    img: "images/roman.jfif",
    desc: "Lecture générale, histoire inspirante",
    cat: "livre",
    brand: "generic"
  },
  {
    name: "Registre Comptable",
    price: "5000",
    img: "images/registre-comptable.jfif",
    desc: "Grand format pour usage bureau",
    cat: "livre",
    brand: "generic"
  },
  {
    name: "Registre de Présence",
    price: "4000",
    img: "images/registre-presence.jfif",
    desc: "Pour écoles et entreprises",
    cat: "livre",
    brand: "generic"
  }

];