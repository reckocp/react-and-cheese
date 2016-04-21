
var CheeseIndex = React.createClass({
  propTypes: {
    name: React.PropTypes.string
    likes: React.PropTypes.integer
    link: React.PropTypes.string
  },
  getInitialState: function () {
    return {
      nameText: this.props.name
      likesNum: this.props.likes
      linkText: this.props.link
    }
  },
  render: function () {
    return (
    <table className="table table-striped">
      <thead className="table table-striped">
        <tr>
          <th>Name:</th>
          <th>Likes:</th>
          <th>Link:</th>
          <th colspan="3"></th>
        </tr>
      </thead>

      <tbody>
          <tr>
            <td>{this.props.name}</td>
            <td>{this.props.likes} Likes</td>
            <td>{this.props.link}</td>
          </tr>
      </tbody>
    </table>
  }
});
