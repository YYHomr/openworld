export type ResearchLang = "en" | "ar";

export type ResearchSource = {
  label: string;
  publisher: string;
  url: string;
  date: string;
};

export type ResearchDossier = {
  slug: string;
  number: string;
  topic: string;
  title: string;
  subtitle: string;
  updated: string;
  position: string;
  facts: { value: string; label: string; detail: string }[];
  sections: { title: string; paragraphs: string[] }[];
  timeline: { date: string; event: string }[];
  sources: ResearchSource[];
};

const en: ResearchDossier[] = [
  {
    slug: "palestine",
    number: "01",
    topic: "Palestine · law, land and life",
    title: "Palestine is not a footnote.",
    subtitle: "A source-led account of occupation, forced displacement, Gaza, Al-Quds and the legal struggle over genocide—centering Palestinian life rather than reducing it to a security problem.",
    updated: "18 July 2026",
    position: "Worldline recognizes the Palestinian people’s right to freedom, return, equality and self-determination. Al-Quds is central to Palestinian national, civic and spiritual life. Civilian protection is not conditional.",
    facts: [
      { value: "1.7m", label: "people in displacement sites", detail: "OCHA’s March 2026 verification found about 1.7 million people across roughly 1,600 active sites in Gaza." },
      { value: "3,200+", label: "West Bank displacements in 2026", detail: "By 10 July, OCHA attributed these to settler attacks and permit-related demolitions—about 17 people every day." },
      { value: "1,123", label: "reported killed after the ceasefire", detail: "Gaza’s Health Ministry figure cited by OCHA for 10 October 2025 through 15 July 2026." },
      { value: "Binding", label: "ICJ provisional measures", detail: "The measures order Israel to prevent acts within the Genocide Convention and enable urgently needed assistance." }
    ],
    sections: [
      {
        title: "A land, a people, a continuing displacement",
        paragraphs: [
          "Palestinian history did not begin in 1948 or 1967. Towns, villages, farming systems, ports, schools, family endowments and religious institutions formed a living society long before the establishment of Israel. The Nakba turned most Palestinians into refugees or displaced people; occupation after 1967 placed the West Bank, including East Jerusalem, and Gaza under Israeli control.",
          "The olive and fig are not decorative symbols. They are livelihoods, inheritance and evidence of presence. When homes, water systems, grazing routes, orchards or schools are demolished or made inaccessible, the damage is economic and cultural as well as physical."
        ]
      },
      {
        title: "Al-Quds: occupied city, Palestinian capital",
        paragraphs: [
          "International institutions treat East Jerusalem as part of the Occupied Palestinian Territory. In its July 2024 advisory opinion, the International Court of Justice concluded that Israel’s continued presence in the occupied territory is unlawful and said settlement activity must cease. The opinion did not recognize Israeli sovereignty over East Jerusalem.",
          "Palestinians claim East Jerusalem—Al-Quds—as the capital of their state. Worldline adopts that Palestinian position while accurately noting that sovereignty remains obstructed by occupation, annexation measures, settlement expansion, residency pressure and home demolitions."
        ]
      },
      {
        title: "Gaza: destruction after the ceasefire",
        paragraphs: [
          "A ceasefire announcement did not restore safety or normal life. OCHA reported on 16 July 2026 that strikes, gunfire, shelter destruction and new displacement continued. Most people remained displaced, public services were severely weakened, and civilians were confined to shrinking areas with inadequate water, health care, sanitation and shelter.",
          "The casualty figures used here are attributed, dated and never treated as abstract totals. Behind them are children, parents, medics, teachers, journalists and families whose lives cannot be reduced to statistics."
        ]
      },
      {
        title: "What the word genocide means here",
        paragraphs: [
          "Amnesty International concluded in December 2024 that Israel was committing genocide in Gaza. In September 2025, the UN Independent International Commission of Inquiry also concluded there were reasonable grounds to find genocidal acts and intent. Israel rejects the allegation and says its war targets Hamas and complies with international law.",
          "The ICJ has not issued a final merits judgment in South Africa v. Israel. It has, however, issued binding provisional measures under the Genocide Convention. Responsible reporting must hold both facts together: major investigative bodies have reached a genocide conclusion, while the court case that can determine state responsibility remains pending."
        ]
      }
    ],
    timeline: [
      { date: "1948", event: "The Nakba uproots the majority of the Palestinian people from their homes and towns." },
      { date: "1967", event: "Israel occupies the West Bank, including East Jerusalem, and the Gaza Strip." },
      { date: "19 Jul 2024", event: "ICJ says Israel’s continued presence in the Occupied Palestinian Territory is unlawful." },
      { date: "Sep 2025", event: "UN Commission of Inquiry concludes Israeli authorities and forces committed genocide in Gaza." },
      { date: "16 Jul 2026", event: "Latest OCHA report documents continued deaths, strikes and displacement after the ceasefire." }
    ],
    sources: [
      { label: "Humanitarian Situation Report, 16 July 2026", publisher: "UN OCHA oPt", date: "16 Jul 2026", url: "https://www.ochaopt.org/content/humanitarian-situation-report-16-july-2026" },
      { label: "Humanitarian Situation Report, 10 July 2026", publisher: "UN OCHA oPt", date: "10 Jul 2026", url: "https://www.ochaopt.org/content/humanitarian-situation-report-10-july-2026" },
      { label: "Advisory Opinion on the Occupied Palestinian Territory", publisher: "International Court of Justice", date: "19 Jul 2024", url: "https://www.icj-cij.org/node/204176" },
      { label: "Provisional measures in South Africa v. Israel", publisher: "International Court of Justice", date: "26 Jan 2024", url: "https://www.icj-cij.org/node/203453" },
      { label: "Israel’s genocide against Palestinians in Gaza", publisher: "Amnesty International", date: "5 Dec 2024", url: "https://www.amnesty.org/en/documents/mde15/8744/2024/en/" },
      { label: "UN Commission findings on land, housing and genocide", publisher: "United Nations", date: "23 Sep 2025", url: "https://www.un.org/unispal/document/icoi-opt-press-release-23sep25/" }
    ]
  },
  {
    slug: "sudan",
    number: "02",
    topic: "Sudan · civilians before generals",
    title: "Sudan’s war is not invisible.",
    subtitle: "Three years of war between the SAF and RSF have produced the world’s largest humanitarian crisis. This dossier follows the civilians, not the rival commands.",
    updated: "18 July 2026",
    position: "Solidarity with Sudan means refusing to romanticize either armed camp. Sudanese civilians, local responders, women, children and displaced communities must be at the center of peace and accountability.",
    facts: [
      { value: "33.7m", label: "people needing aid", detail: "UNICEF’s 2026 situation reporting—roughly two thirds of the country." },
      { value: "9.1m", label: "internally displaced", detail: "People uprooted inside Sudan as conflict shifted through Darfur, Kordofan, Khartoum and beyond." },
      { value: "19.5m", label: "in acute food insecurity", detail: "FAO, WFP and UNICEF estimate for IPC Phase 3 or worse in May 2026." },
      { value: "330+", label: "child casualties in six months", detail: "Children reported killed or injured in the first half of 2026; monitoring is incomplete." }
    ],
    sections: [
      {
        title: "How the war began",
        paragraphs: [
          "On 15 April 2023, fighting erupted between the Sudanese Armed Forces, led by Abdel Fattah al-Burhan, and the paramilitary Rapid Support Forces, led by Mohamed Hamdan Dagalo. The confrontation grew out of a militarized political order, the collapse of a transition after the 2019 uprising and disagreement over integrating the RSF into a unified army.",
          "The capital was devastated, but the war is national. Darfur and Kordofan have faced some of the worst violence, displacement and access restrictions. Civilians report bombardment, killings, sexual violence, looting and the destruction of health, water, market and education systems."
        ]
      },
      {
        title: "Hunger is being produced by war",
        paragraphs: [
          "Sudan’s hunger is not simply a drought story. Fighting blocks farms and markets, destroys crops and equipment, displaces producers, cuts trade routes and prevents aid from reaching communities. FAO and partners reported nearly 19.5 million people in Crisis or worse in May 2026, including more than five million in Emergency.",
          "Famine-risk warnings are geographically specific and change with evidence. The June 2026 FAO–WFP outlook identified famine risk in fourteen areas through September. Responsible coverage should not call the entire country ‘in famine,’ but it must not soften catastrophic conditions where thresholds are reached or likely."
        ]
      },
      {
        title: "Children pay for a war they did not choose",
        paragraphs: [
          "UNICEF reported at least 330 children killed or injured in the first six months of 2026, with Darfur and Kordofan the worst affected. More than five million children have been displaced since the war began, and millions remain outside school.",
          "Malnutrition, disease and attacks on civilian infrastructure reinforce each other. A child weakened by hunger is more vulnerable to cholera, malaria and measles; a destroyed clinic or blocked road makes treatable illness deadly."
        ]
      },
      {
        title: "What solidarity requires",
        paragraphs: [
          "Sudanese-led civilian rule, an end to attacks on civilians, safe humanitarian access and accountability for all perpetrators are not secondary demands. They are the foundation of any peace worth the name.",
          "The Arab world’s attention cannot stop at borders closer to television cameras. Sudan belongs at the center of Arab and African public concern, with support directed toward Sudanese people and community networks rather than competing military patrons."
        ]
      }
    ],
    timeline: [
      { date: "Dec 2018–Apr 2019", event: "A mass uprising topples Omar al-Bashir and demands civilian rule." },
      { date: "Oct 2021", event: "Military coup derails the fragile civilian transition." },
      { date: "15 Apr 2023", event: "War begins between SAF and RSF." },
      { date: "Apr 2026", event: "UN says nearly 34 million people need humanitarian assistance." },
      { date: "Jul 2026", event: "UNICEF reports at least 330 children killed or injured in the year’s first six months." }
    ],
    sources: [
      { label: "Background on the Sudan conflict", publisher: "United Nations", date: "2026 update", url: "https://www.un.org/en/spotlight-on-sudan/background" },
      { label: "UNICEF Sudan Situation Report, May 2026", publisher: "UNICEF", date: "Jul 2026", url: "https://www.unicef.org/sudan/reports/unicef-sudan-humanitarian-situation-report-may-2026" },
      { label: "At least 330 child casualties in first half of 2026", publisher: "UNICEF", date: "6 Jul 2026", url: "https://www.unicef.org/sudan/press-releases/least-330-children-killed-or-injured-sudan-during-first-six-months-2026-conflict" },
      { label: "Risk of famine persists; 19.5 million acutely food insecure", publisher: "FAO / WFP / UNICEF", date: "15 May 2026", url: "https://www.fao.org/geneva/news/details/risk-of-famine-persists-as-nearly-19.5-million-people-face-acute-food-insecurity-in-sudan/en" },
      { label: "Three years too long: Sudan needs peace", publisher: "United Nations in Sudan", date: "15 Apr 2026", url: "https://sudan.un.org/en/313793-three-years-too-long-people-sudan-need-peace" }
    ]
  },
  {
    slug: "african-hunger",
    number: "03",
    topic: "Africa · hunger without stereotypes",
    title: "Famines are made, not fated.",
    subtitle: "Africa does not suffer from one timeless famine. Specific wars, blockades, market collapses, climate shocks and funding choices push specific communities toward catastrophe.",
    updated: "18 July 2026",
    position: "Hunger reporting must reject the image of a helpless continent. African communities produce, trade, organize and survive; political violence and unequal systems repeatedly strip away that capacity.",
    facts: [
      { value: "266m", label: "people across 13 hotspots", detail: "Facing high acute food insecurity in the June–November 2026 FAO–WFP outlook." },
      { value: "−59%", label: "humanitarian food funding", detail: "Estimated decline from 2022 to 2025 while severe need increased." },
      { value: "34.8m", label: "Nigeria projection", detail: "Projected at Crisis or worse during June–August 2026, concentrated especially in the northeast." },
      { value: "26.5m", label: "DR Congo", detail: "Nearly one in four people struggling to meet basic food needs in the May 2026 update." }
    ],
    sections: [
      {
        title: "Famine is a technical finding",
        paragraphs: [
          "The IPC system separates Crisis, Emergency, Catastrophe and Famine. Famine requires evidence that at least twenty percent of households face extreme food gaps, at least thirty percent of children suffer acute malnutrition and deaths reach a defined threshold. ‘Catastrophe’ describes households; ‘Famine’ classifies an area.",
          "Those distinctions prevent exaggeration, but they must never become an excuse to wait. By the time every famine threshold is measurable, access may be blocked and people may already be dying."
        ]
      },
      {
        title: "The 2026 map of extreme hunger",
        paragraphs: [
          "FAO and WFP list Sudan, South Sudan, Yemen and Palestine as the highest-concern hotspots, with Nigeria and Somalia joining them. In South Sudan, 7.8 million people were projected to face Crisis or worse during the 2026 lean season. Somalia faced around six million in acute food insecurity and a famine risk in Burhakaba District.",
          "In the Democratic Republic of the Congo, more than 26.5 million people struggled to meet basic food needs amid conflict and displacement. These emergencies are connected by violence and underfunding, but each has its own geography and political history."
        ]
      },
      {
        title: "Conflict is the strongest common driver",
        paragraphs: [
          "The June 2026 Hunger Hotspots report found armed conflict and violence driving acute food insecurity in twelve of thirteen hotspots. War interrupts planting, blocks roads, raises prices, destroys water systems and turns aid access into leverage.",
          "Climate shocks intensify the damage but rarely act alone. Drought is deadlier where people have been displaced, public systems weakened, markets fragmented and relief operations cut."
        ]
      },
      {
        title: "An emergency of political choices",
        paragraphs: [
          "Funding for food assistance, emergency agriculture and nutrition fell sharply even as need rose. That is not a natural disaster; it is a distribution of global priorities.",
          "A serious response funds local agriculture and health systems, protects humanitarian access, ends wars and treats African governments and civil society as political actors—not as scenery for recurring charity appeals."
        ]
      }
    ],
    timeline: [
      { date: "2011", event: "Famine declared in parts of Somalia after drought, conflict and delayed response." },
      { date: "2017", event: "Famine declared in parts of South Sudan amid conflict and displacement." },
      { date: "2024–26", event: "Famine conditions and risks recur across Sudan as war blocks food systems and aid." },
      { date: "17 Jun 2026", event: "FAO–WFP identifies thirteen hunger hotspots; six are at highest concern." }
    ],
    sources: [
      { label: "Hunger Hotspots: June to November 2026", publisher: "FAO and World Food Programme", date: "17 Jun 2026", url: "https://www.fao.org/newsroom/detail/new-fao-wfp-report-warns-worsening-hunger-puts-13-hotspots-at-significant-risk/en" },
      { label: "South Sudan: 7.8 million face high acute hunger", publisher: "World Food Programme", date: "28 Apr 2026", url: "https://www.wfp.org/news/hunger-intensifies-south-sudan-78-million-people-face-high-acute-food-insecurity-and-22" },
      { label: "Somalia: 6.5 million facing high hunger", publisher: "World Food Programme", date: "24 Feb 2026", url: "https://www.wfp.org/news/somalias-humanitarian-crisis-worsening-65-million-people-facing-high-levels-hunger-federal" },
      { label: "DRC: 26.5 million struggle to meet food needs", publisher: "FAO and World Food Programme", date: "14 May 2026", url: "https://www.fao.org/africa/news-stories/news-detail/millions-trapped-in-deepening-hunger-crisis-in-the-drc-as-needs-far-outpace-humanitarian-response/en" },
      { label: "South Sudan IPC analysis", publisher: "IPC", date: "2025–26 cycle", url: "https://www.ipcinfo.org/ipcinfo-website/countries-in-focus-archive/issue-139/en/" }
    ]
  },
  {
    slug: "trump",
    number: "04",
    topic: "United States · power and Palestine",
    title: "Trump’s Gaza record, without the branding.",
    subtitle: "The record contains a forced-displacement proposal, cuts to Palestinian institutions, travel restrictions—and later diplomacy that helped produce a ceasefire. All of it deserves scrutiny.",
    updated: "18 July 2026",
    position: "No foreign president gets ownership of Gaza. Any plan must be judged by Palestinian consent, self-determination, return, sovereignty, material repair and accountability—not real-estate language or personal credit.",
    facts: [
      { value: "2025", label: "the ‘take over Gaza’ proposal", detail: "UN experts said forced removal and territorial takeover would violate foundational rules of international law." },
      { value: "0", label: "US funding for UNRWA", detail: "Trump’s February 2025 order said the United States would not fund UNRWA." },
      { value: "Oct 2025", label: "ceasefire diplomacy", detail: "The UN Secretary-General credited US, Qatari, Egyptian and Turkish efforts around the agreement." },
      { value: "PA docs", label: "travel restrictions", detail: "A December 2025 proclamation restricted entry for people using Palestinian Authority travel documents." }
    ],
    sections: [
      {
        title: "The displacement proposal",
        paragraphs: [
          "In February 2025, Trump proposed that the United States take over Gaza and that Palestinians be moved elsewhere. UN experts said forced deportation, annexation and denial of Palestinian self-determination would be manifestly illegal. For Palestinians, the proposal echoed the Nakba rather than offering reconstruction.",
          "Gaza is not vacant land and its people are not an obstacle to a development project. Reconstruction without the right to remain, return and govern is displacement with polished language."
        ]
      },
      {
        title: "Pressure on Palestinian institutions",
        paragraphs: [
          "A February 2025 executive order ended US funding for UNRWA and the UN Human Rights Council. UNRWA remains a central provider of education, health and relief services for Palestine refugees.",
          "Trump’s travel proclamations fully restricted Sudanese nationals and later included people using Palestinian Authority travel documents, while expanding restrictions across a long list of African and Arab countries. The administration framed these measures as security and vetting policy."
        ]
      },
      {
        title: "The ceasefire record",
        paragraphs: [
          "The October 2025 Gaza ceasefire agreement was welcomed by the UN Secretary-General, who explicitly commended the United States, Qatar, Egypt and Türkiye. That diplomatic achievement belongs in a factual record.",
          "But a ceasefire does not settle rights. UN experts warned that any US-backed plan must protect self-determination, prevent displacement and annexation, end unlawful occupation and preserve accountability. OCHA’s July 2026 reporting shows that Palestinians continued to be killed and displaced after the ceasefire."
        ]
      },
      {
        title: "A Palestinian test for every plan",
        paragraphs: [
          "The 2026 Board of Peace and Gaza administrative framework are described by the White House as paths to stability and reconstruction. The decisive question is whether Palestinians are treated as authors of their political future or subjects managed by an international board.",
          "Worldline’s standard is simple: no erasure, no forced transfer, no permanent foreign control, no reconstruction that trades rights for investment. Diplomacy is valuable only when it protects life and freedom."
        ]
      }
    ],
    timeline: [
      { date: "4 Feb 2025", event: "Trump orders an end to US funding for UNRWA and the UN Human Rights Council." },
      { date: "11 Feb 2025", event: "UN experts condemn the Gaza takeover and displacement proposal as illegal." },
      { date: "8 Oct 2025", event: "UN chief welcomes a ceasefire and credits US, Qatari, Egyptian and Turkish diplomacy." },
      { date: "Dec 2025", event: "US proclamation restricts entry using Palestinian Authority travel documents." },
      { date: "Jan 2026", event: "White House establishes a Board of Peace and transitional Gaza framework." }
    ],
    sources: [
      { label: "UN experts on the US Gaza takeover proposal", publisher: "United Nations", date: "11 Feb 2025", url: "https://www.un.org/unispal/document/special-rapporteur-press-release-11feb25/" },
      { label: "Order ending US funding to UNRWA and UNHRC", publisher: "The White House", date: "4 Feb 2025", url: "https://www.whitehouse.gov/presidential-actions/2025/02/withdrawing-the-united-states-from-and-ending-funding-to-certain-united-nations-organizations-and-reviewing-united-states-support-to-all-international-organizations/" },
      { label: "Secretary-General welcomes Gaza ceasefire agreement", publisher: "United Nations", date: "8 Oct 2025", url: "https://www.un.org/unispal/document/sg-statement-08oct25/" },
      { label: "Travel restrictions including PA documents", publisher: "The White House", date: "16 Dec 2025", url: "https://www.whitehouse.gov/presidential-actions/2025/12/restricting-and-limiting-the-entry-of-foreign-nationals-to-protect-the-security-of-the-united-states/" },
      { label: "Statement on Trump’s Gaza plan", publisher: "The White House", date: "16 Jan 2026", url: "https://www.whitehouse.gov/briefings-statements/2026/01/statement-on-president-trumps-comprehensive-plan-to-end-the-gaza-conflict/" },
      { label: "UN experts: peace plan must respect international law", publisher: "United Nations", date: "3 Oct 2025", url: "https://www.un.org/unispal/document/press-release-un-experts-03oct25/" }
    ]
  },
  {
    slug: "netanyahu",
    number: "05",
    topic: "Israel · command and accountability",
    title: "Netanyahu and the architecture of impunity.",
    subtitle: "A political and legal dossier on the prime minister who directed Israel’s Gaza war, the ICC warrant, the genocide findings and the official Israeli defense.",
    updated: "18 July 2026",
    position: "Accountability is not antisemitism, and a state is not a person. Criticism here concerns government policy, military conduct and alleged crimes—not Jewish people or identity.",
    facts: [
      { value: "At large", label: "ICC defendant status", detail: "The ICC’s public defendant page lists Netanyahu as at large." },
      { value: "21 Nov 2024", label: "arrest warrant issued", detail: "The warrant alleges war crimes and crimes against humanity; it is not a conviction." },
      { value: "4", label: "genocidal acts found", detail: "The UN Commission of Inquiry said there were reasonable grounds regarding four prohibited acts." },
      { value: "Pending", label: "ICJ merits case", detail: "South Africa v. Israel has binding provisional measures but no final merits judgment published." }
    ],
    sections: [
      {
        title: "Political command matters",
        paragraphs: [
          "Netanyahu led the Israeli government during the conduct examined by international courts and investigators. Decisions about siege, aid access, military objectives, displacement orders and the duration of operations were not isolated battlefield events; they formed government policy.",
          "A Palestinian-centered account focuses on the people subjected to those policies while tracing responsibility upward through political and military command."
        ]
      },
      {
        title: "The ICC warrant",
        paragraphs: [
          "The International Criminal Court issued an arrest warrant for Netanyahu on 21 November 2024. Its public case page says he is allegedly responsible for the war crime of starvation as a method of warfare, intentionally directing attacks against civilians, and crimes against humanity including murder, persecution and other inhumane acts.",
          "The warrant is an accusation supported to the court’s arrest-warrant standard, not a conviction. Israel rejects the ICC’s jurisdiction, says it investigates alleged misconduct domestically and describes the proceedings as politicized."
        ]
      },
      {
        title: "Genocide findings and the ICJ case",
        paragraphs: [
          "Amnesty International and the UN Independent International Commission of Inquiry separately concluded that Israel committed genocide in Gaza. The Commission attributed responsibility to Israeli authorities and forces and cited both official statements and patterns of conduct.",
          "The ICJ proceeding is different: it concerns state responsibility under the Genocide Convention. The Court ordered binding provisional measures but has not issued a final merits judgment. Netanyahu and Israel reject the genocide allegation."
        ]
      },
      {
        title: "Homes, land and the wider project",
        paragraphs: [
          "Gaza cannot be separated from the West Bank and East Jerusalem. OCHA documented over 3,200 Palestinian displacements from settler attacks and permit-related demolitions in 2026 by 10 July, alongside attacks on homes, schools, water and agricultural livelihoods.",
          "Accountability therefore includes more than one military campaign. It includes the continuing structures of occupation, settlement, unequal movement, land seizure and the denial of Palestinian political freedom."
        ]
      }
    ],
    timeline: [
      { date: "2009–present", event: "Netanyahu dominates Israeli government across successive coalitions, with interruptions." },
      { date: "7 Oct 2023", event: "Hamas-led attacks kill civilians and take hostages; Israel begins the Gaza war." },
      { date: "21 Nov 2024", event: "ICC issues arrest warrants for Netanyahu and Yoav Gallant." },
      { date: "Sep 2025", event: "UN Commission of Inquiry concludes Israeli authorities and forces committed genocide in Gaza." },
      { date: "Jul 2026", event: "ICC public profile continues to list Netanyahu as at large." }
    ],
    sources: [
      { label: "Benjamin Netanyahu defendant profile", publisher: "International Criminal Court", date: "Current access", url: "https://www.icc-cpi.int/defendant/netanyahu" },
      { label: "ICC issues Netanyahu and Gallant arrest warrants", publisher: "International Criminal Court", date: "21 Nov 2024", url: "https://www.icc-cpi.int/news/situation-state-palestine-icc-pre-trial-chamber-i-rejects-state-israels-challenges" },
      { label: "Israel’s official ICC legal position", publisher: "Israel Ministry of Foreign Affairs", date: "Current archive", url: "https://israelihl.mfa.gov.il/icc" },
      { label: "UN Commission findings on Israeli control and genocide", publisher: "United Nations", date: "23 Sep 2025", url: "https://www.un.org/unispal/document/icoi-opt-press-release-23sep25/" },
      { label: "Humanitarian Situation Report, 10 July 2026", publisher: "UN OCHA oPt", date: "10 Jul 2026", url: "https://www.ochaopt.org/content/humanitarian-situation-report-10-july-2026" },
      { label: "ICJ provisional measures", publisher: "International Court of Justice", date: "26 Jan 2024", url: "https://www.icj-cij.org/node/203453" }
    ]
  }
];

