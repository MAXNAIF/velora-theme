# Velora Theme - ثيم فيلورا

## Overview

Velora is a luxury dark/gold digital products theme built for Salla Twilight template engine. It features a professional, modern design with advanced customization options suitable for selling digital courses, templates, tools, ebooks, and consulting services.

**فيلورا** ثيم فخم للمنتجات الرقمية مبني لمحرك نماذج Salla Twilight، يتميز بتصميم احترافي وحديث مع خيارات تخصيص متقدمة.

---

## File Structure

```
velora-theme/
├── assets/
│   ├── css/
│   │   └── app.css              # Main CSS (1144 lines) - أساسيات CSS
│   └── js/
│       └── app.js               # Main JavaScript (438 lines) - جافاسكريبت رئيسي
├── views/
│   ├── components/
│   │   └── product-card.twig     # Reusable product card - كارت المنتج
│   ├── partials/
│   │   ├── mobile-menu.twig      # Mobile navigation - قائمة الجوال
│   │   └── search-overlay.twig   # Search overlay - شريط البحث
│   ├── pages/                    # Main page templates
│   └── layouts/
│       └── master.twig           # Master layout
├── locales/
│   ├── ar.json                  # Arabic translations (250+ keys)
│   └── en.json                  # English translations
├── theme.json                    # Theme configuration
├── package.json                  # NPM dependencies
└── tailwind.config.js           # Tailwind CSS customization
```

---

## Features

### Color Palette
- **Gold**: #C9A84C - Primary accent color
- **Dark Background**: #0A0A0F - Main background
- **Dark Card**: #12121A - Component backgrounds
- **Text**: #FFFFFF - Primary text color
- **Secondary**: #9CA3AF - Secondary text color

### Core Components

#### 1. Sticky Navbar
- Smooth backdrop blur effect
- Auto-scrolling detection
- Mobile hamburger menu
- Search icon
- Cart counter badge
- Account link

#### 2. Product Cards
- Hover zoom effect
- Product badges (New, Bestseller, Discount %)
- Wishlist toggle button
- Star ratings
- Price display with old price strikethrough
- Quick add to cart
- Quick view button

#### 3. Mobile Menu
- Slide-in from right (RTL-aware)
- Categories accordion
- User authentication buttons
- Social media links
- Overlay background

#### 4. Search Overlay
- Full-screen search interface
- Popular search suggestions
- Real-time search results
- Keyboard (ESC) support

#### 5. Hero Section
- Large gradient text
- Animated floating background elements
- Call-to-action buttons
- Responsive grid layout
- Statistics section

### JavaScript Features

1. **Sticky Navbar** - Scrolls with fade-in/out effect
2. **Mobile Menu** - Toggle, close on click/ESC, body scroll lock
3. **Search Overlay** - Full-screen search with auto-focus
4. **Back to Top** - Smooth scroll on button click
5. **Scroll Animations** - IntersectionObserver for fade-in on scroll
6. **Product Gallery** - Thumbnail selection with main image update
7. **Quantity Selector** - Plus/minus buttons with validation (1-99)
8. **Product Tabs** - Tab switching with active state
9. **Cart Integration** - salla.cart.addItem() integration
10. **Wishlist** - salla.wishlist.toggle() integration
11. **Newsletter Form** - Email validation & submission
12. **Accordion** - FAQ-style expandable sections
13. **Lazy Loading** - IntersectionObserver for images
14. **Smooth Scroll** - Anchor links with smooth behavior
15. **Toast Notifications** - Success/error messages

---

## CSS Features

### Variables (27 CSS custom properties)
- Colors: gold, dark theme, text colors, accent colors
- Gradients: gold, dark, card
- Shadows: gold glow, card, large
- Transitions: standard, fast, slow
- Typography: Tajawal font family

### Sections Covered
- Reset & Base Styles
- Custom Scrollbar
- Skip Links (Accessibility)
- Back to Top Button
- Navbar (Sticky with backdrop blur)
- Mobile Menu (Slide-in overlay)
- Search Overlay (Full-screen)
- Hero Section (Gradient, animations)
- Section Headers (Tag badges)
- Feature Cards (Hover effects)
- Product Cards (Hover zoom, badges)
- Product Grid (Responsive 4-2-1 columns)
- Buttons (Primary, Secondary, Outline)
- Form Elements (Dark themed)
- Testimonials
- Newsletter Section
- Footer (4-column grid)
- Pagination
- Breadcrumb
- Badges
- Alerts & Notifications
- Loading Spinner
- Empty States
- Animations (Keyframes)
- Utility Classes
- Responsive Breakpoints
- RTL Support

### Animations
- **fadeInUp, fadeInDown, fadeInLeft, fadeInRight** - Entrance animations
- **slideInRight** - Mobile menu animation
- **scaleIn** - Modal/overlay appearance
- **float** - Gentle up-down floating
- **spin** - Loading spinner
- **pulse-glow** - Gold glow pulse effect

