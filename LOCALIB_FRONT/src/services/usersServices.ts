import UserType from "../models/UserType";

export class usersServices  {

    findAll = async () => {
        const response =  await fetch('http://localhost:8080/locataires');
        const data = await response.json();
        return data;
    }

    findUserById = async (id:string) => {
        const response =  await fetch(`http://localhost:8080/locataires/${id}`);
        const data = await response.json();
        return data;
    }

    deleteUser = async (id:string) => {
      return  fetch(`http://localhost:8080/locataires/${id}`, { method: 'DELETE' })
    }

    addUser = (Users : UserType) => {
        return fetch('http://localhost:8080/locataires', {
            method:'POST',
            body: JSON.stringify(Users),
            headers:{'Content-type':'application/json'}
        })
            .then(response => response.json())
    }

    updateUser = async (id:string, Users : UserType) => {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(Users)
        };
        fetch(`http://localhost:8080/locataires/${id}`, requestOptions)
            .then(response => response.json())
    }


}

export const callUsersService = Object.freeze(new usersServices())