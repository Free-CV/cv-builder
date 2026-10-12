let currentLang = 'ar';
let experienceCounter = 0;
let educationCounter = 0;

const translations = {
    ar: {
        appTitle: 'صانع السيرة الذاتية', brandSubtitle: 'مساحتك لبناء سيرة مهنية مميزة',
        headerBadge: 'متوافق مع أنظمة ATS', introKicker: 'خطوتك الأولى نحو فرصة جديدة',
        introTitle: 'سيرتك المهنية، <span>بأفضل صورة.</span>',
        introDescription: 'أدخل معلوماتك وشاهد سيرتك الذاتية تتكوّن مباشرة. تصميم أنيق، واضح، وجاهز للتنزيل والمشاركة.',
        introNoteTitle: 'بسيطة ومنظمة', introNoteText: 'املأ الأقسام التي تناسبك فقط',
        formPanelTitle: 'معلوماتك المهنية', formPanelHint: 'تظهر التغييرات في المعاينة مباشرة',
        previewEyebrow: 'معاينة مباشرة', previewTitle: 'سيرتك الذاتية', liveLabel: 'تتحدث تلقائياً',
        previewFootnote: 'معاينة نظيفة بتنسيق مناسب لأنظمة تتبع المتقدمين (ATS).',
        footerText: 'صُممت لتساعدك على تقديم أفضل نسخة من مسيرتك المهنية.',
        lblPersonal: 'البيانات الشخصية', lblFullName: 'الاسم الكامل',
        lblEmail: 'البريد الإلكتروني', lblLinkedin: 'رابط LinkedIn', lblPhone: 'الهاتف', lblLocation: 'المدينة والبلد',
        lblSummaryTitle: 'الملخص المهني', lblExpTitle: 'الخبرة العملية', lblCompany: 'جهة العمل / الشركة',
        lblExpRole: 'المسمى الوظيفي', lblStartDate: 'تاريخ البدء', lblEndDate: 'تاريخ الانتهاء',
        lblPresent: 'ما زلت أعمل هنا', lblExpDesc: 'المهام والإنجازات', lblEduTitle: 'التعليم والتأهيل',
        lblSchool: 'الجامعة / المؤسسة التعليمية', lblDegree: 'الشهادة والتخصص', lblGradDate: 'تاريخ الحصول على الشهادة / التخرج',
        lblCompTitle: 'الكفاءات الأساسية', lblSkillsTitle: 'المهارات التقنية والشخصية',
        lblCertsTitle: 'الشهادات المهنية والدورات', lblProjectsTitle: 'المشاريع / الإنجازات', lblLangTitle: 'اللغات',
        headSummary: 'الملخص المهني', headExp: 'الخبرات العملية', headEdu: 'التعليم', headComp: 'الكفاءات الأساسية',
        headSkills: 'المهارات', headCerts: 'الشهادات المهنية والدورات', headProjects: 'المشاريع والإنجازات', headLang: 'اللغات',
        presentText: 'حتى الآن', pdfBtn: '📥 تحميل PDF', wordBtn: '📝 تحميل Word',
        addExperience: '＋ إضافة خبرة أخرى', addEducation: '＋ إضافة مؤهل تعليمي', remove: 'حذف',
        educationDate: 'سنة التخرج'
    },
    en: {
        appTitle: 'Professional Resume Builder', brandSubtitle: 'Your space to build a standout professional resume',
        headerBadge: 'ATS-friendly format', introKicker: 'Your next opportunity starts here',
        introTitle: 'Your career story, <span>at its best.</span>',
        introDescription: 'Add your information and watch your resume take shape instantly. Clean, polished, and ready to download and share.',
        introNoteTitle: 'Simple and organized', introNoteText: 'Complete only the sections that apply to you',
        formPanelTitle: 'Professional details', formPanelHint: 'Changes appear in the preview instantly',
        previewEyebrow: 'LIVE PREVIEW', previewTitle: 'Your resume', liveLabel: 'Updates automatically',
        previewFootnote: 'A clean resume layout designed to work well with Applicant Tracking Systems (ATS).',
        footerText: 'Built to help you present the best version of your professional journey.',
        lblPersonal: 'Personal Information', lblFullName: 'Full Name',
        lblEmail: 'Email Address', lblLinkedin: 'LinkedIn Profile', lblPhone: 'Phone Number', lblLocation: 'City, Country',
        lblSummaryTitle: 'Professional Summary', lblExpTitle: 'Work Experience', lblCompany: 'Company / Organization',
        lblExpRole: 'Job Title / Role', lblStartDate: 'Start Date', lblEndDate: 'End Date',
        lblPresent: 'I currently work here', lblExpDesc: 'Key Responsibilities & Achievements', lblEduTitle: 'Education',
        lblSchool: 'University / Educational Institution', lblDegree: 'Degree & Field of Study', lblGradDate: 'Graduation Date / Year',
        lblCompTitle: 'Core Competencies', lblSkillsTitle: 'Technical & Personal Skills',
        lblCertsTitle: 'Certifications & Courses', lblProjectsTitle: 'Projects & Achievements', lblLangTitle: 'Languages',
        headSummary: 'SUMMARY', headExp: 'WORK EXPERIENCE', headEdu: 'EDUCATION', headComp: 'CORE COMPETENCIES',
        headSkills: 'SKILLS', headCerts: 'CERTIFICATIONS & COURSES', headProjects: 'PROJECTS & ACHIEVEMENTS', headLang: 'LANGUAGES',
        presentText: 'Present', pdfBtn: '📥 Download PDF', wordBtn: '📝 Download Word',
        addExperience: '＋ Add Another Experience', addEducation: '＋ Add Education', remove: 'Remove',
        educationDate: 'Graduation year'
    }
};

