# KLH Page Builder — Template & Extension Guide

> Use this file alongside `style.css` and `main.js` to build any new page for
> Kaladwas Lal Haveli. Every section below is a **copy-paste-ready HTML block**.
> Replace only the content inside `<!-- SLOT: ... -->` markers.
> Never change class names unless you also update `style.css`.

---

## 1. How to Start a New Page

Copy this skeleton and save it as `your-page-name.html` in the same folder as
`style.css` and `main.js`.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><!-- SLOT: Page Title --> | Kaladwas Lal Haveli</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,700;1,400&family=Raleway:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
  <!-- SLOT: Add page-specific CSS here only if needed -->
</head>
<body>

  <!-- PASTE NAVIGATION BLOCK HERE -->

  <main>
    <div class="container">

      <!-- PASTE HERO BLOCK HERE -->
      <!-- PASTE SECTION BLOCKS HERE (in any order) -->

    </div>
  </main>

  <!-- PASTE FOOTER BLOCK HERE -->

  <script src="main.js"></script>
  <!-- SLOT: Add page-specific JS here only if needed -->
</body>
</html>
```

**Rules:**
- `style.css` and `main.js` must be in the same directory as the HTML file.
- All sections go inside `<main> > <div class="container">`.
- The Hero section is the only exception — it sits outside `.container`, directly inside `<main>`.
- Sections alternate between `.section` (white bg) and `.section.section-alt` (off-white bg) for visual rhythm.

---

## 2. Design Tokens — Never Hardcode These

All colours and spacing are in `style.css` as CSS variables. Always use the variable name, not the raw value.

| Variable          | Value         | When to use                             |
|-------------------|---------------|-----------------------------------------|
| `--gold`          | `#c8a96e`     | Accent colour, borders, icons           |
| `--gold-dark`     | `#a88a50`     | Gold button hover state                 |
| `--gold-light`    | `#e8d5b0`     | Subtle gold on dark backgrounds         |
| `--dark3`         | `#3d3d3d`     | All section headings                    |
| `--body-text`     | `#6b6b6b`     | All paragraph text                      |
| `--light-text`    | `#999999`     | Subtle labels, subtitles                |
| `--white`         | `#ffffff`     | White section backgrounds               |
| `--off-white`     | `#f9f7f4`     | Alternate section background            |
| `--border`        | `#e5e0d8`     | All dividers and card borders           |
| `--border-gold`   | rgba gold 30% | Gold-tinted borders (FAQ icon, etc.)    |
| `--font-serif`    | Lora          | All headings, display text              |
| `--font-sans`     | Raleway       | Labels, buttons, body copy              |

---

## 3. Reusable Micro-Patterns

These appear inside almost every section. Learn them once, use them everywhere.

### 3a. Section Header Block (eyebrow + heading + separator + body)

```html
<span class="section-tag"><!-- SLOT: Short label e.g. "Why Visit Udaipur" --></span>
<h2 class="section-heading">Heading with an <em>Italic Gold Part</em></h2>
<div class="section-sep"></div>
<!-- OPTIONAL: add class="center" to the sep if the block is centre-aligned -->
<p class="section-body"><!-- SLOT: 1–2 sentence intro paragraph --></p>
```

- `<em>` inside `.section-heading` always renders italic + gold. Use it on 1–2 words only.
- `.section-sep` is a 42×2px gold bar. Add `.center` when the heading block is centred.
- `.section-body` has a `max-width: 700px` built in. No need to add width utilities.

### 3b. Reveal Animation Classes

Add one of these to any element you want to animate in on scroll:

| Class       | Animation direction  |
|-------------|----------------------|
| `.reveal`   | Fade up from below   |
| `.reveal-l` | Slide in from left   |
| `.reveal-r` | Slide in from right  |

`main.js` handles these automatically via `IntersectionObserver`. No extra JS needed.
Just add the class to the element — it will be invisible until it enters the viewport.

### 3c. Buttons

