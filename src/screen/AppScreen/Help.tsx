import React from "react";
import { FC } from "../../FC.type";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Components from "../../components/sideNavigation";
import "../../assets/css/custom.css";
import { Documents, DocumentSection, VcodeBox, ComponentsTitle, VButton, IButton } from "../../components/componentsCollection";
import { VHelp } from "../componentsScreen/HelpComponent";
import { FaInfoCircle } from "react-icons/fa";

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

SyntaxHighlighter.registerLanguage("jsx", jsx);

interface VDropdownProps {}
export const Help: FC<VDropdownProps> = (props) => {
  const codeString: any = `
  import React from "react";
  import { FC } from "../../FC.type";
  import "../../assets/css/custom.css";
  import { VButton, IButton } from "../../components/componentsCollection";
  import { VHelp } from "../componentsScreen/HelpComponent";
  import { FaInfoCircle } from "react-icons/fa";

  interface VDropdownProps {}
  export const Help: FC<VDropdownProps> = (props) => {
  return (
          <>
            <VHelp color="#337ab7">
                <VButton color="#074EE8" fontColor="#fff" type="default-btn-m">
                  Help
                </VButton>
              </VHelp>

            <VHelp>
              <IButton color="#074EE8" type="text-icon-m">
                <FaInfoCircle />
              </IButton>
            </VHelp>
          </>
        );
  };
  export default Help;

  `;

  return (
    <>
      <Header />
      <div className="mainBlock_outer">
        <Components />
        <div className="mainBlock_component">
          <ComponentsTitle title="Dropdown" para="A dropdown displays a prominent message and related optional actions." />
          <div className="section_box">
            {/* design section */}
            <div className="componentview">
              <div className="componentsView_subdiv">
                <VHelp color="#337ab7">
                  <VButton color="#074EE8" fontColor="#fff" type="default-btn-m">
                    Help
                  </VButton>
                </VHelp>
              </div>

              <div className="componentsView_subdiv">
                <VHelp>
                  <IButton color="#074EE8" type="text-icon-m">
                    <FaInfoCircle />
                  </IButton>
                </VHelp>
              </div>
            </div>

            {/* Code view on webpage*/}
            <VcodeBox>
              <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
                {codeString}
              </SyntaxHighlighter>
            </VcodeBox>

            {/* Document Section */}
            <DocumentSection title="Dropdown document" titleDetails="To modify the dropdown, Please take the reference of our documents.">
              <Documents
                tag="color"
                discription="you can change the background color of the dropdown/option using the 'color' attribute. like [color='#074EE8']"
              />
            </DocumentSection>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Help;
