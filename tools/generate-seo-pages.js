const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const site = "https://mmenterprisesmys.com";
const phone = "+91 92433 32224";
const phoneHref = "tel:919243332224";
const whatsapp = "https://wa.me/919243332224";
const lastmod = "2026-05-11";

const pages = [
  {
    slug: "about-mm-enterprises-mysore",
    category: "About",
    title: "About M M Enterprises Mysore",
    description:
      "Learn about M M Enterprises, Mysore's trusted supplier of school uniform accessories, medals, labels, badges and industrial uniforms since 1985.",
    keywords:
      "about M M Enterprises Mysore, school uniform supplier Mysore, uniform accessories Mysore, M M Enterprises Udayagiri",
    image: "/assets/MME_logo.png",
    intro:
      "M M Enterprises has served Mysore and Karnataka schools since 1985 with dependable school uniform accessories, custom branding and bulk supply support.",
    sections: [
      [
        "A Mysore uniform accessories supplier since 1985",
        "From Abdul Rahman Road, Udayagiri, M M Enterprises supports schools, colleges, retailers and organizations with products that are ordered every academic year: belts, socks, ties, badges, labels, medals and custom uniform accessories.",
      ],
      [
        "Built for school purchase cycles",
        "Schools need reliable delivery before admissions, reopening, sports day and annual day events. Our team handles repeat requirements, bulk quantities, custom school names, logo branding and practical product guidance.",
      ],
      [
        "What customers can expect",
        "Clear product options, GST invoicing, wholesale and retail ordering, custom branding support, and a local Mysore team that can discuss requirements before production or dispatch.",
      ],
    ],
    faqs: [
      ["Where is M M Enterprises located?", "M M Enterprises is located at 10, Syed Abdul Rahman Road, Udayagiri, Mysuru, Karnataka 570019."],
      ["What does M M Enterprises supply?", "We supply school belts, uniform socks, sports medals, award cups, designer labels, badges, ties, school accessories and industrial uniforms."],
      ["Do you take bulk orders?", "Yes. Bulk orders for schools, colleges, retailers and organizations are welcome."],
    ],
  },
  {
    slug: "school-uniform-belts-mysore",
    category: "School Belts",
    title: "School Uniform Belts in Mysore",
    description:
      "School uniform belts in Mysore for schools and retailers. Bulk school belt supply with custom school name printing and multiple sizes.",
    keywords:
      "school uniform belts Mysore, school belt supplier Mysore, school belts Karnataka, custom school belts Mysore",
    image: "/assets/School_Uniform_Belts.webp",
    intro:
      "Order durable school belts for daily uniform use, available in bulk for schools, uniform retailers and institutional buyers in Mysore.",
    sections: [
      ["Custom school belt options", "We support school name printing, color matching, buckle options and size mixes for primary, middle and high school students."],
      ["Bulk supply for reopening season", "Plan school belt orders before the academic year to avoid last-minute shortages. We can discuss quantities, class-wise sizes and repeat supply needs."],
      ["Who orders school belts from us", "CBSE schools, ICSE schools, state board schools, colleges, uniform shops, school canteen dealers and distributors across Mysore and Karnataka."],
    ],
    faqs: [
      ["Can school names be printed on belts?", "Yes. Custom school name printing is available for bulk belt orders."],
      ["Do you supply all student sizes?", "Yes. Size mixes can be planned for different classes and age groups."],
      ["Can retailers order wholesale belts?", "Yes. Retailers and uniform dealers can contact us for wholesale supply."],
    ],
  },
  {
    slug: "uniform-socks-mysore",
    category: "Uniform Socks",
    title: "Uniform Socks Supplier in Mysore",
    description:
      "Uniform socks in Mysore for schools, colleges and retailers. Bulk school socks in white, grey, navy and school colors.",
    keywords:
      "uniform socks Mysore, school socks supplier Mysore, wholesale school socks Karnataka, cotton school socks Mysore",
    image: "/assets/Uniform_Socks.webp",
    intro:
      "M M Enterprises supplies school socks in common school colors and bulk quantities for academic year requirements.",
    sections: [
      ["School colors and daily comfort", "Choose white, grey, navy and school-specific colors in cotton-blend options designed for regular student wear."],
      ["Bulk order planning", "We help schools and retailers plan color, size and quantity requirements so socks are ready before reopening or uniform distribution."],
      ["Pair with other uniform accessories", "Uniform socks can be ordered along with school belts, ties, badges, labels and other accessories for a complete student uniform package."],
    ],
    faqs: [
      ["Which colors are available?", "Common options include white, grey, navy and school-specific colors based on requirement."],
      ["Do you sell socks in bulk?", "Yes. Bulk school socks orders are welcome."],
      ["Can socks be ordered with belts and ties?", "Yes. Schools often combine socks, belts, ties and badges in one order."],
    ],
  },
  {
    slug: "sports-medals-awards-cups-mysore",
    category: "Medals & Cups",
    title: "Sports Medals, Awards and Cups in Mysore",
    description:
      "Buy sports medals, award cups and school prizes in Mysore for sports day, annual day, competitions and interschool events.",
    keywords:
      "sports medals Mysore, buy medals in Mysore, award cups Mysore, trophies and medals Mysore, school prizes Mysore",
    image: "/assets/Sports_Medals_Awards.webp",
    intro:
      "Get medals, awards and cups for school sports days, annual functions, competitions and recognition programs in Mysore.",
    sections: [
      ["Medals for every event", "Gold, silver and bronze medals can be planned for track events, games, interschool competitions, cultural programs and annual day awards."],
      ["Award cups and school prizes", "For winners, houses, teams and special recognition, award cups and prize items can be selected based on event size and budget."],
      ["Custom event details", "Add school name, event title, year and category details where engraving or customization is suitable for the selected medal or award item."],
    ],
    faqs: [
      ["Do you supply sports day medals?", "Yes. We supply medals for sports day, annual day and school competitions."],
      ["Are award cups available?", "Yes. Award cups and prize options can be discussed based on event requirements."],
      ["Can medals be customized?", "Custom engraving or event details are available for suitable medal and award options."],
    ],
  },
  {
    slug: "designer-labels-badges-mysore",
    category: "Labels & Badges",
    title: "Designer Labels and School Badges in Mysore",
    description:
      "Designer labels, school labels, name labels, cloth badges and embroidered badges in Mysore with custom school logo branding.",
    keywords:
      "designer labels Mysore, labeling in Mysore, school badges Mysore, embroidered badges Mysore, uniform labels Mysore",
    image: "/assets/Designer_Labels_Badges.webp",
    intro:
      "Order woven labels, name labels, cloth badges and embroidered school badges for uniforms, bags and institutional branding.",
    sections: [
      ["School labels and name labels", "Labels help schools maintain consistent branding on uniforms, bags and accessories. Options can be planned for logo, name, size and usage."],
      ["Badges for uniforms", "Cloth badges and embroidered emblems are suitable for shirts, blazers, sweaters, house uniforms and special programs."],
      ["Custom logo branding", "Share the school logo, preferred size and placement requirement so we can guide suitable label or badge options for bulk production."],
    ],
    faqs: [
      ["Do you make embroidered school badges?", "Yes. Embroidered badges and cloth badges are available for school uniform requirements."],
      ["Can labels include a school logo?", "Yes. Custom logo labels can be made for bulk school requirements."],
      ["Where can labels be used?", "Labels can be used on uniforms, bags, books, stationery and institutional accessories."],
    ],
  },
  {
    slug: "industrial-uniforms-workwear-mysore",
    category: "Industrial Wear",
    title: "Industrial Uniforms and Workwear in Mysore",
    description:
      "Industrial uniforms, safety uniforms, workwear, coveralls, jackets and reflective vests in Mysore for factories and technical teams.",
    keywords:
      "industrial uniforms Mysore, workwear Mysore, safety uniforms Mysore, industrial wear Mysore, factory uniforms Mysore",
    image: "/assets/Industrial_Uniforms.webp",
    intro:
      "M M Enterprises supplies practical industrial uniforms and workwear for factories, construction sites, service teams and technical staff.",
    sections: [
      ["Durable uniforms for daily work", "Industrial uniforms need comfort, movement and durability. Options can include shirts, pants, coveralls, jackets and workwear sets."],
      ["Safety and visibility", "Reflective vests and safety-oriented uniform options help teams remain visible and organized at factories, warehouses and field sites."],
      ["Branding for teams", "Company name, logo and department identification can be discussed for suitable industrial uniform and workwear orders."],
    ],
    faqs: [
      ["Do you supply factory uniforms?", "Yes. Industrial and factory uniform requirements can be discussed for bulk orders."],
      ["Are reflective vests available?", "Yes. Reflective vests and safety workwear options are available based on requirement."],
      ["Can company logos be added?", "Custom branding can be planned for suitable industrial uniform orders."],
    ],
  },
  {
    slug: "school-ties-accessories-mysore",
    category: "School Ties",
    title: "School Ties and Uniform Accessories in Mysore",
    description:
      "School ties, belts, socks, badges, labels and uniform accessories in Mysore for schools, colleges and retailers.",
    keywords:
      "school ties Mysore, school accessories Mysore, uniform accessories Mysore, school supplies Mysore",
    image: "/assets/sweater_tshirts_and_bags.png",
    intro:
      "Complete school accessory orders with ties, belts, socks, badges, labels and custom items for school uniform distribution.",
    sections: [
      ["One place for school accessories", "Schools can simplify ordering by combining ties, belts, socks, badges and labels under one supplier."],
      ["Matching school identity", "Tie colors, badge designs, belt print and labels can be aligned with the school's uniform policy and branding."],
      ["For schools and retailers", "We serve school offices, uniform retailers, canteen dealers and institutional buyers who need repeat accessory supply."],
    ],
    faqs: [
      ["Do you supply school ties?", "Yes. School ties and other uniform accessories can be ordered based on requirement."],
      ["Can accessories be matched to school colors?", "Yes. Color and branding requirements can be discussed for suitable products."],
      ["Can I order multiple accessories together?", "Yes. Combined orders are welcome."],
    ],
  },
  {
    slug: "custom-uniform-branding-mysore",
    category: "Custom Branding",
    title: "Custom Uniform Branding in Mysore",
    description:
      "Custom school uniform branding in Mysore: logo printing, labels, badges, school name printing and institutional identity products.",
    keywords:
      "custom uniform branding Mysore, school logo printing Mysore, custom labels Mysore, custom badges Mysore",
    image: "/assets/Custom_Requiremen.webp",
    intro:
      "Create consistent school identity across uniforms and accessories with custom logo printing, labels, badges and school name branding.",
    sections: [
      ["Branding for schools", "Use your school name, logo, house colors and event details across belts, labels, badges, medals and other uniform accessories."],
      ["What to share before production", "Share logo files, preferred size, color references, product quantity and expected delivery timeline for a clearer quote."],
      ["Custom requirements welcome", "If your requirement is not listed, contact us with photos or samples. We can review whether a matching or custom option is possible."],
    ],
    faqs: [
      ["Do you do school logo printing?", "Yes. Logo printing and branding are available for suitable school accessory products."],
      ["Can I share a sample?", "Yes. Sharing a sample or reference photo helps us understand the requirement."],
      ["Is custom branding available for small orders?", "Custom availability depends on product and quantity. Contact us with details for guidance."],
    ],
  },
  {
    slug: "school-uniforms-mysore",
    category: "School Uniforms",
    title: "School Uniforms and Accessories in Mysore",
    description:
      "School uniforms and accessories in Mysore including belts, socks, ties, badges, labels, sweaters, T-shirts and bags for institutions and retailers.",
    keywords:
      "school uniforms Mysore, buy uniforms Mysore, school uniform suppliers Mysore, school uniform accessories Mysore",
    image: "/assets/mme_hero.webp",
    intro:
      "Find practical school uniform support in Mysore, from daily accessories to custom branded items for school reopening and yearly distribution.",
    sections: [
      ["Uniform accessories for every class", "Belts, socks, ties, badges and labels can be planned by class, house color, size and school identity requirements."],
      ["Support for schools and shops", "Schools, colleges, uniform stores and canteen dealers can discuss yearly requirements, repeat orders and bulk supply timelines."],
      ["Custom school identity", "Logo labels, badges, school name printing and event items help keep uniform presentation consistent across students and staff."],
    ],
    faqs: [
      ["Do you supply complete school uniform accessories?", "Yes. We supply school belts, socks, ties, badges, labels and other uniform accessories."],
      ["Can schools order for reopening season?", "Yes. Schools can plan bulk orders before the academic year starts."],
      ["Do you support school branding?", "Yes. Custom logo, school name and label requirements can be discussed."],
    ],
  },
  {
    slug: "sweaters-tshirts-school-bags-mysore",
    category: "Sweaters, T-Shirts & Bags",
    title: "School Sweaters, T-Shirts and Bags in Mysore",
    description:
      "School sweaters, T-shirts, bags and related uniform accessories in Mysore with custom branding support for institutions.",
    keywords:
      "school sweaters Mysore, school t-shirts Mysore, school bags Mysore, custom school bags Mysore, school uniform accessories Mysore",
    image: "/assets/sweater_tshirts_and_bags.png",
    intro:
      "M M Enterprises can discuss school sweater, T-shirt, bag and related accessory requirements for institutions that need coordinated student branding.",
    sections: [
      ["Seasonal and event requirements", "Sweaters, T-shirts and bags are useful for winter uniforms, sports events, house activities, excursions and school programs."],
      ["Branding and identification", "School names, logos, house colors and event details can be planned where the selected item supports custom branding."],
      ["Order details to share", "Send quantity, sizes, colors, logo reference and delivery timeline so we can guide availability and next steps."],
    ],
    faqs: [
      ["Do you provide school sweaters?", "School sweater requirements can be discussed based on quantity, color and branding needs."],
      ["Can T-shirts include school branding?", "Custom branding can be planned for suitable T-shirt orders."],
      ["Are school bags available for bulk orders?", "School bag requirements can be discussed with quantity and branding details."],
    ],
  },
  {
    slug: "wholesale-school-uniform-accessories-mysore",
    category: "Wholesale",
    title: "Wholesale School Uniform Accessories in Mysore",
    description:
      "Wholesale school uniform accessories in Mysore for schools and retailers: belts, socks, ties, badges, labels, medals and more.",
    keywords:
      "wholesale school accessories Mysore, bulk school uniforms Mysore, uniform accessories wholesale Mysore, school uniform wholesalers Mysore",
    image: "/assets/mme_hero.webp",
    intro:
      "M M Enterprises supports wholesale and bulk school accessory requirements for Mysore schools, colleges, shops and institutional buyers.",
    sections: [
      ["Bulk products available", "School belts, socks, ties, labels, badges, medals, award cups, industrial uniforms and custom accessories can be discussed for bulk supply."],
      ["Useful for retailers and schools", "Uniform stores, school canteen dealers, school offices and distributors can plan repeat orders with clear quantities and seasonal timelines."],
      ["How to request a quote", "Share product names, quantity, sizes, colors, branding needs and delivery timeline on WhatsApp or by calling our Mysore store."],
    ],
    faqs: [
      ["Do you provide wholesale pricing?", "Wholesale and bulk pricing can be discussed based on product and quantity."],
      ["Which products are available in bulk?", "Belts, socks, ties, labels, badges, medals, award cups and industrial uniforms are commonly ordered in bulk."],
      ["Do you supply outside Mysore?", "We serve Mysore and schools across Karnataka."],
    ],
  },
];

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function esc(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function nav(prefix) {
  return `
    <div class="cursor" id="c"></div>
    <div class="cursor-ring" id="cr"></div>
    <div class="progress-bar" id="pb"></div>
    <nav id="nav">
      <a class="nav-logo" href="${prefix}" aria-label="M M Enterprises home">
        <div class="nav-logo-mark">
          <img class="nav-logo-img" src="${prefix}assets/MME_logo.png" alt="M M Enterprises logo" />
        </div>
      </a>
      <ul class="nav-links">
        <li><a href="${prefix}#products">Products</a></li>
        <li><a href="${prefix}#services">Services</a></li>
        <li><a href="${prefix}#about">About Us</a></li>
        <li><a href="${prefix}#clients">Who We Serve</a></li>
        <li><a href="${prefix}#testimonials">Reviews</a></li>
        <li><a href="${prefix}blog/">Blog</a></li>
        <li><a href="${prefix}#contact">Contact & Quote</a></li>
      </ul>
      <a class="nav-enquire" href="${whatsapp}" target="_blank" rel="noopener">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2.5"
          aria-hidden="true"
        >
          <path
            d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
          />
        </svg>
        <span>Enquire Now</span>
      </a>
      <div class="nav-ham" id="ham" aria-label="Open menu" role="button" tabindex="0">
        <span></span><span></span><span></span>
      </div>
    </nav>
    <div id="mob-menu" class="mob-menu">
      <a href="${prefix}#products">Products</a>
      <a href="${prefix}#services">Services</a>
      <a href="${prefix}#about">About Us</a>
      <a href="${prefix}#clients">Who We Serve</a>
      <a href="${prefix}#testimonials">Reviews</a>
      <a href="${prefix}blog/">Blog</a>
      <a href="${prefix}#contact">Contact & Quote</a>
    </div>
    <a class="wa-float" href="${whatsapp}" target="_blank" rel="noopener" aria-label="WhatsApp M M Enterprises">
      <span>WhatsApp</span>
    </a>`;
}

function footer(prefix) {
  return `
    <footer>
      <div class="footer-top">
        <div class="footer-brand-block">
          <div class="footer-logo-row">
            <div class="nav-logo-mark">
              <img class="nav-logo-img" src="${prefix}assets/MME_logo.png" alt="M M Enterprises logo" />
            </div>
          </div>
          <p class="footer-desc">Karnataka's trusted wholesale supplier of school uniform accessories since 1985.</p>
          <div class="footer-gold-line"></div>
        </div>
        <div class="footer-columns">
          <div class="footer-col">
            <h4>Products</h4>
            <div class="footer-links">
              <a href="${prefix}blog/school-uniform-belts-mysore/">School Belts</a>
              <a href="${prefix}blog/uniform-socks-mysore/">Uniform Socks</a>
              <a href="${prefix}blog/sports-medals-awards-cups-mysore/">Medals & Cups</a>
              <a href="${prefix}blog/designer-labels-badges-mysore/">Labels & Badges</a>
              <a href="${prefix}blog/industrial-uniforms-workwear-mysore/">Industrial Uniforms</a>
            </div>
          </div>
          <div class="footer-col">
            <h4>Company</h4>
            <div class="footer-links">
              <a href="${prefix}blog/about-mm-enterprises-mysore/">About M M Enterprises</a>
              <a href="${prefix}blog/wholesale-school-uniform-accessories-mysore/">Wholesale Supply</a>
              <a href="${prefix}#contact">Contact</a>
              <a href="${whatsapp}" target="_blank" rel="noopener">WhatsApp</a>
            </div>
          </div>
          <div class="footer-col">
            <h4>Contact</h4>
            <div class="footer-links">
              <a href="${phoneHref}">${phone}</a>
              <a href="${prefix}#contact">Udayagiri, Mysuru - 570019</a>
              <a href="${site}">mmenterprisesmys.com</a>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 1985-2026 M M Enterprises. All rights reserved.</span>
        <span>GST Registered</span>
      </div>
    </footer>`;
}

function scripts() {
  return `
    <script>
      const navEl = document.getElementById("nav");
      const ham = document.getElementById("ham");
      const mob = document.getElementById("mob-menu");
      const progress = document.getElementById("pb");
      function toggleMenu() { mob?.classList.toggle("open"); ham?.classList.toggle("open"); }
      ham?.addEventListener("click", toggleMenu);
      ham?.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") toggleMenu();
      });
      mob?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => mob.classList.remove("open")));
      window.addEventListener("scroll", () => {
        navEl?.classList.toggle("scrolled", window.scrollY > 24);
        const height = document.documentElement.scrollHeight - window.innerHeight;
        progress.style.width = height > 0 ? (window.scrollY / height) * 100 + "%" : "0";
      }, { passive: true });
    </script>`;
}

function layout({ title, description, keywords, canonical, image, body, prefix, type = "website", schema }) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${esc(title)}</title>
    <meta name="description" content="${esc(description)}" />
    <meta name="keywords" content="${esc(keywords)}" />
    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
    <meta name="theme-color" content="#3b0f17" />
    <link rel="canonical" href="${canonical}" />
    <link rel="icon" href="${prefix}favicon.ico" sizes="any" />
    <link rel="icon" type="image/png" sizes="32x32" href="${prefix}assets/favicon-32.png" />
    <link rel="icon" type="image/png" sizes="192x192" href="${prefix}assets/favicon-192.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="${prefix}assets/favicon-180.png" />
    <meta property="og:type" content="${type}" />
    <meta property="og:title" content="${esc(title)}" />
    <meta property="og:description" content="${esc(description)}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${site}${image}" />
    <meta property="og:site_name" content="M M Enterprises" />
    <meta property="og:locale" content="en_IN" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(title)}" />
    <meta name="twitter:description" content="${esc(description)}" />
    <meta name="twitter:image" content="${site}${image}" />
    <script type="application/ld+json">${JSON.stringify(schema, null, 2)}</script>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600&family=DM+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="${prefix}styles.css" />
    <link rel="stylesheet" href="${prefix}blog/seo-pages.css" />
  </head>
  <body>
