var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_fs = __toESM(require("fs"), 1);
var import_vite = require("vite");

// src/data.ts
var DEFAULT_GROUPS = [
  {
    "name": "Svetske sile",
    "color": "#3B82F6",
    "visible": true
  },
  {
    "name": "Vladari",
    "color": "#1b4e1f",
    "visible": true
  },
  {
    "name": "Sveto pismo",
    "color": "#EC4899",
    "visible": true
  },
  {
    "name": "Li\u010Dnosti",
    "color": "#10B981",
    "visible": true
  },
  {
    "name": "Biblijski doga\u0111aji",
    "color": "#F59E0B",
    "visible": true
  },
  {
    "name": "Svetski doga\u0111aji",
    "color": "#EF4444",
    "visible": true
  }
];
var INITIAL_ITEMS = [
  {
    "id": "bd0e18a3-de4e-4dbd-a7f5-e03a70a1e6c2",
    "title": "Pad Jerusalima",
    "description": "Vojni pohod kralja Navuhodonosora II protiv Jerusalima, razorenje Solomonovog hrama i po\u010Detak vavilonskog ropstva.",
    "group": "Biblijski doga\u0111aji",
    "startYear": -607,
    "color": "#BE185D",
    "tags": [
      "Biblija",
      "Hram",
      "Vavilon",
      "Proroci"
    ]
  },
  {
    "id": "a4c5bbe6-3fba-4876-9707-04f06b8506dc",
    "title": "Adam (930)",
    "description": "",
    "group": "Li\u010Dnosti",
    "startYear": -4026,
    "startMonth": 15,
    "endYear": -3096,
    "tags": [
      "Uvezeno"
    ]
  },
  {
    "id": "fa3982bd-4634-4e84-8016-99718be934c2",
    "title": "Metuzalem (969)",
    "description": "",
    "group": "Li\u010Dnosti",
    "startYear": -3339,
    "endYear": -2370,
    "tags": [
      "Uvezeno"
    ]
  },
  {
    "id": "8d5ea1ff-977c-4b6f-a071-cda7aa41d1b0",
    "title": "Lameh (777)",
    "description": "",
    "group": "Li\u010Dnosti",
    "startYear": -3152,
    "endYear": -2375,
    "tags": [
      "Uvezeno"
    ]
  },
  {
    "id": "ec99ce42-3750-433b-90d7-851c49932c6b",
    "title": "Enos (905)",
    "description": "",
    "group": "Li\u010Dnosti",
    "startYear": -3791,
    "endYear": -2886,
    "tags": [
      "Uvezeno"
    ]
  },
  {
    "id": "2700d245-4e4d-40d4-bdee-50b553952255",
    "title": "Jared (962)",
    "description": "",
    "group": "Li\u010Dnosti",
    "startYear": -3566,
    "endYear": -2604,
    "tags": [
      "Uvezeno"
    ]
  },
  {
    "id": "e324e32e-e866-4dd3-b7b2-21c27064c12e",
    "title": "Sit ro\u0111en",
    "description": "",
    "group": "Li\u010Dnosti",
    "startYear": -3896,
    "tags": [
      "Uvezeno"
    ]
  },
  {
    "id": "1ac84383-aa0d-4404-aebf-29afa1fec9c5",
    "title": "Enoh (365)",
    "description": "",
    "group": "Li\u010Dnosti",
    "startYear": -3404,
    "endYear": -3039,
    "tags": [
      "Uvezeno"
    ]
  },
  {
    "id": "51c75c66-58e8-4c6d-89a8-1d980576449a",
    "title": "Noje (950)",
    "description": "",
    "group": "Li\u010Dnosti",
    "startYear": -2970,
    "endYear": -2020,
    "tags": [
      "Uvezeno"
    ]
  },
  {
    "id": "af9608fe-fe24-4962-8d47-e64c6988e247",
    "title": "Jehovina objava ljudima",
    "description": "Pst 6:3: \u201ENe\u0107u doveka trpeti ljude, jer su oni samo telo. Neka \u017Eive jo\u0161 120 godina.\u201C",
    "group": "Biblijski doga\u0111aji",
    "startYear": -2490,
    "tags": [
      "Uvezeno"
    ]
  },
  {
    "id": "b9c20572-ef4e-4a3d-9641-5792bba58173",
    "title": "Jafet ro\u0111en",
    "description": "",
    "group": "Biblijski doga\u0111aji",
    "startYear": -2470,
    "tags": [
      "Uvezeno"
    ]
  },
  {
    "id": "479a3f90-7fb7-4d2d-ba13-eef65b20a4f2",
    "title": "Potop",
    "description": "40 dana",
    "group": "Biblijski doga\u0111aji",
    "startYear": -2370,
    "startMonth": 11,
    "tags": [
      "Uvezeno"
    ]
  },
  {
    "id": "d6e3626a-62ce-4174-9685-32d7a9f9d2e8",
    "title": "Arfaksad ro\u0111en",
    "description": "",
    "group": "Li\u010Dnosti",
    "startYear": -2368,
    "tags": [
      "Uvezeno"
    ]
  }
];

