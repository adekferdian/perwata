const { Children, Users } = require("../models");


class ChildrenController {
    static findAll(req, res, next) {
        Children.findAll({
            order: [
                [
                    "updatedAt", "DESC"
                ]
            ],
        })
            .then((data) => {
                return res.status(200).json({ data });
            })
            .catch((error) => {
                console.log(error);
                next ({
                    name: "notFound",
                    errors: [{ msg: "Data Not Found" }]
                });
            });
    };

    static findOne(req, res, next) {
        const id = req.params.id;
        Children.findOne({
            where: {
                id: id
            }
        })
            .then((data) => {
                return res.status(200).json({ data });
            })
            .catch((error) => {
                next({
                    name: "notFound",
                    error: [{ msg: "Data Not Found" }]
                });
            })
    };

    static addUser(req, res, next) {
        console.log(req.body.childs);
        const payload = {
            name: req.body.name,
            dateOfBirth: req.body.dateOfBirth,
            gender: req.body.gender,
            UserId: req.body.UserId,
        };
        Children.create(payload, {
            where: {
                UserId: req.params.UserId
            }
        })
            .then((data) => {
                return res.status(201).json({ data });
            })
            .catch((error) => {
                console.log(error);
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
            gender: req.body.gender,
            UserId: req.body.UserId,
        };
        Children.update(payload, {
            where: {
                id
            }
        })
            .then((data) => {
                return res.status(200).json({ data });
            })
            .catch((err) => {
                console.log(err);
                next({
                    name: "InternalServerError",
                    error: [{ msg: "Failed to Update" }]
                });
            })
    };

    static deleteUser(req, res, next) {
        const id = req.params.id;
        Children.destroy({
            where: {
                id
            }
        })
            .then((data) => {
                return res.status(200).json({ data });
            })
            .catch((err) => {
                console.log(err);
                next({
                    name: "InternalServerError",
                    error: [{ msg: "Failed to Delete" }]
                });
            })
    };
};

module.exports = ChildrenController;