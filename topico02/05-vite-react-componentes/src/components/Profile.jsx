import { Avatar } from "./Avatar";
import Title from "./Title";

/* eslint-disable react/prop-types */
export function Profile(props) {//{user}
  return <>
    <Avatar user={props.user} />
    <Title content={props.user.name} link={props.user.wiki} />
  </>
}
