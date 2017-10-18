---
layout: page
title: "Q246766: Executable File Does Not Run from Command Prompt in Windows NT"
permalink: kb/246/Q246766/
---

## Q246766: Executable File Does Not Run from Command Prompt in Windows NT

	Article: Q246766
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you attempt to run an executable file or a batch file from the command
	prompt on a computer running Microsoft Windows NT Server 4.0 or Windows NT
	Workstation 4.0, the file may not run. When you then attempt to run the
	executable file from the Autoexec.bat file, using the %pathext% variable, the
	file still may not run.
	
	CAUSE
	=====
	
	This behavior can occur when a value is missing from the following registry
	key:
	
	HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Session
	Manager\Environment
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this issue, add the pathext value to the Environment key in the
	registry:
	
	1. Start Registry Editor (Regedt32.exe) and locate the following key:
	
	HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Session
	Manager\Environment
	
	2. Add the value to the registry key:
	
	  a. On the Edit menu, click Add Value.
	
	  b. In the Value Name box, type the following:
	
	  PATHEXT=.COM;.EXE;.CMD;.BAT
	
	     NOTE: Add any extensions that need to be executable.
	
	  c. In the Data Type list, click REG_SZ, and then click OK.
	
	3. Quit Registry Editor, and then restart the computer.
	
	Additional query words: com exe bat
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
