import React, { Component } from "react";
import styles from './input.module.scss';

export default class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value:''
    };
  }
handleChange=(event)=>{
this.setState({value:event.target.value})
}
  render() {
      const {children,type,login}= this.props;
      const {value}=this.state;
    return (
      <div>
        <label htmlFor={type}>{children}</label>
        <input
          className={`${styles.input} ${login? styles.login: '' }`}
          type={type}
          id={type}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
