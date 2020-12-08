import React from "react";
// import React, { MouseEventHandler } from "react";
import "../assets/css/style.css";
import "../assets/css/componentsCollection.css";
import { FC } from "../FC.type";
import { FaEyeSlash, FaEye } from "react-icons/fa";
// import { stringify } from "querystring";
// import { IconType } from "react-icons";
// import { FontawesomeObject, Icon, IconDefinition, IconProp } from "@fortawesome/fontawesome-svg-core";
// import { EventType } from "@testing-library/react";
// import { IconType } from "react-icons";

//Input box with or without icon
interface InputFieldProps {
  HideInput?: boolean;
  type?: string;
  color?: string;
  fontColor?: string;
  borderColor?: string;
  placeholder?: string;
  InputVal?: any;
  className?: string;
  onClickEvent?: any;
}
interface InputFieldstate {
  InputVal?: any;
  showpass?: boolean;
  className?: string;
}
export class InputField extends React.Component<InputFieldProps, InputFieldstate> {
  constructor(props: InputFieldProps | Readonly<InputFieldProps>) {
    super(props);
    this.state = {
      InputVal: this.props.HideInput ? "password" : "text",
      showpass: false,
      className: this.props.type ? `inputfield ${this.props.type}` : "inputfield default-input-s",
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    if (this.state.InputVal === "password") {
      this.setState({ InputVal: "text", showpass: true });
    } else {
      this.setState({ InputVal: "password", showpass: false });
    }
  }

  InputStyle = {
    backgroundColor: this.props.color ? this.props.color : "transparent",
    color: this.props.fontColor ? this.props.fontColor : "#074EE8",
    borderColor: this.props.borderColor ? this.props.borderColor : "#aaa",
  };

  render() {
    return (
      <div className="input_div">
        <input
          className={this.state.className}
          type={this.state.InputVal}
          placeholder={this.props.placeholder ? this.props.placeholder : ""}
          style={this.InputStyle}
          onClick={this.props.onClickEvent}
        />
        <span className={this.props.HideInput ? "inputfield_Icon" : "hideEyeIcon"}>
          {this.state.showpass ? <FaEyeSlash onClick={this.handleClick} /> : <FaEye onClick={this.handleClick} />}
        </span>
      </div>
    );
  }
}

//Dropdown option
interface VOptionProps {
  color?: string;
  fontColor?: string;
  text: string;
  onClickEvent?: any;
  // onClick?: MouseEventHandler<T>;
  // onClickEvent?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const VOption: FC<VOptionProps> = (props) => {
  const OptionStyle = {
    backgroundColor: props.color ? props.color : "#fff",
    color: props.fontColor ? props.fontColor : "#074EE8",
  };

  return (
    <option style={OptionStyle} value={props.text ? props.text : ""} onClick={props.onClickEvent}>
      {props.text ? props.text : ""}
    </option>
  );
};

//Title
interface titleProps {
  text: string;
}
export const Title: FC<titleProps> = (props) => {
  return (
    <>
      <h1 className="title_h">{props.text}</h1>
    </>
  );
};

//Dropdown
interface DropdownProps {
  color?: string;
  fontColor?: string;
  borderColor?: string;
  // onClickEvent?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onClickEvent?: any;
  name?: string;
  type?: string;
  children: JSX.Element | JSX.Element[];
}
export const Dropdown: FC<DropdownProps> = (props) => {
  const CustomStyle = {
    backgroundColor: props.color ? props.color : "#fff",
    color: props.fontColor ? props.fontColor : "##000",
    borderColor: props.borderColor ? props.borderColor : props.fontColor,
  };

  return (
    <select
      className={props.type ? `dropdown-select ${props.type}` : "dropdown-select default-dropdown-m"}
      style={CustomStyle}
      onClick={props.onClickEvent}
    >
      <option disabled selected hidden>
        {props.name ? props.name : "Please Select"}
      </option>
      {props.children}
    </select>
  );
};

//Progressbar
interface VProgressProps {
  color?: string;
  height?: string;
  done: number;
}
export const VProgress: FC<VProgressProps> = ({ done }, props) => {
  const [style, setStyle] = React.useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
      backgroundColor: props.color ? props.color : "#074ee8",
    };

