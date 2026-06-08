# Fisioterapia Rafael Martínez González
### Landing page · Grupo Arenal Centro Médico

---

## Estructura del proyecto

```
fisioterapia-rafael/
├── index.html              ← Página principal (edita aquí el contenido)
├── css/
│   └── styles.css          ← Todos los estilos (variables, secciones, responsive)
├── js/
│   └── main.js             ← Interacciones: navbar, scroll, formulario
└── assets/
    └── images/
        ├── foto-rafael.png ← Foto del fisioterapeuta
        └── logo-arenal.png ← Logo Grupo Arenal (sustituir por versión definitiva)
```

---

## Cómo editar

### Textos y contenido → `index.html`
Cada sección está comentada claramente:
- **Hero**: título, nombre, descripción
- **Sobre mí**: texto de presentación, tarjetas de valores
- **Servicios**: edita cada `.service-card`
- **Horario**: días y horas en `.schedule-card`
- **Cita**: dirección, teléfono, opciones del formulario

### Colores y tipografía → `css/styles.css`
Las variables están al inicio del archivo:
```css
:root {
  --teal:      #1a9fa8;   /* Teal principal Arenal */
  --teal-dark: #147d85;   /* Teal oscuro (hover) */
  --gold:      #b8975a;   /* Dorado Arenal */
  ...
}
```

### Comportamiento del formulario → `js/main.js`
El formulario actualmente muestra un toast de confirmación visual.
Para conectarlo a un servicio real, busca el comentario `// Aquí puedes conectar...`
y añade la integración con:
- **Formspree**: `action="https://formspree.io/f/TU_ID"` en el `<form>`
- **EmailJS**: `emailjs.sendForm(...)` dentro del handler
- **Tu backend**: `fetch('/api/cita', { method: 'POST', body: new FormData(form) })`

---

## Pendiente de actualizar

- [ ] Dirección exacta del centro (sección Cita → info-item 📍)
- [ ] Teléfono / email de contacto real
- [ ] Logo Arenal en alta resolución (sustituir `assets/images/logo-arenal.png`)
- [ ] Conectar formulario a backend o servicio de email
- [ ] Añadir número de colegiado si se requiere legalmente
- [ ] Política de privacidad / aviso legal (obligatorio en España)

---

## Cómo abrirlo en local

Abre `index.html` directamente en el navegador, o usa la extensión
**Live Server** de VS Code (botón derecho → *Open with Live Server*) para
ver los cambios en tiempo real mientras editas.

---

*Diseño: Guille · Mayo 2025*
