import { useContext } from "react";
import { Button, Card, Icon, Label, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth";
import Likebutton from "./Likebutton";
import Deletebutton from "./Deletebutton";
import Popupel from "../util/Popupel";
import moment from "moment";

function Postcard({
  post: { body, createdAt, id, username, likeCount, commentCount, likes },
}) {
  const { user } = useContext(AuthContext);
  return (
    <Card fluid>
      <Card.Content as={Link} to={`/posts/${id}`}>
        <Image
          floated="right"
          size="mini"
          src="https://react.semantic-ui.com/images/avatar/large/molly.png"
        />
        <Card.Header>{username}</Card.Header>
        <Card.Meta>{moment(createdAt).fromNow(true)}</Card.Meta>
        <Card.Description>{body}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Likebutton user={user} post={{ id, likes, likeCount }} />
        <Popupel content="Comment on post">
          <Button as="div" labelPosition="right">
            <Button color="blue" as={Link} to={`/posts/${id}`}>
              <Icon name="comments" />
            </Button>
            <Label basic color="blue" pointing="left">
              {commentCount}
            </Label>
          </Button>
        </Popupel>
        {user && user.username === username && <Deletebutton postId={id} />}
      </Card.Content>
    </Card>
  );
}

export default Postcard;
