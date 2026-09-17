# Deployment Guide

## Overview

This is a static site with no backend requirements. It can be deployed to any static hosting service.

## Deployment Options

### 1. **GitHub Pages** (Free)
```bash
# Push to main branch, enable GitHub Pages in repo settings
# Your site will be live at: https://ranaahmar001.github.io/HFPORTFOLIO/
```

### 2. **Vercel** (Recommended for static sites)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```
Automatic deployments on git push. Fast CDN. Free tier available.

### 3. **Netlify**
- Connect your GitHub repo
- Build command: (leave empty)
- Publish directory: `.`
- Deploy

### 4. **Traditional Web Server** (Apache, Nginx)
```bash
# Upload entire directory via FTP/SFTP
# Or clone repo and pull latest
git clone https://github.com/ranaahmar001/HFPORTFOLIO.git
```

### 5. **AWS S3 + CloudFront**
```bash
# Upload to S3 bucket
aws s3 sync . s3://your-bucket-name --exclude ".git/*" --exclude "node_modules/*"

# Configure CloudFront for CDN distribution
```

## Pre-Deployment Checklist

- [ ] All links are relative or absolute (no localhost references)
- [ ] Images load correctly (WebP format supported on CDN)
- [ ] No console errors in DevTools
- [ ] Responsive design tested on mobile devices
- [ ] All interactive elements (modals, filters, animations) work
- [ ] Social meta tags configured for sharing
- [ ] Analytics tracking configured (if applicable)

## Environment Variables

Currently not required. If adding APIs or external services in future:

1. Create `.env.production` for production values
2. Use environment variable placeholders in code
3. Configure in your hosting platform's settings

## Performance Tips

1. **Enable GZIP compression** on server
2. **Set cache headers**:
   - Static assets: 1 year
   - HTML: No cache / short cache
3. **Use CDN** to serve images from edge locations
4. **Monitor with PageSpeed Insights** and Lighthouse

## Domain Setup

1. Register domain (Namecheap, GoDaddy, etc.)
2. Update DNS records to point to hosting provider
3. Enable HTTPS/SSL (required, usually free)
4. Verify domain in hosting platform

## Rollback Procedure

### Git-based (GitHub Pages, Vercel, Netlify)
```bash
# Revert to previous commit
git revert <commit-hash>
git push
# Site automatically redeploys
```

### Manual deployment
- Keep backup of previous version
- Re-upload previous files via FTP
- Test thoroughly before next push

## Monitoring

- Set up uptime monitoring (Pingdom, StatusCake)
- Monitor error logs for any issues
- Check analytics for traffic patterns

## Updates & Maintenance

1. Test changes locally first
2. Commit to feature branch
3. Create pull request
4. Review and merge
5. Production automatically updates (auto-deploy) or manually trigger

## Support

For deployment issues:
- Check hosting provider's documentation
- Review build logs for errors
- Verify all assets are uploaded
- Test on multiple browsers and devices

## SSL/HTTPS

Most modern hosts provide free SSL:
- Let's Encrypt (automatic renewal)
- Certbot for manual management
- Ensure all resources (CSS, JS, images) use HTTPS

## Backup Strategy

```bash
# Regular local backups
git clone https://github.com/ranaahmar001/HFPORTFOLIO.git backup-$(date +%Y%m%d)

# Or use hosting provider's backup features
```

---

**Last Updated**: 2026-09-17
