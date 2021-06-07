import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Section from "Components/Section";

const Container = styled.div`
  padding: 0px 20px;
`;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`; //submit 이벤트를 차단

const Input = styled.input`
  all: unset;
  font-size: 23px;
  width: 100%;
`;

const SearchPresenter = ({
  movieResults,
  loading,
  tvResults,
  searchTerm,
  updateTerm,
  handleSubmit,
  error,
}) => null;

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  searchTerm: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired,
};

export default SearchPresenter;
