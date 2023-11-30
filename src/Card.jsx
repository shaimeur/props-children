

const Card = (props)=>{
    return (
        <div style={{border:"1px solid black",margin:"20px",backgroundColor:"teal"}}>

                {props.person.shows ?
                 <div>
                        <h1>{props.person.fullName}</h1>
                        <p>{props.person.bio}</p>
                        <h3>{props.person.profession}</h3>
                        <img src={props.person.imgSrc} alt="??" />
                        <span>{props.person.shows}</span>
                 </div> :
                    <p style={{fontSize:"100px"}}>Not Found!!</p>
                }

        </div>
    )
}
export default Card