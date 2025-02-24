export interface Client {
	id: number;
	name: string;
	email: string;
	phone: string;
	address: string;
}

export const api = {
	url: 'http://localhost:3000',
	token: '',
	fetch(url: string, method: string = 'GET', body?: any) {
		const headers: Record<string, string> = {
			'Content-Type': 'application/json'
		};
		if (this.token) {
			headers['Authorization'] = `Bearer ${this.token}`;
		}
		return fetch(this.url + url, { method, body, headers });
	},
	clients: {
		create(dto: Client) {},
		read(id: string) {},
		list() {
			return api.fetch('/clients');
		},
		update(dto: Client) {},
		delete(id: string) {}
	}
};
