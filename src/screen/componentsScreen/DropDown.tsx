import React from "react";
import { FC } from "../../FC.type";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Components from "../../components/sideNavigation";
import "../../assets/css/custom.css";
import { Documents, DocumentSection, VcodeBox, ComponentsTitle, Dropdown, VOption } from "../../components/componentsCollection";
import { CountryList } from "../../components/CountryList";

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

SyntaxHighlighter.registerLanguage("jsx", jsx);

interface VDropdownProps {}
export const VDropdown: FC<VDropdownProps> = (props) => {
  const codeString: any = `
  import React from "react";
  import { FC } from "../../FC.type";
  import { Dropdown, VOption } from "../../components/componentsCollection";
  import { CountryList } from "../../components/CountryList";

  interface VDropdownProps {}
  export const VDropdown: FC<VDropdownProps> = (props) => {
  return (
          <>
            <Dropdown name="Select your country" type="default-dropdown-m" fontColor="#074EE8" borderColor="#074EE8">
              <CountryList />
            </Dropdown>

            <Dropdown name="Select your country" color="#aaa" FontColor="#fff">
              <VOption text="Option 1" color="#aaa" FontColor="#fff" />
              <VOption text="Option 2" color="#aaa" FontColor="#fff" />
              <VOption text="Option 3" color="#aaa" FontColor="#fff" />
            </Dropdown>
          </>
        );
  };
  export default VDropdown;

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
                <Dropdown name="Select your country" type="default-dropdown-m" fontColor="#074EE8" borderColor="#074EE8">
                  <CountryList />
                </Dropdown>
              </div>

              <div className="componentsView_subdiv">
                <Dropdown name="Select your country" color="#aaa" fontColor="#fff">
                  <VOption text="Option 1" color="#aaa" fontColor="#fff" />
                  <VOption text="Option 2" color="#aaa" fontColor="#fff" />
                  <VOption text="Option 3" color="#aaa" fontColor="#fff" />
                </Dropdown>
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
              <Documents
                tag="fontColor"
                discription="you can change the font color of the dropdown/option using the 'fontColor' attribute. like [fontColor='#074EE8']"
              />
              <Documents
                tag="borderColor"
                discription="you can change the border color of the dropdown/option using the 'borderColor' attribute. like [borderColor='#074EE8']"
              />
              <Documents
                tag="Type"
                discription="You can change btn design using type attribute. which are following: 
                [type='default-dropdown-s'], [type='default-dropdown-s'], [type='default-dropdown-s'], [type='default-dropdown-s'], [type='default-dropdown-s']. default is defined dropdown design. xs, s, m, l, xl defined btn size."
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

export default VDropdown;
