import React from "react";
import "../assets/css/footer.css";
import { FC } from "../FC.type";
import { Link } from "react-router-dom";

interface FooterProps {}
const Footer: FC<FooterProps> = (props) => {
  return (
    <div className="footerOuter">
      <div className="innter_footer">
        <p className="footer_para">
          All right reserve&#169;
          <span>
            <Link className="footer_copyright_link" to="https://www.vouched.id/">
              Vouched.id
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;

// type FC<Props extends {}> = (props: Props, context?: any) => FC<any> | null | JSX.Element;
