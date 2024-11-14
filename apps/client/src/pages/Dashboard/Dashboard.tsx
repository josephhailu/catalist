import { useGetCollectionsQuery } from '../../api/collections';

const Dashboard = () => {
  const { data, isFetching, error } = useGetCollectionsQuery({});

  return (
    <div className="nav-bar__buttons">
      <pre>{JSON.stringify(data)}</pre>
    </div>
  );
};

export default Dashboard;
