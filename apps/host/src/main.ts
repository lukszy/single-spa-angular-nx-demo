import { registerApplication, start } from 'single-spa';

function loadScript(path: string) {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = path;
    script.addEventListener('load', resolve);
    document.head.appendChild(script);
  });
}

registerApplication({
  name: 'microApp',
  app: () =>
    loadScript('http://localhost:4201/main.js').then(() => window['microApp']),
  activeWhen: () => true,
});

registerApplication({
  name: 'microApp1',
  app: () =>
    loadScript('http://localhost:4202/main.js').then(() => window['microApp1']),
  activeWhen: () => true,
});

start();
