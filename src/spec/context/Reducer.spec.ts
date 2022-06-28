import { initialState, reducer } from '../../context';

it('reducer set initial', () => {
  const data = reducer(initialState, {
    type: 'SET_INITIAL',
  });
  expect(data).toMatchObject(initialState);
});

it('reducer set mode "dark" return "dark"', () => {
  const mode = 'dark';
  const data = reducer(initialState, {
    type: 'SET_MODE',
    payload: {
      mode,
    },
  });
  expect(data.mode).toBe(mode);
});
