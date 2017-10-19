---
layout: page
title: "Q166641: Limiting the Size of Outbound Messages"
permalink: /kb/166/Q166641/
---

## Q166641: Limiting the Size of Outbound Messages

	Article: Q166641
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is possible to limit the size of messages moving through LinkAge connectors.
	To do this, see the "More Information" section.
	
	MORE INFORMATION
	================
	
	- In Microsoft Exchange Server, open a connector's property page. On the
	  General tab, change the Message Size/Maximum value to the size you require.
	  This entry is measured in kilobytes.
	
	When sending messages to large distribution lists containing Exchange Server
	users, senders may receive an error message stating that the message is too
	large for to be delivered. This can happen even if the message body is small,
	because the message header's distribution list may be fanned out to a large
	size.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : :5.0
	Issue type        : kbinfo
	
	=============================================================================
	
