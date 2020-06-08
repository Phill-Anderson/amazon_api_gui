import React, { Component } from "react";
import axios from "axios";

export default class BookDetail extends Component {
  state = {
    name: null,
    price: null,
    content: null,
    photo: null,
    error: null,
    loading: false,
  };
  handleType = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value, error: null });
  };
  goBack = () => {
    this.props.history.goBack();
  };
  componentDidMount = () => {
    this.setState({ loading: true });
    axios
      .get(`http://localhost:8000/api/v1/books/${this.props.match.params.id}`)
      .then((result) => this.setState({ ...result.data.data, loading: false }))
      .catch((err) =>
        this.setState({
          error: err.response.data.error.message,
          loading: false,
        })
      );
  };
  render() {
    if (this.state.error)
      return <div className="notification is-warning">{this.state.error}</div>;
    return (
      <>
        <h1 className="title">{this.state.name}</h1>
        <div className="media">
          <div className="media-left">
            <img
              src={`https://data.internom.mn/media/images/${this.state.photo}`}
            />
          </div>
          <div className="media-content">
            <div className="field">
              <label className="label">Нэр</label>
              <input
                className="input"
                name="name"
                value={this.state.name}
                onChange={this.handleType}
              />
            </div>
            <div className="field">
              <label className="label">Үнэ</label>
              <input
                className="input"
                name="price"
                value={this.state.price}
                onChange={this.handleType}
              />
            </div>
            <div className="field">
              <label className="label">Тайлбар</label>
              <textarea
                style={{ height: "20em" }}
                className="input"
                name="content"
                value={this.state.content}
                onChange={this.handleType}
              />
            </div>
            <div className="field">
              <button className="button is-success" onClick={this.goBack}>
                Буцах
              </button>
              <button className="button is-link">Хадгалах</button>
              <button className="button is-danger">Устгах</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
