// import Card from "@/components/Card";
import Card from "../../../components/card";
import Link from "next/link";

const Notifications = () => {
  return (
    <Card>
      <h1>default notification layout</h1>
      <Link href="/complex-dashboard/archived">archived notifications</Link>
    </Card>
  );
};

export default Notifications;
