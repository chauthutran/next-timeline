import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  	env: {
		MONGODB_URI: process.env.MONGODB_URI,
		URL_MONGODB_SERVICE: process.env.URL_MONGODB_SERVICE,
		MONGODB_USERNAME: process.env.MONGODB_USERNAME,
		MONGODB_PASSWORD: process.env.MONGODB_PASSWORD,
		MONGODB_DBNAME: process.env.MONGODB_DBNAME,
		MONGODB_HOST: process.env.MONGODB_HOST,
		MONGODB_APPNAME: process.env.MONGODB_APPNAME
	},

};

export default nextConfig;
