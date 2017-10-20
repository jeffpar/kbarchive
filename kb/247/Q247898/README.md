---
layout: page
title: "Q247898: Cannot Add LPR Port in Add Printer Wizard on Windows NT 4.0"
permalink: /kb/247/Q247898/
---

## Q247898: Cannot Add LPR Port in Add Printer Wizard on Windows NT 4.0

{% raw %}

	Article: Q247898
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you view the properties of your print server, you may find that not all of
	the line print remote (LPR) ports appear. Also, LPR may not be an available
	option for adding ports, either in the Add Printer Wizard or from the Ports tab
	of the server's properties dialog box.
	
	When you use the Tlist.exe utility, which is in the Microsoft Windows NT Server
	4.0 Resource Kit, to display a list of tasks that are running on your computer,
	Lprmon.dll is not in the list of modules running in Spoolss.exe.
	
	CAUSE
	=====
	
	This behavior can occur because of a conflict with a third-party port monitor.
	
	RESOLUTION
	==========
	
	To resolve this behavior, stop the spooler, remove the conflicting third-party
	port monitor and restart spooler.
	
	MORE INFORMATION
	================
	
	There are two ways to remove the conflicting monitor:
	
	- Rename the driver for the conflicting port monitor. You can find the name of
	  this driver at the following registry key:
	
	  HKEY_LOCAL_MACHINE\CurrentControlSet\Control\Print\Monitors
	
	  NOTE: This is the recommended method.
	
	  -or-
	
	- Back up the Printers key in the registry, and then delete the conflicting
	  port monitor from the registry.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
