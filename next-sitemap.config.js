module.exports = {
    siteUrl: "https://stoneprotectionpros.com", // TODO: update
    generateRobotsTxt: true,
    transform: async (config, path) => ({
        loc: path,
        changefreq: "monthly",
        priority: path === "/" ? 1.0 : 0.7,
        lastmod: new Date().toISOString(),
    }),
};

