// @refresh reload
import { Suspense } from "solid-js";
import {
  useLocation,
  A,
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
  const location = useLocation();
  const active = (path: string) =>
    path == location.pathname
      ? "border-sky-600"
      : "border-transparent hover:border-sky-600";
  return (
    <Html lang="en">
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
            <header class="flex items-center bg-black p-4 text-white shadow-md mx-auto">
              <img src="./images/logo-small.png" alt="Logo" class="w-40 h-auto mr-4"/>
              <h1 class="text-4xl font-bold text-center flex-grow">{t('home.title')}</h1>
              <img src="./images/logo-small.png" alt="Spacer Logo" class="w-40 h-auto opacity-0"/>
            </header>
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
