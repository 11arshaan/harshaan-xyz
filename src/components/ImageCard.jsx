import "./ImageCard.scss";

export default function ImageCard({ url, title, description, handleImage, setModalImage }) {
  return (
    <div className="imagecard" >
      <h3 className="imagecard__title">{title}</h3>
      <img onClick={handleImage} src={url} alt={title}></img>
    </div>
  );
}
