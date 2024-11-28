export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Hotel Karol",
  description: "Hotel Karol Gherla",
  navItems: [
    {
      label: "Acasă",
      href: "/",
    },
    {
      label: "Galerie",
      href: "/galerie",
    },
    {
      label: "Restaurant",
      href: "/restaurant",
    },
    {
      label: "Despre",
      href: "/despre",
    },
  ],
  navMenuItems: [
    {
      label: "Acasă",
      href: "/",
    },
    {
      label: "Galerie",
      href: "/galerie",
    },
    {
      label: "Restaurant",
      href: "/restaurant",
    },
    {
      label: "Despre",
      href: "/despre",
    },
  ],
  links: {
    facebook: "https://facebook.com",
    whatsapp: "https://whatsapp.com",
    email: "mailto:email@email.com",
  },
};
