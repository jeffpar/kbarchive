---
layout: page
title: "Q256605: Session Timeout Occurs from Server Behind a Cisco LocalDirector"
permalink: /kb/256/Q256605/
---

## Q256605: Session Timeout Occurs from Server Behind a Cisco LocalDirector

	Article: Q256605
	Product(s): Internet Information Server
	Version(s): winnt:2.0,3.0,4.0,5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 2.0, 3.0, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When users connect to a Web site that is hosted on Web servers positioned behind
	a Cisco LocalDirector, they may be disconnected from a Web site and receive the
	following error message:
	
	  Your session has timed out please log in again
	
	CAUSE
	=====
	
	The sticky settings on the Cisco LocalDirector are not set correctly, or have
	been modified. Clients are not being directed to the same server behind the
	LocalDirector. The ASP sessions on the servers that the client previously
	reached time out and send the error message.
	
	RESOLUTION
	==========
	
	Reconfigure the LocalDirector using the sticky command to ensure that the same
	client reaches the same server behind the LocalDirector. Information about
	configuring a Cisco LocalDirector can be obtained from a Cisco vendor or from
	the Cisco Web site.
	
	MORE INFORMATION
	================
	
	The sticky command ensures that the client (based on IP address) reaches the
	same server throughout the course of the transaction, and is used primarily when
	requiring consistent or constant connections to the same server (similar to
	affinity in the Windows NT Load Balancing Service). The sticky command measures
	a period of inactivity in the client. After the timeout elapses, the client
	requests may be sent to another server.
	
	
	The third-party products that are discussed in this article are manufactured by
	companies that are independent of Microsoft. Microsoft makes no warranty,
	implied or otherwise, regarding the performance or reliability of these
	products.
	
	Additional query words: Cisco Sticky Session Timeout LocalDirector ASP
	
	======================================================================
	Keywords          : kbOSWin2000 
	Technology        : kbiisSearch kbiis500 kbiis400 kbiis300 kbiis200
	Version           : winnt:2.0,3.0,4.0,5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
