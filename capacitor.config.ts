import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
	appId: 'io.ionic.starter',
	appName: 'ionic-issue-7145',
	webDir: 'www/browser',
	server: {
		cleartext: true,
	},
	plugins: {
		CapacitorHttp: {
			enabled: true,
		},
		CapacitorCookies: {
			enabled: true,
		},
	},
};

export default config;