const ar: ResearchDossier[] = [
  {
    ...en[0],
    topic: "فلسطين · القانون والأرض والحياة",
    title: "فلسطين ليست هامشاً.",
    subtitle: "ملف موثّق عن الاحتلال والتهجير القسري وغزة والقدس والصراع القانوني حول الإبادة، يضع حياة الفلسطينيين في المركز بدلاً من اختزالها في «مشكلة أمنية».",
    updated: "18 يوليو 2026",
    position: "تعترف وورلدلاين بحق الشعب الفلسطيني في الحرية والعودة والمساواة وتقرير المصير. القدس قلب الحياة الوطنية والمدنية والروحية الفلسطينية، وحماية المدنيين ليست مشروطة.",
    facts: [
      { value: "1.7 مليون", label: "في مواقع النزوح", detail: "تحقق أوتشا في مارس 2026 من وجود نحو 1.7 مليون شخص في قرابة 1,600 موقع نشط داخل غزة." },
      { value: "+3,200", label: "مهجّرون في الضفة خلال 2026", detail: "حتى 10 يوليو، بسبب اعتداءات المستوطنين والهدم المرتبط بالتراخيص: نحو 17 شخصاً كل يوم." },
      { value: "1,123", label: "شهيداً مُبلّغاً عنهم بعد وقف النار", detail: "رقم وزارة الصحة في غزة كما نقلته أوتشا للفترة من 10 أكتوبر 2025 إلى 15 يوليو 2026." },
      { value: "مُلزمة", label: "تدابير محكمة العدل الدولية", detail: "تأمر إسرائيل بمنع الأفعال الواقعة ضمن اتفاقية الإبادة وتمكين وصول المساعدة العاجلة." }
    ],
    sections: [
      { title: "أرض وشعب وتهجير مستمر", paragraphs: ["لم يبدأ التاريخ الفلسطيني عام 1948 أو 1967. كانت المدن والقرى والمزارع والموانئ والمدارس والأوقاف والمؤسسات الدينية نسيج مجتمع حي قبل إقامة إسرائيل. حوّلت النكبة غالبية الفلسطينيين إلى لاجئين أو مهجّرين، ثم وضع احتلال 1967 الضفة بما فيها القدس الشرقية وغزة تحت السيطرة الإسرائيلية.", "الزيتون والتين ليسا زينة رمزية؛ إنهما رزق وإرث ودليل حضور. وعندما تُهدم البيوت أو تُقطع المياه ومسارات الرعي والبساتين والمدارس، يكون الضرر اقتصادياً وثقافياً إلى جانب كونه مادياً."] },
      { title: "القدس: مدينة محتلة وعاصمة فلسطينية", paragraphs: ["تتعامل المؤسسات الدولية مع القدس الشرقية كجزء من الأرض الفلسطينية المحتلة. وفي رأيها الاستشاري الصادر في يوليو 2024، خلصت محكمة العدل الدولية إلى أن استمرار الوجود الإسرائيلي في الأرض المحتلة غير قانوني، وأن النشاط الاستيطاني يجب أن يتوقف. ولم يعترف الرأي بسيادة إسرائيل على القدس الشرقية.", "يطالب الفلسطينيون بالقدس الشرقية عاصمة لدولتهم. تتبنى وورلدلاين هذا الموقف الفلسطيني، مع توضيح أن السيادة ما زالت معطلة بفعل الاحتلال وإجراءات الضم والتوسع الاستيطاني وضغوط الإقامة وهدم المنازل."] },
      { title: "غزة: الدمار بعد وقف إطلاق النار", paragraphs: ["لم يُعد إعلان وقف إطلاق النار الأمان أو الحياة الطبيعية. أفادت أوتشا في 16 يوليو 2026 باستمرار الغارات وإطلاق النار وتدمير الملاجئ والنزوح الجديد. ظل معظم السكان مهجّرين، والخدمات العامة منهكة، والمدنيون محصورين في مساحات متقلصة مع نقص الماء والصحة والصرف والمأوى.", "الأرقام هنا منسوبة إلى مصادرها ومؤرخة، ولا تُعامل كحصيلة مجردة. خلف كل رقم أطفال وآباء وأمهات ومسعفون ومعلمون وصحفيون وعائلات لا تختزلها الإحصاءات."] },
      { title: "ماذا تعني كلمة الإبادة هنا؟", paragraphs: ["خلصت منظمة العفو الدولية في ديسمبر 2024 إلى أن إسرائيل ترتكب إبادة جماعية في غزة. وفي سبتمبر 2025 خلصت لجنة التحقيق الدولية المستقلة التابعة للأمم المتحدة أيضاً إلى وجود أسباب معقولة لإثبات أفعال الإبادة وقصدها. ترفض إسرائيل الاتهام وتقول إن حربها تستهدف حماس وتلتزم بالقانون الدولي.", "لم تصدر محكمة العدل الدولية بعد حكماً نهائياً في موضوع دعوى جنوب أفريقيا ضد إسرائيل، لكنها أصدرت تدابير مؤقتة مُلزمة بموجب اتفاقية الإبادة. الصحافة المسؤولة تحمل الحقيقتين معاً: هيئات تحقيق كبرى وصلت إلى وصف الإبادة، بينما قضية مسؤولية الدولة لم تُحسم نهائياً."] }
    ],
    timeline: [
      { date: "1948", event: "النكبة تقتلع غالبية الشعب الفلسطيني من بيوته ومدنه وقراه." },
      { date: "1967", event: "إسرائيل تحتل الضفة الغربية بما فيها القدس الشرقية وقطاع غزة." },
      { date: "19 يوليو 2024", event: "محكمة العدل الدولية تعتبر الوجود الإسرائيلي المستمر في الأرض المحتلة غير قانوني." },
      { date: "سبتمبر 2025", event: "لجنة التحقيق الأممية تخلص إلى ارتكاب السلطات والقوات الإسرائيلية إبادة في غزة." },
      { date: "16 يوليو 2026", event: "أحدث تقرير لأوتشا يوثق استمرار القتل والغارات والنزوح بعد وقف النار." }
    ]
  },
  {
    ...en[1],
    topic: "السودان · المدنيون قبل الجنرالات",
    title: "حرب السودان ليست غير مرئية.",
    subtitle: "ثلاث سنوات من الحرب بين الجيش وقوات الدعم السريع صنعت أكبر أزمة إنسانية في العالم. هذا الملف يتبع المدنيين لا غرف القيادة.",
    updated: "18 يوليو 2026",
    position: "التضامن مع السودان يعني رفض تجميل أي معسكر مسلح. يجب أن يكون المدنيون والمستجيبون المحليون والنساء والأطفال والمهجّرون في قلب السلام والمساءلة.",
    facts: [
      { value: "33.7 مليون", label: "بحاجة إلى مساعدات", detail: "بحسب تقارير اليونيسف لعام 2026، أي نحو ثلثي سكان البلاد." },
      { value: "9.1 مليون", label: "نازحون داخل السودان", detail: "اقتُلِعوا من بيوتهم مع انتقال القتال عبر دارفور وكردفان والخرطوم وغيرها." },
      { value: "19.5 مليون", label: "في انعدام أمن غذائي حاد", detail: "تقدير الفاو وبرنامج الغذاء واليونيسف للمرحلة الثالثة أو أسوأ في مايو 2026." },
      { value: "+330", label: "طفلاً قُتلوا أو جُرحوا", detail: "خلال النصف الأول من 2026، مع بقاء الرصد ناقصاً بسبب صعوبة الوصول." }
    ],
    sections: [
      { title: "كيف بدأت الحرب؟", paragraphs: ["في 15 أبريل 2023 اندلع القتال بين القوات المسلحة السودانية بقيادة عبد الفتاح البرهان وقوات الدعم السريع بقيادة محمد حمدان دقلو. خرج الصراع من نظام سياسي عسكري ومن انهيار الانتقال بعد ثورة 2019 والخلاف حول دمج الدعم السريع في جيش موحد.", "دُمّرت العاصمة، لكن الحرب وطنية النطاق. شهدت دارفور وكردفان بعض أسوأ أعمال العنف والنزوح وقيود الوصول. ويبلغ المدنيون عن قصف وقتل وعنف جنسي ونهب وتدمير للصحة والمياه والأسواق والتعليم."] },
      { title: "الجوع تصنعه الحرب", paragraphs: ["جوع السودان ليس قصة جفاف فقط. القتال يمنع الزراعة والأسواق، ويدمر المحاصيل والمعدات، ويهجّر المنتجين، ويقطع طرق التجارة ويمنع الإغاثة. أفادت الفاو وشركاؤها بأن نحو 19.5 مليون شخص كانوا في مرحلة الأزمة أو أسوأ في مايو 2026، بينهم أكثر من خمسة ملايين في الطوارئ.", "تحذيرات المجاعة محددة جغرافياً وتتغير مع الأدلة. حددت توقعات الفاو وبرنامج الغذاء في يونيو 2026 خطر المجاعة في 14 منطقة حتى سبتمبر. لا يصح وصف البلد كله بأنه «في مجاعة»، لكن لا يجوز تخفيف الكارثة حيث تُبلغ العتبات أو تُوشك."] },
      { title: "الأطفال يدفعون ثمن حرب لم يختاروها", paragraphs: ["أفادت اليونيسف بمقتل أو إصابة 330 طفلاً على الأقل خلال النصف الأول من 2026، وكانت دارفور وكردفان الأشد تضرراً. نزح أكثر من خمسة ملايين طفل منذ بدء الحرب، ولا يزال الملايين خارج المدرسة.", "يتغذى سوء التغذية والمرض وتدمير البنية المدنية بعضه من بعض. الطفل الذي أضعفه الجوع أشد عرضة للكوليرا والملاريا والحصبة، وتحوّل العيادة المدمرة أو الطريق المغلق مرضاً قابلاً للعلاج إلى موت."] },
      { title: "ما الذي يتطلبه التضامن؟", paragraphs: ["الحكم المدني بقيادة سودانية، ووقف الهجمات على المدنيين، والوصول الإنساني الآمن، ومحاسبة جميع الجناة ليست مطالب ثانوية؛ بل أساس أي سلام يستحق اسمه.", "لا يجوز أن يتوقف اهتمام العالم العربي عند الحدود الأقرب إلى الكاميرات. السودان في قلب الهم العربي والأفريقي، والدعم يجب أن يصل إلى الناس والشبكات المجتمعية لا إلى رعاة المعسكرات العسكرية."] }
    ],
    timeline: [
      { date: "2018–2019", event: "ثورة شعبية تسقط عمر البشير وتطالب بالحكم المدني." },
      { date: "أكتوبر 2021", event: "انقلاب عسكري يطيح بالانتقال المدني الهش." },
      { date: "15 أبريل 2023", event: "بدء الحرب بين الجيش وقوات الدعم السريع." },
      { date: "أبريل 2026", event: "الأمم المتحدة: قرابة 34 مليون شخص يحتاجون إلى المساعدة." },
      { date: "يوليو 2026", event: "اليونيسف: 330 طفلاً على الأقل قُتلوا أو جُرحوا خلال ستة أشهر." }
    ]
  },
  {
    ...en[2],
    topic: "أفريقيا · الجوع بلا صور نمطية",
    title: "المجاعات تُصنع، وليست قدراً.",
    subtitle: "لا تعيش أفريقيا «مجاعة أبدية» واحدة. حروب وحصارات وانهيار أسواق وصدمات مناخية وخيارات تمويل تدفع مجتمعات محددة نحو الكارثة.",
    updated: "18 يوليو 2026",
    position: "يجب أن ترفض تغطية الجوع صورة القارة العاجزة. المجتمعات الأفريقية تنتج وتتاجر وتنظم وتقاوم، لكن العنف السياسي والأنظمة غير العادلة تسلبها هذه القدرة مراراً.",
    facts: [
      { value: "266 مليون", label: "عبر 13 بؤرة", detail: "يواجهون مستويات مرتفعة من انعدام الأمن الغذائي الحاد في توقعات يونيو–نوفمبر 2026." },
      { value: "−59٪", label: "تمويل الاستجابة الغذائية", detail: "انخفاض تقديري بين 2022 و2025 فيما ارتفعت الحاجة." },
      { value: "34.8 مليون", label: "توقع نيجيريا", detail: "في مرحلة الأزمة أو أسوأ خلال يونيو–أغسطس 2026، خصوصاً في الشمال الشرقي." },
      { value: "26.5 مليون", label: "الكونغو الديمقراطية", detail: "نحو واحد من كل أربعة أشخاص يكافح لتلبية حاجاته الغذائية الأساسية." }
    ],
    sections: [
      { title: "المجاعة تصنيف تقني", paragraphs: ["يفصل نظام IPC بين الأزمة والطوارئ والكارثة والمجاعة. تتطلب المجاعة دليلاً على فجوات غذائية قصوى لدى 20٪ من الأسر، وسوء تغذية حاد لدى 30٪ من الأطفال، ووفيات تبلغ عتبة محددة. «الكارثة» تصف الأسر، أما «المجاعة» فتصنف منطقة.", "تمنع هذه الفروق المبالغة، لكنها لا تبرر الانتظار. عندما تصبح كل عتبات المجاعة قابلة للقياس قد يكون الوصول محجوباً والناس يموتون بالفعل."] },
      { title: "خريطة الجوع الشديد في 2026", paragraphs: ["وضعت الفاو وبرنامج الغذاء السودان وجنوب السودان واليمن وفلسطين في أعلى درجات القلق، وانضمت نيجيريا والصومال. في جنوب السودان، توقّع أن يواجه 7.8 مليون شخص الأزمة أو أسوأ في موسم الشح. وفي الصومال واجه نحو ستة ملايين انعداماً حاداً للأمن الغذائي وخطر مجاعة في بورحكبة.", "في الكونغو الديمقراطية، عانى أكثر من 26.5 مليون شخص لتلبية حاجاتهم الغذائية وسط الصراع والنزوح. تربط العنف وقلة التمويل هذه الطوارئ، لكن لكل منها جغرافيتها وتاريخها السياسي."] },
      { title: "الصراع هو المحرك المشترك الأقوى", paragraphs: ["وجد تقرير بؤر الجوع في يونيو 2026 أن النزاع المسلح والعنف يقودان انعدام الأمن الغذائي في 12 من 13 بؤرة. الحرب تعطل الزراعة وتغلق الطرق وترفع الأسعار وتدمر المياه وتحول دخول المساعدة إلى أداة ضغط.", "تزيد الصدمات المناخية الضرر لكنها نادراً ما تعمل وحدها. يكون الجفاف أشد فتكاً عندما يكون الناس مهجّرين والأنظمة العامة منهكة والأسواق مجزأة والإغاثة مخفّضة."] },
      { title: "طوارئ صنعتها الخيارات السياسية", paragraphs: ["انخفض تمويل الغذاء والزراعة الطارئة والتغذية بشدة بينما زادت الحاجة. هذه ليست كارثة طبيعية، بل توزيع لأولويات العالم.", "تستثمر الاستجابة الجادة في الزراعة المحلية والصحة، وتحمي الوصول الإنساني، وتنهي الحروب، وتعامل الحكومات والمجتمع المدني الأفريقي كفاعلين سياسيين لا كخلفية لنداءات تبرع موسمية."] }
    ],
    timeline: [
      { date: "2011", event: "إعلان المجاعة في أجزاء من الصومال بعد الجفاف والصراع وتأخر الاستجابة." },
      { date: "2017", event: "إعلان المجاعة في أجزاء من جنوب السودان وسط الحرب والنزوح." },
      { date: "2024–2026", event: "عودة ظروف وخطر المجاعة في السودان مع تعطيل الحرب للغذاء والإغاثة." },
      { date: "17 يونيو 2026", event: "الفاو وبرنامج الغذاء يحددان 13 بؤرة جوع، ست منها في أعلى درجات القلق." }
    ]
  },
  {
    ...en[3],
    topic: "الولايات المتحدة · القوة وفلسطين",
    title: "سجل ترامب في غزة، بلا دعاية.",
    subtitle: "في السجل اقتراح تهجير وسيطرة، وقطع تمويل مؤسسات فلسطينية، وقيود سفر؛ ثم دبلوماسية ساهمت في وقف إطلاق النار. كله يحتاج إلى مساءلة.",
    updated: "18 يوليو 2026",
    position: "لا يملك أي رئيس أجنبي غزة. يُقاس أي مشروع بقبول الفلسطينيين وتقرير المصير والعودة والسيادة والإعمار والمحاسبة، لا بلغة العقارات أو نسبة الفضل لشخص.",
    facts: [
      { value: "2025", label: "اقتراح «السيطرة على غزة»", detail: "قال خبراء أمميون إن التهجير والسيطرة الإقليمية ينتهكان قواعد القانون الدولي الأساسية." },
      { value: "صفر", label: "تمويل أمريكي للأونروا", detail: "أمر ترامب في فبراير 2025 بأن الولايات المتحدة لن تموّل الأونروا." },
      { value: "أكتوبر 2025", label: "دبلوماسية وقف النار", detail: "أشاد الأمين العام بجهود الولايات المتحدة وقطر ومصر وتركيا حول الاتفاق." },
      { value: "وثائق السلطة", label: "قيود سفر", detail: "قيّد إعلان ديسمبر 2025 دخول مستخدمي وثائق سفر صادرة أو مصدقة من السلطة الفلسطينية." }
    ],
    sections: [
      { title: "اقتراح التهجير", paragraphs: ["في فبراير 2025 اقترح ترامب أن تسيطر الولايات المتحدة على غزة وأن يُنقل الفلسطينيون إلى أماكن أخرى. قال خبراء الأمم المتحدة إن الترحيل القسري والضم وحرمان الشعب الفلسطيني من تقرير المصير غير قانونية بوضوح. بالنسبة للفلسطينيين، أعاد الاقتراح صدى النكبة بدل أن يقدم إعماراً.", "غزة ليست أرضاً خالية وسكانها ليسوا عقبة أمام مشروع تطوير. الإعمار من دون الحق في البقاء والعودة والحكم هو تهجير بلغة مصقولة."] },
      { title: "الضغط على المؤسسات الفلسطينية", paragraphs: ["أنهى أمر تنفيذي في فبراير 2025 التمويل الأمريكي للأونروا ومجلس حقوق الإنسان. وتظل الأونروا مزوداً أساسياً للتعليم والصحة والإغاثة للاجئين الفلسطينيين.", "فرضت إعلانات ترامب قيوداً كاملة على السودانيين، ثم شملت مستخدمي وثائق السلطة الفلسطينية ووسعت القائمة عبر دول أفريقية وعربية كثيرة. وصفت الإدارة ذلك بأنه سياسة أمن وتدقيق."] },
      { title: "سجل وقف إطلاق النار", paragraphs: ["رحّب الأمين العام للأمم المتحدة باتفاق أكتوبر 2025 وأشاد صراحة بجهود الولايات المتحدة وقطر ومصر وتركيا. هذا الإنجاز الدبلوماسي جزء من السجل الواقعي.", "لكن وقف النار لا يحسم الحقوق. حذر خبراء أمميون من أن أي خطة يجب أن تحمي تقرير المصير وتمنع التهجير والضم وتنهي الاحتلال غير القانوني وتحفظ المساءلة. وتظهر تقارير أوتشا في يوليو 2026 استمرار قتل وتهجير الفلسطينيين بعد وقف النار."] },
      { title: "الاختبار الفلسطيني لكل خطة", paragraphs: ["تصف الإدارة «مجلس السلام» وإطار إدارة غزة لعام 2026 كطريق إلى الاستقرار والإعمار. السؤال الحاسم: هل يُعامل الفلسطينيون كصانعي مستقبلهم السياسي أم كسكان يديرهم مجلس دولي؟", "معيار وورلدلاين بسيط: لا محو، لا نقل قسري، لا سيطرة أجنبية دائمة، ولا إعمار يقايض الحقوق بالاستثمار. تكون الدبلوماسية ذات قيمة فقط عندما تحمي الحياة والحرية."] }
    ],
    timeline: [
      { date: "4 فبراير 2025", event: "ترامب يأمر بوقف التمويل الأمريكي للأونروا ومجلس حقوق الإنسان." },
      { date: "11 فبراير 2025", event: "خبراء أمميون يدينون اقتراح السيطرة والتهجير باعتباره غير قانوني." },
      { date: "8 أكتوبر 2025", event: "الأمين العام يرحب بوقف النار ويشيد بدبلوماسية أمريكا وقطر ومصر وتركيا." },
      { date: "ديسمبر 2025", event: "إعلان أمريكي يقيّد الدخول بوثائق سفر السلطة الفلسطينية." },
      { date: "يناير 2026", event: "البيت الأبيض يؤسس مجلس سلام وإطاراً انتقالياً لإدارة غزة." }
    ]
  },
  {
    ...en[4],
    topic: "إسرائيل · القيادة والمساءلة",
    title: "نتنياهو وبنية الإفلات من العقاب.",
    subtitle: "ملف سياسي وقانوني عن رئيس الحكومة الذي قاد حرب غزة، ومذكرة المحكمة الجنائية، ونتائج الإبادة، والدفاع الرسمي الإسرائيلي.",
    updated: "18 يوليو 2026",
    position: "المساءلة ليست معاداة للسامية، والدولة ليست شخصاً. النقد هنا لسياسات حكومة وسلوك عسكري وجرائم مزعومة، لا لليهود أو هويتهم.",
    facts: [
      { value: "طليق", label: "حالة المتهم لدى الجنائية", detail: "تدرج صفحة المحكمة العلنية نتنياهو بوصفه طليقاً." },
      { value: "21 نوفمبر 2024", label: "صدور مذكرة التوقيف", detail: "تزعم جرائم حرب وجرائم ضد الإنسانية، وليست حكماً بالإدانة." },
      { value: "4", label: "أفعال إبادة خلصت إليها اللجنة", detail: "قالت لجنة التحقيق الأممية إن هناك أسباباً معقولة بشأن أربعة أفعال محظورة." },
      { value: "قيد النظر", label: "موضوع دعوى العدل الدولية", detail: "صدرت تدابير مؤقتة ملزمة، لكن لا يوجد حكم نهائي منشور في أصل الدعوى." }
    ],
    sections: [
      { title: "القيادة السياسية مهمة", paragraphs: ["قاد نتنياهو الحكومة الإسرائيلية خلال السلوك الذي تفحصه المحاكم والمحققون الدوليون. قرارات الحصار ودخول المساعدات والأهداف العسكرية وأوامر النزوح ومدة العمليات لم تكن حوادث ميدانية معزولة؛ بل شكّلت سياسة دولة.", "تضع الرواية المتمركزة حول فلسطين الناس الخاضعين لهذه السياسات في المقدمة، ثم تتبع المسؤولية صعوداً عبر القيادة السياسية والعسكرية."] },
      { title: "مذكرة المحكمة الجنائية الدولية", paragraphs: ["أصدرت المحكمة الجنائية الدولية مذكرة توقيف بحق نتنياهو في 21 نوفمبر 2024. تقول صفحتها العلنية إنه مسؤول مزعوماً عن جريمة التجويع كأسلوب حرب، وتوجيه هجمات ضد المدنيين، وجرائم ضد الإنسانية تشمل القتل والاضطهاد وأفعالاً لا إنسانية.", "المذكرة اتهام يستند إلى معيار إصدار التوقيف، وليست إدانة. ترفض إسرائيل اختصاص المحكمة، وتقول إنها تحقق داخلياً في المخالفات المزعومة وتصف الإجراءات بأنها مسيّسة."] },
      { title: "نتائج الإبادة وقضية العدل الدولية", paragraphs: ["خلصت منظمة العفو الدولية ولجنة التحقيق الدولية المستقلة كل على حدة إلى أن إسرائيل ارتكبت إبادة في غزة. نسبت اللجنة المسؤولية إلى السلطات والقوات الإسرائيلية واستندت إلى تصريحات رسمية وأنماط سلوك.", "أما إجراء محكمة العدل الدولية فيبحث مسؤولية الدولة بموجب اتفاقية الإبادة. أصدرت المحكمة تدابير مؤقتة ملزمة لكنها لم تصدر حكماً نهائياً في الموضوع. يرفض نتنياهو وإسرائيل اتهام الإبادة."] },
      { title: "البيوت والأرض والمشروع الأوسع", paragraphs: ["لا تنفصل غزة عن الضفة والقدس الشرقية. وثقت أوتشا أكثر من 3,200 حالة تهجير فلسطيني بسبب اعتداءات المستوطنين والهدم المرتبط بالتراخيص خلال 2026 حتى 10 يوليو، إلى جانب الاعتداء على البيوت والمدارس والمياه والزراعة.", "لذلك لا تقتصر المساءلة على حملة عسكرية واحدة. إنها تشمل بنى الاحتلال والاستيطان وعدم المساواة في الحركة والاستيلاء على الأرض وحرمان الفلسطينيين من الحرية السياسية."] }
    ],
    timeline: [
      { date: "2009–الآن", event: "نتنياهو يهيمن على الحكومات الإسرائيلية المتعاقبة مع فترات انقطاع." },
      { date: "7 أكتوبر 2023", event: "هجمات تقودها حماس تقتل مدنيين وتأخذ رهائن؛ إسرائيل تبدأ حرب غزة." },
      { date: "21 نوفمبر 2024", event: "المحكمة الجنائية تصدر مذكرتي توقيف بحق نتنياهو ويوآف غالانت." },
      { date: "سبتمبر 2025", event: "لجنة التحقيق الأممية تخلص إلى ارتكاب السلطات والقوات الإسرائيلية إبادة في غزة." },
      { date: "يوليو 2026", event: "الصفحة العلنية للمحكمة ما زالت تدرج نتنياهو بوصفه طليقاً." }
    ]
  }
];

export const researchByLang: Record<ResearchLang, ResearchDossier[]> = { en, ar };

export function getResearch(lang: ResearchLang, slug: string) {
  return researchByLang[lang].find((item) => item.slug === slug);
}
