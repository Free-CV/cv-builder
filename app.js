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
        lblExpTitle: 'الخبرات العملية',
        lblSkillsTitle: 'المهارات',
        lblEduTitle: 'التعليم',
        headSummary: 'الملخص المهني',
        headExp: 'الخبرات العملية',
        headSkills: 'المهارات',
        headEdu: 'التعليم',
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
        lblSkillsTitle: 'Skills',
        lblEduTitle: 'Education',
        headSummary: 'SUMMARY',
        headExp: 'WORK EXPERIENCE',
        headSkills: 'SKILLS',
        headEdu: 'EDUCATION',
        pdfBtn: '📥 Download PDF',
        wordBtn: '📝 Download Word'
    }
};

function setLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];
    
    // ضبط اتجاه المستند واللغة
    const root = document.getElementById('htmlRoot');
    root.setAttribute('lang', lang);
    root.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    
    const cvPreview = document.getElementById('cvPreview');
    cvPreview.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    cvPreview.style.textAlign = lang === 'ar' ? 'right' : 'left';

    // تحديث حالة الأزرار
    document.getElementById('btnAr').classList.toggle('active-lang', lang === 'ar');
    document.getElementById('btnEn').classList.toggle('active-lang', lang === 'en');

    // تحديث العناوين للنموذج
    document.getElementById('lblPersonal').innerText = t.lblPersonal;
    document.getElementById('lblFullName').innerText = t.lblFullName;
    document.getElementById('lblJobTitle').innerText = t.lblJobTitle;
    document.getElementById('lblEmail').innerText = t.lblEmail;
    document.getElementById('lblLinkedin').innerText = t.lblLinkedin;
    document.getElementById('lblPhone').innerText = t.lblPhone;
    document.getElementById('lblLocation').innerText = t.lblLocation;
    document.getElementById('lblSummaryTitle').innerText = t.lblSummaryTitle;
    document.getElementById('lblExpTitle').innerText = t.lblExpTitle;
    document.getElementById('lblSkillsTitle').innerText = t.lblSkillsTitle;
    document.getElementById('lblEduTitle').innerText = t.lblEduTitle;

    // تحديث عناوين المعاينة
    document.getElementById('headSummary').innerText = t.headSummary;
    document.getElementById('headExp').innerText = t.headExp;
    document.getElementById('headSkills').innerText = t.headSkills;
    document.getElementById('headEdu').innerText = t.headEdu;

    document.getElementById('downloadPdfBtn').innerText = t.pdfBtn;
    document.getElementById('downloadWordBtn').innerText = t.wordBtn;

    updateCV();
}

function updateCV() {
    const fullName = document.getElementById('fullName').value.trim();
    const jobTitle = document.getElementById('jobTitle').value.trim();
    const email = document.getElementById('email').value.trim();
    const linkedin = document.getElementById('linkedin').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const location = document.getElementById('location').value.trim();
    const summary = document.getElementById('summary').value.trim();
    const experience = document.getElementById('experience').value.trim();
    const skillsText = document.getElementById('skills').value.trim();
    const education = document.getElementById('education').value.trim();

    // تحديث الترويسة
    document.getElementById('cvName').innerText = fullName;
    document.getElementById('cvJobTitle').innerText = jobTitle;

    // تجميع بياتات الاتصال بفواصل
    const contacts = [email, linkedin, phone, location].filter(item => item !== '');
    document.getElementById('cvContactBar').innerText = contacts.join(' • ');

    // تحديث الأقسام وإخفاء العناوين الفارغة
    toggleSection('secSummary', summary, () => {
        document.getElementById('cvSummary').innerText = summary;
    });

    toggleSection('secExp', experience, () => {
        document.getElementById('cvExperience').innerHTML = formatText(experience);
    });

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

    toggleSection('secEdu', education, () => {
        document.getElementById('cvEducation').innerHTML = formatText(education);
    });
}

function toggleSection(sectionId, value, callback) {
    const sec = document.getElementById(sectionId);
    if (value) {
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

function exportToWord() {
    const cvHtml = document.getElementById('cvPreview').innerHTML;
    const isRtl = currentLang === 'ar';
    const htmlContent = `
        <!DOCTYPE html>
        <html dir="${isRtl ? 'rtl' : 'ltr'}">
        <head>
            <meta charset="utf-8">
            <style>
                body { font-family: Arial, sans-serif; }
                h1 { font-size: 20pt; }
                h2 { font-size: 11pt; border-bottom: 1px solid #000; }
                p, div, li { font-size: 9.5pt; }
            </style>
        </head>
        <body>${cvHtml}</body>
        </html>
    `;
    
    const converted = htmlDocx.asBlob(htmlContent);
    const url = URL.createObjectURL(converted);
    const a = document.createElement('a');
    a.href = url;
    a.download = isRtl ? 'السيرة-الذاتية.docx' : 'CV-ATS.docx';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

// التشغيل الافتراضي عند الفتح
window.onload = () => setLanguage('ar');
