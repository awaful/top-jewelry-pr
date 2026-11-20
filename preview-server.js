/**
 * TOP JEWELRY PR — DIGITAL FLAGSHIP
 * Servidor de desarrollo local · Preview only
 */

const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const HTML_FILE = path.join(__dirname, 'index.html');

// Categorías de referencia (datos de ejemplo para desarrollo local)
const categories = [
  { id: 'cadenas', name: 'Cadenas & Cordones', count: 3 },
  { id: 'anillos', name: 'Sortijas & Sellos', count: 3 },
  { id: 'pulseras', name: 'Pulseras & Tennis', count: 2 },
  { id: 'collares', name: 'Medallas & Dijes', count: 2 },
  { id: 'aretes', name: 'Aretes', count: 1 },
  { id: 'relojes', name: 'Relojería', count: 1 }
];

let orders = [
  {
    id: 'ORD-0001',
    customer_name: 'Cliente Ejemplo',
    customer_email: 'ejemplo@topjewelrypr.com',
    customer_phone: '+1 (787) 000-0000',
    shipping_address: 'Dirección Demo',
    items: [{ product_id: 'prod-001', product_name: 'Pieza de Joyería', variant_name: 'Estándar', unit_price: 0, quantity: 1, subtotal: 0 }],
    subtotal: 0,
    shipping_fee: 0,
    tax_amount: 0,
    total_amount: 0,
    payment_method: 'pendiente',
    payment_status: 'Pendiente',
    order_status: 'Pendiente',
    created_at: '2025-01-01T00:00:00Z'
  }
];

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  if (pathname === '/api/categories') {
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*' });
    res.end(JSON.stringify(categories));
    return;
  }

  if (pathname === '/api/orders') {
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*' });
    res.end(JSON.stringify(orders));
    return;
  }

  // Servir archivos estáticos de /public
  if (pathname.endsWith('.png') || pathname.endsWith('.jpg') || pathname.endsWith('.svg') || pathname.endsWith('.txt')) {
    const filename = path.basename(pathname);
    const filePath = path.join(__dirname, 'public', filename);
    if (fs.existsSync(filePath)) {
      const ext = path.extname(filePath).toLowerCase();
      const contentType = ext === '.png' ? 'image/png' : ext === '.jpg' || ext === '.jpeg' ? 'image/jpeg' : ext === '.svg' ? 'image/svg+xml' : 'text/plain';
      res.writeHead(200, { 'Content-Type': contentType, 'Cache-Control': 'no-cache, no-store, must-revalidate' });
      res.end(fs.readFileSync(filePath));
      return;
    }
  }

  // Servir cualquier HTML específico si existe en la raíz
  if (pathname.endsWith('.html') || !pathname.includes('.')) {
    const requestedHtml = pathname.endsWith('.html') ? pathname.slice(1) : `${pathname.slice(1)}.html`;
    const specificFile = path.join(__dirname, requestedHtml);
    if (fs.existsSync(specificFile) && fs.statSync(specificFile).isFile()) {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(fs.readFileSync(specificFile, 'utf-8'));
      return;
    }
  }

  // Servir HTML principal
  if (fs.existsSync(HTML_FILE)) {
    const htmlContent = fs.readFileSync(HTML_FILE, 'utf-8');
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(htmlContent);
  } else {
    res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Error: index.html no encontrado.');
  }
});

server.listen(PORT, '0.0.0.0', () => {
  console.log('================================================================');
  console.log('TOP JEWELRY PR — DIGITAL FLAGSHIP EDITORIAL (ARMONÍA VISUAL)');
  console.log(`URL: http://localhost:${PORT}`);
  console.log('================================================================');
});