// src/translations.ts
var translations = {
  sr: {
    // Header
    appName: "Hronika",
    appSub: "Vremenska linija biblijskih doga\u0111aja",
    btnNew: "Novo",
    btnHelp: "Pomo\u0107",
    btnExportJson: "Izvezi JSON",
    btnExportCsv: "Izvezi CSV",
    btnImportJson: "Uvezi JSON",
    btnImportCsv: "Uvezi CSV",
    appearanceSettings: "Pode\u0161avanja izgleda (Tema i Skinovi)",
    viewTimeline: "Vremenska linija",
    viewChronological: "Hrono prikaz",
    viewMap: "Geografska mapa",
    viewSplit: "Podeljeni prikaz",
    tabTimeline: "Linija",
    tabChronological: "Hrono",
    tabMap: "Mapa",
    tabSplit: "Podeljeno",
    geoSectionTitle: "Geografska lokacija",
    geoPresetLabel: "Izaberi poznato mesto:",
    geoPresetPlaceholder: "-- Izaberi istorijsku lokaciju --",
    geoCustomPlace: "Prilago\u0111ena lokacija",
    geoPlaceName: "Naziv lokacije (npr. Jerusalim, Vavilon)",
    geoLat: "Geografska \u0161irina (Lat)",
    geoLng: "Geografska du\u017Eina (Lng)",
    geoClearLocation: "Ukloni lokaciju",
    geoNoCoords: "Bez lokacije",
    geoDetectedAuto: "Automatski prepoznata lokacija",
    geoEventsOnMap: "doga\u0111aja na mapi",
    mapModeToday: "Danas",
    mapModeHistory: "Istorija (Reljef)",
    mapModeKingdoms: "Kraljevstva i carstva",
    mapModeHistoryDesc: "Prirodni reljef i vegetacija bez savremenih granica",
    mapModeTodayDesc: "Savremena politi\u010Dka mapa sa dr\u017Eavnim granicama",
    mapModeKingdomsDesc: "Istorijska kraljevstva i carstva sa tada\u0161njim granicama i prestonicama",
    geoSearchMap: "Pretra\u017Ei lokacije na mapi...",
    geoAllLocations: "Sve lokacije",
    geoDetails: "Detalji",
    geoCenterOnMap: "Centriraj na mapi",
    geoNoMapEventsNotice: "Trenutno nema doga\u0111aja sa lokacijom koji odgovaraju filterima.",
    noLocationEvents: "Doga\u0111aji bez lokacije",
    addLocation: "Dodaj lokaciju",
    successImportJson: "Uspe\u0161no uvezeno {count} stavki iz JSON fajla!",
    errorImportJsonNoValid: "Fajl ne sadr\u017Ei validne objekte vremenske linije.",
    errorImportJsonArray: "JSON fajl mora da bude niz objekata.",
    errorImportJsonFail: "Neuspelo u\u010Ditavanje JSON fajla. Proveri ispravnost sintakse.",
    successImportCsv: "Uspe\u0161no uvezeno {count} stavki iz CSV fajla!",
    errorImportCsvNoValid: "Nismo prona\u0161li validne redove u CSV fajlu. Proveri zaglavlja: title,group,startYear,endYear,description",
    errorImportCsvFail: "Do\u0161lo je do gre\u0161ke prilikom u\u010Ditavanja CSV fajla.",
    // Language & Translation Pack
    languageSection: "Prevo\u0111enje",
    languageSectionDesc: "Preuzmite \u0161ablon za prevod koji mo\u017Eete direktno otvoriti u Google Drive-u (Google Docs / Google Sheets) ili tekstualnom editoru, i uvezite ga jednim klikom.",
    btnExportLangTemplate: "Preuzmi \u0161ablon (JSON)",
    btnExportLangCsv: "Preuzmi \u0161ablon za Google Drive",
    btnExportLangJson: "Preuzmi JSON \u0161ablon",
    btnImportLang: "Uvezi prevedeni fajl (JSON / CSV)",
    btnImportLangAny: "Uvezi prevod (JSON / CSV)",
    activeLangLabel: "Aktivni jezik interfejsa",
    langSrName: "Srpski (podrazumevano)",
    langEnName: "English",
    customLangLoaded: "Prilago\u0111eni prevod",
    btnResetDefaultLang: "Vrati na podrazumevani jezik",
    customLangCount: "prevedenih termina",
    importLangSuccessMsg: "Uspe\u0161no uvezen prevod \u201E{name}\u201C sa {count} prevedenih termina!",
    importLangErrorMsg: "Neispravan jezi\u010Dki fajl. Proverite da li je fajl u ispravnom JSON, CSV ili TXT formatu.",
    downloadTemplateNotice: "Preuzeti fajl mo\u017Eete otvoriti u programu Google Docs, Notepad ili VS Code, upisati prevod i ponovo ga uvesti ovde.",
    langBadgeTemplate: "\u0160ablon za prevod",
    googleDocsHelpTitle: "Direktno ure\u0111ivanje u Google Docs:",
    btnOpenGoogleDocs: "Otvori u Google Docs",
    btnCreateGoogleDoc: "Kreiraj u Google Docs",
    btnSyncGoogleDocs: "U\u010Ditaj iz Google Docs",
    googleDocsSignIn: "Prijavi se putem Google-a",
    googleDocsSignOut: "Odjavi se",
    googleDocsSignedInAs: "Prijavljeni ste kao:",
    googleDocsDesc: "Kreira dokument na va\u0161em Google Drive-u formatiran kao u NW Scheduler-u (klju\u010D: Prevod) i odmah ga otvara za rad.",
    googleDocsCreatedNotice: "Google Docs dokument je uspe\u0161no kreiran i otvoren!",
    googleDocsSyncSuccess: "Uspe\u0161no u\u010Ditane izmene iz Google Docs-a!",
    googleDocsConfirmCreate: "Da li \u017Eelite da kreirate novi dokument \u201EHronika - Prevod\u201C na va\u0161em Google Drive-u?",
    btnDownloadTxt: "Preuzmi .txt (format za Google Docs)",
    // Groups / Themes
    groupWorldPowers: "Svetske sile",
    groupRulers: "Vladari",
    groupHolyScriptures: "Sveto pismo",
    groupHistoricalFigures: "Li\u010Dnosti",
    groupBiblicalEvents: "Biblijski doga\u0111aji",
    groupWorldEvents: "Svetski doga\u0111aji",
    // Sidebar
    sidebarTitle: "MENI",
    searchPlaceholder: "Pretra\u017Ei doga\u0111aje, opise, tagove...",
    groupSection: "Kategorije",
    showAll: "Prika\u017Ei sve",
    hideAll: "Sakrij sve",
    tagSection: "Filtriraj po tagu",
    allTags: "Svi tagovi",
    timespanSection: "Vremenski raspon (godine)",
    approx: "pribli\u017Eno",
    scaleGroupHeights: "Visina grupa:",
    sidebarPin: "Prikva\u010Di panel (Pin)",
    sidebarUnpin: "Otka\u010Di panel (Unpin)",
    sidebarAutoHide: "Automatsko sakrivanje",
    sidebarAutoHideOn: "Auto-sakrivanje uklju\u010Deno (otvara se na prelaz mi\u0161em)",
    sidebarAutoHideOff: "Auto-sakrivanje isklju\u010Deno",
    sidebarNarrow: "Uzani okvir",
    sidebarExpand: "Pro\u0161iri panel",
    sidebarCollapse: "Skupi u uzani okvir",
    sidebarToggleGroup: "Klikni za prikaz/sakrivanje grupe",
    sidebarActiveFilters: "Aktivni filteri",
    // Timeline
    groupHeight: "Visina grupa:",
    tipSwipe: "Savet: Prevucite vremenski prostor levo/desno za slobodnu navigaciju",
    btnZoomIn: "Uveli\u010Daj vremensku liniju (zoom)",
    btnZoomOut: "Smanji vremensku liniju (zoom)",
    btnResetZoom: "Resetuj uveli\u010Danje i centriraj",
    editBtn: "Uredi",
    deleteBtn: "Obri\u0161i",
    confirmDelete: "Da li ste sigurni da \u017Eelite da obri\u0161ete doga\u0111aj \u201E{title}\u201C?",
    singleYearCards: "Kartice:",
    singleYearPinned: "Pinovano",
    singleYearPinsOnly: "Samo \u010Dioda",
    // Help / Pomoć
    helpTitle: "Pomo\u0107 za kori\u0161\u0107enje",
    helpIntro: "Dobrodo\u0161li u Hroniku - interaktivni vizuelizator istorijskih doga\u0111aja i perioda sa bogatim opcijama prilago\u0111avanja izgleda.",
    helpControlsTitle: "Navigacija i kontrole",
    helpControls1: "Prevla\u010Denje mi\u0161em (Drag-to-pan): Kliknite i dr\u017Eite prazan prostor na vremenskoj liniji da biste je pomerali levo ili desno.",
    helpControls2: "To\u010Dki\u0107 mi\u0161a (wheel): Pomeranje na to\u010Dki\u0107 pomera vremensku liniju levo-desno.",
    helpControls3: "Zoom kontrole (+/-): Koristite tastere u donjem desnom uglu za uveli\u010Danje (prikaz meseci) ili smanjenje (ve\u0107i istorijski raspon).",
    helpControls4: "Prilago\u0111avanje visine (Visina grupa): Dugmi\u0107i za promenu visine horizontalnih grupa omogu\u0107avaju optimalno pakovanje doga\u0111aja bez preklapanja.",
    helpEditingTitle: "Ure\u0111ivanje i unos podataka",
    helpEditing1: "Dodavanje novog unosa: Kliknite na dugme 'Novo' u zaglavlju. Mo\u017Eete odabrati tip 'Doga\u0111aj' (jedna ta\u010Dka) ili 'Period' (vremenski opseg sa po\u010Detkom i krajem).",
    helpEditing2: "Godi\u0161nja doba i meseci: Prilikom unosa pored godine mo\u017Eete izabrati jedno od \u010Detiri godi\u0161nja doba (prole\u0107e, leto, jesen, zima) ili konkretan mesec za dodatnu preciznost.",
    helpEditing3: "Ure\u0111ivanje unosa: Klikom na bilo koji doga\u0111aj ili period otvori\u0107ete prozor za izmenu, odakle ga mo\u017Eete i obrisati.",
    helpEditing4: "Izvoz i Uvoz podataka: Preko dugmi\u0107a u zaglavlju mo\u017Eete izvesti sve svoje podatke kao JSON ili CSV fajl, kao i u\u010Ditati ih nazad.",
    helpDesignTitle: "Estetika i skinovi",
    helpDesign1: "Tema: Izaberite svetlu ili tamnu temu u meniju za pode\u0161avanja.",
    helpDesign2: "Skinovi izgleda: Primena razli\u010Ditih umetni\u010Dkih skinova (moderni, anti\u010Dki pergament, renesansa, vizuelni kosmos) menja kompoziciju, linije, fontove i celokupan vizuelni identitet.",
    helpClose: "Zatvori",
    // Settings Modal
    settingsTitle: "Pode\u0161avanja",
    settingsTheme: "Tema / Izgled",
    themeNormal: "Standardna",
    themeDark: "Tamna",
    themeLight: "Svetla",
    settingsSkin: "Stil / Skin vizuelnog izgleda",
    skinModern: "Minimalizam (Inter / Space Grotesk, \u010Diste linije)",
    skinAncient: "Antika (Garamond, rimska estetika)",
    skinCosmic: "Kosmos (Futuristi\u010Dki neon, ugalj crna)",
    skinIndustrial: "Industrijska era (\u010Celik i monohromatske linije)",
    skinTechno: "Neon (Svetle\u0107i interfejs)",
    skinClassroom: "U\u010Dionica (Izgled \u0161kolske table i krede)",
    skinSage: "\u017Dalfija",
    skinGoldenParchment: "Zlatni pergament",
    skinAdriatic: "Jadran",
    skinJordanIndigo: "Jadran",
    skinLavenderSlate: "Lavanda & Pepeo",
    skinDanube: "Dunav",
    skinMidzor: "Mid\u017Eor",
    skinAutumn: "Jesen",
    settingsFont: "Font",
    fontInter: "Inter (Moderan & \u010Dist)",
    fontPlusJakarta: "Plus Jakarta Sans (Prefinjen & \u010Ditljiv)",
    fontCinzel: "Cinzel (Istorijski & klasi\u010Dni serif)",
    fontMerriweather: "Merriweather (Knji\u017Eevni serif)",
    fontLora: "Lora (Elegantan & akademski serif)",
    fontSpaceGrotesk: "Space Grotesk (Geometrijski & tehni\u010Dki)",
    fontJetBrainsMono: "JetBrains Mono (Monospace / Terminal)",
    fontSystem: "Sistemski podrazumevani",
    settingsLanguage: "Jezik interfejsa",
    langSerbian: "Srpski",
    langEnglish: "English",
    settingsClose: "Zatvori",
    // TimelineItemModal
    modalNewTitle: "Dodaj doga\u0111aj ili period",
    modalEditTitle: "Izmeni: {title}",
    modalLabelType: "Vrsta unosa",
    typeEvent: "\u{1F4CD} Doga\u0111aj",
    typePeriod: "\u{1F4CA} Period",
    labelTitle: "Naziv",
    titlePlaceholder: "npr. Julije Cezar, Pad Vavilona...",
    labelGroup: "Grupa",
    newGroupPlaceholder: "npr. Arheologija, Nauka...",
    newGroupLabel: "\u{1F195} Nova grupa...",
    eraBCE: "pre n. e.",
    eraCE: "n. e.",
    approxLabel: "Pribli\u017Eno",
    labelYear: "Godina",
    labelMonth: "God. doba / mesec",
    labelDescription: "Opis",
    descPlaceholder: "Detaljniji opis osobe, doga\u0111aja...",
    labelSource: "Izvor (link)",
    sourcePlaceholder: "npr. https://sr.wikipedia.org/wiki/...",
    labelImage: "Sli\u010Dica / ilustracija",
    imagePlaceholder: "Zalepi URL slike ili otpremi fajl...",
    imageUploadBtn: "Izaberi sliku",
    imageRemoveBtn: "Ukloni sliku",
    labelTags: "Tagovi",
    tagsInfo: "Odvoj zarezima",
    tagsPlaceholder: "npr. Antika, Vladari, Rim, Biblija, Rat",
    labelColor: "Boja (opciono)",
    colorDefault: "Podrazumevana",
    btnCancel: "Odustani",
    btnSave: "Sa\u010Duvaj",
    btnDelete: "Obri\u0161i",
    confirmDeleteItem: "Da li ste sigurni da \u017Eelite da obri\u0161ete ovaj unos?",
    // Seasons
    seasonSpring: "prole\u0107e",
    seasonSummer: "leto",
    seasonAutumn: "jesen",
    seasonWinter: "zima",
    samoGodina: "samo godina",
    // Months
    jan: "januar",
    feb: "februar",
    mar: "mart",
    apr: "april",
    maj: "maj",
    jun: "jun",
    jul: "jul",
    avg: "avgust",
    sep: "septembar",
    okt: "oktobar",
    nov: "novembar",
    dec: "decembar",
    shortJan: "jan",
    shortFeb: "feb",
    shortMar: "mar",
    shortApr: "apr",
    shortMaj: "maj",
    shortJun: "jun",
    shortJul: "jul",
    shortAvg: "avg",
    shortSep: "sep",
    shortOkt: "okt",
    shortNov: "nov",
    shortDec: "dec",
    eraPre: "pre n. e.",
    eraN: "n. e.",
    eraPreShort: "pre n. e.",
    eraNShort: "n. e.",
    okoLabel: "oko",
    okoLabelShort: "o. ",
    // Additional translated elements
    settingsSubtitle: "Prilagodi izgled",
    themeLabel: "Tema / Izgled",
    themeDarkBtn: "Tamna",
    themeLightBtn: "Svetla",
    skinLabel: "Izgled",
    settingsApplyClose: "Primeni i zatvori",
    skinNameModern: "Minimalizam",
    skinNameAncientParchment: "Anti\u010Dki pergament",
    skinNameMiddleAges: "Srednji vek",
    skinNameRenaissance: "Renesansa",
    skinNameIndustrial: "Industrijska era",
    skinNameTechno: "Neon",
    skinNameClassroom: "U\u010Dionica",
    skinNameMinimalist: "Minimalisti\u010Dki",
    skinNameNewspaper: "Novinski",
    skinNameAncient: "Antika",
    skinNameCosmic: "Kosmos",
    helpAppTitle: "Pomo\u0107 za aplikaciju Hronika",
    helpMoveZoomTitle: "Pomeranje i Zumiranje",
    helpMoveTitle: "Pomeranje (Panovanije)",
    helpMoveDesc: "Kliknite bilo gde na slobodni prostor vremenske linije i prevucite mi\u0161em (levo ili desno) da biste se kretali kroz istoriju. Na telefonu to radite prostim prevla\u010Denjem prsta.",
    helpZoomTitle: "Zumiranje",
    helpZoomDesc: "Koristite tastere + i - u kontrolnoj traci ili dr\u017Eite to\u010Dki\u0107 mi\u0161a / pinch-zoom prstima na mobilnim telefonima.",
    helpMobileTitle: "Mobilna verzija",
    helpMobileDesc: "Stranica dozvoljava prirodno pomeranje u svim pravcima (levo-desno i gore-dole) za maksimalnu udobnost prstiju.",
    helpYearBce: "Godina pre nove ere",
    helpYearCe: "Godina nove ere",
    helpYearManual: "Prilikom ru\u010Dnog dodavanja, jednostavno izaberite eru u padaju\u0107oj sekciji, dok vrednost godine upisujete kao pozitivan \u010Dist broj.",
    helpCsvDesc: "Prva linija mora da navede ta\u010Dna zaglavlja:",
    helpCsvNotice: '* endYear ostavite prazno za pojedina\u010Dni doga\u0111aj. Za dodavanje tagova preko CSV, dodajte kolonu "tags" sa vrednostima razdvojenim ta\u010Dka-zarezom (npr. "Rim;Antika").',
    helpCloseBtn: "Zatvori pomo\u0107",
    btnNewProject: "Novi projekat",
    btnCopyLink: "Kopiraj link",
    btnMainProject: "Glavni projekat",
    copiedLinkToast: "Link uspe\u0161no kopiran!",
    badgeMainProject: "\u{1F3E0} Glavni projekat",
    badgePrivateProject: "\u{1F517} Privatni projekat"
  },
  en: {
    // Header
    appName: "Chronicle",
    appSub: "Interactive Historical Timeline",
    btnNew: "New",
    btnHelp: "Guide",
    btnExportJson: "Export JSON",
    btnExportCsv: "Export CSV",
    btnImportJson: "Import JSON",
    btnImportCsv: "Import CSV",
    appearanceSettings: "Appearance Settings (Themes & Skins)",
    viewTimeline: "Timeline View",
    viewChronological: "Chrono View",
    viewMap: "Geographic Map",
    viewSplit: "Split View",
    tabTimeline: "Timeline",
    tabChronological: "Chrono",
    tabMap: "Map",
    tabSplit: "Split",
    geoSectionTitle: "Geographic Location",
    geoPresetLabel: "Choose known place:",
    geoPresetPlaceholder: "-- Select historical location --",
    geoCustomPlace: "Custom location",
    geoPlaceName: "Location name (e.g. Jerusalem, Babylon)",
    geoLat: "Latitude",
    geoLng: "Longitude",
    geoClearLocation: "Remove location",
    geoNoCoords: "No location",
    geoDetectedAuto: "Auto-detected location",
    geoEventsOnMap: "events on map",
    mapModeToday: "Today",
    mapModeHistory: "History (Relief)",
    mapModeKingdoms: "Ancient Kingdoms",
    mapModeHistoryDesc: "Natural relief and vegetation without modern borders",
    mapModeTodayDesc: "Modern political map with state borders",
    mapModeKingdomsDesc: "Historical empires & kingdoms with ancient borders and capitals",
    geoSearchMap: "Search locations on map...",
    geoAllLocations: "All locations",
    geoDetails: "Details",
    geoCenterOnMap: "Center on map",
    geoNoMapEventsNotice: "No events with location match the current filters.",
    noLocationEvents: "Events without location",
    addLocation: "Add location",
    successImportJson: "Successfully imported {count} items from JSON!",
    errorImportJsonNoValid: "File does not contain valid timeline objects.",
    errorImportJsonArray: "JSON file must be an array of objects.",
    errorImportJsonFail: "Failed to load JSON. Please check file syntax.",
    successImportCsv: "Successfully imported {count} items from CSV!",
    errorImportCsvNoValid: "No valid rows found in CSV. Validate headers: title,group,startYear,endYear,description",
    errorImportCsvFail: "Error occurred while loading the CSV file.",
    // Language & Translation Pack
    languageSection: "Translation",
    languageSectionDesc: "Export a translation template to open directly in Google Drive (Google Docs / Google Sheets) or any text editor, and import your translated file with one click.",
    btnExportLangTemplate: "Download Template (JSON)",
    btnExportLangCsv: "Download Template for Google Drive",
    btnExportLangJson: "Download JSON Template",
    btnImportLang: "Import Translated File (JSON / CSV)",
    btnImportLangAny: "Import Translation (JSON / CSV)",
    activeLangLabel: "Active Interface Language",
    langSrName: "Serbian (Default)",
    langEnName: "English",
    customLangLoaded: "Custom Translation",
    btnResetDefaultLang: "Reset to default language",
    customLangCount: "translated terms",
    importLangSuccessMsg: "Successfully imported translation '{name}' with {count} translated terms!",
    importLangErrorMsg: "Invalid language file format. Please ensure it is a valid JSON, CSV, or TXT file.",
    downloadTemplateNotice: "You can open the downloaded file in Google Docs, Notepad, or VS Code, translate the text, and import it back here.",
    langBadgeTemplate: "Translation Template",
    googleDocsHelpTitle: "Direct Editing in Google Docs:",
    btnOpenGoogleDocs: "Open in Google Docs",
    btnCreateGoogleDoc: "Create in Google Docs",
    btnSyncGoogleDocs: "Load from Google Docs",
    googleDocsSignIn: "Sign in with Google",
    googleDocsSignOut: "Sign out",
    googleDocsSignedInAs: "Signed in as:",
    googleDocsDesc: "Creates a formatted document on your Google Drive (key: translation like in NW Scheduler) and opens it immediately.",
    googleDocsCreatedNotice: "Google Docs document created and opened successfully!",
    googleDocsSyncSuccess: "Translations successfully updated from Google Docs!",
    googleDocsConfirmCreate: "Do you want to create a new 'Hronika - Prevod' document on your Google Drive?",
    btnDownloadTxt: "Download .txt (Google Docs format)",
    // Groups / Themes
    groupWorldPowers: "World Powers",
    groupRulers: "Rulers",
    groupHolyScriptures: "Holy Scriptures",
    groupHistoricalFigures: "Persons",
    groupBiblicalEvents: "Biblical Events",
    groupWorldEvents: "World Events",
    // Sidebar
    sidebarTitle: "MENU",
    searchPlaceholder: "Search events, descriptions, tags...",
    groupSection: "Categories",
    showAll: "Show All",
    hideAll: "Hide All",
    tagSection: "Filter by Tag",
    allTags: "All Tags",
    timespanSection: "Time Range (years)",
    approx: "approximate",
    scaleGroupHeights: "Group Spacing:",
    sidebarPin: "Pin sidebar",
    sidebarUnpin: "Unpin sidebar",
    sidebarAutoHide: "Auto-hide sidebar",
    sidebarAutoHideOn: "Auto-hide enabled (opens on hover)",
    sidebarAutoHideOff: "Auto-hide disabled",
    sidebarNarrow: "Narrow rail",
    sidebarExpand: "Expand sidebar",
    sidebarCollapse: "Collapse to narrow rail",
    sidebarToggleGroup: "Click to toggle group visibility",
    sidebarActiveFilters: "Active filters",
    // Timeline
    groupHeight: "Group Spacing:",
    tipSwipe: "Tip: Click and drag empty space left/right to navigate the timeline",
    btnZoomIn: "Zoom In Timeline",
    btnZoomOut: "Zoom Out Timeline",
    btnResetZoom: "Reset Zoom and Center",
    editBtn: "Edit",
    deleteBtn: "Delete",
    confirmDelete: 'Are you sure you want to delete event "{title}"?',
    singleYearCards: "Cards:",
    singleYearPinned: "Pinned",
    singleYearPinsOnly: "Pins only",
    // Help / Uputstvo
    helpTitle: "User Guide",
    helpIntro: "Welcome to Chronicle - an interactive visualizer of historical events and periods with rich appearance customization options.",
    helpControlsTitle: "Navigation & Controls",
    helpControls1: "Drag-to-pan: Click and hold empty space on the timeline to pan left or right.",
    helpControls2: "Mouse wheel: Scroll to move the timeline left or right.",
    helpControls3: "Zoom controls (+/-): Use buttons in the bottom right corner to zoom in (view months) or zoom out (larger historic range).",
    helpControls4: "Spacing adjustments: Spacing/height buttons allow packing events optimally without overlaps.",
    helpEditingTitle: "Data Editing & Creation",
    helpEditing1: "Adding a new entry: Click 'New' in the header. Choose 'Event' (single point) or 'Period' (time range with start & end).",
    helpEditing2: "Seasons and months: Along with the year, you can choose one of the four seasons (Spring, Summer, Autumn, Winter) or a specific month for greater precision.",
    helpEditing3: "Editing an entry: Click on any event or period card to open the edit modal, from where you can also delete it.",
    helpEditing4: "Data Import & Export: Use header buttons to export your timeline as JSON or CSV, or import files back.",
    helpDesignTitle: "Aesthetics & Skins",
    helpDesign1: "Theme: Choose light or dark theme in the settings panel.",
    helpDesign2: "Aesthetic Skins: Apply different artistic styles (Modern, Ancient parchment, Renaissance, Cosmic space) to change layouts, line work, fonts and the entire aesthetic identity.",
    helpClose: "Close",
    // Settings Modal
    settingsTitle: "Settings",
    settingsTheme: "Theme / Skin",
    themeNormal: "Standard",
    themeDark: "Dark",
    themeLight: "Light",
    settingsSkin: "Visual Styling Skin",
    skinModern: "Minimalism (Inter / Space Grotesk, clean lines)",
    skinAncient: "Ancient (Garamond, Roman-era aesthetics)",
    skinCosmic: "Cosmos (Futuristic neon, charcoal slate)",
    skinIndustrial: "Industrial Era (Steel structure and monochrome look)",
    skinTechno: "Neon (Glowing terminal layout)",
    skinClassroom: "Classroom (Blackboard & chalk aesthetic)",
    skinSage: "Sage",
    skinGoldenParchment: "Golden Parchment",
    skinAdriatic: "Adriatic Sea",
    skinJordanIndigo: "Adriatic Sea",
    skinLavenderSlate: "Lavender & Ash",
    skinDanube: "Danube River",
    skinMidzor: "Mid\u017Eor Mountain",
    skinAutumn: "Autumn",
    settingsFont: "Site Font / Typography",
    fontInter: "Inter (Modern & clean)",
    fontPlusJakarta: "Plus Jakarta Sans (Polished & legible)",
    fontCinzel: "Cinzel (Historical & classical serif)",
    fontMerriweather: "Merriweather (Literary editorial serif)",
    fontLora: "Lora (Elegant academic serif)",
    fontSpaceGrotesk: "Space Grotesk (Geometric & technical)",
    fontJetBrainsMono: "JetBrains Mono (Monospace / Code)",
    fontSystem: "System Default",
    settingsLanguage: "Interface Language",
    langSerbian: "Serbian (Srpski)",
    langEnglish: "English",
    settingsClose: "Close",
    // TimelineItemModal
    modalNewTitle: "Add Event or Period",
    modalEditTitle: "Edit: {title}",
    modalLabelType: "Entry Type",
    typeEvent: "\u{1F4CD} Event",
    typePeriod: "\u{1F4CA} Period",
    labelTitle: "Title",
    titlePlaceholder: "e.g. Julius Caesar, Fall of Babylon...",
    labelGroup: "Group",
    newGroupPlaceholder: "e.g. Archeology, Science...",
    newGroupLabel: "\u{1F195} New group...",
    eraBCE: "BCE",
    eraCE: "CE",
    approxLabel: "Approximate",
    labelYear: "Year",
    labelMonth: "Season / Month",
    labelDescription: "Description",
    descPlaceholder: "Detailed description of person, event...",
    labelSource: "Source (link)",
    sourcePlaceholder: "e.g. https://en.wikipedia.org/wiki/...",
    labelImage: "Image / Artwork",
    imagePlaceholder: "Paste image URL or upload file...",
    imageUploadBtn: "Choose local image",
    imageRemoveBtn: "Remove image",
    labelTags: "Tags",
    tagsInfo: "Comma-separated",
    tagsPlaceholder: "e.g. Antiquity, Rulers, Rome, Bible, War",
    labelColor: "Color (optional)",
    colorDefault: "Default",
    btnCancel: "Cancel",
    btnSave: "Save",
    btnDelete: "Delete",
    confirmDeleteItem: "Are you sure you want to delete this entry?",
    // Seasons
    seasonSpring: "spring",
    seasonSummer: "summer",
    seasonAutumn: "autumn",
    seasonWinter: "winter",
    samoGodina: "year only",
    // Months
    jan: "January",
    feb: "February",
    mar: "March",
    apr: "April",
    maj: "May",
    jun: "June",
    jul: "July",
    avg: "August",
    sep: "September",
    okt: "October",
    nov: "November",
    dec: "December",
    shortJan: "Jan",
    shortFeb: "Feb",
    shortMar: "Mar",
    shortApr: "Apr",
    shortMaj: "May",
    shortJun: "Jun",
    shortJul: "Jul",
    shortAvg: "Aug",
    shortSep: "Sep",
    shortOkt: "Oct",
    shortNov: "Nov",
    shortDec: "Dec",
    eraPre: "BCE",
    eraN: "CE",
    eraPreShort: "BCE",
    eraNShort: "CE",
    okoLabel: "approx. ",
    okoLabelShort: "ca. ",
    // Additional translated elements
    settingsSubtitle: "Customize the layout of the interactive timeline",
    themeLabel: "Theme / Skin",
    themeDarkBtn: "Dark Theme",
    themeLightBtn: "Light Theme",
    skinLabel: "Select Skin / Design",
    settingsApplyClose: "Apply and Close",
    skinNameModern: "Sleek Modern",
    skinNameAncientParchment: "Ancient Parchment",
    skinNameMiddleAges: "Middle Ages",
    skinNameRenaissance: "Renaissance",
    skinNameIndustrial: "Industrial Era",
    skinNameTechno: "Modern / Techno",
    skinNameClassroom: "Educational / Classroom",
    skinNameMinimalist: "Minimalist",
    skinNameNewspaper: "Newspaper",
    skinNameAncient: "Ancient (Vintage Scroll)",
    skinNameCosmic: "Cosmic (Aurora Neon)",
    helpAppTitle: "Chronicle App Help",
    helpMoveZoomTitle: "Panning and Zooming",
    helpMoveTitle: "Panning (Drag-to-pan)",
    helpMoveDesc: "Click anywhere on the empty space of the timeline and drag your mouse (left or right) to move through history. On mobile devices, simply swipe with a finger.",
    helpZoomTitle: "Zooming (Zoom)",
    helpZoomDesc: "Use the + and - buttons in the control bar, scroll with the mouse wheel, or pinch-zoom with your fingers on mobile devices.",
    helpMobileTitle: "Mobile Version",
    helpMobileDesc: "The page supports smooth, natural panning in all directions (left-right and up-down) for maximum finger comfort.",
    helpYearBce: "Year before common era (BCE)",
    helpYearCe: "Year of common era (CE)",
    helpYearManual: "When manually adding an entry, simply select the era in the dropdown section and enter the year as a positive number.",
    helpCsvDesc: "The first line must specify the exact headers:",
    helpCsvNotice: '* Leave endYear empty for single events. To add tags via CSV, include a "tags" column with semicolon-separated values (e.g. "Rome;Antiquity").',
    helpCloseBtn: "Close Help",
    btnNewProject: "New Project",
    btnCopyLink: "Copy Link",
    btnMainProject: "Main Project",
    copiedLinkToast: "Link successfully copied!",
    badgeMainProject: "\u{1F3E0} Main Project",
    badgePrivateProject: "\u{1F517} Private Project"
  }
};

