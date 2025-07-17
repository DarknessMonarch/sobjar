export default async function sitemap() {
  const baseUrl = 'https://sobjarcanada.org';
  

  
  const mainRoutes = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 0.9,
    },
  ];
  

  
  return [
    ...mainRoutes,
  ];
}