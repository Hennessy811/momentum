/* eslint-disable no-tabs */
export interface Succes {
	total: number;
}

export interface Quote {
	quote: string;
	length: string;
	author: string;
	tags: string[];
	category: string;
	language: string;
	date: string;
	permalink: string;
	id: string;
	background: string;
	title: string;
}

export interface Content {
	quotes: Quote[];
}

export interface Copyright {
	year: number;
	url: string;
}

export interface QuoteResponse {
	success: Succes;
	contents: Content;
	baseurl: string;
	copyright: Copyright;
}
