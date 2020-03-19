import React from 'react'
import '../assets/css/home.css'
import logo from '../assets/image/logo.png'
import angular from '../assets/image/project/angular.png'
import react from '../assets/image/project/react.png'
import cpp from '../assets/image/project/cpp.png'
import python from '../assets/image/project/python.png'
import ruby from '../assets/image/project/ruby.png'
import scala from '../assets/image/project/scala.png'
import r from '../assets/image/project/r.png'
import php from '../assets/image/project/php.svg'
import spring from '../assets/image/project/spring.png'
import gradle from '../assets/image/project/gradle.png'
import tensorflow from '../assets/image/project/tensorflow.png'
import empty from '../assets/image/project/default.png'

const Home = () => {
    return (
        <React.Fragment>
            <div style={{ height: "100vh" }} id="homeBackground" ></div>
            <div id="blurBackground">
                <div id="blurProject">
                    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "transparent" }}>
                        <a className="navbar-brand" href="#">
                            <img alt="" src={logo} id="homeLogo" className="d-inline-block align-top" alt="" />
                        </a>
                        <ul className="navbar-nav mr-auto">
                            {/* <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li> */}
                        </ul>
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button"
                                id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false" style={{ backgroundColor: "transparent", border: "none" }}>
                                HDJeucne8e
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">Logout</a>
                            </div>
                        </div>
                    </nav>
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-md-3 mb-4">
                                <a href="/workspace/1" style={{ textDecoration: "none" }}>
                                    <div id="project">
                                        <div id="divIcon">
                                            <img alt="" src={angular} />
                                        </div>
                                        <h3 id="titleProject">Node + Angular</h3>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-3 mb-4">
                                <a href="/workspace/2" style={{ textDecoration: "none" }}>
                                    <div id="project">
                                        <div id="divIcon">
                                            <img alt="" src={react} />
                                        </div>
                                        <h3 id="titleProject">Node + React</h3>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-3 mb-4">
                                <a href="/workspace/3" style={{ textDecoration: "none" }}>
                                    <div id="project">
                                        <div id="divIcon">
                                            <img alt="" src={cpp} />
                                        </div>
                                        <h3 id="titleProject">C++</h3>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-3 mb-4">
                                <a href="/workspace/4" style={{ textDecoration: "none" }}>
                                    <div id="project">
                                        <div id="divIcon">
                                            <img alt="" src={python} />
                                        </div>
                                        <h3 id="titleProject">Python + Django</h3>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="row">
                        <div className="col-md-3 mb-4">
                                <a href="/workspace/5" style={{ textDecoration: "none" }}>
                                    <div id="project">
                                        <div id="divIcon">
                                            <img alt="" src={ruby} />
                                        </div>
                                        <h3 id="titleProject">Ruby on Rails</h3>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-3 mb-4">
                                <a href="/workspace/6" style={{ textDecoration: "none" }}>
                                    <div id="project">
                                        <div id="divIcon">
                                            <img alt="" src={scala} />
                                        </div>
                                        <h3 id="titleProject">Scala</h3>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-3 mb-4">
                                <a href="/workspace/7" style={{ textDecoration: "none" }}>
                                    <div id="project">
                                        <div id="divIcon">
                                            <img alt="" src={r} />
                                        </div>
                                        <h3 id="titleProject">R</h3>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-3 mb-4">
                                <a href="/workspace/8" style={{ textDecoration: "none" }}>
                                    <div id="project">
                                        <div id="divIcon">
                                            <img alt="" src={php} />
                                        </div>
                                        <h3 id="titleProject">PHP + Laravel</h3>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="row">
                        <div className="col-md-3 mb-5">
                                <a href="/workspace/9" style={{ textDecoration: "none" }}>
                                    <div id="project">
                                        <div id="divIcon">
                                            <img alt="" src={spring} />
                                        </div>
                                        <h3 id="titleProject">Spring</h3>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-3 mb-5">
                                <a href="/workspace/10" style={{ textDecoration: "none" }}>
                                    <div id="project">
                                        <div id="divIcon">
                                            <img alt="" src={gradle} />
                                        </div>
                                        <h3 id="titleProject">Gradle + Kotlin</h3>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-3 mb-5">
                                <a href="/workspace/11" style={{ textDecoration: "none" }}>
                                    <div id="project">
                                        <div id="divIcon">
                                            <img alt="" src={tensorflow} />
                                        </div>
                                        <h3 id="titleProject">Tensorflow</h3>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-3 mb-5">
                                <a href="/workspace/12" style={{ textDecoration: "none" }}>
                                    <div id="project">
                                        <div id="divIcon">
                                            <img alt="" src={empty} />
                                        </div>
                                        <h3 id="titleProject">Empty project</h3>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <table className="table table-dark">
                            <thead>
                                <tr>
                                    <th scope="col">Project name</th>
                                    <th scope="col">Created</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <a href="/workspace/1">
                                            node + react - 0ada2vAed
                                        </a>
                                        <span>
                                            Empty project
                                        </span>
                                    </td>
                                    <td>
                                        <small data-toggle="tooltip" data-placement="left" title="2020-03-17">
                                        2020-03-17
                                        </small>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="row">
                            <div className="col">
                                <span style={{color:"#c1c1c1"}}>
                                Use the following URL if you wish to come back to Sphere Engine IDE later and resume work on your projects:
                                </span>
                                <pre style={{color:"#fff"}}>https://ide.sphere-engine.com/signin?auth_key=f464a7c3-093b-4635-a899-e29086206ae2</pre>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home
