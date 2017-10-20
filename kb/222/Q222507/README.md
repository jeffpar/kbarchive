---
layout: page
title: "Q222507: Incorrect Service Pack Level Displayed After Applying Hotfix"
permalink: /kb/222/Q222507/
---

## Q222507: Incorrect Service Pack Level Displayed After Applying Hotfix

{% raw %}

	Article: Q222507
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Some hotfixes may place an incorrect service pack version number in the
	registry. The service pack version number is normally stored in the following
	REG_SZ value:
	
	  HKLM\Software\Microsoft\Windows NT\CurrentVersion\CSDVersion
	
	The CSDVersion value typically has a data value of "Service Pack X," where X is
	the service pack version number. Some post-SP3 hotfixes may replace this with a
	string such as "Service Pack 3 RC 1.32" or post-SP4 hotfixes may replace this
	with a string such as "Service Pack 4 RC 1.2."
	
	Reinstallation of the same level of the service pack may not resolve the problem.
	
	CAUSE
	=====
	
	This behavior can occur if a hotfix is built without setting the appropriate
	compiler directives to embed the correct version number in the resulting binary
	file. Because Ntoskrnl populates the CSDVersion value during boot with this
	embedded information, the incorrect value is displayed.
	
	The presence of the incorrect version string does not mean that the service pack
	is installed improperly, or that a component has been replaced with an earlier
	version.
	
	To verify that the hotfixed component is in place, check the last modified date
	and time of the fixed component in your installation with the last modified date
	and time of the same file in the last service pack applied, or of the same file
	in the hotfix installation folder.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	MORE INFORMATION
	================
	
	This problem was first noted with the hotfixes described in the following
	Microsoft Knowledge Base articles:
	
	  Q180648 Windows NT 4.0 Traps with a Stop 0x24 or Stop 0xA
	
	  Q197632 Registry Hive Fragmentation Leads to Excessive Size
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
