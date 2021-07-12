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
        handleSubmit={this.handleSubmit} //form을 제출할때 handleSubmit을 호출한다.
        updateTerm={this.updateTerm}
      />
    );
  }
}
