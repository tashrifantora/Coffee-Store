import { Link } from "react-router-dom";



const NavBar = () => {
    return (
        <div>
            <div className='flex justify-around'>
                <button className='btn'>
                    <Link to='/'>Home</Link>
                </button>
                <button className='btn'>
                    <Link to='/addCoffee'>Add Coffee</Link>
                </button>
                <button className='btn'>
                    <Link to='/updateCoffee'>Update Coffee</Link>
                </button>
            </div>

        </div>
    );
};

export default NavBar;