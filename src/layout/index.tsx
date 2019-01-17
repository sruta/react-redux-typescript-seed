import * as React from 'react'
import './style.css'
import { FooterSticky, Header, Body, Footer } from 'components'

interface Props {
  children: React.ReactChild | React.ReactNode
}

interface State {}

class Layout extends React.Component<Props, State> {
  static defaultProps: Props = {
    children: <div>Routes APP</div>
  }

  constructor(props: Props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <FooterSticky footer={<Footer title={'A footer'} />}>
        <Header title={'A header'} />
        <Body>{this.props.children}</Body>
      </FooterSticky>
    )
  }
}

export default Layout
