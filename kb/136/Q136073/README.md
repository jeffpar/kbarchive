---
layout: page
title: "Q136073: Logon Scripts for Multiple Clients"
permalink: kb/136/Q136073/
---

## Q136073: Logon Scripts for Multiple Clients

	Article: Q136073
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:3.11,95; winnt:3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	- Microsoft LAN Manager, version 2.2c 
	- Microsoft Windows for Workgroups version 3.11 
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To have a logon script batch file call another batch file, you have to write it
	specifically for the type of client logging on to the network. This article
	gives an example of how to write such a batch file.
	
	MORE INFORMATION
	================
	
	Windows NT is currently the only client that uses a Universal Naming Convention
	(UNC) connection for the logon script. If your Windows NT logon script contains
	the commands NET USE and PAUSE, you see a connection to:
	
	  \\LogonServer\NETLOGON
	
	in the Windows NT logon command prompt window.
	
	By design Windows 98, Windows 95, Windows for Workgroups, and LAN Manager connect
	to the NETLOGON share using the Z: drive. If you use any Windows or LAN Manager
	version and your logon script contains the commands NET USE and PAUSE, a
	connection to drive Z: for LogonServer\NETLOGON can be seen in the logon command
	prompt window.
	
	To create logon script batch file that will call another batch file, and will be
	used at Windows NT workstations as well as Windows for Workgroup workstations,
	write the batch file so it can handle the difference between Windows NT and
	other clients. The following example batch file could be used as a logon script
	that calls a batch file from the NETLOGON share.
	
	  if "%OS%" == "Windows_NT" goto NT_OS
	  CALL z:\other.bat
	  EXIT
	  :NT_OS
	  CALL other.bat
	  EXIT
	
	Additional query words: 2.2c prodnt operating system login
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search kbAudDeveloper kbWin95search kbWin98search kbLanManSearch kbWFWSearch kbZNotKeyword3 kbWFW311 kbWin98 kbLanMan220c
	Version           : WINDOWS:3.11,95; winnt:3.51
	
	=============================================================================
	
