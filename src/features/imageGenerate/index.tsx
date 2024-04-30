import ImageGenerate from "./ImageGenerate";
import StateContextProvider from "./context/StateContext";

function ImagegenerateFeature() {
  return (
    <StateContextProvider>
      <ImageGenerate />
    </StateContextProvider>
  );
}

export default ImagegenerateFeature;
