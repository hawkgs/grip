import * as React from 'react';

import { loadData, saveData } from '../storage/Storage';
import { DataStore } from '../model';
import { Route, Switch } from 'react-router-dom';
import { RootRoute, AddCarRoute, DriveRoute, SettingsRoute } from '../routing/Routes';
import { Landing } from './landing/Landing';
import { AddCar } from './add-car/AddCar';
import { Drive } from './drive/Drive';
import { Settings } from './settings/Settings';

interface AppProps {
  history: any;
}

export class App extends React.Component<AppProps, {}> {
  data: DataStore;

  constructor(p: AppProps) {
    super(p);
    this.data = loadData();

    window.onbeforeunload = () => {
      saveData(this.data);
    };

    if (this.data.selectedCar) {
      this.props.history.push(DriveRoute);
    }
  }

  render() {
    return (
      <div className="app">
        <Switch>
          <Route
            path={RootRoute}
            exact={true}
            render={() => {
              return (
                <Landing data={this.data} />
              );
            }}
          />
          <Route
            path={AddCarRoute}
            exact={true}
            render={() => {
              return (
                <AddCar />
              );
            }}
          />
          <Route
            path={DriveRoute}
            exact={true}
            render={() => {
              return (
                <Drive />
              );
            }}
          />
          <Route
            path={SettingsRoute}
            exact={true}
            render={() => {
              return (
                <Settings />
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}
