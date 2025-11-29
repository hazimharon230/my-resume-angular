
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: './',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/hobbies"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 697, hash: '2c400727f39691a80e6e70d27423573460b8ba02d2319e0a8e2286612dcf3256', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 954, hash: '25b2cb232b47c6284b6fd3bb4d30ccc9ecd64883f921dbee9f3c3a8d08918136', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'hobbies/index.html': {size: 2982, hash: 'e67c2b60803f73b4b56053030cc744022b73330ef407ce52d29e3b7ef8cd08ee', text: () => import('./assets-chunks/hobbies_index_html.mjs').then(m => m.default)},
    'index.html': {size: 2841, hash: 'a453d25dcc0a01316a6f6aaf5330b9f89d195f169d8f2c159756fa0dbbd6e9d4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 3076, hash: '5e37a7b0c73d2b6d00ed7da870fe1d831d880d4aa8623d183ada3484eaba0ee3', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-ZD265ECN.css': {size: 690, hash: 'bPQMFkHOKuw', text: () => import('./assets-chunks/styles-ZD265ECN_css.mjs').then(m => m.default)}
  },
};
