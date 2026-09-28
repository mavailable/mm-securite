import { getCollection } from 'astro:content';
import { LLMS_HEAD } from '../data/llms-preamble';
import { pagesPrincipales, url, oneLine } from '../data/llms-derive';
import { getSiteInfo } from '../data/content';
import { business, legal } from '../data/business';

// Derive au build : ne jamais recopier ici une valeur du contenu (cf. llms-derive.ts).
export async function GET() {
  const info = getSiteInfo();
  // Meme source et meme ordre que /blog/ et /blog/[slug]/.
  const posts = (await getCollection('blog')).sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());
  const h = business.hours;

  const body = `${LLMS_HEAD}## Pages principales

${pagesPrincipales()}

## Articles du blog

${posts.map((p) => `- [${p.data.title}](${url(`/blog/${p.id}/`)}): ${oneLine(p.data.description)}`).join('\n')}

## Informations clés

- Téléphone : ${info.phone}
- E-mail : ${info.email}
- Zone : ${business.areaServed.cities.join(', ')}, ${business.areaServed.region}
- Horaires : du lundi au vendredi : ${h.weekdays}, samedi : ${h.saturday}, dimanche : ${h.sunday}
- SIRET : ${legal.registrationNumber}
`;

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
