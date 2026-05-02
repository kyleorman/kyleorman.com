# kyleorman.com

Public-facing professional website for Kyle Orman.

## Purpose

This repository supports a personal website intended for potential employers, technical peers, collaborators, and academic readers.

The site should communicate professional experience, technical strengths, academic progress, and selected achievements in a credible and approachable way.

## Audience

The project is optimized for:

1. Employers, recruiters, and hiring managers
2. Technical peers and collaborators
3. Academic readers

## Planned site content

- Home / professional summary
- About
- Experience
- Education & Research
- Selected Projects
- Achievements
- Skills
- Contact

Publications and research outputs should live under **Education & Research** for now.

## Repository documents

- [`AGENTS.md`](./AGENTS.md): contributor guidance, content guardrails, and tone expectations
- [`SKILLS.md`](./SKILLS.md): reusable workflows for writing, reviewing, and structuring site content

## Content principles

- Accurate and verifiable
- Professional-warm in tone
- Easy to scan quickly
- Accessible to mixed audiences
- Safe for public display

## Stack

- Astro
- TypeScript
- Tailwind CSS
- MDX
- Static deployment target: Cloudflare Pages

## Project status

This project now includes an initial Astro-based site foundation and remains in an early content-building stage.

## Local development

```bash
npm install
npm run dev
```

## Local development with Nix

If you use NixOS or nix-darwin, a dev shell is included:

```bash
nix develop
npm install
npm run dev
```

Other useful commands:

```bash
npm run check
npm run build
npm run preview
```

## Next steps

- Replace placeholder copy with polished professional and academic content
- Add public contact links and profile URLs
- Expand project, research, and achievement entries in `src/content`
- Refine layout, accessibility, and metadata as content becomes final

## Deployment

The site is designed for static deployment on Cloudflare Pages.

Recommended build settings:

- Build command: `npm run build`
- Output directory: `dist`
- Node version: current LTS

## Setup

Install dependencies with `npm install`, then use the commands above to develop and build locally.
