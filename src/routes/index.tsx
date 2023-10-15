import SensorGrid from "../components/SensorGrid";
import { fetchDataOnline } from "../fetchDataOnline";

let sensorsData: any[];

const isServer = typeof window === 'undefined';
if (isServer) {
  import('../fetchDataOffline').then(module => {
    sensorsData = module.default.fetchDataOffline();
  })
} else {
  sensorsData = await fetchDataOnline();
}

export default function Home() {
  return (
    <main class="container mx-auto mt-8 p-0">
      <SensorGrid sensors={sensorsData} />
    </main>
  );
}
