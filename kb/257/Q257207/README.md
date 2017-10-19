---
layout: page
title: "Q257207: XFOR: Message ID Tab Is Missing from Message Properties"
permalink: /kb/257/Q257207/
---

## Q257207: XFOR: Message ID Tab Is Missing from Message Properties

	Article: Q257207
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 25-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Exchange client software, such as Microsoft Outlook 2000, you normally see a
	Message ID tab if you open the message, click File, and then click Properties.
	However, the Message ID tab does not appear if:
	
	- The message originates from the Internet Mail Service (IMS).
	- The recipient's mailbox is on the IMS connector server.
	
	MORE INFORMATION
	================
	
	If the message enters an IMS on another server in the Exchange organization, the
	Message Transfer Agent (MTA) routes the message to the appropriate mailbox
	server, and attributes a Message ID in the process. If the message enters an IMS
	whose recipient is on the same server, the MTA does not play a role in handling
	the message because there is no communication between Exchange servers.
	Therefore, no message ID is given by the MTA, and the Exchange client does not
	see a Message ID tab under the message properties
	
	The message ID is often used to track message history between Exchange servers
	using the Message Tracking Center utility in the Exchange Administrator
	program.
	
	The Message ID tab is also missing from messages originating from other foreign
	connectors whose recipients are on the same connector servers, but the tab is
	present in messages from site-connecting connectors.
	
	
	Additional query words: missing message-ID track IMS
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
