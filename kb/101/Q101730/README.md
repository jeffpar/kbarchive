---
layout: page
title: "Q101730: Deleting COM Ports from a Windows NT Installation"
permalink: kb/101/Q101730/
---

## Q101730: Deleting COM Ports from a Windows NT Installation

	Article: Q101730
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	Microsoft Windows NT and Windows NT Advanced Server support up to 256 COM
	ports on each workstation. Use the Ports application in the Windows NT
	Control Panel to add ports. However, Windows NT does not provide a
	graphical interface to remove ports after adding them. To remove a COM
	port, you must use the Registry Editor utility.
	
	Perform the following five steps to remove a COM port from a Windows NT or
	Windows NT Advanced Server workstation:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them.
	Microsoft cannot guarantee that any problems resulting from the use of
	Registry Editor can be solved. Use this tool at your own risk.
	
	1. Start the Registry Editor (REGEDT32.EXE)
	
	2. Find the following key:
	
	  \HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services \Serial\Parameters
	
	3. The Parameters key has several subkeys such as Serial10000, Serial10001, and
	  so on. Each of these subkeys corresponds to a COM port. To determine the COM
	  port to which each applies, check the corresponding DosDevices value.
	
	4. After you determine the COM port to remove, choose the appropriate
	  Serial<xxxxx> subkey and choose Delete from the Edit menu.
	
	5. Close the Registry Editor, and then shut down and restart your system.
	
	NOTE: In Windows NT 3.5 you can delete COM ports from Control Panel Ports.
	
	Additional query words: prodnt communications FIFO modem
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	
