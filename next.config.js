/** @type {import('next').NextConfig} */
module.exports ={
	reactStrictMode: true,
	exportPathMap: async function (
		defaultPathMap,
		{ dev, dir, outDir, distDir, buildId }
	  ) {
		return {
		  '/': { page: '/', query: {title: 'Zatcoin | Dashboard'} },
		  '/profile': { page: '/profile', query: {title: 'Zatcoin | Profile'} },
		  '/profile/register': { page: '/profile', query: { title: 'Zatcoin | Register - Profile' } },
		 
		}
	  },
};
