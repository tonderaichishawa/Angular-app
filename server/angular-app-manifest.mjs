
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  assets: {
    'index.csr.html': {size: 843, hash: '39446c3a9ad22d5b332bd55f82158bc37e8d994d73238c00a9b8915322d90a3d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1064, hash: 'db5d50435bb1c8ce84223cb78e7724f6e41233c272fdf460688ce0d95cf21449', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 12002, hash: '18cb9558b140d02c32358dec8186c4bc33286a0de4f33deaef9ea71b7e9bc764', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-BTZTNMLM.css': {size: 167, hash: 'ecm6IGyyNt0', text: () => import('./assets-chunks/styles-BTZTNMLM_css.mjs').then(m => m.default)}
  },
};
