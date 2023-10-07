import { ssr, ssrHydrationKey, escape, createComponent, Suspense, For } from 'solid-js/web';

const _tmpl$ = ["<h1", "><!--#-->", "<!--/-->'s Profile</h1>"],
  _tmpl$2 = ["<p", ">This section could be about you.</p>"],
  _tmpl$3 = ["<ul", ">", "</ul>"],
  _tmpl$4 = ["<span", " class=\"loader\">Loading Info...</span>"],
  _tmpl$5 = ["<li", ">", "</li>"];
const Profile = props => [ssr(_tmpl$, ssrHydrationKey(), escape(props.user?.firstName)), ssr(_tmpl$2, ssrHydrationKey()), createComponent(Suspense, {
  get fallback() {
    return ssr(_tmpl$4, ssrHydrationKey());
  },
  get children() {
    return ssr(_tmpl$3, ssrHydrationKey(), escape(createComponent(For, {
      get each() {
        return props.info;
      },
      children: fact => ssr(_tmpl$5, ssrHydrationKey(), escape(fact))
    })));
  }
})];

export { Profile as default };