```html
<!-- Primary filled gold button -->
<a href="#" class="btn-gold"><!-- SLOT: Button Label --></a>

<!-- Secondary outline button (use after a .btn-gold) -->
<a href="#" class="btn-outline"><!-- SLOT: Button Label --></a>
```

### 3d. Gold Tip / Callout Box

```html
<div class="place-tip">
  <strong><!-- SLOT: Label e.g. "Travel Tip:" --></strong>
  <!-- SLOT: Tip text -->
</div>
```

---

## 4. Section Templates

---

### SECTION A — Navigation (use on every page, unchanged)

```html
<header class="site-header">
  <nav class="nav-inner">
    <a href="https://kaladwashotels.com/" class="nav-logo">
      <span>Kaladwas Lal Haveli<small>A Boutique Hotel in Udaipur</small></span>
    </a>
    <ul class="nav-menu">
      <li><a href="https://kaladwashotels.com/">Home</a></li>
      <li><a href="https://kaladwashotels.com/about-us/">About Us</a></li>
      <li><a href="https://kaladwashotels.com/rooms/">Rooms</a></li>
      <li><a href="https://kaladwashotels.com/haveli/">Haveli</a></li>
      <li><a href="https://kaladwashotels.com/gallery/">Gallery</a></li>
      <li><a href="https://kaladwashotels.com/blog/">Blog</a></li>
      <li><a href="https://kaladwashotels.com/contact/">Contact</a></li>
    </ul>
    <a href="https://bookings.kaladwashotels.com/?propertyId=11603" class="nav-book">Book Now</a>
  </nav>
</header>
```

**What to change:** Nothing. This block is identical on every page.
**Note:** The `<span id="footer-year">` is updated automatically at runtime. Add this one-liner to `main.js` (if not already present):
```js
document.getElementById('footer-year').textContent = new Date().getFullYear();
```

Place this directly inside `<main>`, before the `.container` wrapper.

```html
<section class="hero">
  <div class="hero-bg" style="background-image: url('<!-- SLOT: /path/to/hero-image.jpg -->')"></div>
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <!-- OPTIONAL: uncomment the tag line below if needed -->
    <!-- <span class="hero-tag">{SLOT: e.g. "Udaipur Travel Guide"}</span> -->
    <h1><!-- SLOT: Main headline --><br>with an <em><!-- SLOT: Italic highlight --></em></h1>
    <p class="hero-sub"><!-- SLOT: One or two sentence subtitle --></p>
  </div>
</section>
```

**What to change:**
- The `background-image` URL in the `style` attribute (or move it to a new CSS rule).
- The `<h1>` and `.hero-sub` text.
- `<em>` wraps the italic gold phrase — keep it to 2–3 words.

**What NOT to change:**
- `.hero-bg`, `.hero-overlay`, `.hero-content` class names — the gradient overlay and layout depend on them.
- Do not add a background image directly to `.hero` — always use `.hero-bg`.

---

### SECTION C — Intro Split (Image left, Text right)

```html
<section class="section">
  <div class="container-full">
    <div class="intro-grid">

      <div class="intro-img-wrap reveal-l">
        <img src="<!-- SLOT: /path/to/portrait-image.jpg -->"
             alt="<!-- SLOT: Alt text -->" loading="lazy">
        <div class="intro-badge">
          <b><!-- SLOT: Large number or icon e.g. "5" --></b>
          <small><!-- SLOT: Two-word label e.g. "Iconic<br>Places" --></small>
        </div>
      </div>

      <div class="reveal-r">
        <span class="section-tag"><!-- SLOT: Eyebrow label --></span>
        <h2 class="section-heading"><!-- SLOT: Heading --><br><em><!-- SLOT: Gold italic part --></em></h2>
        <div class="section-sep"></div>
        <p class="section-body"><!-- SLOT: Paragraph 1 --></p>
        <br>
        <p class="section-body"><!-- SLOT: Paragraph 2 --></p>
      </div>

    </div>
  </div>
</section>
```

**What to change:** All SLOT content. Image should have a natural portrait (4:5) ratio.

