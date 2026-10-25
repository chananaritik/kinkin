(() => {
"use strict";
const translations = {
  en: {
    skip:"Skip to content",language:"LANGUAGE",whatsapp:"WhatsApp Enquiry",navHome:"Home",navProducts:"Product Catalogue",navAbout:"Our Story",navContact:"Contact & Location",
    heroOverline:"TRADE SUPPLIES · PAINTS · INDUSTRIAL HARDWARE",heroTitle:"Materials that<br><em>keep work moving.</em>",heroDesc:"A broad range of paints, wood-finishing materials, hardware and workshop essentials for trade, industrial and retail requirements.",browse:"Browse Product Catalogue",askPrice:"Ask for Price",heritageLine:"A name on the signboard since 1993",heroImageLabel:"PAINTS & TRADE MATERIALS",heroSideTag:"FARIDABAD · HARYANA",
    statSince:"Established",statPaintsBig:"Paints",statPaints:"Industrial, automotive & retail",statFinishesBig:"Finishes",statFinishes:"Wood coatings & furniture fittings",statHardwareBig:"Hardware",statHardware:"Workshop and industrial supplies",
    rangeEyebrow:"WHAT WE SUPPLY",rangeTitle:"Trade essentials,<br><em>all in one catalogue.</em>",viewAll:"View full catalogue",tilePaints:"Paints & Coatings",tilePaintsSub:"Industrial · Automotive · Retail",tileWood:"Wood Finishing",tileWoodSub:"Varnish · Melamine · Lacquer",tileHardware:"Hardware & Fittings",tileHardwareSub:"Handles · Hinges · Fasteners",tileTools:"Workshop & Industrial",tileToolsSub:"Cutting wheels · Angles · Racks",
    catalogueEyebrow:"PRODUCT RANGE",catalogueTitle:"Product <em>Catalogue</em>",catalogueDesc:"Explore the categories below. Ask us for current brands, sizes, stock and trade pricing.",catalogueCalloutTitle:"Need a specific item?",catalogueCalloutDesc:"Send a photo, product name or size on WhatsApp.",messageUs:"Message us ↗",searchLabel:"Search catalogue",searchPlaceholder:"Search varnish, primer, handles...",filterAll:"All Categories",filterPaints:"Paints & Primers",filterWood:"Wood Finishes",filterHardware:"Hardware",filterTools:"Tools & Industrial",filterGarden:"Garden & Agriculture",enquire:"Enquire on WhatsApp",
    pIndustrial:"Industrial Paints & Coatings",pIndustrialDesc:"Coatings and paint products for industrial, metal and maintenance requirements. Ask about suitable systems for your application.",pAuto:"Automotive Paints",pAutoDesc:"Paint and refinishing materials for automotive requirements. Share the application and finish you need to check options.",pRetail:"Retail & Decorative Paints",pRetailDesc:"Paints for household, renovation and retail needs. Confirm available brands, shades, pack sizes and pricing with the store.",pPrimer:"Primers & Undercoats",pPrimerDesc:"Primer options for different surfaces and finishing systems. Tell us whether the job involves metal, wood, walls or another surface.",
    pVarnish:"Wood Varnish",pVarnishDesc:"Clear and protective finishing options for woodwork. Ask about finish type, application method and compatibility.",pMelamine:"Melamine & Hardener",pMelamineDesc:"Melamine finishing products and related hardeners used in wood finishing. Confirm system compatibility before purchase.",pLacquer:"Lacquer & Top Coats",pLacquerDesc:"Lacquer and top-coat options for carpentry and wood finishing work, subject to available stock.",pWoodOther:"Wood Stains, Sealers & Thinners",pWoodOtherDesc:"Related preparation and finishing materials for carpenters and polish workers. Ask for product compatibility and availability.",
    pHandles:"Handles, Knobs & Pulls",pHandlesDesc:"Handles and fittings used in cabinets, drawers, wardrobes and furniture manufacturing—not finished furniture.",pHinges:"Hinges, Screws & Fasteners",pHingesDesc:"Assembly and fitting hardware used by carpenters, fabricators and maintenance teams. Enquire with dimensions or a reference photo.",pChannels:"Channels, Slides & Fittings",pChannelsDesc:"Hardware components used in drawer and cabinet assembly. Share the size and type needed to check availability.",pCutting:"Cutting & Grinding Wheels",pCuttingDesc:"Cutting wheels and related abrasive consumables for workshop and fabrication work. Confirm diameter, thickness and machine compatibility.",pRacks:"Racks & Shelving",pRacksDesc:"Storage racks and shelving options. Share approximate dimensions and intended use when enquiring.",pAngles:"Angles & Metal Sections",pAnglesDesc:"Metal angles and sections for rack assembly and other practical applications. Confirm lengths and dimensions with the store.",pAccessories:"Painting & Workshop Accessories",pAccessoriesDesc:"Ask about brushes, rollers, abrasives and other accessories required for painting, polishing and workshop work.",pPots:"Flower Pots & Planters",pPotsDesc:"Flower pots and planters. Contact the store to check available sizes, styles and quantities.",pAgri:"Seeds & Urea",pAgriDesc:"Additional gardening and agricultural supplies. Ask the store about current availability and pack sizes.",
    noResults:"No matching products",noResultsDesc:"Try a different search term or choose All Categories.",catalogueDisclaimer:"This catalogue is a guide to product categories, not live inventory. Product brands, specifications, prices and availability must be confirmed with the store. Images are illustrative product references from public websites and may not represent current stock.",
    storyEyebrow:"OUR HISTORY",storyTitle:"A trading name<br><em>since 1993.</em>",storyLead:"Kin Kin Paint & Hardware Store has been serving paint and hardware needs in Faridabad since 1993, as reflected in the store's own logo.",logoCaption:"The Kin Kin identity",storyTodayEyebrow:"THE BUSINESS TODAY",storyTodayTitle:"Built around materials,<br><em>not finished furniture.</em>",storyTodayP1:"Kin Kin serves customers looking for paint and coating products, wood-finishing materials, furniture-making fittings, workshop consumables and industrial hardware. The range includes varnish, melamine, lacquer, primers, handles, cutting wheels, racks, shelves and metal angles, along with selected garden and agricultural items.",storyTodayP2:"The store is based in NIT-3, Faridabad, Haryana. Customers are welcome to enquire about product availability, sizes, specifications and pricing directly.",headLabel:"BUSINESS HEAD",headCaption:"Kin Kin Paint & Hardware Store",timelineStart:"The name begins",timelineStartDesc:"The supplied Kin Kin logo identifies the business as “Since 1993”.",timelineNowYear:"TODAY",timelineNow:"A wider range of supplies",timelineNowDesc:"Paints, wood finishes, hardware and workshop materials for varied customer requirements.",archiveTitle:"Help us complete the archive",archiveDesc:"Historical store photographs were not available in the supplied materials. If you share older shop photos, signboards or family business milestones, this timeline can be expanded with a genuine visual history.",
    contactEyebrow:"VISIT OR CONTACT US",contactTitle:"Let's talk <em>trade.</em>",contactDesc:"For product enquiries, availability and pricing, get in touch with the store.",addressLabel:"STORE ADDRESS",directions:"Open directions ↗",phoneLabel:"CALL / WHATSAPP",chatWhatsApp:"Chat on WhatsApp ↗",hoursLabel:"BUSINESS HOURS",hoursDesc:"Please contact the store to confirm current opening hours.",startEnquiry:"Start a product enquiry",openMaps:"Find us on Google Maps",footerLine:"Paints. Finishes. Hardware. Trade supplies.",footerLocation:"NIT-3, Faridabad, Haryana",footerContact:"Contact the store",footerDisclaimer:"Product availability and pricing subject to confirmation."
  },
  hi: {
    skip:"मुख्य सामग्री पर जाएँ",language:"भाषा",whatsapp:"व्हाट्सऐप पर पूछें",navHome:"होम",navProducts:"उत्पाद सूची",navAbout:"हमारी कहानी",navContact:"संपर्क और पता",
    heroOverline:"ट्रेड सप्लाई · पेंट · औद्योगिक हार्डवेयर",heroTitle:"काम को आगे बढ़ाने वाली<br><em>ज़रूरी सामग्री।</em>",heroDesc:"व्यापार, उद्योग और खुदरा ज़रूरतों के लिए पेंट, लकड़ी की फिनिशिंग सामग्री, हार्डवेयर और वर्कशॉप की ज़रूरी वस्तुएँ।",browse:"उत्पाद सूची देखें",askPrice:"कीमत पूछें",heritageLine:"1993 से यह नाम",heroImageLabel:"पेंट और ट्रेड सामग्री",heroSideTag:"फरीदाबाद · हरियाणा",
    statSince:"स्थापना",statPaintsBig:"पेंट",statPaints:"औद्योगिक, ऑटोमोबाइल और रिटेल",statFinishesBig:"फिनिशिंग",statFinishes:"वुड कोटिंग और फिटिंग",statHardwareBig:"हार्डवेयर",statHardware:"वर्कशॉप और औद्योगिक सामग्री",
    rangeEyebrow:"हम क्या उपलब्ध कराते हैं",rangeTitle:"व्यापार की ज़रूरतें,<br><em>एक ही सूची में।</em>",viewAll:"पूरी उत्पाद सूची देखें",tilePaints:"पेंट और कोटिंग",tilePaintsSub:"औद्योगिक · ऑटोमोबाइल · रिटेल",tileWood:"लकड़ी की फिनिशिंग",tileWoodSub:"वार्निश · मेलामाइन · लैकर",tileHardware:"हार्डवेयर और फिटिंग",tileHardwareSub:"हैंडल · कब्ज़े · फास्टनर",tileTools:"वर्कशॉप और औद्योगिक",tileToolsSub:"कटिंग व्हील · एंगल · रैक",
    catalogueEyebrow:"उत्पाद श्रेणियाँ",catalogueTitle:"उत्पाद <em>सूची</em>",catalogueDesc:"नीचे दी गई श्रेणियाँ देखें। उपलब्ध ब्रांड, आकार, स्टॉक और व्यापारिक कीमत के लिए पूछें।",catalogueCalloutTitle:"कोई खास सामान चाहिए?",catalogueCalloutDesc:"व्हाट्सऐप पर फोटो, उत्पाद का नाम या आकार भेजें।",messageUs:"मैसेज करें ↗",searchLabel:"उत्पाद खोजें",searchPlaceholder:"वार्निश, प्राइमर, हैंडल खोजें...",filterAll:"सभी श्रेणियाँ",filterPaints:"पेंट और प्राइमर",filterWood:"वुड फिनिशिंग",filterHardware:"हार्डवेयर",filterTools:"औज़ार और औद्योगिक",filterGarden:"बागवानी और कृषि",enquire:"व्हाट्सऐप पर पूछें",
    pIndustrial:"औद्योगिक पेंट और कोटिंग",pIndustrialDesc:"औद्योगिक, धातु और रखरखाव की ज़रूरतों के लिए पेंट व कोटिंग। अपने काम के अनुसार विकल्प पूछें।",pAuto:"ऑटोमोबाइल पेंट",pAutoDesc:"वाहनों की पेंटिंग और रीफिनिशिंग सामग्री। सही विकल्प जानने के लिए उपयोग और फिनिश बताएं।",pRetail:"रिटेल और सजावटी पेंट",pRetailDesc:"घर, नवीनीकरण और खुदरा उपयोग के पेंट। उपलब्ध ब्रांड, शेड, पैक और कीमत की पुष्टि करें।",pPrimer:"प्राइमर और अंडरकोट",pPrimerDesc:"अलग-अलग सतहों के लिए प्राइमर विकल्प। बताएं कि सतह धातु, लकड़ी, दीवार या कोई अन्य है।",
    pVarnish:"वुड वार्निश",pVarnishDesc:"लकड़ी के काम के लिए पारदर्शी और सुरक्षा देने वाली फिनिश। फिनिश का प्रकार और उपयोग पूछें।",pMelamine:"मेलामाइन और हार्डनर",pMelamineDesc:"लकड़ी की फिनिशिंग में उपयोग होने वाले मेलामाइन उत्पाद और हार्डनर। खरीदने से पहले अनुकूलता की पुष्टि करें।",pLacquer:"लैकर और टॉप कोट",pLacquerDesc:"बढ़ईगीरी और लकड़ी की फिनिशिंग के लिए लैकर व टॉप कोट, उपलब्ध स्टॉक के अनुसार।",pWoodOther:"वुड स्टेन, सीलर और थिनर",pWoodOtherDesc:"बढ़ई और पॉलिश के काम के लिए तैयारी और फिनिशिंग सामग्री। उपलब्धता और अनुकूलता पूछें।",
    pHandles:"हैंडल, नॉब और पुल",pHandlesDesc:"कैबिनेट, दराज़, अलमारी और फर्नीचर बनाने में लगने वाली फिटिंग—हम तैयार फर्नीचर नहीं बेचते।",pHinges:"कब्ज़े, स्क्रू और फास्टनर",pHingesDesc:"बढ़ई, फैब्रिकेटर और रखरखाव के काम में उपयोग होने वाला हार्डवेयर। आकार या फोटो के साथ पूछें।",pChannels:"चैनल, स्लाइड और फिटिंग",pChannelsDesc:"दराज़ और कैबिनेट असेंबली में उपयोग होने वाले हार्डवेयर। आकार और प्रकार बताकर उपलब्धता पूछें।",pCutting:"कटिंग और ग्राइंडिंग व्हील",pCuttingDesc:"वर्कशॉप और फैब्रिकेशन के लिए कटिंग व्हील व एब्रेसिव सामग्री। व्यास, मोटाई और मशीन की अनुकूलता जाँचें।",pRacks:"रैक और शेल्फ",pRacksDesc:"स्टोरेज रैक और शेल्फ के विकल्प। पूछताछ करते समय अनुमानित माप और उपयोग बताएं।",pAngles:"एंगल और धातु सेक्शन",pAnglesDesc:"रैक असेंबली और अन्य उपयोगों के लिए धातु एंगल व सेक्शन। लंबाई और माप की पुष्टि करें।",pAccessories:"पेंटिंग और वर्कशॉप एक्सेसरीज़",pAccessoriesDesc:"पेंटिंग, पॉलिश और वर्कशॉप के लिए ब्रश, रोलर, एब्रेसिव और अन्य एक्सेसरीज़ की उपलब्धता पूछें।",pPots:"फूलदान और प्लांटर",pPotsDesc:"बागवानी के लिए फूलदान और प्लांटर। उपलब्ध आकार, डिज़ाइन और मात्रा पूछें।",pAgri:"बीज और यूरिया",pAgriDesc:"बागवानी और कृषि की अतिरिक्त सामग्री। उपलब्धता और पैक के आकार के लिए पूछें।",
    noResults:"कोई मेल खाता उत्पाद नहीं",noResultsDesc:"दूसरा शब्द खोजें या सभी श्रेणियाँ चुनें।",catalogueDisclaimer:"यह सूची उत्पाद श्रेणियों की जानकारी देती है, लाइव स्टॉक नहीं। ब्रांड, विशेषताएँ, कीमत और उपलब्धता की पुष्टि स्टोर से करें। तस्वीरें सार्वजनिक वेबसाइटों से लिए गए उदाहरण हैं और वर्तमान स्टॉक को दर्शाना ज़रूरी नहीं है।",
    storyEyebrow:"हमारा इतिहास",storyTitle:"1993 से<br><em>एक भरोसेमंद नाम।</em>",storyLead:"Kin Kin Paint & Hardware Store 1993 से फरीदाबाद में पेंट और हार्डवेयर की ज़रूरतों को पूरा कर रहा है—जैसा कि स्टोर के अपने लोगो पर लिखा है।",logoCaption:"Kin Kin की पहचान",storyTodayEyebrow:"आज का व्यवसाय",storyTodayTitle:"सामग्री पर हमारा ध्यान,<br><em>तैयार फर्नीचर पर नहीं।</em>",storyTodayP1:"Kin Kin पेंट और कोटिंग, लकड़ी की फिनिशिंग सामग्री, फर्नीचर निर्माण की फिटिंग, वर्कशॉप उपभोग्य सामग्री और औद्योगिक हार्डवेयर की ज़रूरतों के लिए उत्पाद उपलब्ध कराता है। इसमें वार्निश, मेलामाइन, लैकर, प्राइमर, हैंडल, कटिंग व्हील, रैक, शेल्फ और धातु एंगल के साथ चुनिंदा बागवानी व कृषि सामग्री शामिल हैं।",storyTodayP2:"स्टोर NIT-3, फरीदाबाद, हरियाणा में स्थित है। उपलब्धता, आकार, विशेषताओं और कीमत के लिए सीधे पूछताछ करें।",headLabel:"व्यवसाय प्रमुख",headCaption:"Kin Kin Paint & Hardware Store",timelineStart:"शुरुआत",timelineStartDesc:"दिए गए Kin Kin लोगो पर “Since 1993” लिखा है।",timelineNowYear:"आज",timelineNow:"सामग्री की विस्तृत रेंज",timelineNowDesc:"अलग-अलग ग्राहकों की ज़रूरतों के लिए पेंट, वुड फिनिश, हार्डवेयर और वर्कशॉप सामग्री।",archiveTitle:"पुरानी यादों का इतिहास जोड़ें",archiveDesc:"अभी उपलब्ध सामग्री में पुराने स्टोर की तस्वीरें नहीं थीं। यदि आप पुरानी दुकान की फोटो, साइनबोर्ड या व्यवसाय से जुड़े महत्वपूर्ण पड़ाव साझा करें, तो इस टाइमलाइन में वास्तविक इतिहास जोड़ा जा सकता है।",
    contactEyebrow:"दुकान आएँ या संपर्क करें",contactTitle:"व्यापार की बात <em>करें।</em>",contactDesc:"उत्पाद, उपलब्धता और कीमत के लिए स्टोर से संपर्क करें।",addressLabel:"दुकान का पता",directions:"रास्ता देखें ↗",phoneLabel:"कॉल / व्हाट्सऐप",chatWhatsApp:"व्हाट्सऐप पर बात करें ↗",hoursLabel:"दुकान का समय",hoursDesc:"आज के खुलने के समय की पुष्टि के लिए स्टोर से संपर्क करें।",startEnquiry:"उत्पाद के बारे में पूछें",openMaps:"Google Maps पर देखें",footerLine:"पेंट। फिनिशिंग। हार्डवेयर। व्यापारिक सामग्री।",footerLocation:"NIT-3, फरीदाबाद, हरियाणा",footerContact:"स्टोर से संपर्क करें",footerDisclaimer:"उत्पाद की उपलब्धता और कीमत की पुष्टि आवश्यक है।"
  }
};

let currentLang = "en";
const langButtons = [...document.querySelectorAll(".lang-btn")];
function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang === "hi" ? "hi" : "en";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    const value = translations[lang][key];
    if (value !== undefined) el.innerHTML = value;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (translations[lang][key] !== undefined) el.placeholder = translations[lang][key];
  });
  langButtons.forEach(btn => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", String(active));
  });
  updateCatalogue();
}
langButtons.forEach(btn => btn.addEventListener("click", () => applyLanguage(btn.dataset.lang)));

