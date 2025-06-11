import {
  CheckCircleIcon,
  UserIcon,
  CalendarIcon,
  BellIcon,
} from "@heroicons/react/24/outline";

export const features = [
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
