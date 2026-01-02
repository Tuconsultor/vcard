# Documentación de Diseño - Página de Contacto B2B

## Resumen Ejecutivo

Se ha transformado una página de contacto HTML básica en una **aplicación React profesional** con diseño **Industrial Minimalist**, tipografía técnica avanzada, y experiencia de usuario (UX) optimizada para B2B. El resultado proyecta credibilidad ingenieril, profesionalismo comercial y sofisticación visual.

---

## Filosofía de Diseño: Industrial Minimalist

### Principios Centrales

El diseño se fundamenta en cuatro pilares que reflejan la identidad de ingeniero coder/vendedor de camiones:

**1. Precisión y Claridad**
- Estructura como diagrama técnico, no como página corporativa genérica
- Información organizada jerárquicamente con intención
- Bordes duros, líneas rectas, rechazo de curvas innecesarias
- Radio de esquinas mínimo: `0.25rem` (técnico, no suave)

**2. Asimetría Estratégica**
- Hero section con layout de 2/3 contenido + 1/3 foto
- Foto posicionada asimétricamente a la derecha (no centrada)
- Espacios negativos amplios para "respiración visual"
- Secciones con ancho variable según importancia

**3. Paleta Industrial**
- **Primario**: Azul acero `#1a3a52` (confianza, técnica)
- **Secundario**: Naranja oxidado `#d97706` (energía, señalización)
- **Neutro**: Gris cálido `#78716c` (equilibrio)
- **Fondo**: Blanco limpio `#fafaf8` (no puro, con calidez)
- **Texto**: Gris oscuro `#1a1a1a` (legibilidad, no negro puro)

**4. Tipografía Técnica**
- **Display**: IBM Plex Mono (monoespaciada, como código/planos)
- **Body**: Roboto (legible, geométrica, profesional)
- Jerarquía clara: peso y tamaño, no solo color

---

## Mejoras Implementadas

### Arquitectura de Componentes React

Se reemplazó HTML estático con componentes React reutilizables:

| Componente | Propósito | Ubicación |
|-----------|----------|----------|
| `HeroSection` | Banner principal con CTA | `client/src/components/HeroSection.tsx` |
| `SectionHeader` | Encabezados con badge y divider | `client/src/components/SectionHeader.tsx` |
| `ContactCard` | Tarjetas de contacto con icono | `client/src/components/ContactCard.tsx` |
| `ActionButton` | Botones CTA con variantes | `client/src/components/ActionButton.tsx` |
| `Home` | Página principal | `client/src/pages/Home.tsx` |

### Sistema de Diseño (Design Tokens)

Todos los valores visuales están centralizados en `client/src/index.css`:

```css
:root {
  --primary: #1a3a52;           /* Steel Blue */
  --secondary: #d97706;         /* Oxidized Orange */
  --accent: #78716c;            /* Warm Gray */
  --radius: 0.25rem;            /* Minimal rounding */
  --background: oklch(0.98 0 0);
  --foreground: #1a1a1a;
}
```

**Ventajas**:
- Cambios globales instantáneos
- Consistencia visual garantizada
- Fácil mantenimiento y escalabilidad

### Clases Utilitarias Personalizadas

Se crearon clases CSS reutilizables para acelerar desarrollo:

```css
.card-industrial    /* Tarjeta con borde izquierdo naranja */
.btn-primary        /* Botón CTA naranja */
.btn-secondary      /* Botón secundario con borde */
.btn-whatsapp       /* Botón WhatsApp verde */
.label-mono         /* Etiqueta técnica monoespaciada */
.section-divider    /* Separador degradado */
.fade-in            /* Animación de entrada */
.fade-in-stagger    /* Entrada escalonada para listas */
```

### Animaciones y Micro-interacciones

Todas las transiciones son **rápidas y precisas** (100ms):

- **Fade-in**: Elementos entran suavemente al cargar
- **Stagger**: Listas se animan con retraso escalonado
- **Hover**: Botones cambian color + sombra en 100ms
- **Active**: Escala 0.98x para feedback táctil
- **Línea decorativa**: Se expande al cargar (expandWidth)

### Responsividad Avanzada

Diseño mobile-first con breakpoints estratégicos:

| Breakpoint | Cambios |
|-----------|---------|
| `< 640px` | Stack vertical, tipografía reducida, padding ajustado |
| `640px - 1024px` | Grid de 2 columnas, espaciado intermedio |
| `> 1024px` | Grid de 3 columnas, layout completo, max-width: 1280px |

**Ejemplo**: Hero section en mobile es 1 columna; en desktop es 2/3 + 1/3 (foto).

### Accesibilidad y Legibilidad

- Contraste WCAG AA+ en todos los textos
- Fuentes sin serifa para pantallas (Roboto)
- Espaciado de línea: 1.6 para cuerpo de texto
- Tamaño mínimo: 16px en mobile
- Foco visible en todos los elementos interactivos

---

## Estructura de Archivos

```
b2b-contact-page/
├── client/
│   ├── public/
│   │   └── images/           /* Activos estáticos */
│   ├── src/
│   │   ├── components/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── SectionHeader.tsx
│   │   │   ├── ContactCard.tsx
│   │   │   └── ActionButton.tsx
│   │   ├── pages/
│   │   │   └── Home.tsx      /* Página principal */
│   │   ├── App.tsx           /* Router y tema */
│   │   ├── index.css         /* Design system */
│   │   └── main.tsx          /* Entry point */
│   └── index.html            /* HTML con fuentes */
├── ideas.md                  /* Brainstorming de diseño */
└── DESIGN_DOCUMENTATION.md   /* Este archivo */
```

