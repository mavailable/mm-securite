import fs from 'node:fs';
import path from 'node:path';

function readJson<T>(filePath: string): T {
  const fullPath = path.join(process.cwd(), filePath);
  return JSON.parse(fs.readFileSync(fullPath, 'utf-8')) as T;
}

function readCollection<T>(dirPath: string): (T & { _slug: string })[] {
  const fullDir = path.join(process.cwd(), dirPath);
  if (!fs.existsSync(fullDir)) return [];
  return fs
    .readdirSync(fullDir)
    .filter((f) => f.endsWith('.json'))
    .sort()
    .map((f) => ({
      _slug: f.replace('.json', ''),
      ...readJson<T>(path.join(dirPath, f)),
    }));
}

// --- Types ---

export interface SiteInfo {
  name: string;
  tagline: string;
  description: string;
  phone: string;
  email: string;
}

export interface Hero {
  title: string;
  subtitle: string;
  ctaPrimary: string;
  ctaPrimaryUrl: string;
  ctaSecondary: string;
  ctaSecondaryUrl: string;
  stat1Value: string;
  stat1Label: string;
  stat2Value: string;
  stat2Label: string;
  stat3Value: string;
  stat3Label: string;
}

export interface About {
  title: string;
  content: string;
}

export interface ContactSection {
  title: string;
  subtitle: string;
  buttonText: string;
}

export interface Service {
  name: string;
  shortDescription: string;
  tag?: string;
  tagStyle?: 'blue' | 'red' | 'none';
  order: number;
}

export interface Testimonial {
  author: string;
  role: string;
  rating: number;
  text: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  order: number;
}

export interface BlogPost {
  title: string;
  description: string;
  date: string;
  category: string;
  content: string;
}

// --- Getters ---

export function getSiteInfo(): SiteInfo {
  return readJson<SiteInfo>('src/content/site-info/index.json');
}

export function getHero(): Hero {
  return readJson<Hero>('src/content/hero/index.json');
}

export function getAbout(): About {
  return readJson<About>('src/content/about/index.json');
}

export function getContact(): ContactSection {
  return readJson<ContactSection>('src/content/contact/index.json');
}

export function getServices(): (Service & { _slug: string })[] {
  return readCollection<Service>('src/content/services').sort(
    (a, b) => (a.order ?? 0) - (b.order ?? 0)
  );
}

export function getTestimonials(): (Testimonial & { _slug: string })[] {
  return readCollection<Testimonial>('src/content/testimonials');
}

export function getFaq(): (FaqItem & { _slug: string })[] {
  return readCollection<FaqItem>('src/content/faq').sort(
    (a, b) => (a.order ?? 0) - (b.order ?? 0)
  );
}

export function getBlogPosts(): (BlogPost & { _slug: string })[] {
  return readCollection<BlogPost>('src/content/blog').sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
