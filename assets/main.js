/* File: /assets/main.js */
/* Minimal client-side behavior: form validation, honeypot, and local submission handling. */
document.addEventListener('DOMContentLoaded',()=>{

  // Contact form handling (client-side only; replace with backend endpoint)
  const form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit', e=>{
      e.preventDefault();
      const honeypot = form.querySelector('input[name="hp"]').value;
      if(honeypot){ // spam suspected
        return showMessage('Spam detected — submission ignored.', true);
      }
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
      if(!name || !email || !message){
        return showMessage('Please complete all fields.', true);
      }
      if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        return showMessage('Please enter a valid email address.', true);
      }
      // Simulate success (user should wire to server or service like Formspree, Netlify Forms, or an API)
      form.reset();
      showMessage('Thanks — your message was received. We will reply within 2 business days.');
    });
  }

  function showMessage(text, isError=false){
    let el = document.getElementById('contact-msg');
    if(!el){
      el = document.createElement('div');
      el.id = 'contact-msg';
      el.className = 'card section';
      document.getElementById('contact-main')?.prepend(el);
    }
    el.textContent = text;
    el.style.color = isError ? '#ffb4ab' : 'lightgreen';
  }

});
