---
layout: page
title: "Q252689: XCON: Extended Characters in Attachment Names Are Mishandled"
permalink: /kb/252/Q252689/
---

## Q252689: XCON: Extended Characters in Attachment Names Are Mishandled

	Article: Q252689
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 10-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If messages contain extended characters (for example, a German umlaut) in
	attachment names and are sent from Novell GroupWise to Exchange Server, the
	messages are rejected by the Microsoft Exchange Connector for Novell GroupWise
	and moved to the Bad folder.
	
	The following events may be logged in the application event log:
	
	  ID 6067
	  MSExchangeGWRtr, Error General, Failed to move file
	  '\\ce-nw5\sys\mail\gwdom\wpgate\api\ATT_OUT\Z(tm)s"".txt' to
	  \\NEWYORK-1\connect$\exchconn\gwrouter\GW2MEXA\Z(tm)s"".txt'
	  The system error code is 2 , The system cannot find the file specified.
	
	  Event ID 6067
	  MSExchangeGWRtr, Error General, Failed to move file
	  '\\ce-nw5\sys\mail\gwdom\wpgate\api\ATT_OUT\u.txt' to
	  '\\NEWYORK-1\connect$\exchconn\gwrouter\GW2MEXA\u.txt'
	  The system error code is 1113, No mapping for the Unicode character exists in
	  the target multi-byte code page.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
