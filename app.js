let currentLang = 'ar';
let expCount = 0;
let eduCount = 0;

const translations = {
    ar: {
        lblPersonal: 'البيانات الشخصية',
        lblFullName: 'الاسم الكامل',
        lblJobTitle: 'المسمى الوظيفي',
        lblEmail: 'البريد الإلكتروني',
        lblLinkedin: 'رابط LinkedIn',
        lblPhone: 'الهاتف',
        lblLocation: 'المدينة والبلد',
        lblSummaryTitle: 'الملخص المهني',
        lblExpTitle: 'الخبرة العملية',
        btnAddExp: '+ إضافة خبرة أخرى',
        lblCompany: 'جهة العمل / الشركة',
        lblExpRole: 'المسمى الوظيفي',
        lblStartDate: 'تاريخ البدء',
        lblEndDate: 'تاريخ الانتهاء',
        lblPresent: 'ما زلت أعمل هنا',
        lblExpDesc: 'المهام والإنجازات',
        lblEduTitle: 'التعليم والتأهيل',
        btnAddEdu: '+ إضافة مؤهل آخر',
        lblSchool: 'المكان / الجامعة / المؤسسة',
        lblDegree: 'الشهادة والتخصص',
        lblGradDate: 'تاريخ الحصول على الشهادة',
        lblCompTitle: 'الكفاءات الأساسية',
        lblSkillsTitle: 'المهارات التقنية والشخصية',
        lblCertsTitle: 'الشهادات المهنية والدورات',
        lblProjectsTitle: 'المشاريع / الإنجازات',
        lblLangTitle: 'اللغات',
        headSummary: 'الملخص المهني',
        headExp: 'الخبرات العملية',
        headEdu: 'التعليم',
        headComp: 'الكفاءات الأساسية',
        headSkills: 'المهارات',
        headCerts: 'الشهادات المهنية والدورات',
        headProjects: 'المشاريع والإنجازات',
        headLang: 'اللغات',
        presentText: 'حتى الآن',
        btnDelete: 'حذف',
        pdfBtn: '📥 تحميل PDF',
        wordBtn: '📝 تحميل Word'
    },
    en: {
        lblPersonal: 'Personal Information',
        lblFullName: 'Full Name',
        lblJobTitle: 'Target Job Title',
        lblEmail: 'Email Address',
        lblLinkedin: 'LinkedIn Profile',
        lblPhone: 'Phone Number',
        lblLocation: 'City, Country',
        lblSummaryTitle: 'Professional Summary',
        lblExpTitle: 'Work Experience',
        btnAddExp: '+ Add Experience',
        lblCompany: 'Company / Organization',
        lblExpRole: 'Job Title / Role',
        lblStartDate: 'Start Date',
        lblEndDate: 'End Date',
        lblPresent: 'I currently work here',
        lblExpDesc: 'Key Responsibilities & Achievements',
        lblEduTitle: 'Education',
        btnAddEdu: '+ Add Education',
        lblSchool: 'University / Institution',
        lblDegree: 'Degree & Field of Study',
        lblGradDate: 'Graduation Year',
        lblCompTitle: 'Core Competencies',
        lblSkillsTitle: 'Technical & Personal Skills',
        lblCertsTitle: 'Certifications & Courses',
        lblProjectsTitle: 'Projects & Achievements',
        lblLangTitle: 'Languages',
        headSummary: 'SUMMARY',
        headExp: 'WORK EXPERIENCE',
        headEdu: 'EDUCATION',
        headComp: 'CORE COMPETENCIES',
        headSkills: 'SKILLS',
        headCerts: 'CERTIFICATIONS',
        headProjects: 'PROJECTS',
        headLang: 'LANGUAGES',
        presentText: 'Present',
        btnDelete: 'Delete',
        pdfBtn: '📥 Download PDF',
        wordBtn: '📝 Download Word'
    }
};

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

    // العناوين
    document.getElementById('lblPersonal').innerText = t.lblPersonal;
    document.getElementById('lblFullName').innerText = t.lblFullName;
    document.getElementById('lblJobTitle').innerText = t.lblJobTitle;
    document.getElementById('lblEmail').innerText = t.lblEmail;
    document.getElementById('lblLinkedin').innerText = t.lblLinkedin;
    document.getElementById('lblPhone').innerText = t.lblPhone;
    document.getElementById('lblLocation').innerText = t.lblLocation;
    document.getElementById('lblSummaryTitle').innerText = t.lblSummaryTitle;
    document.getElementById('lblExpTitle').innerText = t.lblExpTitle;
    document.getElementById('btnAddExp').innerText = t.btnAddExp;
    document.getElementById('lblEduTitle').innerText = t.lblEduTitle;
    document.getElementById('btnAddEdu').innerText = t.btnAddEdu;
    document.getElementById('lblCompTitle').innerText = t.lblCompTitle;
    document.getElementById('lblSkillsTitle').innerText = t.lblSkillsTitle;
    document.getElementById('lblCertsTitle').innerText = t.lblCertsTitle;
    document.getElementById('lblProjectsTitle').innerText = t.lblProjectsTitle;
    document.getElementById('lblLangTitle').innerText = t.lblLangTitle;

    document.getElementById('headSummary').innerText = t.headSummary;
    document.getElementById('headExp').innerText = t.headExp;
    document.getElementById('headEdu').innerText = t.headEdu;
    document.getElementById('headComp').innerText = t.headComp;
    document.getElementById('headSkills').innerText = t.headSkills;
    document.getElementById('headCerts').innerText = t.headCerts;
    document.getElementById('headProjects').innerText = t.headProjects;
    document.getElementById('headLang').innerText = t.headLang;

    document.getElementById('downloadPdfBtn').innerText = t.pdfBtn;
    document.getElementById('downloadWordBtn').innerText = t.wordBtn;

    updateCV();
}

