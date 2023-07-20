function msg() {
    alert('I am JS')
}
let Hello = () => {
    return(
    msg()
    )

    // return React.createElement('div',null,React.createElement('h1',null,'Hello React'))
}

export default Hello;