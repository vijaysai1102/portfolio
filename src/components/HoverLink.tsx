import "./styles/style.css";

interface HoverLinkProps {
  href: string;
  label: string;
  icon?: React.ReactNode;
}

const HoverLink = ({ href, label, icon }: HoverLinkProps) => {
  return (
    <a href={href} className="navbar-link hover-link" data-cursor="disable">
      {icon && <span className="hover-icon">{icon}</span>}
      <div className="hover-in">
        {label}
        <div>{label}</div>
      </div>
    </a>
  );
};

export default HoverLink;
