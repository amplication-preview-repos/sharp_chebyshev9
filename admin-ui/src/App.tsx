import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { TransactionsList } from "./transactions/TransactionsList";
import { TransactionsCreate } from "./transactions/TransactionsCreate";
import { TransactionsEdit } from "./transactions/TransactionsEdit";
import { TransactionsShow } from "./transactions/TransactionsShow";
import { ListingsList } from "./listings/ListingsList";
import { ListingsCreate } from "./listings/ListingsCreate";
import { ListingsEdit } from "./listings/ListingsEdit";
import { ListingsShow } from "./listings/ListingsShow";
import { PropertiesList } from "./properties/PropertiesList";
import { PropertiesCreate } from "./properties/PropertiesCreate";
import { PropertiesEdit } from "./properties/PropertiesEdit";
import { PropertiesShow } from "./properties/PropertiesShow";
import { AgentsList } from "./agents/AgentsList";
import { AgentsCreate } from "./agents/AgentsCreate";
import { AgentsEdit } from "./agents/AgentsEdit";
import { AgentsShow } from "./agents/AgentsShow";
import { UsersList } from "./users/UsersList";
import { UsersCreate } from "./users/UsersCreate";
import { UsersEdit } from "./users/UsersEdit";
import { UsersShow } from "./users/UsersShow";
import { httpAuthProvider } from "./auth-provider/ra-auth-http";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"login"}
        dataProvider={dataProvider}
        authProvider={httpAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Transactions"
          list={TransactionsList}
          edit={TransactionsEdit}
          create={TransactionsCreate}
          show={TransactionsShow}
        />
        <Resource
          name="Listings"
          list={ListingsList}
          edit={ListingsEdit}
          create={ListingsCreate}
          show={ListingsShow}
        />
        <Resource
          name="Properties"
          list={PropertiesList}
          edit={PropertiesEdit}
          create={PropertiesCreate}
          show={PropertiesShow}
        />
        <Resource
          name="Agents"
          list={AgentsList}
          edit={AgentsEdit}
          create={AgentsCreate}
          show={AgentsShow}
        />
        <Resource
          name="Users"
          list={UsersList}
          edit={UsersEdit}
          create={UsersCreate}
          show={UsersShow}
        />
      </Admin>
    </div>
  );
};

export default App;
