import mysql from "mysql";

var con = mysql.createConnection({
  host: "data-avimo.cgriqmyweq5c.us-east-2.rds.amazonaws.com",
  user: "testing",
  password: "Pruebas%ALI%2020",
  database: "testing_ali_fullstack",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

export const Insert = (args) => {
    const {FirstName, SecondName, FatherLastName, MotherLastName, Birthday, Phone, Email} = args
    var sql = `insert into users_test_jorge_gallardo (FirstName, SecondName, FatherLastName, MotherLastName, Birthday, Phone, Email)  values('${FirstName}', '${SecondName}', '${FatherLastName}', '${MotherLastName}', '${Birthday}', '${Phone}', '${Email}' )`;
    const query = new Promise((resolve, reject) => {
      con.query(sql, function (err, result) {
        if (err) return reject(err);
        resolve(result);
      });
    });
    return {...args};
  };
  
  
export const Select = () => {
  var sql = "select * from users_test_jorge_gallardo";
  const query = new Promise((resolve, reject) => {
    con.query(sql, function (err, result) {
      if (err) return reject(err);
      resolve(result);
    });
  });
  return query;
};
