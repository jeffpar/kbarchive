---
layout: page
title: "Q249921: Terminal Server Programs Do Not Run, Files32.vxd Cannot Be Found"
permalink: kb/249/Q249921/
---

## Q249921: Terminal Server Programs Do Not Run, Files32.vxd Cannot Be Found

	Article: Q249921
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:95; winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	- Microsoft Windows 98 Second Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When clients of Terminal Server attempt to run any program, they may be unable
	to do so and they may receive an error message stating that the system cannot
	find the Files32.vxd file.
	
	CAUSE
	=====
	
	This behavior can occur because of a virus named Pretty Park, which inserts the
	'Files32.vxd' statement at the beginning of the string value of the following
	registry key:
	
	  HKEY_LOCAL_MACHINE\Software\Classes\Exefile\Shell\Open\Command
	
	RESOLUTION
	==========
	
	To resolve this behavior, remove the 'files32.vxd' statement from the beginning
	of the registry string value on the computer running Terminal Server. Follow
	these steps:
	
	1. Start Registry Editor (Regedt32).
	
	2. In the registry, locate the following key:
	
	HKEY_LOCAL_MACHINE\Software\Classes\Exefile\Shell\Open\Command
	
	3. In the right pane of the Registry Editor window, double-click the following
	  unnamed registry string value:
	
	<NO NAME>: REG_SZ: "files32.vxd" "%1"%*
	
	4. In the String box, remove the files32.vxd statement from the string. The
	  correct string for this key is:
	
	"%1"%*
	
	5. Click OK, and then quit Registry Editor.
	
	6. Restart the Terminal Server computer.
	
	NOTE: When you run the Regedit.exe file, you may experience the symptoms
	described earlier in this article. To work around this issue, rename the
	Regedit.exe file to Regedit.com, and then follow the instructions in this
	article. After you are finished, rename the Regedit.com file back to
	Regedit.exe.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch kbWin95search kbWin98search kbWin98SEsearch kbZNotKeyword3 kbWin98 kbWin98SE
	Version           : WINDOWS:95; winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
