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
        defaultName: 'الاسم الكامل',
        defaultTitle: 'المسمى الوظيفي',
        pdfBtn: 'تحميل PDF',
        wordBtn: 'تحميل Word'
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
        defaultName: 'FULL NAME',
        defaultTitle: 'Target Job Title',
        pdfBtn: 'Download PDF',
        wordBtn: 'Download Word'
    }
};

function setLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];
    
    document.getElementById('htmlRoot').setAttribute('lang', lang);
    document.getElementById('htmlRoot').setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    
    // تبديل التفعيل للأزرار
    document.getElementById('btnAr').classList.toggle('active-lang', lang === 'ar');
    document.getElementById('btnEn').classList.toggle('active-lang', lang === 'en');

    // تحديث العناوين في النموذج
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

    document.getElementById('headSummary').innerText = t.headSummary;
    document.getElementById('headExp').innerText = t.headExp;
    document.getElementById('headSkills').innerText = t.headSkills;
    document.getElementById('headEdu').innerText = t.headEdu;

    document.getElementById('downloadPdfBtn').innerText = t.pdfBtn;
    document.getElementById('downloadWordBtn').innerText = t.wordBtn;

    updateCV();
}

function updateCV() {
    const t = translations[currentLang];
    
    document.getElementById('cvName').innerText = document.getElementById('fullName').value || t.defaultName;
    document.getElementById('cvJobTitle').innerText = document.getElementById('jobTitle').value || t.defaultTitle;
    document.getElementById('cvEmail').innerText = document.getElementById('email').value || 'email@example.com';
    document.getElementById('cvLinkedin').innerText = document.getElementById('linkedin').value || 'linkedin.com/in/username';
    document.getElementById('cvPhone').innerText = document.getElementById('phone').value || '+123456789';
    document.getElementById('cvLocation').innerText = document.getElementById('location').value || 'City, Country';
    document.getElementById('cvSummary').innerText = document.getElementById('summary').value || '...';

    document.getElementById('cvExperience').innerHTML = formatText(document.getElementById('experience').value);
    document.getElementById('cvEducation').innerHTML = formatText(document.getElementById('education').value);

    const skillsText = document.getElementById('skills').value;
    const skillsList = document.getElementById('cvSkills');
    skillsList.innerHTML = '';
    if (skillsText.trim()) {
        skillsText.split('\n').forEach(skill => {
            if (skill.trim()) {
                const li = document.createElement('li');
                li.innerText = skill.trim();
                skillsList.appendChild(li);
            }
        });
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

// وظيفة تصدير ملف Word (.docx)
function exportToWord() {
    const cvHtml = document.getElementById('cvPreview').innerHTML;
    const htmlContent = `<!DOCTYPE html><html><head><meta charset="utf-8"></head><body>${cvHtml}</body></html>`;
    
    const converted = htmlDocx.asBlob(htmlContent);
    const url = URL.createObjectURL(converted);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'CV-ATS.docx';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

window.onload = () => setLanguage('ar');
