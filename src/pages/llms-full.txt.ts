import { getCollection } from 'astro:content';
import { LLMS_FULL_HEAD, LLMS_FULL_TAIL } from '../data/llms-preamble';
import { pagesPrincipales, plain, url } from '../data/llms-derive';
import { getSiteInfo, getAbout } from '../data/content';
import { business, legal } from '../data/business';

// Derive au build : ne jamais recopier ici une valeur du contenu (cf. llms-derive.ts).
const para = (s: string) => plain(s).split(/\n\s*\n/).map((x) => x.replace(/\s+/g, ' ').trim()).filter(Boolean).join('\n\n');
function excerpt(html: string, max = 1500): string {
  const t = plain(html).replace(/\s+/g, ' ');
  return t.length <= max ? t : `${t.slice(0, max).replace(/\s+\S*$/, '')}...`;
}

export async function GET() {
  const info = getSiteInfo();
  const about = getAbout();
  const h = business.hours;
  // Memes sources et memes tris que les sections de la page d'accueil et du blog.
  const services = (await getCollection('services')).sort((a, b) => (a.data.order ?? 0) - (b.data.order ?? 0));
  const faq = (await getCollection('faq')).sort((a, b) => (a.data.order ?? 0) - (b.data.order ?? 0));
  const avis = (await getCollection('testimonials')).sort((a, b) => a.id.localeCompare(b.id));
  const posts = (await getCollection('blog')).sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime() || a.id.localeCompare(b.id));
  const pageService = (name: string) => business.services.find((s) => s.name === name)?.slug;

  const body = `${LLMS_FULL_HEAD}## Informations générales

- **Nom commercial** : ${info.name}
- **Raison sociale** : ${business.legalName}
- **SIRET** : ${legal.registrationNumber}
- **Dirigeant** : ${business.owner}
- **Métier** : ${business.ownerRole}
- **Ville** : ${business.address.city}, ${business.address.postalCode}, ${business.address.countryName}
- **Région** : ${business.address.region}
- **Téléphone** : ${info.phone}
- **E-mail** : ${info.email}
- **Site web** : ${url('/')}

## Horaires

- Du lundi au vendredi : ${h.weekdays}
- Samedi : ${h.saturday}
- Dimanche : ${h.sunday}

## Pages

${pagesPrincipales()}

## Services

${services.map((s) => {
  const page = pageService(s.data.name);
  return `### ${s.data.name}\n${page ? `URL: ${url(page)}\n` : ''}\n${para(s.data.shortDescription)}`;
}).join('\n\n')}

## Clientèle cible

Petits commerces et ERP : ${business.commerceTypes.join(', ').toLowerCase()}.

## Zone d'intervention

- **Villes principales** : ${business.areaServed.cities.join(', ')}
- **Départements** : ${business.areaServed.departments.join(', ')}
- **Région** : ${business.areaServed.region}

## À propos

${para(about.content)}

## FAQ

${faq.map((f) => `### ${f.data.question}\n\n${para(f.data.answer)}`).join('\n\n')}

## Avis clients

${avis.map((t) => `- ${t.data.author} (${plain(t.data.role)}), ${t.data.rating}/5 : "${plain(t.data.text)}"`).join('\n')}

## Articles du blog

${posts.map((p) => `### ${p.data.title}\nURL: ${url(`/blog/${p.id}/`)}\nDate: ${new Date(p.data.date).toISOString().slice(0, 10)}, Catégorie : ${p.data.category}\n\n${excerpt(p.data.content)}\n`).join('\n')}
${LLMS_FULL_TAIL}`;

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