    setStyle(newStyle);
  }, 200);

  return (
    <div className="progress" style={{ height: props.height ? props.height : "10px" }}>
      <div className="progress-done" style={style}></div>
    </div>
  );
};

//Tooltip
interface TootipProps {
  HeaderColor?: string;
  HeaderSize?: String;
  ParaColor?: string;
  ParaSize?: string;
  type?: string;
  children: JSX.Element | JSX.Element[];
  color?: string;
  HeadText?: string;
  ParaText?: string;
}
export const Tooltip: FC<TootipProps> = (props) => {
  const headStyle = {
    color: props.HeaderColor ? props.HeaderColor : "#000",
    fontSize: props.HeaderSize ? props.HeaderSize : "18px",
  };
  const paraStyle = {
    color: props.ParaColor ? props.ParaColor : "#000",
    fontSize: props.ParaSize ? props.ParaSize : "12px",
  };

  let className = "top";
  if (props.type) {
    className = props.type ? props.type : "top";
  }

  return (
    <div className="tooltip">
      {props.children}
      <div className={className} style={{ backgroundColor: props.color ? props.color : "#eeeeee" }}>
        <h3 style={headStyle}>{props.HeadText ? props.HeadText : "Vouched"}</h3>
        <p style={paraStyle}>{props.ParaText ? props.ParaText : "This is paragraph"}</p>
        {/* <i style={{ color: props.background ? props.background : "#eeeeee" }}></i> */}
      </div>
    </div>
  );
};

// Subheading ang subtitle
interface componentsTitleProps {
  title?: String;
  para?: String;
}
export const ComponentsTitle: FC<componentsTitleProps> = (props) => {
  return (
    <div>
      <h2 className="componentsHeading">{props.title}</h2>
      <p className="componentsPara">{props.para}</p>
    </div>
  );
};

// Heading and subtitle
interface SectionTitleProps {
  title?: string;
  para?: string;
}
export const SectionTitle: FC<SectionTitleProps> = (props) => {
  return (
    <div>
      <h2 className="sectionTitle_Heading">{props.title}</h2>
      <p className="sectionTitle_Para">{props.para}</p>
    </div>
  );
};

// Show code box
interface VcodeBoxProps {
  children: JSX.Element | JSX.Element[];
}
export const VcodeBox: FC<VcodeBoxProps> = (props) => {
  return (
    <div>
      <div className="codeBox">{props.children}</div>
    </div>
  );
};

// For Document
interface DocTagParaProps {
  text: String;
}
export const DocTagPara: FC<DocTagParaProps> = (props) => {
  return <span className="code_inLine">{props.text}</span>;
};

// Division
interface VouchedDivProps {
  modelType: string;
  children: JSX.Element | JSX.Element[];
}
export const VouchedDiv: FC<VouchedDivProps> = (props) => {
  return <div className={props.modelType}>{props.children}</div>;
};

