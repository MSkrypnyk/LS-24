export const Button = ({
  link,
  className,
  variant,
  label,
  children,
  ...props
}) => {
  const renderClass = () => {
    switch (variant) {
      case "primary":
        return `btn watch-btn ${className || ""}`;

    }
  };

  const Element = link ? "a" : "button";

  return (
    <Element href={link} className={renderClass()} {...props}>
      {label || children}
    </Element>
  );
};
