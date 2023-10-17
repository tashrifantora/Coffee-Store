import { useLoaderData } from "react-router-dom";
import NavBar from "./NavBar/NavBar";


const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { _id, name, quantity, taste, details, photo } = coffee;
    return (
        <div>
            <NavBar></NavBar>


            <h1>Updatea coffee:- {name}</h1>


        </div>
    );
};

export default UpdateCoffee;