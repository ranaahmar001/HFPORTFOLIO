# HFPORTFOLIO Development Guide

## Quick Start

### Prerequisites
- Node.js 16+ (for running local dev server)
- Or Python 3+ (as alternative local server)
- Git (already installed)

### Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   This opens the portfolio in your default browser at `http://localhost:8080`

3. **Alternative: Python server** (no Node required):
   ```bash
   npm run serve
   # or directly:
   python -m http.server 8000
   ```
   Access at `http://localhost:8000`

## Project Structure

```
.
├── index.html          # Main portfolio page
├── app.js             # Core JavaScript (projects, interactions, modals)
├── library.js         # Portfolio library/filtering logic
├── library-data.js    # Project data and metadata
├── style.css          # Global styles
├── sections.css       # Section-specific styles
├── assets/            # Images, SVGs, webp files
├── package.json       # Dependencies and scripts
├── DEVELOPMENT.md     # This file
└── README.md          # Project overview
```

## File Guide

### Core Files

- **index.html** - Single-page HTML structure with semantic sections
- **app.js** - Handles:
  - Project modals and lightbox dialogs
  - Counting animations for metrics
  - Reading progress bar
  - Filter functionality
- **library.js** - Portfolio library search and category filtering
- **library-data.js** - Project metadata and image references
- **style.css** - Responsive layout, typography, animations
- **sections.css** - Section-specific styling (hero, cards, grid layouts)

### Assets

- Portfolio images in WebP format (optimized)
- Project evidence screenshots
- SVG logos and graphics
- Campaign creative samples

## Development Tips

### Making Changes

1. **CSS Updates**: Edit `style.css` or `sections.css` directly
2. **JavaScript Logic**: Modify `app.js` for interaction changes
3. **Content**: Update `index.html` for text/structure
4. **Project Data**: Edit `library-data.js` for metadata

### Live Reload

The server automatically serves the latest files. Just refresh your browser to see changes.

### Testing

- Test responsive layout at multiple viewport sizes
- Verify smooth animations and transitions
- Check modal/dialog functionality
- Test filter and search capabilities
- Ensure all links and buttons work correctly

## Browser Compatibility

- Modern browsers (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- Graceful degradation for reduced-motion preferences
- Touch-friendly on mobile devices

## Performance Optimization

- Images are in WebP format for smaller file sizes
- Lazy loading enabled for images
- IntersectionObserver for performance metrics animations
- CSS animations use GPU-accelerated properties

## Build & Deployment

Currently, this is a static site with no build step required. To deploy:

1. Upload the entire directory to your web server
2. Ensure WebP image support on your CDN
3. Set appropriate cache headers for static assets

For future enhancements with build tools:
- Consider Vite for bundling and optimization
- Implement minification for production
- Set up image compression pipeline

## Troubleshooting

### Port already in use
```bash
# Use a different port:
http-server -p 3000
```

### Asset loading issues
- Ensure you're running from the repo root
- Check that WebP images are in `assets/` folder
- Verify browser WebP support

### JavaScript errors
- Open browser DevTools (F12)
- Check Console tab for errors
- Ensure all linked libraries are present

## Git Workflow

1. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make changes and test locally

3. Commit with clear messages:
   ```bash
   git add .
   git commit -m "description of changes"
   ```

4. Push and create a pull request

## Resources

- [WebP Image Format](https://developers.google.com/speed/webp)
- [CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)
- [IntersectionObserver API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [Dialog Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog)

## Questions?

Refer to the main README.md or check the portfolio source files for implementation details.