**What NOT to change:** `.intro-grid`, `.intro-img-wrap`, `.intro-badge` — the decorative offset border and badge position are tied to these classes.

---

### SECTION D — Places / Feature Rows (alternating image + text)

Use for any list of named items (places, rooms, experiences, etc.).

```html
<section class="section section-alt">
  <div class="container-full">

    <!-- Centred header -->
    <div class="places-header reveal">
      <span class="section-tag"><!-- SLOT: Eyebrow e.g. "The Essentials" --></span>
      <h2 class="section-heading"><!-- SLOT: Heading --> <em><!-- SLOT: Gold part --></em></h2>
      <div class="section-sep center"></div>
      <p class="section-body"><!-- SLOT: Intro paragraph --></p>
    </div>

    <!-- ODD item (image LEFT, text RIGHT) — use for items 1, 3, 5 -->
    <div class="place-row reveal">
      <div class="place-img">
        <span class="place-num">01</span><!-- SLOT: increment per item -->
        <img src="<!-- SLOT: image path -->" alt="<!-- SLOT: alt text -->" loading="lazy">
      </div>
      <div class="place-body">
        <span class="section-tag place-tag"><!-- SLOT: e.g. "Landmark 01" --></span>
        <h3 class="place-title"><!-- SLOT: Item title --></h3>
        <p class="place-desc"><!-- SLOT: Description paragraph --></p>
        <div class="place-tip"><strong><!-- SLOT: Label -->:</strong> <!-- SLOT: Tip text --></div>
      </div>
    </div>

    <!-- EVEN item (image RIGHT, text LEFT) — add class="flip" -->
    <div class="place-row flip reveal">
      <div class="place-img">
        <span class="place-num">02</span>
        <img src="<!-- SLOT: image path -->" alt="<!-- SLOT: alt text -->" loading="lazy">
      </div>
      <div class="place-body">
        <span class="section-tag place-tag"><!-- SLOT: e.g. "Landmark 02" --></span>
        <h3 class="place-title"><!-- SLOT: Item title --></h3>
        <p class="place-desc"><!-- SLOT: Description paragraph --></p>
        <div class="place-tip"><strong><!-- SLOT: Label -->:</strong> <!-- SLOT: Tip text --></div>
      </div>
    </div>

    <!-- Repeat the ODD/EVEN pattern for as many items as needed -->

  </div>
</section>
```

**The `.flip` rule:** Even-numbered rows get `.flip`. Odd rows do not. This alternates the image side automatically using CSS `direction: rtl` on the grid.

**What to change:** SLOT content, `.place-num` counter, `.flip` on alternating rows.

**What NOT to change:** `.place-row`, `.place-img`, `.place-body`, `.place-num` — hover zoom and ghost number depend on these.

---

### SECTION E — Highlights Grid (Text left, Cards right)

```html
<section class="section">
  <div class="container-full">
    <div class="highlights-grid-wrap">

      <div class="reveal-l">
        <span class="section-tag"><!-- SLOT: Eyebrow --></span>
        <h2 class="section-heading"><!-- SLOT: Heading --> <em><!-- SLOT: Gold part --></em></h2>
        <div class="section-sep"></div>
        <p class="section-body"><!-- SLOT: Paragraph 1 --></p>
        <br>
        <p class="section-body"><!-- SLOT: Paragraph 2 --></p>
      </div>

      <div class="hl-cards reveal-r">
        <!-- Repeat .hl-card as many times as needed (works best in multiples of 2) -->
        <div class="hl-card">
          <h4><!-- SLOT: Card heading --></h4>
          <p><!-- SLOT: Card description (1–2 sentences) --></p>
        </div>
        <div class="hl-card">
          <h4><!-- SLOT: Card heading --></h4>
          <p><!-- SLOT: Card description --></p>
        </div>
        <!-- Add more .hl-card blocks here -->
      </div>

    </div>
  </div>
</section>
```

**What to change:** SLOT content. Add or remove `.hl-card` blocks freely.

---

