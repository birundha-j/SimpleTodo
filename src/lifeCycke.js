import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

const CancelToken = axios.CancelToken;

export default function LifeCycle() {
  const [showPage, togglePage] = React.useState(true);

  return (
    <div>
      <button onClick={() => togglePage(!showPage)}>
        Toggle Page component
      </button>
      {showPage ? <Page /> : null}
    </div>
  );
}

function Page() {
  const [image, setImage] = React.useState({
    index: 0,
    data: null
  });
  const cancelSource = React.useRef(null);

  React.useEffect(
    () => {
      console.log("loading dog...");

      cancelSource.current = CancelToken.source();

      axios
        .get("https://dog.ceo/api/breeds/image/random", {
          cancelToken: cancelSource.current.token
        })
        .then(({ data }) => {
          console.log("dog loaded...");
          setImage({ ...image, data: data.message });
        })
        .catch(err => {
          console.log("dog error...", err);
        });

      return () => {
        cancelSource.current.cancel();
      };
    },
    [image.index]
  );
  console.log(cancelSource.current, 'cancelSource.current')

  function reload() {
    console.log("reload()...");
    setImage({ data: null, index: image.index + 1 });
  }

  function reloadWithCancel() {
    console.log("reloadWithCancel()...");
    setImage({ data: null, index: image.index + 1 });

    setTimeout(() => {
      console.log("cancelling...");
      cancelSource.current.cancel();
    }, 50);
  }

  return (
    <div className="App">
      <p>
        <button onClick={reload}>Reload</button>
      </p>
      <p>
        <button onClick={reloadWithCancel}>cancel request</button>
      </p>
      <p>Dog:</p>
      <img src={image.data} />
    </div>
  );
}