let currentLang = 'en';
let experienceCounter = 0;
let educationCounter = 0;

const translations = {
    en: {
        appTitle:'Professional Resume Builder', brandSubtitle:'Your space to build a standout professional resume', headerBadge:'ATS-friendly format', introKicker:'Your next opportunity starts here', introTitle:'Your career story, <span>at its best.</span>', introDescription:'Add your information and watch your resume take shape instantly. Clean, polished, and ready to download and share.', introNoteTitle:'Simple and organized', introNoteText:'Complete only the sections that apply to you', formPanelTitle:'Professional details', formPanelHint:'Changes appear in the preview instantly', previewEyebrow:'LIVE PREVIEW', previewTitle:'Your resume', liveLabel:'Updates automatically', previewFootnote:'A clean resume layout designed to work well with Applicant Tracking Systems (ATS).', footerText:'Built to help you present the best version of your professional journey.', formAria:'Resume information form', previewAria:'Resume preview', resumeTitle:'Resume',
        lblPersonal:'Personal Information', lblFullName:'Full Name', lblEmail:'Email Address', lblLinkedin:'LinkedIn Profile', lblPhone:'Phone Number', lblLocation:'City, Country', lblSummaryTitle:'Professional Summary', lblExpTitle:'Work Experience', lblCompany:'Company / Organization', lblExpRole:'Job Title / Role', lblStartDate:'Start Date', lblEndDate:'End Date', lblPresent:'I currently work here', lblExpDesc:'Key Responsibilities & Achievements', lblEduTitle:'Education', lblSchool:'University / Educational Institution', lblDegree:'Degree & Field of Study', lblGradDate:'Graduation Date / Year', lblCompTitle:'Core Competencies', lblSkillsTitle:'Technical & Personal Skills', lblCertsTitle:'Certifications & Courses', lblProjectsTitle:'Projects & Achievements', lblLangTitle:'Languages',
        headSummary:'PROFESSIONAL SUMMARY', headExp:'WORK EXPERIENCE', headEdu:'EDUCATION', headComp:'CORE COMPETENCIES', headSkills:'SKILLS', headCerts:'CERTIFICATIONS & COURSES', headProjects:'PROJECTS & ACHIEVEMENTS', headLang:'LANGUAGES', presentText:'Present', pdfBtn:'Download PDF', wordBtn:'Download Word', addExperience:'Add Another Experience', addEducation:'Add Education', remove:'Remove', educationDate:'Graduation year', experienceLegend:'Work Experience', educationLegend:'Education',
        namePlaceholder:'e.g. Alex Morgan', emailPlaceholder:'name@example.com', linkedinPlaceholder:'linkedin.com/in/username', phonePlaceholder:'+1 555 000 0000', locationPlaceholder:'London, United Kingdom', summaryPlaceholder:'Briefly describe your experience and strengths...', competenciesPlaceholder:'e.g. Project management, strategic thinking...', skillsPlaceholder:'Enter one skill per line...', certificationsPlaceholder:'Add relevant certifications or courses...', projectsPlaceholder:'Describe a project or achievement...', languagesPlaceholder:'English (native), French (advanced)...', experienceDescriptionPlaceholder:'List responsibilities or achievements, one per line...', datePlaceholder:'MM/YYYY', yearPlaceholder:'YYYY'
    },
    ar: {
        appTitle:'صانع السيرة الذاتية', brandSubtitle:'مساحتك لبناء سيرة مهنية مميزة', headerBadge:'متوافق مع أنظمة ATS', introKicker:'خطوتك الأولى نحو فرصة جديدة', introTitle:'سيرتك المهنية، <span>بأفضل صورة.</span>', introDescription:'أدخل معلوماتك وشاهد سيرتك الذاتية تتكوّن مباشرة. تصميم أنيق، واضح، وجاهز للتنزيل والمشاركة.', introNoteTitle:'بسيطة ومنظمة', introNoteText:'املأ الأقسام التي تناسبك فقط', formPanelTitle:'معلوماتك المهنية', formPanelHint:'تظهر التغييرات في المعاينة مباشرة', previewEyebrow:'معاينة مباشرة', previewTitle:'سيرتك الذاتية', liveLabel:'تتحدث تلقائياً', previewFootnote:'معاينة نظيفة بتنسيق مناسب لأنظمة تتبع المتقدمين (ATS).', footerText:'صُممت لتساعدك على تقديم أفضل نسخة من مسيرتك المهنية.', formAria:'نموذج معلومات السيرة الذاتية', previewAria:'معاينة السيرة الذاتية', resumeTitle:'السيرة الذاتية',
        lblPersonal:'البيانات الشخصية', lblFullName:'الاسم الكامل', lblEmail:'البريد الإلكتروني', lblLinkedin:'رابط LinkedIn', lblPhone:'الهاتف', lblLocation:'المدينة والبلد', lblSummaryTitle:'الملخص المهني', lblExpTitle:'الخبرة العملية', lblCompany:'جهة العمل / الشركة', lblExpRole:'المسمى الوظيفي', lblStartDate:'تاريخ البدء', lblEndDate:'تاريخ الانتهاء', lblPresent:'ما زلت أعمل هنا', lblExpDesc:'المهام والإنجازات', lblEduTitle:'التعليم والتأهيل', lblSchool:'الجامعة / المؤسسة التعليمية', lblDegree:'الشهادة والتخصص', lblGradDate:'تاريخ الحصول على الشهادة / التخرج', lblCompTitle:'الكفاءات الأساسية', lblSkillsTitle:'المهارات التقنية والشخصية', lblCertsTitle:'الشهادات المهنية والدورات', lblProjectsTitle:'المشاريع / الإنجازات', lblLangTitle:'اللغات',
        headSummary:'الملخص المهني', headExp:'الخبرات العملية', headEdu:'التعليم', headComp:'الكفاءات الأساسية', headSkills:'المهارات', headCerts:'الشهادات المهنية والدورات', headProjects:'المشاريع والإنجازات', headLang:'اللغات', presentText:'حتى الآن', pdfBtn:'تحميل PDF', wordBtn:'تحميل Word', addExperience:'إضافة خبرة أخرى', addEducation:'إضافة مؤهل تعليمي', remove:'حذف', educationDate:'سنة التخرج', experienceLegend:'خبرة عمل', educationLegend:'مؤهل تعليمي',
        namePlaceholder:'مثال: أحمد محمد', emailPlaceholder:'name@example.com', linkedinPlaceholder:'linkedin.com/in/username', phonePlaceholder:'+966 5X XXX XXXX', locationPlaceholder:'الرياض، السعودية', summaryPlaceholder:'اكتب نبذة موجزة عن خبرتك وأبرز نقاط قوتك...', competenciesPlaceholder:'مثال: إدارة المشاريع، التفكير الاستراتيجي...', skillsPlaceholder:'اكتب كل مهارة في سطر...', certificationsPlaceholder:'أضف الشهادات أو الدورات التي حصلت عليها...', projectsPlaceholder:'اذكر مشروعاً أو إنجازاً تفتخر به...', languagesPlaceholder:'العربية (اللغة الأم)، الإنجليزية (متقدم)...', experienceDescriptionPlaceholder:'اكتب المهام أو الإنجازات، كل واحدة في سطر...', datePlaceholder:'شهر/سنة', yearPlaceholder:'السنة'
    },
    fr: {
        appTitle:'Créateur de CV professionnel', brandSubtitle:'Créez un CV professionnel qui vous distingue', headerBadge:'Format compatible ATS', introKicker:'Votre prochaine opportunité commence ici', introTitle:'Votre parcours, <span>sous son meilleur jour.</span>', introDescription:'Ajoutez vos informations et voyez votre CV prendre forme instantanément. Élégant, clair et prêt à télécharger et partager.', introNoteTitle:'Simple et organisé', introNoteText:'Remplissez uniquement les rubriques qui vous concernent', formPanelTitle:'Votre profil professionnel', formPanelHint:'Les modifications apparaissent instantanément', previewEyebrow:'APERÇU EN DIRECT', previewTitle:'Votre CV', liveLabel:'Mise à jour automatique', previewFootnote:'Une mise en page claire conçue pour les logiciels de suivi des candidatures (ATS).', footerText:'Conçu pour vous aider à présenter le meilleur de votre parcours professionnel.', formAria:'Formulaire du CV', previewAria:'Aperçu du CV', resumeTitle:'Curriculum vitae',
        lblPersonal:'Informations personnelles', lblFullName:'Nom complet', lblEmail:'Adresse e-mail', lblLinkedin:'Profil LinkedIn', lblPhone:'Téléphone', lblLocation:'Ville, pays', lblSummaryTitle:'Profil professionnel', lblExpTitle:'Expérience professionnelle', lblCompany:'Entreprise / Organisation', lblExpRole:'Poste occupé', lblStartDate:'Date de début', lblEndDate:'Date de fin', lblPresent:'Poste actuel', lblExpDesc:'Responsabilités et réalisations', lblEduTitle:'Formation', lblSchool:'Université / Établissement', lblDegree:'Diplôme et domaine', lblGradDate:'Date / année d’obtention', lblCompTitle:'Compétences clés', lblSkillsTitle:'Compétences techniques et personnelles', lblCertsTitle:'Certifications et formations', lblProjectsTitle:'Projets et réalisations', lblLangTitle:'Langues',
        headSummary:'PROFIL PROFESSIONNEL', headExp:'EXPÉRIENCE PROFESSIONNELLE', headEdu:'FORMATION', headComp:'COMPÉTENCES CLÉS', headSkills:'COMPÉTENCES', headCerts:'CERTIFICATIONS ET FORMATIONS', headProjects:'PROJETS ET RÉALISATIONS', headLang:'LANGUES', presentText:'Aujourd’hui', pdfBtn:'Télécharger PDF', wordBtn:'Télécharger Word', addExperience:'Ajouter une expérience', addEducation:'Ajouter une formation', remove:'Supprimer', educationDate:'Année d’obtention', experienceLegend:'Expérience professionnelle', educationLegend:'Formation',
        namePlaceholder:'Ex. : Alex Martin', emailPlaceholder:'nom@exemple.com', linkedinPlaceholder:'linkedin.com/in/nom', phonePlaceholder:'+33 6 00 00 00 00', locationPlaceholder:'Paris, France', summaryPlaceholder:'Présentez brièvement votre expérience et vos points forts...', competenciesPlaceholder:'Ex. : Gestion de projet, réflexion stratégique...', skillsPlaceholder:'Saisissez une compétence par ligne...', certificationsPlaceholder:'Ajoutez vos certifications et formations...', projectsPlaceholder:'Décrivez un projet ou une réalisation...', languagesPlaceholder:'Français (langue maternelle), anglais (avancé)...', experienceDescriptionPlaceholder:'Indiquez vos responsabilités ou réalisations, une par ligne...', datePlaceholder:'MM/AAAA', yearPlaceholder:'AAAA'
    },
    es: {
        appTitle:'Creador de currículums profesionales', brandSubtitle:'Crea un currículum que destaque tu perfil', headerBadge:'Formato compatible con ATS', introKicker:'Tu próxima oportunidad empieza aquí', introTitle:'Tu trayectoria, <span>en su mejor versión.</span>', introDescription:'Añade tu información y mira cómo se crea tu currículum al instante. Claro, elegante y listo para descargar y compartir.', introNoteTitle:'Sencillo y organizado', introNoteText:'Completa solo las secciones que correspondan', formPanelTitle:'Tu perfil profesional', formPanelHint:'Los cambios aparecen al instante', previewEyebrow:'VISTA PREVIA', previewTitle:'Tu currículum', liveLabel:'Actualización automática', previewFootnote:'Un diseño claro pensado para los sistemas de seguimiento de candidatos (ATS).', footerText:'Creado para ayudarte a presentar la mejor versión de tu trayectoria profesional.', formAria:'Formulario del currículum', previewAria:'Vista previa del currículum', resumeTitle:'Currículum',
        lblPersonal:'Información personal', lblFullName:'Nombre completo', lblEmail:'Correo electrónico', lblLinkedin:'Perfil de LinkedIn', lblPhone:'Teléfono', lblLocation:'Ciudad, país', lblSummaryTitle:'Perfil profesional', lblExpTitle:'Experiencia laboral', lblCompany:'Empresa / Organización', lblExpRole:'Puesto', lblStartDate:'Fecha de inicio', lblEndDate:'Fecha de finalización', lblPresent:'Trabajo aquí actualmente', lblExpDesc:'Responsabilidades y logros', lblEduTitle:'Formación académica', lblSchool:'Universidad / Institución', lblDegree:'Título y especialidad', lblGradDate:'Fecha / año de graduación', lblCompTitle:'Competencias principales', lblSkillsTitle:'Habilidades técnicas y personales', lblCertsTitle:'Certificaciones y cursos', lblProjectsTitle:'Proyectos y logros', lblLangTitle:'Idiomas',
        headSummary:'PERFIL PROFESIONAL', headExp:'EXPERIENCIA LABORAL', headEdu:'FORMACIÓN ACADÉMICA', headComp:'COMPETENCIAS PRINCIPALES', headSkills:'HABILIDADES', headCerts:'CERTIFICACIONES Y CURSOS', headProjects:'PROYECTOS Y LOGROS', headLang:'IDIOMAS', presentText:'Actualmente', pdfBtn:'Descargar PDF', wordBtn:'Descargar Word', addExperience:'Añadir experiencia', addEducation:'Añadir formación', remove:'Eliminar', educationDate:'Año de graduación', experienceLegend:'Experiencia laboral', educationLegend:'Formación académica',
        namePlaceholder:'Ej.: Alex García', emailPlaceholder:'nombre@ejemplo.com', linkedinPlaceholder:'linkedin.com/in/usuario', phonePlaceholder:'+34 600 000 000', locationPlaceholder:'Madrid, España', summaryPlaceholder:'Resume brevemente tu experiencia y tus puntos fuertes...', competenciesPlaceholder:'Ej.: Gestión de proyectos, pensamiento estratégico...', skillsPlaceholder:'Escribe una habilidad por línea...', certificationsPlaceholder:'Añade certificaciones o cursos relevantes...', projectsPlaceholder:'Describe un proyecto o logro...', languagesPlaceholder:'Español (nativo), inglés (avanzado)...', experienceDescriptionPlaceholder:'Escribe responsabilidades o logros, uno por línea...', datePlaceholder:'MM/AAAA', yearPlaceholder:'AAAA'
    },
    de: {
        appTitle:'Professioneller Lebenslauf-Generator', brandSubtitle:'Erstellen Sie einen überzeugenden Lebenslauf', headerBadge:'ATS-freundliches Format', introKicker:'Ihre nächste Chance beginnt hier', introTitle:'Ihr beruflicher Weg, <span>bestens präsentiert.</span>', introDescription:'Geben Sie Ihre Informationen ein und sehen Sie, wie Ihr Lebenslauf sofort entsteht. Klar, professionell und bereit zum Herunterladen und Teilen.', introNoteTitle:'Einfach und übersichtlich', introNoteText:'Füllen Sie nur passende Abschnitte aus', formPanelTitle:'Berufliche Angaben', formPanelHint:'Änderungen erscheinen sofort in der Vorschau', previewEyebrow:'LIVE-VORSCHAU', previewTitle:'Ihr Lebenslauf', liveLabel:'Wird automatisch aktualisiert', previewFootnote:'Ein übersichtliches Layout, das für Bewerbermanagementsysteme (ATS) geeignet ist.', footerText:'Damit Sie den besten Eindruck Ihrer beruflichen Laufbahn präsentieren können.', formAria:'Formular für Lebenslaufangaben', previewAria:'Lebenslaufvorschau', resumeTitle:'Lebenslauf',
        lblPersonal:'Persönliche Angaben', lblFullName:'Vollständiger Name', lblEmail:'E-Mail-Adresse', lblLinkedin:'LinkedIn-Profil', lblPhone:'Telefonnummer', lblLocation:'Stadt, Land', lblSummaryTitle:'Berufliches Profil', lblExpTitle:'Berufserfahrung', lblCompany:'Unternehmen / Organisation', lblExpRole:'Position', lblStartDate:'Beginn', lblEndDate:'Ende', lblPresent:'Derzeit hier tätig', lblExpDesc:'Aufgaben und Erfolge', lblEduTitle:'Ausbildung', lblSchool:'Universität / Bildungseinrichtung', lblDegree:'Abschluss und Fachrichtung', lblGradDate:'Abschlussdatum / Jahr', lblCompTitle:'Kernkompetenzen', lblSkillsTitle:'Fachliche und persönliche Fähigkeiten', lblCertsTitle:'Zertifikate und Weiterbildungen', lblProjectsTitle:'Projekte und Erfolge', lblLangTitle:'Sprachen',
        headSummary:'BERUFLICHES PROFIL', headExp:'BERUFSERFAHRUNG', headEdu:'AUSBILDUNG', headComp:'KERNKOMPETENZEN', headSkills:'FÄHIGKEITEN', headCerts:'ZERTIFIKATE UND WEITERBILDUNGEN', headProjects:'PROJEKTE UND ERFOLGE', headLang:'SPRACHEN', presentText:'Heute', pdfBtn:'PDF herunterladen', wordBtn:'Word herunterladen', addExperience:'Berufserfahrung hinzufügen', addEducation:'Ausbildung hinzufügen', remove:'Entfernen', educationDate:'Abschlussjahr', experienceLegend:'Berufserfahrung', educationLegend:'Ausbildung',
        namePlaceholder:'z. B. Alex Müller', emailPlaceholder:'name@beispiel.de', linkedinPlaceholder:'linkedin.com/in/benutzer', phonePlaceholder:'+49 170 0000000', locationPlaceholder:'Berlin, Deutschland', summaryPlaceholder:'Beschreiben Sie kurz Ihre Erfahrung und Stärken...', competenciesPlaceholder:'z. B. Projektmanagement, strategisches Denken...', skillsPlaceholder:'Eine Fähigkeit pro Zeile eingeben...', certificationsPlaceholder:'Relevante Zertifikate oder Weiterbildungen hinzufügen...', projectsPlaceholder:'Beschreiben Sie ein Projekt oder einen Erfolg...', languagesPlaceholder:'Deutsch (Muttersprache), Englisch (fortgeschritten)...', experienceDescriptionPlaceholder:'Aufgaben oder Erfolge eingeben, jeweils eine Zeile...', datePlaceholder:'MM/JJJJ', yearPlaceholder:'JJJJ'
    }
};

