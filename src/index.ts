'use strict';

import client from './client';
import properties from './properties';

// {place:['place',{placeForecast:1002}]}
export function get(props:any):any {
	// debug('getting data by props:', props);
	const data = {};
	var propertyKey;
	var variables;
	var property;

	for (var dataKey in props) {
		propertyKey = props[dataKey][0];
		variables = props[dataKey].length > 1 ? props[dataKey][1] : {};

		property = properties[propertyKey];
		data[dataKey] = {
			query: property.query,
			name: property.name,
			variables: variables
		};
	}

	// debug('getting data by data:', data);

	return client.query(data);
};
