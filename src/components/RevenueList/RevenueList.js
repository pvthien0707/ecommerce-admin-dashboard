import { ProgressBar } from '@/components';

import { data } from '@/constants';

import './RevenueList.scss';

function RevenueList() {
  return (
    <ul className="revenue-list">
      {data.revenueByChannel.map((item, index) => (
        <li key={`revenue-${index}`} className="revenue-list-item">
          <div className="revenue-list-item__info">
            {item.title}
            <span className={item.value < 50 ? 'txt-success' : 'txt-danger'}>
              {item.value}%
            </span>
          </div>
          <div>
            <ProgressBar value={item.value} />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default RevenueList;
