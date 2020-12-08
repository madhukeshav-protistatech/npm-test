import React from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Components from "../../components/sideNavigation";
import "../../assets/css/custom.css";
import Welcome from "../../assets/media/welcome.png";
import { VButton, SubTitle, Paragraph, InputField, VcodeBox } from "../../components/componentsCollection";

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

SyntaxHighlighter.registerLanguage("jsx", jsx);

interface ConformationPageProps {}
export class ConformationPage extends React.Component<ConformationPageProps> {
  codeString: any = `
import React from "react";
import Welcome from "../../assets/media/welcome.png";
import { VButton, SubTitle, Paragraph } from "../../components/componentsCollection";

interface ConformationPageProps {}
export class ConformationPage extends React.Component<ConformationPageProps> {
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
            <div className="welcomeImg_div">
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
                <div className="input_section">
                  <InputField placeholder="" type="default-input-m" />
                </div>
                <div className="btn_section">
                  <VButton color="#074EE8" type="outline-btn-m">
                    Continue
                  </VButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ConformationPage;

  `;

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
                  <SubTitle text="Conformation message" />
                  <div className="welcomeImg_div">
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
                      <div className="input_section">
                        <InputField placeholder="" type="default-input-m" />
                      </div>
                      <div className="btn_section">
                        <VButton color="#074EE8" type="outline-btn-m">
                          Continue
                        </VButton>
                      </div>
                    </div>
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

export default ConformationPage;
