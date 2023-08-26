class CssClass {
    name;
    properties = [];

    constructor(name) {
        this.name = name;
        this.properties = [];
    }

    addProperty(property) {
        this.properties.push(property);
    }

    removeProperty(propertyName) {
        const newArray = [];
        for (let i = 0; i < this.properties.length; i++) {
            const item = this.properties[i];
            if (item.name !== propertyName) {
                newArray.push(item);
            }
        }
        this.properties = newArray;
    }

    getCss() {
        if (this.properties.length > 0) {
            console.log(`.${this.name} {`);
            for (let i = 0; i < this.properties.length; i++) {
                const item = this.properties[i];
                console.log(`\t${item.name}: ${item.value};`);
            }
            console.log("}");
        }
    }
}

const class1 = new CssClass("objectClass");
class1.addProperty({name: "width", value: "100px"});
class1.addProperty({name: "height", value: "200px"});
class1.getCss();

class1.removeProperty("height");
class1.getCss();