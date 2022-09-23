import {
  DashboardWrapper,
  DashboardWrapperMain,
  DashboardWrapperRight,
  SummaryBox,
  SummaryBoxSpecial,
  Box,
  RevenueByMonthChart,
  OverallList,
  RevenueList,
} from '@/components';

import { data } from '@/constants';

function Dashboard() {
  return (
    <DashboardWrapper>
      <DashboardWrapperMain>
        <div className="row">
          <div className="col-8 col-md-12">
            <div className="row">
              {data.summary.map((item, index) => (
                <div
                  key={`summary-${index}`}
                  className="mb col-6 col-md-6 col-sm-12"
                >
                  <SummaryBox item={item} />
                </div>
              ))}
            </div>
          </div>
          <div className="col-4 hide-md">
            <SummaryBoxSpecial item={data.revenueSummary} />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Box>
              <RevenueByMonthChart />
            </Box>
          </div>
        </div>
      </DashboardWrapperMain>
      <DashboardWrapperRight>
        <h2 className="mb title">Overall</h2>
        <div className="mb">
          <OverallList />
        </div>
        <h2 className="mb title">Revenue by channel</h2>
        <div className="mb">
          <RevenueList />
        </div>
      </DashboardWrapperRight>
    </DashboardWrapper>
  );
}

export default Dashboard;
