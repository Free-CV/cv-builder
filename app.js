function updateCV() {
    // جلب القيم من حقول الإدخال
    const fullName = document.getElementById('fullName').value;
    const jobTitle = document.getElementById('jobTitle').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const summary = document.getElementById('summary').value;

    // تحديث عناصر المعاينة، وفي حال فراغها يتم إظهار نص افتراضي
    document.getElementById('cvName').innerText = fullName || 'الاسم الكامل';
    document.getElementById('cvJobTitle').innerText = jobTitle || 'المسمى الوظيفي';
    document.getElementById('cvEmail').innerText = email || 'email@example.com';
    document.getElementById('cvPhone').innerText = phone || '+966 50 000 0000';
    document.getElementById('cvSummary').innerText = summary || 'اكتب نبذة مختصرة عن خبراتك هنا لتظهر معاينة مباشرة...';
}
