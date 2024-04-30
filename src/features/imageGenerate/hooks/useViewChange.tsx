import { useState } from "react";

function useViewChange() {
  const [isGridView, setIsGridView] = useState<boolean>(true);

  const changeView = (gridView: boolean) => setIsGridView(gridView);

  return { isGridView, changeView };
}

export default useViewChange;