${nav(prefix)}
${body}
${footer(prefix)}
${scripts()}
  </body>
</html>
`;
}

function pageHtml(page) {
  const canonical = `${site}/blog/${page.slug}/`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.title,
    description: page.description,
    image: `${site}${page.image}`,
    datePublished: lastmod,
    dateModified: lastmod,
    author: { "@type": "Organization", name: "M M Enterprises" },
    publisher: {
      "@type": "Organization",
      name: "M M Enterprises",
      logo: { "@type": "ImageObject", url: `${site}/assets/MME_logo.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
    about: [page.category, "Mysore", "School Uniform Accessories"],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  const body = `
    <main class="seo-page">
      <section class="seo-hero">
        <div class="seo-hero-copy">
          <p class="seo-eyebrow">${esc(page.category)} - Mysore</p>
          <h1>${esc(page.title)}</h1>
          <p class="seo-lead">${esc(page.intro)}</p>
          <div class="seo-actions">
            <a class="btn-gold" href="${whatsapp}" target="_blank" rel="noopener">WhatsApp for Quote</a>
            <a class="btn-ghost" href="${phoneHref}">Call ${phone}</a>
          </div>
        </div>
        <div class="seo-hero-media">
          <img src="../..${page.image}" alt="${esc(page.title)}" />
        </div>
      </section>
      <article class="seo-article">
        ${page.sections
          .map(
            ([heading, text]) => `
        <section>
          <h2>${esc(heading)}</h2>
          <p>${esc(text)}</p>
        </section>`,
          )
          .join("")}
        <section class="seo-list-section">
          <h2>Products and requirements we can discuss</h2>
          <ul>
            <li>School belts, school ties and daily uniform accessories</li>
            <li>Uniform socks, badges, labels and custom school branding</li>
            <li>Sports medals, award cups, annual day prizes and event items</li>
            <li>Industrial uniforms, workwear, reflective vests and team branding</li>
          </ul>
        </section>
        <section class="seo-faq">
          <h2>FAQs</h2>
          ${page.faqs
            .map(
              ([q, a]) => `
          <details>
            <summary>${esc(q)}</summary>
            <p>${esc(a)}</p>
          </details>`,
            )
            .join("")}
        </section>
        <div class="seo-callout">
          <strong>Need ${esc(page.category.toLowerCase())} in Mysore?</strong>
          <p>Share quantity, sizes, colors, branding needs and delivery timeline. We will guide you with availability and a practical quote.</p>
          <a class="btn-gold" href="${whatsapp}" target="_blank" rel="noopener">Message M M Enterprises</a>
        </div>
      </article>
    </main>
    <script type="application/ld+json">${JSON.stringify(faqSchema, null, 2)}</script>`;

  return layout({
    title: `${page.title} | M M Enterprises`,
    description: page.description,
    keywords: page.keywords,
    canonical,
    image: page.image,
    prefix: "../../",
    type: "article",
    schema,
    body,
  });
}

