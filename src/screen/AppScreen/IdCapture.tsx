import React from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Components from "../../components/sideNavigation";
import "../../assets/css/custom.css";
import "../../assets/css/starts.css";
import { SubTitle } from "../../components/componentsCollection";
import Webcam from "react-webcam";

export class IdCapture extends React.Component<any> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: "React",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("Hello");
  }
  videoConstraints: any = {
    width: "100%",
    height: "100vh",
    facingMode: "user",
  };
  render() {
    return (
      <>
        <Header />
        <div className="mainBlock_outer">
          <Components />
          <div className="mainBlock_component">
            <div className="mobile_dimen">
              <div className="page_container">
                <div className="page_sub">
                  <SubTitle text="Welcome message" />
                  <Webcam videoConstraints={this.videoConstraints} style={{ height: "100%" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default IdCapture;
