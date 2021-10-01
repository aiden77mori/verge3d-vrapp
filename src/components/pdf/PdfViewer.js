import React, { Component } from "react";
// import pdfFile from "./chart.pdf";

export default class PDFViewer extends Component {
  constructor(props) {
    super(props);

    const { keycloak } = props;
    console.log(props.pdf);
    this.state = {
      pdf: props.pdf,
    };
  }
  // handleStatusChange(status) {
  //   this.setState({
  //     pdf: status.pdf
  //   });
  //   console.log(status.pdf);
  // }

  componentDidUpdate(prevProps, prevState) {
    // Uso tipico (no olvides de comparar las props):
    // console.log(
    //   prevProps.pdf + "----->" + prevState.pdf + "------->" + this.props.pdf
    // );
    if (prevProps.pdf !== prevState.pdf) {
      this.setState({ pdf: prevProps.pdf });
    }
  }

  handlePrint = () => {
    // is getElementById an anti pattern even if I'm not modyfying the DOM?
    const node = document.getElementById("print-file");
    node.contentWindow.focus();
    node.contentWindow.print();
  };

  render() {
    return (
      //   <>
      //     <h2>PDF Viewer Component</h2>
      //     <button onClick={this.handlePrint}>Print</button>
      <object data={this.state.pdf} type="application/pdf">
        <iframe
          title="pdf document"
          id="print-file"
          src={`https://docs.google.com/viewer?url=${this.state.pdf}&embedded=true`}
        />
      </object>
      //   </>
    );
  }
}
