import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { ArrowRight, Leaf, Users, Target, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@assets/generated_images/Tamil_Nadu_forest_hero_7bfbec42.png";
import volunteerImage from "@assets/generated_images/Volunteers_planting_trees_together_4daa1704.png";
import restoredImage from "@assets/generated_images/Restored_wetland_after_restoration_56c8fbd6.png";
import workshopImage from "@assets/generated_images/Environmental_awareness_workshop_event_5a3fb9d1.png";

function AnimatedCounter({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = Date.now();
          const animate = () => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / duration, 1);
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutQuart * end));
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          animate();
        }
      },
      { threshold: 0.3 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <div ref={countRef}>
      <span className="font-numbers font-bold text-4xl md:text-5xl lg:text-6xl text-primary">
        {count.toLocaleString()}{suffix}
      </span>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center">
          <h1
            data-testid="text-hero-title"
            className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight"
          >
            Restoring Nature,<br />Reviving Life
          </h1>
          <p
            data-testid="text-hero-subtitle"
            className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Join us in transforming Tamil Nadu through community-driven ecological restoration
            and sustainable environmental conservation
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/projects">
              <Button
                size="lg"
                data-testid="button-explore-projects"
                className="text-base md:text-lg px-8 py-6 font-semibold"
              >
                Explore Our Projects
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/get-involved">
              <Button
                size="lg"
                variant="outline"
                data-testid="button-get-involved-hero"
                className="text-base md:text-lg px-8 py-6 font-semibold bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
              >
                Get Involved
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={volunteerImage}
                alt="Volunteers working together on restoration projects"
                className="rounded-lg shadow-lg w-full aspect-[4/3] object-cover"
              />
            </div>
            <div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                TERM is dedicated to restoring and protecting Tamil Nadu's diverse ecosystems
                through scientific research, community engagement, and sustainable practices.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-lg p-2 flex-shrink-0">
                    <Droplets className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">
                      Water Restoration
                    </h3>
                    <p className="text-muted-foreground">
                      Reviving rivers, lakes, and wetlands across Tamil Nadu
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-lg p-2 flex-shrink-0">
                    <Leaf className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">
                      Afforestation
                    </h3>
                    <p className="text-muted-foreground">
                      Planting native species to restore degraded forests
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-lg p-2 flex-shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">
                      Community Engagement
                    </h3>
                    <p className="text-muted-foreground">
                      Empowering local communities to protect their environment
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-chart-2/5 to-primary/5">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
              Our Impact
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Measurable results from our dedicated restoration efforts across Tamil Nadu
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <Card className="text-center hover-elevate transition-transform">
              <CardContent className="p-6 md:p-8">
                <Target className="w-10 h-10 md:w-12 md:h-12 text-primary mx-auto mb-4" />
                <AnimatedCounter end={10000} suffix="+" />
                <p className="text-sm md:text-base text-muted-foreground mt-2 font-sans">
                  Trees Planted
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover-elevate transition-transform">
              <CardContent className="p-6 md:p-8">
                <Users className="w-10 h-10 md:w-12 md:h-12 text-primary mx-auto mb-4" />
                <AnimatedCounter end={1500} suffix="+" />
                <p className="text-sm md:text-base text-muted-foreground mt-2 font-sans">
                  Volunteers
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover-elevate transition-transform">
              <CardContent className="p-6 md:p-8">
                <Leaf className="w-10 h-10 md:w-12 md:h-12 text-primary mx-auto mb-4" />
                <AnimatedCounter end={25} suffix="+" />
                <p className="text-sm md:text-base text-muted-foreground mt-2 font-sans">
                  Projects Completed
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover-elevate transition-transform">
              <CardContent className="p-6 md:p-8">
                <Droplets className="w-10 h-10 md:w-12 md:h-12 text-primary mx-auto mb-4" />
                <AnimatedCounter end={50} suffix="+" />
                <p className="text-sm md:text-base text-muted-foreground mt-2 font-sans">
                  Water Bodies Restored
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transforming landscapes and communities through restoration
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover-elevate transition-transform">
              <img
                src={restoredImage}
                alt="Cooum River Restoration"
                className="w-full aspect-[4/3] object-cover"
              />
              <CardContent className="p-6">
                <div className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  River Restoration
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                  Cooum River Revival
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  Comprehensive restoration of the Cooum River ecosystem, improving water quality
                  and biodiversity in Chennai.
                </p>
                <Link href="/projects/cooum-river">
                  <Button
                    variant="outline"
                    data-testid="button-project-cooum"
                    className="w-full"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover-elevate transition-transform">
              <img
                src={volunteerImage}
                alt="Kodaikanal Forest Conservation"
                className="w-full aspect-[4/3] object-cover"
              />
              <CardContent className="p-6">
                <div className="inline-block bg-chart-1/10 text-chart-1 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  Afforestation
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                  Kodaikanal Forest Conservation
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  Protecting and expanding native shola forests through community-led conservation
                  efforts.
                </p>
                <Link href="/projects/kodaikanal-forest">
                  <Button
                    variant="outline"
                    data-testid="button-project-kodaikanal"
                    className="w-full"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover-elevate transition-transform">
              <img
                src={workshopImage}
                alt="Point Calimere Sanctuary"
                className="w-full aspect-[4/3] object-cover"
              />
              <CardContent className="p-6">
                <div className="inline-block bg-chart-4/10 text-chart-4 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  Biodiversity
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                  Point Calimere Sanctuary
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  Protecting critical wetland habitat for migratory birds and coastal ecosystems.
                </p>
                <Link href="/projects/point-calimere">
                  <Button
                    variant="outline"
                    data-testid="button-project-calimere"
                    className="w-full"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Link href="/projects">
              <Button
                size="lg"
                variant="outline"
                data-testid="button-view-all-projects"
              >
                View All Projects
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
            Join Our Mission
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed">
            Be part of Tamil Nadu's ecological transformation. Whether you volunteer, donate, or
            spread awareness, every action counts.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/get-involved">
              <Button
                size="lg"
                variant="secondary"
                data-testid="button-volunteer"
                className="text-base md:text-lg px-8 py-6 font-semibold"
              >
                Become a Volunteer
              </Button>
            </Link>
            <Link href="/get-involved#donate">
              <Button
                size="lg"
                variant="outline"
                data-testid="button-donate"
                className="text-base md:text-lg px-8 py-6 font-semibold border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                Support Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
