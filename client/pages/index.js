
import Dashboard from "./dashboard"

const Home = () => {
  // const [sidebarOpen, setSidebarOpen] = useState(false)

  console.log(process.env.NEXT_PUBLIC_API_ACTUAL_DATA);

  return (
    <Dashboard />
    // <VerticalLayout>
    //   <Row>
    //     <Col lg="3">
    //       <WelcomeCard />
    //     </Col>
    //     <Col>
    //       <StatisticCard cols="1" />
    //     </Col>
    //   </Row>
    //   <Row>
    //     <Col xs="12" lg="4" xl="3">
    //       <CalendarCard />
    //     </Col>
    //     <Col xs="12" lg="8" xl="9">
    //       <ReviewBPMCard />
    //     </Col>
    //   </Row>
    // </VerticalLayout>
  );
};

export default Home;
