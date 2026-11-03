# Torque Auto Advisor — Lovable.dev Integration & Editing Guide

This repository contains the full Next.js 16 (React 19) web application for **Torque Auto Advisor**. It is architected for clean editing, versioning, and AI-driven updates through **Lovable.dev**.

---

## 1. How to Open & Edit in Lovable.dev

You can bring this project into Lovable using either method:

### Method A: Direct GitHub Import (Recommended)
1. Go to your **Lovable Dashboard** (`https://lovable.dev`).
2. Click **Create / Import Project**.
3. Select **Import from GitHub** and connect the repository:
   - `https://github.com/atifmalik220905/troque.git`
4. Select the `main` branch (or any version tag).
5. Lovable will load all routes, components, assets, and data files into its editor.

### Method B: Clean ZIP Import (Drag-and-Drop)
1. In your local terminal, run:
   ```bash
   npm run package:lovable
   ```
   This generates `torque-lovable-ready.zip` (~55 MB, well below Lovable's 250 MB limit).
2. Or go to GitHub (`https://github.com/atifmalik220905/troque.git`), click **Code** -> **Download ZIP**.
3. In Lovable, click **`+`** in the prompt box -> **Import project to Lovable** -> **Upload code**.
4. Drag-and-drop the `.zip` file. Lovable parses all components and launches the live interactive preview.

---

## 2. Project Architecture & Component Map

| Page / Route | Source File | Purpose |
|---|---|---|
| `/` (Homepage) | `src/app/page.tsx` | Hero Slider, About, Services Carousel, Why Choose Us, Funfacts, FAQ, Testimonials, News |
| `/about-us` & `/about` | `src/app/about-us/page.tsx` | About company, 5+ years experience, stats, values |
| `/our-services` | `src/app/our-services/page.tsx` | Full catalog of all 9 vehicle/RTO services |
| `/service-detail/[slug]/[id]` | `src/app/service-detail/[slug]/[id]/page.tsx` | Dynamic individual service page with thumbnail, key points & sidebar |
| `/photo-gallery` | `src/app/photo-gallery/page.tsx` | Photo albums with filter tabs and full-screen lightbox |
| `/contact` | `src/app/contact/page.tsx` | Contact details, phone numbers, WhatsApp link, inquiry form & Google Map |

### Global Layout & Navigation Components
- **Header & Navigation**: `src/components/replica/Header.tsx` (topbar, navigation menu, mobile menu drawer, side contact drawer)
- **Footer**: `src/components/replica/Footer.tsx` (contact info, quick links, Google map, copyright)
- **Floating Mobile Action Bar**: `src/components/replica/MobileActionBar.tsx` (persistent Call, WhatsApp, Services, Directions bar on phones)
- **Root Layout & Metadata**: `src/app/layout.tsx` (Google Fonts, Schema.org JSON-LD, SEO, assets)

---

## 3. Data Dictionary (How Content is Organized)

All dynamic site content is centralized in **`src/data/originalData.ts`**:
- **`ORIGINAL_SERVICES`**: Contains all 9 services (id, title, slug, shortDesc, description HTML, image filename).
- **`ORIGINAL_SLIDERS`**: Hero slider items and background graphics.
- **`ORIGINAL_TESTIMONIALS`**: Client feedback and reviewer avatars.
- **`ORIGINAL_ALBUMS`**: Photo gallery album categories.
- **`ORIGINAL_GALLERY`**: Gallery photos mapped by `albumId`.

---

## 4. Example Prompts You Can Give to Lovable

Lovable's AI can edit any part of this project. Here are prompt examples:

- **Change phone numbers or contact details**:
  > *"Update the primary contact number to +91 98765 43210 in the Header, Footer, and Contact page."*

- **Add a new service**:
  > *"In `src/data/originalData.ts`, add a 10th service named 'FASTag Solutions' with short description and bullet points."*

- **Edit hero sliders**:
  > *"Update the first slider title on the homepage to 'Fast & Reliable RTO Documentation'."*

- **Modify styling / colors**:
  > *"Change the primary brand red color (#c4333b) in `src/app/globals.css` to a deep navy blue."*

- **Add new form field**:
  > *"In `src/app/contact/page.tsx`, add a vehicle registration number field to the inquiry form."*

---

## 5. Available Versions / Git Tags

All development milestones are tagged on Git so you can view or edit any version:
- **`v1.0.0-initial-replica`**: 1:1 original PHP port to Next.js 16.
- **`v1.1.0-mobile-optimized`**: Mobile action bar, touch-swipe carousels, responsive layout fixes.
- **`v1.2.0-production-optimized`**: HTTP caching, Schema.org structured data, ARIA a11y, OpenGraph metadata, Lovable configuration.

