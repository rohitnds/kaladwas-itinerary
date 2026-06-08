/* ── SCROLL REVEAL ── */
const revEls = document.querySelectorAll('.reveal,.reveal-l,.reveal-r');
const revObs = new IntersectionObserver(entries => {
  entries.forEach((e,i) => {
    if(e.isIntersecting){ setTimeout(()=>e.target.classList.add('on'), i*80); revObs.unobserve(e.target); }
  });
},{threshold:0.1});
revEls.forEach(el => revObs.observe(el));

/* ── QUICK ITINERARY — day tabs ── */
function switchItinDay(dayId, btn){
  document.querySelectorAll('.itin-day').forEach(d=>d.classList.remove('active'));
  document.querySelectorAll('.itin-tab-btn').forEach(b=>b.classList.remove('active'));
  document.getElementById(dayId).classList.add('active');
  btn.classList.add('active');
}

/* ── QUICK ITINERARY — stop buttons ── */
function switchItinStop(panelId, btn, dayId){
  const day = document.getElementById(dayId);
  day.querySelectorAll('.itin-stop-btn').forEach(b=>b.classList.remove('active'));
  day.querySelectorAll('.itin-panel').forEach(p=>p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(panelId).classList.add('active');
}

/* ── DETAILED ITINERARY — day tabs ── */
function switchDetailDay(dayId, btn){
  document.querySelectorAll('.detail-day-panel').forEach(d=>d.classList.remove('active'));
  document.querySelectorAll('.detail-day-btn').forEach(b=>b.classList.remove('active'));
  document.getElementById(dayId).classList.add('active');
  btn.classList.add('active');
}

/* ── DETAILED ITINERARY — SCROLL-TRIGGERED STICKY PANEL ──
   The sticky left panel (time + location) updates ONLY when the
   corresponding entry's top edge crosses the midpoint of the viewport.
   Uses IntersectionObserver with rootMargin to trigger at the right moment.
*/
function setupDetailScroll(entriesId, timeId, ampmId, locId) {
  const container = document.getElementById(entriesId);
  if (!container) return;
  const timeEl = document.getElementById(timeId);
  const ampmEl = document.getElementById(ampmId);
  const locEl  = document.getElementById(locId);
  const entries = container.querySelectorAll('.detail-entry');

  // Use a scroll listener for precise sticky panel update
  // Track which entry is "in view" by checking element positions vs viewport
  function updateSticky() {
    const viewportMid = window.innerHeight * 0.38; // 38% from top = trigger zone
    let activeEntry = null;

    entries.forEach(entry => {
      entry.classList.remove('is-active');
      const rect = entry.getBoundingClientRect();
      // Entry is "active" when its top is above the trigger line
      // and its bottom hasn't passed the top yet
      if (rect.top <= viewportMid + 80) {
        activeEntry = entry; // keep taking the last one that qualifies
      }
    });

    if (activeEntry) {
      activeEntry.classList.add('is-active');
      const t = activeEntry.dataset.time;
      const a = activeEntry.dataset.ampm;
      const l = activeEntry.dataset.loc;
      if (timeEl.textContent !== t) {
        timeEl.style.opacity = '0'; timeEl.style.transform = 'translateY(8px)';
        setTimeout(()=>{ timeEl.textContent = t; timeEl.style.opacity='1'; timeEl.style.transform='none'; }, 200);
      }
      if (ampmEl.textContent !== a) {
        ampmEl.style.opacity = '0';
        setTimeout(()=>{ ampmEl.textContent = a; ampmEl.style.opacity='1'; }, 200);
      }
      if (locEl.textContent !== l) {
        locEl.style.opacity = '0'; locEl.style.transform = 'translateY(6px)';
        setTimeout(()=>{ locEl.textContent = l; locEl.style.opacity='1'; locEl.style.transform='none'; }, 250);
      }
    }
  }

  // Apply CSS transitions to sticky elements for smooth change
  [timeEl, ampmEl, locEl].forEach(el => {
    if(el) el.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
  });

  window.addEventListener('scroll', updateSticky, { passive: true });
  updateSticky(); // run once on load
}

// Init both days
setupDetailScroll('d1-entries','d1-time','d1-ampm','d1-loc');
setupDetailScroll('d2-entries','d2-time','d2-ampm','d2-loc');

/* ── FAQ ── */
function toggleFaq(btn){
  const item = btn.closest('.faq-item');
  const ans  = item.querySelector('.faq-a');
  const open = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(i=>{
    i.classList.remove('open');
    i.querySelector('.faq-a').style.maxHeight='0';
  });
  if(!open){
    item.classList.add('open');
    ans.style.maxHeight = ans.scrollHeight + 'px';
  }
}


  document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navContainer = document.querySelector('.nav-links-container');

    // Toggle menu open/close
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navContainer.classList.toggle('active');
    });

    // Optional: Close menu when a link is clicked
    document.querySelectorAll('.nav-menu a, .nav-book').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navContainer.classList.remove('active');
      });
    });
  });

  // Reveal on scroll
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('on'); io.unobserve(e.target); } });
  }, { threshold: 0.08 });
  revealEls.forEach(el => io.observe(el));

  // Filter
  function filterArticles(cat, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('#articles-grid .art-card').forEach(card => {
      card.style.display = (cat === 'all' || card.dataset.cat === cat) ? '' : 'none';
    });
  }

  // Footer year
  document.getElementById('footer-year').textContent = new Date().getFullYear();