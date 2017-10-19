---
layout: page
title: "Q234530: Unable to Change the Specified Driver for a Network Printer"
permalink: /kb/234/Q234530/
---

## Q234530: Unable to Change the Specified Driver for a Network Printer

	Article: Q234530
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you try to change the specified driver on the General tab in a network
	printer's properties, the following error message may be displayed:
	
	  Unable to change to the specified driver. Original settings will be restored.
	
	Additionally, when you print a test page and close the printer's properties, the
	following error message may be displayed:
	
	  Printer settings could not be saved. The printer driver is unknown.
	
	CAUSE
	=====
	
	This behavior occurs when Lanman Print Services is listed after third-party
	print providers in the Order value in the following registry key:
	
	  HKEY_LOCAL_MACHINE/SYSTEM/CurrentControlSet/Control/Print/Providers
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this issue, move Lanman Print Services to the top of the list in the
	Order value in the following registry key:
	
	  HKEY_LOCAL_MACHINE/SYSTEM/CurrentControlSet/Control/Print/Providers
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
