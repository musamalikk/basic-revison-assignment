console.log("Running Assignment C")

class JsonService {
    readJsonData() { 
        console.log("Reading JSON Data")
    }
}

class XmlService {

    constructor() {
        if (XmlService.instance) return XmlService.instance;
        XmlService.instance = this
    }

    readXmlData(){
        console.log("Reading XML Data")
    }
}

class XmlToJsonAdapter {
    constructor(xmlData) {
        this.xmlData = xmlData;
    }

    readJsonData() {
        this.xmlData.readXmlData();
        console.log("Converting XML Data to JSON Data.")
    }
}

const xmlService = new XmlService()
const xmlToJsonAdapter = new XmlToJsonAdapter(xmlService)
xmlToJsonAdapter.readJsonData()                  
