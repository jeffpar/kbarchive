---
layout: page
title: "Q143122: Novell Netware Client for Windows NT Fails After Service Pack"
permalink: /kb/143/Q143122/
---

## Q143122: Novell Netware Client for Windows NT Fails After Service Pack

{% raw %}

	Article: Q143122
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you upgrade to Windows NT Service Pack 2 or 3, the Novell NetWare Client
	for Windows NT service does not start.
	
	CAUSE
	=====
	
	When you upgrade to the latest Windows NT Service Pack, a registry entry for the
	Novell NetWare Client for Windows NT is removed.
	
	RESOLUTION
	==========
	
	To correct this problem, reinstall the Novell NetWare Client for Windows NT or
	do the following:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Run Registry Editor (REGEDT32.EXE).
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	  \SYSTEM\CurrentControlSet\Control\ServiceGroupOrder
	
	3. Select the following entry: List
	
	4. From the Edit menu, select Multi String.
	
	5. A list of services are displayed. Add the following to the end of the list:
	
	  Netware Workstation
	  ODI
	  ODI Drivers
	
	6. Click OK and quit the Registry Editor.
	
	7. Shut down and restart Windows NT.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	

{% endraw %}
