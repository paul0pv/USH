interface ISolicitude<T> {
    url: string;
    id?: string;
    body?: T;
    method?: string;
  }
  
  const apiUrl = import.meta.env.VITE_API_URL;
  
  export async function makeHttpRequest<T>({ url, id, body, method = "GET" }: ISolicitude<T>) {
  
    const endpointUrl = id ? `${url}/${id}` : url;
  
    const response = await fetch(`${apiUrl}${endpointUrl}`, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  
    const data = await response.json();
    return data;
  }