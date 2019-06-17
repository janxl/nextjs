import React from "react";
import Link from "next/link";

export default class DynaHeader extends React.Component {
  render() {
    const linkStyle = {
      marginRight: 15
    };
    console.log(this.props)
    console.log(this.props.children[0].componentProps)
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
