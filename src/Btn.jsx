const Btn = ({greating,color}) =>{
    const clickHundler = () =>{
        console.log('clicked')
    }
    return (
        <>

            {/* <button style={{backgroundColor:color}} onClick={greating}  >click me</button> */}
            {/* <button onClick={()=>console.log("clicked")}  >click me</button> */}
            <button onClick={clickHundler}  >click me</button>
        </>
    )
}

export default Btn