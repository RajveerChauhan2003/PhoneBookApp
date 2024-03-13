
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

export default function Logo(props)
{
    let color = getRandomColor()
    return(
        <div style={{backgroundColor:color ,height:"100px" , width:'100px' , borderRadius:'50%' , display:"flex" ,justifyContent:"center" , alignItems:"center"}}>
            <span style={{fontSize:"30px",color:"white"}}>{props.first}</span>
            <span style={{fontSize:"30px", color:"white"}}>{props.last}</span>
        </div>
    )
}