# GitHub Pages Setup Instructions

## Your Portfolio is Ready for GitHub Pages! 🚀

Your portfolio code has been pushed to GitHub. Follow these simple steps to deploy:

### Step 1: Merge to Main Branch
GitHub Pages deploys from the `main` branch by default.

```bash
# Create a Pull Request
# Visit: https://github.com/ranaahmar001/HFPORTFOLIO/pull/new/ranaahmar001-friendly-sniffle

# OR merge via GitHub CLI:
gh pr create --title "Add portfolio source files" --body "Deploy HF Digital Media portfolio"
gh pr merge --auto --squash
```

### Step 2: Enable GitHub Pages

1. Go to your repository: https://github.com/ranaahmar001/HFPORTFOLIO
2. Click **Settings** (top right)
3. Scroll left to **Pages** in the sidebar
4. Under "Build and deployment":
   - **Source**: Select `Deploy from a branch`
   - **Branch**: Select `main` / `root`
5. Click **Save**

### Step 3: Wait for Deployment ⏳

GitHub will automatically build and deploy your site:
- Initial deployment: 1-2 minutes
- Check the **Actions** tab to see deployment status
- Green checkmark ✅ = Successfully deployed!

### Your Live URL

Once deployed, your portfolio will be live at:

```
https://ranaahmar001.github.io/HFPORTFOLIO/
```

---

## Verification Checklist

After deployment:
- [ ] Visit your GitHub Pages URL in a browser
- [ ] Verify all pages load (Home, Work, Services, Library)
- [ ] Test navigation links (try clicking "Explore our work")
- [ ] Click a project card to verify modals work
- [ ] Check mobile responsiveness (resize browser)
- [ ] Verify all images load correctly
- [ ] Test external links (Canva, main website)

---

## Troubleshooting

### Site not showing up?
- **Wait 1-2 minutes** for GitHub to build and deploy
- Refresh with **Ctrl+Shift+R** (hard refresh)
- Check **Settings → Pages** → see if there's a green checkmark
- Check **Actions** tab for build errors

### Pages showing 404?
- Verify `main` branch is selected in Pages settings
- Ensure `index.html` is in the root directory
- Check repository is set to **Public** (Settings → Danger zone)

### Assets/images not loading?
- All paths should be relative (no `http://`)
- Check that all 213 asset files were committed
- Verify WebP format is supported in your browser

### Custom domain?
- Add domain in **Settings → Pages**
- Update your domain's DNS settings
- See [GitHub custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

---

## After Deployment: Continuous Updates

### Making Changes
1. Edit files locally
2. Commit and push to `main`:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```
3. GitHub automatically redeploys (1-2 min)

### Using Branches
```bash
# Create feature branch
git checkout -b feature/new-project
# Make changes and commit
git add .
git commit -m "Add new project"
git push origin feature/new-project

# Create PR for review
gh pr create --title "Add new project"
# After merging to main, GitHub Pages auto-updates
```

---

## Performance Tips

1. **Enable GitHub Pages caching**
   - GitHub CDN caches assets automatically
   - WebP images are optimized

2. **Monitor site analytics**
   - Add Google Analytics (optional)
   - Edit `index.html` to add tracking code

3. **Check SEO**
   - Title: "HF Digital Media — Built for Growth. Backed by Performance."
   - Meta description: Included
   - Open Graph tags: Ready for social sharing

---

## Support Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Troubleshooting GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages)
- [Custom domains with GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

---

## Quick Links

- **Repository**: https://github.com/ranaahmar001/HFPORTFOLIO
- **Portfolio URL**: https://ranaahmar001.github.io/HFPORTFOLIO/ (after enabling Pages)
- **Settings → Pages**: https://github.com/ranaahmar001/HFPORTFOLIO/settings/pages

---

**That's it! Your portfolio is going live!** 🎉

Once GitHub Pages is enabled, your portfolio will be automatically updated every time you push to `main`.
