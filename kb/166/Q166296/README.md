---
layout: page
title: "Q166296: XCON: MTA Stops Responding; Access Violation"
permalink: kb/166/Q166296/
---

## Q166296: XCON: MTA Stops Responding; Access Violation

	Article: Q166296
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbtshoot kbusage
	Last Modified: 05-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Server message transfer agent (MTA) stops responding and
	the following is reported in the Dr. Watson log:
	
	  Application exception occurred:
	     App: emsmta.DBG (pid=275)
	     When: 3/11/1997 @ 9:16:16.178
	     Exception number: c0000005 (access violation)
	
	CAUSE
	=====
	
	This is a client/server issue; the wrong data is being picked up from the X.400
	API (XAPI) call. This causes the MTA to stop responding.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	This problem does not occur in Microsoft Exchange Server version 5.0.
	
	
	Additional query words: hang crash access violation 275
	======================================================================
	Keywords          : kbtshoot kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0
	
	=============================================================================
	
