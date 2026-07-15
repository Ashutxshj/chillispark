# Chillispark – Business Plan & MVP Website Plan

## Vision

Chillispark is a modern web design and development agency focused on helping local businesses establish a professional online presence.

The goal is not just to build websites, but to help businesses:

- Get more customers
- Build credibility
- Rank better on Google
- Increase conversions
- Modernize outdated websites
- Own their digital presence instead of relying only on social media or marketplaces

---

# Mission

Create fast, modern, affordable websites that help small businesses grow.

---

# Target Customers

Primary:

- Dentists
- Dental Clinics
- Doctors
- Medical Clinics

Secondary:

- Restaurants
- Cafés
- Salons
- Gyms
- Law Firms
- Real Estate Agents
- Coaching Institutes
- Consultants
- Local Shops
- Small Manufacturers

Future:

- E-commerce brands
- Startups
- SaaS businesses

---

# Problems We Solve

Many businesses have:

- No website
- Outdated website
- Website that loads slowly
- Poor mobile experience
- Poor SEO
- No clear branding
- Only Instagram/Facebook presence
- Dependence on marketplaces like Amazon
- No online appointment or inquiry system

---

# Value Proposition

A professional website helps businesses:

- Build trust
- Look more professional
- Generate leads
- Receive direct inquiries
- Improve Google visibility
- Increase conversions
- Reduce dependence on third-party marketplaces
- Control their own brand

---

# Core Services

## Business Websites

Modern responsive websites for local businesses.

---

## Landing Pages

Designed for marketing campaigns and lead generation.

---

## Website Redesign

Transform old websites into modern experiences.

---

## E-commerce Websites

Online stores with product management and direct purchasing.

---

## Website Maintenance

Ongoing updates, backups, and support.

---

## SEO Foundation

Basic on-page SEO included with every project.

---

# Business Philosophy

Every website should:

- Load fast
- Work perfectly on mobile
- Be clean and modern
- Convert visitors into customers
- Be easy to manage
- Reflect the client's brand

---

# Design Style

Minimal

Modern

Professional

High contrast

Premium feel

Lots of whitespace

Simple navigation

No unnecessary clutter

Focus on conversions

---

# Brand Personality

Professional

Reliable

Friendly

Modern

Honest

Results-driven

---

# Tone of Voice

Simple

Clear

Confident

No unnecessary jargon

Speak in business outcomes rather than technical language.

---

# Website Goals

The website itself should convince visitors that Chillispark can design professional websites.

The visitor should immediately understand:

- What Chillispark does
- Who it helps
- Why it's different
- Why they should trust it
- How to contact us

---

# Homepage Sections

## Hero

Clear headline

Simple value proposition

Primary Call-to-Action

Secondary CTA

---

## Services

Cards explaining each service.

---

## Why Choose Chillispark

Benefits instead of features.

Examples:

- Modern Design
- Mobile Friendly
- Fast Performance
- SEO Ready
- Affordable
- Ongoing Support

---

## Process

Simple step-by-step workflow.

Example:

1. Discovery
2. Planning
3. Design
4. Development
5. Launch
6. Support

---

## Industries We Serve

Grid of industries.

---

## Portfolio

Initially may contain concept projects or demo websites until real client work is available.

Should later be replaced by actual client work.

---

## Testimonials

Placeholder initially.

Later replaced by genuine testimonials.

---

## FAQ

Common client questions.

Examples:

How long does a website take?

How much does it cost?

Will my website work on mobile?

Can I edit my website?

Do you provide maintenance?

---

## Contact

Simple contact form.

WhatsApp option.

Email.

---

# About Page

Tell the story of Chillispark.

Focus on helping businesses succeed online.

Keep it personal but professional.

---

# Services Page

Dedicated page describing every service.

Focus on outcomes instead of technology.

---

# Portfolio Page

Show:

Project image

Business type

Problem

Solution

Results

Initially can contain sample/demo work.

---

# Contact Page

Simple.

Easy.

Fast.

Clear CTA.

---

# Lead Generation Strategy

Primary methods:

- Cold email
- Instagram outreach
- Facebook outreach
- WhatsApp groups
- Google Maps research
- Referrals

Focus on businesses that:

- Have no website
- Have outdated websites
- Have poor user experience
- Depend only on social media
- Need modernization

---

# Sales Philosophy

Never sell:

"A website."

Sell:

- More customers
- More trust
- Better branding
- Better online presence
- Better conversions
- Easier customer inquiries

---

# Client Journey

Visitor discovers Chillispark

↓

Views portfolio

↓

Reads services

↓

Builds trust

↓

Contacts Chillispark

↓

Receives proposal

↓

Project begins

↓

Website launches

↓

Ongoing maintenance relationship

---

# Documents Required

Business Plan

Brand Guidelines

Pricing Sheet

Service Packages

Company Profile

Proposal Template

Quotation

Invoice Template

Client Questionnaire

Scope of Work

Client Contract

Portfolio Template

Case Study Template

---

# Future Expansion

- Branding services
- Logo design
- Local SEO
- Google Business Profile optimization
- Website maintenance plans
- Content writing
- Marketing services
- Analytics reporting

---

# Long-Term Goal

Become a trusted digital agency known for building modern websites that genuinely help businesses grow, while creating long-term relationships through quality work, transparency, and reliable support.

---

# Website Development

The site is built with Next.js (App Router) + Tailwind CSS v4, from the design in `chillispark-business-plan/project/ChilliSpark.dc.html`.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Contact form email

The form posts to `/api/contact`, which sends email via [Resend](https://resend.com). Copy `.env.example` to `.env.local` and set:

- `RESEND_API_KEY` — API key from Resend
- `CONTACT_TO_EMAIL` — where inquiries are delivered
- `CONTACT_FROM_EMAIL` — verified sender (use `onboarding@resend.dev` while testing)
- Deployment on Vercel.

Until these are set, the form shows a friendly "not set up yet" message; call/WhatsApp/email links work regardless.

## Placeholders to replace before launch

- Phone numbers `+91 93107 51433` / `+91 98114 33793` and WhatsApp link (`lib/data.ts`)
- Testimonials and stats in `lib/data.ts` (currently concept content)
- Instagram/LinkedIn footer links (`components/Footer.tsx`)
