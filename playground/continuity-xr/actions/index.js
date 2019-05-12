export const toggleLight = () => dispatch => {
    dispatch({
      type: 'TOGGLE_LIGHT'
  })
};

export const ModeFilters = {
  DAY_MODE: 'DAY_MODE',
  NIGHT_MODE: 'NIGHT_MODE'
}