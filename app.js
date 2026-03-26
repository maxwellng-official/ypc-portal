/* ================================================
   NAVIGATION
   ================================================ */

function goTo(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(screenId).classList.add('active');
  window.scrollTo(0, 0);
}


/* ================================================
   LIVE CLOCK
   ================================================ */

function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  document.querySelectorAll('.js-clock').forEach(el => el.textContent = time);
}

updateClock();
setInterval(updateClock, 10000);


/* ================================================
   DAY TAB SWITCHING (Schedule page)
   ================================================ */

document.querySelectorAll('.day-tab').forEach(tab => {
  tab.addEventListener('click', function () {
    document.querySelectorAll('.day-tab').forEach(t => t.classList.remove('active'));
    this.classList.add('active');
  });
});
