import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/theycallmearpit", label: "GitHub" },
    { icon: Linkedin, href:"https://www.linkedin.com/in/arpit-singh-46bb30356/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:theycallmearpit43@gmail.com", label: "Email" },
  ];

  return (
    <footer className="bg-card/30 border-t border-white/10 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center space-y-6">
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-foreground/60 hover:text-primary-glow hover:bg-primary/30 transition-all duration-300 hover:scale-110"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
          
          <div className="space-y-2">
            <p className="text-foreground/60 text-sm">
              © {currentYear} Arpit singh. All rights reserved.
            </p>
            <p className="text-foreground/40 text-xs flex items-center justify-center gap-1">
              Built  using React & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;