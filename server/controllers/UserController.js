const { Op } = require("sequelize");
const { Users, Children } = require("../models");

class UserController {
    static findAll(req, res, next) {
        const { page, size, searchValue, kampung } = req.query;
        if (searchValue === undefined) {
            if (kampung === undefined) {
                Users.findAndCountAll({
                    order: [
                        [
                            "updatedAt", "DESC"
                        ]
                    ],
                    include: [{ model: Children }],
                    limit: size,
                    offset: page * size,
                })
                    .then((data) => {
                        return res.status(200).json({ count: data.rows.length, rows: data.rows });
                    })
                    .catch((error) => {
                        console.log(error);
                        next ({
                            name: "notFound",
                            errors: [{ msg: "Data Not Found" }]
                        });
                    });
            } else {
                Users.findAndCountAll({
                    order: [
                        [
                            "updatedAt", "DESC"
                        ]
                    ],
                    include: [{ model: Children }],
                    limit: size,
                    offset: page * size,
                    where: {
                        hometown: {[Op.iLike]: kampung}
                    }
                })
                    .then((data) => {
                        return res.status(200).json({ count: data.rows.length, rows: data.rows });
                    })
                    .catch((error) => {
                        console.log(error);
                        next ({
                            name: "notFound",
                            errors: [{ msg: "Data Not Found" }]
                        });
                    });

            }
        } else {
            if (kampung === undefined) {
                Users.findAndCountAll({
                    order: [
                        [
                            "updatedAt", "DESC"
                        ]
                    ],
                    include: [{ model: Children }],
                    limit: size,
                    offset: page * size,
                    where: {
                        name: {[Op.iLike]: `%${searchValue}%`}
                    }
                })
                    .then((data) => {
                        return res.status(200).json({ count: data.rows.length, rows: data.rows });
                    })
                    .catch(() => {
                        next ({
                            name: "notFound",
                            errors: [{ msg: "Data Not Found" }]
                        });
                    });
                } else {
                    Users.findAndCountAll({
                        order: [
                            [
                                "updatedAt", "DESC"
                            ]
                        ],
                        include: [{ model: Children }],
                        limit: size,
                        offset: page * size,
                        where: {
                            name: {[Op.iLike]: `%${searchValue}%`},
                            hometown: {[Op.iLike]: kampung}
                        }
                    })
                        .then((data) => {
                            return res.status(200).json({ count: data.rows.length, rows: data.rows });
                        })
                        .catch(() => {
                            next ({
                                name: "notFound",
                                errors: [{ msg: "Data Not Found" }]
                            });
                        });
            }
        }
    };

    static findOne(req, res, next) {
        const id = req.params.id;
        Users.findOne({
            where: {
                id: id
            }
        })
            .then((data) => {
                return res.status(200).json({ data });
            })
            .catch(() => {
                next({
                    name: "notFound",
                    error: [{ msg: "Data Not Found" }]
                });
            })
    };

    static addUser(req, res, next) {
        const payload = {
            name: req.body.name,
            dateOfBirth: req.body.dateOfBirth,
            domisili: req.body.domisili,
            motherName: req.body.motherName,
            fatherName: req.body.fatherName,
            hometown: req.body.hometown,
            partnerName: req.body.partnerName,
            partnerFrom: req.body.partnerFrom,
            childs: req.body.childs,
            picture: req.body.picture,
            phone: req.body.phone
        };
        Users.create(payload)
            .then((data) => {
                return res.status(201).json({ data });
            })
            .catch((err) => {
                console.log(err, "<<<<<");
                next({
                    name: "InternalServerError",
                    error: [{ msg: "Failed to Create" }]
                });
            })
    };

    static editUser (req, res, next) {
        const id = req.params.id;
        const payload = {
            name: req.body.name,
            dateOfBirth: req.body.dateOfBirth,
            domisili: req.body.domisili,
            motherName: req.body.motherName,
            fatherName: req.body.fatherName,
            hometown: req.body.hometown,
            partnerName: req.body.partnerName,
            partnerFrom: req.body.partnerFrom,
            childs: [req.body.childs],
            picture: req.body.picture,
            phone: req.body.phone
        };
        Users.update(payload, {
            where: {
                id
            }
        })
            .then((data) => {
                return res.status(200).json({ data });
            })
            .catch(() => {
                next({
                    name: "InternalServerError",
                    error: [{ msg: "Failed to Update" }]
                });
            })
    };

    static deleteUser(req, res, next) {
        const id = req.params.id;
        Users.destroy({
            where: {
                id
            }
        })
            .then((data) => {
                return res.status(200).json({ data });
            })
            .catch(() => {
                next({
                    name: "InternalServerError",
                    error: [{ msg: "Failed to Delete" }]
                });
            })
    };
};

module.exports = UserController;