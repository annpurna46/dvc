import { httpAxios } from "@/helpers/httpHelper";

export async function addCard(card) {
  const result = await httpAxios
    .post("/api/userDvc", card)
    .then((response) => response.data);
  return result;
}
export async function updateCard(card) {
  const result = await httpAxios
    .PUT(`/api/userDvc/${userId}/${dvcId}`, card)
    .then((response) => response.data);
  return result;
}
export async function getdvcOfUser(userId) {
  const result = await httpAxios
    .get(`/api/userDvc`)
    .then((response) => response.data);
  return result;
}
export async function deleteTask(taskId) {
  const result = await httpAxios
    .delete(`/api/tasks/${taskId}`)
    .then((response) => response.data);
  return result;
}
