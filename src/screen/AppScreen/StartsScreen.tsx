import React from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Components from "../../components/sideNavigation";
import "../../assets/css/starts.css";
import "../../assets/css/custom.css";
import Welcome from "../../assets/media/welcome.png";
import { VButton, SubTitle, Paragraph, VcodeBox } from "../../components/componentsCollection";

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

SyntaxHighlighter.registerLanguage("jsx", jsx);

interface StartPagepROPS {}
export class SatrtPage extends React.Component<StartPagepROPS> {
  codeString: any = `
import React from "react";
import Welcome from "../../assets/media/welcome.png";
import { VButton, SubTitle, Paragraph } from "../../components/componentsCollection";

interface StartPagepROPS {}
export class SatrtPage extends React.Component<StartPagepROPS> {
  constructor(props: any) {
    super(props);
    this.state = {
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("Hello");
  }
  render() {
    return (
      <>
        <div className="page_container">
          <div className="page_sub">
            <SubTitle text="Conformation message" />
            <div>
              <img src={Welcome} alt="Welcome" className="welcomeImg" />
            </div>
            <div className="allSetUp_div">
              <SubTitle text="You're all set up" />
              <Paragraph text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. " />
            </div>
            <div className="EmailSection">
              <SubTitle text="Save your digital id or somthing?" size="16px" />
              <SubTitle text="Email address" size="14px" color="#a9a9a9" />
              <div className="inputDiv">
                <InputField placeholder="" />
                <VButton color="#074EE8" type="outline-btn-m">
                  Continue
                </VButton>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SatrtPage;

  `;

  constructor(props: any) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("Hello");
  }
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
                  <div className="welcomeImg_div">
                    <img src={Welcome} alt="Welcome" className="welcomeImg" />
                  </div>
                  <div className="allSetUp_div">
                    <SubTitle text="Let us know who you are" />
                    <Paragraph
                      text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde accusantium corporis quibusdam ipsam illum ea, excepturi placeat,
                      dicta deleniti explicabo aut architecto quo error!"
                    />
                  </div>
                  <div className="buttonposition">
                    <VButton color="#074EE8" type="outline-btn-m" onClickEvent={() => this.handleClick()}>
                      Continue
                    </VButton>
                  </div>
                </div>
              </div>
            </div>
            {/* Code view on webpage*/}
            <VcodeBox>
              <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
                {this.codeString}
              </SyntaxHighlighter>
            </VcodeBox>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default SatrtPage;