const exportMessages = {
    en: { pdfGenerating:'Creating PDF…', docxGenerating:'Creating Word file…', exportError:'Could not create the file. Check your internet connection and try again.' },
    ar: { pdfGenerating:'جارٍ إنشاء PDF…', docxGenerating:'جارٍ إنشاء ملف Word…', exportError:'تعذّر إنشاء الملف. تأكد من اتصال الإنترنت ثم حاول مجددًا.' },
    fr: { pdfGenerating:'Création du PDF…', docxGenerating:'Création du document Word…', exportError:'Impossible de créer le fichier. Vérifiez votre connexion Internet et réessayez.' },
    es: { pdfGenerating:'Creando PDF…', docxGenerating:'Creando archivo Word…', exportError:'No se pudo crear el archivo. Comprueba tu conexión a Internet e inténtalo de nuevo.' },
    de: { pdfGenerating:'PDF wird erstellt…', docxGenerating:'Word-Datei wird erstellt…', exportError:'Die Datei konnte nicht erstellt werden. Prüfen Sie Ihre Internetverbindung und versuchen Sie es erneut.' }
};
Object.keys(exportMessages).forEach(lang => Object.assign(translations[lang], exportMessages[lang]));

const labelIds = [
    'lblPersonal','lblFullName','lblEmail','lblLinkedin','lblPhone','lblLocation',
    'lblSummaryTitle','lblExpTitle','lblEduTitle','lblCompTitle','lblSkillsTitle','lblCertsTitle','lblProjectsTitle','lblLangTitle',
    'headSummary','headExp','headEdu','headComp','headSkills','headCerts','headProjects','headLang'
];

