import React, { useContext } from "react";
import { Context } from "./Components/Context";

export default function FavoritesPage() {
  const { favorites } = useContext(Context);
  return <div>{favorites}</div>;
}