### SECTION F — Quick Itinerary Switcher (Tabbed sidebar + panels)

This section requires careful ID coordination. Every ID in the markup is linked to JS calls.

```html
<section class="section section-alt">
  <div class="container-full">

    <!-- Section header -->
    <div class="reveal" style="text-align:center; margin-bottom:52px;">
      <span class="section-tag"><!-- SLOT: Eyebrow --></span>
      <h2 class="section-heading"><!-- SLOT: Heading --> <em><!-- SLOT: Gold part --></em></h2>
      <div class="section-sep center"></div>
      <p class="section-body" style="margin:0 auto;"><!-- SLOT: Intro --></p>
    </div>

    <!-- Day tab buttons — add one per day -->
    <div class="itin-tabs">
      <button class="itin-tab-btn active" onclick="switchItinDay('id1',this)">Day 1</button>
      <button class="itin-tab-btn"        onclick="switchItinDay('id2',this)">Day 2</button>
      <!-- SLOT: add more day buttons if needed, following the pattern -->
    </div>

    <!-- DAY 1 PANEL — id must match the switchItinDay call above -->
    <div id="id1" class="itin-day active">
      <div class="itin-layout">

        <!-- Sidebar stop buttons — each onclick references a panel id + the parent day id -->
        <div class="itin-sidebar">
          <button class="itin-stop-btn active" onclick="switchItinStop('ip1_1',this,'id1')">
            <span class="itin-stop-time"><!-- SLOT: e.g. 8:00 AM --></span>
            <span class="itin-stop-name"><!-- SLOT: Stop name --></span>
          </button>
          <button class="itin-stop-btn" onclick="switchItinStop('ip1_2',this,'id1')">
            <span class="itin-stop-time"><!-- SLOT: time --></span>
            <span class="itin-stop-name"><!-- SLOT: Stop name --></span>
          </button>
          <!-- SLOT: add more stop buttons, increment the panel id (ip1_3, ip1_4 ...) -->
        </div>

        <!-- Panel content — id must match the sidebar button's first argument -->
        <div>
          <div id="ip1_1" class="itin-panel active">
            <img src="<!-- SLOT: image path -->" class="itin-panel-img" alt="<!-- SLOT: alt -->">
            <div class="itin-panel-body">
              <p class="itin-panel-time"><!-- SLOT: e.g. "8:00 AM – Morning" --></p>
              <h3 class="itin-panel-title"><!-- SLOT: Stop title --></h3>
              <p class="itin-panel-desc"><!-- SLOT: Description --></p>
              <ul class="itin-bullets">
                <li><!-- SLOT: Bullet point --></li>
                <li><!-- SLOT: Bullet point --></li>
              </ul>
            </div>
          </div>

          <div id="ip1_2" class="itin-panel">
            <!-- Same inner structure as ip1_1 -->
          </div>
          <!-- SLOT: More panels, matching the sidebar buttons -->
        </div>

      </div>
    </div><!-- /id1 -->

    <!-- DAY 2 PANEL — same structure, all ids use prefix "id2" / "ip2_" -->
    <div id="id2" class="itin-day">
      <div class="itin-layout">
        <div class="itin-sidebar">
          <button class="itin-stop-btn active" onclick="switchItinStop('ip2_1',this,'id2')">
            <span class="itin-stop-time"><!-- SLOT: time --></span>
            <span class="itin-stop-name"><!-- SLOT: Stop name --></span>
          </button>
          <!-- SLOT: more buttons -->
        </div>
        <div>
          <div id="ip2_1" class="itin-panel active">
            <!-- SLOT: panel content -->
          </div>
        </div>
      </div>
    </div><!-- /id2 -->

  </div>
</section>
```

**ID naming rules — critical:**
- Day panels: `id1`, `id2`, `id3` ...
- Stop panels for day 1: `ip1_1`, `ip1_2`, `ip1_3` ...
- Stop panels for day 2: `ip2_1`, `ip2_2`, `ip2_3` ...
- `switchItinStop('panelId', this, 'dayId')` — the third argument must be the parent day's `id`.
- The first `.itin-stop-btn` in each day and the first `.itin-panel` in each day must have `class="... active"` in markup.

