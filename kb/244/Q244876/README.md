---
layout: page
title: "Q244876: How to Determine if Windows Is Started in Debug Mode"
permalink: kb/244/Q244876/
---

## Q244876: How to Determine if Windows Is Started in Debug Mode

	Article: Q244876
	Product(s): Microsoft Windows NT
	Version(s): 2000,3.1,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	This article describes how to determine if your Windows-based computer is
	started in Debug mode.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To determine if a Windows-based computer is started in Debug mode, verify the
	computer's startup options in the registry:
	
	1. Start Registry Editor.
	
	2. Locate the following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control
	
	3. In the Control key, locate the SystemStartOptions string value. If the
	  computer is in Debug mode, one or more of the debug switches are displayed in
	  the string (for example, /debug, /crashdebug, /debugport, or /baudrate). Any
	  combination of one or more of these switches indicates that the computer is
	  currently in Debug mode. If the computer was started with no options
	  specified, this value is blank.
	
	NOTE: This registry value is updated every time the computer starts, and contains
	the options specific for your current boot selection in the Boot.ini file.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q102987 REG: CurrentControlSet, PART 1
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbwin2000ServSearch kbwin2000Search kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search
	Version           : :2000,3.1,3.5,3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
