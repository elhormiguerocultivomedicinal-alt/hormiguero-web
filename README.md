# El Hormiguero — sitio web

Sitio institucional de El Hormiguero (cultivo de cannabis medicinal, Argentina), construido con Next.js + Tailwind CSS.

## Desarrollo

```bash
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Estructura

- `app/` — páginas (Inicio, Nosotros, Productos, Contacto) y layout raíz.
- `components/` — Header, Footer, tarjetas/ficha de producto, elementos decorativos de marca.
- `lib/products.js` — catálogo de genéticas (agregar nuevas es solo sumar un objeto al array).
- `lib/images.js` — mapeo único de imágenes; hoy todas son placeholders de stock (ver `public/images/CREDITS.md`).
- `app/fonts.js` — tipografías sustitutas de Explorer/Cocogoose (swap a `next/font/local` cuando estén los archivos con licencia).
