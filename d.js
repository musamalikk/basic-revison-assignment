console.log("Running Assignment D")

class HashTable {
    constructor(size) {
        this.size = size;
        this.table = new Array(this.size);
    }

    hashFunction = key => key.charCodeAt() % this.size;
    put = (key, value) => this.table[this.hashFunction(key)] = value;
    get = (key) => this.table[this.hashFunction(key)];
    remove = (key) => delete this.table[this.hashFunction(key)];     
}

const hashTable = new HashTable(10);

hashTable.put("a", 1);
hashTable.put("b", 2);
hashTable.put("c", 3);
hashTable.put("d", 4);
hashTable.put("e", 5);
hashTable.put("f", 6);
hashTable.put("g", 7);
hashTable.put("h", 8);
hashTable.put("i", 9);
hashTable.put("j", 10);

console.log(hashTable.get("h"));