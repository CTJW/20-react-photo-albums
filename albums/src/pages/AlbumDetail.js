import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "../App.css";

export default function AlbumDetail(props) {
  const { id } = useParams();
  console.log(id);

  const [detailAlbums, setDetailAlbums] = useState({});
  useEffect(() => {
    fetch(`http://localhost:3001/albums/${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setDetailAlbums(data);
      });
  }, []);

  return (
    <div className="App">
      <div>{detailAlbums.name} </div>
      {detailAlbums.photos &&
        detailAlbums.photo.map((photo, index) => {
          return (
            <p key={index}>
              <img src={photo.thumbnail}></img>
              <p>{photo.name}</p>
            </p>
          );
        })}
    </div>
  );
}
