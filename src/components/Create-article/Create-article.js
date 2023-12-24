import React from "react";
import './Create-article.scss'


export const CreateArticle = () => {

    return (
        <div className="create-article">
            <form>
            <label>
                <span className="title_text">Title</span>
                <input className="title" type="text"/>
            </label>

            <label>
                <span className="description_text">Short description</span>
                <input className="description" type="text"/>
            </label>

            <label>
                <span className="text_text">Text</span>
                <input className="text" type="text"/>
            </label>

            <label className="tags-form">
            <span className="tags_text">Tags</span>
                <div className="tags-first-container">
                <input className="tags" type="text"/>
                <button className="delete-btn">Delete</button>
                </div>

                <div className="tags-second-container">
                <input className="tags" type="text"/>
                <button className="delete-btn">Delete</button>
                </div>

                <div className="tags-third-container">
                    
                <input className="tags" type="text"/>
                <button className="delete-btn">Delete</button>
                <button className="add-btn">Add tag</button>
                </div>
            </label>

            <button className="send-btn">Send</button>
        </form>
        </div>
    )
}