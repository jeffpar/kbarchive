---
layout: page
title: "Q169998: XCON: ISOCOR MTA Does Not Accept BP15 Attachments"
permalink: kb/169/Q169998/
---

## Q169998: XCON: ISOCOR MTA Does Not Accept BP15 Attachments

	Article: Q169998
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When sending a message from a Microsoft Exchange Server system to an ISOCOR
	message transfer agent (MTA), the ISOCOR system's client, when opening the
	message, may encounter the following error:
	
	  Error decoding folder INTRAY; invalid length
	
	After closing the error message, the contents of the message will appear.
	However, the attachment will be missing.
	
	CAUSE
	=====
	
	The problem occurs because the ISOCOR system does not support the use of Body
	Part 15 (BP15)-type attachments.
	
	RESOLUTION
	==========
	
	To solve this problem, go into the Exchange Server Administrator program and
	open the properties page for the X.400 connection to the ISOCOR system. Go to
	the Advanced tab and in the X.400 Link Options section, click to clear the
	"Allow BP15" checkbox. Restart the MTA service and send the message again. This
	behavior is by product design.
	
	Additional query words: Isocor BP15 intray
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
