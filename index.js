const express  = require("express"); 
const path = require("path");
const logger = require("./logger");
const route = require("./routes/api/members");
app = express();
const getId = require("./id");
 
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.post("/login",(req,res)=>{
    const id = req.body.id
    const password = req.body.password
    const find = members.some((member)=>{
       return( member.id == id && member.password == password)
    })
    if(find){
        // id.split(" ",id)
        const names = id.split(" ")
        res.send(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Login | page</title>
            <link rel="stylesheet" href="./login.css">
        </head>
        <body>
            <header class="header">
                <h5 class="logo">WELLS</h5>
                <h5 class="logo">FARGO</h5>
            </header>
            <div class="header-img">
                <img src="./loginImg/IMG-20220824-WA0036.jpg" alt="">
            </div>
        
            <div class="page-content">
            <div class="overview">
                <div class="overview-img-cont">
                  <img src="./loginImg/IMG-20220824-WA0041.jpg" alt="">
                </div>
                <h3>Welcome ${id}</h3>
                <p class="greet">Hello ${names[0]}, </p>
                <div class="c-bal">
                    <h4>~4302</h4>
                    <h3>$65,000,000.00 <span>Current Balance</span></h3>
                </div>
                <div class="c-bal">
                    <h4>~4302</h4>
                    <h3>$65,560,830.12 <span>Available Balance</span></h3>
                </div>
            </div>
            <div class="img-slider">
                <img src="./loginImg/IMG-20220824-WA0037.jpg" alt="">
            </div>
            <div class="img">
                <img src="./loginImg/IMG-20220824-WA0035.jpg" alt="">
            </div>
            <div class="tra-hstr">
                <h2>Transaction History</h2>
            </div>
            <div class="history">
                <h4 class="date">June 26, 2021</h4>
                <div class="tra-type"><h4>Credit</h4> <h4>Wire Transfer</h4></div>
                <p class="payment-id">Payment ID: BGIO292900011</p>
                <p class="payment-id">#HUIOPI</p>
                <p class="payment-time"> Time: 3:05 pm</p>
                <h4 class="payment-amount-credit">+$1,150,000.00</h4>
            </div>
            
            <div class="history">
                <h4 class="date">June 02, 2021</h4>
                <div class="tra-type"><h4>Debit</h4> <h4>Cash Withdrawal</h4></div>
                <p class="payment-id">#BUIO68383919</p>
                <p class="payment-time"> Time: 5:40 am</p>
                <h4 class="payment-amount-debit">+$500,000.00</h4>
            </div>
        
            <div class="history">
                <h4 class="date">May 28, 2021</h4>
                <div class="tra-type"><h4>Credit</h4> <h4>Wire Transfer</h4></div>
                <p class="payment-id">Payment ID: QOP82920010110</p>
                <p class="payment-time"> Time: 11:22 am</p>
                <h4 class="payment-amount-credit">+$2,600,000.00</h4>
            </div>
        
            <div class="history">
                <h4 class="date">May 10, 2021</h4>
                <div class="tra-type"><h4>Credit</h4> <h4>Wire Transfer</h4></div>
                <p class="payment-id">Payment ID: RT6291000192</p>
                <p class="payment-id">#ATPO91</p>
                <p class="payment-time"> Time: 8:40 pm</p>
                <h4 class="payment-amount-credit">+$3,350,000.00</h4>
            </div>
        
            <div class="history">
                <h4 class="date">April 19, 2021</h4>
                <div class="tra-type"><h4>Debit</h4> <h4>Bank Withdrawal</h4></div>
                <p class="payment-id">#QW7829UTO92</p>
                <p class="payment-time"> Time: 10:21 am</p>
                <h4 class="payment-amount-debit">+$700,000.00</h4>
            </div>
        
            <div class="history">
                <h4 class="date">April 05, 2021</h4>
                <div class="tra-type"><h4>Credit</h4> <h4>Wire Transfer</h4></div>
                <p class="payment-id">Payment ID: AET7281O10YUOS</p>
                <p class="payment-time"> Time: 09:29 am</p>
                <h4 class="payment-amount-credit">+$7,200,000.00</h4>
            </div>
        
            <div class="img">
                <img src="./loginImg/IMG-20220824-WA0033.jpg" alt="">
            </div>
        
            <div class="history">
                <h4 class="date">March 14, 2021</h4>
                <div class="tra-type"><h4>Credit</h4> <h4>Wire Transfer</h4></div>
                <p class="payment-id">Payment ID: OPJS792001901</p>
                <p class="payment-id">#OP8910</p>
                <p class="payment-time"> Time: 10:33 pm</p>
                <h4 class="payment-amount-credit">+$8,550,000.00</h4>
            </div>
        
            <div class="history">
                <h4 class="date">March 03, 2021</h4>
                <div class="tra-type"><h4>Debit</h4> <h4>Bank Withdrawal</h4></div>
                <p class="payment-id">Payment ID: AW8O1UTYOO19</p>
                <p class="payment-time"> Time: 12:56 pm</p>
                <h4 class="payment-amount-debit">+$1,200,000.00</h4>
            </div>
        
            <div class="history">
                <h4 class="date">February 23, 2021</h4>
                <div class="tra-type"><h4>Credit</h4> <h4>Bank Transfer</h4></div>
                <p class="payment-id">Payment ID: QYIEOW829290211</p>
                <p class="payment-time"> Time: 10:43 am</p>
                <h4 class="payment-amount-credit">+$4,200,000.00</h4>
            </div>
        
            <div class="img">
                <img src="./loginImg/IMG-20220824-WA0034.jpg" alt="">
            </div>
        
        
            <div class="history">
                <h4 class="date">February 17, 2021</h4>
                <div class="tra-type"><h4>Credit</h4> <h4>Bank Transfer</h4></div>
                <p class="payment-id">#Oliver Twyn</p>
                <p class="payment-id">#Account No: 228119357</p>
                <p class="payment-id">#Routing No: 021000021</p>
                <p class="payment-time"> Time: 08:14 am</p>
                <h4 class="payment-amount-credit">+$13,600,000.00</h4>
            </div>
        
            <div class="history">
                <h4 class="date">February 08, 2021</h4>
                <div class="tra-type"><h4>Credit</h4> <h4>Wire Transfer</h4></div>
                <p class="payment-id">#AT72820393</p>
                <p class="payment-id">Payment ID: QYIEOW829290211</p>
                <p class="payment-time"> Time: 9:24 pm</p>
                <h4 class="payment-amount-credit">+$12,500,000.00</h4>
            </div>
        
            <div class="img">
                <img src="./loginImg/IMG-20220824-WA0042.jpg" alt="">
            </div>
        
            <div class="history">
                <h4 class="date">January 16, 2021</h4>
                <div class="tra-type"><h4>Credit</h4> <h4>Bank Transfer</h4></div>
                <p class="payment-id">#Oliver Twyn</p>
                <p class="payment-id">#Account No: 562728281</p>
                <p class="payment-id">#Routing No: 000191921</p>
                <p class="payment-time"> Time: 10:36 am</p>
                <h4 class="payment-amount-credit">+$7,000,000.00</h4>
            </div>
        
            <div class="history">
                <h4 class="date">February 17, 2021</h4>
                <div class="tra-type"><h4>Credit</h4> <h4>Wire Transfer</h4></div>
                <p class="payment-id">#QTU9922011</p>
                <p class="payment-id">Payment ID: OPSJS829291011</p>
                <p class="payment-time"> Time: 9:20 am</p>
                <h4 class="payment-amount-credit">+$19,000,000.00</h4>
            </div>
        
            <div class="img">
                <img src="./loginImg/IMG-20220824-WA0041.jpg" alt="">
            </div>
            <div class="logout-btn">
                <input type="button" value="Logout">
            </div>
            </div>
            
        
            <script src="./login.js"></script>
        </body>
        </html>`)
    }
    else{
        res.send(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta  http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>wells fagro</title>
            <link rel="stylesheet" href="style.css">
        </head>
        <body>
            <section class="showcase">
                <h1 class="showcase-logo">WELLS</h1>
                <h1 class="showcase-logo">FARGO</h1>
                <div class="h3-cnt">
                <h3 class="welcome-text">Welcome</h3>
                </div>
                <div class="info show">
                    <span class="msg-id"> ERROR: Incorrect username or password</span>
                    <span class="msg">
                      
                    </span>
                </div>
        
        <form action="./login" method="post">
            <div class="input-field id">
                <label class="label"  for="id">Username or Email</label>
                <input type="text" name="id" id="id">
            </div>
            <div  class="input-field password">
                <label class="label" for="password">Password</label>
                <input type="password" name="password" id="password">
            </div>
            <div class="checkbox">
                <input type="checkbox" name="checkbox" id="checkbox">
                <label class="label"  for="checkbox">Remember Me</label>
            </div>
        
            <div class="button">
                <input type="submit" value="Log In" id="submit">
            </div>
            <div class="image">
                <img src="./wells-fargo.jpg" alt="">
            </div>
        
        </form>
        
        
         
        
        
        </section>
        <script src="./script.js"></script>
        </body>
        </html>`)
    }

})

//set a static folder 
app.use(express.static(path.join(__dirname,"wells")));


 



const PORT = process.env.PORT || 4000;
 app.listen(PORT, ()=> console.log("server runing on port:",PORT));