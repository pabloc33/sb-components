import "./MyLabel.css";

interface Props {
  /**
   * Text to display
   */
  label: string;

  /**
   * Label size
   */
  size?: "normal" | "h1" | "h2" | "h3";
  /**
   * Muestra el texto capitalizado
   */
  allCaps?: boolean;
  /**
   * Muestra el texto con los colores personalizados
   */
  color?: "text-primary" | "text-secondary" | "text-tertiary";
  /**
   * Muestra el texto por elección por paleta
   */
  fontColor?: string;
}

export const MyLabel = ({
  label,
  size = "normal",
  allCaps = false,
  color = "text-primary",
  fontColor,
}: Props) => {
  return (
    <span
      className={`${size} ${color}`}
      style={{
        color: fontColor,
      }}
    >
      {" "}
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
