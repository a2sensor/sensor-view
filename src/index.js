import { hydrate } from "solid-js/web";
import App from "./components/App";

if (typeof document !== 'undefined') {
  // only run in browser
  hydrate(() => <App />, document);
}
