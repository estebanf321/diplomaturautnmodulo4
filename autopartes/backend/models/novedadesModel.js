var pool =require('./db');

async function getNovedades(){
    var query = 'SELECT ofertas.id_oferta, productos.descrip_prod, ofertas.precio_oferta, ofertas.cant_min FROM ofertas INNER JOIN productos ON ofertas.id_producto = productos.id_producto';
    var rows = await pool.query(query);
    return rows;

}

async function insertNovedades(obj){
    try {
        var query ="insert into ofertas set ?";
        var rows = await pool.query(query, [obj]);
        return rows;
    }
    catch(error){
    console.log(error);
    throw error;
    }
}

async function deleteNovedadesById(id){
    
        var query ='delete from ofertas where id_oferta = ?';
        var rows = await pool.query(query, [id]);
        return rows;
    }

async function getNovedadById(id){
    
        var query ='select * from ofertas where id_oferta = ? ';
        var rows = await pool.query(query, [id]);
        return rows[0];
    }

/* para MOFIFICAR UPDATE DE LOS DATOS */
async function modificarNovedadById(obj, id){
    try {
        var query ='update ofertas set ? where id_oferta= ?';
        var rows = await pool.query(query, [obj, id]);
        return rows;
    }
    catch(error){
        throw error;
    }
}



module.exports= {getNovedades, insertNovedades, deleteNovedadesById, getNovedadById, modificarNovedadById}