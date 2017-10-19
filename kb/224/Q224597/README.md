---
layout: page
title: "Q224597: XCON: SP2 of PROFS Connector Sets Sent Date to Jan 1, 1601"
permalink: /kb/224/Q224597/
---

## Q224597: XCON: SP2 of PROFS Connector Sets Sent Date to Jan 1, 1601

	Article: Q224597
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): EXC55SP3Fix
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After upgrading an Exchange Server computer to version 5.5 Service Pack 2 (SP2),
	messages received from a SoftSwitch environment may display a sent date as
	1/1/01. If your client is configured to display a 4-digit year, you will see
	1/1/1601.
	
	If you examine the message with MDBVU, you will see a date of Jan 1, 1601. Note
	that this is the base time for the FILETIME format.
	
	CAUSE
	=====
	
	A logic change introduced in Exchange Server 5.5 SP2 can leave the date
	uninitialized. When the uninitialized SYSTEMTIME structure is passed to the
	LocalFileTimeToFileTime() function, the result is Jan 1, 1601.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: OV/VM Connector
	
	+---------------------------+
	| File name    | Version    | 
	+---------------------------+
	| Lsdiamex.exe | 5.5.2582.0 | 
	+---------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	Additional query words: SoftSwitch SSW Profs
	
	======================================================================
	Keywords          : EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
