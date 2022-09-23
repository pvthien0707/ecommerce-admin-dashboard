import './Box.scss';

function Box({ purple, fullHeight, children }) {
  const className = {
    box: 'box',
    purple: purple && 'box--purple',
    fullHeight: fullHeight && 'box--full-height',
  };

  return <div className={Object.values(className).join(' ')}>{children}</div>;
}

export default Box;
