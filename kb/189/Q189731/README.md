---
layout: page
title: "Q189731: XFOR: When does the Message Get Archived?"
permalink: /kb/189/Q189731/
---

## Q189731: XFOR: When does the Message Get Archived?

	Article: Q189731
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Internet Mail Connector (IMC) has the ability to archive all messages, as
	well as move messages that fail content conversion (for example, MAPI to SMTP)
	to a folder. When you are tracking down a problem, it is useful to know when a
	message is written to the /Archive folder or the /Bad folder.
	
	MORE INFORMATION
	================
	
	The message flow to and from the Internet Mail Connector is as follows:
	
	Outbound:
	
	1. The thread that watches the MTS-OUT folder discovers a new message.
	
	2. The message moves into the /OUT folder and is processed.
	
	3. If the message fails content conversion and the IMC is archiving messages,
	  then the message is copied to the /BAD folder and is not archived.
	
	4. Otherwise, the message is archived (assuming Message Archival is enabled).
	
	Inbound:
	
	1. An incoming connection is accepted and passed to the worker threads.
	
	2. These threads then notify the InboundWorkerThread that an item is waiting to
	  be dequeued.
	
	3. The item (a message) is processed from the /IN directory.
	
	4. If the message fails conversion, then it is archived in the /BAD folder.
	
	5. If the message does not fail conversion, then the IMC checks to see if it
	  should pass to the extension DLL for rerouting. In which case, the IMC uses
	  rcRemailMessage to reroute the message.
	
	6. If the IMC does not need to reroute the message, then the message is
	  submitted to the MTS-IN folder
	
	7. The Message is archived.
	
	NOTE: The message archival seems to take place regardless of the return value of
	SendMessageIn, unless a Network Error is returned. Also, the copy is taken from
	the /IN folder and not from a copy in memory or MTS- IN.
	
	Additional query words: archive imc ims diagnostic logging 4.00
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
