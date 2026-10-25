(() => {
"use strict";
const translations = {
  en: {
    skip:"Skip to content",catLocks:"Locks",catHinges:"Hinges",catSlotted:"Slotted Angles, Cable Trays & Shelves",catFabrication:"Fabrication Items",catPaints:"Paints",catWood:"Wood Coating",catRubber:"Rubber, PVC & Nylon",catGarden:"Flower Pots & Seeds",catPutty:"Whitewash Items",catDoorKitchen:"Door & Kitchen Fittings",
    descLocks:"Industrial and furniture locks for cabinets, drawers, doors and other applications. Share a photo or required lock type when enquiring.",descHinges:"Hinges for furniture, cabinets, doors and general fitting needs. Confirm dimensions, finish and opening style with the store.",descSlotted:"Slotted angles, cable trays, shelves and related metal storage or support components. Ask about sizes, lengths and configurations.",descFabrication:"Consumables for fabrication and welding work, including MIG wire and welding rods. Share the welding process and specification needed.",descPaints:"Paints for industrial, automotive and domestic applications. Ask about the required surface, finish, shade, brand and pack size.",descWood:"Wood-coating materials for finishing and polishing work, including lacquer, melamine, varnish and related products. Check compatibility and availability before purchase.",descRubber:"Rubber, PVC and nylon components such as adjusters, shoes, buffers, bullets and caps for furniture and metal covering applications.",descGarden:"Flower pots, planters and seeds for gardening needs. Ask about available styles, sizes and seed varieties.",descPutty:"Putty and related items used for wall preparation and whitewash work. Confirm the intended surface and pack size with the store.",descDoorKitchen:"Fittings such as channels, drawer slides, door closers, handles and kitchen hardware for installation and repair work.",
language:"LANGUAGE",whatsapp:"WhatsApp Enquiry",navHome:"Home",navProducts:"Product Catalogue",navAbout:"Our Story",navContact:"Contact & Location",
    heroOverline:"TRADE SUPPLIES · PAINTS · INDUSTRIAL HARDWARE",heroTitle:"Materials that<br><em>keep work moving.</em>",heroDesc:"A broad range of paints, wood-finishing materials, hardware and workshop essentials for trade, industrial and retail requirements.",browse:"Browse Product Catalogue",askPrice:"Ask for Price",heritageLine:"A trusted trade supplier in Faridabad since 1991",heroImageLabel:"INDUSTRIAL HARDWARE & TRADE SUPPLIES",heroSideTag:"FARIDABAD · HARYANA",
    statSince:"Established",statPaintsBig:"Paints",statPaints:"Industrial, automotive & retail",statFinishesBig:"Finishes",statFinishes:"Wood coatings & furniture fittings",statHardwareBig:"Hardware",statHardware:"Workshop and industrial supplies",
    rangeEyebrow:"WHAT WE SUPPLY",rangeTitle:"Trade essentials,<br><em>all in one catalogue.</em>",viewAll:"View full catalogue",tilePaints:"Paints & Coatings",tilePaintsSub:"Industrial · Automotive · Retail",tileWood:"Wood Finishing",tileWoodSub:"Varnish · Melamine · Lacquer",tileHardware:"Hardware & Fittings",tileHardwareSub:"Handles · Hinges · Fasteners",tileTools:"Workshop & Industrial",tileToolsSub:"Cutting wheels · Angles · Racks",
    catalogueEyebrow:"PRODUCT RANGE",catalogueTitle:"Product <em>Catalogue</em>",catalogueDesc:"Explore our ten product categories. Ask us for current brands, sizes, stock and trade pricing.",catalogueCalloutTitle:"Need a specific item?",catalogueCalloutDesc:"Send a photo, product name or size on WhatsApp.",messageUs:"Message us ↗",searchLabel:"Search catalogue",searchPlaceholder:"Search varnish, primer, handles...",filterAll:"All Categories",filterPaints:"Paints & Primers",filterWood:"Wood Finishes",filterHardware:"Hardware",filterTools:"Tools & Industrial",filterGarden:"Garden & Agriculture",enquire:"Enquire on WhatsApp",
    pIndustrial:"Industrial Paints & Coatings",pIndustrialDesc:"Coatings and paint products for industrial, metal and maintenance requirements. Ask about suitable systems for your application.",pAuto:"Automotive Paints",pAutoDesc:"Paint and refinishing materials for automotive requirements. Share the application and finish you need to check options.",pRetail:"Retail & Decorative Paints",pRetailDesc:"Paints for household, renovation and retail needs. Confirm available brands, shades, pack sizes and pricing with the store.",pPrimer:"Primers & Undercoats",pPrimerDesc:"Primer options for different surfaces and finishing systems. Tell us whether the job involves metal, wood, walls or another surface.",
    pVarnish:"Wood Varnish",pVarnishDesc:"Clear and protective finishing options for woodwork. Ask about finish type, application method and compatibility.",pMelamine:"Melamine & Hardener",pMelamineDesc:"Melamine finishing products and related hardeners used in wood finishing. Confirm system compatibility before purchase.",pLacquer:"Lacquer & Top Coats",pLacquerDesc:"Lacquer and top-coat options for carpentry and wood finishing work, subject to available stock.",pWoodOther:"Wood Stains, Sealers & Thinners",pWoodOtherDesc:"Related preparation and finishing materials for carpenters and polish workers. Ask for product compatibility and availability.",
    pHandles:"Handles, Knobs & Pulls",pHandlesDesc:"Handles and fittings used in cabinets, drawers, wardrobes and furniture manufacturing—not finished furniture.",pHinges:"Hinges, Screws & Fasteners",pHingesDesc:"Assembly and fitting hardware used by carpenters, fabricators and maintenance teams. Enquire with dimensions or a reference photo.",pChannels:"Channels, Slides & Fittings",pChannelsDesc:"Hardware components used in drawer and cabinet assembly. Share the size and type needed to check availability.",pCutting:"Cutting & Grinding Wheels",pCuttingDesc:"Cutting wheels and related abrasive consumables for workshop and fabrication work. Confirm diameter, thickness and machine compatibility.",pRacks:"Racks & Shelving",pRacksDesc:"Storage racks and shelving options. Share approximate dimensions and intended use when enquiring.",pAngles:"Angles & Metal Sections",pAnglesDesc:"Metal angles and sections for rack assembly and other practical applications. Confirm lengths and dimensions with the store.",pAccessories:"Painting & Workshop Accessories",pAccessoriesDesc:"Ask about brushes, rollers, abrasives and other accessories required for painting, polishing and workshop work.",pPots:"Flower Pots & Planters",pPotsDesc:"Flower pots and planters. Contact the store to check available sizes, styles and quantities.",pAgri:"Seeds & Urea",pAgriDesc:"Additional gardening and agricultural supplies. Ask the store about current availability and pack sizes.",
    noResults:"No matching products",noResultsDesc:"Try a different search term or choose All Categories.",catalogueDisclaimer:"The catalogue is organised into the ten product categories listed by the store. Catalogue product images are illustrative, not a guarantee of current stock or exact brand/model. Please confirm sizes, specifications, brands, pricing and availability with Kin Kin.",
    storyEyebrow:"OUR HISTORY",storyTitle:"Rooted in Faridabad<br><em>since 1991.</em>",storyLead:"What began in a small rented home has grown into a trusted local source for paints, hardware and trade essentials—built over decades through customer relationships and a steadily expanding range.",logoCaption:"The Kin Kin identity",storyTodayEyebrow:"THE BUSINESS TODAY",storyTodayTitle:"Built around materials,<br><em>not finished furniture.</em>",storyTodayP1:"Kin Kin serves customers looking for paint and coating products, wood-finishing materials, furniture-making fittings, workshop consumables and industrial hardware. The range includes varnish, melamine, lacquer, primers, handles, cutting wheels, racks, shelves and metal angles, along with selected garden and agricultural items.",storyTodayP2:"The store is based in NIT-3, Faridabad, Haryana. Customers are welcome to enquire about product availability, sizes, specifications and pricing directly.",headLabel:"BUSINESS HEAD",headCaption:"Kin Kin Paint & Hardware Store",timelineEyebrow:"THE MILESTONES",timelineHeading:"Growing with<br><em>our customers.</em>",milestone1991Title:"A humble beginning",milestone1991Desc:"Started from a storeroom in a rented one-bedroom home on a freehold property.",milestone1993Title:"Moved into our own shop",milestone1993Desc:"Moved into an owned shop and formally registered the business.",milestone1994Title:"A dependable source for locks",milestone1994Desc:"Customers increasingly came to regard the store as one of Faridabad’s dependable wholesale sources for locks.",milestone1995Title:"Paints added to the range",milestone1995Desc:"Expanded beyond hardware into paints.",milestone1996Title:"More industrial essentials",milestone1996Desc:"Added slotted angles and broadened the product range further.",milestone1999Title:"Furniture hardware expands",milestone1999Desc:"Added more items for furniture making and fitting.",milestone2001Title:"Fabrication supplies",milestone2001Desc:"Expanded into fabrication products and workshop consumables.",milestone2021Title:"Agriculture and gardening",milestone2021Desc:"Extended the range to include agricultural and gardening items.",archiveTitle:"Our story, in pictures",archiveDesc:"A few photographs of the store and its products accompany this timeline of the business’s growth across three decades.",galleryLabel:"Photographs of Kin Kin store and products",gallerySign:"Our store signboard",galleryFront:"Storefront and shelving",galleryRack:"Racks and shelving",galleryFinish:"Wood finishes and shop products",galleryGarden:"Planters and garden items",
    contactEyebrow:"VISIT OR CONTACT US",contactTitle:"Let's talk <em>trade.</em>",contactDesc:"For product enquiries, availability and pricing, get in touch with the store.",addressLabel:"STORE ADDRESS",directions:"Open directions ↗",phoneLabel:"CALL / WHATSAPP",chatWhatsApp:"Chat on WhatsApp ↗",hoursLabel:"BUSINESS HOURS",hoursWeekdays:"Monday – Saturday",hoursSunday:"Sunday",emailLabel:"EMAIL",startEnquiry:"Start a product enquiry",openMaps:"Find us on Google Maps",footerLine:"Paints. Finishes. Hardware. Trade supplies.",footerLocation:"NIT-3, Faridabad, Haryana",footerContact:"Contact the store",footerDisclaimer:"Product availability and pricing subject to confirmation."
  },
  hi: {
    skip:"मुख्य सामग्री पर जाएँ",catLocks:"ताले",catHinges:"कब्ज़े",catSlotted:"स्लॉटेड एंगल, केबल ट्रे और शेल्फ",catFabrication:"फैब्रिकेशन सामग्री",catPaints:"पेंट",catWood:"वुड कोटिंग",catRubber:"रबर, PVC और नायलॉन",catGarden:"फूलदान और बीज",catPutty:"सफेदी की सामग्री",catDoorKitchen:"दरवाज़े और किचन फिटिंग",
    descLocks:"कैबिनेट, दराज़, दरवाज़े और अन्य उपयोगों के लिए औद्योगिक और फर्नीचर लॉक। जानकारी के लिए फोटो या लॉक का प्रकार भेजें।",descHinges:"फर्नीचर, कैबिनेट, दरवाज़ों और अन्य फिटिंग के लिए कब्ज़े। आकार और फिनिश की पुष्टि करें।",descSlotted:"स्लॉटेड एंगल, केबल ट्रे, शेल्फ और धातु के स्टोरेज या सपोर्ट पार्ट्स। आकार और लंबाई पूछें।",descFabrication:"फैब्रिकेशन और वेल्डिंग के लिए MIG वायर और वेल्डिंग रॉड सहित सामग्री। आवश्यक स्पेसिफिकेशन बताएं।",descPaints:"औद्योगिक, ऑटोमोबाइल और घरेलू उपयोग के लिए पेंट। सतह, फिनिश, शेड और पैक साइज बताएं।",descWood:"लकड़ी की फिनिशिंग और पॉलिश के लिए लैकर, मेलामाइन, वार्निश और संबंधित सामग्री। उपलब्धता पूछें।",descRubber:"फर्नीचर और धातु कवरिंग के लिए रबर, PVC और नायलॉन के एडजस्टर, शूज़, बफर, बुलेट और कैप।",descGarden:"बागवानी के लिए फूलदान, प्लांटर और बीज। उपलब्ध आकार और किस्में पूछें।",descPutty:"दीवार की तैयारी और सफेदी के लिए पुट्टी और संबंधित सामग्री। सतह और पैक साइज बताएं।",descDoorKitchen:"इंस्टॉलेशन और मरम्मत के लिए चैनल, ड्रॉअर स्लाइड, डोर क्लोज़र, हैंडल और किचन फिटिंग।",
language:"भाषा",whatsapp:"व्हाट्सऐप पर पूछें",navHome:"होम",navProducts:"उत्पाद सूची",navAbout:"हमारी कहानी",navContact:"संपर्क और पता",
    heroOverline:"ट्रेड सप्लाई · पेंट · औद्योगिक हार्डवेयर",heroTitle:"काम को आगे बढ़ाने वाली<br><em>ज़रूरी सामग्री।</em>",heroDesc:"व्यापार, उद्योग और खुदरा ज़रूरतों के लिए पेंट, लकड़ी की फिनिशिंग सामग्री, हार्डवेयर और वर्कशॉप की ज़रूरी वस्तुएँ।",browse:"उत्पाद सूची देखें",askPrice:"कीमत पूछें",heritageLine:"1991 से फरीदाबाद में भरोसेमंद व्यापारिक आपूर्तिकर्ता",heroImageLabel:"औद्योगिक हार्डवेयर और ट्रेड सप्लाई",heroSideTag:"फरीदाबाद · हरियाणा",
    statSince:"स्थापना",statPaintsBig:"पेंट",statPaints:"औद्योगिक, ऑटोमोबाइल और रिटेल",statFinishesBig:"फिनिशिंग",statFinishes:"वुड कोटिंग और फिटिंग",statHardwareBig:"हार्डवेयर",statHardware:"वर्कशॉप और औद्योगिक सामग्री",
    rangeEyebrow:"हम क्या उपलब्ध कराते हैं",rangeTitle:"व्यापार की ज़रूरतें,<br><em>एक ही सूची में।</em>",viewAll:"पूरी उत्पाद सूची देखें",tilePaints:"पेंट और कोटिंग",tilePaintsSub:"औद्योगिक · ऑटोमोबाइल · रिटेल",tileWood:"लकड़ी की फिनिशिंग",tileWoodSub:"वार्निश · मेलामाइन · लैकर",tileHardware:"हार्डवेयर और फिटिंग",tileHardwareSub:"हैंडल · कब्ज़े · फास्टनर",tileTools:"वर्कशॉप और औद्योगिक",tileToolsSub:"कटिंग व्हील · एंगल · रैक",
    catalogueEyebrow:"उत्पाद श्रेणियाँ",catalogueTitle:"उत्पाद <em>सूची</em>",catalogueDesc:"हमारी दस उत्पाद श्रेणियाँ देखें। उपलब्ध ब्रांड, आकार, स्टॉक और व्यापारिक कीमत के लिए पूछें।",catalogueCalloutTitle:"कोई खास सामान चाहिए?",catalogueCalloutDesc:"व्हाट्सऐप पर फोटो, उत्पाद का नाम या आकार भेजें।",messageUs:"मैसेज करें ↗",searchLabel:"उत्पाद खोजें",searchPlaceholder:"वार्निश, प्राइमर, हैंडल खोजें...",filterAll:"सभी श्रेणियाँ",filterPaints:"पेंट और प्राइमर",filterWood:"वुड फिनिशिंग",filterHardware:"हार्डवेयर",filterTools:"औज़ार और औद्योगिक",filterGarden:"बागवानी और कृषि",enquire:"व्हाट्सऐप पर पूछें",
    pIndustrial:"औद्योगिक पेंट और कोटिंग",pIndustrialDesc:"औद्योगिक, धातु और रखरखाव की ज़रूरतों के लिए पेंट व कोटिंग। अपने काम के अनुसार विकल्प पूछें।",pAuto:"ऑटोमोबाइल पेंट",pAutoDesc:"वाहनों की पेंटिंग और रीफिनिशिंग सामग्री। सही विकल्प जानने के लिए उपयोग और फिनिश बताएं।",pRetail:"रिटेल और सजावटी पेंट",pRetailDesc:"घर, नवीनीकरण और खुदरा उपयोग के पेंट। उपलब्ध ब्रांड, शेड, पैक और कीमत की पुष्टि करें।",pPrimer:"प्राइमर और अंडरकोट",pPrimerDesc:"अलग-अलग सतहों के लिए प्राइमर विकल्प। बताएं कि सतह धातु, लकड़ी, दीवार या कोई अन्य है।",
    pVarnish:"वुड वार्निश",pVarnishDesc:"लकड़ी के काम के लिए पारदर्शी और सुरक्षा देने वाली फिनिश। फिनिश का प्रकार और उपयोग पूछें।",pMelamine:"मेलामाइन और हार्डनर",pMelamineDesc:"लकड़ी की फिनिशिंग में उपयोग होने वाले मेलामाइन उत्पाद और हार्डनर। खरीदने से पहले अनुकूलता की पुष्टि करें।",pLacquer:"लैकर और टॉप कोट",pLacquerDesc:"बढ़ईगीरी और लकड़ी की फिनिशिंग के लिए लैकर व टॉप कोट, उपलब्ध स्टॉक के अनुसार।",pWoodOther:"वुड स्टेन, सीलर और थिनर",pWoodOtherDesc:"बढ़ई और पॉलिश के काम के लिए तैयारी और फिनिशिंग सामग्री। उपलब्धता और अनुकूलता पूछें।",
    pHandles:"हैंडल, नॉब और पुल",pHandlesDesc:"कैबिनेट, दराज़, अलमारी और फर्नीचर बनाने में लगने वाली फिटिंग—हम तैयार फर्नीचर नहीं बेचते।",pHinges:"कब्ज़े, स्क्रू और फास्टनर",pHingesDesc:"बढ़ई, फैब्रिकेटर और रखरखाव के काम में उपयोग होने वाला हार्डवेयर। आकार या फोटो के साथ पूछें।",pChannels:"चैनल, स्लाइड और फिटिंग",pChannelsDesc:"दराज़ और कैबिनेट असेंबली में उपयोग होने वाले हार्डवेयर। आकार और प्रकार बताकर उपलब्धता पूछें।",pCutting:"कटिंग और ग्राइंडिंग व्हील",pCuttingDesc:"वर्कशॉप और फैब्रिकेशन के लिए कटिंग व्हील व एब्रेसिव सामग्री। व्यास, मोटाई और मशीन की अनुकूलता जाँचें।",pRacks:"रैक और शेल्फ",pRacksDesc:"स्टोरेज रैक और शेल्फ के विकल्प। पूछताछ करते समय अनुमानित माप और उपयोग बताएं।",pAngles:"एंगल और धातु सेक्शन",pAnglesDesc:"रैक असेंबली और अन्य उपयोगों के लिए धातु एंगल व सेक्शन। लंबाई और माप की पुष्टि करें।",pAccessories:"पेंटिंग और वर्कशॉप एक्सेसरीज़",pAccessoriesDesc:"पेंटिंग, पॉलिश और वर्कशॉप के लिए ब्रश, रोलर, एब्रेसिव और अन्य एक्सेसरीज़ की उपलब्धता पूछें।",pPots:"फूलदान और प्लांटर",pPotsDesc:"बागवानी के लिए फूलदान और प्लांटर। उपलब्ध आकार, डिज़ाइन और मात्रा पूछें।",pAgri:"बीज और यूरिया",pAgriDesc:"बागवानी और कृषि की अतिरिक्त सामग्री। उपलब्धता और पैक के आकार के लिए पूछें।",
    noResults:"कोई मेल खाता उत्पाद नहीं",noResultsDesc:"दूसरा शब्द खोजें या सभी श्रेणियाँ चुनें।",catalogueDisclaimer:"यह सूची स्टोर की बताई गई दस उत्पाद श्रेणियों के अनुसार है। उत्पादों की तस्वीरें उदाहरण के लिए हैं और वर्तमान स्टॉक या किसी खास ब्रांड/मॉडल की गारंटी नहीं हैं। आकार, विशेषताएँ, ब्रांड, कीमत और उपलब्धता Kin Kin से पक्का करें।",
    storyEyebrow:"हमारा इतिहास",storyTitle:"1991 से फरीदाबाद में<br><em>एक भरोसेमंद नाम।</em>",storyLead:"एक किराए के घर के छोटे स्टोररूम से शुरू हुआ कारोबार, आज पेंट, हार्डवेयर और ट्रेड सामग्री के लिए स्थानीय ग्राहकों का भरोसेमंद स्रोत बन चुका है—यह सफर ग्राहक संबंधों और लगातार बढ़ती उत्पाद रेंज से बना है।",logoCaption:"Kin Kin की पहचान",storyTodayEyebrow:"आज का व्यवसाय",storyTodayTitle:"सामग्री पर हमारा ध्यान,<br><em>तैयार फर्नीचर पर नहीं।</em>",storyTodayP1:"Kin Kin पेंट और कोटिंग, लकड़ी की फिनिशिंग सामग्री, फर्नीचर निर्माण की फिटिंग, वर्कशॉप उपभोग्य सामग्री और औद्योगिक हार्डवेयर की ज़रूरतों के लिए उत्पाद उपलब्ध कराता है। इसमें वार्निश, मेलामाइन, लैकर, प्राइमर, हैंडल, कटिंग व्हील, रैक, शेल्फ और धातु एंगल के साथ चुनिंदा बागवानी व कृषि सामग्री शामिल हैं।",storyTodayP2:"स्टोर NIT-3, फरीदाबाद, हरियाणा में स्थित है। उपलब्धता, आकार, विशेषताओं और कीमत के लिए सीधे पूछताछ करें।",headLabel:"व्यवसाय प्रमुख",headCaption:"Kin Kin Paint & Hardware Store",timelineEyebrow:"हमारे पड़ाव",timelineHeading:"ग्राहकों के साथ<br><em>आगे बढ़ते हुए।</em>",milestone1991Title:"एक छोटी-सी शुरुआत",milestone1991Desc:"फ्रीहोल्ड संपत्ति पर बने किराए के एक बेडरूम वाले घर के स्टोररूम से शुरुआत हुई।",milestone1993Title:"अपनी दुकान में स्थानांतरण",milestone1993Desc:"अपनी दुकान में शिफ्ट हुए और व्यवसाय का औपचारिक पंजीकरण कराया।",milestone1994Title:"ताले के लिए भरोसेमंद स्रोत",milestone1994Desc:"ग्राहक Kin Kin को फरीदाबाद में ताले के भरोसेमंद थोक स्रोतों में से एक मानने लगे।",milestone1995Title:"पेंट की शुरुआत",milestone1995Desc:"हार्डवेयर के साथ पेंट भी उत्पाद रेंज में जोड़े गए।",milestone1996Title:"औद्योगिक सामग्री का विस्तार",milestone1996Desc:"स्लॉटेड एंगल जोड़े और उत्पादों की रेंज बढ़ाई।",milestone1999Title:"फर्नीचर हार्डवेयर में विस्तार",milestone1999Desc:"फर्नीचर बनाने और फिटिंग से जुड़ी और वस्तुएँ जोड़ी गईं।",milestone2001Title:"फैब्रिकेशन सामग्री",milestone2001Desc:"फैब्रिकेशन उत्पाद और वर्कशॉप में उपयोग होने वाली सामग्री जोड़ी गई।",milestone2021Title:"कृषि और बागवानी",milestone2021Desc:"उत्पाद रेंज में कृषि और बागवानी से जुड़ी वस्तुएँ शामिल की गईं।",archiveTitle:"तस्वीरों में हमारी कहानी",archiveDesc:"दुकान और उत्पादों की कुछ तस्वीरों के साथ, यह टाइमलाइन तीन दशकों में कारोबार के विस्तार को दर्शाती है।",galleryLabel:"Kin Kin दुकान और उत्पादों की तस्वीरें",gallerySign:"दुकान का साइनबोर्ड",galleryFront:"दुकान और शेल्फ",galleryRack:"रैक और शेल्फ",galleryFinish:"वुड फिनिश और दुकान के उत्पाद",galleryGarden:"प्लांटर और बागवानी के सामान",
    contactEyebrow:"दुकान आएँ या संपर्क करें",contactTitle:"व्यापार की बात <em>करें।</em>",contactDesc:"उत्पाद, उपलब्धता और कीमत के लिए स्टोर से संपर्क करें।",addressLabel:"दुकान का पता",directions:"रास्ता देखें ↗",phoneLabel:"कॉल / व्हाट्सऐप",chatWhatsApp:"व्हाट्सऐप पर बात करें ↗",hoursLabel:"दुकान का समय",hoursWeekdays:"सोमवार – शनिवार",hoursSunday:"रविवार",emailLabel:"ईमेल",startEnquiry:"उत्पाद के बारे में पूछें",openMaps:"Google Maps पर देखें",footerLine:"पेंट। फिनिशिंग। हार्डवेयर। व्यापारिक सामग्री।",footerLocation:"NIT-3, फरीदाबाद, हरियाणा",footerContact:"स्टोर से संपर्क करें",footerDisclaimer:"उत्पाद की उपलब्धता और कीमत की पुष्टि आवश्यक है।"
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
  document.querySelectorAll("[data-i18n-aria-label]").forEach(el => { const value = translations[lang][el.dataset.i18nAriaLabel]; if (value !== undefined) el.setAttribute("aria-label", value); });
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

// Keep vertical page scrolling natural when the pointer is over the horizontal category chips.
/* Category filters intentionally do not intercept wheel events; page scrolling stays native. */


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