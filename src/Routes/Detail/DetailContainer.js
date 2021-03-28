import React from "react";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component {
  state = {
    result: null,
    error: null,
    Loading: true,
  };

  render() {
    const { result, error, Loading } = this.state;
    // object destructuring 사용

    return <DetailPresenter result={result} error={error} Loading={Loading} />;
  }
}
