const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
  res.send({message: "API is working!", status: 200});
});

app.get('/v1/token', (req, res) => {
    if(!req.query.key) {
        res.send({error: "Please provide a valid API key"});
    }
    const key = req.query.key;
    if(!key.includes("acmKey")) {
        res.send({error: "Please provide a valid API key"});

    }
    res.send({
        token: "acmSecretToken"+validTokens[Math.floor(Math.random()*validTokens.length)],
        time: new Date().getTime()
    })
});

app.get("/v1/data", (req,res) => {
    if (!req.headers.authorization || !req.headers.authorization.split(' ')[1]) {
        return res.status(403).json({ error: 'No credentials sent!' });
    }
    console.log(req.headers.authorization);
    const token = req.headers.authorization.split(' ')[1];
    const value = token.split("SecretToken")[1];
    if(!validTokens.includes(value)) {
        return res.status(403).json({ error: 'No credentials sent!' });
    }
    return res.send({
        message: "You successfully called the API!"
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});


const validTokens = [
"1597",
"2584",
"4181",
"6765",
"10946",
"17711",
"28657",
"46368",
"75025",
"121393",
"196418",
"317811",
"514229",
"832040",
"1346269",
"2178309",
"3524578",
"5702887",
"9227465",
"14930352",
"24157817",
"39088169",
"63245986",
"102334155",
"165580141",
"267914296",
"433494437",
"701408733",
"1134903170",
"1836311903",
"2971215073",
"4807526976",
"7778742049",
"12586269025",
"20365011074",
"32951280099",
"53316291173",
"86267571272",
"139583862445",
"225851433717",
"365435296162",
"591286729879",
"956722026041",
"1548008755920",
"2504730781961",
"4052739537881",
"6557470319842",
"10610209857723",
"17167680177565",
"27777890035288",
"44945570212853",
"72723460248141",
"117669030460994",
"190392490709135",
"308061521170129",
"498454011879264",
"806515533049393",
"1304969544928657",
"2111485077978050",
"3416454622906707",
"5527939700884757",
"8944394323791464",
"14472334024676221",
"23416728348467685",
"37889062373143906",
"61305790721611591",
"99194853094755497",
"160500643816367088",
"259695496911122585",
"420196140727489673",
"679891637638612258",
"1100087778366101931",
"1779979416004714189",
"2880067194370816120",
"4660046610375530309",
"7540113804746346429",
"12200160415121876738",
"19740274219868223167",
"31940434634990099905",
"51680708854858323072",
"83621143489848422977",
"135301852344706746049",
"218922995834555169026",
"354224848179261915075"
];
module.exports = app;