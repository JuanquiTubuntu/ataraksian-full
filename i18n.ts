import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'

import { locales } from './navigation'

export default getRequestConfig(async ({ locale }) => {
    // Validate that the incoming `locale` parameter is valid
    if (!locales.includes(locale as any)) notFound()

    const localeMessages = {
        Banner: { ...(await import(`/messages/${locale}/banner.json`)).default },
        Cam: { ...(await import(`/messages/${locale}/cam.json`)).default },
        CreatePassword: { ...(await import(`/messages/${locale}/createPassword.json`)).default },
        EmailSent: { ...(await import(`/messages/${locale}/emailSent.json`)).default },
        Faqs: { ...(await import(`/messages/${locale}/faqs.json`)).default },
        Footer: { ...(await import(`/messages/${locale}/footer.json`)).default },
        Hero2: { ...(await import(`/messages/${locale}/hero2.json`)).default },
        Hero3: { ...(await import(`/messages/${locale}/hero3.json`)).default },
        Legal: { ...(await import(`/messages/${locale}/legal.json`)).default },
        Login: { ...(await import(`/messages/${locale}/login.json`)).default },
        Navbar: { ...(await import(`/messages/${locale}/navbar.json`)).default },
        NotFound: { ...(await import(`/messages/${locale}/notFound.json`)).default },
        Policy: { ...(await import(`/messages/${locale}/policy.json`)).default },
        Register: { ...(await import(`/messages/${locale}/register.json`)).default },
        Registro: { ...(await import(`/messages/${locale}/registro.json`)).default }


    }
    const messages = { ...localeMessages }

    return {
        messages,
    }
})