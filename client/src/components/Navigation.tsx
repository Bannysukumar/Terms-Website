import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/team", label: "Team" },
  { href: "/gallery", label: "Gallery" },
  { href: "/news", label: "News & Events" },
  { href: "/resources", label: "Resources" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/">
            <div data-testid="link-home" className="flex items-center gap-2 hover-elevate rounded-lg px-3 py-2 -ml-3 cursor-pointer">
              <div className="bg-primary rounded-full p-2">
                <Leaf className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg md:text-xl text-foreground">
                  TERM
                </span>
                <span className="hidden sm:block text-xs text-muted-foreground font-sans">
                  Tamil Nadu Ecological Restoration
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <div
                  data-testid={`link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`px-4 py-2 rounded-lg font-sans text-sm font-medium transition-colors hover-elevate cursor-pointer ${
                    location === link.href
                      ? "text-primary"
                      : "text-foreground/80 hover:text-foreground"
                  }`}
                >
                  {link.label}
                </div>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/get-involved">
              <Button
                data-testid="button-get-involved"
                className="font-sans font-semibold"
              >
                Get Involved
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            data-testid="button-mobile-menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover-elevate active-elevate-2"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background/98 backdrop-blur-md border-t border-border">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <div
                  data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg font-sans font-medium transition-colors hover-elevate cursor-pointer ${
                    location === link.href
                      ? "bg-accent text-accent-foreground"
                      : "text-foreground/80 hover:text-foreground"
                  }`}
                >
                  {link.label}
                </div>
              </Link>
            ))}
            <Link href="/get-involved">
              <Button
                data-testid="button-mobile-get-involved"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full font-sans font-semibold mt-4"
              >
                Get Involved
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
