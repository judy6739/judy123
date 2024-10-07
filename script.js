// إضافة تأثيرات تفاعلية عند تمرير الماوس
document.addEventListener("DOMContentLoaded", function() {
    let skills = document.querySelectorAll("ul li");
    skills.forEach(skill => {
        skill.addEventListener("mouseover", function() {
            skill.style.transform = "scale(1.05)";
            skill.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
        });
        skill.addEventListener("mouseout", function() {
            skill.style.transform = "scale(1)";
            skill.style.boxShadow = "none";
        });
    });
});
