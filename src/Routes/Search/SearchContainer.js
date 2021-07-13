import { moviesApi, tvApi } from "api";
import React from "react";
import SearchPresenter from "./SearchPresenter";

export default class extends React.Component {
  state = {
    movieResults: null,
    tvResults: null,
    searchTerm: "",
    loading: false,
    error: null,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { searchTerm } = this.state;
    if (searchTerm !== "") {
      this.searchByTerm();
    }
  };

  // input 값으로 검색을 하고 리턴값을 받을 때 작동한다.
  // update에 관한 value값이 있는 function
  updateTerm = (event) => {
    const {
      target: { value },
    } = event;
    console.log(value);
    this.setState({
      searchTerm: value,
    });
  };

  searchByTerm = async () => {
    const { searchTerm } = this.state;
    this.setState({ loading: true }); //검색했을때 loading을 true로 바꿔준다.
    try {
      const {
        data: { results: movieResults },
      } = await moviesApi.search(searchTerm);

      const {
        data: { results: tvResults },
      } = await tvApi.search(searchTerm);

      this.setState({
        movieResults,
        tvResults,
      });
    } catch {
      this.setState({
        error: "can't find your results...",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  };

  render() {
    const { movieResults, tvResults, searchTerm, error, loading } = this.state;

    return (
      <SearchPresenter
        movieResults={movieResults}
        loading={loading}
        tvResults={tvResults}
        error={error}
        searchTerm={searchTerm}
        //searchPresenter에서 폼을 만들고 셋업한뒤 handleSubmit을 호출하기 위해 onSubmit을 호출할 것이다.
        handleSubmit={this.handleSubmit} //form을 제출할때 handleSubmit을 호출한다.
        updateTerm={this.updateTerm}
      />
    );
  }
}
