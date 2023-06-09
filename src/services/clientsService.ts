import ClientInterface from "../models/ClientInterface";
import { crmAPI } from "./crmInstance";

export const getClients = async () => {
  return await crmAPI.get("/clients");
};

export const addClient = async (client: ClientInterface) => {
  return await crmAPI.post("/clients", client);
};

export const deleteClient = async (client: ClientInterface) => {
  return await crmAPI.delete("/clients");
};

export const editClient = async (client: ClientInterface) => {
  return await crmAPI.put("/clients", client);
};

export const getClientById = async (id: number) => {
  return await crmAPI.get(`/clients/${id}`);
}