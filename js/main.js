// FORGEYARD // SPA router + views
// Pages: home, catalog (with category filter), product detail, about

const $app = () => document.getElementById('view');
const escapeHTML = s => String(s ?? '').replace(/[&<>"']/g, c => ({
  '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
}[c]));

function categoryName(slug) {
  const c = categories.find(c => c.slug === slug);
  return c ? c.name : slug;
}
function categoryTag(slug) {
  const c = categories.find(c => c.slug === slug);
  return c ? c.tag : '';
}

/* ---------------- views ---------------- */

function renderStars(rating) {
  if (!rating) return '';
  const filled = Math.round(rating);
  return '★'.repeat(filled) + '☆'.repeat(5 - filled);
}

function renderRating(p) {
  if (!p.rating) return '';
  return `<span class="rating">
    <span class="stars">${renderStars(p.rating)}</span>
    <span>${p.rating.toFixed(1)}</span>
    ${p.reviews ? `<span class="reviews">(${p.reviews.toLocaleString()})</span>` : ''}
  </span>`;
}

function heroArtSVG() {
  return `
    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="beamGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#ffb000" stop-opacity="0.9"/>
          <stop offset="100%" stop-color="#ffb000" stop-opacity="0.3"/>
        </linearGradient>
      </defs>
      <!-- ground line -->
      <line x1="40" y1="340" x2="360" y2="340" stroke="#262d36" stroke-width="1.5"/>
      <!-- I-beam stack (background) -->
      <g opacity="0.35" stroke="#5a6573" stroke-width="1.4" fill="none">
        <rect x="80" y="280" width="240" height="14"/>
        <rect x="100" y="306" width="200" height="14"/>
        <rect x="120" y="332" width="160" height="14"/>
      </g>
      <!-- Crane mast -->
      <g stroke="#ffb000" stroke-width="1.6" fill="none" stroke-linejoin="round">
        <line x1="120" y1="60" x2="120" y2="320"/>
        <line x1="140" y1="60" x2="140" y2="320"/>
        <line x1="120" y1="60" x2="140" y2="80"/>
        <line x1="140" y1="60" x2="120" y2="80"/>
        <line x1="120" y1="100" x2="140" y2="120"/>
        <line x1="140" y1="100" x2="120" y2="120"/>
        <line x1="120" y1="140" x2="140" y2="160"/>
        <line x1="140" y1="140" x2="120" y2="160"/>
        <line x1="120" y1="180" x2="140" y2="200"/>
        <line x1="140" y1="180" x2="120" y2="200"/>
        <line x1="120" y1="220" x2="140" y2="240"/>
        <line x1="140" y1="220" x2="120" y2="240"/>
        <line x1="120" y1="260" x2="140" y2="280"/>
        <line x1="140" y1="260" x2="120" y2="280"/>
      </g>
      <!-- Crane jib -->
      <g stroke="#ffb000" stroke-width="1.6" fill="none" stroke-linejoin="round">
        <line x1="130" y1="80" x2="350" y2="80"/>
        <line x1="130" y1="100" x2="350" y2="100"/>
        <line x1="130" y1="80" x2="150" y2="100"/>
        <line x1="170" y1="80" x2="190" y2="100"/>
        <line x1="210" y1="80" x2="230" y2="100"/>
        <line x1="250" y1="80" x2="270" y2="100"/>
        <line x1="290" y1="80" x2="310" y2="100"/>
        <line x1="330" y1="80" x2="350" y2="100"/>
        <line x1="170" y1="100" x2="150" y2="80"/>
        <line x1="210" y1="100" x2="190" y2="80"/>
        <line x1="250" y1="100" x2="230" y2="80"/>
        <line x1="290" y1="100" x2="270" y2="80"/>
        <line x1="330" y1="100" x2="310" y2="80"/>
      </g>
      <!-- Counterjib left -->
      <g stroke="#ffb000" stroke-width="1.6" fill="none" stroke-linejoin="round" opacity="0.85">
        <line x1="130" y1="80" x2="50" y2="80"/>
        <line x1="130" y1="100" x2="50" y2="100"/>
        <rect x="50" y="68" width="20" height="44" fill="#ffb000" fill-opacity="0.18" stroke-width="1.2"/>
      </g>
      <!-- Hook line -->
      <line x1="280" y1="100" x2="280" y2="240" stroke="#ffb000" stroke-width="1.2" stroke-dasharray="3 4"/>
      <!-- Hook -->
      <g transform="translate(272 240)" stroke="#ffb000" stroke-width="1.6" fill="none">
        <rect x="0" y="0" width="16" height="6"/>
        <path d="M8 6 L8 18 Q8 26 16 26 Q22 26 22 20"/>
      </g>
      <!-- Suspended I-beam -->
      <g transform="translate(220 268)">
        <rect x="0" y="0" width="120" height="14" fill="url(#beamGrad)" stroke="#ffb000" stroke-width="1.4"/>
        <line x1="0" y1="7" x2="120" y2="7" stroke="#060708" stroke-width="0.6" opacity="0.3"/>
      </g>
      <!-- target reticle on hook -->
      <g transform="translate(280 247)" stroke="#00f0c8" stroke-width="1" fill="none" opacity="0.7">
        <circle cx="0" cy="0" r="14"/>
        <line x1="-18" y1="0" x2="-8" y2="0"/>
        <line x1="8" y1="0" x2="18" y2="0"/>
        <line x1="0" y1="-18" x2="0" y2="-8"/>
        <line x1="0" y1="8" x2="0" y2="18"/>
      </g>
      <!-- top spec marker -->
      <g transform="translate(60 36)" font-family="JetBrains Mono, monospace" font-size="9" fill="#5a6573" letter-spacing="2">
        <line x1="0" y1="0" x2="20" y2="0" stroke="#ffb000" stroke-width="1.4"/>
        <text x="26" y="3">FY/CRANE-04</text>
      </g>
      <!-- bottom dim line -->
      <g transform="translate(40 360)" font-family="JetBrains Mono, monospace" font-size="9" fill="#5a6573" letter-spacing="2">
        <line x1="0" y1="0" x2="320" y2="0" stroke="#262d36" stroke-width="1"/>
        <line x1="0" y1="-4" x2="0" y2="4" stroke="#262d36" stroke-width="1"/>
        <line x1="320" y1="-4" x2="320" y2="4" stroke="#262d36" stroke-width="1"/>
        <text x="148" y="-6" fill="#5a6573">SITE.NORTH</text>
      </g>
    </svg>
  `;
}

