---
layout: page
title: "Q214642: XADM: Savechanges() Fails with MAPI_E_NOT_FOUND Error When Savin"
permalink: /kb/214/Q214642/
---

## Q214642: XADM: Savechanges() Fails with MAPI_E_NOT_FOUND Error When Savin

	Article: Q214642
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-JAN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The MAPI API IMessage::Savechanges() may fail with a MAPI_E_NOT_FOUND error when
	saving a message with custom properties whose property ranges are in the
	allowable ranges defined by the MAPI spec (0x6800 - 0x7FF).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	MORE INFORMATION
	================
	
	This can occur when you attemp to "overload" property IDs by using several of
	the same property tag IDs with differing types. The Micrososft Information Store
	will not allow more than a single type per property tag in a single folder.
	
	Because, internally, a folder contains both associated messages and normal
	messages in the same table, a situation can arise where two different property
	types are used for different types of messages. In this instance, the first to
	be written to the message will be the only allowable type in that folder (that
	is, Savechanges() will now fail if you attempt to use a different type for this
	property in future Savechanges calls).
	
	Recognizing the occurence can be difficult (unless you are the software author).
	Treat this as a rare case.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
