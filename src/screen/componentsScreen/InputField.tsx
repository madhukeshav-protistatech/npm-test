import React from "react";
import { FC } from "../../FC.type";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Components from "../../components/sideNavigation";
import "../../assets/css/custom.css";
import { InputField, DocumentSection, Documents, VcodeBox, ComponentsTitle } from "../../components/componentsCollection";

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

SyntaxHighlighter.registerLanguage("jsx", jsx);

interface VInputFieldProps {}
export const VInputField: FC<VInputFieldProps> = (props) => {
  const codeString: any = `
  import React from "react";
  import { FC } from "../../FC.type";
  import { InputField } from "../../components/componentsCollection";

  interface VInputFieldProps {}
  export const VInputField: FC<VInputFieldProps> = (props) => {
  return (
          <>
            <InputField placeholder="Name" borderColor="#aaa" fontColor="#000" type="default-input-m" HideInput={true} />
           
            <InputField placeholder="Name" color="#aaa" borderColor="#aaa" fontColor="#aaa" type="default-input-m" HideInput={false} />
            
            <InputField placeholder="Name" borderColor="#074EE8" fontColor="#074EE8" type="default-input-m" HideInput={false} />
            
            <InputField placeholder="Name" type="default-input-m" show={false} />
          </>
        );
  };
  export default VInputField;

  `;
  return (
    <>
      <Header />
      <div className="mainBlock_outer">
        <Components />
        <div className="mainBlock_component">
          <ComponentsTitle title="Input field" para="A input field displays a prominent message and related optional actions." />
          <div className="section_box">
            <div className="componentview">
              <div className="componentsView_section">
                <InputField placeholder="Name" borderColor="#aaa" fontColor="#000" type="default-input-m" HideInput={true} />
                <br />
                <InputField placeholder="Name" color="#aaa" borderColor="#aaa" fontColor="#aaa" type="default-input-m" HideInput={false} />
                <br />
                <InputField placeholder="Name" borderColor="#074EE8" fontColor="#074EE8" type="default-input-m" HideInput={false} />
                <br />
                <InputField placeholder="Name" type="default-input-m" HideInput={false} />
              </div>
            </div>

            {/* Code view on webpage*/}
            <VcodeBox>
              <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
                {codeString}
              </SyntaxHighlighter>
            </VcodeBox>

            {/* Document Section */}
            <DocumentSection title="Input field document" titleDetails="To modify the icon button, Please take the reference of our documents.">
              <Documents
                tag="color"
                discription="you can change the background color of the input field using the 'color' attribute. like [color='#074EE8']"
              />
              <Documents
                tag="fontColor"
                discription="you can change the font color of the input field using the 'color' attribute. like [fontColor='#074EE8']"
              />
              <Documents
                tag="borderColor"
                discription="you can change the border color of the input field using the 'color' attribute. like [borderColor='#074EE8']"
              />
              <Documents tag="HideInput" discription="Here you use show/hide input text using 'HideInput' tag. Example: [ HideInput={true}]" />
              <Documents
                tag="type"
                discription="You can change or modify size of input field using type attribute. Example: 
                [type='default-input-xs'], [type='default-input-s'], [type='default-input-m'], [type='default-input-l'], [type='default-input-xl'].  xs, s, m, l, xl defined btn size."
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

export default VInputField;
