import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.hmelmilimited.com'
  
  // Base routes
  const routes = [
    '',
    '/about',
    '/services',
    '/projects',
    '/gallery',
    '/fleet-compliance',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Dynamic service routes
  const serviceRoutes = [
    'trading-export',
    'transport-logistics',
    'cross-border-clearance',
    'garage-maintenance'
  ].map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...routes, ...serviceRoutes]
}