**No JS changes needed** to add more days or stops — just follow the naming pattern above.

---

### SECTION G — Detailed Itinerary (Scroll-triggered sticky panel)

This section uses JS from `main.js`. The `setupDetailScroll()` calls at the bottom of the file must be updated when you add new day panels.

```html
<section class="section detail-section">
  <div class="container-full">

    <!-- Section header -->
    <div class="reveal" style="margin-bottom:48px;">
      <span class="section-tag"><!-- SLOT: Eyebrow --></span>
      <h2 class="section-heading"><!-- SLOT: Heading --> <em><!-- SLOT: Gold part --></em></h2>
      <div class="section-sep"></div>
      <p class="section-body"><!-- SLOT: Intro sentence --></p>
    </div>

    <!-- Day tab buttons -->
    <div class="detail-day-nav reveal">
      <button class="detail-day-btn active" onclick="switchDetailDay('dd1',this)">Day 1: <!-- SLOT: label --></button>
      <button class="detail-day-btn"        onclick="switchDetailDay('dd2',this)">Day 2: <!-- SLOT: label --></button>
    </div>

    <!-- DAY 1 -->
    <div id="dd1" class="detail-day-panel active">
      <h3 class="detail-day-title">Day 1: <em><!-- SLOT: Day subtitle --></em></h3>
      <div class="detail-layout">

        <!-- STICKY LEFT PANEL — ids are referenced by setupDetailScroll() in main.js -->
        <div class="detail-sticky" id="sticky-d1">
          <div class="detail-sticky-time" id="d1-time">8:00</div>
          <div class="detail-sticky-ampm"  id="d1-ampm">AM</div>
          <div class="detail-sticky-dot"></div>
          <div class="detail-sticky-loc"  id="d1-loc"><!-- SLOT: First location name --></div>
        </div>

        <!-- SCROLLABLE RIGHT ENTRIES — data-* attributes feed the sticky panel -->
        <div class="detail-entries" id="d1-entries">

          <div class="detail-entry" data-time="8:00" data-ampm="AM" data-loc="<!-- SLOT: Location -->">
            <p class="detail-entry-time"><!-- SLOT: e.g. "8:00 AM – Start with City Palace" --></p>
            <h4 class="detail-entry-title"><!-- SLOT: Entry heading --></h4>
            <p class="detail-entry-subtitle"><!-- SLOT: Optional subtitle e.g. "Allow 2–3 hours" --></p>
            <p class="detail-entry-desc"><!-- SLOT: Description paragraph --></p>
            <ul class="detail-bullets">
              <li><strong><!-- SLOT: Bold label --></strong> — <!-- SLOT: Detail --></li>
              <li><!-- SLOT: Plain bullet --></li>
            </ul>
          </div>

          <!-- SLOT: Add more .detail-entry blocks. Each needs its own data-time, data-ampm, data-loc -->

        </div><!-- /d1-entries -->
      </div>
    </div><!-- /dd1 -->

    <!-- DAY 2 — same structure, all ids use prefix "dd2" / "d2-" -->
    <div id="dd2" class="detail-day-panel">
      <h3 class="detail-day-title">Day 2: <em><!-- SLOT: Day subtitle --></em></h3>
      <div class="detail-layout">
        <div class="detail-sticky" id="sticky-d2">
          <div class="detail-sticky-time" id="d2-time">8:00</div>
          <div class="detail-sticky-ampm"  id="d2-ampm">AM</div>
          <div class="detail-sticky-dot"></div>
          <div class="detail-sticky-loc"  id="d2-loc"><!-- SLOT: First location name --></div>
        </div>
        <div class="detail-entries" id="d2-entries">
          <!-- SLOT: .detail-entry blocks -->
        </div>
      </div>
    </div><!-- /dd2 -->

  </div>
</section>
```

