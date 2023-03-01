import "./Art.scss";
import { getImages } from "../utils/firebase.utils";
import { useEffect, useState, useContext } from "react";
import { ArtContext } from "../utils/ArtContext";
import ImageCard from "../components/ImageCard";
import { ArtModal } from "../components/ArtModal";
import anime from "animejs/lib/anime.es.js";

export default function Art() {
  const [visible, setVisible] = useState(false);
  const [modalImage, setModalImage] = useState({});
  const { images, setImages } = useContext(ArtContext);

  function handleImage(e) {
    const target = e.target;
    const selectedImage = images.find((img) => img.url === target.src);
    setModalImage(selectedImage);
    setVisible(true);

  }

  useEffect(() => {
    getImages().then((imageList) => {
      setImages(imageList);
    });
  }, []);

  return (
    <>
      <ArtModal visible={visible} setVisible={setVisible} modalImage={modalImage} />
      <div className="art">
        {images.map((image) => (
          <ImageCard
            key={image.url}
            url={image.url}
            title={image.title}
            description={image.description}
            handleImage={handleImage}
          />
        ))}
      </div>
    </>
  );
}
