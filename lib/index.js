import { isServer, createComponent, ssr, ssrHydrationKey, escape, NoHydration, HydrationScript, Suspense, Switch, Match, renderToStringAsync } from 'solid-js/web';
import { createContext, createSignal, useTransition, useContext, lazy, createResource, ErrorBoundary } from 'solid-js';

const _tmpl$$1 = ["<a", " class=\"link\" href=\"", "\">", "</a>"];

// Super simplistic pushstate router that matches on absolute paths
const RouterContext = createContext();
function RouteHOC(Comp) {
  return (props = {}) => {
    const [location, setLocation] = createSignal((props.url ? props.url : window.location.pathname).slice(1) || "index"),
      matches = match => match === (location() || "index"),
      [pending, start] = useTransition();
    !isServer && (window.onpopstate = () => setLocation(window.location.pathname.slice(1)));
    return createComponent(RouterContext.Provider, {
      value: [location, pending, {
        setLocation: v => start(() => setLocation(v)),
        matches
      }],
      get children() {
        return createComponent(Comp, {});
      }
    });
  };
}
const Link = props => {
  useContext(RouterContext);
  return ssr(_tmpl$$1, ssrHydrationKey(), `/${escape(props.path, true)}`, escape(props.children));
};

const Profile = lazy(() => import('./Profile-ea76d751.js'));

// this component lazy loads data and code in parallel
var Profile$1 = (() => {
  const [user] = createResource(() => {
      // simulate data loading
      console.log("LOAD USER");
      return new Promise(res => {
        setTimeout(() => res({
          firstName: "Jon",
          lastName: "Snow"
        }), 400);
      });
    }),
    [info] = createResource(user, () => {
      // simulate cascading data loading
      console.log("LOAD INFO");
      return new Promise(res => {
        setTimeout(() => res(["Something Interesting", "Something else you might care about", "Or maybe not"]), 400);
      });
    }, {
      initialValue: []
    });
  return createComponent(Profile, {
    get user() {
      return user();
    },
    get info() {
      return info();
    }
  });
});

const _tmpl$ = ["<head><title>\uD83D\uDD25 Solid SSR \uD83D\uDD25</title><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><link rel=\"stylesheet\" href=\"/styles.css\">", "</head>"],
  _tmpl$2 = ["<html", " lang=\"en\">", "<body><div id=\"app\"><ul class=\"inline\"><li class=\"", "\">", "</li><li class=\"", "\">", "</li><li class=\"", "\">", "</li></ul><div class=\"", "\">", "</div></div></body><script type=\"module\" src=\"/js/index.js\" async></script></html>"],
  _tmpl$3 = ["<h2", ">Error: <!--#-->", "<!--/--></h2>"],
  _tmpl$4 = ["<button", ">Reset</button>"],
  _tmpl$5 = ["<span", " class=\"loader\" style=\"opacity:0\">Loading...</span>"];
const Home = lazy(() => import('./Home-fca55e66.js'));
const Settings = lazy(() => import('./Settings-76a60225.js'));
const App = RouteHOC(() => {
  const [, pending, {
    matches
  }] = useContext(RouterContext);
  return ssr(_tmpl$2, ssrHydrationKey(), createComponent(NoHydration, {
    get children() {
      return ssr(_tmpl$, escape(createComponent(HydrationScript, {})));
    }
  }), matches("index") ? "selected" : "", escape(createComponent(Link, {
    path: "",
    children: "Home"
  })), matches("profile") ? "selected" : "", escape(createComponent(Link, {
    path: "profile",
    children: "Profile"
  })), matches("settings") ? "selected" : "", escape(createComponent(Link, {
    path: "settings",
    children: "Settings"
  })), `tab ${pending() ? "pending" : ""}`, escape(createComponent(ErrorBoundary, {
    fallback: (err, reset) => {
      return [ssr(_tmpl$3, ssrHydrationKey(), escape(err.message)), ssr(_tmpl$4, ssrHydrationKey())];
    },
    get children() {
      return createComponent(Suspense, {
        get fallback() {
          return ssr(_tmpl$5, ssrHydrationKey());
        },
        get children() {
          return createComponent(Switch, {
            get children() {
              return [createComponent(Match, {
                get when() {
                  return matches("index");
                },
                get children() {
                  return createComponent(Home, {});
                }
              }), createComponent(Match, {
                get when() {
                  return matches("profile");
                },
                get children() {
                  return createComponent(Profile$1, {});
                }
              }), createComponent(Match, {
                get when() {
                  return matches("settings");
                },
                get children() {
                  return createComponent(Settings, {});
                }
              })];
            }
          });
        }
      });
    }
  })));
});

// entry point for server render
var index = (async req => {
  return await renderToStringAsync(() => createComponent(App, {
    get url() {
      return req.url;
    }
  }));
});

export { index as default };
