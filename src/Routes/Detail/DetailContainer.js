import { moviesApi, tvApi } from "api";
import React from "react";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component {
  state = {
    result: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    console.log(this.props);
    const {
      match: {
        params: { id },
      },
      history: { push },
      location: { pathname },
    } = this.props;
    const parsedId = Number(id);
    const isMovie = pathname.includes("/movie/");
    if (isNaN(parsedId)) {
      return push("/"); // return시에 함수는 종료한다.
    }
    let result = null;
    try {
      if (isMovie) {
        ({ data: result } = await moviesApi.movieDetail(parsedId));
      } else {
        ({ data: result } = await tvApi.showDetail(parsedId));
      }
    } catch {
      this.setState({ error: "can't find anything.." });
    } finally {
      this.setState({ loading: false, result });
    } // result가 TV든, movie든 override 하게 된다.
  }

  render() {
    const { result, error, loading } = this.state;
    // object destructuring 사용

    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