function experienceCard(id) {
    const t = translations[currentLang];
    return `<fieldset class="repeat-card experience-card" data-experience-id="${id}">
        <legend>${t.experienceLegend}</legend>
        <div class="form-group"><label>${t.lblCompany}</label><input type="text" data-field="company"></div>
        <div class="form-group"><label>${t.lblExpRole}</label><input type="text" data-field="role"></div>
        <div class="form-row">
            <div class="form-group"><label>${t.lblStartDate}</label><input type="text" data-field="start" placeholder="${t.datePlaceholder}"></div>
            <div class="form-group"><label>${t.lblEndDate}</label><input type="text" data-field="end" placeholder="${t.datePlaceholder}"></div>
        </div>
        <div class="form-group checkbox-group"><input type="checkbox" data-field="present"><label>${t.lblPresent}</label></div>
        <div class="form-group"><label>${t.lblExpDesc}</label><textarea data-field="description" rows="4" placeholder="${t.experienceDescriptionPlaceholder}"></textarea></div>
        <button type="button" class="remove-btn" onclick="removeCard(this, 'experienceForms')">${t.remove}</button>
    </fieldset>`;
}

function educationCard(id) {
    const t = translations[currentLang];
    return `<fieldset class="repeat-card education-card" data-education-id="${id}">
        <legend>${t.educationLegend}</legend>
        <div class="form-group"><label>${t.lblSchool}</label><input type="text" data-field="school"></div>
        <div class="form-group"><label>${t.lblDegree}</label><input type="text" data-field="degree"></div>
        <div class="form-group"><label>${t.educationDate}</label><input type="text" data-field="year" placeholder="${t.yearPlaceholder}"></div>
        <button type="button" class="remove-btn" onclick="removeCard(this, 'educationForms')">${t.remove}</button>
    </fieldset>`;
}

