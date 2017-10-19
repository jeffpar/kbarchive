---
layout: page
title: "Q262962: Cluster Service Does Not Start with Event ID 7000"
permalink: /kb/262/Q262962/
---

## Q262962: Cluster Service Does Not Start with Event ID 7000

	Article: Q262962
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): w2000mscs kbClustering
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you enable cluster logging, the Cluster service may not start when you
	restart the computer, and may generate the following events in the System log:
	
	  Event ID: 7000
	  Source: Service Control Manager
	  Description: The Cluster Server service failed to start due to the following
	  error: The service did not respond to the start or control request in a
	  timely fashion.
	
	  Event ID: 7009
	  Source: Service Control Manager
	  Description: Timeout (120000 milliseconds) waiting for service to connect.
	
	If you attempt to start the Cluster service manually by using the Services tool
	in Control Panel, or by using the Services tool in Computer Management, you may
	receive the following error message:
	
	  Could not start the Cluster Server service on <Computername>
	  Error 2186 The service is not responding to the control function
	
	CAUSE
	=====
	
	This issue can occur if cluster logging has been configured incorrectly.
	
	RESOLUTION
	==========
	
	To resolve this issue, please see the following article in the Microsoft
	Knowledge Base for information about how to enable cluster logging:
	
	  Q168801 How to Enable Cluster Logging in Microsoft Cluster Server
	
	Also, verify that the path for the ClusterLog variable is a valid local path.
	
	MORE INFORMATION
	================
	
	For additional information about a related topic, click the article number below
	to view the article in the Microsoft Knowledge Base:
	
	  Q216237 Cluster Server Will Not Start If Cluster Log Directory Is Not Created
	
	
	Additional query words: MSCS
	
	======================================================================
	Keywords          : w2000mscs kbClustering 
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbwin2000Search kbWinAdvServSearch
	Version           : :2000,4.0
	Issue type        : kbprb
	
	=============================================================================
	
