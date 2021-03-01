
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
Based on this practical maximum of tens or hundreds of thousands of tokens, it may be necessary to multiply each token award by 1000, which would still award whole tokens for a 100 `transactionTypeMultiplier` until the millionth transaction, still award at least a 'cent' (0.01) until the hundred millionth transaction, and still award at least a 'cent cent', or 0.0001 until the twenty billionth transaction. 

Alternatively, an alternative transaction multiplier could be used:
```
(transactionCounter^e)*((ln(transactionCounter))/(transactionCounter))
```
which does not have a scientific backing behind its selection but produces a higher maximum supply and a more linear curve.

The graph of this function produces a decay curve with a peak of 0.869 at `transactionCounter = 10.616`, with a very slow decay toward an asymptote at 0. This would still award whole tokens for a 100 `transactionTypeMultiplier` until the forty millionth transaction, still award at least a 'cent' (0.01) until the eight trillionth transaction, and still award at least a 'cent cent' (0.0001) until the quintillionth (10^18) transaction

Multiplied by 100, which is the maximum value for `transactionTypeMultiplier`, the number of tokens awarded would be:
```   
10^1 = 672
10^2 = 7,388
10^3 = 48,487
10^4 = 263,025
10^5 = 1,296,863
10^6 = 6,044,143
10^7 = 27,149,929
10^8 = 118,834,271
10^9 = 510,232,799
```   

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
