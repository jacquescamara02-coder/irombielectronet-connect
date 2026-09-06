import logoAsset from "@/assets/logo.jpg.asset.json";
import camerasAsset from "@/assets/cameras.jpg.asset.json";
import teamRackAsset from "@/assets/team-rack.jpg.asset.json";
import heroCctvAsset from "@/assets/hero-cctv.jpg.asset.json";
import heroInstallAsset from "@/assets/hero-install.jpg.asset.json";
import barriereAsset from "@/assets/barriere.jpg.asset.json";
import barriere2Asset from "@/assets/barriere2.jpg.asset.json";
import incendieAsset from "@/assets/incendie.jpg.asset.json";
import brassageAsset from "@/assets/brassage.jpg.asset.json";
import installcamAsset from "@/assets/installcam.jpg.asset.json";
import cameraResidenceAsset from "@/assets/camera-residence.jpg.asset.json";
import cctvAsset from "@/assets/cctv.jpg.asset.json";
import heroLoopAsset from "@/assets/hero-loop.mp4.asset.json";
import biometrieAsset from "@/assets/biometrie.jpg.asset.json";

export const images = {
  logo: logoAsset.url,
  cameras: camerasAsset.url,
  teamRack: teamRackAsset.url,
  heroCctv: heroCctvAsset.url,
  heroInstall: heroInstallAsset.url,
  barriere: barriereAsset.url,
  barriere2: barriere2Asset.url,
  incendie: incendieAsset.url,
  brassage: brassageAsset.url,
  installcam: installcamAsset.url,
  cameraResidence: cameraResidenceAsset.url,
  cctv: cctvAsset.url,
  heroLoop: heroLoopAsset.url,
  biometrie: biometrieAsset.url,
};

export const company = {
  name: "IROMBI-ELECTRONET",
  legal: "IROMBI-ELECTRONET SARL",
  baseline: "Sûreté électronique, réseaux & télécommunications au Gabon",
  address: "Nouvelle Route PG1, Port-Gentil, Gabon",
  postal: "Boîte Postale 2304, Port-Gentil",
  phones: ["+241 077 855 517", "+241 065 905 556"],
  whatsapp: "24105905556",
  whatsappDisplay: "+241 05 90 55 56",
  email: "contact@irombielectronet.com",
  hours: "Lundi – Samedi · 07h30 – 18h00 · Astreinte 24/7",
  mapQuery: "Nouvelle Route PG1, Port-Gentil, Gabon",
};

