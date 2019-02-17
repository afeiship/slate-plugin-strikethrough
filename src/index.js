const STYLE = { textDecoration: 'line-through' };

export default {
  renderMark(inProps, inEditor, inNext) {
    const { children, ...attributes } = inProps;
    switch (inProps.mark.type) {
      case 'strikethrough':
        return <span style={STYLE}>{children}</span>;
      default:
        return inNext();
    }
  }
};
