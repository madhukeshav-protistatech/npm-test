import React from "react";
import { FC } from "../../FC.type";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Components from "../../components/sideNavigation";
import "../../assets/css/custom.css";
import { TextArea, DocumentSection, Documents, VcodeBox, ComponentsTitle } from "../../components/componentsCollection";

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

SyntaxHighlighter.registerLanguage("jsx", jsx);

interface VTextAreaProps {}
export const VTextArea: FC<VTextAreaProps> = (props) => {
  const codeString: any = `
  import React from "react";
  import { FC } from "../../FC.type";
  import { TextArea } from "../../components/componentsCollection";

  interface VTextAreaProps {}
  export const VTextarea: FC<VTextAreaProps> = (props) => {
  return (
          <>
            <TextArea />
            <TextArea type="textarea-small" />
            <TextArea type="textarea-medium" />
            <TextArea type="textarea-large" />
            <TextArea type="textarea-Verylarge" />
          </>
        );
  };
  export default VTextarea;

  `;
  return (
    <>
      <Header />
      <div className="mainBlock_outer">
        <Components />
        <div className="mainBlock_component">
          <ComponentsTitle title="Textarea" para="A Textarea displays a prominent message and related optional actions." />
          <div className="section_box">
            <div className="componentview">
              <div className="componentsView_section">
                <TextArea />
                <TextArea type="default-textarea-s" />
                <TextArea type="default-textarea-xl" color="#aaa" fontColor="#fff" size="18px" borderColor="#aaa" height="60px" />
              </div>
            </div>

            {/* Code view on webpage*/}
            <VcodeBox>
              <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
                {codeString}
              </SyntaxHighlighter>
            </VcodeBox>

            {/* Document Section */}
            <DocumentSection title="Textarea document" titleDetails="To modify the Textarea, Please take the reference of our documents.">
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
              <Documents tag="size" discription="you can change the font size of the input field using the 'size' attribute. like [size='#074EE8']" />
              <Documents
                tag="height"
                discription="you can change the textarea height of the input field using the 'height' attribute. like [height='#074EE8']"
              />
              <Documents
                tag="type"
                discription="You can change or modify size of input field using type attribute. Example: 
                [type='default-textarea-xs'], [type='default-textarea-s'], [type='default-textarea-m'], [type='default-textarea-l'], [type='default-textarea-xl'].  xs, s, m, l, xl defined btn size."
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

export default VTextArea;
