import FeatureCard from "@/components/common/featureCard";
import { Button } from "@/components/ui/button";
import {
  CheckCircleIcon,
  UserIcon,
  CalendarIcon,
  BellIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const features = [
  {
    icon: <CheckCircleIcon className="h-8 w-8 text-green-500 mb-2" />,
    title: "Smart Tasks",
    description:
      "Create, organize, and track your tasks with advanced filtering and sorting options.",
  },
  {
    icon: <UserIcon className="h-8 w-8 text-blue-500 mb-2" />,
    title: "Team Projects",
    description:
      "Collaborate with your team on shared projects and track progress together.",
  },
  {
    icon: <CalendarIcon className="h-8 w-8 text-purple-500 mb-2" />,
    title: "Due Dates",
    description:
      "Set deadlines, get reminders, and never miss an important task again.",
  },
  {
    icon: <BellIcon className="h-8 w-8 text-orange-500 mb-2" />,
    title: "Notifications",
    description:
      "Stay updated with real-time notifications and email reminders.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Advanced Todo App
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Organize your tasks, collaborate with teams, and boost your
            productivity with our powerful todo management system.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/login">Get Started</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/register">Sign Up</Link>
            </Button>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
