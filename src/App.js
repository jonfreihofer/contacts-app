import "./App.css";
import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Context } from "./Components/Context";
import SubmitForm from "./Components/SubmitForm/index";
import ContactsSection from "./Containers/ContactsSection";
import TitleSection from "./Containers/TitleSection";

function App() {
  const { contacts } = useContext(Context);
  const renderLoading = () => {
    return <div>Loading Contacts...</div>;
  };

  return (
    <>
      <Router>
        <Link className="favoritesLink" to="/favorites">
          Favorites
        </Link>
        <TitleSection>
          <h1>My Contacts</h1>
          <SubmitForm />
        </TitleSection>
        <ContactsSection>
          {!contacts && renderLoading()}
          {contacts}
        </ContactsSection>
        <Switch>
          <Route path="/favorites">
            <FavoritesPage />
          </Route>
        </Switch>
      </Router>
    </>
  );

  function FavoritesPage() {
    const { favorites } = useContext(Context);
    return <div>{favorites}</div>;
  }
}

export default App;
