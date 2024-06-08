import { getRequest, postRequest } from "../services";



export async function findUser(values: object) {
  const autentication = await postRequest({body: values, url:"users/login"});
  return autentication.ok;
}

export async function findEmployee(values: object) {
  const autentication = await postRequest({body: values, url:"employees/login"});
  return autentication.ok;
}

export async function newUser(values: object) {
  const autentication = await postRequest({body: values, url:"users/signup"});
  return autentication.ok;
}

export async function getObject(route: string) {
  const objects = await getRequest({ url: route })
  return objects.data
}