import { ModeFilters } from '../actions'

const viewMode = (state = ModeFilters.DAY_MODE, action) => {
  switch (action.type) {
    case 'TOGGLE_LIGHT':
     console.log('sending mf');
     let baz =(state == ModeFilters.DAY_MODE) ? ModeFilters.NIGHT_MODE : ModeFilters.DAY_MODE;
     return  baz;
    default:
      return state
  }
}

export default viewMode