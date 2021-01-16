import React, { Component } from "react";
import Button from "../components/Button";
import styles from "./Form.module.scss";
import Input from "../components/Input";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
      <h1 className={`title title--primary`}> Welcome to oriabure farms limited</h1>
      <div className="">
      <p className="subtitle"> please <strong>sign in</strong> and submit your report</p>

        <div className={`${styles.container}`}>
          <form className={`${styles.content}`} action="">
            <Input login type="text"> UserName</Input>
            <Input login type="password"> Password</Input>
            <Button primary fullwidth type="submit">
              Login
            </Button>
          </form>
        </div>
      </div>
      </>
    );
  }
}

export default Form;
