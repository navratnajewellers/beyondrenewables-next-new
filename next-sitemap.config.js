/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://beyondrenewables.in",
  //   generateRobotsTxt: true, // Generates robots.txt
  //   // exclude: ["/admin"], // Exclude pages
  //   sitemapSize: 5000, // Split sitemap if large

  generateRobotsTxt: true, // Generate robots.txt
  sitemapSize: 5000, // Split sitemap if too large
  generateIndexSitemap: false, // Ensure it generates actual pages
  exclude: ["/admin", "/dashboard"], // Exclude specific routes
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/admin", "/dashboard"] },
    ],
  },
};