function experienceCard(id) {
    const t = translations[currentLang];
    return `<fieldset class="repeat-card experience-card" data-experience-id="${id}">
        <legend>${currentLang === 'ar' ? 'خبرة عمل' : 'Work Experience'}</legend>
        <div class="form-group"><label>${t.lblCompany}</label><input type="text" data-field="company"></div>
        <div class="form-group"><label>${t.lblExpRole}</label><input type="text" data-field="role"></div>
        <div class="form-row">
            <div class="form-group"><label>${t.lblStartDate}</label><input type="text" data-field="start" placeholder="MM/YYYY"></div>
            <div class="form-group"><label>${t.lblEndDate}</label><input type="text" data-field="end" placeholder="MM/YYYY"></div>
        </div>
        <div class="form-group checkbox-group"><input type="checkbox" data-field="present"><label>${t.lblPresent}</label></div>
        <div class="form-group"><label>${t.lblExpDesc}</label><textarea data-field="description" rows="4"></textarea></div>
        <button type="button" class="remove-btn" onclick="removeCard(this, 'experienceForms')">${t.remove}</button>
    </fieldset>`;
}

function educationCard(id) {
    const t = translations[currentLang];
    return `<fieldset class="repeat-card education-card" data-education-id="${id}">
        <legend>${currentLang === 'ar' ? 'مؤهل تعليمي' : 'Education'}</legend>
        <div class="form-group"><label>${t.lblSchool}</label><input type="text" data-field="school"></div>
        <div class="form-group"><label>${t.lblDegree}</label><input type="text" data-field="degree"></div>
        <div class="form-group"><label>${t.educationDate}</label><input type="text" data-field="year" placeholder="YYYY"></div>
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
    currentLang = lang;
    const t = translations[lang];
    const root = document.getElementById('htmlRoot');
    root.setAttribute('lang', lang);
    root.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    const cvPreview = document.getElementById('cvPreview');
    cvPreview.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    cvPreview.style.textAlign = lang === 'ar' ? 'right' : 'left';
    document.getElementById('btnAr').classList.toggle('active-lang', lang === 'ar');
    document.getElementById('btnEn').classList.toggle('active-lang', lang === 'en');
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

    const labelIds = [
        'lblPersonal','lblFullName','lblEmail','lblLinkedin','lblPhone','lblLocation',
        'lblSummaryTitle','lblExpTitle','lblEduTitle','lblCompTitle','lblSkillsTitle','lblCertsTitle','lblProjectsTitle','lblLangTitle',
        'headSummary','headExp','headEdu','headComp','headSkills','headCerts','headProjects','headLang'
    ];
    labelIds.forEach(id => { document.getElementById(id).innerText = t[id]; });
    document.getElementById('addExperienceBtn').innerHTML = `<span aria-hidden="true">＋</span> ${t.addExperience}`;
    document.getElementById('addEducationBtn').innerHTML = `<span aria-hidden="true">＋</span> ${t.addEducation}`;
    document.getElementById('downloadPdfBtn').innerHTML = `<span aria-hidden="true">↓</span> ${t.pdfBtn.replace(/^📥\s*/, '')}`;
    document.getElementById('downloadWordBtn').innerHTML = `<span aria-hidden="true">▤</span> ${t.wordBtn.replace(/^📝\s*/, '')}`;

    // إعادة بناء بطاقات الإدخال مع المحافظة على البيانات عند تبديل اللغة.
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

function getExportStyles() {
    const rtl = currentLang === 'ar';
    return `
        @page { size: A4; margin: 16mm; }
        * { box-sizing: border-box; }
        body { margin: 0; color: #000; font-family: Arial, 'Cairo', sans-serif; direction: ${rtl ? 'rtl' : 'ltr'}; }
        #cvPreview { width: 100%; color: #000; direction: ${rtl ? 'rtl' : 'ltr'}; text-align: ${rtl ? 'right' : 'left'}; }
        .ats-header { margin-bottom: 18px; }
        .ats-header h1 { font-size: 22pt; margin: 0 0 4px; }
        .ats-subtitle { font-size: 11pt; font-weight: bold; margin-bottom: 6px; }
        .ats-contact > div { font-size: 9pt; margin: 2px 0; }
        .ats-single-column { display: block; }
        .ats-section { display: block; margin: 0 0 14px; }
        .ats-section h2 { font-size: 10.5pt; border-bottom: 1px solid #000; padding-bottom: 2px; margin: 0 0 6px; break-after: avoid; page-break-after: avoid; }
        .ats-section p, .ats-formatted-text, .ats-section ul { font-size: 9.5pt; line-height: 1.4; margin: 0; }
        .cv-entry { display: block; margin: 0 0 10px; break-inside: avoid; page-break-inside: avoid; }
        .bold-text { display: block; font-size: 10pt; font-weight: bold; margin-bottom: 2px; }
        .date-text, .subbold-text { display: block; font-size: 9pt; margin: 2px 0; }
        ul { padding-inline-start: 20px; }
        .text-bullet { margin-inline-start: 14px; }
    `;
}

function exportToPDF() {
    updateCV();
    // نافذة مستقلة للطباعة تمنع طباعة حقول الإدخال وتنسّق الصفحات تلقائيًا.
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
        window.print();
        return;
    }
    const title = currentLang === 'ar' ? 'السيرة الذاتية' : 'Resume';
    const content = document.getElementById('cvPreview').outerHTML;
    printWindow.document.open();
    printWindow.document.write(`<!DOCTYPE html><html lang="${currentLang}" dir="${currentLang === 'ar' ? 'rtl' : 'ltr'}"><head><meta charset="UTF-8"><title>${title}</title><style>${getExportStyles()}</style></head><body>${content}<script>window.onload=function(){setTimeout(function(){window.focus();window.print();},250)};window.onafterprint=function(){window.close()};<\/script></body></html>`);
    printWindow.document.close();
}

function exportToWord() {
    updateCV();
    const isArabic = currentLang === 'ar';
    const title = isArabic ? 'السيرة الذاتية' : 'Resume';
    const filename = isArabic ? 'السيرة-الذاتية.doc' : 'Resume.doc';
    const html = `<!DOCTYPE html><html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" lang="${currentLang}" dir="${isArabic ? 'rtl' : 'ltr'}"><head><meta charset="utf-8"><title>${title}</title><style>${getExportStyles()} body{margin:16mm;} </style></head><body>${document.getElementById('cvPreview').outerHTML}</body></html>`;
    const blob = new Blob(['\ufeff', html], { type: 'application/msword;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
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
    setLanguage('ar');
});
