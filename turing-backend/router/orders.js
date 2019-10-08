module.exports=(orders,knex,jwt)=>{
    orders.post('/',(req,res)=>{
        res.send('its working')
    })
}