import { addClient } from "../services/clientsService";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from 'uuid';
import { useParams, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { getClientById } from "../services/clientsService";
const FormClient = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { clientId } = useParams();
  const location = useLocation();
  const getClient = async(id) => {
    const { data } = await getClientById(id);
    console.log(data);
  };
  useEffect(() => {
    if(clientId) {
      const f = async () => {
        await getClient(clientId);
      };
      f();
    }
  }, []);
 // console.log(location)
  const onSubmitPaul = (data) => {
    console.log(":P", data);
    const client = {
      id: uuidv4(),
      name: data.name,
      lastName: data.lastName,
      company: data.company,
    };
    addClient(client);
  };
  return (
    <>
      <div className="m-10 ">
        <form onSubmit={handleSubmit(onSubmitPaul)}>
          <label className="text-gray-800" htmlFor="name">
            Nombre :
          </label>
          <input
            type="text"
            className="mt-2 block w-full p-3 bg-gray-50"
            {...register("name")}
          />
          <label className="text-gray-800" htmlFor="name">
            Apellido :
          </label>
          <input type="text"
           className="mt-2 block w-full p-3 bg-gray-50"
           {...register('lastName')}
           />
           <label className="text-gray-800" htmlFor="name">
            Compañia :
          </label>
          <input type="text"
           className="mt-2 block w-full p-3 bg-gray-50"
           {...register('company')}
           />
          <button type="submit">Agregar</button>
        </form>
      </div>
    </>
  );
};
export default FormClient;