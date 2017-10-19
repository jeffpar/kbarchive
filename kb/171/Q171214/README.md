---
layout: page
title: "Q171214: XFOR: NDR When Replying to a Lotus cc:Mail Reply Message"
permalink: /kb/171/Q171214/
---

## Q171214: XFOR: NDR When Replying to a Lotus cc:Mail Reply Message

	Article: Q171214
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you receive a reply from a Lotus cc:Mail user through a cc:Mail post office
	(PO2) located behind a cc:Mail router, you may receive a non- delivery report
	(NDR) if you attempt to reply to the message. However, you are able to
	successfully send and receive new messages through PO2. You are also able to
	successfully reply to new messages sent by users on PO2, and users on PO2 are
	able to successfully reply to new messages sent by you.
	
	Note that this problem does not occur if the original reply from the cc:Mail user
	is sent through a cc:Mail post office (PO1) that is not located behind a cc:Mail
	router.
	
	RESOLUTION
	==========
	
	To work around this problem, use one of the following methods:
	
	- On the Exchange Server computer, add a new cc:Mail address in the properties
	  for the custom recipient associated with the cc:Mail user who sent the
	  original reply. To do so, follow these steps:
	
	  1. In the Microsoft Exchange Administrator program, click the custom
	     recipient (the cc:Mail user who sent the original reply), and then on the
	     File menu, click Properties.
	
	  2. Click the E-mail Addresses tab.
	
	  3. Click New, click cc:Mail Address, and then click OK.
	
	  4. Type the information for the recipient's mailbox on the cc:Mail post
	     office (PO1) which is connected directly to the original Exchange Server
	     computer, click OK, and then click OK again.
	
	  5. Attempt to reply to the message again.
	
	- Send the reply through a different Exchange Server computer which is
	  connected directly to the original cc:Mail post office (PO2). In this case,
	  the two computers are not connected through a cc:Mail router. To do so,
	  follow these steps:
	
	  1. Create an Exchange Connector for Lotus cc:Mail on the Exchange Server
	     computer which is connected directly to PO2.
	
	  2. In the Microsoft Exchange Administrator program on the Exchange Server
	     computer which is connected directly to PO1, click the custom recipient
	     (the cc:Mail user who sent the original reply), and then on the File menu,
	     click Properties.
	
	  3. Click the E-mail Addresses tab.
	
	  4. Click New, click cc:Mail Address, and then click OK.
	
	  5. Type the information for the recipient's mailbox on PO1, and then click
	     OK.
	
	  6. Click the new address, click Set As Reply Address, and then click OK.
	
	  7. Attempt to reply to the message again.
	
	A similar problem is the failure of replies to SMTP messages that are received
	from the Internet connector to the cc:Mail PO. For additional information about
	this problem, please see the following article in the Knowledge Base:
	
	  Q168356 XFOR: Cannot Reply to SMTP Mail Coming from the ccMail Connector
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
