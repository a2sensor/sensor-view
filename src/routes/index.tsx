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
    <main class="w-full p-1 bg-gradient-to-br from-white to-green-900">
      <SensorGrid sensors={sensorsData} />
    </main>
  );
}
