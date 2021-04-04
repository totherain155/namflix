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

      history: { push },
    } = this.props;
    console.log(id);
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return push("/");
    }
  }
  render() {
    const { result, error, Loading } = this.state;
    // object destructuring 사용
    console.log(this.props);

    return <DetailPresenter result={result} error={error} Loading={Loading} />;
  }
}
