import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
export default function Album(props) {
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/albums")
      .then((resp) => resp.json())
      .then((data) => {
        setAlbums(data);
      });
  }, []);
  return (
    <div className="App">
      {albums.map((album) => {
        return (
          <p key={album.id}>
            <div className="photos">
              <Link to={`detail/${album.id}`}>
                <img src={album.thumbnail} height="100px" width="100px"></img>
                <span>{album.name}</span>
              </Link>
            </div>
          </p>
        );
      })}
    </div>
  );
}