const tabs = [...document.querySelectorAll(".tab-btn")];
const panels = [...document.querySelectorAll(".tab-panel")];
function openTab(name) {
  tabs.forEach(tab => {
    const active = tab.dataset.tab === name;
    tab.classList.toggle("is-active", active);
    tab.setAttribute("aria-selected", String(active));
    tab.tabIndex = active ? 0 : -1;
  });
  panels.forEach(panel => {
    const active = panel.dataset.panel === name;
    panel.classList.toggle("is-visible", active);
    panel.hidden = !active;
  });
  const panel = document.querySelector(`[data-panel="${name}"]`);
  if (panel) panel.scrollIntoView({behavior:"smooth", block:"start"});
  history.replaceState(null, "", `#${name}`);
}
tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => openTab(tab.dataset.tab));
  tab.addEventListener("keydown", event => {
    if (!["ArrowRight","ArrowLeft","Home","End"].includes(event.key)) return;
    event.preventDefault();
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
    if (event.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = tabs.length - 1;
    tabs[next].focus();
    openTab(tabs[next].dataset.tab);
  });
});
document.querySelectorAll("[data-go-tab]").forEach(btn => btn.addEventListener("click", () => {
  openTab(btn.dataset.goTab);
  const category = btn.dataset.jumpCategory;
  if (category) {
    activeFilter = category;
    setFilterButtons();
    updateCatalogue();
  }
}));
const search = document.querySelector("#catalogue-search");
const filterButtons = [...document.querySelectorAll(".filter-btn")];
const cards = [...document.querySelectorAll(".product-card")];
const count = document.querySelector("#catalogue-count");
const noResults = document.querySelector("#no-results");
let activeFilter = "all";
function setFilterButtons() {
  filterButtons.forEach(btn => {
    const active = btn.dataset.filter === activeFilter;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", String(active));
  });
}
function updateCatalogue() {
  const query = (search?.value || "").trim().toLowerCase();
  let shown = 0;
  cards.forEach(card => {
    const categoryOk = activeFilter === "all" || card.dataset.category === activeFilter;
    const text = `${card.dataset.search} ${card.textContent}`.toLowerCase();
    const searchOk = !query || text.includes(query);
    const visible = categoryOk && searchOk;
    card.hidden = !visible;
    if (visible) shown++;
  });
  if (count) count.textContent = currentLang === "hi" ? `${shown} में से ${cards.length} श्रेणियाँ दिखाई जा रही हैं` : `Showing ${shown} of ${cards.length} catalogue items`;
  if (noResults) noResults.hidden = shown > 0;
}
filterButtons.forEach(btn => btn.addEventListener("click", () => {
  activeFilter = btn.dataset.filter;
  setFilterButtons();
  updateCatalogue();
}));
if (search) search.addEventListener("input", updateCatalogue);
document.querySelectorAll(".enquire-product").forEach(btn => btn.addEventListener("click", () => {
  const product = btn.dataset.product || "a product";
  const message = currentLang === "hi"
    ? `नमस्ते Kin Kin Paint & Hardware Store, मुझे ${product} के बारे में जानकारी चाहिए। कृपया उपलब्धता और कीमत बताएं।`
    : `Hello Kin Kin Paint & Hardware Store, I'd like to enquire about ${product}. Please share availability and pricing.`;
  window.open(`https://wa.me/919999505851?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
}));
const year = document.querySelector("#current-year");
if (year) year.textContent = new Date().getFullYear();
const hash = location.hash.replace("#","");
if (["home","products","about","contact"].includes(hash)) openTab(hash);
else { tabs.forEach((t,i)=>t.tabIndex=i===0?0:-1); }
})();