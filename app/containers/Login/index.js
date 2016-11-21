import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Helmet from 'react-helmet';
import MainContainer from './MainContainer/index';

export default class LoginPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="col-xs-12">
        <Helmet
          title="Acasa"
          meta={[
            { name: 'description', content: 'Acasa' },
          ]}
        />
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <h1>Login</h1>
      </div>
    );
  }
}
