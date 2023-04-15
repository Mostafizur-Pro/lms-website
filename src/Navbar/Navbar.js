import { Button, Link } from "@mui/material";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <Button variant="text">
        <Link href="/">Home</Link>
      </Button>
      <Button variant="text">
        <Link href="/home">Home2</Link>
      </Button>
    </div>
  );
};

export default Navbar;
