import { ref, getDownloadURL } from "firebase/storage";
import { useEffect } from "react";
import "./ImageUploader.scss";

async function uploadImage(imageFile, imageName, imageDescription, link) {}

function handleFiles(files) {
  
}


export default function ImageUploader() {

    useEffect(()=>{
        const uploader = document.querySelector(".uploader");
        uploader.addEventListener('dragenter', (e) => {
            e.preventDefault();
            uploader.classList.add('uploader--hover');
        });

        uploader.addEventListener('dragleave', (e) => {
            e.preventDefault();
            uploader.classList.remove('uploader--hover');
        });

        uploader.addEventListener('drop', (e) => {
            e.preventDefault();
            uploader.classList.remove('uploader--hover');
            handleFiles(e.dataTransfer.files);
          })

        return ()=>{
            uploader.replaceWith(uploader.clone());
        }
    }, []);

  return (
    <div className="uploader">
      <form>
        <input type="file" id="file-input" multiple />
      </form>
    </div>
  );
}
