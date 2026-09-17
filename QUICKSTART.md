# Quick Start Guide

## Setup Complete! 🚀

Your HF Portfolio development environment is ready to go.

### What's been set up:

✅ **Configuration Files**
- `package.json` - Project metadata and scripts
- `.gitignore` - Git exclusions (node_modules, cache, etc.)
- `.editorconfig` - Code style consistency (2-space tabs, UTF-8)
- `.prettierrc` - Code formatter config
- `.env.example` - Environment variables template

✅ **Documentation**
- `DEVELOPMENT.md` - Complete development guide
- `DEPLOYMENT.md` - Deployment & hosting options

✅ **Project Structure**
- Static HTML/CSS/JavaScript (no build step needed)
- Assets folder with optimized WebP images
- Modular JavaScript (app.js, library.js, library-data.js)
- Responsive CSS (style.css, sections.css)

---

## Running Locally (3 Options)

### Option 1: Python (Easiest - No Installation)
```bash
cd ranaahmar001-friendly-sniffle
python -m http.server 8000
```
Open browser: `http://localhost:8000`

### Option 2: Node.js (If installed)
```bash
npm install
npm run dev
```
Auto-opens at `http://localhost:8080`

### Option 3: Direct Browser
Simply double-click `index.html` to open in default browser
(limited functionality for some features)

---

## Next Steps

1. **Start the dev server** (using Option 1, 2, or 3 above)
2. **Make changes** to CSS, HTML, or JavaScript
3. **Refresh browser** to see updates
4. **Commit to Git** when ready

```bash
git add .
git commit -m "Your commit message"
git push origin ranaahmar001-friendly-sniffle
```

---

## Project at a Glance

| File | Purpose |
|------|---------|
| `index.html` | Main page structure |
| `app.js` | Core interactions (modals, animations) |
| `library.js` | Portfolio filtering/search |
| `style.css` | Global styling |
| `sections.css` | Section-specific styles |
| `assets/` | Images & graphics |

---

## Common Tasks

### Edit content
→ Modify `index.html` (search for text to find sections)

### Change colors/fonts
→ Edit `style.css` (look for CSS variables at top)

### Add new projects
→ Update `library-data.js` and add images to `assets/`

### Fix bugs
→ Open DevTools (F12) → Console tab for errors

### Deploy live
→ See `DEPLOYMENT.md` for GitHub Pages, Vercel, Netlify, etc.

---

## Troubleshooting

**Images not loading?**
- Ensure running from root directory
- Check browser console (F12) for 404 errors

**Styles not updating?**
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

**JavaScript errors?**
- Open DevTools (F12) → Console tab
- Check DEVELOPMENT.md for debugging tips

---

## Resources

- **MDN Web Docs**: https://developer.mozilla.org
- **CSS Tricks**: https://css-tricks.com
- **JavaScript Info**: https://javascript.info
- **WebP Format**: https://developers.google.com/speed/webp

---

**Ready to build?** Start your dev server and begin editing! 🎉

For detailed information, see `DEVELOPMENT.md`
