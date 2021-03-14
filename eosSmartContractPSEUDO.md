
Pseudo-Code:

```
long transactionCounter
```
This is used to allow for a decaying token award quantity.
```
float transactionTypeMultiplier:
```
Each curate function awards token quantities based on these multipliers
```
*100   for    addProject
*10    for    addData
*3    for    editData
*1     for    verifyUpDn
            
```
And respectively, requires staking of a number of tokens that increases with each transaction within the past 24 hours, multiplied by:
```
*10   for    addProject
*5    for    addData
*5    for    editData
*1     for    verifyUpDn
            
```

```
constant transactionMultiplier =
```
This is the function that decreases token payout with each transaction. One option would be to use the following natural logarithmic formula for token payout:
```
( ln(transactionCounter) / (transactionCounter) ) * transactionTypeMultiplier
```

This formula is based on the value of a network according to Metcalfe's Law, which states that among social networks, the value is (n)*(ln(n)). However, music is not just a network, it has a decay in its impact, as the first to do something has more impact than the 500th. So it may seem to make sense to apply the inverse square law, (1/n^2) which applies to all forces' procession through time and space, including sound itself. Taking the inverse square of Metcalfe's law produces:
```
( n * log (n) )   /   ( n^2 ), or
( n * log (n) )   /   ( n * n), 
```
simplified to
```
( log (n) )    /   (n)
```

The graph of this function produces a decay curve with a peak of 0.3679 at `transactionCounter = 2.718`, with a relatively slow decay toward an asymptote at 0.



![Screenshot from 2021-03-14 00-10-06](https://user-images.githubusercontent.com/36178664/111061816-002ffc80-845a-11eb-86c6-630a01c961c5.png)

![Screenshot from 2021-03-14 00-10-37](https://user-images.githubusercontent.com/36178664/111061903-81878f00-845a-11eb-944c-b100a82ec86d.png)

![Screenshot from 2021-03-14 00-15-00](https://user-images.githubusercontent.com/36178664/111061910-8b10f700-845a-11eb-90a5-3aea2b8f8896.png)



Multiplied by 100, which is the maximum value for `transactionTypeMultiplier`, the number of tokens awarded would be:
```
txs      tokens
10^1 = 265
10^2 = 1060
10^3 = 2385
10^4 = 4241
10^5 = 6627
10^6 = 9543
10^7 = 12,989
10^8 = 16,966
10^9 = 21,472
```
Based on this practical maximum of tens or hundreds of thousands of tokens, it may be necessary to multiply each token award by 1000, which would still award whole tokens for a 100 `transactionTypeMultiplier` until the millionth transaction, still award at least a 'cent' (0.01) until the hundred millionth transaction, and still award at least a 'cent cent', or 0.0001 until the 147 trillionth transaction. 

Alternatively, an alternative transaction multiplier could be used:
```
(transactionCounter^e)/(transactionCounter^pi)
```
which does not have a scientific backing behind its selection but produces a higher maximum supply and a more linear curve.



Multiplied by 100, which is the maximum value for `transactionTypeMultiplier`, the number of tokens awarded would be:
```   
10^1 = 480
10^2 = 2,295
10^3 = 9,140
10^4 = 34,967
10^5 = 132,414
10^6 = 500,083
10^7 = 1,887,306
10^8 = 7,121,328
10^9 = 26,869,400
```   
The graph of this function produces a decay curve with a peak of 1 at `transactionCounter = 1`, with a very slow decay toward an asymptote at 0. This would still award whole tokens for a 100 `transactionTypeMultiplier` until the 50 thousandth transaction, still award at least a 'cent' (0.01) until the 2.7 billionth transaction, and still award at least a 'cent cent' (0.0001) until the quintillionth (10^18) transaction
The Contract Functions are:

```
function(addProject) (user stakes tokens)
function(addData) (user stakes tokens)
function(editData) (user stakes tokens)
function(verifyUpDn) (user stakes tokens)
function(comment)
function(songPlay)
function(songLikeUnlike)
function(commentLikeDislike)
function(requestArtistAccess)(keep in Beta until data integrity has been tested)
```

what needs to be kept in the state for the contract:
```
-transactioncounter
```

what needs to be kept in the state for each account:
```
-Accounts & Token values
-24hr transaction counter (require a stake of more tokens on each subsequent transaction, transaction counter decays over 24 hours)
-number of up and down votes on data supplied by the account(for data input reputation)
-number of up and down votes where account staked tokens to verify data, in which the account voted with the consensus (for curator reputation)
-link to merkle root of a private blockchain used to verify artists' info to payout in the future
```

what needs to be kept in the state for the data item, temporarily, until the data is verified by a supermajority after 10 days (staked tokens are forfeited if data is determined bad by a supermajority of up and downvotes, or if a supermajority of other up and down votes contradict the account's votes, forfeited tokens are returned to other accounts that verified with the consensus or contributed good data):
```
-account contributor & contributor's stake
-accounts upvoting data & their stake
-accounts downvoting data & their stake
-time remaining until data is ruled valid or invalid (resets after 10 days if 10-vote threshold is not reached)
```
