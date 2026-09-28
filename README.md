# OMKAR PLYWOOD — Catalog + Inquiry Site

Static website (no build step). Open `index.html` in a browser, or use a local static server.

## Preview

```bash
cd /workspace/omkar-plywood
python3 -m http.server 8765
```

Then open: http://127.0.0.1:8765/

## Files

- `index.html` — structure & content
- `styles.css` — layout & theme
- `script.js` — catalog data, filters, modal, WhatsApp inquiry

## How to update (for Rahul)

1. **Products** — edit the `PRODUCTS` array in `script.js` (name, specs, detail, desc, price, category id).
2. **Categories** — edit `CATEGORIES` in `script.js` (keep `id` in sync with product `category` fields).
3. **Phone / WhatsApp** — change `WA_NUMBER` in `script.js` and any `wa.me` / `tel:` links in `index.html`.
4. **Address** — update Contact section + footer in `index.html`.
5. **Real photos** — replace the CSS gradient + SVG placeholders: add an `image` field and an `<img>` in the product card / modal markup when you have assets under e.g. `images/`.
6. **Fonts** — Google Fonts load from the network; offline use still works with system fallbacks.

V1 is catalog + enquiry only (no cart / checkout / payments).
