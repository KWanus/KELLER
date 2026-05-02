# Safety Tools Store - Affiliate Website

A professional affiliate website for safety equipment and tools.

## Setup Instructions

### 1. Get Your Amazon Associates Account

To earn commissions, you MUST sign up for Amazon Associates:

1. Go to [https://affiliate-program.amazon.com/](https://affiliate-program.amazon.com/)
2. Sign up for a free Amazon Associates account
3. Complete the application process
4. Once approved, you'll receive your **Associate Tag** (also called Tracking ID)

### 2. Add Your Affiliate Links

Open the file `js/products.js` and replace each `YOUR_AMAZON_AFFILIATE_LINK_HERE` with your actual Amazon affiliate links.

**How to create affiliate links:**

1. Log into your Amazon Associates account
2. Search for each product on Amazon
3. Use the SiteStripe toolbar (appears at top of Amazon pages when logged into Associates)
4. Click "Get Link" and copy the full URL
5. Paste it into the `affiliateLink` field for each product

**Example:**
```javascript
affiliateLink: "https://www.amazon.com/dp/B08EXAMPLE?tag=YOUR-ASSOCIATE-TAG-20"
```

### 3. Add Product Images

The site currently uses placeholder images. To add real product images:

**Option 1: Use Amazon Product Images**
1. Find the product on Amazon
2. Right-click the product image
3. Copy the image URL
4. Replace the `imageUrl` in `js/products.js`

**Option 2: Save Images Locally**
1. Download product images
2. Save them in the `images/` folder
3. Update `imageUrl` to: `"images/your-image.jpg"`

### 4. Deploy Your Website

You can host this website for FREE using:

**GitHub Pages (Free):**
1. Create a GitHub account
2. Create a new repository
3. Upload all files
4. Enable GitHub Pages in Settings
5. Your site will be live at `https://yourusername.github.io/repo-name`

**Netlify (Free):**
1. Sign up at [netlify.com](https://www.netlify.com/)
2. Drag and drop the `safety-tools-store` folder
3. Your site goes live instantly

**Other Options:**
- Vercel (free)
- Google Firebase Hosting (free tier)
- AWS S3 + CloudFront (low cost)

### 5. Important for Earning Commissions

✅ **You MUST have an approved Amazon Associates account**
✅ **All affiliate links must contain YOUR unique Associate Tag**
✅ **Include the disclosure** (already added to footer): "As an Amazon Associate, we earn from qualifying purchases"
✅ **Drive traffic to your site** through social media, ads, or SEO

### 6. Customize Your Site

Edit these files to personalize:
- `index.html` - Change the title and header text
- `css/style.css` - Modify colors, fonts, layout
- `js/products.js` - Add/remove products, update descriptions

## File Structure

```
safety-tools-store/
├── index.html          # Main HTML page
├── css/
│   └── style.css       # All styling
├── js/
│   ├── products.js     # Product data (UPDATE AFFILIATE LINKS HERE!)
│   └── main.js         # Product rendering logic
├── images/             # Store product images here
└── README.md           # This file
```

## Testing Locally

Simply open `index.html` in your web browser to preview the site.

## Commission Rates

Amazon Associates typically pays:
- 1-3% for most products
- 4-8% for certain categories
- Commission varies by product category

## Next Steps

1. ✅ Set up Amazon Associates account
2. ✅ Replace all affiliate links in `js/products.js`
3. ✅ Add real product images
4. ✅ Deploy your website
5. ✅ Share your website to drive traffic
6. ✅ Track earnings in Amazon Associates dashboard

## Support

For Amazon Associates help: [https://affiliate-program.amazon.com/help](https://affiliate-program.amazon.com/help)

---

**Remember:** You only earn commissions when people click YOUR affiliate links and make purchases within 24 hours!
