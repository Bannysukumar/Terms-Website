import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import restoredImage from "@assets/generated_images/Restored_wetland_after_restoration_56c8fbd6.png";
import degradedImage from "@assets/generated_images/Degraded_land_before_restoration_6e6aade2.png";
import volunteerImage from "@assets/generated_images/Volunteers_planting_trees_together_4daa1704.png";
import workshopImage from "@assets/generated_images/Environmental_awareness_workshop_event_5a3fb9d1.png";

type GalleryCategory = "all" | "events" | "plantation" | "workshops" | "awareness";

const galleryItems = [
  { id: "1", category: "events", image: workshopImage, caption: "Annual Environmental Summit 2023", date: "2023-09" },
  { id: "2", category: "plantation", image: volunteerImage, caption: "Tree Plantation Drive - Kodaikanal", date: "2023-08" },
  { id: "3", category: "workshops", image: workshopImage, caption: "Community Workshop on Composting", date: "2023-07" },
  { id: "4", category: "awareness", image: volunteerImage, caption: "School Awareness Program - Chennai", date: "2023-06" },
  { id: "5", category: "events", image: restoredImage, caption: "River Cleanup Campaign - Cooum", date: "2023-05" },
  { id: "6", category: "plantation", image: volunteerImage, caption: "Urban Forestry - Coimbatore", date: "2023-04" },
  { id: "7", category: "workshops", image: workshopImage, caption: "Sustainable Agriculture Training", date: "2023-03" },
  { id: "8", category: "awareness", image: degradedImage, caption: "Beach Cleanup Drive - Marina", date: "2023-02" },
  { id: "9", category: "events", image: restoredImage, caption: "World Environment Day Celebration", date: "2023-06" },
  { id: "10", category: "plantation", image: volunteerImage, caption: "Native Species Planting - Nilgiris", date: "2023-01" },
  { id: "11", category: "workshops", image: workshopImage, caption: "Water Conservation Workshop", date: "2022-12" },
  { id: "12", category: "awareness", image: volunteerImage, caption: "Corporate CSR Partnership Event", date: "2022-11" },
];

export default function Gallery() {
  const [category, setCategory] = useState<GalleryCategory>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = category === "all"
    ? galleryItems
    : galleryItems.filter(item => item.category === category);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const goToPrevious = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex > 0 ? lightboxIndex - 1 : filteredItems.length - 1);
    }
  };

  const goToNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex < filteredItems.length - 1 ? lightboxIndex + 1 : 0);
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-chart-2/10 to-primary/10 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h1
            data-testid="text-gallery-title"
            className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-4"
          >
            Photo Gallery
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Visual stories of our restoration efforts and community engagement across Tamil Nadu
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-8 bg-background border-b border-border sticky top-16 z-40 backdrop-blur-md bg-background/95">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-center">
          <Tabs value={category} onValueChange={(v) => setCategory(v as GalleryCategory)}>
            <TabsList>
              <TabsTrigger value="all" data-testid="tab-all">All Photos</TabsTrigger>
              <TabsTrigger value="events" data-testid="tab-events">Events</TabsTrigger>
              <TabsTrigger value="plantation" data-testid="tab-plantation">Tree Plantation</TabsTrigger>
              <TabsTrigger value="workshops" data-testid="tab-workshops">Workshops</TabsTrigger>
              <TabsTrigger value="awareness" data-testid="tab-awareness">Awareness Drives</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 md:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                data-testid={`gallery-item-${item.id}`}
                onClick={() => openLightbox(index)}
                className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square hover-elevate transition-all"
              >
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-4 w-full">
                    <p className="text-white text-sm font-medium line-clamp-2">{item.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">
                No photos found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          data-testid="lightbox"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            data-testid="button-close-lightbox"
            className="absolute top-4 right-4 p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
            data-testid="button-prev-image"
            className="absolute left-4 p-3 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            data-testid="button-next-image"
            className="absolute right-4 p-3 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-6xl mx-auto px-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={filteredItems[lightboxIndex].image}
              alt={filteredItems[lightboxIndex].caption}
              className="max-h-[80vh] mx-auto rounded-lg"
            />
            <div className="text-center mt-6">
              <p className="text-white text-lg font-medium">
                {filteredItems[lightboxIndex].caption}
              </p>
              <p className="text-white/60 text-sm mt-1">
                {lightboxIndex + 1} / {filteredItems.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
