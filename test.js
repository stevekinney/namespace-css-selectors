const scopeCSS = require('./');

test('it should scope a simple element rule', () => {
  const input = `div { color: red; backgroundColor: blue; }`;
  const expected = `.scoped div { color: red; backgroundColor: blue; }`;

  expect(scopeCSS(input)).toEqual(expected);
});

test('it should work with a rule with multiple declarations', () => {
  const input = `div { color: red; }`;
  const expected = `.scoped div { color: red; }`;

  expect(scopeCSS(input)).toEqual(expected);
});

test('it should take a custom rule as a second argument', () => {
  const input = `div { color: red; }`;
  const expected = `.custom div { color: red; }`;

  expect(scopeCSS(input, '.custom')).toEqual(expected);
});

test('it should work with multiple rules', () => {
  const input = `
    div { color: red; }
    a { backgroundColor: white; }
  `;

  const expected = `
    .custom div { color: red; }
    .custom a { backgroundColor: white; }
  `;

  expect(scopeCSS(input, '.custom')).toEqual(expected);
});

test('it should work when there are multiple selectors', () => {
  const input = `h1, p { color: red; }`;
  const expected = `.scoped h1, .scoped p { color: red; }`;

  expect(scopeCSS(input)).toEqual(expected);
});
