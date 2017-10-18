---
layout: page
title: "Q203034: XIMS: Internet Custom Recipients Sending Wrong REPLY TO Address"
permalink: kb/203/Q203034/
---

## Q203034: XIMS: Internet Custom Recipients Sending Wrong REPLY TO Address

	Article: Q203034
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Exchange Internet Mail Service has the capability to route e-mail for other
	e-mail domains. Replies from "Internet" custom recipients back to the Internet
	may contain the wrong Reply To address.
	
	For example: Set up Internet custom recipients on Exchange Server with a target
	e-mail address of user@<remotedomain>.com. Then add a new second Internet
	address of user@<localdomain>.com. The custom recipient can now receive
	e-mail at user@<localdomain>.com, and have it forwarded to the target
	address of user@<remotedomain>.com. Now, the receiving mailbox
	(user@<remotedomain>.com) can reply to this message, sending it back to
	Exchange Server to be relayed on to the Internet to the originator of the
	initial message. This reply message could have the wrong Reply To address.
	
	CAUSE
	=====
	
	This was normal for the Internet Mail Service. In this situation, the Internet
	Mail Service is acting as a relay agent for the reply message. Incoming SMTP
	mail to Exchange Server will be relayed back to the sender with no modification
	of the sender's address (the sender being the original recipient of this reply
	message = user@<remotedomain>.com). Setting the Reply To address on the
	custom recipient to user@localdomain.com has no effect because the SMTP message
	is simply relayed and not compared to the directory.
	
	RESOLUTION
	==========
	
	The behavior has been changed in the latest Exchange Server 5.5 Service Pack. To
	resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, click the following article number to view the
	article in the Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	For additional information about these changes in version 5.5., click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q238471 XIMS: How to Force SMTP Messages Through the Information Store
	
	For information regarding Exchange 5.0, see the "Workaround" section below.
	
	WORKAROUND
	==========
	
	The e-mail system where the user's mailbox resides
	(user@<remotedomain>.com) must update the user's mailbox with the correct
	Reply To address.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
