import { ssr, ssrHydrationKey, escape } from 'solid-js/web';
import { createSignal, onMount, onCleanup } from 'solid-js';

const _tmpl$ = ["<h1", ">Welcome to this Simple Routing Example</h1>"],
  _tmpl$2 = ["<p", ">Click the links in the Navigation above to load different routes.</p>"],
  _tmpl$3 = ["<span", ">", "</span>"];
const Home = () => {
  const [s, set] = createSignal(0);
  onMount(() => {
    const t = setInterval(() => set(s() + 1), 100);
    onCleanup(() => clearInterval(t));
  });
  return [ssr(_tmpl$, ssrHydrationKey()), ssr(_tmpl$2, ssrHydrationKey()), ssr(_tmpl$3, ssrHydrationKey(), escape(s()))];
};

export { Home as default };