function addExperience() {
    document.getElementById('experienceForms').insertAdjacentHTML('beforeend', experienceCard(experienceCounter++));
    updateCV();
}

function addEducation() {
    document.getElementById('educationForms').insertAdjacentHTML('beforeend', educationCard(educationCounter++));
    updateCV();
}

function removeCard(button, containerId) {
    const container = document.getElementById(containerId);
    const cards = container.querySelectorAll('.repeat-card');
    if (cards.length > 1) button.closest('.repeat-card').remove();
    else button.closest('.repeat-card').querySelectorAll('input, textarea').forEach(field => {
        if (field.type === 'checkbox') field.checked = false;
        else field.value = '';
        field.disabled = false;
    });
    updateCV();
}

function setLanguage(lang) {
    if (!translations[lang]) lang = 'en';
    currentLang = lang;
    const t = translations[lang];
    const isArabic = lang === 'ar';
    const root = document.getElementById('htmlRoot');
    root.setAttribute('lang', lang);
    root.setAttribute('dir', isArabic ? 'rtl' : 'ltr');
    document.getElementById('languageSelect').value = lang;
    document.getElementById('cvPreview').setAttribute('dir', isArabic ? 'rtl' : 'ltr');
    document.getElementById('cvPreview').style.textAlign = isArabic ? 'right' : 'left';
    document.title = t.appTitle;
    document.getElementById('appTitle').innerText = t.appTitle;
    document.getElementById('brandSubtitle').innerText = t.brandSubtitle;
    document.getElementById('headerBadge').innerText = t.headerBadge;
    document.getElementById('introKicker').innerText = t.introKicker;
    document.getElementById('introTitle').innerHTML = t.introTitle;
    document.getElementById('introDescription').innerText = t.introDescription;
    document.getElementById('introNoteTitle').innerText = t.introNoteTitle;
    document.getElementById('introNoteText').innerText = t.introNoteText;
    document.getElementById('formPanelTitle').innerText = t.formPanelTitle;
    document.getElementById('formPanelHint').innerText = t.formPanelHint;
    document.getElementById('previewEyebrow').innerText = t.previewEyebrow;
    document.getElementById('previewTitle').innerText = t.previewTitle;
    document.getElementById('liveLabel').innerText = t.liveLabel;
    document.getElementById('previewFootnote').innerText = t.previewFootnote;
    document.getElementById('footerText').innerText = t.footerText;
    document.getElementById('formSection').setAttribute('aria-label', t.formAria);
    document.getElementById('previewSection').setAttribute('aria-label', t.previewAria);
    document.getElementById('brandLink').setAttribute('aria-label', t.appTitle);
    labelIds.forEach(id => { document.getElementById(id).innerText = t[id]; });
    document.querySelectorAll('[data-placeholder-key]').forEach(field => {
        const key = field.dataset.placeholderKey;
        if (t[key]) field.placeholder = t[key];
    });
    document.getElementById('addExperienceBtn').innerHTML = `<span aria-hidden="true">＋</span> ${t.addExperience}`;
    document.getElementById('addEducationBtn').innerHTML = `<span aria-hidden="true">＋</span> ${t.addEducation}`;
    document.getElementById('downloadPdfBtn').innerHTML = `<span aria-hidden="true">↓</span> ${t.pdfBtn}`;
    document.getElementById('downloadWordBtn').innerHTML = `<span aria-hidden="true">▤</span> ${t.wordBtn}`;

    // Rebuild repeatable forms in the selected language while preserving entered values.
    const experiences = collectExperiences();
    const educations = collectEducations();
    document.getElementById('experienceForms').innerHTML = '';
    document.getElementById('educationForms').innerHTML = '';
    experiences.forEach(item => {
        addExperience();
        const card = document.getElementById('experienceForms').lastElementChild;
        Object.entries(item).forEach(([key, value]) => {
            const field = card.querySelector(`[data-field="${key}"]`);
            if (!field) return;
            if (field.type === 'checkbox') field.checked = value;
            else field.value = value;
            if (key === 'present') card.querySelector('[data-field="end"]').disabled = value;
        });
    });
    educations.forEach(item => {
        addEducation();
        const card = document.getElementById('educationForms').lastElementChild;
        Object.entries(item).forEach(([key, value]) => {
            const field = card.querySelector(`[data-field="${key}"]`);
            if (field) field.value = value;
        });
    });
    updateCV();
}

