import { gql } from '@apollo/client';

export const GET_PENGUNJUNG = gql`
query pengunjung {
  task_grapql_pengunjung {
    id
    jenis_kelamin
    nama
    umur
  }
}
`;

export const GET_PENGUNJUNG_BY_ID = gql`
query pengunjung($id: Int) {
  task_grapql_pengunjung(where: {id: {_eq: $id}}) {
    id
    jenis_kelamin
    nama
    umur
  }
}
`;