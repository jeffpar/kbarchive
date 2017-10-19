---
layout: page
title: "Q238458: How to Remove the TimeServ Utility"
permalink: /kb/238/Q238458/
---

## Q238458: How to Remove the TimeServ Utility

	Article: Q238458
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	This article describes how to remove the TimeServ service from your computer.
	TimeServ is a utility located in the Windows NT 4.0 Resource Kit.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	Removing the following registry keys removes TimeServ from your computer:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\ControlSet001\Services\EventLog\Application\TimeServ
	
	  HKEY_LOCAL_MACHINE\SYSTEM\ControlSet001\Services\TimeServ
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Serrvices\EventLog\Applications\TimeServ
	
	To verify that TimeServ is removed, run the Services tool in Control Panel. Note
	that the service is disabled and unavailable. After you restart the computer,
	the service is no longer listed in the Services tool.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
