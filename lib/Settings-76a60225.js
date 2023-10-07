import { ssr, ssrHydrationKey, ssrAttribute, escape } from 'solid-js/web';
import { createSignal, createUniqueId } from 'solid-js';

const _tmpl$ = ["<h1", ">Settings</h1>"],
  _tmpl$2 = ["<p", ">All that configuration you never really ever want to look at.</p>"],
  _tmpl$3 = ["<label", ">Write:</label>"],
  _tmpl$4 = ["<input", " type=\"text\"", ">"],
  _tmpl$5 = ["<p", ">", "</p>"];
const Settings = () => {
  const [text, setText] = createSignal("Hi");
  const id = createUniqueId();
  return [ssr(_tmpl$, ssrHydrationKey()), ssr(_tmpl$2, ssrHydrationKey()), ssr(_tmpl$3, ssrHydrationKey() + ssrAttribute("for", escape(id, true), false)), ssr(_tmpl$4, ssrHydrationKey(), ssrAttribute("id", escape(id, true), false) + ssrAttribute("value", escape(text(), true), false)), ssr(_tmpl$5, ssrHydrationKey(), escape(text()))];
};

export { Settings as default };
