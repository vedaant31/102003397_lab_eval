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
2. Create a local environment file:
   ```bash
   cp .env.example .env.local
   ```
3. Add your Supabase values to `.env.local`:
   ```bash
   SUPABASE_URL=...
   SUPABASE_ANON_KEY=...
   ```
4. Start development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000).

## Supabase Contact Form Setup

### 1. Create a Supabase project
1. Go to [Supabase](https://supabase.com/).
2. Create a new project.
3. Open **Project Settings > API**.
4. Copy:
   - `Project URL` into `SUPABASE_URL`
   - `anon public` key into `SUPABASE_ANON_KEY`

### 2. Create the `contacts` table
Run the following SQL in the Supabase SQL editor:

```sql
create extension if not exists pgcrypto;

create table if not exists public.contacts (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  created_at timestamp with time zone not null default now()
);
```

### 3. Enable insert access for the API
If Row Level Security is enabled, add a policy that allows inserts:

```sql
alter table public.contacts enable row level security;

create policy "Allow public inserts on contacts"
on public.contacts
for insert
to anon
with check (true);
```

### 4. Frontend flow
The site submits the contact form to:

```bash
POST /api/contact
```

Expected payload:

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "message": "We need help reducing manual work in our support workflow."
}
```

### 5. Validation rules
- `name` is required
- `email` is required and must be valid
- `message` is required

### 6. Files added for Supabase integration
- `app/api/contact/route.ts`
- `lib/supabase.ts`
- `.env.example`

## Example SQL Schema

```sql
create extension if not exists pgcrypto;

create table if not exists public.contacts (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  created_at timestamp with time zone not null default now()
);
```

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
