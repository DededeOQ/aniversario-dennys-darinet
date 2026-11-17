# Un año, mil momentos — Dennys & Darinet

Una landing page para celebrar el primer aniversario de Dennys y Darinet (16 de noviembre de 2026). Está hecha con **HTML, CSS y JavaScript puro** y funciona en **GitHub Pages** sin dependencias ni compilación.

## Vista previa local

Abre `index.html` en tu navegador. También puedes usar un servidor local:

```bash
python -m http.server 8000
```

Después visita `http://localhost:8000`.

## Añadir fotografías

Coloca las fotografías en la carpeta `assets/images/` con estos nombres y extensiones:

| Archivo | Lugar en la web |
| --- | --- |
| `recuerdo-01.jpg` | Cómo comenzó nuestra historia |
| `recuerdo-02.jpg` | Primera Navidad juntos |
| `recuerdo-03.jpg` | Un recuerdo de confianza |
| `galeria-01.jpg` a `galeria-06.jpg` | Collage de fotografías |

Los espacios de las fotos muestran fondos de diseño mientras no existan estos archivos. Al colocar las imágenes, aparecerán automáticamente y se podrán ampliar haciendo clic o pulsando sobre ellas.

Para mejor rendimiento, usa fotos JPG o WebP optimizadas (idealmente 1200–1600 px en el lado mayor, menos de 500 KB por imagen cuando sea razonable). Si quieres utilizar `.webp`, cambia la extensión de la ruta correspondiente en `index.html`.

**Privacidad:** elimina metadatos EXIF, especialmente ubicación GPS, antes de subir fotografías a un repositorio público. No publiques imágenes o recuerdos íntimos sin que ambas personas estén cómodas con ello. Un enlace público a GitHub Pages **no es una forma de protección de acceso**.

## Personalizar los textos

Edita `index.html`. Encontrarás cada capítulo delimitado con comentarios como `<!-- 03 · LÍNEA DEL TIEMPO -->`. Los recuerdos han sido redactados usando solo información compartida y evitando inventar fechas específicas.

La canción se ha dejado fuera intencionalmente, a la espera de elegirla y confirmar cómo integrarla legalmente.

## Publicar en GitHub Pages

1. En GitHub, crea un repositorio público, por ejemplo `aniversario-dennys-darinet`.
2. Sube el contenido de esta carpeta **directamente a la raíz** del repositorio: `index.html`, `css`, `js`, `assets`, `README.md`.
3. Ve a **Settings → Pages**.
4. En **Build and deployment**, selecciona **Deploy from a branch**, `main`, `/ (root)`, y guarda.
5. Cuando termine de desplegar, abre el enlace mostrado por GitHub (normalmente `https://TUUSUARIO.github.io/aniversario-dennys-darinet/`).

Si usas Git desde tu ordenador:

```bash
git init
git add .
git commit -m "Primera versión de la landing de aniversario"
git branch -M main
git remote add origin https://github.com/TUUSUARIO/aniversario-dennys-darinet.git
git push -u origin main
```

Sustituye `TUUSUARIO` por tu usuario de GitHub. Asegúrate de haber creado el repositorio antes de hacer `git push`.

## Personalizar el diseño

Los colores principales están definidos como variables al inicio de `css/style.css`, por ejemplo `--wine` y `--ivory`. El sitio adapta su diseño a móviles, admite teclado y respeta el ajuste `prefers-reduced-motion`.

## Pendiente

- Añadir las fotos definitivas (conservar primero originales para leer metadatos).
- Confirmar qué recuerdos íntimos se quieren mostrar públicamente.
- Revisar la carta definitiva con Dennys.
- Añadir música opcional solo si se elige una canción y hay un modo válido de uso.
- Decidir si se agrega una fotografía principal en la portada.