// Button with and without icon
interface VButtonProps {
  color?: string;
  type?: string;
  fontColor?: string;
  startIcon?: JSX.Element | JSX.Element[];
  endIcon?: JSX.Element | JSX.Element[];
  children: string;
  onClickEvent?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
export const VButton: FC<VButtonProps> = (props) => {
  const BtnStyle = {
    backgroundColor: props.color ? props.color : "#074EE8",
    color: props.fontColor ? props.fontColor : "",
  };
  let className = "Btn default-btn-m";
  if (props.type) {
    className = `Btn ${props.type}`;
  }

  return (
    <button className={className} style={BtnStyle} onClick={props.onClickEvent}>
      {props.startIcon ? <span className="btnStartIcon">{props.startIcon}</span> : ""}
      {props.children}
      {props.endIcon ? <span className="btnEndIcon">{props.endIcon}</span> : ""}
    </button>
  );
};

// Icon button
interface IButtonProps {
  color?: string;
  IconColor?: string;
  type?: string;
  children: JSX.Element | JSX.Element[];
  onClickEvent?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
export const IButton: FC<IButtonProps> = (props) => {
  const IconStyle = {
    backgroundColor: props.color ? props.color : "#074EE8",
    color: props.IconColor ? props.IconColor : "",
  };
  let className = "icon_Btn default-icon-m";
  if (props.type) {
    className = `icon_Btn ${props.type}`;
  }
  return (
    <button className={className} style={IconStyle} onClick={props.onClickEvent}>
      {props.children}
    </button>
  );
};

// Sub Title
interface SubTitleProps {
  color?: string;
  size?: string;
  text: string;
}
export const SubTitle: FC<SubTitleProps> = (props) => {
  return (
    <p className="title_para" style={{ color: props.color ? props.color : "#000", fontSize: props.size ? props.size : "" }}>
      {props.text}
    </p>
  );
};

// paragraph
interface ParagraphProps {
  fontColor?: string;
  size?: string;
  align?: string;
  text: string;
}
export const Paragraph: FC<ParagraphProps> = (props) => {
  return (
    <p
      className="Paragraph_simple"
      style={{ color: props.fontColor ? props.fontColor : "", fontSize: props.size ? props.size : "", textAlign: props.align ? props.align : "" }}
    >
      {props.text}
    </p>
  );
};

//VLabel
interface VLabelProps {
  fontColor?: string;
  size?: string;
  text: string;
}
export class VLabel extends React.Component<VLabelProps> {
  render() {
    return (
      <p
        className="title_para"
        style={{ color: this.props.fontColor ? this.props.fontColor : "#a9a9a9", fontSize: this.props.size ? this.props.size : "14px" }}
      >
        {this.props.text}
      </p>
    );
  }
}

//Textarea
interface TextAreaProps {
  color?: string;
  borderColor?: string;
  fontColor?: string;
  height?: string;
  size?: string;
  type?: string;
}
export const TextArea: FC<TextAreaProps> = (props) => {
  const TextareaStyling = {
    backgroundColor: props.color ? props.color : "transparent",
    borderColor: props.borderColor ? props.borderColor : "#a9a9a9",
    color: props.fontColor ? props.fontColor : "#000",
    height: props.height ? props.height : "",
    fontSize: props.size ? props.size : "14px",
  };
  return (
    <textarea
      className={props.type ? `input_textarea ${props.type}` : "input_textarea default-textarea-m"}
      style={TextareaStyling}
      id={props.type ? props.type : ""}
    ></textarea>
  );
};

//Document section
interface DocumentsProps {
  tag?: string;
  discription?: string;
}
export class Documents extends React.Component<DocumentsProps> {
  render() {
    return (
      <div className="doc_view_div">
        <div className="header_tag_section">
          <p className="define_tag">{this.props.tag}</p>
        </div>
        <div className="header_disc_section">
          <p className="define_doc">{this.props.discription}</p>
        </div>
      </div>
    );
  }
}

//Document section
interface DocumentSectionProps {
  titleDetails: string;
  title: string;
  para?: JSX.Element | JSX.Element[];
  children: JSX.Element | JSX.Element[];
}
export class DocumentSection extends React.Component<DocumentSectionProps> {
  render() {
    return (
      <div className="doc_div">
        <SectionTitle title={this.props.title} para={this.props.titleDetails} />
        <div className="doc_view">
          <div className="doc_view_div">
            <div className="header_tag_section">
              <p className="define_tag">
                <b>Tag</b>
              </p>
            </div>
            <div className="header_disc_section">
              <p className="define_doc">
                <b>Discription</b>
              </p>
            </div>
          </div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