function indexHtml() {
  const canonical = `${site}/blog/`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "M M Enterprises Product Guides",
    description:
      "Product guides for M M Enterprises items including school belts, socks, medals, award cups, labels, badges and industrial uniforms in Mysore.",
    url: canonical,
    publisher: { "@type": "Organization", name: "M M Enterprises" },
  };
  const body = `
    <main class="seo-page">
      <section class="seo-index-hero">
        <p class="seo-eyebrow">M M Enterprises - Mysore</p>
        <h1>School Uniform Accessories, Medals, Cups and Workwear Guides</h1>
        <p class="seo-lead">Explore the products available from M M Enterprises, including school belts, uniform socks, designer labels, badges, sports medals, award cups, custom branding and industrial uniforms.</p>
      </section>
      <section class="seo-grid" aria-label="Product guide pages">
        ${pages
          .map(
            (page) => `
        <article class="seo-card">
          <img src="..${page.image}" alt="${esc(page.title)}" />
          <div>
            <span>${esc(page.category)}</span>
            <h2>${esc(page.title)}</h2>
            <p>${esc(page.description)}</p>
            <a href="/blog/${page.slug}/">Read guide</a>
          </div>
        </article>`,
          )
          .join("")}
      </section>
    </main>`;
  return layout({
    title: "M M Enterprises Product Guides | Uniform Accessories Mysore",
    description:
      "Guides for school belts, socks, medals, award cups, designer labels, badges, school ties and industrial uniforms from M M Enterprises Mysore.",
    keywords:
      "M M Enterprises blog, uniform accessories Mysore, medals Mysore, award cups Mysore, industrial uniforms Mysore",
    canonical,
    image: "/assets/MME_logo.png",
    prefix: "../",
    schema,
    body,
  });
}