---

## Configuration

### theme.json Settings

The theme includes comprehensive settings for:

**General**
- Primary color
- Dark background color
- Card color
- Text color

**Header**
- Enable/disable header
- Sticky header option
- Header transparency
- Search visibility
- Cart visibility

**Hero**
- Enable/disable hero
- Custom title & subtitle
- Hero image
- CTA button text

**Products**
- Products per page (6-24)
- Featured products count
- Show/hide ratings
- Show/hide badges

**Testimonials, Newsletter, Blog, Footer**
- Enable/disable sections
- Custom titles & counts
- Customizable layouts

**Animations**
- Enable/disable animations
- Animation speed (slow/normal/fast)

---

## Localization

### Supported Languages
- **Arabic** (ar.json) - RTL support
- **English** (en.json)

### Translation Keys (250+)
- Navigation (11 keys)
- Buttons (22 keys)
- Products (15 keys)
- Cart (10 keys)
- Checkout (10 keys)
- Auth/Login (16 keys)
- Filters (12 keys)
- Blog (9 keys)
- Contact (10 keys)
- Newsletter (6 keys)
- Footer (14 keys)
- Errors (15 keys)
- Success (10 keys)
- Testimonials (6 keys)
- Miscellaneous (20+ keys)

---

## Responsive Design

### Breakpoints
- **Desktop**: > 1024px (4 columns)
- **Tablet**: 768px - 1024px (2 columns)
- **Mobile**: < 768px (1 column)
- **Small**: < 480px (adjusted typography)

### RTL Support
- Direction-aware margins/paddings
- Flipped mobile menu (slides from left)
- Proper icon positioning
- Arabic font support (Tajawal)

---

## Getting Started

### Installation

1. **Extract Theme**
   ```bash
   mkdir velora-theme
   cd velora-theme
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Build CSS**
   ```bash
   npm run build
   ```

4. **Development Mode**
   ```bash
   npm run dev
   ```

### Configuration

1. Update `theme.json` with your store settings
2. Add your logo in navbar-brand section
3. Customize colors in `:root` CSS variables
4. Update translations in `locales/ar.json` and `locales/en.json`

### Integration with Salla

1. Ensure Salla CLI is installed
2. Link your partner account
3. Upload theme to Salla Partners Portal
4. Test with your store preview

---

## Technical Stack

- **CSS**: Custom properties, Grid, Flexbox, Animations
- **JavaScript**: ES6, Fetch API, IntersectionObserver, LocalStorage
- **Template Engine**: Twig
- **Build Tool**: Tailwind CSS
- **Framework Compatibility**: Salla Twilight 1.0+

---

## Customization Tips

### Change Primary Color
Edit in `assets/css/app.css`:
```css
:root {
    --gold: #YOUR_COLOR;
    --gold-light: #LIGHTER_VARIANT;
    --gold-dark: #DARKER_VARIANT;
}
```

### Add Custom Animations
Add new @keyframes in CSS, then apply to elements:
```css
@keyframes yourAnimation {
    from { ... }
    to { ... }
}

.element {
    animation: yourAnimation 1s ease-out;
}
```

### Modify Navbar
Edit `views/partials/` navbar component or CSS in `.navbar` class

### Update Translations
Modify JSON keys in `locales/ar.json` and `locales/en.json`

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Performance

- Optimized CSS (~1144 lines)
- Lazy loading for images
- Minified assets
- CDN-ready structure
- Mobile-first responsive design

---

## Dependencies

### Production
- salla-sdk: ^1.0.0

### Development
- tailwindcss: ^3.3.6
- postcss: ^8.4.31
- autoprefixer: ^10.4.16
- eslint: ^8.54.0
- prettier: ^3.1.0

---

## Support & Documentation

- **Salla Docs**: https://docs.salla.dev
- **Theme Repository**: [GitHub Link]
- **Author**: Naif
- **License**: MIT

---

## Version History

### v1.0.0 (Initial Release)
- Complete luxury theme for digital products
- Dark/Gold color scheme
- 1144 lines of CSS
- 438 lines of JavaScript
- Mobile-first responsive design
- RTL support
- Arabic & English translations
- 30+ component styles
- 7+ animations
- Comprehensive configuration options

---

## Tips for Success

1. Test on multiple devices (mobile, tablet, desktop)
2. Customize colors to match your brand
3. Add high-quality product images
4. Use descriptive product titles & descriptions
5. Set up proper categories for organization
6. Test all interactive elements (cart, wishlist, search)
7. Monitor analytics for user behavior
8. Keep content updated regularly
9. Use SEO-friendly URLs
10. Enable SSL for secure checkout

---

Made with ❤️ by Naif for Salla Digital Products

**ثيم فيلورا - الفخامة في كل تفصيل**
