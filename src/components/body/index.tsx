import * as React from 'react'
import { Container } from 'reactstrap'

interface Props {
  children: React.ReactChild | React.ReactNode
}

interface State {}

class Body extends React.Component<Props, State> {
  static defaultProps = {
    children: <div>Ingrese aqui todo el Body</div>
  }

  constructor(props: Props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <section className="mt-3 mb-3 pt-3 pb-5">
        <Container>{this.props.children}</Container>
      </section>
    )
  }
}

export default Body