// دالة إضافة خبرة جديدة
function addExperienceGroup() {
    expCount++;
    const t = translations[currentLang];
    const container = document.getElementById('experienceContainer');
    const div = document.createElement('div');
    div.className = 'dynamic-card';
    div.id = `expCard_${expCount}`;
    
    div.innerHTML = `
        <button type="button" class="remove-card-btn" onclick="removeCard('expCard_${expCount}')">${t.btnDelete}</button>
        <div class="form-group"><label>${t.lblCompany}</label><input type="text" class="expCompany" oninput="updateCV()"></div>
        <div class="form-group"><label>${t.lblExpRole}</label><input type="text" class="expRole" oninput="updateCV()"></div>
        <div class="form-row">
            <div class="form-group"><label>${t.lblStartDate}</label><input type="text" class="expStartDate" placeholder="MM/YYYY" oninput="updateCV()"></div>
            <div class="form-group"><label>${t.lblEndDate}</label><input type="text" class="expEndDate" placeholder="MM/YYYY" oninput="updateCV()"></div>
        </div>
        <div class="form-group checkbox-group">
            <input type="checkbox" class="expPresent" id="chkPresent_${expCount}" onchange="togglePresentWork(this)">
            <label for="chkPresent_${expCount}">${t.lblPresent}</label>
        </div>
        <div class="form-group"><label>${t.lblExpDesc}</label><textarea class="expDesc" rows="3" oninput="updateCV()"></textarea></div>
    `;
    container.appendChild(div);
    updateCV();
}

// دالة إضافة تعليم جديد
function addEducationGroup() {
    eduCount++;
    const t = translations[currentLang];
    const container = document.getElementById('educationContainer');
    const div = document.createElement('div');
    div.className = 'dynamic-card';
    div.id = `eduCard_${eduCount}`;
    
    div.innerHTML = `
        <button type="button" class="remove-card-btn" onclick="removeCard('eduCard_${eduCount}')">${t.btnDelete}</button>
        <div class="form-group"><label>${t.lblSchool}</label><input type="text" class="eduSchool" oninput="updateCV()"></div>
        <div class="form-group"><label>${t.lblDegree}</label><input type="text" class="eduDegree" oninput="updateCV()"></div>
        <div class="form-group"><label>${t.lblGradDate}</label><input type="text" class="eduGradDate" placeholder="YYYY" oninput="updateCV()"></div>
    `;
    container.appendChild(div);
    updateCV();
}

function removeCard(cardId) {
    const card = document.getElementById(cardId);
    if (card) {
        card.remove();
        updateCV();
    }
}

function togglePresentWork(checkbox) {
    const card = checkbox.closest('.dynamic-card');
    const endDateInput = card.querySelector('.expEndDate');
    if (checkbox.checked) {
        endDateInput.value = '';
        endDateInput.disabled = true;
    } else {
        endDateInput.disabled = false;
    }
    updateCV();
}

