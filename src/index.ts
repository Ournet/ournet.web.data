'use strict';

import * as Client from './client';
import { get as getProperties } from './properties';

let client: any;
let properties: any;

export function initClient(options?: any): any {
	return client = Client.create(options);
};

export function initProperties(options?: any): any {
	return properties = getProperties(options);
};

export function get(props: any, type: string='query'): any {
	// debug('getting data by props:', props);
	const data = {};
	var propertyKey;
	var variables;
	var property;

	if (!properties) {
		initProperties();
	}

	for (var dataKey in props) {
		propertyKey = props[dataKey][0];
		variables = props[dataKey].length > 1 ? props[dataKey][1] : {};

		property = properties[propertyKey];
		if (!property) {
			throw new Error('Unknown property: ' + propertyKey);
		}
		data[dataKey] = {
			query: property.query,
			name: property.name,
			variables: variables
		};
	}

	// debug('getting data by data:', data);

	if (!client) {
		initClient();
	}

	return client[type](data);
};

export function query(props: any):any {
	return get(props, 'query');
};

export function mutate(props: any):any {
	return get(props, 'mutate');
};
