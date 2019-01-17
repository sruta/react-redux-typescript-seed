import * as React from 'react'

interface Props {
  children?: React.ReactChild | React.ReactNode
  footer?: React.ReactChild | React.ReactNode
}

interface State {}

const addClass = 'h-100'

class FooterSticky extends React.Component<Props, State> {
  static defaultProps: Props = {}

  constructor(props: Props) {
    super(props)

    this.state = {}
  }

  componentDidMount() {
    document.getElementsByTagName('html')[0].classList.add(addClass)
    document.getElementsByTagName('body')[0].classList.add(addClass)
    document
      .getElementsByTagName('body')[0]
      .getElementsByTagName('div')[0]
      .classList.add(addClass)
  }

  render() {
    return (
      <div className="d-flex flex-column h-100">
        <main role="main" className="flex-shrink-0">
          {this.props.children}
        </main>
        <footer className="footer mt-auto">{this.props.footer}</footer>
      </div>
    )
  }
}

export default FooterSticky
