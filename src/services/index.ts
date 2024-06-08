import { makeHttpRequest } from "./config";

interface IGet {
  url: string;
  id?: string;
}

interface IPost<T> {
  url: string;
  id?: any;
  body: T;
}


// CRUD

export async function postRequest<T>({body, url}:IPost<T>) {
  return await makeHttpRequest({url, body, method:"POST"});
}

export async function getRequest({url, id = ""}: IGet) {
  return await makeHttpRequest({ url, id });
}

export async function putRequest<T>({id, body, url}:IPost<T>) {
  return await makeHttpRequest({ url, id, body, method: "PUT" });
}

export async function deleteRequest({id, url}:IGet) {
  return await makeHttpRequest({ url, id, method: "DELETE" });
}