// Component
// import PassengerInput from '../../component/PassengerInput';
import ListPassenger from '../../component/ListPassenger';
import Header from '../../component/Header';
import Loading from "../../component/Loading";
// Apollo Client
import { useQuery, useLazyQuery } from '@apollo/client';
// Query
import { GET_PENGUNJUNG, GET_PENGUNJUNG_BY_ID } from '../../GrapQL/Pengunjung/queries';
// Router
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();
    const { data, loading, error } = useQuery(GET_PENGUNJUNG);
    const [getDataById, { loading: loadingID }] = useLazyQuery(GET_PENGUNJUNG_BY_ID, {
        onCompleted: (data) => {
            navigate("/detail", { state: { data } });
        },
        onError: (error) => {
            console.log('Terjadi error di mutasi delete', { error });
        }
    });
    if (error) {
        console.log(error);
        return null
    }

    const viewPengunjung = (id) => {
        getDataById({
            variables: {
                id: id
            }
        });
    }
    return (
        loading || loadingID ? <Loading /> :
            <div>
                <Header />
                <ListPassenger
                    state={data.task_grapql_pengunjung}
                    viewPengunjung={viewPengunjung}
                />
            </div>
    )
}

export default Home;