import React from "react";


const Greet = (props) => {
return (
<div>
<h1>Hey {props.name} your type name is {props.nameType}</h1>
{props.children}
</div>
)
}

export default Greet;