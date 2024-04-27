import DashboardHeader from "./components/DashboardHeader";
import DashboardOverview from "./components/DashboardOverview";
import "antd/dist/antd.css";
import "./App.css";
import { Layout } from "antd";
import DashboardSearch from "./components/DashboardSearch";
import DashboardSearchResultsTable from "./components/DashboardSearchResultsTable";
const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header style={{ height: "60px" }}>
          <DashboardHeader />
        </Header>
        <div className="info-header">
          <span>ChandraShekhar</span>
          <span>Logout Icon</span>
        </div>
        <Content className="content">
          <p>Last Synced On 25/04/2024 18:59</p>
          <DashboardOverview />
          <DashboardSearch />
          <DashboardSearchResultsTable />
        </Content>
        <Footer className="footer">
          &copy; {new Date().getFullYear()}, Aparajitha Corporate Private
          Services Limited
        </Footer>
      </Layout>
    </div>
  );
}

export default App;

// import { Button } from 'antd';
// import './App.css';

// const App = () => (
//   <div className="App">
//     <Button type="primary">Button</Button>