**`data-*` attribute rules:**
- `data-time` — time string shown in the sticky panel, e.g. `"8:00"` or `"1:30"`
- `data-ampm` — exactly `"AM"` or `"PM"`
- `data-loc` — location name shown in the sticky panel

**JS update required when adding Day 3+:**
At the bottom of `main.js`, add one new line per day:
```js
// Existing lines — do not remove:
setupDetailScroll('d1-entries','d1-time','d1-ampm','d1-loc');
setupDetailScroll('d2-entries','d2-time','d2-ampm','d2-loc');

// Add for Day 3:
setupDetailScroll('d3-entries','d3-time','d3-ampm','d3-loc');
```
And add the corresponding HTML panel with ids: `dd3`, `d3-time`, `d3-ampm`, `d3-loc`, `d3-entries`.

---

### SECTION H — Where to Stay

```html
<section class="section section-alt">
  <div class="container-full">
    <div class="stay-grid">

      <div class="stay-imgs reveal-l">
        <img class="stay-img-main"   src="<!-- SLOT: main portrait image -->" alt="<!-- SLOT: alt -->" loading="lazy">
        <img class="stay-img-accent" src="<!-- SLOT: accent square image -->"  alt="<!-- SLOT: alt -->" loading="lazy">
      </div>

      <div class="stay-body reveal-r">
        <span class="section-tag"><!-- SLOT: Eyebrow --></span>
        <h2 class="section-heading"><!-- SLOT: Heading --><br><em><!-- SLOT: Gold part --></em></h2>
        <div class="section-sep"></div>
        <p class="section-body"><!-- SLOT: Paragraph 1 --></p>
        <br>
        <p class="section-body"><!-- SLOT: Paragraph 2 --></p>
        <br>
        <a href="<!-- SLOT: booking URL -->" class="btn-gold">Book Your Stay</a>
        <a href="<!-- SLOT: rooms URL -->"   class="btn-outline">View Rooms</a>
      </div>

    </div>
  </div>
</section>
```

**Image sizing:** `.stay-img-main` should be a tall portrait (3:4 ratio). `.stay-img-accent` is a square image that overlaps the bottom-right corner of the main image.

---

### SECTION I — FAQ Accordion

```html
<section class="section">
  <div class="container-full">

    <div style="text-align:center; margin-bottom:52px;" class="reveal">
      <span class="section-tag"><!-- SLOT: Eyebrow e.g. "Frequently Asked Questions" --></span>
      <h2 class="section-heading"><!-- SLOT: Heading --> <em><!-- SLOT: Gold part --></em></h2>
      <div class="section-sep center"></div>
      <p class="section-body" style="margin:0 auto;"><!-- SLOT: Intro sentence --></p>
    </div>

    <div class="faq-wrap">

      <!-- First item is open by default — keep class="faq-item open" and inline max-height -->
      <div class="faq-item open">
        <button class="faq-q" onclick="toggleFaq(this)">
          <!-- SLOT: Question text -->
          <span class="faq-icon"></span>
        </button>
        <div class="faq-a" style="max-height:200px">
          <div class="faq-a-inner"><!-- SLOT: Answer text --></div>
        </div>
      </div>

      <!-- All other items are closed — no extra classes, no inline style -->
      <div class="faq-item">
        <button class="faq-q" onclick="toggleFaq(this)">
          <!-- SLOT: Question text -->
          <span class="faq-icon"></span>
        </button>
        <div class="faq-a">
          <div class="faq-a-inner"><!-- SLOT: Answer text --></div>
        </div>
      </div>

      <!-- SLOT: Repeat the closed .faq-item block for as many Q&As as needed -->

    </div>
  </div>
</section>
```

**What to change:** Question text, answer text. Add/remove `.faq-item` blocks freely.

**What NOT to change:** `onclick="toggleFaq(this)"` must stay on every button. The `<span class="faq-icon">` must stay inside the button — it renders the +/– icon via CSS.

---

### SECTION J — Footer (use on every page, unchanged)

