import View from './view'
import * as actions from 'store/actions/index'
import { StoreState } from 'store/types/index'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

function mapStateToProps({ enthusiasmLevel, languageName }: StoreState) {
  return {
    enthusiasmLevel,
    languageName
  }
}

function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
  return {
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onDecrement: () => dispatch(actions.decrementEnthusiasm())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View)
