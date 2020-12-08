import React from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Components from "../../components/sideNavigation";
import "../../assets/css/custom.css";
import { VProgress, DocumentSection, Documents, VcodeBox, ComponentsTitle, VButton } from "../../components/componentsCollection";

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

SyntaxHighlighter.registerLanguage("jsx", jsx);

interface VProgressBarProps {}
interface VProgressBarState {
  value: number;
}
export class VProgressBar extends React.Component<VProgressBarProps, VProgressBarState> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ value: this.state.value === 100 ? this.state.value : this.state.value + 5 });
  }
  codeString: any = `
  import React from "react";
  import { FC } from "../../FC.type";
  import "../../assets/css/custom.css";
  import Components from "../../components/sideNavigation";

  export class VProgressBar extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ value: this.state.value === 100 ? this.state.value : this.state.value + 5 });
  }


  export const VProgressBar: FC<any> = (props) => {
  render() {
    return (
          <>
            <VProgress done={this.state.value} />

            <VButton onClickEvent={() => this.handleClick()} type="outline-btn-m">
              Click Here
            </VButton>
          </>
        );
    }
  };
  export default VProgressBar;

  `;
  render() {
    return (
      <>
        <Header />
        <div className="mainBlock_outer">
          <Components />
          <div className="mainBlock_component">
            <ComponentsTitle title="Progress Bar" para="A Progress Bar displays a prominent message and related optional actions." />
            <div className="section_box">
              <div className="componentview" style={{ backgroundColor: "#f5f5f5" }}>
                <div className="componentsView_section2">
                  <div className="Componetnts_sdiv">
                    <VProgress done={this.state.value} />
                  </div>

                  <div className="Componetnts_sdiv">
                    <VButton onClickEvent={() => this.handleClick()} type="outline-btn-m">
                      Click Here
                    </VButton>
                  </div>
                </div>
              </div>

              {/* Code view on webpage*/}
              <VcodeBox>
                <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
                  {this.codeString}
                </SyntaxHighlighter>
              </VcodeBox>

              {/* Document Section */}
              <DocumentSection title="Progress Bar document" titleDetails="To modify the Progress Bar, Please take the reference of our documents.">
                <Documents
                  tag="color"
                  discription="you can change the color of the Progress Bar using the 'color' attribute. Example [color='#074EE8']"
                />
                <Documents
                  tag="height"
                  discription="Here you can change or modify the height of Progress Bar using size tag. Example: [ height='24px' ]"
                />
              </DocumentSection>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default VProgressBar;
