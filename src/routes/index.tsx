import * as React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Layout from 'layout'
import { Loader } from 'components'
import MyContainer from 'container/MyContainer'

export interface Props {
  match?: {
    params: {
      something?: string
    }
  }
}

interface State {}

const Index = () => <h2>Home</h2>
const About = (props: Props) => (
  <h2>{props.match && props.match.params && props.match.params.something}</h2>
)
const NoMatch = () => <h2>No matched route</h2>

class AppRouter extends React.Component<Props, State> {
  static defaultProps = {}

  constructor(props: Props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <React.Fragment>
        <Loader />
        <Layout>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about/something">About</Link>
              </li>
              <li>
                <Link to="/my-container/Hello">My Container</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/about/:something" component={About} />
            <Route
              path="/my-container/:parameter"
              exact
              component={MyContainer}
            />
            <Route component={NoMatch} />
          </Switch>
        </Layout>
      </React.Fragment>
    )
  }
}

export default AppRouter
