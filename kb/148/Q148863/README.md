---
layout: page
title: "Q148863: Error Message: The System Has Detected a Conflict..."
permalink: kb/148/Q148863/
---

## Q148863: Error Message: The System Has Detected a Conflict...

	Article: Q148863
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are running Windows 95 and using the TCP/IP protocol, you may receive
	an error message similar to one of the following messages:
	
	  The system has detected a conflict for IP address <xxx.xxx.xxx.xxx>
	  with the system having hardware address <yy-yy-yy-yy-yy-yy>.
	
	  The system detected an address conflict for IP address
	  <xxx.xxx.xxx.xxx> with the system having hardware address
	  <yy-yy-yy-yy-yy-yy>. The local interface is being disabled.
	
	CAUSE
	=====
	
	There is another computer on the network using the same IP address.
	
	RESOLUTION
	==========
	
	To correct this problem, change the IP address. To do so, follow these steps:
	
	1. In Control Panel, double-click Network.
	
	2. Click the TCP/IP protocol, and then click Properties.
	
	3. On the IP Address tab, configure the protocol to use a different IP address
	  that is not already in use on the network.
	
	4. Click OK.
	
	MORE INFORMATION
	================
	
	This error message occurs on both computers with the same IP address. The
	computer that is started second displays the message shortly after logging on.
	The computer that is started first displays the message shortly after the second
	computers logs on.
	
	======================================================================
	Keywords          : kberrmsg kbnetwork win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
