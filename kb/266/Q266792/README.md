---
layout: page
title: "Q266792: XCON: Post-SP3 MTA May Stop After Reporting Event ID 4283"
permalink: kb/266/Q266792/
---

## Q266792: XCON: Post-SP3 MTA May Stop After Reporting Event ID 4283

	Article: Q266792
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In a site in which servers have many X.400 connections, some over slow lines, a
	message transfer agent (MTA) may log an event ID 4283 message that contains a
	description that is similar to the following:
	
	  Unable to recognize an internal message identifier. Internal connection
	  handle (LPI) 1-15-4 Error code: 8465 [POP4 POP4 UP 6 228] (14)
	
	The error code that the description quotes may also be 8464.
	
	Then the MTA stops responding, and you must either stop the MTA manually or
	restart the server. This occurs in build 5.5.2651.61 or later of the MTA.
	
	CAUSE
	=====
	
	This problem can occur if there is an error in the way the MTA processes its
	internal control blocks.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 Service Pack 3. This problem was first corrected in Exchange Server
	5.5 Service Pack 4.
	
	MORE INFORMATION
	================
	
	The event ID 4283 message alone is not evidence that the problem that is
	described in this article is occurring.
	
	The fix ensures that after these events are logged, control blocks are managed
	correctly so that the MTA does not become uncontrollable.
	
	Additional query words: 4283 LPI hang
	
	======================================================================
	Keywords          : exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : :5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
