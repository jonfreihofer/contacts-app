import React, { useContext } from "react";
import { Context } from "../Context";

//favorites are being added in contact component, but "stored" in Context
export default function FavoritesPage() {
  const { favorites } = useContext(Context);
  return <div>{favorites}</div>;
}
