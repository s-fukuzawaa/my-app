import React from "react"

function Product(props){
    return(
        <div>
            <h1>
                {props.id}
            </h1>
            <h2>
                {props.product}
            </h2>
        </div>
    )
}


export default Product