// server.ts
function writeTimelineDataToLocalFile(items, groups) {
  const fileContent = `import { TimelineItem } from "./types";

export const DEFAULT_GROUPS = ${JSON.stringify(groups, null, 2)};

export const INITIAL_ITEMS: TimelineItem[] = ${JSON.stringify(items, null, 2)};
`;
  import_fs.default.writeFileSync(import_path.default.join(process.cwd(), "src/data.ts"), fileContent, "utf8");
}
async function startServer() {
  const app = (0, import_express.default)();
  const PORT = Number(process.env.PORT) || 3e3;
  app.use(import_express.default.json({ limit: "50mb" }));
  const projectsDir = import_path.default.join(process.cwd(), "data", "projects");
  if (!import_fs.default.existsSync(projectsDir)) {
    import_fs.default.mkdirSync(projectsDir, { recursive: true });
  }
  app.get("/api/timeline", (req, res) => {
    const rawId = req.query.id;
    const id = rawId && rawId.trim() ? rawId.trim() : "default";
    const filePath = import_path.default.join(projectsDir, `${id}.json`);
    if (import_fs.default.existsSync(filePath)) {
      try {
        const data = JSON.parse(import_fs.default.readFileSync(filePath, "utf8"));
        if (!data.name) {
          data.name = id === "default" ? "Istorija" : `Projekat ${id}`;
        }
        return res.json(data);
      } catch (err) {
        console.error(`Error parsing project ${id}:`, err);
      }
    }
    const defaultPath = import_path.default.join(projectsDir, "default.json");
    if (import_fs.default.existsSync(defaultPath)) {
      try {
        const data = JSON.parse(import_fs.default.readFileSync(defaultPath, "utf8"));
        if (!data.name) {
          data.name = "Istorija";
        }
        return res.json(data);
      } catch (err) {
        console.error("Error parsing default project file:", err);
      }
    }
    const initialData = { name: "Istorija", items: INITIAL_ITEMS, groups: DEFAULT_GROUPS };
    try {
      import_fs.default.writeFileSync(defaultPath, JSON.stringify(initialData, null, 2), "utf8");
    } catch (err) {
      console.error("Error seeding default project file:", err);
    }
    return res.json(initialData);
  });
  app.post("/api/timeline", (req, res) => {
    const rawId = req.body.id || req.query.id;
    const id = typeof rawId === "string" && rawId.trim() ? rawId.trim() : "default";
    const { items, groups, name } = req.body;
    if (!Array.isArray(items) || !Array.isArray(groups)) {
      return res.status(400).json({ error: "Format podataka nije ispravan." });
    }
    try {
      const filePath = import_path.default.join(projectsDir, `${id}.json`);
      let existingName = id === "default" ? "Istorija" : `Projekat ${id}`;
      if (import_fs.default.existsSync(filePath)) {
        try {
          const parsed = JSON.parse(import_fs.default.readFileSync(filePath, "utf8"));
          if (parsed.name) existingName = parsed.name;
        } catch (_) {
        }
      }
      const dataToSave = {
        name: name || existingName,
        items,
        groups
      };
      import_fs.default.writeFileSync(filePath, JSON.stringify(dataToSave, null, 2), "utf8");
      if (id === "default") {
        writeTimelineDataToLocalFile(items, groups);
      }
      res.json({ success: true });
    } catch (err) {
      console.error(`Error saving project data for ${id}:`, err);
      res.status(500).json({ error: err.message });
    }
  });
  app.post("/api/timeline/create", (req, res) => {
    const { groups, name } = req.body;
    const randomStr = Math.random().toString(36).substring(2, 8);
    const newId = `hronika-${randomStr}`;
    let dataItems = [];
    let dataGroups = groups;
    let newName = name || `Projekat ${randomStr}`;
    if (!Array.isArray(dataGroups)) {
      dataGroups = DEFAULT_GROUPS;
    }
    try {
      const filePath = import_path.default.join(projectsDir, `${newId}.json`);
      const dataToSave = { name: newName, items: dataItems, groups: dataGroups };
      import_fs.default.writeFileSync(filePath, JSON.stringify(dataToSave, null, 2), "utf8");
      res.json({ id: newId, name: newName });
    } catch (err) {
      console.error(`Error creating new project ${newId}:`, err);
      res.status(500).json({ error: err.message });
    }
  });
  app.delete("/api/timeline", (req, res) => {
    const rawId = req.query.id;
    const id = rawId && rawId.trim() ? rawId.trim() : "";
    if (!id || id === "default") {
      return res.status(400).json({ error: "Glavni projekat se ne mo\u017Ee obrisati" });
    }
    const filePath = import_path.default.join(projectsDir, `${id}.json`);
    if (import_fs.default.existsSync(filePath)) {
      try {
        import_fs.default.unlinkSync(filePath);
        return res.json({ success: true });
      } catch (err) {
        return res.status(500).json({ error: err.message });
      }
    }
    return res.status(404).json({ error: "Projekat nije prona\u0111en" });
  });
  app.get("/api/projects", (req, res) => {
    try {
      const files = import_fs.default.readdirSync(projectsDir);
      const list = files.filter((f) => f.endsWith(".json")).map((f) => {
        const id = f.replace(".json", "");
        const filePath = import_path.default.join(projectsDir, f);
        try {
          const data = JSON.parse(import_fs.default.readFileSync(filePath, "utf8"));
          return {
            id,
            name: data.name || (id === "default" ? "Istorija" : `Projekat ${id}`)
          };
        } catch (_) {
          return {
            id,
            name: id === "default" ? "Istorija" : `Projekat ${id}`
          };
        }
      });
      const hasDefault = list.some((p) => p.id === "default");
      if (!hasDefault) {
        list.unshift({ id: "default", name: "Istorija" });
      }
      res.json(list);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  app.post("/api/timeline/rename", (req, res) => {
    const { id, name } = req.body;
    if (!id || !name) {
      return res.status(400).json({ error: "Missing id or name" });
    }
    const targetId = id.trim();
    const targetName = name.trim();
    const filePath = import_path.default.join(projectsDir, `${targetId}.json`);
    if (import_fs.default.existsSync(filePath)) {
      try {
        const data = JSON.parse(import_fs.default.readFileSync(filePath, "utf8"));
        data.name = targetName;
        import_fs.default.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
        return res.json({ success: true, name: targetName });
      } catch (err) {
        return res.status(500).json({ error: err.message });
      }
    }
    return res.status(404).json({ error: "Project not found" });
  });
  app.post("/api/save_timeline", (req, res) => {
    const { items, groups } = req.body;
    if (!Array.isArray(items) || !Array.isArray(groups)) {
      return res.status(400).json({ error: "Format podataka nije ispravan." });
    }
    try {
      writeTimelineDataToLocalFile(items, groups);
      res.json({ success: true });
    } catch (err) {
      console.error("Gre\u0161ka pri upisivanju timeline podataka:", err);
      res.status(500).json({ error: err.message });
    }
  });
  app.post("/api/translate", async (req, res) => {
    const { text, targetLang } = req.body;
    if (!text || !targetLang) {
      return res.status(400).json({ error: "Missing text or targetLang." });
    }
    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.json({ translated: text });
      }
      const { GoogleGenAI } = await import("@google/genai");
      const ai = new GoogleGenAI({ apiKey });
      const prompt = `You are a professional translator. Translate the following text to ${targetLang === "en" ? "English" : "Serbian"}. Respond ONLY with the translation. Do not add any quotes, markdown formatting, explanation, or introductory text:
${text}`;
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: prompt
      });
      const translated = response.text?.trim() || text;
      res.json({ translated });
    } catch (err) {
      console.error("Translation API error:", err);
      res.status(500).json({ error: err.message || "Translation failed." });
    }
  });
  app.get("/api/translations/csv", (req, res) => {
    try {
      const keys = Object.keys(translations.en);
      const rows = ["key,English,Srpski"];
      for (const key of keys) {
        const enVal = String(translations.en[key] || "").replace(/"/g, '""').replace(/\r?\n/g, " ");
        const srVal = String(translations.sr[key] || "").replace(/"/g, '""').replace(/\r?\n/g, " ");
        rows.push(`"${key}","${enVal}","${srVal}"`);
      }
      res.setHeader("Content-Type", "text/csv; charset=utf-8");
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.send("\uFEFF" + rows.join("\r\n"));
    } catch (err) {
      res.status(500).send("Error generating CSV: " + err.message);
    }
  });
  const wolMapCache = /* @__PURE__ */ new Map();
  app.get("/api/wol_map", async (req, res) => {
    const id = req.query.id;
    if (!id || !/^\d+$/.test(id)) {
      return res.status(400).send("Invalid map id");
    }
    if (wolMapCache.has(id)) {
      const cached = wolMapCache.get(id);
      res.setHeader("Content-Type", cached.contentType);
      res.setHeader("Cache-Control", "public, max-age=86400");
      return res.send(cached.buffer);
    }
    try {
      const upstreamUrl = `https://wol.jw.org/en/wol/ml/r1/lp-e/${id}`;
      const upstream = await fetch(upstreamUrl, {
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
          "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
        }
      });
      if (!upstream.ok) {
        return res.status(upstream.status).send("Failed to fetch map from wol.jw.org");
      }
      const contentType = upstream.headers.get("content-type") || "image/jpeg";
      const arrayBuffer = await upstream.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      wolMapCache.set(id, { buffer, contentType });
      res.setHeader("Content-Type", contentType);
      res.setHeader("Cache-Control", "public, max-age=86400");
      return res.send(buffer);
    } catch (err) {
      console.error("Error fetching wol map:", err);
      res.status(500).send("Error fetching map");
    }
  });
  const previewCache = /* @__PURE__ */ new Map();
  app.get("/api/link_preview", async (req, res) => {
    const targetUrl = req.query.url;
    if (!targetUrl) {
      return res.status(400).json({ error: "No URL provided" });
    }
    if (previewCache.has(targetUrl)) {
      return res.json(previewCache.get(targetUrl));
    }
    try {
      const parsed = new URL(targetUrl);
      if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
        return res.status(400).json({ error: "Invalid protocol" });
      }
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2500);
      const response = await fetch(targetUrl, {
        signal: controller.signal,
        headers: {
          "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36"
        }
      });
      clearTimeout(timeoutId);
      if (!response.ok) {
        const fallback = {
          title: parsed.hostname,
          description: ""
        };
        previewCache.set(targetUrl, fallback);
        return res.json(fallback);
      }
      const contentType = response.headers.get("content-type") || "";
      if (!contentType.includes("text/html")) {
        return res.json({ title: parsed.hostname, description: targetUrl });
      }
      const html = await response.text();
      let title = "";
      const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
      if (titleMatch) {
        title = titleMatch[1].trim();
      }
      const ogTitleMatch = html.match(/<meta[^>]*property=["']og:title["'][^>]*content=["']([\s\S]*?)["']/i) || html.match(/<meta[^>]*content=["']([\s\S]*?)["'][^>]*property=["']og:title["']/i);
      if (ogTitleMatch) {
        title = ogTitleMatch[1].trim();
      }
      let description = "";
      const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([\s\S]*?)["']/i) || html.match(/<meta[^>]*content=["']([\s\S]*?)["'][^>]*name=["']description["']/i);
      if (descMatch) {
        description = descMatch[1].trim();
      }
      const ogDescMatch = html.match(/<meta[^>]*property=["']og:description["'][^>]*content=["']([\s\S]*?)["']/i) || html.match(/<meta[^>]*content=["']([\s\S]*?)["'][^>]*property=["']og:description["']/i);
      if (ogDescMatch) {
        description = ogDescMatch[1].trim();
      }
      let contentSnippet = "";
      const pMatches = html.match(/<p[^>]*>([\s\S]*?)<\/p>/gi);
      if (pMatches && pMatches.length > 0) {
        const textSnippets = pMatches.slice(0, 5).map((p) => {
          return p.replace(/<sup[^>]*>[\s\S]*?<\/sup>/gi, "").replace(/<span class="footnote"[^>]*>[\s\S]*?<\/span>/gi, "").replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
        }).filter((t) => t.length > 20 && !t.includes("cookie") && !t.includes("JavaScript"));
        if (textSnippets.length > 0) {
          contentSnippet = textSnippets.join("\n\n");
        }
      }
      let image = "";
      const ogImgMatch = html.match(/<meta[^>]*property=["']og:image["'][^>]*content=["']([\s\S]*?)["']/i) || html.match(/<meta[^>]*content=["']([\s\S]*?)["'][^>]*property=["']og:image["']/i);
      if (ogImgMatch) {
        image = ogImgMatch[1].trim();
      }
      const decodeEntities = (str) => {
        return str.replace(/&quot;/g, '"').replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#39;/g, "'").replace(/&nbsp;/g, " ");
      };
      title = decodeEntities(title);
      description = decodeEntities(description);
      contentSnippet = decodeEntities(contentSnippet);
      const generatedDescription = contentSnippet || description || title;
      const result = {
        title: title || parsed.hostname,
        description: description || "",
        contentSnippet: contentSnippet || void 0,
        generatedDescription: generatedDescription || void 0,
        image: image || void 0
      };
      previewCache.set(targetUrl, result);
      return res.json(result);
    } catch {
      try {
        const host = new URL(targetUrl).hostname;
        return res.json({
          title: host,
          description: ""
        });
      } catch {
        return res.json({
          title: "Link",
          description: ""
        });
      }
    }
  });
  const serveDynamicHtml = (req, res, id) => {
    const isProd = process.env.NODE_ENV === "production";
    const indexPath = isProd ? import_path.default.join(process.cwd(), "dist", "index.html") : import_path.default.join(process.cwd(), "index.html");
    if (!import_fs.default.existsSync(indexPath)) {
      return res.status(404).send("index.html not found");
    }
    let html = import_fs.default.readFileSync(indexPath, "utf8");
    let projectName = "Istorija";
    if (id && id !== "default") {
      const filePath = import_path.default.join(projectsDir, `${id}.json`);
      if (import_fs.default.existsSync(filePath)) {
        try {
          const data = JSON.parse(import_fs.default.readFileSync(filePath, "utf8"));
          if (data.name) {
            projectName = data.name;
          }
        } catch (_) {
        }
      }
    } else if (id === "default" || !id) {
      const filePath = import_path.default.join(projectsDir, "default.json");
      if (import_fs.default.existsSync(filePath)) {
        try {
          const data = JSON.parse(import_fs.default.readFileSync(filePath, "utf8"));
          if (data.name) {
            projectName = data.name;
          }
        } catch (_) {
        }
      }
    }
    const title = projectName ? `Hronika | ${projectName}` : "Hronika";
    const description = `Pogledajte interaktivnu vremensku liniju "${projectName}" na platformi Hronika.`;
    const host = req.get("host") || "ais-dev-bohipqj5tnne4qjac5kikk-304555909966.europe-west2.run.app";
    const absoluteLogoUrl = `https://${host}/favicon.png`;
    html = html.replace(/<title>[^<]*<\/title>/g, `<title>${title}</title>`).replace(/<meta property="og:title" content="[^"]*"\s*\/?>/g, `<meta property="og:title" content="${title}" />`).replace(/<meta property="og:description" content="[^"]*"\s*\/?>/g, `<meta property="og:description" content="${description}" />`).replace(/<meta name="description" content="[^"]*"\s*\/?>/g, `<meta name="description" content="${description}" />`);
    if (html.includes("og:image")) {
      html = html.replace(/<meta property="og:image" content="[^"]*"\s*\/?>/g, `<meta property="og:image" content="${absoluteLogoUrl}" />`);
    } else {
      html = html.replace("</head>", `  <meta property="og:image" content="${absoluteLogoUrl}" />
  </head>`);
    }
    res.setHeader("Content-Type", "text/html");
    res.send(html);
  };
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.get("/", (req, res) => {
      const id = req.query.id || "default";
      serveDynamicHtml(req, res, id);
    });
    app.get("/p/:id", (req, res) => {
      const id = req.params.id;
      serveDynamicHtml(req, res, id);
    });
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      const pathParts = req.path.split("/");
      if (pathParts.length >= 3 && pathParts[1] === "p") {
        serveDynamicHtml(req, res, pathParts[2]);
      } else {
        serveDynamicHtml(req, res, "default");
      }
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
