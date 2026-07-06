const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('is-visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// AI査定リンクを押す前に、担当者識別の注意を表示
const aiLinks = document.querySelectorAll('a[href*="aisatei.com"]');
aiLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const ok = confirm('AI査定をご利用の際は、お名前の後ろに「（キタムラ）」と入力してください。\n\n例：山田 太郎（キタムラ）\n\nAI査定へ進みますか？');
    if (!ok) event.preventDefault();
  });
});
