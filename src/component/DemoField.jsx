import React, { useState } from "react";
import { InputField, RadioButton, Card } from "./ReUseComponents";

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

  return (
    <>
      <h1>Reusable Component</h1>
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
      </div>

      <div className="container">
        <InputField
          label="Email"
          placeholder="Enter Email"
          type="Email"
          name="email"
          value={email}
          handelChange={handelChange}
        />
        <div>
          <h6>Email: {email} </h6>
        </div>
      </div>

      <div className="container">
        <InputField
          label="Password"
          placeholder="Enter Password"
          type="password"
          name="password"
          value={password}
          handelChange={handelChange}
        />
        <div>
          <h6>Password: {password} </h6>
        </div>
      </div>

      <div className="container">
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
      </div>

      <Card
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
      />
    </>
  );
};
