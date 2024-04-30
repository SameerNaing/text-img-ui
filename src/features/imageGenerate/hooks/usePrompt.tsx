import { useState, useEffect } from "react";

function usePrompt() {
  const [prompt, setPrompt] = useState<string>("");
  const [enableSendBtn, setEnableSendBtn] = useState<boolean>(false);

  const selectSuggestionText = (text: string) => setPrompt(text);

  useEffect(() => {
    setEnableSendBtn(prompt.trim().length > 0);
  }, [prompt]);

  return { prompt, enableSendBtn, setPrompt, selectSuggestionText };
}

export default usePrompt;
