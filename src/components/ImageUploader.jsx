import { useEffect, useState } from "react";
import { uploadImage } from "../utils/firebase.utils";
import "./ImageUploader.scss";
import { nanoid } from "nanoid";

export default function ImageUploader() {
  const [upload, setUpload] = useState({
    title: "",
    description: "",
    file: null,
  });
  const [images, setImages] = useState([]);

  function handleFile(file) {
    const container = document.querySelector(".thumbnails");

  
    console.log(file.type);
    setUpload((prev)=>{
      return {...prev, file: file}
    });
    const img = document.createElement("img");
    img.classList.add("thumbnail");
    img.file = file; //stores the file object into a custom attribute for later access
    img.key = nanoid();
    const reader = new FileReader();
    reader.onload = (e) => {
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
    // setImages((prev) => [...prev, img]);
    container.appendChild(img);
  }

  function handleInput(e) {
    handleFile(e.target.files[0]);
  }

  function handleUpload(e) {
    console.log(upload);
    uploadImage(upload.file, upload.title, upload.description);
  }

  function handleType(e) {
    setUpload((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
    
  }

  useEffect(() => {
    const uploader = document.querySelector(".uploader");
    uploader.addEventListener("dragenter", (e) => {
      e.stopPropagation();
      e.preventDefault();
      uploader.classList.add("uploader--hover");
    });

    uploader.addEventListener("dragover", (e) => {
      e.stopPropagation();
      e.preventDefault();
      uploader.classList.add("uploader--hover");
    });

    uploader.addEventListener("dragleave", (e) => {
      e.stopPropagation();
      e.preventDefault();
      uploader.classList.remove("uploader--hover");
    });

    uploader.addEventListener("drop", (e) => {
      e.stopPropagation();
      e.preventDefault();
      uploader.classList.remove("uploader--hover");
      handleFile(e.dataTransfer.files[0]);
    });

    return () => {
      uploader.replaceWith(uploader.clone());
    };
  }, []);

  return (
    <div className="uploader">
      <input
        type="file"
        onChange={handleInput}
        id="file-input"
        accept="image/*"
      />
      <input type="text" name="title" onChange={handleType}></input>
      <textarea name="description" id="img-description" onChange={handleType}></textarea>
      <button
        id="file-select"
        type="button"
        onClick={() => {
          document.querySelector("#file-input").click();
        }}
      >
        Select Image
      </button>
      <button id="uploadbtn" type="button" onClick={handleUpload}>
        Upload Image
      </button>

      <div className="thumbnails"></div>
    </div>
  );
}
