---
layout: page
title: "Q192324: XADM: Dumpster Size Performance Monitor Value Wraps Prematurely"
permalink: kb/192/Q192324/
---

## Q192324: XADM: Dumpster Size Performance Monitor Value Wraps Prematurely

	Article: Q192324
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 15-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The value of the Performance Monitor counter, MSExchangeIS Private - Total size
	of recoverable items, displays the incorrect value and then resets to zero when
	the total dumpster size increases beyond 2 gigabytes (GB).
	
	CAUSE
	=====
	
	The information store holds this value in bytes. When the information store
	provides the value for Performance Monitor, it needs to convert the value into
	kilobytes, and copy it. There was a code defect in the way the original value
	was being converted and copied.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	Additional query words: perfmon dumpster
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
