---
layout: page
title: "Q165845: TN3270 Clients Cannot Connect to the TN3270 Server"
permalink: /kb/165/Q165845/
---

## Q165845: TN3270 Clients Cannot Connect to the TN3270 Server

	Article: Q165845
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	TN3270 clients are unable to connect to the TN3270 Server until the TN3270
	Server is restarted. When TN3270 clients are unable to connect, a network
	monitor trace shows that the server sends TCP/IP resets to TN3270 client
	connection requests.
	
	CAUSE
	=====
	
	There was a critical section deadlock in the TN3270 Server licensing code when a
	TN3270 client attempts to connect to the TN3270 Server at the same time that a
	TN3270 client disconnects.
	
	
	RESOLUTION
	==========
	
	The TN3270 Server service has been updated to correct this problem. To resolve
	this problem, obtain the hotfix mentioned below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