function collectExperiences() {
    return [...document.querySelectorAll('#experienceForms .experience-card')].map(card => ({
        company: card.querySelector('[data-field="company"]').value,
        role: card.querySelector('[data-field="role"]').value,
        start: card.querySelector('[data-field="start"]').value,
        end: card.querySelector('[data-field="end"]').value,
        present: card.querySelector('[data-field="present"]').checked,
        description: card.querySelector('[data-field="description"]').value
    }));
}

function collectEducations() {
    return [...document.querySelectorAll('#educationForms .education-card')].map(card => ({
        school: card.querySelector('[data-field="school"]').value,
        degree: card.querySelector('[data-field="degree"]').value,
        year: card.querySelector('[data-field="year"]').value
    }));
}

function updateCV() {
    const t = translations[currentLang];
    document.getElementById('cvName').innerText = document.getElementById('fullName').value.trim();
    const contacts = ['email','linkedin','phone','location'].map(id => document.getElementById(id).value.trim()).filter(Boolean);
    document.getElementById('cvContactBar').innerHTML = contacts.map(value => `<div>${escapeHtml(value)}</div>`).join('');

    const summary = document.getElementById('summary').value.trim();
    toggleSection('secSummary', summary, () => { document.getElementById('cvSummary').innerText = summary; });

    const experiences = collectExperiences().filter(item => Object.values(item).some(value => value === true || (typeof value === 'string' && value.trim())));
    toggleSection('secExp', experiences.length > 0, () => {
        document.getElementById('cvExperiences').innerHTML = experiences.map(item => {
            const end = item.present ? t.presentText : item.end.trim();
            const dates = [item.start.trim(), end].filter(Boolean).join(' - ');
            return `<article class="cv-entry">
                ${item.role.trim() ? `<div class="bold-text">${escapeHtml(item.role.trim())}</div>` : ''}
                ${dates ? `<div class="date-text">${escapeHtml(dates)}</div>` : ''}
                ${item.company.trim() ? `<div class="subbold-text">${escapeHtml(item.company.trim())}</div>` : ''}
                ${item.description.trim() ? `<div class="ats-formatted-text">${formatText(item.description)}</div>` : ''}
            </article>`;
        }).join('');
    });

    const educations = collectEducations().filter(item => item.school.trim() || item.degree.trim() || item.year.trim());
    toggleSection('secEdu', educations.length > 0, () => {
        document.getElementById('cvEducations').innerHTML = educations.map(item => `<article class="cv-entry">
            ${item.degree.trim() ? `<div class="bold-text">${escapeHtml(item.degree.trim())}</div>` : ''}
            ${item.year.trim() ? `<div class="date-text">${escapeHtml(item.year.trim())}</div>` : ''}
            ${item.school.trim() ? `<div class="subbold-text">${escapeHtml(item.school.trim())}</div>` : ''}
        </article>`).join('');
    });

    const compText = document.getElementById('competencies').value.trim();
    toggleSection('secComp', compText, () => { document.getElementById('cvCompetencies').innerHTML = formatText(compText); });
    const skillsText = document.getElementById('skills').value.trim();
    toggleSection('secSkills', skillsText, () => {
        const skillsList = document.getElementById('cvSkills');
        skillsList.innerHTML = skillsText.split('\n').filter(skill => skill.trim()).map(skill => `<li>${escapeHtml(skill.trim().replace(/^[•-]\s*/, ''))}</li>`).join('');
    });
    [['certifications','secCerts','cvCertifications'],['projects','secProjects','cvProjects'],['languages','secLang','cvLanguages']].forEach(([inputId, sectionId, outputId]) => {
        const value = document.getElementById(inputId).value.trim();
        toggleSection(sectionId, value, () => { document.getElementById(outputId).innerHTML = formatText(value); });
    });
}

