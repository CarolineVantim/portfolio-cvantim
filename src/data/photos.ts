export interface HeroPhoto {
  /** Path inside /public, e.g. "/photos/caroline-1.jpg". Leave undefined to show a placeholder slide. */
  src?: string;
  alt: string;
}

// Troque estes itens por fotos reais: coloque os arquivos em /public/photos
// e defina `src: "/photos/nome-do-arquivo.jpg"` em cada entrada.
export const heroPhotos: HeroPhoto[] = [
  { src: "/photos/photo2.jpg", alt: "Caroline Vantim na formatura" },
];
