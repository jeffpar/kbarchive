---
layout: page
title: "Q214444: Delay in Displaying NetWare Server in Network Neighborhood"
permalink: /kb/214/Q214444/
---

## Q214444: Delay in Displaying NetWare Server in Network Neighborhood

{% raw %}

	Article: Q214444
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With Client Services For NetWare installed, you select a NetWare Server icon
	thourgh Network Neighborhood. It may take up to 17 seconds to display the
	folder.
	
	CAUSE
	=====
	
	Windows NT is trying to determine what operating system the target system is
	running. This query can take up to 17 seconds.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