function toggleSection(sectionId, condition, callback) {
    const section = document.getElementById(sectionId);
    section.style.display = condition ? 'block' : 'none';
    if (condition) callback();
}

function escapeHtml(text) {
    return String(text).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
}

function formatText(text) {
    if (!text) return '';
    return text.split('\n').map(line => {
        const clean = line.trim();
        if (!clean) return '';
        if (clean.startsWith('•') || clean.startsWith('-')) return `<div class="text-bullet">• ${escapeHtml(clean.replace(/^[•-]\s*/, ''))}</div>`;
        return `<div>${escapeHtml(clean)}</div>`;
    }).join('');
}

function exportBaseName() {
    return ({ en:'Resume', ar:'السيرة-الذاتية', fr:'CV', es:'Curriculum', de:'Lebenslauf' })[currentLang] || 'Resume';
}

function downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.rel = 'noopener';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    link.remove();
    // Keep the object URL alive long enough for mobile browsers to finish the download.
    setTimeout(() => URL.revokeObjectURL(url), 60000);
}

async function exportToPDF() {
    updateCV();
    const t = translations[currentLang];
    const button = document.getElementById('downloadPdfBtn');
    if (typeof window.html2pdf !== 'function') {
        alert(t.exportError);
        return;
    }

    button.disabled = true;
    button.innerHTML = `<span aria-hidden="true">…</span> ${t.pdfGenerating}`;
    try {
        const pdfBlob = await window.html2pdf().set({
            margin: 0,
            filename: `${exportBaseName()}.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: {
                scale: 2,
                useCORS: true,
                backgroundColor: '#ffffff',
                scrollY: 0,
                windowWidth: Math.max(document.documentElement.clientWidth, Math.ceil(document.getElementById('cvPreview').getBoundingClientRect().width))
            },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
            pagebreak: { mode: ['css', 'legacy'], avoid: ['.ats-section h2', '.cv-entry'] }
        }).from(document.getElementById('cvPreview')).toPdf().outputPdf('blob');
        downloadBlob(pdfBlob, `${exportBaseName()}.pdf`);
    } catch (error) {
        console.error('PDF export failed:', error);
        alert(t.exportError);
    } finally {
        button.disabled = false;
        button.innerHTML = `<span aria-hidden="true">↓</span> ${t.pdfBtn}`;
    }
}

async function exportToWord() {
    updateCV();
    const t = translations[currentLang];
    const button = document.getElementById('downloadWordBtn');
    const api = window.docx;
    if (!api?.Document || !api?.Packer || !api?.Paragraph || !api?.TextRun) {
        alert(t.exportError);
        return;
    }

    button.disabled = true;
    button.innerHTML = `<span aria-hidden="true">…</span> ${t.docxGenerating}`;
    try {
        const isArabic = currentLang === 'ar';
        const alignment = isArabic ? api.AlignmentType.RIGHT : api.AlignmentType.LEFT;
        const paragraphs = [];
        const addParagraph = (text, options = {}) => {
            const content = String(text || '').trim();
            if (!content) return;
            const paragraphOptions = {
                alignment,
                bidirectional: isArabic,
                spacing: { after: options.after ?? 80 },
                children: [new api.TextRun({ text: content, font: 'Arial', size: options.size || 18, bold: !!options.bold, color: options.color || '111111' })]
            };
            if (options.rule) {
                paragraphOptions.border = {
                    bottom: { color: '000000', space: 1, style: api.BorderStyle.SINGLE, size: 6 }
                };
            }
            paragraphs.push(new api.Paragraph(paragraphOptions));
        };

        function addPreviewNode(node) {
            if (!node || node.nodeType !== 1) return;
            if (node.tagName === 'UL' || node.tagName === 'OL' || node.classList.contains('cv-entry') || node.classList.contains('ats-formatted-text')) {
                [...node.children].forEach(addPreviewNode);
                return;
            }
            if (node.tagName === 'LI') {
                const text = (node.innerText || node.textContent || '').trim();
                addParagraph(`• ${text.replace(/^[•-]\s*/, '')}`, { size: 18 });
                return;
            }
            if (node.children.length) {
                [...node.children].forEach(addPreviewNode);
                return;
            }
            let text = (node.innerText || node.textContent || '').trim();
            if (!text) return;
            const bullet = node.classList.contains('text-bullet') || /^[•-]\s*/.test(text);
            if (bullet) text = `• ${text.replace(/^[•-]\s*/, '')}`;
            addParagraph(text, {
                bold: node.classList.contains('bold-text'),
                size: node.classList.contains('bold-text') ? 19 : node.classList.contains('date-text') ? 17 : 18,
                color: node.classList.contains('date-text') ? '444444' : '111111'
            });
        }

        const cv = document.getElementById('cvPreview');
        const name = cv.querySelector('#cvName').innerText.trim();
        if (name) addParagraph(name, { bold: true, size: 44, after: 180 });
        const contactDetails = [...cv.querySelector('#cvContactBar').children]
            .map(item => (item.innerText || item.textContent || '').trim())
            .filter(Boolean);
        if (contactDetails.length) addParagraph(contactDetails.join('  •  '), { size: 18, color: '444444', after: 180 });

        [...cv.querySelectorAll('.ats-section')].forEach(section => {
            if (section.style.display === 'none') return;
            const heading = section.querySelector('h2');
            if (heading) addParagraph(heading.innerText.trim().toLocaleUpperCase(currentLang), { bold: true, size: 21, after: 110, rule: true });
            [...section.children].filter(child => child !== heading).forEach(addPreviewNode);
        });

        const doc = new api.Document({
            sections: [{
                properties: {
                    page: {
                        size: { width: 11906, height: 16838 },
                        margin: { top: 1020, bottom: 1020, left: 1020, right: 1020 }
                    }
                },
                children: paragraphs
            }]
        });
        const blob = await api.Packer.toBlob(doc);
        downloadBlob(blob, `${exportBaseName()}.docx`);
    } catch (error) {
        console.error('Word export failed:', error);
        alert(t.exportError);
    } finally {
        button.disabled = false;
        button.innerHTML = `<span aria-hidden="true">▤</span> ${t.wordBtn}`;
    }
}

document.addEventListener('input', event => {
    if (event.target.matches('input, textarea')) updateCV();
});
document.addEventListener('change', event => {
    if (event.target.matches('[data-field="present"]')) {
        const card = event.target.closest('.experience-card');
        const end = card.querySelector('[data-field="end"]');
        if (event.target.checked) end.value = '';
        end.disabled = event.target.checked;
        updateCV();
    }
});

window.addEventListener('DOMContentLoaded', () => {
    addExperience();
    addEducation();
    setLanguage('en');
});
