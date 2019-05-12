import { connect } from 'react-redux'
import { toggleLight } from '../actions'
import { LightSwitch } from '../continuity-xr-components'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.viewMode
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(toggleLight(ownProps.filter))
})

const LightSwitchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LightSwitch);

export default LightSwitchContainer;