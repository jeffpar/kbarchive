---
layout: page
title: "Q220159: Disabling the MSDOS and WOWEXEC Subsystems on Terminal Server"
permalink: kb/220/Q220159/
---

## Q220159: Disabling the MSDOS and WOWEXEC Subsystems on Terminal Server

	Article: Q220159
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	Performance issues may occur on a Terminal Server computer running 16-bit or
	MS-DOS programs. Because multiple users can start sessions on a Terminal Server
	computer at the same time, it is possible that the System Administrator may not
	be aware of 16-bit programs or MS-DOS programs running at the same time. The
	System Administrator can disable the NTVDM and WOWEXEC subsystems, which keep
	the programs from running, as well as generate an error message that identifies
	the programs.
	
	NOTE: If logon scripts are used, please change the file extension from *.BAT to
	*. CMD. This allows the scripts to run without starting the NTVDM subsystem.
	
	MORE INFORMATION
	================
	
	You can disable only the 16-bit Windows On Windows subsystem, or both the
	Windows On Windows and the Windows NT Virtual DOS Machine (NTVDM) subsystems,
	however, you cannot disable just the Windows On Windows subsystem by modifying
	the registry.
	
	To modify the 16-bit Windows On Windows subsystem:
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the CMDLINE (for MS-DOS applications) and WOWCMDLINE (for 16-bit
	  Windows applications) values under the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\WOW
	
	3. Adding a character to the beginning of the string will keep the subsystem
	  from running, but it will keep the old value in tact to easily revert back to
	  the old setting.
	
	4. Quit Registry Editor. These registry changes are dynamic and it is not
	  necessary to restart.
	
	Keep Task Manager running to help determine the current state of the system. If
	an NTVDM is running, you may wish to stop the NTVDM process currently running to
	ensure that the registry changes are reflected when creating a new NTVDM.
	
	This keeps 16-bit and MS-DOS programs from running. Also, an error message may be
	displayed giving file and path information for the program you are trying to
	run.
	
	
	The following are examples of the messages that are displayed:
	
	  MSDOS:
	  Windows cannot find edit.com
	  This program is needed for opening files of type "MS-DOS application"
	
	  Windows:
	  Cannot find d:\WTSRV\system32\sysedit32.exe. Windows needs this file to run
	  d:\WTSRV\system32\sysedit32.exe.
	
	Additional query words: Phrase: cannot find
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
