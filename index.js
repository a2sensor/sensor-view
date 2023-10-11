import { renderToStringAsync } from "solid-js/web";
import { fetchData } from "./src/fetchData";
import SensorGrid from "./src/components/SensorGrid";
import { language, setLanguage } from './src/store';
import t from './src/translations';
import './styles/styles.css';

// entry point for server render
export default async req => {
  const sensorsData = await fetchData();
  const sensorGrid = await renderToStringAsync(() => <SensorGrid sensors={sensorsData} />);
  return `
    <html lang="es">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="apple-touch-icon" sizes="180x180" href="./images/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="./images/favicon-16x16.png"/>
        <link rel="manifest" href="./images/site.webmanifest"/>
        <link rel="stylesheet" href="bundle.css"/>
        <title>a2sensor - ${t('home.title')}</title>
      </head>
      <body class="bg-gray-100">
        <header class="header bg-black p-4 text-white shadow-md mx-auto">
          <img src="./images/logo-small.png" alt="Logo" class="logo w-40 h-auto"/>
          <div class="flex-grow"></div>
          <h1 class="text-4xl font-bold text-center mb-8">${t('home.title')}</h1>
          <div class="flex-grow"></div>
        </header>
        <main class="container mx-auto mt-8 p-4">
          ${sensorGrid}
        </main>
      </body>
    </html>
  `;
};
