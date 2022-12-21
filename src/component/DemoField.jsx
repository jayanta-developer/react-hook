import React, { useState } from "react";
// import pdfParse from "pdf-parse";
// import { ResumeParser } from "simple-resume-parser";
import {
  InputField,
  RadioButton,
  Card,
  HrmYellowBtn,
  HrmBlackBtn,
  Chips,
  Dropdown,
  Input,
} from "./ReUseComponents";
import Button from "@mui/material/Button";
import { Container, Typography } from "@mui/material";
//icons
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import PostAddIcon from "@mui/icons-material/PostAdd";
import HomeIcon from "@mui/icons-material/Home";
// import justifyContent from "@material-ui/system";

export const DemoField = () => {
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [radioValue, SetRadioValue] = useState("");
  const [file, SetFile] = useState("");

  const handelChange = (e) => {
    if (e.target.name === "name") SetName(e.target.value);
    if (e.target.name === "email") SetEmail(e.target.value);
    if (e.target.name === "password") SetPassword(e.target.value);
    if (e.target.name === "agree") SetRadioValue(e.target.value);
    if (e.target.name === "file") SetFile(e.target.value);
  };

  const handelUpload = (file) => {
    console.log(file);
  };

  const btnClick = () => {
    let fieldText;
    return (fieldText = "my text");
  };

  return (
    <>
      <form action="">
        <input
          onInput={(e) => handelUpload(e.target.files[0])}
          id="pdfFile"
          type="file"
        />
        <Button onClick={btnClick} id="uploadBtn">
          Upload
        </Button>
        <br />
        <br />
        <input
          style={{ width: "400px", height: "200px" }}
          type="text"
          id="textField"
        />
      </form>

      {/* <h1>Reusable Component</h1>
      <div className="container">
        <InputField
          label="Name"
          placeholder="Enter Name"
          type="text"
          name="name"
          value={name}
          handelChange={handelChange}
        />
        <div>
          <h6>Name: {name} </h6>
        </div>
      </div> */}

      {/* <div className="container">
        <RadioButton
          label="Radio Button"
          name="agree"
          RadioOn="On"
          RadioOff="Off"
          handelChange={handelChange}
        />
        <div>
          <h6>Radio button: {radioValue} </h6>
        </div>
      </div>

      <div className="container">
        <InputField
          label="File input"
          placeholder="Enter your file"
          type="file"
          name="file"
          // value={password}
          handelChange={handelChange}
        />
        <div>
          <h6>File path: {file} </h6>
        </div>
      </div> */}

      {/* <Card
        cardType="jobCard"
        jobId="fsd6f634"
        role="Ui developers"
        total="2"
        newNum="6"
      />

      <Card
        cardType="avatarCard"
        avatarName="Jayanta Dey"
        avatarId="4df465453"
        joinDate="19/10/2022"
        email="email@gmail.com"
        phone="9956596658"
      /> */}

      {/* Buttons */}
      <Container
        maxWidth="lg"
        sx={{
          flexDirection: "row",
          display: "flex",
          justifyContent: "space-evenly",
          pt: 5,
        }}
      >
        <Typography variant="h6" component="h6">
          Type of Button:
        </Typography>
        <HrmYellowBtn icon={<AddCircleIcon />} label="Add" />
        <HrmYellowBtn icon={<HomeIcon />} label="Home" />
        <HrmYellowBtn icon={<PostAddIcon />} label="Create Job Posting" />
        <HrmBlackBtn icon={<EditIcon />} label="Edit" />
        <HrmBlackBtn icon={<DeleteIcon />} label="Delete" />
      </Container>

      {/* Chips */}
      <Container
        maxWidth="lg"
        sx={{
          flexDirection: "row",
          display: "flex",
          justifyContent: "space-evenly",
          pt: 5,
        }}
      >
        <Typography variant="h6" component="h6">
          Chips:
        </Typography>
        <Chips label="React" />
        <Chips label="CSS" />
        <Chips label="JavaScript" />
      </Container>

      {/* Dropdown */}
      <Container
        maxWidth="lg"
        sx={{
          flexDirection: "row",
          display: "flex",
          justifyContent: "space-evenly",
          pt: 5,
        }}
      >
        <Typography variant="h6">Dropdown:</Typography>
        <Dropdown />
      </Container>

      {/* Input */}
      <Container
        maxWidth="lg"
        sx={{
          flexDirection: "row",
          display: "flex",
          justifyContent: "space-evenly",
          pt: 5,
        }}
      >
        <Typography variant="h6">Input Fields:</Typography>
        <Input label="name" type="text" />
        <Input label="email@email.com" type="email" />
        <Input label="password" type="password" />
      </Container>

      {/* My input */}
      <Container
        maxWidth="lg"
        sx={{
          flexDirection: "row",
          display: "flex",
          justifyContent: "space-evenly",
          pt: 5,
        }}
      >
        <Typography variant="h6">Input My version:</Typography>
        <InputField
          label="Name"
          placeholder="Enter Name"
          type="text"
          name="name"
          value={name}
          handelChange={handelChange}
        />
        <div>
          <h6>Name: {name} </h6>
        </div>
      </Container>
    </>
  );
};
