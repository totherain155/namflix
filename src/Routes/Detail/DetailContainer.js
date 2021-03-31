import React from "react";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component {
  state = {
    result: null,
    error: null,
    Loading: true,
  };
  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    console.log(id);
  }

  render() {
    console.log(this.props);
    const { result, error, Loading } = this.state;
    // object destructuring 사용

    return <DetailPresenter result={result} error={error} Loading={Loading} />;
  }
}
