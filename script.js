const ICONS = {
  shield:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>',
  badge:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 12l2 2 4-4" /><path d="M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>',
  layers:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>',
  clock:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>',
  school:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /></svg>',
  book:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" /><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" /></svg>',
  cart:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" /></svg>',
  pin:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>',
  phone:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>',
  time:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>',
  web:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>',
};

const getValue = (obj, path) =>
  path.split(".").reduce((acc, key) => (acc ? acc[key] : undefined), obj);

const setText = (el, value) => {
  if (el && value !== undefined && value !== null) el.textContent = value;
};

const setHtml = (el, value) => {
  if (el && value !== undefined && value !== null) el.innerHTML = value;
};

const setAttr = (el, attr, value) => {
  if (el && value !== undefined && value !== null) el.setAttribute(attr, value);
};

const applyBindings = (data) => {
  document.querySelectorAll("[data-text]").forEach((el) => {
    setText(el, getValue(data, el.dataset.text));
  });
  document.querySelectorAll("[data-html]").forEach((el) => {
    setHtml(el, getValue(data, el.dataset.html));
  });
  document.querySelectorAll("[data-src]").forEach((el) => {
    setAttr(el, "src", getValue(data, el.dataset.src));
  });
  document.querySelectorAll("[data-alt]").forEach((el) => {
    setAttr(el, "alt", getValue(data, el.dataset.alt));
  });
  document.querySelectorAll("[data-href]").forEach((el) => {
    setAttr(el, "href", getValue(data, el.dataset.href));
  });
  document.querySelectorAll("[data-placeholder]").forEach((el) => {
    setAttr(el, "placeholder", getValue(data, el.dataset.placeholder));
  });
};

const renderList = (container, templateId, items, renderItem) => {
  if (!container || !items) return;
  container.innerHTML = "";
  const template = document.getElementById(templateId);
  items.forEach((item) => {
    const node = template.content.firstElementChild.cloneNode(true);
    renderItem(node, item);
    container.appendChild(node);
  });
};

const initCursor = () => {
  const c = document.getElementById("c");
  const cr = document.getElementById("cr");
  if (!c || !cr) return;

  document.addEventListener("mousemove", (e) => {
    c.style.left = `${e.clientX}px`;
    c.style.top = `${e.clientY}px`;
    setTimeout(() => {
      cr.style.left = `${e.clientX}px`;
      cr.style.top = `${e.clientY}px`;
    }, 60);
  });
};

const bindCursorTargets = () => {
  const c = document.getElementById("c");
  const cr = document.getElementById("cr");
  if (!c || !cr) return;

  document
    .querySelectorAll("a,button,.product-card,.why-card,.client-badge")
    .forEach((el) => {
      el.addEventListener("mouseenter", () => {
        c.style.width = "14px";
        c.style.height = "14px";
        cr.style.width = "44px";
        cr.style.height = "44px";
      });
      el.addEventListener("mouseleave", () => {
        c.style.width = "8px";
        c.style.height = "8px";
        cr.style.width = "32px";
        cr.style.height = "32px";
      });
    });
};

const initScroll = () => {
  const pb = document.getElementById("pb");
  const nav = document.getElementById("nav");
  if (!pb || !nav) return;

  window.addEventListener("scroll", () => {
    const pct =
      (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
      100;
    pb.style.width = `${Math.round(pct)}%`;
    nav.classList.toggle("scrolled", window.scrollY > 60);
  });
};

const initMenu = () => {
  const ham = document.getElementById("ham");
  const mob = document.getElementById("mob-menu");
  if (!ham || !mob) return;

  let open = false;
  const setOpen = (value) => {
    open = value;
    mob.classList.toggle("open", open);
  };

  ham.addEventListener("click", () => setOpen(!open));
  ham.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpen(!open);
    }
  });

  document.addEventListener("click", (e) => {
    if (open && !e.target.closest("nav") && !e.target.closest("#mob-menu")) {
      setOpen(false);
    }
  });

  return { close: () => setOpen(false) };
};

