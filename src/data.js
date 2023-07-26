import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    
      {
        text: 'Nuestros Servicios',
        href: getPermalink('/#features'),
      },
      {
        text: 'Quiénes Somos',
        href: getPermalink('/#aboutus'),
      },
      {
        text: 'Proceso de Inicio',
        href: getPermalink('/#steps'),
      },
      {
        text: 'Nuestro Equipo',
        href: getPermalink('/landing/saas'),
      },
      {
        text: 'Contáctanos',
        href: getPermalink('/landing/startup'),
      },
      
      
  ],
  actions: [{ type: 'button', text: 'Recibe una Consulta Personalizada', href: getPermalink('/landing/startup') }],
};

export const footerData = {
  links: [
    {
      title: 'Servicios', // Services
      links: [
        { text: 'Características', href: '#' }, // Features
        { text: 'Seguridad', href: '#' }, // Security
        { text: 'Nuestro equipo', href: '#' }, // Our Team
        { text: 'Clientes', href: '#' }, // Customers
        { text: 'Historias de éxito', href: '#' }, // Success Stories
        { text: 'Precios', href: '#' }, // Pricing
      ],
    },
    {
      title: 'Recursos', // Resources
      links: [
        { text: 'Blog', href: '#' },
        { text: 'Guías y tutoriales', href: '#' }, // Guides and Tutorials
        { text: 'Preguntas frecuentes', href: '#' }, // Frequently Asked Questions
      ],
    },
    {
      title: 'Soporte', // Support
      links: [
        { text: 'Documentación', href: '#' }, // Documentation
        { text: 'Foro de la comunidad', href: '#' }, // Community Forum
        { text: 'Servicios profesionales', href: '#' }, // Professional Services
        { text: 'Estado del sistema', href: '#' }, // System Status
      ],
    },
    {
      title: 'Empresa', // Company
      links: [
        { text: 'Sobre nosotros', href: '#' }, // About Us
        { text: 'Trabajos', href: '#' }, // Jobs
        { text: 'Prensa', href: '#' }, // Press
        { text: 'Impacto social', href: '#' }, // Social Impact
      ],
    },
  ],

  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [

    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/taxlineservices/' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/MiAsesoriaAmericana' },
    
  ],
  footNote: `
    © 2023 Asesoría Americana. All right reserved
  `,
};
