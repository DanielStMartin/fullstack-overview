import React, { Component } from "react";
import axios from "axios";
import "./header.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { setUser } from "../ducks/reducer";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      username: "",
      password: "",
      full_name: ""
    };
    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
  }
  componentDidMount() {
    axios.get("/api/admin").then(res => {
      this.props.setUser(res.data);
    });
  }

  login = () => {
    const loginPayload = {
      username: this.state.username,
      password: this.state.password
    };
    axios
      .post("/api/login", loginPayload)
      .then(res => {
        this.props.setUser(res.data);
      })
      .catch(err => alert(err));
  };
  register() {
    const loginPayload = {
      username: this.state.username,
      password: this.state.password,
      full_name: this.state.full_name
    };
    axios
      .post("/api/admin_register", loginPayload)
      .then(res => {
        this.props.setUser(res.data);
      })
      .catch(err => alert(err));
  }

  changeHandler = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  logout = () => {
    axios.get("/api/logout").then(() => {
      this.props.setUser(null);
    });
  };

  render() {
    const { username, password, full_name } = this.state;
    const { user } = this.props;
    return (
      <header>
        <div>
          <div>logo</div>
          <nav>
            <ul>
              <li>
                <NavLink exact to="/" activeStyle={{ color: "red" }}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/admin" activeStyle={{ color: "red" }}>
                  Admin
                </NavLink>
              </li>
              {!user ? (
                <li>
                  <input
                    placeholder="username"
                    name="username"
                    value={username}
                    onChange={e =>
                      this.changeHandler(e.target.name, e.target.value)
                    }
                  />
                  <input
                    placeholder="password"
                    name="password"
                    value={password}
                    onChange={e =>
                      this.changeHandler(e.target.name, e.target.value)
                    }
                  />
                  <input
                    placeholder="full_name"
                    type="full_name"
                    name="full_name"
                    value={full_name}
                    onChange={e =>
                      this.changeHandler(e.target.name, e.target.value)
                    }
                  />
                  <button onClick={this.register}>Register</button>
                  <button onClick={this.login}>login</button>
                </li>
              ) : (
                <button onClick={this.logout}>logout</button>
              )}
              {JSON.stringify(this.state.user)}
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
const mapStateToProps = reduxState => {
  return {
    user: reduxState.user
  };
};
const mapDispatchToProps = {
  setUser: setUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
