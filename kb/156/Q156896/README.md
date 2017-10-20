---
layout: page
title: "Q156896: XCON: Cannot Send to DL if Sender Does not have X.400 Address"
permalink: /kb/156/Q156896/
---

## Q156896: XCON: Cannot Send to DL if Sender Does not have X.400 Address

{% raw %}

	Article: Q156896
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you attempt send a message to a Microsoft Exchange Distribution List (DL),
	you might receive the following error:
	
	  Unable to deliver the message due to a recipient problem.
	
	This error will occur if you do not have an X.400 address. To add an X.400
	address, the Microsoft Exchange administrator will need to follow these steps:
	
	1. Start the Microsoft Exchange Administrator program.
	
	2. Select the sender's mailbox.
	
	3. Open the File menu, click Properties, click E-mail Addresses, click New,
	  click X.400 Address, and add the X.400 address.
	
	MORE INFORMATION
	================
	
	Mail can be sent to other users without any problem if an X.400 address is not
	present. However, when mail is sent to a DL, the Microsoft Exchange Message
	Transfer Agent (MTA) requires that the sender have an X.400 address.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	
	=============================================================================
	

{% endraw %}
