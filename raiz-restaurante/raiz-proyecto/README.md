# Raíz — Landing de Restaurante

Landing page estática para restaurante de cocina de autor colombiana.

## Estructura

```
raiz-restaurante/
├── index.html
├── css/
│   ├── tokens.css       # Variables de diseño: paleta, tipografía, espaciado
│   ├── base.css         # Reset, nav, botones, tipografía global
│   ├── sections.css     # Hero, plato del día, nosotros, reservas, footer
│   ├── menu.css         # Tabs y cards del menú interactivo
│   └── animations.css   # Keyframes y scroll reveal
└── js/
    ├── menu-data.js     # Datos de los platos (editar aquí para actualizar el menú)
    ├── menu.js          # Lógica de tabs y renderizado de cards
    └── nav.js           # Nav con scroll, reveal observer y formulario
```

## Uso local

Abrir `index.html` en el navegador. Las fuentes cargan de Google Fonts (requiere internet).

Para desarrollo local con live-reload:

```bash
npx serve .
# o
python3 -m http.server 8080
```

## Despliegue con GitHub Pages

1. Subir el repositorio a GitHub
2. Ir a **Settings → Pages**
3. En *Source* seleccionar `main` / `root`
4. La página quedará disponible en `https://usuario.github.io/nombre-repo`

## Personalización rápida

| Qué cambiar | Dónde |
|---|---|
| Colores y fuentes | `css/tokens.css` |
| Platos del menú | `js/menu-data.js` |
| Plato del día | Sección `#plato-dia` en `index.html` |
| Datos de contacto | Sección `#reservas` y `footer` en `index.html` |
| Imágenes | Reemplazar las clases `.bg-*` en `css/menu.css` con `background-image: url(...)` |
