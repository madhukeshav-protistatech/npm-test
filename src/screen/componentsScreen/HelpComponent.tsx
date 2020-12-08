import React from "react";
import "../../assets/css/custom.css";
import { Title, Paragraph, Dropdown, VLabel } from "../../components/componentsCollection";
import { CountryList } from "../../components/CountryList";
import { FaTimesCircle } from "react-icons/fa";

interface HelpProps {
  children: JSX.Element | JSX.Element[];
  color?: string;
}
interface HelpState {
  display: string;
}
export class VHelp extends React.Component<HelpProps, HelpState> {
  constructor(props: HelpProps | Readonly<HelpProps>) {
    super(props);
    this.state = {
      display: "none",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ display: this.state.display === "none" ? "block" : "none" });
  }
  render() {
    return (
      <>
        <div id="overlay" style={{ display: this.state.display, backgroundColor: this.props.color ? this.props.color : "rgb(64 64 64)" }}>
          <div className="hoverlay_div">
            <div className="header_title">
              <div className="closeIcon">
                <Paragraph align="left" fontColor="#fff" size="18px" text="Overlay helper" />
                <span className="hoverlay_close" onClick={this.handleClick}>
                  <FaTimesCircle />
                </span>
              </div>
            </div>

            <div className="help_container">
              <Title text="Helper title text" />
              <Paragraph
                fontColor="#fff"
                align="left"
                size="16px"
                text="Select your country for a list of accepted IDs. Lorem ipsum dolor sit amet, 
                consec tetur adipiscing elit. Nam condimentum"
              />
              <div className="dropdown_div">
                <VLabel text="Country" size="16px" />
                <Dropdown name="Select your country" type="default-dropdown-l" fontColor="#000" borderColor="#aaa">
                  <CountryList />
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
        <div onClick={() => this.handleClick()}>{this.props.children}</div>
      </>
    );
  }
}

export default VHelp;
