import style from './style.module.css'

const ListItem = (props) => {

    const { id, nama, umur, jenis_kelamin } = props.data;
    console.log("ini dari listItem", props);
    return (
        <tr>
            <td>{nama}</td>
            <td>{umur}</td>
            <td>{jenis_kelamin}</td>
            {/* cek apakah props viewPengunjung ada */}
            {
                props.viewPengunjung
                    ? <td onClick={() => props.viewPengunjung(id)}>
                        <button className={style.btnView}>View</button>
                    </td>
                    : <></>
            }

        </tr>
    )
}

export default ListItem;