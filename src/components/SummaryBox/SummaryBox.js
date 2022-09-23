import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';

import { Box } from '@/components';
import { colors } from '@/constants';

import './SummaryBox.scss';

function SummaryBox({ item }) {
  return (
    <Box>
      <div className="summary-box">
        <div className="summary-box-info">
          <div className="summary-box-info__title">
            <span>{item.title}</span>
            <span>{item.subtitle}</span>
          </div>
          <div className="summary-box-info__value">
            <span>{item.value}</span>
          </div>
        </div>
        <div className="summary-box-chart">
          <CircularProgressbarWithChildren
            value={item.percent}
            strokeWidth={10}
            styles={buildStyles({
              pathColor: item.percent < 50 ? colors.red : colors.purple,
              trailColor: 'transparent',
              strokeLinecap: 'round',
            })}
          >
            <div className="summary-box-chart__value">{item.percent}%</div>
          </CircularProgressbarWithChildren>
        </div>
      </div>
    </Box>
  );
}

export default SummaryBox;
