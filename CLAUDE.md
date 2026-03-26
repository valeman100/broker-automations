# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server (localhost:3000)
npm run build    # production build
npm run lint     # ESLint via next lint
```

## Architecture

Single-page Next.js 15 landing site targeting Italian insurance brokers. All content is in Italian.

**Page structure** (`app/page.tsx`): sections rendered in order — `HeroSection → ProblemSection → ServicesSection → RoiCalculator → VideoSection → AboutSection → ContactSection → Footer`. Each section is its own component in `components/`.

**API** (`app/api/contact/route.ts`): a single POST endpoint that sends contact form submissions via [Resend](https://resend.com). Requires `RESEND_API_KEY` and `RESEND_FROM` env vars (see `.env.local`). Includes a honeypot field (`_gotcha`) for spam protection.

**Animations**: `hooks/useInView.ts` is a custom `IntersectionObserver` hook used across components to trigger scroll-in animations. It's a client-side hook (`"use client"`), so any component using it must also be a Client Component.

**Styling**: Tailwind CSS v4 via PostCSS (`postcss.config.mjs`). Global styles in `app/globals.css`. Font: Inter via `next/font/google`, exposed as CSS variable `--font-inter`.

**Deployment**: Vercel (`vercel.json`). Production URL: `https://broker-automations.valeriomannucci.com`.