function updateCV() {
    const t = translations[currentLang];

    const fullName = document.getElementById('fullName').value.trim();
    const jobTitle = document.getElementById('jobTitle').value.trim();
    const email = document.getElementById('email').value.trim();
    const linkedin = document.getElementById('linkedin').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const location = document.getElementById('location').value.trim();

    document.getElementById('cvName').innerText = fullName;
    document.getElementById('cvJobTitle').innerText = jobTitle;

    const contacts = [email, linkedin, phone, location].filter(item => item !== '');
    document.getElementById('cvContactBar').innerText = contacts.join(' • ');

    // 1. الملخص المهني
    const summary = document.getElementById('summary').value.trim();
    toggleSection('secSummary', summary, () => {
        document.getElementById('cvSummary').innerText = summary;
    });

    // 2. تجميع الخبرات العملية المتعددة
    const expCards = document.querySelectorAll('#experienceContainer .dynamic-card');
    const expListContainer = document.getElementById('cvExperienceList');
    expListContainer.innerHTML = '';
    let hasAnyExp = false;

    expCards.forEach(card => {
        const role = card.querySelector('.expRole').value.trim();
        const company = card.querySelector('.expCompany').value.trim();
        const startDate = card.querySelector('.expStartDate').value.trim();
        const isPresent = card.querySelector('.expPresent').checked;
        const endDate = isPresent ? t.presentText : card.querySelector('.expEndDate').value.trim();
        const desc = card.querySelector('.expDesc').value.trim();

        if (role || company || desc) {
            hasAnyExp = true;
            let dateStr = '';
            if (startDate && endDate) dateStr = `${startDate} - ${endDate}`;
            else if (startDate) dateStr = startDate;

            const itemDiv = document.createElement('div');
            itemDiv.className = 'ats-item';
            itemDiv.innerHTML = `
                <div class="ats-item-header">
                    <span class="bold-text">${role}</span>
                    <span class="date-text">${dateStr}</span>
                </div>
                <div class="subbold-text">${company}</div>
                <div class="ats-formatted-text">${formatText(desc)}</div>
            `;
            expListContainer.appendChild(itemDiv);
        }
    });
    toggleSection('secExp', hasAnyExp, () => {});

    // 3. تجميع مؤهلات التعليم المتعددة
    const eduCards = document.querySelectorAll('#educationContainer .dynamic-card');
    const eduListContainer = document.getElementById('cvEducationList');
    eduListContainer.innerHTML = '';
    let hasAnyEdu = false;

    eduCards.forEach(card => {
        const school = card.querySelector('.eduSchool').value.trim();
        const degree = card.querySelector('.eduDegree').value.trim();
        const gradDate = card.querySelector('.eduGradDate').value.trim();

        if (school || degree) {
            hasAnyEdu = true;
            const itemDiv = document.createElement('div');
            itemDiv.className = 'ats-item';
            itemDiv.innerHTML = `
                <div class="ats-item-header">
                    <span class="bold-text">${degree}</span>
                    <span class="date-text">${gradDate}</span>
                </div>
                <div class="subbold-text">${school}</div>
            `;
            eduListContainer.appendChild(itemDiv);
        }
    });
    toggleSection('secEdu', hasAnyEdu, () => {});

    // 4. الكفاءات
    const compText = document.getElementById('competencies').value.trim();
    toggleSection('secComp', compText, () => {
        document.getElementById('cvCompetencies').innerHTML = formatText(compText);
    });

    // 5. المهارات
    const skillsText = document.getElementById('skills').value.trim();
    toggleSection('secSkills', skillsText, () => {
        const skillsList = document.getElementById('cvSkills');
        skillsList.innerHTML = '';
        skillsText.split('\n').forEach(skill => {
            if (skill.trim()) {
                const li = document.createElement('li');
                li.innerText = skill.trim();
                skillsList.appendChild(li);
            }
        });
    });

    // 6. الشهادات
    const certsText = document.getElementById('certifications').value.trim();
    toggleSection('secCerts', certsText, () => {
        document.getElementById('cvCertifications').innerHTML = formatText(certsText);
    });

    // 7. المشاريع
    const projText = document.getElementById('projects').value.trim();
    toggleSection('secProjects', projText, () => {
        document.getElementById('cvProjects').innerHTML = formatText(projText);
    });

    // 8. اللغات
    const langText = document.getElementById('languages').value.trim();
    toggleSection('secLang', langText, () => {
        document.getElementById('cvLanguages').innerHTML = formatText(langText);
    });
}

function toggleSection(sectionId, condition, callback) {
    const sec = document.getElementById(sectionId);
    if (condition) {
        sec.style.display = 'block';
        if (callback) callback();
    } else {
        sec.style.display = 'none';
    }
}

function formatText(text) {
    if (!text) return '';
    return text.split('\n').map(line => {
        if (line.trim().startsWith('•') || line.trim().startsWith('-')) {
            return `<li>${line.replace(/^[•-]\s*/, '')}</li>`;
        }
        return `<div>${line}</div>`;
    }).join('');
}

function exportToWord() {
    const cvHtml = document.getElementById('cvPreview').outerHTML;
    const isRtl = currentLang === 'ar';
    
    const header = `<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
    <head><meta charset='utf-8'><title>Export Word</title>
    <style>
        body { font-family: Arial, sans-serif; direction: ${isRtl ? 'rtl' : 'ltr'}; }
        h1 { font-size: 20pt; text-align: ${isRtl ? 'right' : 'left'}; }
        h2 { font-size: 11pt; border-bottom: 1px solid #000; text-align: ${isRtl ? 'right' : 'left'}; }
        .ats-item-header { display: flex; justify-content: space-between; }
        p, div, li { font-size: 9.5pt; text-align: ${isRtl ? 'right' : 'left'}; }
    </style>
    </head><body>`;
    const footer = "</body></html>";
    const sourceHTML = header + cvHtml + footer;

    const source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
    const fileDownload = document.createElement("a");
    document.body.appendChild(fileDownload);
    fileDownload.href = source;
    fileDownload.download = isRtl ? 'السيرة-الذاتية.doc' : 'Resume.doc';
    fileDownload.click();
    document.body.removeChild(fileDownload);
}

// التشغيل الافتراضي مع إضافة أول بطاقة خبرة وتعليم تلقائياً
window.onload = () => {
    setLanguage('ar');
    addExperienceGroup();
    addEducationGroup();
};
