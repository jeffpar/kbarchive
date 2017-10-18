---
layout: page
title: "Q164862: XCON: MTA Raises Exception Error on X.25 Connections"
permalink: kb/164/Q164862/
---

## Q164862: XCON: MTA Raises Exception Error on X.25 Connections

	Article: Q164862
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Server MTA may raise an exception error on X.25
	connections. Specifically, a RaiseException() may occur in the X.25 DMOD in the
	MTA.
	
	CAUSE
	=====
	
	RaiseException()is called from the MTA code when it receives an X.25 result for
	an X.25 control block (CB) that no longer exists. This condition should be
	handled by the MTA rather than causing the MTA to stop. The error handling was
	changed to remove the RaiseException() and add in a DebugBreak() for the debug
	build (in Ntil\Cc\Sbpdeccb.c).
	
	The change allows the MTA to obtain more information the next time it happens
	with the debug build, and still does not stop normal running of retail builds.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0.
	This problem was corrected in the latest Microsoft Exchange 4.0 U.S. Service
	Pack. For information on obtaining the service pack, query on the following word
	in the Microsoft Knowledge Base:
	
	  " SERVPACK " (without the quotation marks)
	
	Additional query words: unhandled access violation AV GPF general protection fault invalid page illegal operation
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
