// @refresh reload
import { Suspense } from "solid-js";
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "./root.css";
import t from './translations';

export default function Root() {
  return (
    <Html lang="es">
      <Head>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="./images/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="./images/favicon-16x16.png"/>
        <link rel="manifest" href="./images/site.webmanifest"/>
        <Title>{t('home.title')}</Title>
      </Head>
      <Body class="bg-gray-100">
        <Suspense>
          <ErrorBoundary>
            <header class="flex items-center bg-black p-2 text-white">
              <img src="./images/logo-small.png" alt="Logo" class="w-20 h-auto"/>
              <h1 class="text-xl font-bold text-center flex-grow">{t('home.title')}</h1>
              <img src="./images/logo-small.png" alt="Spacer Logo" class="w-20 h-auto opacity-0"/>
            </header>
            <Routes>
              <FileRoutes />
            </Routes>
            <footer class="bg-green-900 text-white p-1">
              <div class="container mx-auto">
                <h3 class="text-sm font-bold mb-4">{t('references.header')}</h3>
                <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <li class="flex items-center text-xs">
                    <img src="./images/unknown.png" class="w-5 h-5 mr-2 bg-white p-1" alt="{t('reference.unknown.alt')}"/>
                    <a href="https://www.flaticon.com/free-icons/disconnected" title="{t('reference.unknown.alt')}">{t('reference.unknown')}</a>
                  </li>
                  <li class="flex items-center text-xs">
                    <img src="./images/stuck.png" class="w-5 h-5 mr-2 bg-white p-1" alt="{t('reference.stuck.alt')}"/>
                    <a href="https://www.flaticon.com/free-icons/accident" title="{t('reference.stuck.alt')}">{t('reference.stuck')}</a>
                  </li>
                  <li class="flex items-center text-xs">
                    <img src="./images/empty.png" class="w-5 h-5 mr-2 bg-white p-1" alt={t('reference.empty.alt')}/>
                    <a href="https://www.flaticon.com/free-icons/empty-set" title="{t('reference.empty.alt')}">{t('reference.empty')}</a>
                  </li>
                  <li class="flex items-center text-xs">
                    <img src="./images/ok.png" class="w-5 h-5 mr-2 bg-white p-1" alt="{t('reference.ok.alt')}"/>
                    <a href="https://www.flaticon.com/free-icons/wind" title="{t('reference.ok.alt')}">{t('reference.ok')}</a>
                  </li>
                </ul>
              </div>
            </footer>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
