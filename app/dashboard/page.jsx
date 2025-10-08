// app/dashboard/page.jsx
import Greeting from "@/components/dashboard/Greeting";
import Appointments from "@/components/dashboard/Appointments";
import RecommendedServices from "@/components/dashboard/RecommendedServices";
import ProgressReport from "@/components/dashboard/ProgressReport";
import QuickActions from "@/components/dashboard/QuickActions";
import Notifications from "@/components/dashboard/Notifications";
import MotivationalQuote from "@/components/dashboard/MotivationalQuote";

export default function DashboardPage() {
  return (
    <div className="p-6 md:p-10 min-h-screen">
      <Greeting />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Appointments />
        <RecommendedServices />
        <ProgressReport />
      </div>
      <QuickActions />
      <Notifications />
      <MotivationalQuote />
    </div>
  );
}
