---
layout: page
title: "Q233054: XFOR: Migration Wizard Stops Processing Messages Too Soon"
permalink: kb/233/Q233054/
---

## Q233054: XFOR: Migration Wizard Stops Processing Messages Too Soon

	Article: Q233054
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
	
	The Microsoft Migration wizard stops migrating a user's files from a Lotus
	cc:Mail post office before finishing all messages.
	
	CAUSE
	=====
	
	The Export utility provided by Lotus creates entries that contain binary data in
	the text file used to import the users messages. The binary data can
	inadvertently contain bytes that have text equivalents.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Migration Wizard
	
	+--------------------------+
	| File name   | Version    | 
	+--------------------------+
	| Mlmig32.dll | 5.5.2611.0 | 
	+--------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3. Microsoft has created an updated version that can in many cases work
	around the incorrect information in the text file provided by the Export
	utility.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
