import "./App.css";
import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Context } from "./Components/Context";
import SubmitForm from "./Components/SubmitForm/index";
import ContactsSection from "./Containers/ContactsSection";
import TitleSection from "./Containers/TitleSection";
import FavoritesPage from "./Pages/Favorites";

function App() {
  const { contacts, isLoading } = useContext(Context);

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
          {isLoading && <h1>Loading Contacts...</h1>}
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
}

export default App;