const css = `
.seo-page {
  width: min(1180px, 90vw);
  margin: 0 auto;
  padding: 112px 0 72px;
}
.seo-hero,
.seo-index-hero {
  min-height: 420px;
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.95fr);
  gap: 44px;
  align-items: center;
  padding: 34px 0 54px;
}
.seo-index-hero {
  display: block;
  min-height: auto;
  max-width: 880px;
}
.seo-eyebrow {
  color: var(--gold);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 14px;
}
.seo-page h1 {
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(42px, 7vw, 84px);
  line-height: 0.95;
  color: var(--navy);
  letter-spacing: 0;
  margin: 0 0 20px;
}
.seo-lead {
  max-width: 760px;
  color: var(--muted);
  font-size: clamp(17px, 2vw, 20px);
  line-height: 1.8;
}
.seo-actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-top: 28px;
}
.btn-gold,
.btn-ghost {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  padding: 12px 20px;
  border-radius: 7px;
  font-weight: 700;
  text-decoration: none;
}
.btn-gold {
  background: var(--gold);
  color: var(--white);
}
.btn-ghost {
  border: 1px solid rgba(59, 15, 23, 0.16);
  color: var(--navy);
  background: rgba(255, 255, 255, 0.45);
}
.seo-hero-media {
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba(59, 15, 23, 0.1);
  box-shadow: 0 24px 80px rgba(59, 15, 23, 0.14);
  background: var(--white);
}
.seo-hero-media img {
  display: block;
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
}
.seo-article {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 18px;
  max-width: 920px;
}
.seo-article section,
.seo-callout,
.seo-card {
  background: rgba(255, 255, 255, 0.58);
  border: 1px solid rgba(59, 15, 23, 0.09);
  border-radius: 8px;
  padding: 26px;
  box-shadow: 0 16px 44px rgba(59, 15, 23, 0.06);
}
.seo-article h2,
.seo-card h2 {
  font-family: "Cormorant Garamond", serif;
  color: var(--navy);
  font-size: clamp(28px, 4vw, 38px);
  line-height: 1.05;
  margin-bottom: 10px;
}
.seo-article p,
.seo-article li,
.seo-card p {
  color: var(--muted);
  line-height: 1.8;
  font-size: 16px;
}
.seo-article ul {
  margin: 10px 0 0 20px;
}
.seo-faq details {
  border-top: 1px solid rgba(59, 15, 23, 0.1);
  padding: 16px 0;
}
.seo-faq summary {
  cursor: pointer;
  color: var(--navy);
  font-weight: 700;
}
.seo-callout {
  background: linear-gradient(135deg, rgba(199, 59, 59, 0.1), rgba(255, 255, 255, 0.72));
}
.seo-callout strong {
  display: block;
  color: var(--navy);
  font-size: 22px;
  margin-bottom: 8px;
}
.seo-callout .btn-gold {
  margin-top: 16px;
}
.seo-related {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 24px;
}
.seo-related a {
  color: var(--navy);
  text-decoration: none;
  border-bottom: 1px solid rgba(199, 59, 59, 0.45);
}
.seo-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  padding-bottom: 20px;
}
.seo-card {
  display: grid;
  gap: 18px;
  padding: 0;
  overflow: hidden;
}
.seo-card img {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  display: block;
}
.seo-card div {
  padding: 0 22px 24px;
}
.seo-card span {
  display: inline-block;
  color: var(--gold);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 10px;
}
.seo-card h2 {
  font-size: 30px;
}
.seo-card a {
  display: inline-flex;
  margin-top: 14px;
  color: var(--gold);
  font-weight: 700;
  text-decoration: none;
}
.wa-float span {
  color: var(--white);
  font-weight: 700;
}
@media (max-width: 980px) {
  .seo-hero {
    grid-template-columns: 1fr;
    min-height: auto;
  }
  .seo-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (max-width: 640px) {
  .seo-page {
    width: min(92vw, 1180px);
    padding-top: 96px;
  }
  .seo-grid {
    grid-template-columns: 1fr;
  }
  .seo-actions a {
    width: 100%;
  }
  .seo-article section,
  .seo-callout {
    padding: 22px;
  }
}
`;

ensureDir(path.join(root, "blog"));
fs.writeFileSync(path.join(root, "blog", "seo-pages.css"), css.trim() + "\n");
fs.writeFileSync(path.join(root, "blog", "index.html"), indexHtml());

for (const page of pages) {
  const dir = path.join(root, "blog", page.slug);
  ensureDir(dir);
  fs.writeFileSync(path.join(dir, "index.html"), pageHtml(page));
}

const sitemapUrls = [
  { loc: `${site}/`, priority: "1.0", changefreq: "weekly" },
  { loc: `${site}/blog/`, priority: "0.8", changefreq: "weekly" },
  ...pages.map((page) => ({
    loc: `${site}/blog/${page.slug}/`,
    priority: "0.7",
    changefreq: "monthly",
  })),
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls
  .map(
    (entry) => `
  <url>
    <loc>${entry.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

fs.writeFileSync(path.join(root, "sitemap.xml"), sitemap);

console.log(`Generated ${pages.length + 1} product guide pages and sitemap.xml`);
