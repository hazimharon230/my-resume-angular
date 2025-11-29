
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://hazimharon230.github.io/my-resume-angular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/my-resume-angular"
  },
  {
    "renderMode": 2,
    "route": "/my-resume-angular/hobbies"
  },
  {
    "renderMode": 2,
    "route": "/my-resume-angular/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/my-resume-angular",
    "route": "/my-resume-angular/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 745, hash: 'fbd3f5dcb093fe84ae7cd72c6118c023b5383a4702b5a0ae839042a0c6c00da6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1002, hash: 'c93e46a7db209abbb265c478341872995e7c0cd0a51704f2db718235a08e45f4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'hobbies/index.html': {size: 3174, hash: '0c9e8b6348d111afe5346bfb3dc20da8023ace3b50662dd812c81c5f2ad9e0f0', text: () => import('./assets-chunks/hobbies_index_html.mjs').then(m => m.default)},
    'index.html': {size: 3033, hash: 'acececa027590b305b659263f784b3602177b4ef4976474636b7a373a3bf560b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 3268, hash: '48a0b52bb75c1d5b682d564bb10f63cb30022901acab1dd48927aba3939f5127', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-ZD265ECN.css': {size: 690, hash: 'bPQMFkHOKuw', text: () => import('./assets-chunks/styles-ZD265ECN_css.mjs').then(m => m.default)}
  },
};
