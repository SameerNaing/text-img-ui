import styles from "./index.module.css";

import suggestions from "./data";

interface Props {
  onSelect(val: string): void;
}

function SuggestionText(props: Props) {
  return (
    <div className={styles.suggestionsContainer}>
      {suggestions.map((i, idx) => (
        <p
          className={styles.suggestionText}
          onClick={props.onSelect.bind(null, i)}
          key={idx + "_"}
        >
          {i}
        </p>
      ))}
    </div>
  );
}

export default SuggestionText;
