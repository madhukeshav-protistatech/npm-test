import React from "react";
import { FC } from "../../FC.type";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Components from "../../components/sideNavigation";
import "../../assets/css/custom.css";
import { VButton, IButton, DocumentSection, Documents, VcodeBox, ComponentsTitle, Tooltip } from "../../components/componentsCollection";

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FaInfoCircle } from "react-icons/fa";

SyntaxHighlighter.registerLanguage("jsx", jsx);

interface VTooltipProps {}
export const VTooltip: FC<VTooltipProps> = (props) => {
  const codeString: any = `
  import React from "react";
  import { FC } from "../../FC.type";
  import { VButton, IButton, Tooltip } from "../../components/componentsCollection";


  interface VTooltipProps{}
  export const VTooltip: FC<VTooltipProps> = (props) => {
  return (
          <>
            <Tooltip>
                    <p>Tooltip</p>
            </Tooltip>

            <Tooltip>
              <IButton color="#074EE8" type="text-icon-m"><FaInfoCircle /></IButton>
            </Tooltip>

            <Tooltip
              type="right" background="#074ee8"  HeaderColor="#fff" ParaColor="#fff" HeaderSize="24px" 
              ParaSize="14px" HeadText="Heading"  ParaText="This is paragraph"
            >
                    <VButton>Primary</VButton>
            </Tooltip>
          </>
        );
  };
  export default VTooltip;

  `;
  return (
    <>
      <Header />
      <div className="mainBlock_outer">
        <Components />
        <div className="mainBlock_component">
          <ComponentsTitle title="Tooltip" para="A Tooltip displays a prominent message and related optional actions." />
          <div className="section_box">
            <div className="componentview" style={{ backgroundColor: "#f5f5f5" }}>
              <div className="componentsView_subdiv">
                <div className="component_saprate">
                  <Tooltip>
                    <IButton color="#074EE8" type="text-icon-m">
                      <FaInfoCircle />
                    </IButton>
                  </Tooltip>
                </div>

                <div className="component_saprate">
                  <Tooltip
                    type="right"
                    color="#074ee8"
                    HeaderColor="#fff"
                    ParaColor="#fff"
                    HeaderSize="24px"
                    ParaSize="14px"
                    HeadText="Heading"
                    ParaText="This is paragraph"
                  >
                    <VButton>Primary</VButton>
                  </Tooltip>
                </div>

                <div className="component_saprate">
                  <Tooltip>
                    <p>Tooltip</p>
                  </Tooltip>
                </div>
              </div>
            </div>

            {/* Code view on webpage*/}
            <VcodeBox>
              <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
                {codeString}
              </SyntaxHighlighter>
            </VcodeBox>

            {/* Document Section */}
            <DocumentSection title="Tooltip document" titleDetails="To modify the Tooltip, Please take the reference of our documents.">
              <Documents
                tag="color"
                discription="you can change the background of the Tooltip Bar using the 'color' attribute. like [color='#074ee8']"
              />
              <Documents
                tag="HeaderColor"
                discription="you can change the header Color of the Tooltip Bar using the 'HeaderColor' attribute. like [HeaderColor='#074EE8']"
              />
              <Documents
                tag="ParaColor"
                discription="you can change the color of the Tooltip Bar using the 'ParaColor' attribute. like [ParaColor='#074EE8']"
              />
              <Documents
                tag="HeaderSize"
                discription="you can change the header font Size of the Tooltip Bar using the 'HeaderSize' attribute. like [HeaderSize='18px']"
              />
              <Documents
                tag="ParaSize"
                discription="you can change the para font Size of the Tooltip Bar using the 'ParaSize' attribute. like [ParaSize='18px']"
              />
              <Documents
                tag="HeadText"
                discription="you can change the head content of the Tooltip Bar using the 'HeadText' attribute. like [HeadText='This is header']"
              />
              <Documents
                tag="ParaText"
                discription="you can change the paragraph content of the Tooltip Bar using the 'ParaText' attribute. like [ParaText='This is paragraph']"
              />
              <Documents
                tag="type"
                discription="You can change btn design using type attribute. which are following: 
                [type='top'],[type='right'],[type='bottom'], [type='left']."
              />
            </DocumentSection>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VTooltip;
