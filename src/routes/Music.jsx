import "./Music.scss";


export default function Music() {

  const tempStyle = {
    color: "white",
    fontFamily: "IBMPlexMono",
  }

  const tempDiv ={

    justifySelf: "center",
    marginTop: "10rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  }

  return (<div style={tempDiv}><h2 style={tempStyle}>Music Player under construction!</h2>
  <br></br><p style={tempStyle}>( I make many kinds of music )</p></div>)

}
