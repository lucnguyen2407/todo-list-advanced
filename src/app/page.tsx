import FeatureCard from "@/components/common/featureCard";
import { Button } from "@/components/ui/button";
import { features } from "@/const";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-[#1F1F1F] dark:to-[#2D2D2D]">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Advanced Todo App
          </h1>
          <p className="text-xl text-gray-600 dark:text-[#9B9B9B] mb-8 max-w-2xl mx-auto">
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
