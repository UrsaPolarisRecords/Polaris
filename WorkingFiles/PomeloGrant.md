My name is Andrew, and my company is Ursa Polaris Records. We’ve been serving the music community for over 8 years, as a record label and a recording studio, all the while setting our sights on our north star, of eventually replacing the top-down music industry with a bottom-up, grassroots music industry. 

One piece of this puzzle is music discovery, and we’ve designed an elegant solution that uses data visualization to organize the music industry, for both listeners and industry participants.

The solution is a data visualization and music encyclopedia that is created and curated by users, in exchange for blockchain tokens. These tokens are used to set a center point for the data visualization, around which all connected musicians populate a hyperbolic tree visualization (https://en.wikipedia.org/wiki/Hyperbolic_tree)

The verified, sourced information in this encyclopedia can then be used to reward musicians directly, for the contributions they’ve already made to the world of music. This corrects for the decades of injustices perpetrated by the centralized music industry, by rewarding the musicians whose naïvate they took advantage of. We believe that this represents a public good, an alternative to rewards through copyright enforcement, and we also believe that this data visualization could be used to represent all sorts of other collaborative or social domains (podcasts, movies, WWE, tennis, etc.)  

The Problem:
Finding and discovering music is difficult. For example, one of my bands is called Monarch. 

<img width="941" alt="Screen Shot 2022-02-26 at 3 02 54 AM" src="https://user-images.githubusercontent.com/36178664/159620467-f401f1ce-25b0-4945-be99-38854e4d46c7.png">

The issue is clear, and it’s only compounding as more music is released. 

The music industry is still controlled by a set of major label gatekeepers, who spend millions of dollars to push their artists to radio and the media arms of their parent conglomerates, shutting out independent labels and artists. This allows them to take advantage of the difficulty in finding music, by being the default ‘thing to listen to’.

The problem of distribution is largely solved by solutions like Spotify and Emanate. But promotion through advertising and radio is still a captured system, and is controlled by the gatekeepers. The label-run industry (which is fundamentally people gambling on their taste in music) can only sustain itself by setting up terrible deals with naïve artists. 

Traditionally they controlled the whole process, picking the expensive engineer who’s their buddy, which the musicians have to pay for out of their 10% cut of each record sale, and so forth. This system has somewhat faded from fashion among independent labels, but its legacy remains. 

In the 1990s, the legacy label system siphoned 93% of musicians’ revenue. Now, the legacy label system siphons only 88% of musicians’ revenue. The system could still use some improvement.




The Solution:
Organize music by the connections and relationships between the people who create the music, the same way the music itself is made. Our solution uses an interactive data visualization called a HyperTree (courtesy of Xerox PARC lab) or a hyperbolic tree, to create a data map of the connections between musicians. Like this:


This system’s data source is fed when users upload and curate information, in exchange for tokens. Uploading a project, such as an album, rewards a large number of tokens, such as 100, while other less useful actions, such as upvoting and downvoting data, rewards a smaller number of tokens, such as 2. Some actions, like comments, do not reward tokens. All token awards are run through a diminishing inflation function, ln(x)x, where x is the transaction counter.
 
The tokens are used in a lottery to determine the center point of the visualization, each time the page reloads, based on the number of tokens users stake to each artist. 

So if no artists had any tokens staked to them, and you staked all 100 of your tokens to your favorite band, Nickelback, then each time a user would load the web page or open the app, there would be a much higher chance that Nickelback would be the current center point, or focus, of the Hypertree, as Led Zeppelin is in the above image.

This creates a mechanism for users, as well as artists themselves, to advertise their music using the tokens. And it’s not an insidious form of advertising: instead of interrupting your attention with an ad, it takes a process that already should be random, and puts an incentive behind it.

Milestones:

This project, tentatively entitled the Polaris Music Map, currently has a fully designed architecture and basic pseudo-code. We are open to any developers who are excited by this project, or anybody who thinks they can add value to the project and would like to join the team. 

The languages involved in the designed architecture are: 
-Javascript
-Neo4j (Graph DB with SQL-ish query language, https://neo4j.com/docs/cypher-manual/current/introduction/ )
-C++ for a relatively simple EOS smart contract (mostly packaging Neo4j commands in EOS memos, as well as some staking and liking/commenting functions). 
-Javascript Infovis Toolkit/JIT (d3-like data visualization library, https://philogb.github.io/jit/demos.html )

More details are below the main description. 

We welcome direct development contributions, perhaps even more than money, but money can be used to hire developers, so we’ve identified a few chunks of MVP that could be developed, along with an estimated cost of each. If you believe this estimate is inaccurate, please provide us another estimate and perhaps we can average all the estimates we receive for each task, to provide a clearer picture of what can be accomplished with each donation. Specific details of these tasks are below the main description.

Here are the tasks required to produce an MVP, and their respective price estimates.

-Produce MVP graph database (Neo4j) (Easy/Medium) - 5k USD
-Produce MVP project submission form (js) (Easy-ish) - 10k USD
-Produce MVP smart contract (EOSIO/Mandel) (Medium complexity) - 15k USD
-Produce MVP graph database -> JIT script (Neo4j, js, JIT) (Medium/hard) - 15k USD
-Produce MVP Javascript InfoVis Toolkit implementation (js & JIT) (medium) - 15k USD


You can find more details about the project at https://github.com/ursapolarisrecords/polaris .
You can check out some of the stuff we’ve already done at https://www.ursapolarisrecords.com/.

Thanks for taking the time to delve into what we’ve been working on, and we hope you find what we’re doing inspiring and thought-provoking.

Below are some more in-depth details about our asks, as well as our token reward mechanisms, and other details.

 -Produce MVP project submission form (js) (Easy-ish) - 10k USD

Consists of javascript form that takes data about an album, and then submits them in a transaction to the blockchain. 
Ideally, also has a search function that queries the Discogs api to autofill the javascript form.
	Data will be formatted as Cypher queries, and packaged in the memo field of the transaction.
	The form should check that all required fields are filled out before submitting the transaction.



-Produce MVP smart contract (EOSIO/Mandel) (Medium complexity) - 15k USD

	Consists of the following actions:
	submitProject (data from the project submission form are packaged in the memo in Cypher Query Language format, project ID is stored in RAM until the submission is either accepted or rejected, requires stake)
	addData (package ‘SET’ Cypher command in the memo, project ID is stored in RAM until the data is either accepted or rejected, requires stake)
	editData (package ‘SET’ Cypher command in the memo, project ID is stored in RAM until the edit is either accepted or rejected, requires stake)
	curateData (Binary Up/Dwn, project ID is stored in RAM until the submission is either accepted or rejected, requires stake).
	resolveCuration (self script that accepts or rejects any data that matches acception or rejection criteria)
	stakeNode (stake tokens to a particular node in the graph, node ID is packaged in memo field)
	like (references a particular node ID, does not require stake)
	comment (references a particular transaction, does not require stake)



-Produce MVP graph database (Neo4j) (Easy/Medium) - 5k USD

	Consists of a script that replays all transactions related to the smart contract, and imports the memo fields of the transactions into a Neo4j instance, building the database and curation info about it using the blockchain transactions as event sourcing.



-Produce MVP graph database -> JIT script (Neo4j, js, JIT) (Medium/hard) - 15k USD

	Consists of a lightweight script to fetch data from the graph DB within between four and seven degrees of separation from a home node, depending on how performant the JIT instance is with a large number of nodes.
	When the page is first loaded, the home node is a randomly chosen node, with its likelihood determined by the number of tokens staked to it.
While the user is browsing, the home node updates each time the user clicks on a new node. 




-Produce MVP Javascript InfoVis Toolkit implementation (js & JIT) (medium) - 15k USD

	Consists of a HyperTree visualization.
A non-hierarchical graph of musicians is overlaid with a hierarchical graph of groups, connected to each musician from the group. 
Each group has its nodes as sunburst charts of each musician’s involvement (count # of projects each musician from the group contributed to and chart % share of each).



The formula that controls the diminishing inflation mechanism is based on two formulas combined together. The first, a =x (ln x) , is based on Metcalfe’s law, which says that the value of a social network is x2, with later contributions suggesting a downward revision to x  (ln x). The second, a = 1x2, comes from the inverse square law, which governs the propagation of all things through spacetime, from light, to gravity, to sound itself.

The token awards for data curation are each multiplied by the formula a=ln(x)x, where a is the token award and x is the local smart contract transaction counter. The same formula a=ln(t)t is the case for musicians’ token awards, but where t is the ordered # of release date, from earliest to latest.


This formula produces a token distribution curve that looks like this:
The maximum supply at various transaction counts:
@103=23.8585414972
@106=95.4341659886
@109=214.728006592
@1012=381.750165768
@1015=596.500867873
@1018=855.287701449
.
@10100=8,140.45936536
As such, it may be necessary to multiply token rewards by an additional several orders of magnitude, perhaps 10^6.

Tokens are generated when a user submits a value-creating transaction (submit, add, edit, curation up/down vote). The number of tokens generated is ln(x)x, based on Metcalfe’s law of the value of social networks ( xln(x) ), combined with the inverse square law that governs sound and basically everything else as it decays over time and space ( 1x2 ). 

Users stake a small spam fee, which increases 61.8% with each additional transaction in the past hour, and then submit the same information that is in an album’s liner notes, with a source from Allmusic, Discogs, or another standardized source. They then receive their transaction token distribution, in escrow. After other users have verified the data is good, perhaps with a weeklong period of having over 10 upvotes and >98% verification (for unanimity below 50 votes), the tokens are returned from escrow.

Different actions have different multiples of token distribution. For example, with a 106 token multiple to facilitate reasonable supply levels, if a user submits a transaction that is the 420th transaction, they would receive:
  1,438,155.88 tokens for a project submission (0.0143815588*100 tokens per add project)
  143,815.588 tokens for adding a datum (0.0143815588*10 tokens per add data)
  28,763.1176 tokens for editing data (0.0143815588*2 tokens per edit data)
  14,381.5588 for upvoting/downvoting data (0.0143815588*1 token per curate)
*0.0143815588 = ln(420)420
 if a user submits a transaction that is the 69,420th transaction, they would receive:
  16,058.67 tokens for a project submission (0.0143815588*100 tokens per add project)
  1,605.867 tokens for adding a datum (0.0143815588*10 tokens per add data)
  321.1734 tokens for editing data (0.0143815588*2 tokens per edit data)
  160.5867 tokens for upvoting/downvoting data (0.0143815588*1 token per curate)
*0.0001605867 = ln(69,420)69,420


Further design details are located at our Github, https://github.com/ursapolarisrecords/polaris .



Proof of your work goes a long way to make sure the community knows your project’s here to stay: GitHub repo, user study, wireframes, etc. You should also show what you’ve built and achieved so far.

Mention clear “asks”
Use the description area to your advantage! Let the community know how they might help your project: freely mention if you are looking for help mentoring, team members, additional resources. Your grant page is yours!

Be clear on milestones
How might the funds from the community help your project reach greater heights? What are the new features you’re going to be building, or what are the parts that you’d want to maintain? Putting clear milestones on the Grants description helps the community to get to know you and your project better.
Pomelo Grants happen every quarter.  Make sure that you are hitting your milestones each quarter to build trust with your contributors that you are a worthy project to fund again next quarter!

Share your grant to your community
Now that your grant page is ready with a swanky header, clear descriptions, and up-to-date info, it’s time to share your grant with your community! Choose a compelling image to represent your grant and promote your grant through platforms such as Twitter, Reddit, Discord, or Telegram groups are the most commonly used platforms. You can also pin a Github issue at the top of your Github, mention it in the README or wiki docs – the more eyeballs you get to your grant page, the more potential funding you’re going to get.

Follow the Rules


 -Produce MVP project submission form (js) (Easy-ish) - 5k USD

Consists of javascript form that takes data about an album, and then submits them in a transaction to the blockchain. 
	Data will be formatted as Cypher queries, and packaged in the memo field of the transaction.
	The form should check that all required fields are filled out before submitting the transaction.



-Produce MVP smart contract (EOSIO/Mandel) (Medium complexity) - 15k USD

	Consists of the following actions:
	submitProject (data from the project submission form is packaged in the memo, project ID is stored in RAM until the submission is either accepted or rejected)
	addData (package ‘SET’ Cypher command in the memo, project ID is stored in RAM until the data is either accepted or rejected)
	editData (package ‘SET’ Cypher command in the memo, project ID is stored in RAM until the edit is either accepted or rejected)
	curateData (Binary Up/Dwn, project ID is stored in RAM until the submission is either accepted or rejected).
	resolveCuration (self script that accepts or rejects any data that matches acception or rejection criteria)
	stakeNode (stake tokens to a particular node in the graph, node ID is packaged in memo field)



-Produce MVP graph database (Neo4j) (Easy/Medium) - 5k USD

	Consists of a script that imports the memo fields of the transactions within the smart contract and replays them to build the graph database.



-Produce MVP graph database -> JIT script (Neo4j, js, JIT) (Medium/hard) - 15k USD

	Consists of a lightweight script to fetch data from the graph DB within four degrees of separation from a home node.
	When the page is first loaded, the home node is a randomly chosen node, with its likelihood determined by the number of tokens staked to it.
While the user is browsing, the home node updates each time the user clicks on a new node. 




-Produce MVP Javascript InfoVis Toolkit implementation (js & JIT) (medium) - 15k USD

	Consists of a HyperTree visualization.
A non-hierarchical graph of musicians is overlaid with a hierarchical graph of groups, connected to each musician from the group. 
Each group has its nodes as sunburst charts of each musician’s involvement (count # of projects each musician from the group contributed to and chart % share of each).






Because the transactions involved are non-financial in nature, it would be infeasible to run this solution on a fee network like Ethereum. EOS offers the possibility of running a sidechain and updating the main chain with the merkle root of the sidechain, which could allow such a solution to run indefinitely with enough staked resources.

We are happy for any monetary contribution you can provide, but if you’re a developer with experience in any of these things, we would be even happier to work with you. 

These are estimates of time and complexity based on extensive research and a high-level understanding of the necessary coding language considerations. Insights from developers, and even assistance in developing the open-source software, would be valuable, indeed valued higher than a monetary contribution by itself. 
