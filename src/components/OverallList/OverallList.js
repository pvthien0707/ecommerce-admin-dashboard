import { data } from '@/constants';

import './OverallList.scss';

const icons = [
  <i className="bx bx-receipt"></i>,
  <i className="bx bx-user"></i>,
  <i className="bx bx-cube"></i>,
  <i className="bx bx-dollar"></i>,
];

function OverallList() {
  return (
    <ul className="overall-list">
      {data.overall.map((item, index) => (
        <li key={`overall-${index}`} className="overall-list-item">
          <div className="overall-list-item__icon">{icons[index]}</div>
          <div className="overall-list-item__info">
            <h2 className="title">{item.value}</h2>
            <span>{item.title}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default OverallList;
