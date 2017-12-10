const defaultsDeep = require('lodash.defaultsdeep');

export function get(options?: any): any {
	return defaultsDeep(options || {}, PROPERTIES);
};

const PROPERTIES = {
	place: {
		name: 'places_place',
		query: '(id:$placeId){id population latitude longitude featureCode featureClass countryCode name asciiname names admin1{id asciiname countryCode admin1Code name names}}'
	},
	places: {
		name: 'places_places',
		query: '(ids:$ids){id latitude longitude countryCode name asciiname names admin1Code}'
	},
	mainPlaces: {
		name: 'places_mainPlaces',
		query: '(country:$country,limit:$limit){id latitude longitude countryCode name asciiname names admin1Code}'
	},
	admin1Places: {
		name: 'places_places',
		query: '(admin1Key:$admin1Key,limit:$limit){id latitude longitude countryCode name asciiname names admin1Code}'
	},
	searchPlace: {
		name: 'places_searchPlace',
		query: '(country:$country,query:$query,limit:$limit){id countryCode name asciiname names admin1Code featureClass featureCode admin1{id asciiname countryCode admin1Code name names}}'
	},
	admin1: {
		name: 'places_admin1',
		query: '(admin1:$admin1,country:$country){id latitude longitude featureCode featureClass countryCode name asciiname names admin1Code}'
	},
	admin1s: {
		name: 'places_admin1s',
		query: '(limit:$limit,country:$country){id latitude longitude featureCode featureClass countryCode name asciiname names admin1Code}'
	},
	placeForecast: {
		name: 'places_place',
		query: '(id:$placeId){id population latitude longitude featureCode featureClass countryCode name asciiname names admin1{id asciiname countryCode admin1Code name names}forecast}'
	},
	placeCurrentForecast: {
		name: 'places_place',
		query: '(id:$placeId){id latitude longitude featureCode featureClass countryCode name asciiname names currentForecast}'
	},
	forecast: {
		name: 'weather_report',
		query: '(latitude:$latitude,longitude:$longitude)'
	},
	placesForecast: {
		name: 'weather_placesReport',
		query: '(date:$date,places:$places)'
	},
	latestStories: {
		name: 'news_stories',
		query: '(country:$country,lang:$lang,limit:$limit,order:"-createdAt") {id title imageId uniqueName}'
	},
	mainExchangeRates: {
		name: 'exchange_rates',
		query: '(keys:$keys){rate: sale rate1d: sale1d currency{code htmlName symbol}}'
	},
	exchangeSource: {
		name: 'exchange_source',
		query: '(country:$country,id:$sourceId){id name shortName abbr}'
	},
	holidays: {
		name: 'holidays',
		query: '(country:$country,lang:$lang)'
	},
	placeoldid: {
		name: 'places_placeoldid',
		query: '(id:$id){id geonameid}'
	},
	trendingTopics: {
		name: 'news_trendTopics',
		query: '(where:$where,limit:$limit,order:$order){id name slug:uniqueName type abbr counts}'
	},
	newsQuotes: {
		name: 'news_quotes',
		query: '(where:$where,limit:$limit,order:$order){id text createdAt author{id name slug:uniqueName} webpage{id title host path slug:uniqueName}}'
	},
	newsStories: {
		name: 'news_stories',
		query: '(country:$country,lang:$lang,where:$where,limit:$limit,order:$order){id slug:uniqueName summary createdAt countViews countNews imageId videos title countShares}'
	},
	horoscopeReport: {
		name: 'horoscope_report',
		query: '(id:$id){id period text sign numbers stats{health love success}}'
	},
	horoscopeReports: {
		name: 'horoscope_reports',
		query: '(where:$where,limit:$limit,order:$order){id period text sign numbers stats{health love success}}'
	},
	horoscopeSignsNames: {
		name: 'horoscope_signsNames',
		query: ''
	}
};