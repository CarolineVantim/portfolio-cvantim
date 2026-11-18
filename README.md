# Caroline Vantim — Portfólio

Portfólio pessoal de QA Engineer, com foco em automação de testes assistida por IA, API testing e Shift Left.

🔗 **https://portfolio-cvantim.vercel.app**

## Destaques

- **3 idiomas** (português, inglês e italiano): detecta o idioma do navegador na primeira visita e lembra a escolha do visitante.
- **Conteúdo centralizado** em [`src/i18n/translations.ts`](src/i18n/translations.ts): para editar textos, experiências ou projetos, basta mexer nesse arquivo; os componentes só renderizam.
- **Promoções agrupadas automaticamente**: cargos consecutivos na mesma empresa aparecem juntos, com selo de promoção.
- **Acessível**: respeita `prefers-reduced-motion`, atualiza o `lang` da página ao trocar de idioma e funciona sem JavaScript.
- **Prévia para redes sociais** (Open Graph) ao compartilhar o link.

## Stack

- [Next.js](https://nextjs.org) (App Router) + React + TypeScript
- Tailwind CSS 4
- Fontes Manrope e Instrument Serif via `next/font`
- Deploy na Vercel

## Rodando localmente

```bash
npm install
npm run dev       # http://localhost:3000
```

Antes de subir:

```bash
npm run lint
npm run build
```

## Estrutura

```
src/
  app/            layout, página, estilos globais, ícones e imagem de prévia
  components/     uma seção por arquivo (Hero, About, Experience, Projects...)
  components/ui   blocos compartilhados (Section, SectionHeading, Reveal)
  data/photos.ts  fotos exibidas no "Sobre" (arquivos em public/photos)
  i18n/           textos dos 3 idiomas e contexto de idioma
```
