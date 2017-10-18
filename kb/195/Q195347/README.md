---
layout: page
title: "Q195347: Cannot Download Large E-mail Messages Using MSN Account"
permalink: kb/195/Q195347/
---

## Q195347: Cannot Download Large E-mail Messages Using MSN Account

	Article: Q195347
	Product(s): The Microsoft Network
	Version(s): 2.5,2.51,2.52,2.6,5.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbmsn
	Last Modified: 09-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 2.5, 2.51, 2.52, 2.6, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Microsoft Outlook Express to download e-mail messages from your
	MSN, The Microsoft Network, e-mail account, all the e-mail messages may not be
	downloaded and you may receive the following error message:
	
	  Your POP3 server has not responded in 60 seconds. Would you like to wait
	  another 30 seconds for the server to respond?
	
	  Account: MSN Mail Server: pop3.email.msn.com
	
	CAUSE
	=====
	
	This behavior can occur if you attempt to download a message larger than 3
	megabytes (MB) in size. The maximum size for e-mail messages on MSN is 3 MB.
	
	RESOLUTION
	==========
	
	To resolve this issue, configure Outlook Express to download only e-mail
	messages smaller than 3 MB in size.
	
	To resolve this issue using Outlook Express Version 5.01 or earlier
	
	1. Start Outlook Express. If you are prompted to connect to MSN, click Cancel.
	
	2. On the Tools menu, click Inbox Assistant, and then click Add.
	
	3. Click to select the Larger Than <n> KB check box, where <n> is
	  the maximum message size in kilobytes (KB), and then click the up or down
	  arrows to set the maximum message size to 3000 KB or less.
	
	4. Click the Delete Off Server check box, and then click OK.
	
	5. Click OK, and then quit Outlook Express.
	
	To resolve this issue using Outlook Express 5.5
	
	1. Start Outlook Express 5.5.
	  If you are prompted to connect to MSN, click Cancel.
	
	2. On the Tools menu, point to Messages Rules, and then click Mail.
	
	3. Click the New button.
	
	4. Under "1. Select the Conditions for your rule:", select "Where the message
	  size is more than size".
	
	5. Under "2. Select the Actions for your rules:", select "Do not Download it
	  from the server".
	
	6. Under "3. Rule description:" click on the "size", click the up or down arrows
	  to set the maximum message size to 3000 KB or less.
	
	7. Click OK.
	
	8. Click OK, and then quit Outlook Express.
	
	
	Additional query words: msnetwork microsoft-net email lost missing clogged jammed 2.50 2.51 2.52 2.60 5.0 5.1
	
	======================================================================
	Keywords          : kbenv kberrmsg kbmsn 
	Technology        : kbMSNSearch kbMSN500 kbMSN252 kbMSN251 kbMSN260 kbMSN250
	Version           : :2.5,2.51,2.52,2.6,5.0
	Issue type        : kbprb
	
	=============================================================================
	
