import { renderToStringAsync } from "solid-js/web";
import { fetchData } from "./src/fetchData";
import SensorGrid from "./src/components/SensorGrid";
import './styles/styles.css';

// entry point for server render
export default async req => {
  const sensorsData = await fetchData();
  const html = await renderToStringAsync(() => <SensorGrid sensors={sensorsData} />);
  return `
    <html>
      <head>
        <link rel="stylesheet" href="/styles.css">
      </head>
      <body>
        ${html}
      </body>
    </html>
  `;
};
