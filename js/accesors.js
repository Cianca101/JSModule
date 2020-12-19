let koder = [{
    email: 'emmanuel.carrillo.c@gmail.com',
    emailalt: 'na',
    name: 'Emmanuel',
    lastname: 'Cianca',
    nickname: 'Emma',
    gender: 'M',
    birthday: '19/09/1991',
    bootcamp: 'python',
    generation: 1,
    weight: 57,
    height: 1.70,

    // get fullName () {
    //     return this.name + ' ' + this.lastname
    // },
    // get Age (){
    //     let date = this.birthday.slice(this.birthday.length -4);
    //     return `${this.getFullName()} tiene ${2020 - date} años`;
    // },
    // set newbootcamp (newBootcamp) {
    //     this.bootcamp = newBootcamp
    // },
}]

koder.forEach(ce => {
    Object.defineProperty(ce, 'fullName', {
        get : function () {
            return this.name + ' ' + this.lastname
        }
    }) 
})


Object.defineProperty(koder, 'fullName', {
    get : function () {
        return this.name + ' ' + this.lastname
    }
})

console.log(koder.fullName)
console.log(koder.newbootcamp)


//////////////

let dataUsers = [
    {
        name: 'Emmanuel',
        lastname: 'Cianca',
    },
    {
        name: 'aaa',
        lastname: 'bbb',
    },
    {
        name: 'ccc',
        lastname: 'ddd',
    },
    {
        name: 'eee',
        lastname: 'fff',
    },
    {
        name: 'ggg',
        lastname: 'hhh',
    }
]

dataUsers.forEach(element => {
    Object.defineProperty(element, 'fullName', {
        get : function () {
            return this.name + ' ' + this.lastname
        }
    })
})

dataUsers.forEach(element => {
    Object.defineProperties(element, {
        "getUpper" : {
            get : function(){
                return this.name.toUpperCase + ' ' + this.lastname.toUpperCase
            }
        },
        "getLower" : {
            get : function(){
                return this.name.toLowerCase + ' ' + this.lastname.toLowerCase
            }
        },
        "getFullName" : {
            get : function () {
            return this.name + ' ' + this.lastname
        }
        },
        "setNewname" : {
            set : function(newName) {
                this.name = newName
            }
        }
    })
})