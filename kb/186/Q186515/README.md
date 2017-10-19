---
layout: page
title: "Q186515: Do Not Run Terminal Server in Installation Mode"
permalink: /kb/186/Q186515/
---

## Q186515: Do Not Run Terminal Server in Installation Mode

	Article: Q186515
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	Registry" Help topic in Regedit.exe or the "Restoring a Registry Key" Help
	topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	Terminal Server uses a special installation mode for installing applications for
	multi-user use. This mode is activated by installing an application through the
	Control Panel Add/Remove Programs tool or by using the command "Change User
	/Install" at a prompt. If you use this command, you should return to normal
	execution mode by using the command "Change User /Execute" after installing the
	application.
	
	MORE INFORMATION
	================
	
	Do not run the system in install mode (except to install applications). This
	disables user registry and .INI file mappings, which means each user running an
	application would share the same .INI file or registry entry, instead of having
	them on a per-user basis. The Terminal Server computer should always be run in
	execute mode.
	
	If you have an application that runs only in install mode, the application is
	probably looking for a file in the SystemRoot directory rather than the user's
	Windows directory. You can modify the Terminal Server registry so that the
	system will allow the application to use the SystemRoot as its Windows
	directory. To do this, perform the following steps:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Start Registry Editor (Regedt32.exe), and go to the following subkey:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE \Microsoft\Windows NT\CurrentVersion
	     \Terminal Server\Compatibility\Applications\Appname
	
	  Where appname is the name of the application's executable file (for example,
	  if the executable file name for an application is PROG1.EXE, appname would be
	  PROG1),
	
	2. Add the following value:
	
	  Flags (Reg_DWORD): 0x00000400
	
	This "Do not substitute user WINDOWS directory" bit, when set, retains the
	SystemRoot directory for GetWindowsDirectory API calls. The default action if
	this bit is not set is to replace all paths to the WINDOWS directory with the
	path to the user's WINDOWS directory.
	
	For more information, please see the following Microsoft Knowledge Base article:
	
	  Q186499 Terminal Server Registry Settings for Applications
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
