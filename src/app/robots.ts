import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  // Use environment variable for domain, fallback to a placeholder
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.hmelmilimited.com'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/'], // Hide admin panel from Google
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
