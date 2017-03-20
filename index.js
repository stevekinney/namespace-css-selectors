const postcss = require('postcss');

module.exports = (css, selector = '.scoped') => {
  const ast = postcss.parse(css);

  ast.walkRules((rule) => {
    rule.selector = `${selector} ${rule.selector}`;
  });

  return ast.toString();
};
