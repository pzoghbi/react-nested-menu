import React from 'react';
import logo from "../logo.svg"

class Logo extends React.Component {
    static defaultProps = { 
        height: 32 
    };

    render(){
        return (
            <img src={logo} height={this.props.height} alt="CWWPP" />
        )
    }
}

export default function Navigation() {
    return (
        <nav class="navbar navbar-expand-lg bg-primary">
            <div class="container-fluid">
                <a href="/" class="navbar-brand bg-light text-center rounded-circle shadow" data-bs-toggle="collapse" data-bs-target="#hornav">
                    <Logo />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" 
                    aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarScroll">
                    <form class="d-flex ms-auto">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-light" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}