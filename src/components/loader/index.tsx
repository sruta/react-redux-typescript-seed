import * as React from 'react'
import './styles.css'

interface Props {
  show: boolean
}

interface State {}

class Loader extends React.Component<Props, State> {
  static defaultProps = { show: false }

  constructor(props: Props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div
        className={
          'loader-body-fetching ' +
          (this.props.show ? 'loader-fadeIn' : 'loader-fadeOut')
        }
      >
        <div className="loader-content-fetching" />
        <div className="showbox">
          <div className="loader">
            <svg className="circular" viewBox="25 25 50 50">
              <circle
                className="path"
                cx="50"
                cy="50"
                r="20"
                fill="none"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
            </svg>
          </div>
        </div>
      </div>
    )
  }
}

export default Loader
