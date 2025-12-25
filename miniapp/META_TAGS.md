# 🏷️ Base Mini App Metadata Guide

The app's HTML metadata has been configured for proper Base mini app integration and social sharing.

## 📋 Current Configuration

### Base App ID
```html
<meta property="base:app_id" content="agent-prediction-markets" />
```

**Important:** This is a placeholder ID. You'll need to update it after registering your app with Base.

### How to Get Your Official Base App ID

1. **Deploy to Production**
   ```bash
   npm run build
   # Deploy to Vercel or your hosting provider
   ```

2. **Register with Base**
   - Visit [Base Developer Portal](https://base.org/developers)
   - Submit your mini app for registration
   - Provide your production URL
   - Wait for approval and receive your official `base:app_id`

3. **Update Your App ID**
   Edit `index.html`:
   ```html
   <meta property="base:app_id" content="YOUR_OFFICIAL_BASE_APP_ID" />
   ```

4. **Redeploy**
   ```bash
   npm run build
   # Deploy updated version
   ```

## 🎨 Open Graph Metadata

All Open Graph tags are configured for optimal social sharing:

### Update URLs After Deployment

In `index.html`, replace all instances of `https://your-app.vercel.app/`:

```html
<!-- Example: If deployed to https://agent-markets.vercel.app -->
<meta property="og:url" content="https://agent-markets.vercel.app/" />
<meta property="og:image" content="https://agent-markets.vercel.app/images/og-1200x630.png" />
<meta name="twitter:url" content="https://agent-markets.vercel.app/" />
<meta name="twitter:image" content="https://agent-markets.vercel.app/images/og-1200x630.png" />
```

**Tip:** Use search & replace to update all URLs at once:
```bash
cd miniapp
sed -i 's|https://your-app.vercel.app|https://YOUR-ACTUAL-DOMAIN.com|g' index.html
sed -i 's|https://your-app.vercel.app|https://YOUR-ACTUAL-DOMAIN.com|g' public/.well-known/farcaster.json
sed -i 's|https://your-app.vercel.app|https://YOUR-ACTUAL-DOMAIN.com|g' src/wagmi.config.ts
```

## 🧪 Testing Metadata

### 1. Local Testing
```bash
npm run dev
# Open browser DevTools > Elements > <head>
# Verify all meta tags are present
```

### 2. Open Graph Testing
After deployment, test social sharing:
- **Facebook:** https://developers.facebook.com/tools/debug/
- **Twitter:** https://cards-dev.twitter.com/validator
- **LinkedIn:** https://www.linkedin.com/post-inspector/

### 3. Base Mini App Validation
```bash
# Check manifest is accessible
curl https://YOUR-DOMAIN/.well-known/farcaster.json

# Verify images load
curl -I https://YOUR-DOMAIN/images/icon-1024.png
curl -I https://YOUR-DOMAIN/images/og-1200x630.png
```

## 📱 Metadata Tags Explained

### Base-Specific
```html
<meta property="base:app_id" content="..." />
```
Required for Base mini app registry. Identifies your app in the Base ecosystem.

### Open Graph (Social Sharing)
```html
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
<meta property="og:image" content="..." />
<meta property="og:url" content="..." />
```
Controls how your app appears when shared on Facebook, Discord, Slack, etc.

### Twitter Cards
```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="..." />
<meta name="twitter:description" content="..." />
<meta name="twitter:image" content="..." />
```
Optimizes display when shared on Twitter/X.

### Web3 Metadata (Custom)
```html
<meta name="blockchain" content="Base" />
<meta name="chain-id" content="8453" />
```
Helps Web3 browsers and wallets identify the blockchain network.

### Theme Color
```html
<meta name="theme-color" content="#0052FF" />
```
Sets browser UI color on mobile devices (matches Base blue).

### Manifest Link
```html
<link rel="manifest" href="/.well-known/farcaster.json" />
```
Links to your Base mini app manifest for app metadata and configuration.

## ✅ Pre-Deployment Checklist

- [ ] All URLs updated from `your-app.vercel.app` to actual domain
- [ ] All images generated and uploaded to `/public/images/`
- [ ] Manifest `.well-known/farcaster.json` accessible at root
- [ ] Open Graph images (1200x630px) exist
- [ ] Icon images (1024x1024px) exist
- [ ] Tested social sharing with validators
- [ ] base:app_id ready (or placeholder for now)

## 🔄 After Getting Official Base App ID

1. Update `index.html`:
   ```html
   <meta property="base:app_id" content="YOUR_OFFICIAL_ID" />
   ```

2. Update `.well-known/farcaster.json` if needed with any Base-specific fields

3. Rebuild and redeploy:
   ```bash
   npm run build
   # Deploy to production
   ```

4. Verify in Base app registry

## 📚 References

- **Base Mini Apps:** https://docs.base.org/mini-apps
- **Open Graph Protocol:** https://ogp.me/
- **Twitter Cards:** https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards
- **Web App Manifest:** https://developer.mozilla.org/en-US/docs/Web/Manifest

## 🐛 Troubleshooting

### Metadata not showing in social previews
**Problem:** Shared links don't show proper title/image

**Solutions:**
1. Clear social media cache using validators
2. Verify images are publicly accessible
3. Check image URLs are absolute (not relative)
4. Ensure images meet size requirements (OG: 1200x630px)

### base:app_id not recognized
**Problem:** Base doesn't recognize your app

**Solutions:**
1. Verify you've registered with Base
2. Check app_id matches exactly (case-sensitive)
3. Ensure manifest is accessible at `/.well-known/farcaster.json`
4. Wait for Base registry propagation (can take hours)

### Images not loading
**Problem:** 404 errors for icon/og images

**Solutions:**
1. Run `./generate-images.sh` to create PNGs from SVGs
2. Verify files exist in `/public/images/`
3. Check Vite build includes public directory
4. Test direct URL access after deployment

---

Ready to deploy! 🚀 Update the URLs and app ID, then ship to production.
