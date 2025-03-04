export interface Client {
	id?: number;
	name: string;
	email: string;
	date: string;
	phone: string;
	address: string;
}

export const api = {
	url: 'https://api.digitails.com.br', //'http://localhost:3000',
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
		create(dto: Client) {
			return api.fetch('/clients', 'POST', JSON.stringify(dto));
		},
		read(id: number) {
			return api.fetch(`/clients/${id}`);
		},
		list(cfg: { page?: number; search?: string }) {
			return api.fetch(`/clients?q=${encodeURIComponent(cfg.search || '')}&page=${cfg.page ?? 1}`);
		},
		update(id: number, dto: Client) {
			return api.fetch(`/clients/${id}`, 'PATCH', JSON.stringify(dto));
		},
		delete(id: string) {
			return api.fetch(`/clients/${id}`, 'DELETE');
		}
	}
};
