---
layout: page
title: "Q234398: XCLN: Extended Chars. Not Displayed Correctly in Meeting Request"
permalink: /kb/234/Q234398/
---

## Q234398: XCLN: Extended Chars. Not Displayed Correctly in Meeting Request

	Article: Q234398
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 23-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you send a meeting request that contains extended ASCII characters in the
	Place or Location field from a Novell GroupWise client to Microsoft Outlook or
	from Outlook to GroupWise, the extended characters are displayed as squares.
	
	CAUSE
	=====
	
	This problem can occur if code page conversions for the Location and Place
	fields do not convert correctly.
	
	RESOLUTION
	==========
	
	To resolve this problem, install the latest service pack for Exchange Server
	5.5.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
