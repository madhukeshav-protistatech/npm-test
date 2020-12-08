import React from "react";
import { FC } from "../../FC.type";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Components from "../../components/sideNavigation";
import "../../assets/css/custom.css";
import { DocumentSection, Documents, IButton, VcodeBox, ComponentsTitle } from "../../components/componentsCollection";
import { FaPlus } from "react-icons/fa";

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

SyntaxHighlighter.registerLanguage("jsx", jsx);

interface VIconButtonProps {}
export const VIconButton: FC<VIconButtonProps> = (props) => {
  const codeString: any = `
  import React from "react";
  import { FC } from "../../FC.type";
  import { IButton } from "../../components/componentsCollection";
  import { FaPlus } from "react-icons/fa";

  interface VIconButtonProps {}
  export const VIconButton: FC<VIconButtonProps> = (props) => {
  return (
          <>
            <IButton>
              <FaPlus />
            </IButton>
            <IButton color="#074EE8" IconColor="#fff" type="default-icon-m">
              <FaPlus />
            </IButton>
            <IButton color="#074EE8" type="outline-icon-m">
              <FaPlus />
            </IButton>
            <IButton color="#074EE8" type="text-icon-m">
              <FaPlus />
            </IButton>
          </>
        );
  };
  export default VIconButton;
  `;
  return (
    <>
      <Header />
      <div className="mainBlock_outer">
        <Components />
        <div className="mainBlock_component">
          <ComponentsTitle title="Icon Button" para="A icon button displays a prominent message and related optional actions." />
          <div className="section_box">
            <div className="componentview">
              <div className="componentsView_subdiv">
                <IButton>
                  <FaPlus />
                </IButton>

                <IButton color="#074EE8" IconColor="#fff" type="default-icon-m">
                  <FaPlus />
                </IButton>

                <IButton color="#074EE8" type="outline-icon-m">
                  <FaPlus />
                </IButton>

                <IButton color="#074EE8" type="text-icon-m">
                  <FaPlus />
                </IButton>
              </div>
            </div>

            {/* Code view on webpage*/}
            <VcodeBox>
              <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
                {codeString}
              </SyntaxHighlighter>
            </VcodeBox>

            {/* Document Section */}
            <DocumentSection title="Icon Button document" titleDetails="To modify the icon button, Please take the reference of our documents.">
              <Documents
                tag="color"
                discription="you can change the background color of the icon button using the 'color' attribute. like [color='#074EE8']"
              />
              <Documents
                tag="IconColor"
                discription="you can change the icon color of the icon button using the 'color' attribute. like [IconColor='#074EE8']"
              />
              <Documents
                tag="type"
                discription="You can change btn design using type attribute. which are following: 
                [type='default-icon-s'],[type='outline-icon-m'],[type='text-icon-l']. 
                default, outline and text is defined btn design. xs, s, m, l, xl defined btn size."
              />
              <Documents
                tag="onClickEvent={() => Events()}"
                discription="You can make action like onclick, onchange. Example: [onClickEvent={() => this.handleClick()} ]"
              />
              <Documents discription="For icon visit https://react-icons.github.io/react-icons and select Font Awesome" />
            </DocumentSection>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VIconButton;
