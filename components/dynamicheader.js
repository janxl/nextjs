import React from "react";
import Link from "next/link";

export default class DynaHeader extends React.Component {
  render() {
    const linkStyle = {
      marginRight: 15
    };
    
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
