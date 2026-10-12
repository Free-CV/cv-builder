function updateCV() {
    document.getElementById('cvName').innerText = document.getElementById('fullName').value || 'ALEX MORGAN';
    document.getElementById('cvJobTitle').innerText = document.getElementById('jobTitle').value || '';
    document.getElementById('cvEmail').innerText = document.getElementById('email').value || '';
    document.getElementById('cvLinkedin').innerText = document.getElementById('linkedin').value || '';
    document.getElementById('cvPhone').innerText = document.getElementById('phone').value || '';
    document.getElementById('cvLocation').innerText = document.getElementById('location').value || '';
    document.getElementById('cvSummary').innerText = document.getElementById('summary').value || '';

    // تنسيق الخبرات والتعليم
    document.getElementById('cvExperience').innerHTML = formatText(document.getElementById('experience').value);
    document.getElementById('cvEducation').innerHTML = formatText(document.getElementById('education').value);

    // تنسيق القائمة للمهارات
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
            return `<li style="margin-left: 15px;">${line.replace(/^[•-]\s*/, '')}</li>`;
        }
        return `<div>${line}</div>`;
    }).join('');
}

// تشغيل التحديث فور تحميل الصفحة
window.onload = updateCV;
