var CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">I am CommentList</div>
    );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">I am CommentForm</div>
    );
  }
});

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        I am CommentBox
        <CommentList />
        <CommentForm />
      </div>
    );
  }
});

ReactDOM.render(
  React.createElement(CommentBox, null),
  document.getElementById('content')
)
