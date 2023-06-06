import { useEffect, useState } from "react";
import ClientInterface from "../models/ClientInterface";
import { useLoaderData, useNavigate } from "react-router-dom";
import Table from "../components/Table";

const ClientsPage = () => {
  const [clients, setClients] = useState<ClientInterface[]>([]);
  const navigate = useNavigate();
  const { data } = useLoaderData();
  useEffect(() => {
    setClients(data);
  }, []);

  return (
    <>
      <Table
        clients={clients}
        onEdit={(client: ClientInterface) => {
          console.log("on Edit");
          navigate("/home/add-client", {
            state: {
              ...client
            }
          });
        }}
        onDelete={() => {
          console.log("on onDelete");
        }}
      />
    </>
  );
};
export default ClientsPage;
