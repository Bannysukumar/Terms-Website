import { CheckCircle2, Target, Eye, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import volunteerImage from "@assets/generated_images/Volunteers_planting_trees_together_4daa1704.png";

export default function About() {
  const timeline = [
    { year: 2010, event: "TERM Council founded" },
    { year: 2012, event: "First major river restoration project" },
    { year: 2015, event: "10,000 trees planted milestone" },
    { year: 2018, event: "Partnership with 50+ communities" },
    { year: 2020, event: "Launch of biodiversity conservation program" },
    { year: 2023, event: "25 completed restoration projects" },
  ];

  const values = [
    {
      icon: Target,
      title: "Environmental Stewardship",
      description: "We take responsibility for protecting and restoring Tamil Nadu's natural heritage for future generations.",
    },
    {
      icon: Heart,
      title: "Community Engagement",
      description: "We believe in empowering local communities to be active partners in conservation efforts.",
    },
    {
      icon: CheckCircle2,
      title: "Sustainability",
      description: "We implement long-term solutions that balance ecological health with community needs.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-[40vh] md:min-h-[50vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${volunteerImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h1
            data-testid="text-about-title"
            className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4"
          >
            About TERM
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            Committed to restoring Tamil Nadu's ecosystems since 2010
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 rounded-lg p-3">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground">
                    Our Mission
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To restore and protect Tamil Nadu's diverse ecosystems through scientific
                  research, community collaboration, and sustainable practices that ensure
                  environmental health for present and future generations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-chart-2">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-chart-2/10 rounded-lg p-3">
                    <Eye className="w-6 h-6 text-chart-2" />
                  </div>
                  <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground">
                    Our Vision
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A thriving Tamil Nadu where natural ecosystems flourish, communities prosper
                  in harmony with nature, and ecological restoration is a way of life that
                  inspires positive change across India.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* History & Background */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground text-center mb-6">
            Our Story
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The Tamil Nadu Ecological Restoration Council (TERM) was established in 2010 in
              response to the growing environmental challenges facing our state. Founded by a
              group of passionate environmentalists, scientists, and community leaders, TERM has
              grown into a leading force for ecological restoration in South India.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Headquartered in Kancheepuram, our council works across Tamil Nadu, partnering with
              local communities, government agencies, and conservation organizations to restore
              degraded ecosystems, protect biodiversity, and promote sustainable practices.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              What makes TERM unique is our community-centric approach. We believe that lasting
              environmental change comes from empowering local communities to be stewards of their
              own natural resources. Through education, capacity building, and collaborative
              projects, we've transformed not just landscapes, but lives.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground text-center mb-12">
            Our Journey
          </h2>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20" />
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-8`}
                >
                  <div
                    className={`flex-1 ${
                      index % 2 === 0 ? "md:text-right" : "md:text-left"
                    } text-left`}
                  >
                    <Card className="inline-block hover-elevate">
                      <CardContent className="p-6">
                        <p className="font-numbers font-bold text-2xl text-primary mb-2">
                          {item.year}
                        </p>
                        <p className="text-foreground font-medium">{item.event}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-4 md:left-1/2 -ml-2 w-4 h-4 bg-primary rounded-full border-4 border-background" />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="hover-elevate">
                  <CardContent className="p-8 text-center">
                    <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Visit Our Office
          </h2>
          <p className="text-lg text-muted-foreground mb-2">
            <strong>Tamil Nadu Ecological Restoration Council</strong>
          </p>
          <p className="text-muted-foreground">
            No.6B, Rajam Pettai Street<br />
            Kancheepuram, Tamil Nadu, India - 631501
          </p>
        </div>
      </section>
    </div>
  );
}
