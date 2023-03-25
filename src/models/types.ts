export interface TitleObjectType {
	name: string;
	short: string;
	icon: string;
	inventoryChildren?: TitleObjectType[];
	children: {
		name: string;
		short: string;
		icon: string;
		children?: {}[] | null;
	}[];
}

export interface MenuItemType {
	name: string;
	short: string;
	icon: string;
	children: {
		name: string;
		short: string;
		icon: string;
		children?: {
			name: string;
			short: string;
			icon: string;
		}[];
	}[];
}

export interface FavoriteObjectType {
	name: string;
	icon: string;
}

export interface EnumToArrayType {
	text: string;
	value: number;
}

export interface BasketObjectType {
	name: string;
	icon: string;
}

export interface CompanyObjectType {
	id: number;
	name: string;
	code: null | string;
}

export interface TenantObjectType {
	companies: CompanyObjectType[];
	id: number;
	name: string;
	code: null | string;
}
