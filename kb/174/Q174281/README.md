---
layout: page
title: "Q174281: WinNT Computers with ZAK Tools Have a Blank Desktop"
permalink: /kb/174/Q174281/
---

## Q174281: WinNT Computers with ZAK Tools Have a Blank Desktop

	Article: Q174281
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0;Win95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	Registry" Help topic in Regedit.exe or the "Restoring a Registry Key" Help
	topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	Your computer running Windows NT displays a blank desktop or user interface.
	
	CAUSE
	=====
	
	A blank desktop or user interface on a computer running Windows NT is caused by
	one of two "Zero Administration Kit for Windows 95" executable files. These
	executable files are Runshell.exe and Rsreset.exe. These executable files are
	found in the setup files and are installed under the ZAK95\Setup\Win95 directory
	as a part of the server-base installation point.
	
	Both of the above executable files will rewrite the registry on a computer
	running Windows NT Server or Workstation. The registry change occurs on the
	computer from which the executable is run (or double-clicked). It changes the
	default shell to Runshell.exe that executes a blank desktop (user interface).
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	To resolve this problem, edit the registry by performing the following steps:
	
	1. Start Registry Editor (Regedt32.exe), and go to the following subkey:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT
	  \CurrentVersion\Winlogon
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	2. Edit the Shell string. Replace the string value of Runshell.exe with the
	  correct shell executable file listed below:
	
	  Windows NT 4.0 shell executable: EXPLORER.EXE
	  Windows NT 3.51 shell executable: PROGMAN.EXE
	
	3. Quit Registry Editor and restart your computer.
	
	Additional query words: Win95 ZAK Zero Administration Kit screen
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search kbWin95search kbZNotKeyword3
	Version           : WinNT:3.51,4.0;Win95
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
