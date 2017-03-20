const postcss = require('postcss');
const selectorParser = require('postcss-selector-parser');

const addPrefix = (prefix) => {
  return (selectors) => {
    selectors.each((selector) => {
      for (let node of selector.nodes) {
        node.replaceWith(
          `${node.spaces.before}${prefix} ${node.value}${node.spaces.after}`
        );
      }
    });
  };
};

module.exports = (css, prefix = '.scoped') => {
  const ast = postcss.parse(css);

  ast.walkRules((rule) => {
    rule.selector = selectorParser(addPrefix(prefix)).process(rule.selector).result;
  });

  return ast.toString();
};
