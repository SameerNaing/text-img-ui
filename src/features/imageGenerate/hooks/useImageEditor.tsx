import { useState, useRef, useEffect } from "react";
import { ImageEditorStates } from "../types";

function useImageEditor() {
  const ROTATION_DEGREE = 30;

  const editorRef = useRef<any>(null);

  const [rotation, setRotation] = useState<number>(0);

  const [editorStates, setEditorStates] = useState<ImageEditorStates>({
    flipX: false,
    flipY: false,
    greyScale: false,
    sepia1: false,
    sepia2: false,
    invert: false,
    blur: false,
    sharpen: false,
    emboss: false,
  });

  const flipX = () => {
    const editorInstance = editorRef.current.getInstance();
    editorInstance.flipX();

    setEditorStates((prev) => ({ ...prev, flipX: !prev.flipX }));
  };
  const flipY = () => {
    const editorInstance = editorRef.current.getInstance();
    editorInstance.flipY();

    setEditorStates((prev) => ({ ...prev, flipY: !prev.flipY }));
  };

  const rotateRight = () => {
    let r = 0;
    if (rotation < 360) {
      r = rotation + ROTATION_DEGREE;
    }

    const editorInstance = editorRef.current.getInstance();
    editorInstance.setAngle(r);
    setRotation(r);
  };

  const rotateLeft = () => {
    let r = 0;
    if (rotation > -360) {
      r = rotation - ROTATION_DEGREE;
    }
    const editorInstance = editorRef.current.getInstance();
    editorInstance.setAngle(r);
    setRotation(r);
  };

  const greyScale = () => {
    const filterName = "Grayscale";
    const editorInstance = editorRef.current.getInstance();

    if (editorStates.greyScale) {
      editorInstance.removeFilter(filterName);
    } else {
      editorInstance.applyFilter(filterName);
    }

    setEditorStates((prev) => ({ ...prev, greyScale: !prev.greyScale }));
  };

  const sepia1 = () => {
    const filterName = "Sepia";

    const editorInstance = editorRef.current.getInstance();

    if (editorStates.sepia1) {
      editorInstance.removeFilter(filterName);
    } else {
      editorInstance.applyFilter(filterName);
    }

    setEditorStates((prev) => ({ ...prev, sepia1: !prev.sepia1 }));
  };

  const sepia2 = () => {
    const filterName = "Sepia2";

    const editorInstance = editorRef.current.getInstance();

    if (editorStates.sepia2) {
      editorInstance.removeFilter(filterName);
    } else {
      editorInstance.applyFilter(filterName);
    }

    setEditorStates((prev) => ({ ...prev, sepia2: !prev.sepia2 }));
  };

  const invert = () => {
    const filterName = "Invert";

    const editorInstance = editorRef.current.getInstance();

    if (editorStates.invert) {
      editorInstance.removeFilter(filterName);
    } else {
      editorInstance.applyFilter(filterName);
    }

    setEditorStates((prev) => ({ ...prev, invert: !prev.invert }));
  };

  const blur = () => {
    const filterName = "Blur";

    const editorInstance = editorRef.current.getInstance();

    if (editorStates.blur) {
      editorInstance.removeFilter(filterName);
    } else {
      editorInstance.applyFilter(filterName);
    }

    setEditorStates((prev) => ({ ...prev, blur: !prev.blur }));
  };

  const sharpen = () => {
    const filterName = "Sharpen";

    const editorInstance = editorRef.current.getInstance();

    if (editorStates.sharpen) {
      editorInstance.removeFilter(filterName);
    } else {
      editorInstance.applyFilter(filterName);
    }

    setEditorStates((prev) => ({ ...prev, sharpen: !prev.sharpen }));
  };

  const emboss = () => {
    const filterName = "Emboss";

    const editorInstance = editorRef.current.getInstance();

    if (editorStates.emboss) {
      editorInstance.removeFilter(filterName);
    } else {
      editorInstance.applyFilter(filterName);
    }

    setEditorStates((prev) => ({ ...prev, emboss: !prev.emboss }));
  };

  useEffect(() => {
    if (editorRef === null) return;
    const editorInstance = editorRef.current.getInstance();
    editorInstance.loadImageFromURL(
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=1425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "img1"
    );

    const parentDiv = document.querySelector(
      ".tui-image-editor-canvas-container"
    )?.parentElement;

    if (parentDiv) {
      parentDiv.style.width = "100%"; // Adjust width as needed
      parentDiv.style.height = "100%"; // Adjust height as needed
    }
    // console.log(parentDiv);
  }, [editorRef]);

  return {
    editorRef,
    editorStates,
    flipX,
    flipY,
    rotateLeft,
    rotateRight,
    greyScale,
    sepia1,
    sepia2,
    invert,
    blur,
    sharpen,
    emboss,
  };
}

export default useImageEditor;
