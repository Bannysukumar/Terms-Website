import { Download, FileText, BookOpen, FileBarChart, Newspaper } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

type ResourceType = "all" | "annual-report" | "research" | "guideline" | "educational";

const resourcesData = [
  {
    id: "1",
    title: "Annual Report 2023",
    type: "annual-report",
    year: 2023,
    description: "Comprehensive overview of our restoration activities, impact metrics, and financial statements for 2023.",
    fileUrl: "#",
  },
  {
    id: "2",
    title: "River Restoration Best Practices Guide",
    type: "guideline",
    year: 2023,
    description: "Technical guidelines for community-led river restoration projects in Tamil Nadu.",
    fileUrl: "#",
  },
  {
    id: "3",
    title: "Biodiversity Assessment: Point Calimere",
    type: "research",
    year: 2022,
    description: "Research paper on biodiversity changes following wetland restoration interventions.",
    fileUrl: "#",
  },
  {
    id: "4",
    title: "Native Tree Species of Tamil Nadu",
    type: "educational",
    year: 2023,
    description: "Illustrated guide to native tree species suitable for afforestation projects.",
    fileUrl: "#",
  },
  {
    id: "5",
    title: "Annual Report 2022",
    type: "annual-report",
    year: 2022,
    description: "Complete documentation of projects, partnerships, and achievements from 2022.",
    fileUrl: "#",
  },
  {
    id: "6",
    title: "Climate Adaptation Strategies",
    type: "research",
    year: 2023,
    description: "Policy brief on ecosystem-based climate adaptation in Tamil Nadu.",
    fileUrl: "#",
  },
  {
    id: "7",
    title: "Community Composting Manual",
    type: "educational",
    year: 2022,
    description: "Step-by-step guide for setting up community composting systems.",
    fileUrl: "#",
  },
  {
    id: "8",
    title: "Wetland Restoration Protocol",
    type: "guideline",
    year: 2021,
    description: "Standard operating procedures for wetland ecosystem restoration.",
    fileUrl: "#",
  },
];

export default function Resources() {
  const [typeFilter, setTypeFilter] = useState<ResourceType>("all");

  const filteredResources = typeFilter === "all"
    ? resourcesData
    : resourcesData.filter(resource => resource.type === typeFilter);

  const getTypeIcon = (type: string) => {
    const icons: Record<string, any> = {
      "annual-report": FileBarChart,
      research: BookOpen,
      guideline: FileText,
      educational: Newspaper,
    };
    return icons[type] || FileText;
  };

  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      "annual-report": "bg-chart-2/10 text-chart-2",
      research: "bg-chart-1/10 text-chart-1",
      guideline: "bg-chart-4/10 text-chart-4",
      educational: "bg-chart-3/10 text-chart-3",
    };
    return colors[type] || "bg-primary/10 text-primary";
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-chart-2/10 to-primary/10 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h1
            data-testid="text-resources-title"
            className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-4"
          >
            Resources
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Access our reports, research papers, guidelines, and educational materials
          </p>
        </div>
      </section>

      {/* Type Filter */}
      <section className="py-8 bg-background border-b border-border sticky top-16 z-40 backdrop-blur-md bg-background/95">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-center">
          <Tabs value={typeFilter} onValueChange={(v) => setTypeFilter(v as ResourceType)}>
            <TabsList>
              <TabsTrigger value="all" data-testid="filter-type-all">All Resources</TabsTrigger>
              <TabsTrigger value="annual-report" data-testid="filter-type-reports">Annual Reports</TabsTrigger>
              <TabsTrigger value="research" data-testid="filter-type-research">Research</TabsTrigger>
              <TabsTrigger value="guideline" data-testid="filter-type-guidelines">Guidelines</TabsTrigger>
              <TabsTrigger value="educational" data-testid="filter-type-educational">Educational</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-12 md:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {filteredResources.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">
                No resources found in this category.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <p className="text-muted-foreground">
                  Showing <span className="font-semibold text-foreground">{filteredResources.length}</span> resource{filteredResources.length !== 1 ? 's' : ''}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResources.map((resource) => {
                  const Icon = getTypeIcon(resource.type);
                  return (
                    <Card
                      key={resource.id}
                      data-testid={`card-resource-${resource.id}`}
                      className="hover-elevate transition-all"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4 mb-4">
                          <div className={`rounded-lg p-3 flex-shrink-0 ${getTypeColor(resource.type)}`}>
                            <Icon className="w-6 h-6" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-heading font-semibold text-lg text-foreground mb-1">
                              {resource.title}
                            </h3>
                            {resource.year && (
                              <p className="text-sm text-muted-foreground">
                                {resource.year}
                              </p>
                            )}
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {resource.description}
                        </p>
                        <Button
                          variant="outline"
                          data-testid={`button-download-${resource.id}`}
                          className="w-full"
                        >
                          <Download className="mr-2 w-4 h-4" />
                          Download PDF
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            Subscribe to our newsletter to receive the latest reports, research findings, and
            educational materials directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              data-testid="input-newsletter-email"
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button
              data-testid="button-subscribe"
              className="w-full sm:w-auto whitespace-nowrap font-semibold px-6"
              size="lg"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
