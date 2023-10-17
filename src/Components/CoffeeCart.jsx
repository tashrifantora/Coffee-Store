import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeCart = ({ coffee }) => {
    const { _id, name, quantity, taste, details, photo } = coffee;

    const handleDelete = (_id) => {
        console.log(_id)
        // Sweet Alart
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                console.log('delete confrim')
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: "DELETE",

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCOunt > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your coffee has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }


    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <div className="flex items-center">
                    <figure><img src={photo} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <p>{taste}</p>
                        <p>{quantity}</p>
                        <p>{details}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="btn-group btn-group-vertical space-y-4">
                            <button className="btn btn-active">View</button>
                            <Link to={`/updateCoffee/${_id}`}>
                                <button className="btn">Edit</button>
                            </Link>
                            <button onClick={() => handleDelete(_id)} className="btn bg-red-500">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCart;