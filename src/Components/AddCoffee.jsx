import Swal from 'sweetalert2'
import NavBar from './NavBar/NavBar';

const AddCoffee = () => {

    const handleAddCoffee = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { name, quantity, supplier, taste, category, details, photo }
        console.log(newCoffee)

        // New data sending precess
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success',
                        text: 'User added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <div className="bg-[#F4F3F0] p-24">
            <NavBar></NavBar>



            <h1 className="text-3xl font-extrabold text-center">Add coffee</h1>

            <form onSubmit={handleAddCoffee} className="">

                {/* From row  name & quantity*/}
                <div className="md:flex gap-10 mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Name:</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="coffee name" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity:</span>
                        </label>
                        <label className="input-group">
                            <input type="number" name="quantity" placeholder="coffee name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                {/* From row suppliar & taste */}
                <div className="md:flex gap-10 mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier:</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="supplier" placeholder="supplier" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Taste:</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="taste" placeholder="taste" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                {/* From row category & details */}
                <div className="md:flex gap-10 mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category:</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" placeholder="category" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Details:</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" placeholder="details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                {/* From row category & details */}
                <div className="mb-8">

                    <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text">Photo URL:</span>
                        </label>
                        <label className="input-group">
                            <input type="photo" name="photo" placeholder="photo" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <input type="submit" value="Add Coffee" className="btn btn-block bg-[#D2B48C]" />

            </form>
        </div>
    );
};

export default AddCoffee;