const initReveal = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add("in"), index * 90);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -30px 0px" },
  );

  const observe = () => {
    document.querySelectorAll(".fade:not(.observed)").forEach((el) => {
      el.classList.add("observed");
      observer.observe(el);
    });
  };

  observe();

  setTimeout(() => {
    document
      .querySelectorAll(".hero .fade")
      .forEach((el) => el.classList.add("in"));
  }, 100);

  return observe;
};

const initForm = () => {
  const form = document.getElementById("enquiry-form");
  const ok = document.getElementById("form-ok");
  if (!form || !ok) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    form.style.display = "none";
    ok.style.display = "block";
  });
};

const initImageFallback = (scope) => {
  scope.querySelectorAll("img").forEach((img) => {
    img.addEventListener("error", () => {
      img.style.opacity = "0";
    });
  });
};

const applyContent = (data) => {
  if (!data) return;

  const metaDesc = document.getElementById("meta-description");
  const metaKeywords = document.getElementById("meta-keywords");
  const metaAuthor = document.getElementById("meta-author");
  const metaCanonical = document.getElementById("meta-canonical");
  const ogTitle = document.getElementById("og-title");
  const ogDescription = document.getElementById("og-description");
  const ogUrl = document.getElementById("og-url");
  const ogImage = document.getElementById("og-image");
  const ogSiteName = document.getElementById("og-site-name");
  const twitterTitle = document.getElementById("twitter-title");
  const twitterDescription = document.getElementById("twitter-description");
  const twitterImage = document.getElementById("twitter-image");
  const twitterSite = document.getElementById("twitter-site");
  const structuredData = document.getElementById("structured-data");
  if (data.meta?.title) document.title = data.meta.title;
  if (metaDesc) setAttr(metaDesc, "content", data.meta?.description || "");
  if (metaKeywords) setAttr(metaKeywords, "content", data.meta?.keywords || "");
  if (metaAuthor) setAttr(metaAuthor, "content", data.meta?.author || "");
  if (metaCanonical) setAttr(metaCanonical, "href", data.meta?.canonical || "");

  if (ogTitle) setAttr(ogTitle, "content", data.meta?.ogTitle || data.meta?.title || "");
  if (ogDescription)
    setAttr(ogDescription, "content", data.meta?.ogDescription || data.meta?.description || "");
  if (ogUrl) setAttr(ogUrl, "content", data.meta?.canonical || "");
  if (ogImage) setAttr(ogImage, "content", data.meta?.ogImage || "");
  if (ogSiteName) setAttr(ogSiteName, "content", data.meta?.siteName || "");

  if (twitterTitle)
    setAttr(twitterTitle, "content", data.meta?.twitterTitle || data.meta?.title || "");
  if (twitterDescription)
    setAttr(
      twitterDescription,
      "content",
      data.meta?.twitterDescription || data.meta?.description || "",
    );
  if (twitterImage) setAttr(twitterImage, "content", data.meta?.twitterImage || data.meta?.ogImage || "");
  if (twitterSite) setAttr(twitterSite, "content", data.meta?.twitterSite || "");

  const waFloat = document.getElementById("wa-float");
  if (waFloat) setAttr(waFloat, "href", data.wa?.href || "#");

  const navCta = document.getElementById("nav-cta");
  if (navCta && data.nav?.cta?.href) setAttr(navCta, "href", data.nav.cta.href);

  const heroImg = document.getElementById("hero-image");
  if (heroImg && data.hero?.image) {
    setAttr(heroImg, "src", data.hero.image.src);
    setAttr(heroImg, "alt", data.hero.image.alt);
  }

  const aboutMain = document.getElementById("about-image-main");
  if (aboutMain && data.about?.images?.main) {
    setAttr(aboutMain, "src", data.about.images.main.src);
    setAttr(aboutMain, "alt", data.about.images.main.alt);
  }

  const aboutAccent = document.getElementById("about-image-accent");
  if (aboutAccent && data.about?.images?.accent) {
    setAttr(aboutAccent, "src", data.about.images.accent.src);
    setAttr(aboutAccent, "alt", data.about.images.accent.alt);
  }

  const contactMap = document.getElementById("contact-map");
  if (contactMap && data.contact?.map?.embedSrc) {
    setAttr(contactMap, "src", data.contact.map.embedSrc);
  }

  const contactDirections = document.getElementById("contact-directions");
  if (contactDirections && data.contact?.map?.directionsHref) {
    setAttr(contactDirections, "href", data.contact.map.directionsHref);
  }

  const formOk = document.getElementById("form-ok");
  if (formOk) setText(formOk, data.contact?.form?.successMessage || "");

  const formWhatsApp = document.getElementById("form-whatsapp");
  if (formWhatsApp && data.contact?.form?.whatsappHref) {
    setAttr(formWhatsApp, "href", data.contact.form.whatsappHref);
    setText(formWhatsApp, data.contact.form.whatsappLabel || "");
  }

  applyBindings(data);

  renderList(
    document.getElementById("nav-links"),
    "nav-link-template",
    data.nav?.links,
    (node, item) => {
      const link = node.querySelector("a");
      setAttr(link, "href", item.href || "#");
      setText(link, item.label || "");
    },
  );

  renderList(
    document.getElementById("mob-menu"),
    "footer-link-template",
    data.nav?.links,
    (node, item) => {
      setAttr(node, "href", item.href || "#");
      setText(node, item.label || "");
      node.classList.add("mob-link");
    },
  );

  renderList(
    document.getElementById("hero-actions"),
    "hero-action-template",
    data.hero?.actions,
    (node, item) => {
      node.className = item.style === "ghost" ? "btn-ghost" : "btn-gold";
      if (item.size === "lg") node.classList.add("btn-lg");
      if (item.style === "ghost" && item.size === "lg")
        node.classList.add("btn-ghost-lg");
      setAttr(node, "href", item.href || "#");
      if (item.newTab) {
        setAttr(node, "target", "_blank");
        setAttr(node, "rel", "noopener");
      } else {
        node.removeAttribute("target");
        node.removeAttribute("rel");
      }
      setText(node, item.label || "");
    },
  );

  renderList(
    document.getElementById("hero-stats"),
    "hero-stat-template",
    data.hero?.stats,
    (node, item) => {
      setHtml(node.querySelector(".hero-stat-num"), item.valueHtml || "");
      setText(node.querySelector(".hero-stat-label"), item.label || "");
    },
  );

  renderList(
    document.getElementById("ticker-inner"),
    "ticker-item-template",
    [...(data.ticker || []), ...(data.ticker || [])],
    (node, item) => {
      const textNode = node.childNodes[0];
      if (textNode) textNode.textContent = `${item} `;
    },
  );

  renderList(
    document.getElementById("products-grid"),
    "product-card-template",
    data.products?.items,
    (node, item) => {
      const img = node.querySelector(".product-img");
      const badge = node.querySelector(".product-cat-badge");
      const special = node.querySelector(".product-special");
      const specialText = node.querySelector(".product-special-text");

      if (item.theme === "special") {
        node.classList.add("product-card--special");
        if (img) img.setAttribute("hidden", "true");
        if (special) special.removeAttribute("hidden");
        setText(specialText, item.specialText || "");
      } else {
        if (img) {
          setAttr(img, "src", item.image?.src || "");
          setAttr(img, "alt", item.image?.alt || "");
        }
      }

      setText(badge, item.badge || "");
      setText(node.querySelector(".product-name"), item.name || "");
      setText(node.querySelector(".product-desc"), item.description || "");

      renderList(
        node.querySelector(".product-tags"),
        "product-tag-template",
        item.tags || [],
        (tagNode, tag) => setText(tagNode, tag),
      );

      const enquire = node.querySelector(".product-enquire");
      setAttr(enquire, "href", item.cta?.href || "#");
      setText(node.querySelector(".product-enquire-label"), item.cta?.label || "");
      if (item.cta?.newTab) {
        setAttr(enquire, "target", "_blank");
        setAttr(enquire, "rel", "noopener");
      } else {
        enquire.removeAttribute("target");
        enquire.removeAttribute("rel");
      }
    },
  );

  renderList(
    document.getElementById("why-grid"),
    "why-card-template",
    data.why?.items,
    (node, item) => {
      setHtml(node.querySelector(".why-icon"), ICONS[item.icon] || "");
      setText(node.querySelector(".why-title"), item.title || "");
      setText(node.querySelector(".why-text"), item.text || "");
    },
  );

  renderList(
    document.getElementById("about-text"),
    "about-text-template",
    data.about?.text,
    (node, item) => setText(node, item),
  );

  renderList(
    document.getElementById("about-list"),
    "about-list-template",
    data.about?.bullets,
    (node, item) => {
      setText(node.querySelector("span"), item);
    },
  );

  renderList(
    document.getElementById("about-facts"),
    "about-fact-template",
    data.about?.facts,
    (node, item) => {
      setHtml(node.querySelector(".about-fact-num"), item.valueHtml || "");
      setText(node.querySelector(".about-fact-label"), item.label || "");
    },
  );

  renderList(
    document.getElementById("clients-badges"),
    "client-badge-template",
    data.clients?.items,
    (node, item) => {
      setHtml(node.querySelector(".client-icon"), ICONS[item.icon] || "");
      setText(node.querySelector(".client-label"), item.label || "");
    },
  );

  renderList(
    document.getElementById("testi-grid"),
    "testi-card-template",
    data.testimonials?.items,
    (node, item) => {
      setText(node.querySelector(".testi-stars"), item.stars || "*****");
      setText(node.querySelector(".testi-quote"), item.quote || "");
      setText(node.querySelector(".testi-avatar"), item.avatar || "");
      setText(node.querySelector(".testi-name"), item.name || "");
      setText(node.querySelector(".testi-role"), item.role || "");
    },
  );

  renderList(
    document.getElementById("cta-actions"),
    "cta-action-template",
    data.cta?.actions,
    (node, item) => {
      node.className = item.style === "ghost" ? "btn-ghost" : "btn-gold";
      if (item.size === "lg") node.classList.add("btn-lg");
      if (item.style === "ghost" && item.size === "lg")
        node.classList.add("btn-ghost-lg");
      setAttr(node, "href", item.href || "#");
      if (item.newTab) {
        setAttr(node, "target", "_blank");
        setAttr(node, "rel", "noopener");
      } else {
        node.removeAttribute("target");
        node.removeAttribute("rel");
      }
      setHtml(node, item.labelHtml || item.label || "");
    },
  );

  renderList(
    document.getElementById("contact-list"),
    "contact-item-template",
    data.contact?.items,
    (node, item) => {
      setHtml(node.querySelector(".contact-icon-wrap"), ICONS[item.icon] || "");
      setText(node.querySelector(".contact-label"), item.label || "");
      if (item.valueHtml) {
        setHtml(node.querySelector(".contact-value"), item.valueHtml);
      } else {
        setText(node.querySelector(".contact-value"), item.value || "");
      }
    },
  );

  const select = document.getElementById("product-select");
  if (select && data.contact?.form?.productOptions) {
    select.innerHTML = "";
    data.contact.form.productOptions.forEach((opt) => {
      const option = document.createElement("option");
      option.textContent = opt;
      select.appendChild(option);
    });
  }

  renderList(
    document.getElementById("footer-columns"),
    "footer-column-template",
    data.footer?.columns,
    (node, item) => {
      setText(node.querySelector("h4"), item.title || "");
      renderList(
        node.querySelector(".footer-links"),
        "footer-link-template",
        item.links || [],
        (linkNode, link) => {
          setAttr(linkNode, "href", link.href || "#");
          setText(linkNode, link.label || "");
          if (link.newTab) {
            setAttr(linkNode, "target", "_blank");
            setAttr(linkNode, "rel", "noopener");
          }
        },
      );
    },
  );

  if (structuredData && data.structuredData) {
    structuredData.textContent = JSON.stringify(data.structuredData, null, 2);
  }
};

const loadContent = async () => {
  try {
    const response = await fetch("content.json", { cache: "no-store" });
    const data = await response.json();
    applyContent(data);
    bindCursorTargets();
    initImageFallback(document);
    observeFades();
  } catch (err) {
    console.error("Failed to load content.json", err);
  }
};

let observeFades = () => {};

document.addEventListener("DOMContentLoaded", () => {
  initCursor();
  initScroll();
  const menu = initMenu();
  observeFades = initReveal();
  initForm();

  document.addEventListener("click", (e) => {
    if (e.target.closest(".mob-link") && menu) menu.close();
  });

  loadContent();
});
