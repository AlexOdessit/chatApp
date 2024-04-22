import axios from 'axios';
const httpClient = axios.create({
  baseURL: 'http://localhost:5000',
});
//функция яка робить запит на сервер
export async function createUser(userData) {
  const response = await httpClient.post('/users', userData);
  return response;
}
export async function getUser(userId) {
  const response = await httpClient.get(`/users/${userId}`);
  return response;
}
export async function getUsers() {
  const response = await httpClient.get('/users');
  return response;
}
export async function updateUser(userId, userData) {
  const response = await httpClient.put(`/users/${userId}`, userData);
  return response;
}

export async function deleteUser(userId) {
  const response = await httpClient.put(`/users/${userId}`);
  return response;
}
