import { useContext, useState, createContext, FC, ReactNode } from "react";

import type { StateContextType } from "../types";

import useViewChange from "../hooks/useViewChange";
import usePrompt from "../hooks/usePrompt";
import useImageEditor from "../hooks/useImageEditor";

const StateContext = createContext<StateContextType | null>(null);

function useStateContext() {
  return useContext(StateContext) as StateContextType;
}

const StateContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { isGridView, changeView } = useViewChange();
  const { prompt, setPrompt, enableSendBtn } = usePrompt();
  const imageEditorHook = useImageEditor();

  return (
    <StateContext.Provider
      value={{
        prompt,
        isGridView,
        enableSendBtn,
        editorRef: imageEditorHook.editorRef,
        editorStates: imageEditorHook.editorStates,
        flipX: imageEditorHook.flipX,
        flipY: imageEditorHook.flipY,
        rotateRight: imageEditorHook.rotateRight,
        rotateLeft: imageEditorHook.rotateLeft,
        greyScale: imageEditorHook.greyScale,
        sepia1: imageEditorHook.sepia1,
        sepia2: imageEditorHook.sepia2,
        invert: imageEditorHook.invert,
        blur: imageEditorHook.blur,
        sharpen: imageEditorHook.sharpen,
        emboss: imageEditorHook.emboss,
        setPrompt,
        changeView,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default StateContextProvider;
export { useStateContext };
