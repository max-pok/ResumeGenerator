import React from "react"
import { Button } from "antd"
import { ArrowRightOutlined } from "@ant-design/icons"
// function Loader() {
//   return (
// <div class='container mt4'>
//   <h4 class='display-4 text-center mb4'>
//     <br />
//     Resume Generator
//   </h4>
// </div>
//   )
// }

class Loader extends React.Component {
  render() {
    return (
      <div className='container mt-5 display-1 text-center'>
        <h4 className='display-4 text-center mb4'>
          <br />
          Resume Generator
        </h4>
        <Button type='primary' onClick={() => console.log("to to main page")}>
          Get Started
        </Button>
      </div>
    )
  }
}

export default Loader
