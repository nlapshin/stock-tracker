import * as dotenv from 'dotenv';

import { IScraperConfig } from './model';

export default function config(): IScraperConfig {
	const { error, parsed: env } = dotenv.config();

	if (error) {
		throw error;
	}

	return {
		API_KEY: env.API_KEY
	}
}