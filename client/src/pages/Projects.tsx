import { useState } from "react";
import { Link } from "wouter";
import { MapPin, Calendar, ArrowRight, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import restoredImage from "@assets/generated_images/Restored_wetland_after_restoration_56c8fbd6.png";
import degradedImage from "@assets/generated_images/Degraded_land_before_restoration_6e6aade2.png";
import volunteerImage from "@assets/generated_images/Volunteers_planting_trees_together_4daa1704.png";

type ProjectCategory = "all" | "river" | "afforestation" | "biodiversity" | "waste";
type ProjectStatus = "all" | "ongoing" | "completed";

const projectsData = [
  {
    id: "cooum-river",
    name: "Cooum River Revival",
    location: "Chennai, Tamil Nadu",
    category: "river",
    status: "ongoing",
    year: 2022,
    description: "Comprehensive restoration of the Cooum River ecosystem, improving water quality and biodiversity.",
    image: restoredImage,
  },
  {
    id: "kodaikanal-forest",
    name: "Kodaikanal Forest Conservation",
    location: "Kodaikanal, Tamil Nadu",
    category: "afforestation",
    status: "completed",
    year: 2021,
    description: "Protecting and expanding native shola forests through community-led conservation efforts.",
    image: volunteerImage,
  },
  {
    id: "point-calimere",
    name: "Point Calimere Sanctuary",
    location: "Nagapattinam, Tamil Nadu",
    category: "biodiversity",
    status: "ongoing",
    year: 2023,
    description: "Protecting critical wetland habitat for migratory birds and coastal ecosystems.",
    image: restoredImage,
  },
  {
    id: "vaigai-restoration",
    name: "Vaigai River Restoration",
    location: "Madurai, Tamil Nadu",
    category: "river",
    status: "completed",
    year: 2020,
    description: "Restoring water flow and improving riparian vegetation along the Vaigai River.",
    image: degradedImage,
  },
  {
    id: "urban-forestry",
    name: "Urban Forestry Initiative",
    location: "Coimbatore, Tamil Nadu",
    category: "afforestation",
    status: "ongoing",
    year: 2023,
    description: "Creating green spaces and urban forests to improve air quality and biodiversity in cities.",
    image: volunteerImage,
  },
  {
    id: "waste-management",
    name: "Sustainable Waste Management",
    location: "Trichy, Tamil Nadu",
    category: "waste",
    status: "completed",
    year: 2022,
    description: "Implementing community-based waste management and composting programs.",
    image: degradedImage,
  },
];

export default function Projects() {
  const [categoryFilter, setCategoryFilter] = useState<ProjectCategory>("all");
  const [statusFilter, setStatusFilter] = useState<ProjectStatus>("all");

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory = categoryFilter === "all" || project.category === categoryFilter;
    const matchesStatus = statusFilter === "all" || project.status === statusFilter;
    return matchesCategory && matchesStatus;
  });

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      river: "bg-chart-2/10 text-chart-2",
      afforestation: "bg-chart-1/10 text-chart-1",
      biodiversity: "bg-chart-4/10 text-chart-4",
      waste: "bg-chart-3/10 text-chart-3",
    };
    return colors[category] || "bg-primary/10 text-primary";
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-chart-2/10 to-primary/10 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h1
            data-testid="text-projects-title"
            className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-4"
          >
            Our Projects
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transforming landscapes and communities across Tamil Nadu through targeted ecological restoration
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-background border-b border-border sticky top-16 z-40 backdrop-blur-md bg-background/95">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start md:items-center justify-between">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Filter className="w-5 h-5" />
              <span className="font-medium">Filter Projects</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <Tabs value={statusFilter} onValueChange={(v) => setStatusFilter(v as ProjectStatus)}>
                <TabsList>
                  <TabsTrigger value="all" data-testid="filter-status-all">All</TabsTrigger>
                  <TabsTrigger value="ongoing" data-testid="filter-status-ongoing">Ongoing</TabsTrigger>
                  <TabsTrigger value="completed" data-testid="filter-status-completed">Completed</TabsTrigger>
                </TabsList>
              </Tabs>

              <Tabs value={categoryFilter} onValueChange={(v) => setCategoryFilter(v as ProjectCategory)}>
                <TabsList>
                  <TabsTrigger value="all" data-testid="filter-category-all">All</TabsTrigger>
                  <TabsTrigger value="river" data-testid="filter-category-river">Water</TabsTrigger>
                  <TabsTrigger value="afforestation" data-testid="filter-category-forest">Forest</TabsTrigger>
                  <TabsTrigger value="biodiversity" data-testid="filter-category-bio">Biodiversity</TabsTrigger>
                  <TabsTrigger value="waste" data-testid="filter-category-waste">Waste</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 md:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">
                No projects found matching your filters.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <p className="text-muted-foreground">
                  Showing <span className="font-semibold text-foreground">{filteredProjects.length}</span> project{filteredProjects.length !== 1 ? 's' : ''}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <Card
                    key={project.id}
                    data-testid={`card-project-${project.id}`}
                    className="overflow-hidden hover-elevate transition-all"
                  >
                    <div className="relative">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full aspect-[4/3] object-cover"
                      />
                      <div className="absolute top-3 right-3">
                        <span
                          className={`text-xs font-semibold px-3 py-1 rounded-full ${
                            project.status === "completed"
                              ? "bg-green-500/90 text-white"
                              : "bg-yellow-500/90 text-white"
                          }`}
                        >
                          {project.status === "completed" ? "Completed" : "Ongoing"}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className={`inline-block ${getCategoryColor(project.category)} text-xs font-semibold px-3 py-1 rounded-full mb-3 capitalize`}>
                        {project.category}
                      </div>
                      <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                        {project.name}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{project.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{project.year}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {project.description}
                      </p>
                      <Link href={`/projects/${project.id}`}>
                        <Button
                          variant="outline"
                          data-testid={`button-view-${project.id}`}
                          className="w-full"
                        >
                          View Details
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
