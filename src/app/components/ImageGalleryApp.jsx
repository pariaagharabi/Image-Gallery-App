import React from 'react';

const ImageGalleryApp = () => {
    // Initializing, destructuring and updating States


    // Defining Methods
    const fetchData = async () => {
        try {
            const dataURL = "";
            const keyAPI = "";

            const response = await fetch(dataURL);
            if (!response.ok) {
                throw new Error(response.status);
            }
        } catch (err) {
            console.error("Data Fetching Erro: ", err);
        }
    }



    // Rerender in UI
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

                        <section class="card">
                            <figure>
                                <img src="image.jpg" alt="Card Image" />
                                <figcaption class="title">Card Title</figcaption>
                            </figure>
                        </section>

                        <section class="card">
                            <figure>
                                <img src="image.jpg" alt="Card Image" />
                                <figcaption class="title">Card Title</figcaption>
                            </figure>
                        </section>

                        <section class="card">
                            <figure>
                                <img src="image.jpg" alt="Card Image" />
                                <figcaption class="title">Card Title</figcaption>
                            </figure>
                        </section>

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
