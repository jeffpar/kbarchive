---
layout: page
title: "Q135555: Novell NetWare 4.x Reports Incorrect Maximum Connections"
permalink: /kb/135/Q135555/
---

## Q135555: Novell NetWare 4.x Reports Incorrect Maximum Connections

	Article: Q135555
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you view a Novell NetWare version 4.x server's properties in Network
	Neighborhood, the maximum number of connections reported may be incorrect.
	
	CAUSE
	=====
	
	Windows 95 uses the same source of information as Novell's SYSCON utility did
	with Netware 3.1x server. A Netware 4.x server fails to report this information
	to the Microsoft Client for Netware Networks correctly.
	
	MORE INFORMATION
	================
	
	The maximum connection number that is reported may change randomly with other
	factors such as time or server load.
	
	This problem does not occur with Novell NetWare version 3.x servers.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
