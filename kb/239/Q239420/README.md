---
layout: page
title: "Q239420: XFOR: Mailbox Receives Repeated Copies of Inbound Internet Mess."
permalink: /kb/239/Q239420/
---

## Q239420: XFOR: Mailbox Receives Repeated Copies of Inbound Internet Mess.

	Article: Q239420
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An Exchange Server mailbox may receive repeated copies of the same Internet
	message in the Inbox.
	
	If you stop the Internet Mail Connector (Exchange Server version 4.0) or the
	Internet Mail Service (Exchange Server version 5.0 and later) you prevent the
	messages from appearing, but they reappear if you restart the service. No
	messages are backed up in the <drive>:\Exchsrvr\Imcdata\In folder.
	
	CAUSE
	=====
	
	The pointer for the message has not been removed from the Queue.dat file.
	
	RESOLUTION
	==========
	
	To resolve this problem perform the following steps:
	
	1. Stop the Internet Mail Connector (Exchange Server version 4.0) or the
	  Internet Mail Service (Exchange Server version 5.0 and later).
	
	2. Delete the Queue.dat file that is located in the
	  <drive>:\Exchsrvr\Imcdata folder.
	
	3. Restart the Internet Mail Connector (Exchange Server version 4.0) or the
	  Internet Mail Service (Exchange Server version 5.0 and later).
	
	Additional query words: looping ims imc
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
