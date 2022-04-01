import React from "react";
import { Button, Menu } from "semantic-ui-react";

export default function SignedOutMenu({setauthenticated}) {
  return (
    <>
      <Menu.Item position='right'>
        <Button onClick={()=> setauthenticated(true)} basic inverted content='Login' />
        <Button
          basic
          inverted
          content='Register'
          style={{ marginleft: "0.5em" }}
        />
      </Menu.Item>
    </>
  );
}
