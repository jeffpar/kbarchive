---
layout: page
title: "Q223003: XFOR: OLE Objects Sent From GroupWise To Exchange Are Lost"
permalink: /kb/223/Q223003/
---

## Q223003: XFOR: OLE Objects Sent From GroupWise To Exchange Are Lost

	Article: Q223003
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	OLE objects sent from Novell GroupWise to Exchange Server using the Microsoft
	Exchange Connector for Novell GroupWise will be lost when the message is
	received by the user in Exchange Server. Note that this applies to all versions
	of the GroupWise connector.
	
	CAUSE
	=====
	
	The API gateway does not recognize OLE objects in the message body and is
	discarding these objects.
	
	STATUS
	======
	
	Microsoft confirms this to be a limitation of the GroupWise connector which is
	dependent on the API gateway for interoperability between Exchange Server and
	Novell GroupWise.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