```html
<footer class="site-footer">
  <div class="container-full">
    <div class="footer-top">
      <div>
        <div class="footer-brand-name"><a href="https://kaladwashotels.com/"><img src="/Udaipur/Udaipur/Kaladwas-Lal-Haveli-name.webp" alt="" srcset=""></a></div>
        <!-- <div class="footer-brand-sub">A Heritage Boutique Hotel · Udaipur, Rajasthan</div> -->
        <p class="footer-about">A 300-year-old heritage haveli in the heart of Udaipur's Old City. Seven exquisitely designed themed rooms, traditional Mewari hospitality, and an authentic connection to Rajasthan's royal legacy.</p>
        <p class="footer-contact-item">📞 <a href="tel:+918302902727">+91-830 290 2727</a></p>
        <p class="footer-contact-item">✉ <a href="mailto:info@kaladwashotels.com">info@kaladwashotels.com</a></p>
        <p class="footer-contact-item">96, Chawra House, Ganesh Ghati, Udaipur 313001</p>
      </div>
      <div class="footer-col">
        <div class="footer-col-title">Explore</div>
        <ul>
          <li><a href="https://kaladwashotels.com/">Home</a></li>
          <li><a href="https://kaladwashotels.com/about-us/">About Us</a></li>
          <li><a href="https://kaladwashotels.com/rooms/">Rooms</a></li>
          <li><a href="https://kaladwashotels.com/haveli/">The Haveli</a></li>
          <li><a href="https://kaladwashotels.com/gallery/">Gallery</a></li>
          <li><a href="https://kaladwashotels.com/blog/">Blog</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <div class="footer-col-title"><!-- SLOT: Column title --></div>
        <ul>
          <li><a href="#"><!-- SLOT: Link label --></a></li>
          <!-- SLOT: more links -->
        </ul>
      </div>
      <div class="footer-col">
        <div class="footer-col-title">Policies</div>
        <ul>
          <li><a href="#">Terms &amp; Conditions</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Cancellation Policy</a></li>
          <li><a href="#">FAQs</a></li>
          <li><a href="https://kaladwashotels.com/contact/">Contact Us</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span class="footer-copy">© <span id="footer-year">2024</span> Kaladwas Hotels. All Rights Reserved.</span>
      <div class="footer-policy">
        <a href="#">Terms</a>
        <a href="#">Privacy</a>
        <a href="#">Sitemap</a>
      </div>
    </div>
  </div>
</footer>
```

---

## 5. Adding a New Section Type

When your content needs something not covered by sections A–J above, follow this
three-step process. The **Testimonials** section is used as a worked example.

---

### Step 1 — Write the HTML

Design your markup using existing class patterns wherever possible.
Only invent new class names for genuinely new layout or component needs.

```html
<!-- ═══════════════ TESTIMONIALS ═══════════════ -->
<section class="section section-alt">
  <div class="container-full">

    <!-- Reuse the standard centred header block — no new classes needed -->
    <div style="text-align:center; margin-bottom:52px;" class="reveal">
      <span class="section-tag">Guest Experiences</span>
      <h2 class="section-heading">What Our Guests <em>Say</em></h2>
      <div class="section-sep center"></div>
    </div>

    <!-- New layout: a horizontal row of cards — needs a new wrapper class -->
    <div class="testimonials-grid">

      <div class="testimonial-card reveal">
        <p class="testimonial-quote"><!-- SLOT: Quote text --></p>
        <div class="testimonial-author">
          <img src="<!-- SLOT: guest photo -->" alt="<!-- SLOT: guest name -->" class="testimonial-avatar" loading="lazy">
          <div>
            <p class="testimonial-name"><!-- SLOT: Guest name --></p>
            <p class="testimonial-origin"><!-- SLOT: e.g. "Mumbai, India" --></p>
          </div>
        </div>
        <div class="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
      </div>

      <!-- SLOT: repeat .testimonial-card for each testimonial -->

    </div>
  </div>
</section>
```

---

### Step 2 — Add styles to `style.css`