function viewHome() {
  const editorPicks = products.filter(p => p.editorsPick).slice(0, 3);
  const featured = products.filter(p => !p.editorsPick).slice(0, 6);
  return `
    <section class="hero fade">
      <div class="container">
        <div class="hero-grid">
          <div>
            <div class="hero-meta">
              <span class="pill">// SYS.READY</span>
              <span>FY-INDEX-V4</span>
              <span>SHIP-DATE 2040.Q2</span>
            </div>
            <h1>Construction-grade gear, <em>vetted by the trades.</em></h1>
            <p class="lede">FORGEYARD is a curated supply rail for ironworkers, mechanical crews, and civil contractors. Every SKU on this index is selected for one reason: it survives the field.</p>
            <div class="hero-cta">
              <a class="btn btn-primary" data-route="/catalog">Open Catalog →</a>
              <a class="btn" data-route="/about">Field Spec</a>
            </div>
            <div class="hero-stats">
              <div class="stat"><div class="stat-num">${products.length.toString().padStart(2,'0')}</div><div class="stat-label">Active SKUs</div></div>
              <div class="stat"><div class="stat-num">${categories.length}</div><div class="stat-label">Trade Categories</div></div>
              <div class="stat"><div class="stat-num">A9</div><div class="stat-label">Max Cut Rating</div></div>
              <div class="stat"><div class="stat-num">Z87.1</div><div class="stat-label">Eye Standard</div></div>
            </div>
          </div>
          <div class="hero-art">${heroArtSVG()}</div>
        </div>
      </div>
    </section>

    <section class="trust">
      <div class="container trust-inner">
        <div class="trust-label">// Vetted Brands on Rail</div>
        <div class="brands">
          <span class="brand-mark-text">MILWAUKEE</span>
          <span class="brand-mark-text">MAGID</span>
          <span class="brand-mark-text">SK</span>
          <span class="brand-mark-text">TRUE TEMPER</span>
          <span class="brand-mark-text">TICONN</span>
          <span class="brand-mark-text">KOMELON</span>
        </div>
      </div>
    </section>

    <section class="biz">
      <div class="container biz-inner">
        <div class="biz-meta">// PRO ACCOUNTS</div>
        <h3>Run a crew? Open an Amazon Business account.</h3>
        <p>Free for trade businesses. Bulk pricing on PPE and supplies, Net-30 terms, multi-user purchasing for foremen, and tax-exempt buying for qualified contractors. We earn a small referral when you sign up — costs you nothing.</p>
        <a class="btn btn-primary" href="${escapeHTML(typeof AMAZON_BUSINESS_LINK !== 'undefined' ? AMAZON_BUSINESS_LINK : '#')}" target="_blank" rel="noopener noreferrer nofollow sponsored">Open a Business Account →</a>
      </div>
    </section>

    ${editorPicks.length ? `
    <section class="section">
      <div class="container">
        <div class="section-head">
          <div>
            <div class="section-tag">Editor's Picks</div>
            <h2 class="section-title">Three SKUs we'd put in <em style="font-style:normal;color:var(--hazard)">every</em> truck.</h2>
          </div>
          <p class="section-sub">Field-vetted standouts. The ones we hand to a new hand on day one.</p>
        </div>
        <div class="picks">
          ${editorPicks.map(p => `
            <div class="pick" data-route="/product/${p.slug}">
              <div class="pick-img">
                <span class="pick-badge">Editor's Pick</span>
                <img src="${escapeHTML(p.imageUrl)}" alt="${escapeHTML(p.name)}" loading="lazy" onerror="this.style.opacity=0.3;this.src='images/_fallback.svg'">
              </div>
              <div class="pick-body">
                <div class="pick-tag">${categoryTag(p.category)} // ${escapeHTML(categoryName(p.category))}</div>
                <h3 class="pick-name">${escapeHTML(p.name)}</h3>
                ${renderRating(p)}
                <p class="pick-quote">"${escapeHTML(p.pickQuote || p.tagline || '')}"</p>
                <div class="pick-foot">
                  ${p.bestFor ? `<span class="best-tag">Best for ${escapeHTML(p.bestFor)}</span>` : '<span></span>'}
                  <span style="font-family:var(--mono);font-size:11px;color:var(--hazard);letter-spacing:.12em;text-transform:uppercase;">View Spec →</span>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>` : ''}

    <section class="section">
      <div class="container">
        <div class="section-head">
          <div>
            <div class="section-tag">Trade Index</div>
            <h2 class="section-title">Built around how field crews actually work.</h2>
          </div>
          <p class="section-sub">Categories mirror the trades — ironworker, mechanical, civil. No "home & garden" filler.</p>
        </div>
        <div class="cat-grid">
          ${categories.map(c => `
            <div class="cat-card" data-route="/catalog/${c.slug}">
              <div class="cat-card-tag">${c.tag} // ${products.filter(p=>p.category===c.slug).length} SKU</div>
              <h3>${escapeHTML(c.name)}</h3>
              <p>${escapeHTML(c.blurb)}</p>
              <div class="cat-card-foot">View Index <span>→</span></div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-head">
          <div>
            <div class="section-tag">More on Rail</div>
            <h2 class="section-title">Issued from the gang box.</h2>
          </div>
          <a class="btn" data-route="/catalog">All Products →</a>
        </div>
        ${renderProductGrid(featured)}
      </div>
    </section>
  `;
}

function viewCatalog(activeCat) {
  const filtered = activeCat ? products.filter(p => p.category === activeCat) : products;
  return `
    <section class="section fade" style="padding-top:64px;">
      <div class="container">
        <div class="section-head">
          <div>
            <div class="section-tag">Catalog ${activeCat ? '// ' + categoryTag(activeCat) : '// FY-INDEX'}</div>
            <h2 class="section-title">${activeCat ? escapeHTML(categoryName(activeCat)) : 'Full Index'}</h2>
          </div>
          <p class="section-sub">${filtered.length} SKU${filtered.length===1?'':'s'} on rail. Every product links to a verified Amazon listing — affiliate-supported.</p>
        </div>
        <div class="cats">
          <button class="cat-chip ${!activeCat?'active':''}" data-route="/catalog">All <span class="cat-chip-tag">[${products.length}]</span></button>
          ${categories.map(c => {
            const count = products.filter(p=>p.category===c.slug).length;
            return `<button class="cat-chip ${activeCat===c.slug?'active':''}" data-route="/catalog/${c.slug}">${escapeHTML(c.name)} <span class="cat-chip-tag">[${count}]</span></button>`;
          }).join('')}
        </div>
        ${filtered.length ? renderProductGrid(filtered) : `
          <div class="empty">
            <h2>// NO RESULTS</h2>
            <p>No active SKUs in this category yet.</p>
            <a class="btn" data-route="/catalog">Back to Index</a>
          </div>
        `}
      </div>
    </section>
  `;
}

function renderProductGrid(list) {
  return `
    <div class="products-grid">
      ${list.map((p, i) => `
        <div class="product-card" data-route="/product/${p.slug}">
          ${p.editorsPick ? '<span class="pick-badge">Editor\'s Pick</span>' : ''}
          <div class="product-image">
            <div class="product-meta-strip">
              <span>${escapeHTML(p.sku)}</span>
              <span class="status-tag">In Stock</span>
            </div>
            <img src="${escapeHTML(p.imageUrl)}" alt="${escapeHTML(p.name)}" loading="lazy" onerror="this.style.opacity=0.2;this.src='images/_fallback.svg'">
            <div class="scan-line" style="animation-delay:${i*0.2}s"></div>
          </div>
          <div class="product-info">
            <div class="card-rating-row">
              <div class="product-cat-tag" style="margin-bottom:0">${categoryTag(p.category)}</div>
              ${renderRating(p)}
            </div>
            <h3 class="product-name">${escapeHTML(p.name)}</h3>
            <p class="product-desc">${escapeHTML(p.tagline || p.description)}</p>
            ${p.bestFor ? `<div style="margin-bottom:14px;"><span class="best-tag">Best for ${escapeHTML(p.bestFor)}</span></div>` : ''}
            <div class="product-row">
              <span>${escapeHTML(p.brand || 'OEM')}</span>
              <span>View Spec <span class="arrow">→</span></span>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function viewProduct(slug) {
  const p = products.find(pr => pr.slug === slug);
  if (!p) return viewNotFound();

  const specRows = Object.entries(p.specs || {}).map(([k, v]) => `
    <div><span>${escapeHTML(k)}</span><strong>${escapeHTML(v)}</strong></div>
  `).join('');

  const features = (p.features || []).map(f => `<li>${escapeHTML(f)}</li>`).join('');
  const useCases = (p.useCases || []).map(u => `<span class="use-tag">${escapeHTML(u)}</span>`).join('');

  return `
    <div class="container fade">
      <a class="detail-back" data-route="/catalog/${p.category}">← ${escapeHTML(categoryName(p.category))}</a>
      <div class="detail">
        <div class="detail-vis">
          <span class="corner c-tl"></span><span class="corner c-tr"></span>
          <span class="corner c-bl"></span><span class="corner c-br"></span>
          <img src="${escapeHTML(p.imageUrl)}" alt="${escapeHTML(p.name)}" onerror="this.style.opacity=0.3;this.src='images/_fallback.svg'">
          <div class="schematic">${escapeHTML(p.sku)} // SCHEMATIC</div>
        </div>
        <div class="detail-info">
          <div class="hero-meta" style="margin-bottom:16px;">
            <span class="pill">${categoryTag(p.category)}</span>
            <span>${escapeHTML(p.brand || 'OEM')}</span>
            ${p.model ? `<span>MODEL ${escapeHTML(p.model)}</span>` : ''}
            ${p.editorsPick ? '<span class="pill" style="color:var(--bg-0);background:var(--hazard);border-color:var(--hazard);">★ Editor\'s Pick</span>' : ''}
          </div>
          <h1>${escapeHTML(p.name)}</h1>
          <p class="detail-tagline">${escapeHTML(p.tagline || p.description)}</p>

          ${p.rating ? `<div style="display:flex;gap:18px;align-items:center;margin-bottom:24px;flex-wrap:wrap;">${renderRating(p)} ${p.bestFor ? `<span class="best-tag">Best for ${escapeHTML(p.bestFor)}</span>` : ''}</div>` : ''}

          ${p.pickQuote ? `<blockquote style="border-left:2px solid var(--hazard);padding:6px 0 6px 16px;margin-bottom:28px;color:var(--text);font-size:15px;line-height:1.6;font-style:italic;">"${escapeHTML(p.pickQuote)}"<div style="font-family:var(--mono);font-size:10px;letter-spacing:.18em;color:var(--text-mute);margin-top:8px;font-style:normal;">— FORGEYARD EDITORIAL</div></blockquote>` : ''}

          <div class="detail-meta">
            <div><span>SKU</span><strong>${escapeHTML(p.sku)}</strong></div>
            <div><span>Category</span><strong>${escapeHTML(categoryName(p.category))}</strong></div>
            ${p.quantity ? `<div><span>Pack</span><strong>${escapeHTML(p.quantity)}</strong></div>` : ''}
            <div><span>Status</span><strong style="color:var(--signal)">In Stock</strong></div>
          </div>

          <div class="detail-cta">
            <a class="btn btn-primary"
               href="${escapeHTML(p.affiliateLink)}"
               target="_blank"
               rel="noopener noreferrer nofollow sponsored">
              Buy on Amazon
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M7 17 17 7"/><path d="M8 7h9v9"/>
              </svg>
            </a>
            <div class="affiliate-note">// As an Amazon Associate, FORGEYARD earns from qualifying purchases.</div>
          </div>

          <div class="detail-block">
            <h3>Field Notes</h3>
            <p>${escapeHTML(p.longDescription || p.description)}</p>
          </div>

          ${features ? `
          <div class="detail-block">
            <h3>Features</h3>
            <ul class="feat-list">${features}</ul>
          </div>` : ''}

          ${specRows ? `
          <div class="detail-block">
            <h3>Specifications</h3>
            <div class="spec-grid">${specRows}</div>
          </div>` : ''}

          ${useCases ? `
          <div class="detail-block">
            <h3>Trade Applications</h3>
            <div class="use-tags">${useCases}</div>
          </div>` : ''}
        </div>
      </div>

      ${renderRelated(p)}
    </div>
  `;
}

function renderRelated(p) {
  const related = products.filter(x => x.category === p.category && x.id !== p.id).slice(0, 3);
  if (!related.length) return '';
  return `
    <section class="section" style="padding:64px 0; border-bottom:0;">
      <div class="section-head">
        <div>
          <div class="section-tag">Related on Rail</div>
          <h2 class="section-title">More from ${escapeHTML(categoryName(p.category))}.</h2>
        </div>
      </div>
      ${renderProductGrid(related)}
    </section>
  `;
}

function viewAbout() {
  return `
    <section class="hero fade" style="padding-bottom:0;border-bottom:0;">
      <div class="container">
        <div class="hero-meta">
          <span class="pill">// FIELD SPEC</span>
          <span>FORGEYARD/DOCTRINE</span>
        </div>
        <h1>We don't sell <em>everything.</em><br/>We sell what survives.</h1>
        <p class="lede">FORGEYARD is a curated affiliate index for the construction trades. Every product on this rail has been on a real job site — either by us, or vetted by tradespeople we trust. If a product fails in the field, it gets pulled.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-head">
          <div>
            <div class="section-tag">Operating Doctrine</div>
            <h2 class="section-title">Four rules. Nothing else.</h2>
          </div>
        </div>
        <div class="about-grid">
          <div class="about-cell">
            <div class="about-cell-num">// 01</div>
            <h4>Trade-first selection</h4>
            <p>Categories mirror how crews work — ironworker, mechanical, civil. No "home & garden" filler.</p>
          </div>
          <div class="about-cell">
            <div class="about-cell-num">// 02</div>
            <h4>Verified spec</h4>
            <p>ANSI ratings, TPI, gauge, and material data are pulled from manufacturer documentation — not marketing copy.</p>
          </div>
          <div class="about-cell">
            <div class="about-cell-num">// 03</div>
            <h4>Field failure pulls</h4>
            <p>If a SKU disappoints in the field, it gets removed from the index — not buried.</p>
          </div>
          <div class="about-cell">
            <div class="about-cell-num">// 04</div>
            <h4>Honest economics</h4>
            <p>Affiliate-supported. Buying through our links costs you nothing extra and keeps the index running.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-head">
          <div>
            <div class="section-tag">Disclosure</div>
            <h2 class="section-title">Affiliate program.</h2>
          </div>
        </div>
        <p style="color:var(--text-dim); max-width:720px; line-height:1.7;">
          FORGEYARD is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. As an Amazon Associate, we earn from qualifying purchases. Our editorial selection is independent — products are chosen for field performance, not commission rate.
        </p>
      </div>
    </section>
  `;
}

function viewReviews() {
  return `
    <section class="hero fade" style="padding-bottom:0;border-bottom:0;">
      <div class="container">
        <div class="hero-meta">
          <span class="pill">// FIELD GUIDES</span>
          <span>FORGEYARD/REVIEWS</span>
        </div>
        <h1>Reviews and field guides<br/><em>for crews who actually do the work.</em></h1>
        <p class="lede">Long-form, no-marketing-copy guides on PPE, tools, and trade supply. Written by people who've used the gear on a real job site.</p>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="article-list">
          ${articles.map(a => `
            <a class="article-card" data-route="/reviews/${a.slug}">
              <div class="article-meta">
                <span>${escapeHTML(a.category)}</span>
                <span>${escapeHTML(a.readTime)}</span>
                <span>${escapeHTML(a.publishedAt)}</span>
              </div>
              <h2>${escapeHTML(a.title)}</h2>
              <p>${escapeHTML(a.excerpt)}</p>
              <div class="article-foot">Read field guide <span style="color:var(--hazard);">→</span></div>
            </a>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

function renderArticleBlock(block) {
  if (block.kind === 'p')   return `<p>${escapeHTML(block.text)}</p>`;
  if (block.kind === 'h2')  return `<h2>${escapeHTML(block.text)}</h2>`;
  if (block.kind === 'h3')  return `<h3>${escapeHTML(block.text)}</h3>`;
  if (block.kind === 'ul')  return `<ul>${block.items.map(i => `<li>${escapeHTML(i)}</li>`).join('')}</ul>`;
  if (block.kind === 'table') {
    const [head, ...rows] = block.rows;
    return `
      <div class="article-table-wrap">
        <table class="article-table">
          <thead><tr>${head.map(h => `<th>${escapeHTML(h)}</th>`).join('')}</tr></thead>
          <tbody>${rows.map(r => `<tr>${r.map(c => `<td>${escapeHTML(c)}</td>`).join('')}</tr>`).join('')}</tbody>
        </table>
      </div>`;
  }
  if (block.kind === 'product') {
    const p = products.find(x => x.id === block.id);
    if (!p) return '';
    return `
      <div class="inline-product" data-route="/product/${p.slug}">
        <div class="inline-product-img">
          <img src="${escapeHTML(p.imageUrl)}" alt="${escapeHTML(p.name)}" loading="lazy" onerror="this.style.opacity=0.3;this.src='images/_fallback.svg'">
        </div>
        <div class="inline-product-body">
          <div class="inline-product-tag">${block.label ? escapeHTML(block.label) : 'Recommended'}</div>
          <h4>${escapeHTML(p.name)}</h4>
          ${renderRating(p)}
          <p>${escapeHTML(p.tagline || p.description)}</p>
          <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:14px;">
            <a class="btn btn-primary" href="${escapeHTML(p.affiliateLink)}" target="_blank" rel="noopener noreferrer nofollow sponsored" onclick="event.stopPropagation()">Buy on Amazon →</a>
            <a class="btn" data-route="/product/${p.slug}">View Spec</a>
          </div>
        </div>
      </div>`;
  }
  return '';
}

function viewArticle(slug) {
  const a = articles.find(x => x.slug === slug);
  if (!a) return viewNotFound();
  return `
    <div class="container fade">
      <a class="detail-back" data-route="/reviews">← All Field Guides</a>
      <article class="article">
        <div class="article-meta" style="margin-bottom:20px;">
          <span>${escapeHTML(a.category)}</span>
          <span>${escapeHTML(a.readTime)}</span>
          <span>${escapeHTML(a.publishedAt)}</span>
        </div>
        <h1>${escapeHTML(a.title)}</h1>
        <p class="article-lede">${escapeHTML(a.excerpt)}</p>
        <div class="article-body">
          ${a.body.map(renderArticleBlock).join('')}
        </div>
        <div class="article-disclosure">
          // FORGEYARD is an Amazon Associate. We earn from qualifying purchases. Recommendations are independent of commission rates.
        </div>
      </article>
    </div>
  `;
}

function viewNotFound() {
  return `
    <div class="container">
      <div class="empty">
        <h2>// 404 — ROUTE NOT ON RAIL</h2>
        <p>That page doesn't exist on the index.</p>
        <a class="btn btn-primary" data-route="/">Return to Yard</a>
      </div>
    </div>
  `;
}

/* ---------------- router ---------------- */

function parseRoute() {
  const hash = (location.hash || '#/').replace(/^#/, '');
  const [, ...parts] = hash.split('/');
  return parts.filter(Boolean);
}

function render() {
  const parts = parseRoute();
  let html;
  if (parts.length === 0) html = viewHome();
  else if (parts[0] === 'catalog') html = viewCatalog(parts[1] || null);
  else if (parts[0] === 'product' && parts[1]) html = viewProduct(parts[1]);
  else if (parts[0] === 'reviews' && parts[1]) html = viewArticle(parts[1]);
  else if (parts[0] === 'reviews') html = viewReviews();
  else if (parts[0] === 'about') html = viewAbout();
  else html = viewNotFound();

  $app().innerHTML = html;
  syncNav();
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function syncNav() {
  const parts = parseRoute();
  const root = parts[0] || 'home';
  document.querySelectorAll('[data-nav]').forEach(el => {
    el.classList.toggle('active', el.dataset.nav === root);
  });
}

function navigate(path) {
  if (!path) return;
  if (path.startsWith('http')) { window.open(path, '_blank'); return; }
  const target = '#' + (path.startsWith('/') ? path : '/' + path);
  if (location.hash === target) render();
  else location.hash = target;
}

document.addEventListener('click', (e) => {
  const t = e.target.closest('[data-route]');
  if (!t) return;
  e.preventDefault();
  navigate(t.dataset.route);
});

window.addEventListener('hashchange', render);
document.addEventListener('DOMContentLoaded', render);
