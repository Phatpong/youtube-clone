const withNextIntl = require("next-intl/plugin")();

module.exports = withNextIntl({
	// Other Next.js configuration ...
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "https://www.youtube.com/",
			},
		],
	},
});
