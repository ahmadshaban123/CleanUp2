const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');
if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
}

function sendToWhatsApp(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const message = [
    'שלום, התקבלה פנייה חדשה מאתר CleanUp:',
    '',
    `שם: ${data.get('name') || ''}`,
    `אימייל: ${data.get('email') || ''}`,
    `טלפון: ${data.get('phone') || ''}`,
    `מה תרצו לנקות: ${data.get('service') || ''}`
  ].join('\n');
  const url = `https://wa.me/972523006931?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}
