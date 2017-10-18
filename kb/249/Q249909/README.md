---
layout: page
title: "Q249909: Error 5719 During Logon After Restarting a Cluster Server"
permalink: kb/249/Q249909/
---

## Q249909: Error 5719 During Logon After Restarting a Cluster Server

	Article: Q249909
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to log on after restarting a Microsoft Cluster Server-based
	computer, you may receive the following error message:
	
	  Event 5719:
	  No Windows NT Domain Controller is available for domain [domain_name].
	  The following error occurred:
	  There are currently no logon servers available to service the logon request.
	
	CAUSE
	=====
	
	This behavior can occur when the WINS Client (TCP/IP) protocol is bound to the
	internal network adapter. This adapter is only for clustering.
	
	RESOLUTION
	==========
	
	To resolve this behavior, disable the binding between the WINS Client (TCP/IP)
	protocol and the internal network adapter.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
