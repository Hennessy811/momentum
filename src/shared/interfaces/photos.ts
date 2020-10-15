/* eslint-disable camelcase */
/* eslint-disable no-tabs */
export interface Url {
	raw: string;
	full: string;
	regular: string;
	small: string;
	thumb: string;
}

export interface Link {
	self: string;
	html: string;
	download: string;
	download_location: string;
}

export interface Link {
	self: string;
	html: string;
	photos: string;
	likes: string;
	portfolio: string;
	following: string;
	followers: string;
}

export interface Profile_image {
	small: string;
	medium: string;
	large: string;
}

export interface Sponsor {
	id: string;
	updated_at: string;
	username: string;
	name: string;
	first_name: string;
	last_name?: any;
	twitter_username: string;
	portfolio_url: string;
	bio: string;
	location?: any;
	links: Link;
	profile_image: Profile_image;
	instagram_username: string;
	total_collections: number;
	total_likes: number;
	total_photos: number;
	accepted_tos: boolean;
}

export interface Sponsorship {
	impression_urls: string[];
	tagline: string;
	tagline_url: string;
	sponsor: Sponsor;
}

export interface Link {
	self: string;
	html: string;
	photos: string;
	likes: string;
	portfolio: string;
	following: string;
	followers: string;
}

export interface Profile_image {
	small: string;
	medium: string;
	large: string;
}

export interface User {
	id: string;
	updated_at: string;
	username: string;
	name: string;
	first_name: string;
	last_name?: any;
	twitter_username: string;
	portfolio_url: string;
	bio: string;
	location?: any;
	links: Link;
	profile_image: Profile_image;
	instagram_username: string;
	total_collections: number;
	total_likes: number;
	total_photos: number;
	accepted_tos: boolean;
}

export interface PhotoRes {
	id: string;
	created_at: string;
	updated_at: string;
	promoted_at?: any;
	width: number;
	height: number;
	color: string;
	blur_hash: string;
	description?: any;
	alt_description?: any;
	urls: Url;
	links: Link;
	categories: any[];
	likes: number;
	liked_by_user: boolean;
	current_user_collections: any[];
	sponsorship: Sponsorship;
	user: User;
}
