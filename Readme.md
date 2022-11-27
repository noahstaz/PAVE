# PAVE

Pave is a visionary startup that aims to make peer-to-peer digital banking possible and change the banking industry once and for all. Banks use our money to make money for themselves by giving loans, charging interest rates,  imposing various fees, and funding their capital markets services. Being aware of all the positive benefits that incentivize people to use banks to secure their money,  we are asking why not make it better for people. 

PAVE will be a mobile application and a website that provides peer-to-peer digital banking services with a client-centric approach. Customers will be able to earn interest income made when their money is used by our system to lend. Our clients will be using PAVE online payment systems, which will create the foundation for our peer-to-peer banking system.

## Table of Contents

1. [PAVE](#id-section1)
2. [Landing Page](#id-section2)
3. [Signup-Login](#id-section3)
4. [KYC](#id-section4)
5. [Main](#id-section5)
6. [Market-Pricing and P2P Lending](#id-section6)
7. [My Wallet](#id-section7)
8. [Payments and Money Transfers](#id-section8)

## Inspiration

Banks use our money to make money for themselves by giving loans, charging interest rates,  imposing various fees, and funding their capital markets services. Being aware of all the positive benefits that incentivize people to use banks to secure their money,  we are asking why not make it better for people. 

To be successful, the bank of the future will need to embrace emerging technology, remain flexible to adopt evolving business models, and put customers at the center of every strategy. As PAVE Team, we asked ourselves what a digital bank of future would be like and created PAVE P2P Digital Banking Platform. 


## What it does

We are a visionary startup that aims to make peer-to-peer banking possible and change the banking industry once and for all. Pave as a client-centric digital banking platform offers their customers to earn their money’s worth with its peer to peer lending and credit technology. 

We have built an alternative to credit system of banking industry, by creating a autonomous P2P Lending/Borrowing Platform that can take the power of money from the banking industry and give it to the people.

Our features are listed below:

### Auto Lending

Our P2P lending system automatically lends the money that you deposited to other clients using the market interest rate and generate returns for you. 

### Auto Credit Limit Assignment

As soon as you lend your deposit using our P2P Lending system, we assign you with a credit limit equal to what you lent, which means that you can continue to spend the money you have while your money is working for your and generating interest income.

### Free International Transfers and Withdrawals

You can transfer money freely worldwide to other users who have a PAVE account. We use blockchain technology to enable you transfer money internationally which lets us do it totally free.

### Market Interest Rate and Limit Orders

Our interest rates will be totally determined by demand and supply market-pricing mechanism. If you don’t want to use auto-lending feature, you can always give Limit Orders and lend your money for the interest rate you choose.

### No fees

You will never pay credit card surcharge fees, transfer fees, and withdrawal fees. We prioritize you. 

### Identity Theft and Scam-Phishing Protection

Using our own unique KYC system which uses DeSo Blockchain, we save your identity in blockchain once and for all, which prevents identity-theft and protect users from getting scammed.


## How we built it 

### Landing Page

We have used React to design and implement the Landing page. We gave importance to the UI/UX and worked on it 4+ hours to make it as smooth as possible.

### Log-in, Signup Pages

We used React to build log in and sign up pages. For sign up, user information, username chosen, email addresses, and passwords are checked for validity. For logging in, entered inputs are crosschecked with backend stored user info, and if successful, log users into system with name displayed on the site navbar instead of login and signup buttons.

### Know Your Customer (KYC)

We implemented a KYC verification to our system, since we need to protect our systems from identity theft and phishing, while also preventing it to be used for money-laundering. Once the user logged in, the website directs the user to our main page which our P2P Lending system is implemented. However, if the user did not complete the KYC, it can't access our deposit/withdraw/transfer features which will also not allow them to use our P2P Lending platform. There is a pop-up in the main-page which requests user to complete KYC. KYC verification basically asks the user for their Legal Name, Legal Surname, ID Number, and a picture of their ID/Passport/Driving License. Once it is submitted it succesfully, it generally takes our system to verify KYC documents 5-10 minutes. Then, the user can access to deposit/withdraw/transfer features. 


### Main Page - P2P Lending Platform

This was one of the hardest part of our project, which we worked on more than 10 hours. We have created a demand-supply market-pricing algorithm to calculate market interest rate. Users will be able to borrow and lend as they want to. They can create Limit orders which allows them to choose from which interest rate and how much money they want to lend or borrow. They can also create Market orders which automatically sets the interest rate to current market interest rate and allows the user to choose how much they want to lend or borrow. As soon as they create a Limit or Market order the Borrow/Lend table in our main page adds the order amount to the row of requsted interest rate and then, if there is a match between borrow requests and lend request, it matches them and creates a trade, which will change the amount in My Wallet part accordingly. It basically works like real-life market exchange which matches the prices and amounts, creates trades, and changes the price. 


### My Wallet Page

We also created a my wallet page which users can go to make deposits, withdrawals, transfers and see their earnings or borrowings. Since we can't actually deposit and withdraw real money into our system for now, we just asked the user how much they want to deposit and withdraw in those pages and implemented a balance calculation changing according to these requests. Transfer feature asks the username of the client that you want to transfer money to and changes the account balance of the sending user and receiving user accordingly. Basic template of My Wallet page is also implemented to the main page for user to see its account balance, lending amount, borrowing amount in real time according to the trades its making in p2p platform. 

### App

For the project of the main component that we put together is a working mobile app created with Android Studio. The purpose of the mobile app is to complement the web-app, and allow users to access their account on the go. In the App we created a working sign-up / login page that will not let a user enter the app until they sign-up. We had UI / UX in mind while creating the app aswell making it easy to navigate to different components in the app, and we also used a black and while colour scheme making the app visually appealing.

Once the user signs into our mobile app, they are presented with the main wallet page with shows them their balance in their desired currency, the user's transaction history, and allows them to switch to an account, lending, move money or request money page. The move money page features a QR code scanner that when the user scans another user's unique QR code they will be able to send money to them. The mobile app will also prompt users to the web-app if they are yet to complete their KYC before sending or receiving money.

## Challenges we ran into

During the website development process, our computers crashed multiple times, leading to a loss of progress. Also from the minimal front-end experience that most of us had, running into errors at times meant hours of searching for the solution.

The fact that most of us were inexperienced in web and app development was a challenge to overcome. All of us had to learn a lot of material quickly and mobilize what we know to reach the goals of our project.

The whole idea of creating a P2P Lending system was vague for us at first, we needed to do the calculations and come up with an algorithm and create a table interface which matches orders and remove them from the table whereas also causing changes in account balances which was a new experience for all of the group members.

During the stages of developing the mobile app, our team had very little experience with Android Studio, but we were inspired to learn how to make a working app. After continuous merge conflicts, we eventually found our grove and built a working mobile app on Android studio which acts as a complementary resource the the PAVE web-app.

In conclusion, the whole experience was a big challenge for us and as we would go forward, we had to learn new things all the time, and code for long hours which was a big challenge for us considering the real scale of the project. 

## Accomplishments that we're proud of 

In the end our website and app has a UI/UX that we were proud of. It performed all the goals we set out for it to accomplish and more, with the success link to P2P Lending platform. 

We were able to create a market-pricing algorithm and change the real-time interest rate according to excessive demand and excessive supply, this was something that we are proud of and, although took an overwhelming challenge to overcome, made us all proud. We were able to divide the work fairly and help each other whenever needed. We were able to be inclusive of each member’s ideas and make something that we can all be proud of.

We were able to build a webapp that works jointly with our mobile app, which seemed impossible to do it, but with our collaboration and chemistry as a team, we were able to increase our productivity and bring the project to a point beyond what we thought we could do at first.

## What we learned

Every step of this project was new for us, so we were able to embrace this situation as a chance for learning. We were able to learn how to develop a webapp using tools such as React, CSS, and JavaScript. We were able to learn how android studio works. We learned a lot about how market-prices are set and how markets work, how they are created, and how to achieve fast deposits/withdrawals/transfers between two different wallets.

We also learned a lot about current banking system and its issues. We discussed the issue from an economics perspective and analyze the scale of this problem, and capacity of our solution.

### How to Run

Go to link: http://pave-p2p.tech


### How to Use the Project

The project can be use to build:

* Digital Banking apps
* Market-pricing tests
* Virtual money transfer tests
* Buy-Sell Trading algorithm tests

### Credits

Coded by Karel, Berat, Noah, Kiamehr and Kevin.

### License

The MIT License (MIT) Copyright (c) 2022, PAVE Team

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Accessibility Statement for PAVE
### This is an accessibility statement from PAVE.

#### Conformance status
The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. PAVE is partially conformant with WCAG 2.1 level AA. Partially conformant means that some parts of the content do not fully conform to the accessibility standard.

#### Feedback
We welcome your feedback on the accessibility of PAVE. Please let us know if you encounter accessibility barriers on PAVE:

E-mail: noah.stasuik@gmail.com
Date
This statement was created on November 27, 2023 using the W3C Accessibility Statement Generator Tool.

