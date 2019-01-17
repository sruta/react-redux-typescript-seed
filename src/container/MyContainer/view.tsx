import * as React from 'react'
import { StoreState } from 'store/types/index'

export interface Props extends StoreState {
  match?: {
    params: {
      parameter?: string
    }
  }
  onDecrement: () => void
  onIncrement: () => void
}

interface State {}

class MyContainer extends React.Component<Props, State> {
  static defaultProps = {}

  constructor(props: Props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div>
        <h2>
          {this.props.match &&
            this.props.match.params &&
            this.props.match.params.parameter}
        </h2>
        {this.props.languageName + ' ' + this.props.enthusiasmLevel}
        <button onClick={this.props.onDecrement}>-</button>
        <button onClick={this.props.onIncrement}>+</button>
      </div>
    )
  }
}

export default MyContainer
