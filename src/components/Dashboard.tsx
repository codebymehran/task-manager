// Dashboard layout wrapper — centres and constrains content width

interface DashboardProps {
  children?: React.ReactNode;
}

const Dashboard = ({ children }: DashboardProps) => {
  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      {children}
    </div>
  );
};

export default Dashboard;
