import React from 'react';
import styled from 'styled-components/macro';
import DeleteButton from '../../shared/DeleteButton';

const Wrapper = styled.div`
  display: flex;
  margin-top: -1px;
  border: 1px solid ${props => props.theme.border};
  ${props => props.round && 'border-radius: 0 0 2px 2px'};
  padding: 8px;
  background-color: #ffffff;
  font-size: 13px;
  color: ${props => props.theme.mutedText};
`;

class PostDetailInfoBar extends React.Component {
  deletePost = () => {
    this.props.attemptDeletePost(this.props.id, this.props.token);
  };

  render() {
    return (
      <Wrapper round={!this.props.token}>
        <span>{this.props.views} views</span>
        <span>&nbsp;|&nbsp;</span>
        <span>{this.props.upvotePercentage}% upvoted</span>
        {this.props.token && this.props.user.id === this.props.author.id && (
          <DeleteButton onClick={this.deletePost} />
        )}
      </Wrapper>
    );
  }
}

export default PostDetailInfoBar;