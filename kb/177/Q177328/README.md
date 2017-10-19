---
layout: page
title: "Q177328: XFOR: MTA Terminates Unexpectedly with Event ID 2051 and 9405"
permalink: /kb/177/Q177328/
---

## Q177328: XFOR: MTA Terminates Unexpectedly with Event ID 2051 and 9405

	Article: Q177328
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Server message transfer agent (MTA) may terminate
	unexpectedly with the following sequence of events recorded in the Windows NT
	Server Event Viewer Application log:
	
	  Event ID: 2051
	  Source: MSExchangeMTA
	  Internal Processing
	  Description: A fatal internal MTA error occurred. Contact Microsoft
	  Technical Support. An illegal GET from element 5CF03901 occurred at
	  offset 1. [BASE XFER-IN 23 70] (16)
	
	  Event ID: 9405
	  Source: MSExchangeMTA  Field Engineering
	  Description: An unexpected error has occurred which may cause the MTA
	  to terminate.  Error: Exception 0xe0050803 occurred at Address
	  0x77f1cd91. [BASE XFER-IN 23] (16)
	
	CAUSE
	=====
	
	The MTA may experience a performance problem expanding extremely large
	distribution lists. The problem can also be triggered if the Recipient Name
	field being transferred into the MTA is larger than the buffer space available.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server,
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	If an older version of Exchsrvr\mtadata\Dbserver.sch is written over the version
	supplied in this hotfix, the MTA will crash and log the 2051 errors listed
	above.
	
	Additional query words: ASN.1 X400
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
