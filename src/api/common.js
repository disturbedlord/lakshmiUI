export const api = {
  async request(url, options = {}) {
    const res = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(text || res.status);
    }

    return res.json();
  },

  get(url) {
    return this.request(url);
  },

  post(url, data) {
    return this.request(url, {
      method: "POST",
      body: JSON.stringify(data),
    });
  },
};
