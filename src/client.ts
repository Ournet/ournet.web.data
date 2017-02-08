'use strict';

import * as Client from 'ournet.api.client';

export default Client.create({
	api: {
		timeout: 5 * 1000,
		headers: {
			authorization: 'Key ' + process.env.OURNET_API_KEY
		}
	},
	cache: {
		places_place: { max: 100, ttl: 1000 * 60 * 10 },
		places_places: { max: 100, ttl: 1000 * 60 * 10 },
		news_stories: { max: 100, ttl: 1000 * 60 * 10 },
		holidays: { max: 10, ttl: 1000 * 60 * 60 },
		weather_report: { max: 100, ttl: 1000 * 60 * 1 },
		exchange_source: { max: 100, ttl: 1000 * 60 * 60 },
		exchange_rates: { max: 200, ttl: 1000 * 60 * 30 },
		places_searchPlace: false,
		places_region: { max: 100, ttl: 1000 * 60 * 60 },
		places_regions: { max: 100, ttl: 1000 * 60 * 60 },
		places_placeoldid: { max: 200, ttl: 1000 * 60 * 60 },
		news_trendTopics: { max: 100, ttl: 1000 * 60 * 10 },
		news_quotes: { max: 100, ttl: 1000 * 60 * 10 },

		horoscope_reports: { max: 100, ttl: 1000 * 60 * 60 },
		horoscope_report: { max: 100, ttl: 1000 * 60 * 60 },
		horoscope_signsNames: { max: 100, ttl: 1000 * 60 * 60 }
	}
});
