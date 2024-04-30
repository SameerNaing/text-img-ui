type ImageEditorStates = {
  flipX: boolean;
  flipY: boolean;
  greyScale: boolean;
  sepia1: boolean;
  sepia2: boolean;
  invert: boolean;
  blur: boolean;
  sharpen: boolean;
  emboss: boolean;
};

type StateContextType = {
  isGridView: boolean;
  prompt: string;
  enableSendBtn: boolean;
  editorRef: any;
  editorStates: ImageEditorStates;
  flipX(): void;
  flipY(): void;
  greyScale(): void;
  sepia1(): void;
  sepia2(): void;
  invert(): void;
  blur(): void;
  sharpen(): void;
  emboss(): void;
  rotateRight(): void;
  rotateLeft(): void;
  setPrompt(value: string): void;
  changeView(value: boolean): void;
};

export type { StateContextType, ImageEditorStates };
