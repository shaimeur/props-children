const ModeToggler = () =>{
    let darkModeOn = true;
    const darkMode = <h1>Dark Mode</h1>
    const lightMode = <h1>Light Mode</h1>

    const clickHundler = () =>{
        darkModeOn = !darkModeOn
    }
    return(
        <>
            {darkModeOn ? darkMode : lightMode}
            <button onClick={clickHundler}>Change</button>

        </>
    )
}

export default ModeToggler