export const whatsappLink = (message: string) =>
  `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;

export type Service = {
  slug: string;
  title: string;
  short: string;
  image: string;
  gallery: { src: string; caption: string }[];
  intro: string;
  paragraphs: string[];
  bullets: string[];
};

export const services: Service[] = [
  {
    slug: "videosurveillance",
    title: "Vidéosurveillance IP & analogique",
    short:
      "Installation, configuration et maintenance de caméras IP et analogiques, salles CCTV et supervision à distance.",
    image: images.cameraResidence,
    gallery: [
      { src: images.installcam, caption: "Pose et réglage de caméra extérieure" },
      { src: images.cctv, caption: "Salle CCTV et mur d'écrans" },
      { src: images.cameras, caption: "Caméras IP et analogiques" },
    ],
    intro:
      "Nous sommes spécialisés dans l'offre de services d'installation et de maintenance de caméras de surveillance IP et analogiques, pour l'habitation, l'entreprise ou tout autre type de propriété.",
    paragraphs: [
      "Notre équipe d'experts qualifiés est formée pour installer et configurer les systèmes de caméras de manière professionnelle. Nous prenons en compte vos besoins spécifiques et concevons une solution sur mesure pour répondre à vos exigences de sécurité, en IP comme en analogique.",
      "Au-delà de l'installation, nous assurons la maintenance et le support : vérifications régulières, mises à jour, améliorations et intervention rapide en cas de panne, afin que vos caméras restent opérationnelles en permanence.",
    ],
    bullets: [
      "Étude de couverture et choix des optiques",
      "Caméras IP, PTZ, dôme, bullet et analogiques HD",
      "NVR / DVR, stockage et sauvegarde des enregistrements",
      "Supervision à distance sur smartphone et poste de contrôle",
      "Salle CCTV : mur d'écrans, poste opérateur, procédures",
    ],
  },
  {
    slug: "reseau-informatique",
    title: "Câblage & brassage de baies informatiques",
    short:
      "Câblage structuré cuivre et fibre, brassage de baies, étiquetage, certification et mise en service des équipements actifs.",
    image: images.brassage,
    gallery: [
      { src: images.brassage, caption: "Baie brassée et équipements actifs" },
      { src: images.teamRack, caption: "Intervention de nos techniciens sur site" },
    ],
    intro:
      "Un réseau fiable commence par une infrastructure propre. Nous concevons, câblons et brassons vos baies informatiques selon les règles de l'art, avec une documentation complète remise en fin de chantier.",
    paragraphs: [
      "Câblage structuré cuivre (Cat 6 / 6A) et fibre optique, chemins de câbles, pose de prises RJ45, panneaux de brassage, organisation et repérage complet de la baie.",
      "Mise en service des équipements actifs : switches, routeurs, points d'accès Wi-Fi, onduleurs, VLAN et plan d'adressage. Chaque lien est testé et documenté.",
    ],
    bullets: [
      "Câblage cuivre Cat 6 / 6A et fibre optique",
      "Panneaux de brassage, étiquetage et repérage normalisé",
      "Switches, routeurs, points d'accès Wi-Fi, onduleurs",
      "Tests, recette et dossier technique de fin de travaux",
      "Réorganisation et remise à niveau de baies existantes",
    ],
  },
  {
    slug: "telecommunications",
    title: "Télécommunications VHF, VoIP & MSAN",
    short:
      "Radio VHF, téléphonie VoIP, équipements réseau local et fixe (MSAN) pour sites industriels et administrations.",
    image: images.teamRack,
    gallery: [
      { src: images.teamRack, caption: "Déploiement d'équipements télécom" },
      { src: images.brassage, caption: "Intégration en baie" },
    ],
    intro:
      "Nous installons et mettons en service les systèmes de communication de vos équipes : radio VHF, téléphonie VoIP et équipements réseau local et fixe de type MSAN.",
    paragraphs: [
      "Un MSAN est une interface capable de prendre en charge des milliers de clients large bande sur une seule interface réseau. Il permet de fournir de la téléphonie classique RTC, de la téléphonie VoIP et des services haut débit via une plateforme intégrée dans un central local, tout en occupant beaucoup moins d'espace que les technologies précédentes.",
      "Côté exploitation, nous déployons les postes VoIP, l'IPBX, les plans de numérotation, ainsi que les réseaux radio VHF fixes et mobiles avec programmation des canaux et des antennes.",
    ],
    bullets: [
      "Radio VHF : bases, mobiles, portatifs, antennes et pylônes",
      "Téléphonie VoIP : IPBX, postes, plans de numérotation",
      "Équipements réseau local et fixe (MSAN)",
      "Programmation, recette et formation des utilisateurs",
    ],
  },
  {
    slug: "liaisons-point-to-point",
    title: "Antennes & liaisons point à point",
    short:
      "Liaisons hertziennes point à point et point-multipoint pour interconnecter vos sites sans génie civil.",
    image: images.cameras,
    gallery: [{ src: images.cameras, caption: "Équipements radio et supports d'antennes" }],
    intro:
      "Interconnectez vos bâtiments, chantiers ou bases vie sans travaux de tranchée grâce à des liaisons radio point à point dimensionnées pour votre débit et votre distance.",
    paragraphs: [
      "Nous réalisons l'étude de visibilité, le choix des fréquences et des antennes, le montage sur mât ou pylône, l'alignement fin et la sécurisation électrique de la liaison.",
      "Chaque liaison est livrée avec ses mesures de performance : débit utile, niveau de signal, marge de liaison et supervision.",
    ],
    bullets: [
      "Étude de site et bilan de liaison",
      "Antennes directionnelles, sectorielles et paraboliques",
      "Montage sur mât / pylône, parafoudre et mise à la terre",
      "Alignement, mesures et supervision de la liaison",
    ],
  },
  {
    slug: "controle-acces",
    title: "Barrières automatiques & contrôle d'accès",
    short:
      "Barrières levantes indoor et outdoor, contrôle d'accès par badge ou biométrie, gestion des flux en temps réel.",
    image: images.barriere,
    gallery: [
      { src: images.barriere, caption: "Barrière levante automatique" },
      { src: images.barriere2, caption: "Borne de barrière automatique" },
      { src: images.biometrie, caption: "Contrôle d'accès biométrique ou badge" },
    ],
    intro:
      "Dans le cadre de la mise en réseau du contrôle de sécurité, IROMBI-ELECTRONET a fortement participé au déploiement de systèmes domotiques à travers de nombreux chantiers au Gabon : installation complète de barrières automatiques indoor et outdoor de type Parklio et CAME GARD.",
    paragraphs: [
      "La barrière automatique est un système intelligent de gestion des entrées et sorties dans les lieux publics ou privés. Elle traite la problématique de sécurité en réduisant la présence physique de personnel sur les points d'accès.",
      "Elle assure également la mesure et l'inventaire des flux de mouvement, transmis en temps réel vers une base de données exploitable par vos équipes.",
    ],
    bullets: [
      "Barrières levantes Parklio et CAME GARD, indoor et outdoor",
      "Contrôle d'accès par badge, code ou biométrie",
      "Boucles de détection, feux, interphonie et automatismes",
      "Comptage des flux et remontée temps réel en base de données",
    ],
  },
  {
    slug: "detection-incendie",
    title: "Systèmes de détection incendie",
    short:
      "Centrales d'alarme, détecteurs, déclencheurs manuels et diffuseurs sonores installés selon les règles de l'art.",
    image: images.incendie,
    gallery: [{ src: images.incendie, caption: "Kit système de détection d'incendie" }],
    intro:
      "Un système d'alarme de sécurité incendie doit déclencher l'alerte chaque fois qu'un incendie démarre. Sans exception.",
    paragraphs: [
      "On confond souvent la qualité d'une installation avec la qualité de ses composants. Choisir des équipements de haute performance ne suffit pas : c'est la conception, la pose, le paramétrage et la vérification périodique qui garantissent réellement le niveau de sécurité attendu.",
      "Nous concevons l'installation à partir de vos contraintes réelles — configuration des locaux, risques, effectifs — puis nous la testons, la documentons et en assurons la maintenance.",
    ],
    bullets: [
      "Centrales de détection, détecteurs de fumée et de chaleur",
      "Déclencheurs manuels, diffuseurs sonores et lumineux",
      "Mise en service, essais et procès-verbal d'installation",
      "Contrats de vérification périodique et maintenance",
    ],
  },
];

export const values = [
  {
    title: "Responsabilité et engagement",
    text: "Nous agissons toujours dans l'intérêt de nos clients, du premier repérage jusqu'à la réception des travaux.",
  },
  {
    title: "Assistance",
    text: "Nous agissons et portons assistance en tout temps, avec une astreinte joignable en cas d'incident.",
  },
  {
    title: "Excellence",
    text: "Expertise technique, qualité d'exécution et engagement sur les délais annoncés.",
  },
  {
    title: "Esprit d'équipe",
    text: "Culture du partage et de l'échange afin d'apporter davantage de valeur à nos services.",
  },
];

export const pillars = [
  {
    title: "Achat et livraison de matériels",
    text: "Sourcing d'équipements de sûreté, réseau et télécom, avec livraison sur votre site à Port-Gentil et dans tout le Gabon.",
  },
  {
    title: "Installation et mise en service",
    text: "Pose, câblage, paramétrage et recette complète de vos installations par des techniciens qualifiés.",
  },
  {
    title: "Maintenance et mise à niveau",
    text: "Contrats d'entretien, dépannage et modernisation des installations existantes.",
  },
];
