import "./Art.scss";
import { doc, query, getDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../utils/firebase.utils";

import { useEffect, useState } from "react";

export default function Art() {
  const [images, setImages] = useState([]);

  async function getImages() {
    const imageList = [];
    const q = query(collection(db, "art"));
    const images = await getDocs(q);
    images.forEach(img => imageList.push(img.data().url));
    console.log(imageList);
    return imageList;
  }

  useEffect(() => {
    setImages(getImages());

  }, []);

  return (
    <div className="art">
      {images.forEach(img=>{
        return <img src={img} />
      })}
    </div>
  );
}
