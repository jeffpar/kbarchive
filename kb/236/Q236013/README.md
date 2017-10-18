---
layout: page
title: "Q236013: IIS Clustered Sites Do Not Failover When Debugging Inetinfo.exe"
permalink: kb/236/Q236013/
---

## Q236013: IIS Clustered Sites Do Not Failover When Debugging Inetinfo.exe

	Article: Q236013
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you debug Inetinfo.exe on a node in a Windows 2000 cluster and the debugger
	is tripped, the node will not failover. The second node will not start and no
	Web sites will be available.
	
	CAUSE
	=====
	
	The IIS cluster resources stop responding when they attempt to set the
	SERVER_STATE metabase property after a failure is detected. If a resource stops
	responding, it keeps the cluster service from bringing the site online on the
	other node.
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	- End the debug session.
	
	-or-
	
	- Remove the Windows 2000 computer from the network through the network cable.
	
	Additional query words: iis
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
