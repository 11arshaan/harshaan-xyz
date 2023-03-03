import "./Song.scss";



export default function Song({title="Woo", image, playSong}) {
    const backgroundImage = Object.values(image)[0];
    const style = {backgroundImage: `url(${backgroundImage})`};


    return (<div style={style} onClick={playSong} className="song">

    <h3>{title}</h3>
    </div>)
}