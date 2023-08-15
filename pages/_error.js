import Layout from "../components/Layout";
const _error = ({statusCode}) => {
    return(
        <Layout>
            {
                statusCode ?(
                  <p className="text-center">No se pudo cargar la pagina: statusCode {statusCode}</p>  
                ):(
                    <p>No se pudo cargar esta pagina</p>
                )
                
            }
            
        </Layout>
    )
}
export default _error