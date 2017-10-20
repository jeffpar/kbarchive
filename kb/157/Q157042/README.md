---
layout: page
title: "Q157042: XFOR: Event ID 4018 if IMC Started Without Private IS"
permalink: /kb/157/Q157042/
---

## Q157042: XFOR: Event ID 4018 if IMC Started Without Private IS

{% raw %}

	Article: Q157042
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 05-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You might receive the following error message when you attempt to start the
	Microsoft Exchange Internet Mail Connector (IMC) service using the Services
	applet in the Control Panel:
	
	  Error 2140: An internal Windows NT error occurred.
	
	The following event will be logged in the Windows NT Event Viewer:
	
	  Event ID: 4018
	  Source: MSExchangeIMC
	  Category: Intialization/Termination
	
	  Unable to start the Internet Mail Connector service because MAPI could not be
	  initialized.
	
	MORE INFORMATION
	================
	
	This error will occur if a Microsoft Exchange Private Information Store (IS)
	does not exist on the Microsoft Exchange Server that the IMC is located on. The
	IMC requires a Private IS in order to temporarily store inbound SMTP messages
	until they can be routed to the intended recipient(s).
	
	When the IMC receives a message destined for a user on another Microsoft Exchange
	Server, it temporarily stores the message in the Private IS. The message is then
	picked up by the Microsoft Exchange Message Transfer Agent (MTA) and transferred
	to that user's mailbox on their Microsoft Exchange Server.
	
	RESOLUTION
	==========
	
	If no Private IS exists on the Microsoft Exchange Server that the IMC is located
	on, add one by following these steps:
	
	1. Start the Microsoft Exchange Administrator program.
	
	2. Open the File menu, click New Other, and click Information Store.
	
	3. Select Private as the Information Store Type.
	
	4. In the Server box, select the name of the Microsoft Exchange Server to which
	  the store will be added.
	
	5. Click OK.
	
	
	Additional query words: public
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
