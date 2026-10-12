let currentLang = 'ar';

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
        lblCompany: 'جهة العمل / الشركة',
        lblExpRole: 'المسمى الوظيفي',
        lblStartDate: 'تاريخ البدء',
        lblEndDate: 'تاريخ الانتهاء',
        lblPresent: 'ما زلت أعمل هنا',
        lblExpDesc: 'المهام والإنجازات',
        lblEduTitle: 'التعليم والتأهيل',
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
        lblCompany: 'Company / Organization',
        lblExpRole: 'Job Title / Role',
        lblStartDate: 'Start Date',
        lblEndDate: 'End Date',
        lblPresent: 'I currently work here',
        lblExpDesc: 'Key Responsibilities & Achievements',
        lblEduTitle: 'Education',
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
    document.getElementById('lblCompany').innerText = t.lblCompany;
    document.getElementById('lblExpRole').innerText = t.lblExpRole;
    document.getElementById('lblStartDate').innerText = t.lblStartDate;
    document.getElementById('lblEndDate').innerText = t.lblEndDate;
    document.getElementById('lblPresent').innerText = t.lblPresent;
    document.getElementById('lblExpDesc').innerText = t.lblExpDesc;
    document.getElementById('lblEduTitle').innerText = t.lblEduTitle;
    document.getElementById('lblSchool').innerText = t.lblSchool;
    document.getElementById('lblDegree').innerText = t.lblDegree;
    document.getElementById('lblGradDate').innerText = t.lblGradDate;
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

function togglePresentWork(checkbox) {
    const endDateInput = document.getElementById('expEndDate');
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

    // 2. الخبرات العملية
    const expRole = document.getElementById('expRole').value.trim();
    const expCompany = document.getElementById('expCompany').value.trim();
    const expStartDate = document.getElementById('expStartDate').value.trim();
    const isPresent = document.getElementById('expPresent').checked;
    const expEndDate = isPresent ? t.presentText : document.getElementById('expEndDate').value.trim();
    const expDesc = document.getElementById('expDesc').value.trim();

    const hasExp = expRole || expCompany || expDesc;
    toggleSection('secExp', hasExp, () => {
        document.getElementById('cvExpRole').innerText = expRole;
        document.getElementById('cvExpCompany').innerText = expCompany;
        
        let dateStr = '';
        if (expStartDate && expEndDate) dateStr = `${expStartDate} - ${expEndDate}`;
        else if (expStartDate) dateStr = expStartDate;
        document.getElementById('cvExpDates').innerText = dateStr;

        document.getElementById('cvExpDesc').innerHTML = formatText(expDesc);
    });

    // 3. التعليم
    const eduSchool = document.getElementById('eduSchool').value.trim();
    const eduDegree = document.getElementById('eduDegree').value.trim();
    const eduGradDate = document.getElementById('eduGradDate').value.trim();

    const hasEdu = eduSchool || eduDegree;
    toggleSection('secEdu', hasEdu, () => {
        document.getElementById('cvEduDegree').innerText = eduDegree;
        document.getElementById('cvEduSchool').innerText = eduSchool;
        document.getElementById('cvEduDate').innerText = eduGradDate;
    });

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
        callback();
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

// حل مشكلة تصدير ملف Word بوظيفة مدمجة عالية التوافق
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

window.onload = () => setLanguage('ar');
