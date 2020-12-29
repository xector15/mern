import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                    Search Movie
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="container-fluid ">
                        <form class="d-flex ml-auto ">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-outline-secondary bg-dark" type="submit">Search</button>
                        </form>
                    </div>
                    <div className="navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link to="/favorite" className="nav-link">Favoritos</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/create" className="nav-link">Create Note</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/user" className="nav-link">Create User</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}