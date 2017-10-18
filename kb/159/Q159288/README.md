---
layout: page
title: "Q159288: XADM: Exchange Setup Stops During Replication with a Server"
permalink: kb/159/Q159288/
---

## Q159288: XADM: Exchange Setup Stops During Replication with a Server

	Article: Q159288
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 10-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With TCP\IP as the transport protocol, Microsoft Exchange Server Setup appears
	to stop during the replication portion of setup that displays the progress bar
	stating:
	
	  Replicating local site with server <servername>.
	
	If the <servername> and "percentage completed" referenced in the message
	does not increase over a period of approximately 15 minutes, Setup may have
	stopped.
	
	CAUSE
	=====
	
	IP routers not conforming to RFC1191 may drop frames that:
	
	- exceed the maximum MTU size for the "next hop."
	
	- have the "don't fragment" flag set.
	
	WORKAROUND
	==========
	
	Microsoft Windows NT TCP provides a number of configurable features designed to
	work around this router configuration limitation.
	
	For explanations and workarounds, please see the following articles in the
	Microsoft Knowledge Base:
	
	  Q159211 Diagnoses and Treatment of Black Hole Routers
	
	  Q136970 PMTU Black Hole Detection Algorithm Change for Windows NT 3.51
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	A network trace taken simultaneously on both the Setup server's segment and the
	server listed as <servername> is the best way to determine that this is
	indeed the issue.
	
	Analysis of the trace may reveal that frames sent from the <servername>
	computer do not arrive at the Setup server. Furthermore, no ICMP diagnostic
	frames are returned to the <servername> computer from the router.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
