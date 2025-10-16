import { Link } from "wouter";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube, Leaf } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary rounded-full p-2">
                <Leaf className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-heading font-bold text-xl text-foreground">TERM</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Tamizh Nadu Ecological Restoration Council - dedicated to restoring nature and
              reviving life across Tamil Nadu through community-driven conservation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "/about", label: "About Us" },
                { href: "/projects", label: "Projects" },
                { href: "/team", label: "Our Team" },
                { href: "/get-involved", label: "Get Involved" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span
                      data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                    >
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-2">
              {[
                { href: "/resources", label: "Reports & Publications" },
                { href: "/news", label: "News & Events" },
                { href: "/gallery", label: "Gallery" },
                { href: "/faq", label: "FAQ" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span
                      data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                    >
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground leading-relaxed">
                  No.6B, Rajam Pettai Street<br />
                  Kancheepuram, Tamil Nadu<br />
                  India - 631501
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="mailto:info@termcouncil.org"
                  data-testid="link-footer-email"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  info@termcouncil.org
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="tel:+914427220000"
                  data-testid="link-footer-phone"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  +91 44 2722 0000
                </a>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex items-center gap-3 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-social-facebook"
                className="p-2 rounded-lg bg-muted hover-elevate active-elevate-2 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-muted-foreground" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-social-twitter"
                className="p-2 rounded-lg bg-muted hover-elevate active-elevate-2 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4 text-muted-foreground" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-social-linkedin"
                className="p-2 rounded-lg bg-muted hover-elevate active-elevate-2 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-muted-foreground" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-social-youtube"
                className="p-2 rounded-lg bg-muted hover-elevate active-elevate-2 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4 text-muted-foreground" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-8 pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Tamil Nadu Ecological Restoration Council. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
