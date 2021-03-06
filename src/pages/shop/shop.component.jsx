import React from "react";
import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
      {console.log("WHYYYYYYY")}
    </div>
  );
};

export default ShopPage;

//If we hardcoded in /shop instead of using ${match.path}, our shop page would have to be aware of whatever route it's on, which is not what we want. We want it not to matter what route it is, as long as shop is rendered.
