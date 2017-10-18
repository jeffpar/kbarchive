---
layout: page
title: "Q193862: XIMS: Messages Sit in Inbound Awaiting Delivery Queue"
permalink: kb/193/Q193862/
---

## Q193862: XIMS: Messages Sit in Inbound Awaiting Delivery Queue

	Article: Q193862
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Queues property page of the Microsoft Exchange Server Internet Mail
	Service, the "Inbound Messages Awaiting Delivery Queue" shows messages to be
	delivered in the queue. However, when you click the Message Details button, a
	dialog box appears saying that the message has been deleted or delivered.
	
	CAUSE
	=====
	
	The message pointer has not been removed from the Queue.dat file. This file
	tracks the messages being processed by the Internet Mail Service and the
	message's current status.
	
	WORKAROUND
	==========
	
	To work around this problem, perform the following steps:
	
	1. Verify that the message(s) are not actually in the
	  <DRIVE>:\Exchsrvr\Imcdata\In folder. If the messages are in this
	  folder, this would indicate another problem. Regardless, proceed to step 2.
	  The following procedure will not affect any messages in the \In folder.
	
	2. Stop the Internet Mail Service.
	
	3. Delete the Queue.dat file in the <DRIVE>:\Exchsrvr\Imcdata folder.
	
	4. Restart the Internet Mail Service.
	
	5. The "Inbound Messages Awaiting Delivery Queue" should now be correct.
	
	MORE INFORMATION
	================
	
	It is conceivable that this could also occur with the "Outbound Messages
	Awaiting Delivery Queue." This could be an option for that scenario as well.
	
	Additional query words: Message stuck mail sitting sit appear appears in- bound out-bound
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
