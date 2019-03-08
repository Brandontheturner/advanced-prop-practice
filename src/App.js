import React from "react";
import "./App.css";
import PropTypes from "prop-types";
import SuperComponent from "./components/SuperComponent";
import Students from "./components/Students";
import ClassRoom from "./components/ClassRoom";

console.log(Students);
console.log(ClassRoom);

/* eslint-disable no-unused-vars, no-console */
// function App(props) {
const product = {
  name: "ajax",
  description: "Cleans your bathroom real good"
};
const names = ["Bob", "Stand", "Todd", "Ted"];
const App = () => {
  return (
    <div>
      {/* TODO: 
        Follow the intructions laid out below. Write each component on the line
        below the comment. Don't worry that they will be repeated. 

        Unrelated Tip: The linter appears to like double quotes here. If you get
        an error with a string.. check to see if you used single or double quotes 
       */}

      {/* pass SuperComponent the string: "hello word" in a prop called "message"*/}
      <SuperComponent message="hello world" />
      {/* pass SuperComponent the string: "goodbye world" in a prop called "message" */}
      <SuperComponent message="goodbye world" />
      {/* pass SuperComponent the string: "Props are awesome world" in a prop called "message" */}
      <SuperComponent message="Props are awesome world" />
      {/* pass SuperComponent the number: 42 in a prop called "magicNumber" */}
      <SuperComponent magicNumber="42" />
      {/* pass SuperComponent the number: 21 in a prop called "magicNumber" */}
      <SuperComponent magicNumber="21" />
      {/*
        What have we seen here? This "SuperComponent" takes multiple 
        props and simply displays the content for whichever prop was passed in. 
        Honestly, this is a pretty abnormal pattern. We don't usually
        write components like this. Let's move on..
      */}

      {/* pass the Students component an array of names in a prop called "names" */}
      <Students names={["brandon", "kyle", "ron", "mike", "Joanna"]} />
      {/* 
        Go into the Students component and take a look at is. What's it doing?
        Try using the Students component again without the names prop. What happens? 
        Delete this one after
      */}

      {/*
        Go into the Students component and add support for an optional prop
        called "groupName". Send a string of your choice and display it above 
        the list of students
      */}
      <Students
        names={["brandon", "kyle", "ron", "mike", "Joanna", "Andy"]}
        groupName="whatever"
      />

      {/*
        The Students component should have showed us how to use props that 
        are optional and required, as well as practice passing multiple props.
        Next we will look at props.children
      */}

      {/* pass the ClassRoom component the string "Class Number 1" in a prop called className */}
      <ClassRoom className="Class Number 1" />
      {/* render the Students component inside the ClassRoom component; pass Students as a child */}
      <ClassRoom>
        <Students
          names={["brandon", "kyle", "ron", "mike", "Joanna", "Andy"]}
          groupName="whatever"
        />
      </ClassRoom>
    </div>
  );
};

App.propTypes = {
  products: PropTypes.array.isRequired,
  names: PropTypes.array.isRequired,
  magicNumber: PropTypes.number.isRequired,
  contact: PropTypes.object.isRequired
};
export default App;
