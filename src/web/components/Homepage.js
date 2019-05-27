import React, { Component } from 'react'
import { connect } from "react-redux";

import * as actions from "../../store/actions";


class Homepage extends Component {

    state = { file: null };

    onSubmitHandler(event) {
        event.preventDefault();
        this.props.uploadFile(this.state.file, this.props.history);
    }

    onFileChange(event) {
        this.setState({ file: event.target.files[0] });
    }

    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Dummy Logo</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home
                    <span className="sr-only">(current)</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <section className="container-fluid upload_media">
                    <div className="container">
                        <div className="col">
                            <h2>Upload Media Files &amp; Share Online</h2>
                            <h3>Share your momments online easily</h3>
                            <div className="upload_media_row">
                                <form action="#" id="upload_media" className="videos_from">
                                    <div className="inner col m0">
                                        <h2>Sync Videos From</h2>
                                        <a href="#"><img src={require('../images/youtube.png')} alt="" /></a>
                                        <a className="vimeo" href="#"><img src={require('../images/vimeo.png')} alt="" /></a>
                                        <a className="dailymotion" href="#"><img src={require('../images/dailymotion.png')} alt="" /></a>
                                    </div>
                                </form>
                                <a className="or_btn" href="#">or</a>
                                <form onSubmit={this.onSubmitHandler.bind(this)} action="#" id="upload_media_2" >
                                    <div className="inner col m0">
                                        <h2>Upload From PC</h2>
                                        <h6>Via Frontend Uploader</h6>
                                        <img src={require('../images/upload-1.png')} alt="" />
                                        <h4>Select files to upload</h4>
                                        <input
                                            onChange={this.onFileChange.bind(this)}
                                            type="file"
                                            accept="video/*"
                                        />
                                        <button>
                                            Upload Video
                                        </button>
                                        <h5>or drag &amp; drop files</h5>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="container-fluid">
                    <div className="container">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item active" aria-current="page">Home</li>
                            </ol>
                        </nav>
                        <div className="row">
                            <div className="col-lg-9">
                                <div id="carouselExampleIndicators" className="carousel slide my-4 video_slider" data-ride="carousel">
                                    <ol className="carousel-indicators">
                                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                    </ol>
                                    <div className="carousel-inner" role="listbox">
                                        <div className="carousel-item active">
                                            <a href="#">
                                                <img className="d-block img-fluid" src={require('../images/hqdefault.webp')} alt="First slide" style={{ "width": "100%" }} />
                                                <div className="play_btn"></div>
                                            </a>
                                        </div>
                                        <div className="carousel-item">
                                            <a href="#">
                                                <img className="d-block img-fluid" src={require('../images/hqdefault.webp')} alt="First slide" style={{ "width": "100%" }} />
                                                <div className="play_btn"></div>
                                            </a>
                                        </div>
                                        <div className="carousel-item">
                                            <a href="#">
                                                <img className="d-block img-fluid" src={require('../images/hqdefault.webp')} alt="First slide" style={{ "width": "100%" }} />
                                                <div className="play_btn"></div>
                                            </a>
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                                <div className="row title_row mt-5">
                                    <div className="col">
                                        <h3>recent uploads</h3>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 mb-4 video_post">
                                        <div className="card h-100 inner ">
                                            <div className="col-0 screencast m0">
                                                <a href="#"><img className="card-img-top" src={require('../images/1.jpg')} alt="" /></a>
                                                <div className="play_btn"></div>
                                                <div className="media-length">17:30</div>
                                            </div>

                                            <div className="card-body post_data">
                                                <div className="category "><a href="category.html"><img src={require('../images/catagory.png')} alt="" className="mr-1" />Art</a></div>
                                                <h5 className="card-title mb-0">
                                                    <a href="#">Duis aute irure dolor in adipsicing elit</a>
                                                </h5>
                                            </div>
                                            <div className="card-footer post_data">
                                                <div className="fleft date">Published: 3 August, 2015</div>
                                                <div className="fright views"><a href="#"><img src={require('../images/views.png')} alt="" />3,45,346</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 mb-4 video_post">
                                        <div className="card h-100 inner ">
                                            <div className="col-0 screencast m0">
                                                <a href="#"><img className="card-img-top" src={require('../images/1.jpg')} alt="" /></a>
                                                <div className="play_btn"></div>
                                                <div className="media-length">17:30</div>
                                            </div>

                                            <div className="card-body post_data">
                                                <div className="category "><a href="category.html"><img src={require('../images/catagory.png')} alt="" className="mr-1" />Art</a></div>
                                                <h5 className="card-title mb-0">
                                                    <a href="#">Duis aute irure dolor in adipsicing elit</a>
                                                </h5>
                                            </div>
                                            <div className="card-footer post_data">
                                                <div className="fleft date">Published: 3 August, 2015</div>
                                                <div className="fright views"><a href="#"><img src={require('../images/views.png')} alt="" />3,45,346</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 mb-4 video_post">
                                        <div className="card h-100 inner ">
                                            <div className="col-0 screencast m0">
                                                <a href="#"><img className="card-img-top" src={require('../images/1.jpg')} alt="" /></a>
                                                <div className="play_btn"></div>
                                                <div className="media-length">17:30</div>
                                            </div>

