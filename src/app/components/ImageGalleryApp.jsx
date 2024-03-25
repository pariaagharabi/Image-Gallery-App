import React from 'react';

const ImageGalleryApp = () => {
    return (
        <>
            <div className="app-container">
                <div className="app-inner-container">

                    <div className="app-header">
                        <h1>Searchable Image Gallery</h1>
                    </div>

                    <div className="search-images-container">
                        <form className="search-box">
                            <input
                                type="text"
                                name="searchImageName"
                                placeholder="Search Photos..."
                            />
                            <button>Search</button>
                        </form>
                    </div>

                    <div className="display-images-title">

                    </div>

                    <div className="show-all-images">
                        <section class="card">
                            <figure>
                                <img src="image.jpg" alt="Card Image" />
                                <figcaption class="title">Card Title</figcaption>
                            </figure>
                        </section>
                    </div>

                </div>
            </div>

        </>
    );
}

export default ImageGalleryApp;
