---
layout: page
title: "Q183832: gethostname() Must Support Alternate Computer Names"
permalink: /kb/183/Q183832/
---

## Q183832: gethostname() Must Support Alternate Computer Names

	Article: Q183832
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Cluster Server 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the gethostname function in Windows NT, it does not support the
	ability to use alternate computer names for the computer.
	
	CAUSE
	=====
	
	The gethostname function returns the node name instead of the cluster name in
	the network name resource.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server, Enterprise
	Edition version 4.0. This problem was first corrected in Windows NT 4.0 Service
	Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition Service Pack 4.
	
	
	MORE INFORMATION
	================
	
	The change that was made in GetComputerName to support alternate computer names
	has been added to gethostname. GetComputerName checks an environment variable.
	If that variable exists, GetComputerName returns its value instead of the real
	computer name. The change was made to keep applications from breaking in a
	cluster.
	
	Additional query words: mscs
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbNTTermServ400 kbNTTermServSearch kbAudDeveloper kbClustServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
