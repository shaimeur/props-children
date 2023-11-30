
import "./Bag.css";
function Bag(props) {

    return (
        <div className='bag'>
            {props.children}
        </div>
    )
}
export default Bag