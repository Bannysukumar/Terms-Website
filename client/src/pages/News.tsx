import { Calendar, Tag, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import volunteerImage from "@assets/generated_images/Volunteers_planting_trees_together_4daa1704.png";
import workshopImage from "@assets/generated_images/Environmental_awareness_workshop_event_5a3fb9d1.png";
import restoredImage from "@assets/generated_images/Restored_wetland_after_restoration_56c8fbd6.png";

type NewsCategory = "all" | "news" | "event" | "press";

const newsData = [
  {
    id: "1",
    title: "TERM Launches Largest River Restoration Initiative",
    date: "March 15, 2024",
    category: "news",
    description: "In partnership with Tamil Nadu government, TERM begins comprehensive restoration of five major river systems affecting over 100,000 residents.",
    image: restoredImage,
    isUpcoming: false,
  },
  {
    id: "2",
    title: "Community Tree Plantation Drive - Kodaikanal",
    date: "April 20, 2024",
    category: "event",
    description: "Join us for a massive tree plantation drive in Kodaikanal. Target: 5,000 native saplings. Open to all volunteers and families.",
    image: volunteerImage,
    isUpcoming: true,
  },
  {
    id: "3",
    title: "TERM Wins National Environmental Excellence Award",
    date: "February 28, 2024",
    category: "press",
    description: "Recognized for outstanding contribution to ecological restoration at the National Environment Summit in New Delhi.",
    image: workshopImage,
    isUpcoming: false,
  },
  {
    id: "4",
    title: "Water Conservation Workshop for Farmers",
    date: "April 10, 2024",
    category: "event",
    description: "Free workshop on sustainable water management practices for farmers in Madurai region. Registration open.",
    image: workshopImage,
    isUpcoming: true,
  },
  {
    id: "5",
    title: "10,000 Trees Planted Milestone Achieved",
    date: "January 15, 2024",
    category: "news",
    description: "TERM celebrates planting its 10,000th tree through community-driven afforestation programs across Tamil Nadu.",
    image: volunteerImage,
    isUpcoming: false,
  },
  {
    id: "6",
    title: "Partnership Announcement: Tech for Trees Initiative",
    date: "March 1, 2024",
    category: "press",
    description: "TERM partners with leading tech companies for innovative tree tracking and forest monitoring solutions.",
    image: workshopImage,
    isUpcoming: false,
  },
  {
    id: "7",
    title: "Coastal Cleanup Drive - Marina Beach",
    date: "May 5, 2024",
    category: "event",
    description: "World Environment Day special cleanup event at Marina Beach, Chennai. Volunteers welcome!",
    image: volunteerImage,
    isUpcoming: true,
  },
  {
    id: "8",
    title: "Research Publication: Biodiversity Impact Study",
    date: "February 10, 2024",
    category: "news",
    description: "TERM publishes groundbreaking research on biodiversity improvements in restored wetland ecosystems.",
    image: restoredImage,
    isUpcoming: false,
  },
];

export default function News() {
  const [categoryFilter, setCategoryFilter] = useState<NewsCategory>("all");

  const filteredNews = categoryFilter === "all"
    ? newsData
    : newsData.filter(item => item.category === categoryFilter);

  const upcomingEvents = filteredNews.filter(item => item.isUpcoming);
  const pastNews = filteredNews.filter(item => !item.isUpcoming);

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      news: "bg-chart-1/10 text-chart-1",
      event: "bg-chart-2/10 text-chart-2",
      press: "bg-chart-3/10 text-chart-3",
    };
    return colors[category] || "bg-primary/10 text-primary";
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-chart-2/10 to-primary/10 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h1
            data-testid="text-news-title"
            className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-4"
          >
            News & Events
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stay updated with our latest activities, events, and environmental initiatives
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background border-b border-border sticky top-16 z-40 backdrop-blur-md bg-background/95">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-center">
          <Tabs value={categoryFilter} onValueChange={(v) => setCategoryFilter(v as NewsCategory)}>
            <TabsList>
              <TabsTrigger value="all" data-testid="filter-category-all">All</TabsTrigger>
              <TabsTrigger value="news" data-testid="filter-category-news">News</TabsTrigger>
              <TabsTrigger value="event" data-testid="filter-category-events">Events</TabsTrigger>
              <TabsTrigger value="press" data-testid="filter-category-press">Press Releases</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Upcoming Events */}
      {upcomingEvents.length > 0 && (
        <section className="py-12 md:py-16 bg-primary/5">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-8">
              Upcoming Events
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((item) => (
                <Card
                  key={item.id}
                  data-testid={`card-upcoming-${item.id}`}
                  className="overflow-hidden hover-elevate transition-all border-l-4 border-l-primary"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full aspect-[16/9] object-cover"
                  />
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <div className={`inline-block ${getCategoryColor(item.category)} text-xs font-semibold px-3 py-1 rounded-full capitalize`}>
                        {item.category}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{item.date}</span>
                      </div>
                    </div>
                    <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {item.description}
                    </p>
                    <Button variant="outline" data-testid={`button-view-${item.id}`} className="w-full">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Recent News */}
      <section className="py-12 md:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-8">
            {upcomingEvents.length > 0 ? "Recent News & Past Events" : "Latest Updates"}
          </h2>
          {pastNews.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">
                No news found in this category.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastNews.map((item) => (
                <Card
                  key={item.id}
                  data-testid={`card-news-${item.id}`}
                  className="overflow-hidden hover-elevate transition-all"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full aspect-[16/9] object-cover"
                  />
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <div className={`inline-block ${getCategoryColor(item.category)} text-xs font-semibold px-3 py-1 rounded-full capitalize`}>
                        {item.category}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{item.date}</span>
                      </div>
                    </div>
                    <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground line-clamp-3">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Never Miss an Update
          </h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            Subscribe to our newsletter to receive news, event announcements, and project updates.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              data-testid="input-newsletter-email"
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button
              data-testid="button-subscribe-newsletter"
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
