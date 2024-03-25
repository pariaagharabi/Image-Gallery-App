import React, { useState, useEffect } from 'react';

const ImageGalleryApp = () => {
    // Initializing, destructuring and updating States
    const [defaultList, setDefaultList] = useState([
        { id: crypto.randomUUID().toString(), photo: "test1", title: "cat", },
        { id: crypto.randomUUID().toString(), photo: "test2", title: "dog", },
        { id: crypto.randomUUID().toString(), photo: "test3", title: "bear", },
    ]);
    console.log(defaultList);

    const [currentValueInput, setCurrentValueInput] = useState("");
    console.log(currentValueInput);

    const [searchedTitle, setSearchedTitle] = useState(defaultList);
    console.log(searchedTitle);


    // Defining Methods
    const handleInputChange = (e) => {
        const currentTitle = e.target.value;
        setCurrentValueInput(currentTitle);
    };

    const handleSearchedSubmit = (e) => {
        e.preventDefault();

        const keyword = currentValueInput.toLowerCase();
        const filterKeywordsInput = defaultList.filter(filterKeyword => filterKeyword.title.toLowerCase().includes(keyword));
        setSearchedTitle(filterKeywordsInput);
    }



    const fetchData = async () => {
        try {
            const dataURL = "";
            const keyAPI = "XyH7IJIPyf9HzMU93hmm25WDvdQCDPm0S09PAE2uP9DzAgTmrSy6m92p";

            const response = await fetch(dataURL);
            if (!response.ok) {
                throw new Error(response.status);
            }

            const data = await response.json();
            console.log(data);

        } catch (err) {
            console.error("Data Fetching Erro: ", err);
        }

    }
    // fetchData();



    // Rerender in UI
    return (
        <>
            <div className="app-container">
                <div className="app-inner-container">

                    <div className="app-header">
                        <h1>Searchable Image Gallery</h1>
                    </div>

                    <div className="search-images-container">
                        <form className="search-box" onSubmit={handleSearchedSubmit}>
                            <input
                                type="text"
                                name="searchImageName"
                                placeholder="Search Photos..."
                                value={currentValueInput}
                                onChange={handleInputChange}
                            />
                            <button>Search</button>
                        </form>
                    </div>

                    <div className="display-images-title">

                    </div>

                    <div className="show-all-images">
                        <section className="card">
                            <figure>
                                <img src="" alt="Card Image" />
                                <figcaption className="title">Card Title</figcaption>
                            </figure>
                        </section>

                        <section className="card">
                            <figure>
                                <img src="" alt="Card Image" />
                                <figcaption className="title">Card Title</figcaption>
                            </figure>
                        </section>

                        <section className="card">
                            <figure>
                                <img src="" alt="Card Image" />
                                <figcaption className="title">Card Title</figcaption>
                            </figure>
                        </section>

                        <section className="card">
                            <figure>
                                <img src="" alt="Card Image" />
                                <figcaption className="title">Card Title</figcaption>
                            </figure>
                        </section>

                        <section className="card">
                            <figure>
                                <img src="" alt="Card Image" />
                                <figcaption className="title">Card Title</figcaption>
                            </figure>
                        </section>
                    </div>

                </div>
            </div>

        </>
    );
}

export default ImageGalleryApp;
