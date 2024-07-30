import { data } from "./data";
import DataMap from './DataMap'
export default function Page() {
  return (
    <div>
      <h1>list</h1>
      <DataMap data={data} />
    </div>
  );
}
