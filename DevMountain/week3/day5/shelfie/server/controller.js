module.exports = {
    getProducts: (req, res) => {
        const db = req.app.get('db');
        
        db.getProducts().then(products => {
            res.status(200).send(products)
        });
    },

    getProduct: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;

        db.getProduct(id).then(product => {
            res.status(200).send(product[id])
        }).catch(err => console.log(err));
    },

    createProduct: (req, res) => {
        const db = req.app.get('db');
        const {imgurl, name, price} = req.body;

        db.createProduct(imgurl, name, price).then(product => {
            res.status(200).send(product)
        }).catch(err => console.log(err));
    },

    updateProduct: (req, res) => {
        const db = req.app.get('db');
        const {imgurl, name, price} = req.body;
        const {id} = req.params;

        db.updateProduct(id, imgurl, name, price).then(product => {
            res.status(200).send(product)
        }).catch(err => console.log(err));
    },

    deleteProduct: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;

        db.deleteProduct(id).then(product => {
            res.status(200).send(product)
        }).catch(err => console.log(err));
    }
};