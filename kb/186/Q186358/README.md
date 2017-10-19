---
layout: page
title: "Q186358: How to Enable TAPI 2.1 in Windows NT 4.0 with Service Pack 4"
permalink: /kb/186/Q186358/
---

## Q186358: How to Enable TAPI 2.1 in Windows NT 4.0 with Service Pack 4

	Article: Q186358
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbFEA kbWinNT400sp4fea
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 SP4 
	- Microsoft Windows NT Server version 4.0 SP4 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT 4.0 Service Pack 4 includes an updated version of Telephony
	application programming interface (TAPI) 2.1. The TAPI 2.1 files are
	automatically installed on your computer when you apply Windows NT 4.0 Service
	Pack 4.
	
	MORE INFORMATION
	================
	
	After you apply Windows NT 4.0 Service Pack 4, perform the following steps to
	enable Windows NT Telephony Server:
	
	1. Log on to the server as an administrator.
	
	2. Create or configure a user account with administrator privileges. This will
	  be the user account in which the telephony service process (TAPISRV) will
	  run.
	
	3. Enter the following command at a command prompt:
	
	  tcmsetup.exe /s domain\loginID password
	
	  where the domain, loginID, and password refer to the user account configured
	  above.
	
	  After executing this command, you should receive a message stating that the
	  server was set up correctly.
	
	4. Shut down and restart the server.
	
	After you apply Windows NT 4.0 Service Pack 4, perform the following steps to
	enable Windows NT Telephony Clients:
	
	1. Log on to the client computer as an administrator.
	
	2. Enter the following command at a command prompt:
	
	  tcmsetup /c RemoteServerName
	
	  where RemoteServerName is the telephony server's computer name.
	
	Additional query words: 4.00 sp4
	======================================================================
	Keywords          : kbFEA kbWinNT400sp4fea 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp4 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp4 kbWinNTS400sp4 kbWinNTS400search
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbinfo
	
	=============================================================================
	
