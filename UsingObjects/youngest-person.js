function solve(args) {
    function makePerson(firstName, lastName, age) {
        return {
            firstname: firstName,
            lastname: lastName,
            age: Number(age),
            toString: function() {
                return this.firstname + ' ' + this.lastname;
            }
        };
    }
    var people = [];
    for (var i = 0; i < args.length / 3; i += 1) {
        people.push(makePerson(args[i * 3], args[i * 3 + 1], args[i * 3 + 2]));
    }
    var minAgeIndex = 0,
        minAge = Number.MAX_VALUE;
    for (i = 0; i < people.length; i += 1) {
        if (minAge > people[i].age) {
            minAge = people[i].age;
            minAgeIndex = i;
        }
    }
    console.log(people[minAgeIndex].toString());
}

test1 = [
    'Gosho', 'Petrov', '32',
    'Bay', 'Ivan', '81',
    'John', 'Doe', '42'
];

test2=[
  'Penka', 'Hristova', '61',
  'System', 'Failiure', '88',
  'Bat', 'Man', '16',
  'Malko', 'Kote', '72'
];

solve(test2);