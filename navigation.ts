import {
    createLocalizedPathnamesNavigation,
    Pathnames
  } from 'next-intl/navigation'
  
  export const defaultLocale = 'es'
  
  export const locales = ['es', 'en'] as const
  
  export const localePrefix = 'always';
  
  export const pathnames = {
    '/': '/',
    '/politica-privacidad': {
      es: '/politica-privacidad',
      en: '/privacy-policy',
  
    },
    '/legal': {
      es: '/aviso-legal',
      en: '/legal-notice',
    }
    ,
    '/redirect': '/redirect'
  }
  
  export const { Link, redirect, usePathname, useRouter } =
    createLocalizedPathnamesNavigation({
      locales,
      localePrefix,
      pathnames
    })