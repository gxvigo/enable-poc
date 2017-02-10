# Enable middleware PoC


### APIC

- apic project with both "product" and "order" API
-- ./product
- the application has both a proxy api and loopback app (depending and what is invoked)
- api definition are stored in ./product/definitions

### BPM

Once deployed the process app "XX.twx" in IBM BPM check attributes to start process "OrderHandling" via REST API:
Request: https://ibmbpm:9443/rest/bpm/wle/v1/exposed/proces

./orderProcessingSimplified - v0.2.twx


### MISC

- SOAPUI projects with sample request and moke service for "Product" REST API
-- ./enable-poc-products-soapui-project.xml
- SOAPUI project for sample request and moke service for "CheckStock" SOAP API
-- ./enable-poc-order-soapui-project.xml

- POSTMAN collection to invoke REST services (OrderHandling process, via APIC and via BPM)
-- ./enable_PoC.postman_collection.json
