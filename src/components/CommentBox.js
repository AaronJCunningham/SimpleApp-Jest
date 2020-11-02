import React from 'react'

class CommentBox extends React.Component {
state = {
    comment: ''
}

handleChange = (event) => {
 this.setState({ comment: event.target.value })
}

handleSubmit = event => {
    event.preventDefault();

    this.setState({ comment: ''})
}


    render(){
        return (
            <form>
                <h4>Add A Comment</h4>
                <textarea onChange={this.handleChange} value={this.state.comment} />
                <div>
                    <button onClick={console.log(this.comment)}>Submit Content</button>
                </div>
            </form>
        )
    }
}

export default CommentBox;
