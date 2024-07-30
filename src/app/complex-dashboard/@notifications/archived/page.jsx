// import Card from "@/components/Card";
import Card from "../../../../components/card";
import Link from "next/link";

const Notifications = () => {
  return (
    <Card>
      <h1>archived notification layout</h1>
      <Link href="/complex-dashboard">default notifications</Link>
    </Card>
  );
};

export default Notifications;
