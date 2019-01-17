import * as React from 'react'
import { Container } from 'reactstrap'

interface Props {
  title: string
}

interface State {}

class Header extends React.Component<Props, State> {
  static defaultProps = {}

  constructor(props: Props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <header className="pt-3">
        <Container>
          <h1>{this.props.title}</h1>
        </Container>
      </header>
    )
  }
}

export default Header
