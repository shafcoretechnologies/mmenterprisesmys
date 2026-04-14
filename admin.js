let contentData = null;

const el = (id) => document.getElementById(id);

const getByPath = (obj, path) =>
  path.split(".").reduce((acc, key) => (acc ? acc[key] : undefined), obj);

const setByPath = (obj, path, value) => {
  const keys = path.split(".");
  const last = keys.pop();
  let current = obj;
  keys.forEach((key) => {
    if (current[key] === undefined) current[key] = {};
    current = current[key];
  });
  current[last] = value;
};

const renderField = (container, label, path, options = {}) => {
  const field = document.createElement("div");
  field.className = "field";

  const labelEl = document.createElement("label");
  labelEl.textContent = label;
  field.appendChild(labelEl);

  let input;
  if (options.multiline) {
    input = document.createElement("textarea");
    input.rows = options.rows || 3;
  } else {
    input = document.createElement("input");
    input.type = "text";
  }

  input.value = getByPath(contentData, path) || "";
  input.addEventListener("input", () => {
    setByPath(contentData, path, input.value);
    syncRawJson();
  });

  field.appendChild(input);
  container.appendChild(field);
};

const renderList = (container, title, items, fields) => {
  container.innerHTML = "";
  items.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "card";

    const cardTitle = document.createElement("div");
    cardTitle.className = "card-title";
    cardTitle.textContent = `${title} ${index + 1}`;
    card.appendChild(cardTitle);

    const grid = document.createElement("div");
    grid.className = "grid";

    fields.forEach((field) => {
      const path = field.path;
      const label = field.label;
      const isTags = field.tags;
      const value = isTags
        ? (item.tags || []).join(", ")
        : getByPath(item, path) || "";

      const wrapper = document.createElement("div");
      wrapper.className = "field";

      const labelEl = document.createElement("label");
      labelEl.textContent = label;
      wrapper.appendChild(labelEl);

      const input = field.multiline ? document.createElement("textarea") : document.createElement("input");
      if (field.multiline) input.rows = field.rows || 3;
      input.value = value;
      input.addEventListener("input", () => {
        if (isTags) {
          item.tags = input.value
            .split(",")
            .map((tag) => tag.trim())
            .filter(Boolean);
        } else {
          setByPath(item, path, input.value);
        }
        syncRawJson();
      });
      wrapper.appendChild(input);
      grid.appendChild(wrapper);
    });

    card.appendChild(grid);
    container.appendChild(card);
  });
};

const renderSimpleList = (container, items, options = {}) => {
  container.innerHTML = "";
  items.forEach((value, index) => {
    const card = document.createElement("div");
    card.className = "card";

    const cardTitle = document.createElement("div");
    cardTitle.className = "card-title";
    cardTitle.textContent = `Item ${index + 1}`;
    card.appendChild(cardTitle);

    const grid = document.createElement("div");
    grid.className = "grid";

    const field = document.createElement("div");
    field.className = "field";
    const label = document.createElement("label");
    label.textContent = options.label || "Text";
    field.appendChild(label);

    const input = document.createElement("input");
    input.type = "text";
    input.value = value || "";
    input.addEventListener("input", () => {
      items[index] = input.value;
    });
    field.appendChild(input);
    grid.appendChild(field);

    const actionField = document.createElement("div");
    actionField.className = "field";
    const actionLabel = document.createElement("label");
    actionLabel.textContent = "Actions";
    actionField.appendChild(actionLabel);

    const removeBtn = document.createElement("button");
    removeBtn.className = "btn";
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => {
      items.splice(index, 1);
      renderEditor();
    });
    actionField.appendChild(removeBtn);
    grid.appendChild(actionField);

    card.appendChild(grid);
    container.appendChild(card);
  });
};

const renderFactList = (container, items) => {
  container.innerHTML = "";
  items.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "card";

    const cardTitle = document.createElement("div");
    cardTitle.className = "card-title";
    cardTitle.textContent = `Fact ${index + 1}`;
    card.appendChild(cardTitle);

    const grid = document.createElement("div");
    grid.className = "grid";

    const valueField = document.createElement("div");
    valueField.className = "field";
    const valueLabel = document.createElement("label");
    valueLabel.textContent = "Value";
    valueField.appendChild(valueLabel);
    const valueInput = document.createElement("input");
    valueInput.type = "text";
    valueInput.value = item.valueHtml || "";
    valueInput.addEventListener("input", () => {
      item.valueHtml = valueInput.value;
    });
    valueField.appendChild(valueInput);
    grid.appendChild(valueField);

    const labelField = document.createElement("div");
    labelField.className = "field";
    const labelLabel = document.createElement("label");
    labelLabel.textContent = "Label";
    labelField.appendChild(labelLabel);
    const labelInput = document.createElement("input");
    labelInput.type = "text";
    labelInput.value = item.label || "";
    labelInput.addEventListener("input", () => {
      item.label = labelInput.value;
    });
    labelField.appendChild(labelInput);
    grid.appendChild(labelField);

    const actionField = document.createElement("div");
    actionField.className = "field";
    const actionLabel = document.createElement("label");
    actionLabel.textContent = "Actions";
    actionField.appendChild(actionLabel);
    const removeBtn = document.createElement("button");
    removeBtn.className = "btn";
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => {
      items.splice(index, 1);
      renderEditor();
    });
    actionField.appendChild(removeBtn);
    grid.appendChild(actionField);

    card.appendChild(grid);
    container.appendChild(card);
  });
};

