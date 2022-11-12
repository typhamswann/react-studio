// TODO: create a component that displays a single bakery item
export default function BakeryItem(props){
    return(
        <div>
        <img src={props.image} alt={props.name}/>
        <h1>{props.name}</h1>
        <p>{props.desc}</p>
        <p>{props.price}</p>
        <button onClick={() => {
            props.addItemToCart(props.name, props.price)
        }}>Add to Cart</button>
        </div>
    )
}