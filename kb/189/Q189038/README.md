---
layout: page
title: "Q189038: DHCP Server Cannot Be Accessed with Dhcpadmin.exe Tool"
permalink: kb/189/Q189038/
---

## Q189038: DHCP Server Cannot Be Accessed with Dhcpadmin.exe Tool

	Article: Q189038
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbFEA kbWinNT400sp4fea
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 SP4 
	- Microsoft Windows NT Server version 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	
	SYMPTOMS
	========
	
	On a computer running Windows NT 4.0 with Service Pack 4, when you start the
	DHCP Manager from a DHCP server running Windows NT 4.0 with Service Pack 3 (for
	example, \\server\c$\WINNT\system32\Dhcpadmn.exe) and then double-click the DHCP
	Server, DHCP Manager fails with the following error:
	
	  Unable to connect to DHCP server at X.X.X.X.
	  Server may be down, or DHCP service not started.
	
	CAUSE
	=====
	
	When you run the Dhcpadmin.exe utility from the %SystemRoot%\System32 folder on
	a server running an earlier Service Pack version, the program will use the
	supporting *.dll files from this network directory instead of the local
	%SystemRoot%\System32 folder, which causes incompatibilities on the system.
	
	RESOLUTION
	==========
	
	For DHCP manager to function properly on the workstation:
	
	1. Install the DCHPadmn.exe utility on the workstation from the Windows NT 4.0
	  Server compact disc, Clients\srvtools\winnt\setup.bat.
	
	2. Reapply Service Pack 4 to the system to update these files.
	
	NOTE: Rename the $ntservicepackuninstall$ folder so that it will not be
	overwritten when reinstalling Service pack 4.
	
	======================================================================
	Keywords          : kbFEA kbWinNT400sp4fea 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp4 kbWinNTSsearch kbWinNTS400sp4 kbWinNTS400search
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