---

## Paleta de Colores Detallada

### Luz (Light Theme - Actual)

| Rol | Color | Hex | Uso |
|-----|-------|-----|-----|
| Primario | Steel Blue | `#1a3a52` | Encabezados, bordes, hover |
| Secundario | Oxidized Orange | `#d97706` | Botones CTA, acentos |
| Accent | Warm Gray | `#78716c` | Etiquetas, iconos |
| Fondo | Off-White | `#fafaf8` | Fondo de página |
| Tarjeta | Gris claro | `#f5f5f5` | Cards, secciones |
| Texto | Dark Gray | `#1a1a1a` | Cuerpo de texto |
| Muted | Medium Gray | `#9ca3af` | Texto secundario |
| Border | Light Gray | `#e5e7eb` | Líneas, bordes |
| WhatsApp | Verde | `#16a34a` | Botón WhatsApp |

### Oscuro (Dark Theme - Disponible)

El sistema incluye soporte para tema oscuro automático (no activado por defecto):

```css
.dark {
  --primary: #2d5a7b;        /* Steel Blue más claro */
  --secondary: #f4a261;      /* Orange más cálido */
  --background: oklch(0.15 0 0);  /* Fondo oscuro */
  --foreground: #f0f0f0;     /* Texto claro */
}
```

---

## Tipografía

### IBM Plex Mono (Display)

```css
font-family: 'IBM Plex Mono', monospace;
font-weight: 600;
letter-spacing: 0.5px - 1px;
```

**Uso**: Encabezados (h1-h6), etiquetas técnicas, botones

**Razón**: Transmite precisión técnica, como código o planos de ingeniería

### Roboto (Body)

```css
font-family: 'Roboto', sans-serif;
font-weight: 400-700;
letter-spacing: 0.3px;
line-height: 1.6;
```

**Uso**: Párrafos, descripciones, texto de contacto

**Razón**: Altamente legible, geométrica, profesional

---

## Componentes Principales

### HeroSection

```tsx
<HeroSection
  name="Lic. Ramón Daniel Rivera Ayala"
  title="Vendedor Profesional"
  subtitle="Asesoría comercial B2B · Soluciones para logística y flotillas"
  photoUrl="..."
  phoneNumber="+52 477 580 5988"
  whatsappNumber="524775805988"
  email="daniel.rivera@elambajio.com"
/>
```

**Características**:
- Gradiente azul acero con borde naranja izquierdo
- Foto asimétricamente posicionada
- Tres botones CTA: Llamar, WhatsApp, Email
- Línea decorativa que se expande al cargar
- Responsive: stack vertical en mobile

### ContactCard

```tsx
<ContactCard
  icon={Phone}
  label="Teléfono"
  value="+52 477 580 5988"
  href="tel:+524775805988"
  isLink={true}
/>
```

**Características**:
- Borde izquierdo naranja (4px)
- Icono de Lucide React
- Etiqueta monoespaciada
- Sombra sutil con hover
- Responsive grid

### ActionButton

```tsx
<ActionButton
  href="https://www.linkedin.com/in/..."
  label="LinkedIn"
  icon={Linkedin}
  variant="primary"
  target="_blank"
/>
```

**Variantes**:
- `primary`: Naranja (#d97706)
- `secondary`: Blanco con borde
- `whatsapp`: Verde (#16a34a)

---

## Guía de Mantenimiento

### Agregar Nueva Sección

1. Crear componente en `client/src/components/`
2. Importar en `client/src/pages/Home.tsx`
3. Usar `SectionHeader` para encabezado
4. Aplicar clases: `fade-in`, `card-industrial`, etc.
5. Respetar espaciado: `mb-12 md:mb-16`

### Cambiar Colores

Editar variables en `client/src/index.css`:

```css
:root {
  --primary: #new-color;
  --secondary: #new-color;
}
```

Todos los componentes se actualizarán automáticamente.

### Agregar Animación

Definir en `@keyframes` en `index.css` y aplicar a clase:

```css
@keyframes myAnimation {
  from { opacity: 0; }
  to { opacity: 1; }
}

.my-class {
  animation: myAnimation 0.6s ease-out forwards;
}
```

---

## Mejoras Futuras Sugeridas

1. **Formulario de contacto**: Agregar formulario con validación para capturar leads
2. **Carrusel de testimonios**: Mostrar reseñas de clientes B2B
3. **Sección de servicios**: Detallar soluciones de logística y flotillas
4. **Mapa interactivo**: Mostrar zona de cobertura geográfica
5. **Blog/Recursos**: Artículos sobre tendencias en transporte

---

## Especificaciones Técnicas

- **Framework**: React 19 + TypeScript
- **Estilos**: Tailwind CSS 4 + CSS personalizado
- **Iconos**: Lucide React
- **Routing**: Wouter (client-side)
- **Build**: Vite
- **Node**: 22.13.0
- **Package Manager**: pnpm

---

## Conclusión

La página de contacto B2B ha sido transformada de HTML estático a una **aplicación React profesional** que proyecta:

✅ **Credibilidad técnica**: Tipografía monoespaciada, estructura precisa  
✅ **Profesionalismo B2B**: Paleta industrial, múltiples canales de contacto  
✅ **Sofisticación visual**: Asimetría inteligente, animaciones precisas  
✅ **Experiencia móvil**: Diseño responsive, accesibilidad garantizada  
✅ **Mantenibilidad**: Componentes reutilizables, design tokens centralizados

El resultado es un sitio que comunica: *"Soy un ingeniero que sabe vender, con estándares de calidad profesional."*
