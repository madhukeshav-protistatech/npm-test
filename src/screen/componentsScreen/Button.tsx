import React from "react";
import { FC } from "../../FC.type";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Components from "../../components/sideNavigation";
import "../../assets/css/custom.css";
import { Documents, DocumentSection, VButton, VcodeBox, ComponentsTitle } from "../../components/componentsCollection";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

SyntaxHighlighter.registerLanguage("jsx", jsx);

interface ButtonProps {}
export const Button: FC<ButtonProps> = (props) => {
  const codeString: any = `
  import React from "react";
  import { FC } from "../../FC.type";
  import { VButton } from "../../components/componentsCollection";
  import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

  interface ButtonProps {}
  export const Button: FC<ButtonProps> = (props) => {
  return (
          <>
            <VButton>Primary</VButton>

            <VButton color="#074EE8" fontColor="#fff" type="default-btn-m" startIcon={<FaChevronLeft />}>
              Primary
            </VButton>

            <VButton fontColor="#074EE8" type="outline-btn-m" endIcon={<FaChevronRight />}>
              Primary
            </VButton>

            <VButton color="#074EE8" type="text-btn-m" endIcon={<FaChevronRight />}>
              Primary
            </VButton>

            <VButton color="#074EE8" type="text-btn-l">
              Primary
            </VButton>
          </>
        );
  };
  export default Button;

  `;

  return (
    <>
      <Header />
      <div className="mainBlock_outer">
        <Components />
        <div className="mainBlock_component">
          <ComponentsTitle title="Button" para="A button displays a prominent message and related optional actions." />
          <div className="section_box">
            {/* design section */}
            <div className="componentview">
              <div className="componentsView_subdiv">
                <div className="component_saprate">
                  <VButton>Primary</VButton>
                </div>

                <div className="component_saprate">
                  <VButton color="#074EE8" fontColor="#fff" type="default-btn-m" startIcon={<FaChevronLeft />}>
                    Primary
                  </VButton>
                </div>

                <div className="component_saprate">
                  <VButton fontColor="#074EE8" type="outline-btn-m" endIcon={<FaChevronRight />}>
                    Primary
                  </VButton>
                </div>

                <div className="component_saprate">
                  <VButton color="#074EE8" type="text-btn-m" endIcon={<FaChevronRight />}>
                    Primary
                  </VButton>
                </div>

                <div className="component_saprate">
                  <VButton color="#074EE8" type="text-btn-l">
                    Primary
                  </VButton>
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
            <DocumentSection title="Button document" titleDetails="To modify the button, Please take the reference of our documents.">
              <Documents
                tag="color"
                discription="you can change the background color of the button using the 'color' attribute. Example [color='#074EE8']"
              />
              <Documents
                tag="fontColor"
                discription="you can change the font color of the button using the 'color' attribute. Example [fontColor='#074EE8']"
              />
              <Documents
                tag="Type"
                discription="You can change btn design using type attribute. which are following: 
                [type='default-btn-s'],[type='outline-btn-m'],[type='text-btn-m']. 
                default, outline and text is defined btn design. xs, s, m, l, xl defined btn size."
              />
              <Documents
                tag="endIcon"
                discription="You can add icon after the text in btn endIcon attribute.Example:[ endIcon={<FaPlus />} ].  For icon visit https://react-icons.github.io/react-icons and select Font Awesome"
              />
              <Documents
                tag="startIcon"
                discription="You can add icon before the text in btn endIcon attribute.Example:[ startIcon ={<FaPlus />} ].  For icon visit https://react-icons.github.io/react-icons and select Font Awesome"
              />
              <Documents
                tag="onClickEvent={() => Events()}"
                discription="You can make action like onclick, onchange. Example: [onClickEvent={() => this.handleClick()} ]"
              />
            </DocumentSection>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Button;
