const row = document.getElementById('poster-row');
document.getElementById('prev').addEventListener('click', () => {
  row.scrollBy({ left: -row.clientWidth * 0.8, behavior: 'smooth' });
});
document.getElementById('next').addEventListener('click', () => {
  row.scrollBy({ left: row.clientWidth * 0.8, behavior: 'smooth' });
});

document.getElementById('email-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('form-message');
  if (email) {
    message.textContent = 'Thanks! This demo form is working locally, but does not submit or store your email.';
  }
});
