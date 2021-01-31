import 'jsdom-global/register'; 
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import React from "react";
import { shallow, mount } from "enzyme";
import Paperbase from "../../../src/components/Paperbase";


it("renders without crashing", () => {
    shallow(<Paperbase />);
  });