const enableButtons = () => {
  el("btn-download").disabled = false;
  el("btn-copy").disabled = false;
};

const downloadJson = () => {
  const blob = new Blob([JSON.stringify(contentData, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "content.json";
  a.click();
  URL.revokeObjectURL(url);
};

const copyJson = async () => {
  const text = JSON.stringify(contentData, null, 2);
  try {
    await navigator.clipboard.writeText(text);
    alert("JSON copied to clipboard.");
  } catch (err) {
    alert("Copy failed. Use Download instead.");
  }
};

const renderEditor = () => {
  el("brand-fields").innerHTML = "";
  renderField(el("brand-fields"), "Brand Mark", "brand.mark");
  renderField(el("brand-fields"), "Brand Name HTML", "brand.nameHtml");

  el("hero-fields").innerHTML = "";
  renderField(el("hero-fields"), "Hero Eyebrow", "hero.eyebrow");
  renderField(el("hero-fields"), "Hero Title HTML", "hero.titleHtml", { multiline: true, rows: 2 });
  renderField(el("hero-fields"), "Hero Subtitle", "hero.subtitle");
  renderField(el("hero-fields"), "Hero Description", "hero.description", { multiline: true, rows: 4 });

  renderSimpleList(el("ticker-list"), contentData.ticker, { label: "Ticker Text" });

  el("products-headings").innerHTML = "";
  renderField(el("products-headings"), "Products Eyebrow", "products.eyebrow");
  renderField(el("products-headings"), "Products Title HTML", "products.titleHtml", {
    multiline: true,
    rows: 2,
  });
  renderField(el("products-headings"), "Products Subtitle", "products.subtitle", {
    multiline: true,
    rows: 3,
  });

  renderList(el("products-list"), "Product", contentData.products.items, [
    { label: "Name", path: "name" },
    { label: "Description", path: "description", multiline: true, rows: 3 },
    { label: "Badge", path: "badge" },
    { label: "Special Text", path: "specialText" },
    { label: "Tags (comma separated)", path: "tags", tags: true },
  ]);

  el("why-headings").innerHTML = "";
  renderField(el("why-headings"), "Why Eyebrow", "why.eyebrow");
  renderField(el("why-headings"), "Why Title", "why.title");

  renderList(el("why-list"), "Why", contentData.why.items, [
    { label: "Title", path: "title" },
    { label: "Text", path: "text", multiline: true, rows: 3 },
  ]);

  el("about-headings").innerHTML = "";
  renderField(el("about-headings"), "About Eyebrow", "about.eyebrow");
  renderField(el("about-headings"), "About Title", "about.title", {
    multiline: true,
    rows: 2,
  });

  renderSimpleList(el("about-text-list"), contentData.about.text, {
    label: "Paragraph",
  });

  renderSimpleList(el("about-bullets-list"), contentData.about.bullets, {
    label: "Bullet",
  });

  renderFactList(el("about-facts-list"), contentData.about.facts);

  renderList(el("testimonials-list"), "Testimonial", contentData.testimonials.items, [
    { label: "Quote", path: "quote", multiline: true, rows: 3 },
    { label: "Name", path: "name" },
    { label: "Role", path: "role" },
    { label: "Stars", path: "stars" },
  ]);

  el("contact-fields").innerHTML = "";
  renderField(el("contact-fields"), "Contact Title", "contact.title");
  renderField(el("contact-fields"), "Form Title", "contact.form.title");
  renderField(el("contact-fields"), "Form Subtitle", "contact.form.subtitle", { multiline: true, rows: 3 });
};

const init = async () => {
  el("btn-download").addEventListener("click", downloadJson);
  el("btn-copy").addEventListener("click", copyJson);
  el("btn-add-ticker").addEventListener("click", () => {
    contentData.ticker.push("New ticker item");
    renderEditor();
  });
  el("btn-add-about-text").addEventListener("click", () => {
    contentData.about.text.push("New paragraph");
    renderEditor();
  });
  el("btn-add-about-bullet").addEventListener("click", () => {
    contentData.about.bullets.push("New bullet");
    renderEditor();
  });
  el("btn-add-about-fact").addEventListener("click", () => {
    contentData.about.facts.push({ valueHtml: "0", label: "New fact" });
    renderEditor();
  });

  const response = await fetch("content.json", { cache: "no-store" });
  contentData = await response.json();
  renderEditor();
  enableButtons();
};

window.addEventListener("DOMContentLoaded", init);