                                            <div className="card-body post_data">
                                                <div className="category "><a href="category.html"><img src={require('../images/catagory.png')} alt="" className="mr-1" />Art</a></div>
                                                <h5 className="card-title mb-0">
                                                    <a href="#">Duis aute irure dolor in adipsicing elit</a>
                                                </h5>
                                            </div>
                                            <div className="card-footer post_data">
                                                <div className="fleft date">Published: 3 August, 2015</div>
                                                <div className="fright views"><a href="#"><img src={require('../images/views.png')} alt="" />3,45,346</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 mb-4 video_post">
                                        <div className="card h-100 inner ">
                                            <div className="col-0 screencast m0">
                                                <a href="#"><img className="card-img-top" src={require('../images/1.jpg')} alt="" /></a>
                                                <div className="play_btn"></div>
                                                <div className="media-length">17:30</div>
                                            </div>

                                            <div className="card-body post_data">
                                                <div className="category "><a href="category.html"><img src={require('../images/catagory.png')} alt="" className="mr-1" />Art</a></div>
                                                <h5 className="card-title mb-0">
                                                    <a href="#">Duis aute irure dolor in adipsicing elit</a>
                                                </h5>
                                            </div>
                                            <div className="card-footer post_data">
                                                <div className="fleft date">Published: 3 August, 2015</div>
                                                <div className="fright views"><a href="#"><img src={require('../images/views.png')} alt="" />3,45,346</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 mb-4 video_post">
                                        <div className="card h-100 inner ">
                                            <div className="col-0 screencast m0">
                                                <a href="#"><img className="card-img-top" src={require('../images/1.jpg')} alt="" /></a>
                                                <div className="play_btn"></div>
                                                <div className="media-length">17:30</div>
                                            </div>

                                            <div className="card-body post_data">
                                                <div className="category "><a href="category.html"><img src={require('../images/catagory.png')} alt="" className="mr-1" />Art</a></div>
                                                <h5 className="card-title mb-0">
                                                    <a href="#">Duis aute irure dolor in adipsicing elit</a>
                                                </h5>
                                            </div>
                                            <div className="card-footer post_data">
                                                <div className="fleft date">Published: 3 August, 2015</div>
                                                <div className="fright views"><a href="#"><img src={require('../images/views.png')} alt="" />3,45,346</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 mb-4 video_post">
                                        <div className="card h-100 inner ">
                                            <div className="col-0 screencast m0">
                                                <a href="#"><img className="card-img-top" src={require('../images/1.jpg')} alt="" /></a>
                                                <div className="play_btn"></div>
                                                <div className="media-length">17:30</div>
                                            </div>

                                            <div className="card-body post_data">
                                                <div className="category "><a href="category.html"><img src={require('../images/catagory.png')} alt="" className="mr-1" />Art</a></div>
                                                <h5 className="card-title mb-0">
                                                    <a href="#">Duis aute irure dolor in adipsicing elit</a>
                                                </h5>
                                            </div>
                                            <div className="card-footer post_data">
                                                <div className="fleft date">Published: 3 August, 2015</div>
                                                <div className="fright views"><a href="#"><img src={require('../images/views.png')} alt="" />3,45,346</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="row m0">
                                    <div className="clearfix"></div>
                                    <a href="inc/more-uploads-2.html" className="load_more_videos col mb-2">Load more videos</a>
                                </div>

                            </div>

                            <div className="col-lg-3">
                                <form action="#" role="search" className="mb-4 mt-4">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Search this blog" />
                                        <div className="input-group-append">
                                            <button className="btn btn-secondary" type="button">
                                                <i className="fa fa-search"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>

                                <ul className="list-unstyled mt-2">
                                    <li className="media">
                                        <img src={require('../images/small.jpg')} className="mr-3" alt="..." />
                                        <div className="media-body">
                                            <h5 className="mt-0 mb-1">List-based media object</h5>
                                            Cras sit amet nibh , in ...
                                </div>
                                    </li>
                                    <li className="media my-4">
                                        <img src={require('../images/small.jpg')} className="mr-3" alt="..." />
                                        <div className="media-body">
                                            <h5 className="mt-0 mb-1">List-based media object</h5>
                                            Cras sit amet nibh , in ...
                                </div>
                                    </li>
                                    <li className="media">
                                        <img src={require('../images/small.jpg')} className="mr-3" alt="..." />
                                        <div className="media-body">
                                            <h5 className="mt-0 mb-1">List-based media object</h5>
                                            Cras sit amet nibh , in ...
                                </div>
                                    </li>
                                </ul>

                                <div className="card text-white bg-primary mb-3" style={{ "maxWidth": "18rem" }}>
                                    <div className="card-header">Header</div>
                                    <div className="card-body">
                                        <h5 className="card-title">Primary card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
                <section className="container-fluid">
                    <div className="row ribbon">
                        <div className="col p-0"><a href="#"></a></div>
                        <div className="col p-0"><a href="#"></a></div>
                        <div className="col p-0"><a href="#"></a></div>
                        <div className="col p-0"><a href="#"></a></div>
                        <div className="col p-0"><a href="#"></a></div>
                        <div className="col p-0"><a href="#"></a></div>
                    </div>
                </section>
                <footer className="py-5 bg-dark">
                    <div className="container">
                        <p className="m-0 text-center text-white">Copyright &copy; Your Website 2019</p>
                    </div>
                </footer>
            </React.Fragment>
        )
    }
}

export default connect(null, actions)(Homepage)