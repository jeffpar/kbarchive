---
layout: page
title: "Q255169: XADM: Multiple Instances of Esefile.exe Causes Computer to Hang"
permalink: /kb/255/Q255169/
---

## Q255169: XADM: Multiple Instances of Esefile.exe Causes Computer to Hang

	Article: Q255169
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 10-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run Esefile.exe to checksum an Exchange Server information store and
	two or more instances of Esefile.exe are run simultaneously on the same computer
	(for speed and efficiency), the computer may stop responding (hang) until the
	process is finished.
	
	The Esefile process takes up so much CPU time in this configuration that it may
	seem like the computer is unresponsive. There is no observable activity (this
	includes keyboard updates, screen refreshes, network connections, and
	performance monitoring).
	
	Although the same issue can occur when you run one instance of Esefile, you can
	work around this situation by running Esefile at a "low" process priority.
	However, you cannot use this method to work around issues when you run two
	instances of Esefile simultaneously.
	
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
	
	MORE INFORMATION
	================
	
	The fix adds some code that slows down the Esefile process. This issue is
	actually only seen on very fast hardware (very fast multiprocessor computers).
	With the fix, Esefile runs a bit slower and gives CPU time to other threads if
	they require it.
	
	
	Additional query words: freeze freezes
	
	======================================================================
	Keywords          : kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
