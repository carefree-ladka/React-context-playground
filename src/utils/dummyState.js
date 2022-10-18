const dummyState = {
  dashboardState: {
    dashboard: [
      {
        id: 1,
        headerText: "Account Balance",
        amount: "$30,211.28",
      },
      {
        id: 2,
        headerText: "Pending",
        amount: "-$19,500.00",
      },
      {
        id: 3,
        headerText: "Processed",
        amount: "$12,000.00",
      },
      {
        id: 4,
        headerText: "Net Worth",
        amount: "$52,568.22",
      },
      {
        id: 5,
        headerText: "Investments",
        amount: "$22,568.22",
      },
      {
        id: 6,
        headerText: "Cash",
        amount: "$30,000.00",
      },
    ],
    team: { text: "Team" },
    projects: { text: "Projects" },
    calender: { text: "Calender" },
  },
  activeLink: "dashboard",
  isInViewMode: true,
};

export default dummyState;