Add new rules at the **end** of `style.css`, after the existing responsive block.
Always use existing CSS variables — never hardcode colours or fonts.

```css
/* ── TESTIMONIALS ── */
.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.testimonial-card {
  background: var(--white);
  border: 1px solid var(--border);
  padding: 32px 28px;
  position: relative;
  transition: box-shadow 0.25s, transform 0.25s;
}
.testimonial-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.06);
}

/* Gold top border accent — same pattern as .hl-card */
.testimonial-card::before {
  content: '';
  position: absolute; top: 0; left: 0; right: 0;
  height: 3px;
  background: var(--gold);
}

.testimonial-quote {
  font-family: var(--font-serif);
  font-size: 1rem;
  color: var(--dark3);
  line-height: 1.75;
  font-style: italic;
  margin-bottom: 24px;
}
/* Opening quote mark as a pseudo-element */
.testimonial-quote::before {
  content: '"';
  font-size: 3rem;
  color: var(--gold);
  line-height: 0;
  vertical-align: -0.6em;
  margin-right: 4px;
  font-family: var(--font-serif);
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 14px;
}
.testimonial-avatar {
  width: 48px; height: 48px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--border-gold);
}
.testimonial-name {
  font-family: var(--font-sans);
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--dark3);
  letter-spacing: 0.02em;
}
.testimonial-origin {
  font-size: 0.75rem;
  color: var(--light-text);
}
.testimonial-stars {
  font-size: 0.85rem;
  color: var(--gold);
  letter-spacing: 0.1em;
}

/* Responsive: collapse to 1 column on mobile */
@media(max-width: 1024px) {
  .testimonials-grid { grid-template-columns: 1fr 1fr; }
}
@media(max-width: 600px) {
  .testimonials-grid { grid-template-columns: 1fr; }
}
```

**Rules for new CSS:**
- Always add at a section comment: `/* ── SECTION NAME ── */`
- Always put new rules **after** the existing `@media` blocks — or add new breakpoint rules inside those same existing `@media` blocks
- Use `var(--gold)`, `var(--border)`, `var(--font-serif)`, etc. — never raw values
- Mirror existing patterns: gold `::before` border on cards, `translateY` hover lifts, etc.

---

### Step 3 — Add JavaScript to `main.js` (only if interactive)

The testimonials example above is purely presentational — no JS needed.
The reveal animations already work via the existing `IntersectionObserver` in `main.js`
as long as you add `.reveal` / `.reveal-l` / `.reveal-r` to your elements.

**Only add JS when your section needs:**
- Tab switching
- Accordion expand/collapse
- Scroll-triggered behaviour
- Any user interaction beyond CSS hover states

**If you do need JS, add it at the end of `main.js`** with a section comment:

```js
/* ── TESTIMONIALS — carousel (example) ── */
function switchTestimonialPage(direction) {
  // your logic here
}
```

Never edit or remove the existing JS functions in `main.js`. Only append new ones.

---

## 6. Quick Reference — Class Cheat Sheet

| Class | Where used | Effect |
|---|---|---|
| `.section` | `<section>` | White bg, 90px vertical padding |
| `.section-alt` | `<section>` | Off-white bg |
| `.container` | Inner wrapper | Max-width 1200px, centred |
| `.container-full` | Inner wrapper | Full width, 50px side padding |
| `.section-tag` | `<span>` | Gold small-caps eyebrow label |
| `.section-heading` | `<h2>` / `<h3>` | Serif heading, responsive size |
| `.section-sep` | `<div>` | Gold 42×2px divider bar |
| `.section-sep.center` | `<div>` | Same, centred |
| `.section-body` | `<p>` | Body text, max-width 700px |
| `.btn-gold` | `<a>` | Filled gold CTA button |
| `.btn-outline` | `<a>` | Bordered outline secondary button |
| `.place-tip` | `<div>` | Gold-border left callout box |
| `.reveal` | any element | Fade up on scroll enter |
| `.reveal-l` | any element | Slide in from left on scroll |
| `.reveal-r` | any element | Slide in from right on scroll |

