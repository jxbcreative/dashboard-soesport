import Dashboard from "../components/Dashboard";
import Layouts from "../layouts";

export default function Home() {
  return (
    <Layouts pageProps="Dashboard">
      <Dashboard />
    </Layouts>
  );
}
