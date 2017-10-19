---
layout: page
title: "Q150927: XCON: MTA Continuously Dialing RAS Connection"
permalink: /kb/150/Q150927/
---

## Q150927: XCON: MTA Continuously Dialing RAS Connection

	Article: Q150927
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork
	Last Modified: 26-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Message Transfer Agent (MTA) might continuously attempt
	to initiate a RAS connection after a communications error. The MTA might fail to
	wait the full time out period as defined in the Open Interval value.
	
	CAUSE
	=====
	
	This is caused by the way that the MTA responds to certain RAS error conditions.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in Microsoft Exchange Server 4.0 U.S.
	Service Pack 2. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	
	The Open Interval value is defined on the Messaging Defaults tab of the MTA Site
	Configuration properties page in the Microsoft Exchange Administrator program.
	The default value is 600 seconds.
	
	This error condition is usually characterized by the following sequence of Event
	ID's:
	
	Event ID Description
	-------- -----------
	9311     A RAS communications error has occurred...
	     RAS error code returned: 629
	1028     A connection error occurred...
	     Error code=29954
	1294     An association with entity...
	     RAS connection ended abnormally.
	289      A connection to...
	     RAS could not be opened.
	
	Note: These events will appear in the event log in the reverse order due to the
	display characteristics of Windows NT Event Viewer.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbnetwork 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
