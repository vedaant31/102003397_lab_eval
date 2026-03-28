# Salesforce + AI Automation Engineer Portfolio

A high-conversion personal portfolio website built as a premium SaaS-style landing page.

## Tech Stack
- Next.js (App Router)
- Tailwind CSS
- Framer Motion
- TypeScript

## Folder Structure

```bash
.
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── sections.tsx
├── public/
├── next.config.ts
├── tailwind.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```

## Run Locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000).

## Production Build

```bash
npm run build
npm run start
```

## Deploy to Vercel

### Option 1: Vercel Dashboard
1. Push the repository to GitHub.
2. Import project in [Vercel](https://vercel.com/new).
3. Keep defaults (`Framework Preset: Next.js`).
4. Click **Deploy**.

### Option 2: Vercel CLI
```bash
npm i -g vercel
vercel
vercel --prod
```

## SEO and Performance Notes
- Metadata configured in `app/layout.tsx` (title, description, Open Graph, keywords).
- App Router with server-rendered entry page for fast initial render.
- Minimal dependencies and optimized animation usage for smooth UX.
