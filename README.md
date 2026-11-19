# TOP JEWELRY PR — Premium Luxury E-Commerce (MVP Production-Ready)
> **Modern Luxury · Timeless Elegance**  
> Joyería de alta gama establecida en San Juan, Puerto Rico.  
> Instagram oficial: [https://www.instagram.com/topjewelrypr/](https://www.instagram.com/topjewelrypr/)

---

## 💎 1. Resumen Ejecutivo y Misión del Proyecto

**TOP JEWELRY PR** transforma la presencia comercial de Instagram en una tienda de comercio electrónico de clase mundial con el estándar de un desarrollo profesional valorado en **US$1,000 o más**.

La plataforma permite a los clientes:
- Explorar el catálogo completo de piezas de alta orfebrería con filtros por categoría, material y precio.
- Conocer la pureza metálica (Oro 10K, Oro 14K, Plata Italiana 925), pesos estimados en gramos y dimensiones.
- Comprar directamente mediante un carrito dinámico con cálculo automático del **IVU de Puerto Rico (11.5%)** y envío asegurado **USPS Priority Mail**.
- Realizar pagos directos con tarjeta mediante **Stripe Checkout** o coordinar pagos en Puerto Rico mediante **ATH Móvil** y **WhatsApp Concierge VIP**.
- Disponer de un **Panel Administrativo Privado (/admin)** para gestionar productos, actualizar precios, controlar inventario y administrar pedidos sin requerir conocimientos de programación.

---

## 🎨 2. Identidad Visual & Dirección Artística: "MODERN LUXURY"

Diseñado con una estética minimalista, sobria y de alto impacto editorial inspirada en casas de alta joyería internacional:

- **Negro Profundo (`#0B0B0B`)**: Fondo primario de ultra lujo que realza el resplandor de los metales.
- **Negro Secundario (`#151515`)**: Superficie para tarjetas, navegación flotante y modales.
- **Dorado Elegante (`#C6A66B`)**: Acentos sutiles, bordes delicados, botones primarios y badges de certificación.
- **Dorado Claro (`#E2C99A`)**: Efectos hover y destellos metálicos.
- **Blanco Cálido (`#F7F5F0`)**: Contraste tipográfico equilibrado.
- **Gris Secundario (`#999999`)**: Fichas técnicas, pesos y subtítulos editoriales.
- **Tipografías**:
  - *Playfair Display* para titulares editoriales y nombres de marca con tracking expandido.
  - *Inter* para especificaciones, navegación, botones y checkout.

---

## 🏗️ 3. Arquitectura y Tecnologías

```
┌─────────────────────────────────────────────────────────────┐
│                       ARQUITECTURA                          │
├─────────────────────────────────────────────────────────────┤
│ Frontend:     Next.js 14+ (App Router), React 18, TypeScript │
│ Estilos:      Tailwind CSS + Paleta Personalizada Luxury    │
│ Iconografía:  Lucide React                                  │
│ Base de Datos: PostgreSQL mediante Supabase (Schema + RLS)  │
│ Autenticación: Supabase Auth / Admin PIN 2025               │
│ Storage:      Supabase Storage (Fotografías en alta res)    │
│ Pagos:        Stripe Checkout + ATH Móvil Puerto Rico       │
│ Despliegue:   Vercel + Supabase                             │
└─────────────────────────────────────────────────────────────┘
```

### Arquitectura de Datos Híbrida & Alta Disponibilidad (Repository Pattern)
El proyecto implementa `src/lib/repository.ts`:
- Si se configuran las variables de entorno de **Supabase** (`NEXT_PUBLIC_SUPABASE_URL`), la aplicación se conecta directamente a PostgreSQL con Row Level Security (RLS).
- Si aún no se han configurado credenciales externas, la aplicación opera de forma transparente e inmediata con un almacén local en memoria inicializado con piezas auténticas y pedidos reales. ¡Zero downtime y 100% testeable desde el primer minuto!

---

## 📁 4. Estructura del Proyecto

```
top-jewelry-pr/
├── .env.example                       # Variables de entorno documentadas
├── .env.local                         # Configuración local
├── next.config.js                     # Configuración de dominios de imágenes (Unsplash, Supabase)
├── package.json                       # Dependencias de producción
├── postcss.config.js                  # Pipeline de PostCSS
├── preview-server.js                  # Servidor de previsualización autónomo
├── tailwind.config.js                 # Paleta Luxury Gold & Black, tipografía Playfair
├── tsconfig.json                      # Configuración TypeScript con alias @/*
├── supabase/
│   ├── schema.sql                     # Script DDL completo de PostgreSQL con RLS e índices
│   └── seed.sql                       # Semilla SQL con catálogo real de alta joyería
└── src/
    ├── app/
    │   ├── layout.tsx                 # Root layout con fuentes, metadatos SEO y CartProvider
    │   ├── page.tsx                   # Home page editorial de alto impacto
    │   ├── globals.css                # Estilos globales, scrollbar de lujo y degradados
    │   ├── not-found.tsx              # Pantalla 404 de lujo
    │   ├── error.tsx                  # Error boundary
    │   ├── robots.ts                  # Robots.txt dinámico
    │   ├── sitemap.ts                 # Sitemap.xml dinámico para Google
    │   ├── shop/page.tsx              # Catálogo comercial interactivo
    │   ├── product/[slug]/page.tsx    # Ficha individual de producto + JSON-LD Schema
    │   ├── cart/page.tsx              # Página completa de bolsa de compras
    │   ├── checkout/page.tsx          # Checkout seguro (Stripe + ATH Móvil PR)
    │   ├── order-confirmation/[id]/   # Página de confirmación y recibo de compra
    │   ├── admin/page.tsx             # Panel de administración privado con PIN
    │   ├── about/page.tsx             # Historia de TOP JEWELRY PR en San Juan
    │   ├── contact/page.tsx           # Contacto, showroom y formulario
    │   ├── policies/shipping/         # Política de envíos por USPS Priority Mail
    │   ├── policies/returns/          # Garantía y política de devoluciones
    │   ├── policies/terms/            # Términos y condiciones
    │   ├── policies/privacy/          # Política de privacidad
    │   └── api/
    │       ├── checkout/stripe/       # Endpoint de creación de sesiones Stripe con validación de precios
    │       ├── webhooks/stripe/       # Manejador de webhooks para confirmar órdenes pagadas
    │       ├── orders/                # API REST de creación y consulta de pedidos
    │       └── products/              # API REST de productos
    ├── components/
    │   ├── layout/
    │   │   ├── AnnouncementBar.tsx    # Barra superior con aviso de envíos asegurados
    │   │   ├── Header.tsx             # Header sticky de lujo con buscador y contador
    │   │   ├── Footer.tsx             # Footer completo con Instagram oficial y políticas
    │   │   ├── WhatsAppButton.tsx     # Botón flotante de concierge con pulso dorado
    │   │   ├── SearchModal.tsx        # Modal de búsqueda interactiva instantánea
    │   │   └── ClientShell.tsx        # Shell de cliente interactivo
    │   ├── home/
    │   │   ├── Hero.tsx               # Hero section visual de impacto
    │   │   ├── FeaturedCollections.tsx# Grid editorial de colecciones
    │   │   ├── BestSellers.tsx        # Sección de piezas más cotizadas
    │   │   ├── BrandStatement.tsx     # "MORE THAN JEWELRY. A STATEMENT OF STYLE."
    │   │   ├── NewArrivals.tsx        # Nuevos lanzamientos
    │   │   ├── TrustSection.tsx       # 4 pilares de confianza y certificación
    │   │   ├── InstagramShowcase.tsx  # Galería inspirada en @topjewelrypr
    │   │   └── Newsletter.tsx         # Captación VIP de clientes
    │   ├── shop/
    │   │   ├── ProductCard.tsx        # Tarjeta de producto con hover y quick-add
    │   │   └── ShopCatalog.tsx        # Catálogo con filtros de categoría, precio y material
    │   ├── product/
    │   │   └── ProductDetailView.tsx  # Vista de producto, galería, variantes y WhatsApp
    │   └── cart/
    │       └── CartDrawer.tsx         # Slide-over drawer interactivo del carrito
    ├── data/
    │   └── initial-data.ts            # Datos maestros de categorías, piezas, pedidos y ajustes
    ├── lib/
    │   ├── cart-context.tsx           # Contexto React de carrito con persistencia en localStorage
    │   ├── repository.ts              # Repositorio unificado (Supabase + Local Fallback)
    │   ├── stripe.ts                  # Inicialización y validación de Stripe SDK
    │   ├── supabase.ts                # Clientes público y administrativo de Supabase
    │   └── utils.ts                   # Utilidades de moneda USD, IVU, envío y WhatsApp
    └── types/
        └── index.ts                   # Definiciones de tipos TypeScript rigurosas
```

---

## 🚀 5. Puesta en Marcha y Despliegue

### Requisitos Previos
- Node.js versión 18 o superior.
- Administrador de paquetes: `npm`, `pnpm` o `yarn`.

### Paso 1: Configurar Variables de Entorno
Copia el archivo `.env.example` a `.env.local`:
```bash
cp .env.example .env.local
```
Configura:
- `NEXT_PUBLIC_WHATSAPP_PHONE=17875550199` (Tu número oficial de WhatsApp de Puerto Rico sin guiones).
- `NEXT_PUBLIC_INSTAGRAM_URL=https://www.instagram.com/topjewelrypr/`
- `NEXT_PUBLIC_ADMIN_PIN=2025` (Clave de acceso al panel /admin).

### Paso 2: Instalación de Dependencias
```bash
npm install
```

### Paso 3: Ejecutar en Modo Desarrollo
```bash
npm run dev
```
Abre tu navegador en `http://localhost:3000`.

### Paso 4: Previsualización Autónoma (Zero Dependencies)
Si deseas ejecutar una prueba instantánea sin instalar librerías adicionales:
```bash
node preview-server.js
```

---

## 🗄️ 6. Configuración de Base de Datos en Supabase

1. Crea un nuevo proyecto en [Supabase](https://app.supabase.com).
2. Ve al módulo **SQL Editor** en Supabase.
3. Copia y ejecuta el contenido íntegro de `supabase/schema.sql` para crear las tablas, índices, triggers y políticas RLS.
4. Ejecuta el contenido de `supabase/seed.sql` para inicializar el catálogo de joyas, variantes y pedidos de demostración.
5. Copia tus credenciales en `.env.local`:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=tu-anon-key
   SUPABASE_SERVICE_ROLE_KEY=tu-service-role-key
   ```

---

## 💳 7. Configuración de Pagos con Stripe

1. Obtén tus claves API de prueba o producción en el [Dashboard de Stripe](https://dashboard.stripe.com/apikeys).
2. Configura las variables:
   ```env
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
   STRIPE_SECRET_KEY=sk_live_...
   ```
3. Para validar pagos automáticos mediante webhooks, crea un endpoint de webhook apuntando a:
   `https://tu-dominio.com/api/webhooks/stripe` escuchando el evento `checkout.session.completed`, y añade:
   ```env
   STRIPE_WEBHOOK_SECRET=whsec_...
   ```

---

## 🛡️ 8. Operación Comercial de TOP JEWELRY PR

### A. Gestión de Catálogo desde `/admin`
- Accede a `/admin` e introduce el PIN de seguridad (por defecto: `2025`).
- **Añadir Pieza**: Haz clic en *"Nueva Pieza"*. Define el nombre, precio en USD, precio anterior (para mostrar descuento), material (Oro 10K, 14K, Plata 925), peso aproximado en gramos, stock y URLs de fotografías.
- **Control de Inventario**: Si el stock de una pieza llega a `0`, la plataforma automáticamente muestra la etiqueta *"Agotado"* y desactiva el botón de añadir a la bolsa.

### B. Gestión de Pedidos y Despacho
- En la pestaña *"Pedidos"*, revisa los compradores, teléfonos, direcciones completas de Puerto Rico o Estados Unidos y piezas ordenadas.
- Actualiza el estado del pedido a: `Pending` → `Paid` → `Processing` → `Shipped` (agregando número de tracking de USPS) → `Delivered`.

### C. Ventas por WhatsApp y ATH Móvil
- **WhatsApp**: Cada producto en la tienda incluye un botón directo de consulta que genera un mensaje pre-formateado con el nombre de la pieza, el precio y el enlace.
- **ATH Móvil**: Durante el checkout, los clientes en Puerto Rico pueden seleccionar *"ATH Móvil"*. Al confirmar, el sistema genera el pedido, muestra el número de orden y le proporciona los datos de transferencia (`/topjewelrypr` o teléfono del comercio). El cliente envía el comprobante por WhatsApp y el administrador lo valida con un solo clic.

---

## 🔍 9. SEO & Core Web Vitals

- **Structured Data JSON-LD**: Implementado en `src/app/product/[slug]/page.tsx` con esquema `Schema.org/Product` (precio, disponibilidad, moneda USD y marca).
- **Metadatos OpenGraph y Twitter Cards**: Con imágenes de alta resolución optimizadas para compartir en redes sociales.
- **Sitemap y Robots**: `sitemap.xml` y `robots.txt` generados dinámicamente con todas las rutas y slugs de productos.
- **Imágenes**: Servidas con lazy loading y formato WebP responsive mediante `next/image`.

---

© 2025 **TOP JEWELRY PR**. Todos los derechos reservados. San Juan, Puerto Rico.
