'use strict';

module.exports = function (Product) {

    // hide default created methods
    // https://docs.strongloop.com/display/APIC/Exposing+models+over+REST
    var isStatic = true;
    Product.disableRemoteMethod('exists', isStatic);
    Product.disableRemoteMethod("upsert", isStatic);
    Product.disableRemoteMethod("updateAll", isStatic);
    Product.disableRemoteMethod("findOne", isStatic);
    // Product.disableRemoteMethod("findById", isStatic);
    Product.disableRemoteMethod("deleteById", isStatic);
    Product.disableRemoteMethod("prototype.updateAttributes", isStatic);
    Product.disableRemoteMethod("count", isStatic);
    Product.disableRemoteMethod("createChangeStream", isStatic);
    Product.disableRemoteMethod("replaceOrCreate", isStatic);
    Product.disableRemoteMethod("replaceById", isStatic);
    Product.disableRemoteMethod("upsertWithWhere", isStatic);
};


