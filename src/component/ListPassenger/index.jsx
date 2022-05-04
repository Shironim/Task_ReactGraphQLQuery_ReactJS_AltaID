import ListItem from '../ListItem';
import style from './style.module.css';
const ListPassenger = (props) => {
    // console.log("ini dari listPassenger", props)
    return (
        <div>
            <table className={style.table}>
                <thead>
                    <tr>
                        <td>Nama</td>
                        <td>Umur</td>
                        <td>Jenis Kelamin</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {props.state.map((state, stateIdx) => (
                        <ListItem
                            key={stateIdx}
                            data={state}
                            viewPengunjung={props.viewPengunjung}
                        />
                    ))}
                </tbody>
            </table>
        </div >
    )
}

export default ListPassenger;