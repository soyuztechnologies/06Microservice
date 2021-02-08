const express = require("express");
const port = process.env.port || 8080;
const app = express();
app.listen(port);

app.get('/', (req, res) => res.send('Hello World!'))
app.get("/Vendor", function(req,res){
	res.json([{
        "id": "1",
        "firstName": "Melisandra",
        "lastName": "Austwick",
        "companyName": "Fiveclub",
        "webSite": "Universidad de Colima",
        "emailId": "maustwick0@51.la",
        "gstNumber": "14-545-9804"
    },{
        "id": "2",
        "firstName": "Beryl",
        "lastName": "Gallimore",
        "companyName": "Mita",
        "webSite": "Lebanese University",
        "emailId": "bgallimore1@wiley.com",
        "gstNumber": "03-926-7955"
    },
    {
        "id": "3",
        "firstName": "Giff",
        "lastName": "Kendrick",
        "companyName": "Pixope",
        "webSite": "Irkutsk State University",
        "emailId": "gkendrick2@tripod.com",
        "gstNumber": "87-482-7076"
    }]);
});
app.get("/Vendor/:id", function(req,res){
	var allVendor = [
    {
        "id": "1",
        "firstName": "Melisandra",
        "lastName": "Austwick",
        "companyName": "Fiveclub",
        "webSite": "Universidad de Colima",
        "emailId": "maustwick0@51.la",
        "gstNumber": "14-545-9804"
    },
    {
        "id": "2",
        "firstName": "Beryl",
        "lastName": "Gallimore",
        "companyName": "Mita",
        "webSite": "Lebanese University",
        "emailId": "bgallimore1@wiley.com",
        "gstNumber": "03-926-7955"
    },
    {
        "id": "3",
        "firstName": "Giff",
        "lastName": "Kendrick",
        "companyName": "Pixope",
        "webSite": "Irkutsk State University",
        "emailId": "gkendrick2@tripod.com",
        "gstNumber": "87-482-7076"
    }];
	var searchResult = allVendor.find(function(element){
return 		element.id === req.params.id;
	});
	typeof(searchResult) !== undefined ? res.send(searchResult) : res.send([]);
});