import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { FC } from "./FC.type";
import home from "./screen/componentsScreen/Home";
import button from "./screen/componentsScreen/Button";
import inputField from "./screen/componentsScreen/InputField";
import label from "./screen/componentsScreen/Label";
import paragraph from "./screen/componentsScreen/Paragraph";
import progressBar from "./screen/componentsScreen/ProgressBar";
import IconButton from "./screen/componentsScreen/IconButton";
import textarea from "./screen/componentsScreen/Textarea";
import tooltip from "./screen/componentsScreen/Tooltip";
import dropdown from "./screen/componentsScreen/DropDown";

//App screen
import startScreen from "./screen/AppScreen/StartsScreen";
import IdCapture from "./screen/AppScreen/IdCapture";
import conformation from "./screen/AppScreen/Conformation";
import help from "./screen/AppScreen/Help";

interface AppProps {}
export const App: FC<AppProps> = (props) => {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={home} />
            <Route exact path="/button" component={button} />
            <Route exact path="/icon-button" component={IconButton} />
            <Route exact path="/input-field" component={inputField} />
            <Route exact path="/textarea" component={textarea} />
            <Route exact path="/label" component={label} />
            <Route exact path="/paragraph" component={paragraph} />
            <Route exact path="/progress-bar" component={progressBar} />
            <Route exact path="/tooltip" component={tooltip} />
            <Route exact path="/dropdown" component={dropdown} />
            <Route exact path="/help" component={help} />

            <Route exact path="/start-screen" component={startScreen} />
            <Route exact path="/id-capture" component={IdCapture} />
            <Route exact path="/conformation" component={conformation} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
