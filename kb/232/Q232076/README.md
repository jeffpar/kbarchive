---
layout: page
title: "Q232076: XFOR: Notes Connector AV when Address Is 256 Bytes Long"
permalink: /kb/232/Q232076/
---

## Q232076: XFOR: Notes Connector AV when Address Is 256 Bytes Long

	Article: Q232076
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Notes Connector experiences an access violation during
	message conversation when the e-mail address is 256 bytes long.
	
	CAUSE
	=====
	
	The Exchange Notes Connector allocates 256 bytes for the e-mail address, which
	doesn't leave room for the trailing null if the address is 256 bytes long. It
	ends up with a longer string, which corrupts the stack. As a result, the
	Exchange Notes Connector stops.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: NOTESMC
	
	+------------------------+
	| File name | Version    | 
	+------------------------+
	| Lscms.dll | 5.5.2619.0 | 
	+------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
