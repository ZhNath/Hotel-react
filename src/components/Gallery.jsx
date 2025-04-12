import React from "react";
import { useState, useEffect } from "react";

const Gallery = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch("https://api.example.com/images")
            .then((response) => response.json())
            .then((data) => setImages(data))
            .catch((error) => console.error("Error fetching images:", error));
    }, []);

    return (
        <div>
            <h1>Gallery</h1>
            <div className="gallery">
                {images.map((image) => (
                    <img key={image.id} src={image.url} alt={image.title} />
                ))}
            </div>
        </div>
    );
}
export default Gallery;